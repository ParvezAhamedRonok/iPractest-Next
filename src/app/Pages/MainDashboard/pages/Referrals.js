"use client";
import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { AAMARPAY_GET_USER_DATA_FROM_DATABASE, PAYPAL_GET_USER_DATA_FROM_DATABASE, GET_REFERRALS_USERS_FROM_DATABASE } from "../../../../assets/URL's/AllUrl";
import ReferImg from "../../../../assets/images/Dashboard-Images/ReferImg.jpeg"
import { FaCopy } from "react-icons/fa";
import Image from 'next/image';

//end of importing..........



// let MainCount = 0;
export default function Referrals() {
    //all localstorage data saver states...
    const [userLoginName, setUserLoginName] = useState("");
    const [userLoginToken, setUserloginToken] = useState("");
    const [userLoginEmail, setUserEmail] = useState("")
    const [userCountry, setuserCountry] = useState("");
    const [googleLoginToken, setGoogleLoginToken] = useState("");

    //other states...
    const [referedUserList, setReferedUser] = useState([]);
    const [changeUI, setChangeUI] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);


    //useEffect uses....
    useEffect(() => {
        setUserLoginName(localStorage.getItem("userName"));
        setUserloginToken(localStorage.getItem("loginTOken"))
        setUserEmail(localStorage.getItem('userEmail'));
        setuserCountry(userCountry);
        setGoogleLoginToken(localStorage.getItem("GoogleFacebookToken"));


    }, []);


    useEffect(() => {

        Axios({
            method: "get",
            url: GET_REFERRALS_USERS_FROM_DATABASE + localStorage.getItem("userEmail"),
            // url: "http://localhost:8080/api/user/Get-Allusers-WhoAre-Refered-By-Someone/" + "abc@gmail.com",

        }).then((res) => {
            console.log(res);
            console.log(res.data.data);
            // setReferedUser(res.data.data);
            if (!res.data.data[0]) {
                setChangeUI("none")
            }
            checkUserIfTheyPaid(res.data.data);
        }).catch((err) => {
            setChangeUI("none")
            console.log(err)
        })


    }, [])













    const checkUserIfTheyPaid = (users) => {
        //check aamerPay that user have the payment r not
        users.map((users) => {

            setTimeout(() => {
                Axios({
                    method: "get",
                    url: AAMARPAY_GET_USER_DATA_FROM_DATABASE + users.userEmail,
                    headers: {
                        "Authorization": `Bearer ${userLoginToken}`,
                        'Content-Type': 'application/json'
                    }
                })
                    .then((res) => {
                        console.log(res.data.data);
                        if (res.data.data[0]) {
                            let obj = {
                                referedBy: users.referedBy,
                                userName: users.userName,
                                userEmail: users.userEmail,
                                paid: userCountry == "Bangladesh" ? 50 : .50
                            }
                            friendReferralFun(users, obj);
                            userCountry == "Bangladesh" ? setTotalAmount((pre) => pre + 50) : setTotalAmount((pre) => pre + .50)

                        } else {
                            // alert("no data in bd")
                            Axios({
                                method: "get",
                                url: PAYPAL_GET_USER_DATA_FROM_DATABASE + users.userEmail,
                                headers: {
                                    "Authorization": `Bearer ${userLoginToken}`,
                                    'Content-Type': 'application/json'
                                }
                            }).then((res) => {
                                console.log(res.data);
                                if (res.data.data[0]) {
                                    res.data.data.map((e) => {
                                        if (e.orderId) {
                                            let obj = {
                                                referedBy: users.referedBy,
                                                userName: users.userName,
                                                userEmail: users.userEmail,
                                                paid: userCountry == "Bangladesh" ? 50 : .50
                                            }
                                            friendReferralFun(users, obj);
                                            userCountry == "Bangladesh" ? setTotalAmount((pre) => pre + 50) : setTotalAmount((pre) => pre + .50)
                                        }
                                        // else {
                                        //     setReferedUser(users)
                                        // }
                                    })
                                } else {
                                    // alert("no daya in paypal")
                                    friendReferralFun(users, users)
                                }

                            })
                                .catch((error) => {
                                    console.log(error);
                                    friendReferralFun(users, users)
                                })
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        friendReferralFun(users, users)
                    })
            }, 2000);
        })

    }


    const friendReferralFun = (users, mainObj) => {

        Axios({
            method: "get",
            url: GET_REFERRALS_USERS_FROM_DATABASE + users.userEmail,
            // url: "http://localhost:8080/api/user/Get-Allusers-WhoAre-Refered-By-Someone/" + "abc@gmail.com",

        }).then((res) => {
            console.log(res);
            console.log(res.data.data);
            // setReferedUser(res.data.data);
            FriendsCheckStatusPaid(res.data.data, mainObj);
        }).catch((err) => {
            // setChangeUI("none")
            console.log(err)
        })

    }


    const FriendsCheckStatusPaid = (users, mainObj) => {
        console.log("friend-Function---------");
        let count = 0;
        //check aamerPay that user have the payment r not
        users.map((users) => {
            Axios({
                method: "get",
                url: AAMARPAY_GET_USER_DATA_FROM_DATABASE + users.userEmail,
                headers: {
                    "Authorization": `Bearer ${userLoginToken}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    console.log(res.data.data);
                    if (res.data.data[0]) {
                        count = userCountry == "Bangladesh" ? count + 5 : count + .05
                    } else {
                        // alert("no data in bd")
                        Axios({
                            method: "get",
                            url: PAYPAL_GET_USER_DATA_FROM_DATABASE + users.userEmail,
                            headers: {
                                "Authorization": `Bearer ${userLoginToken}`,
                                'Content-Type': 'application/json'
                            }
                        }).then((res) => {
                            console.log(res.data);
                            if (res.data.data[0]) {
                                res.data.data.map((e) => {
                                    if (e.orderId) {
                                        count = userCountry == "Bangladesh" ? count + 5 : count + .05
                                    }

                                })
                            }

                        })
                            .catch((error) => {
                                console.log(error);

                            })
                    }
                })
                .catch((error) => {
                    console.log(error);

                })
        });

        setTimeout(() => {
            setReferedUser(prevCoords => {
                return [
                    ...prevCoords,
                    count != 0 ? Object.assign(mainObj, { extra: count }) : mainObj
                    // Object.assign(obj, {main: "value3"}),
                ]
            })
            setTotalAmount((pre) => pre + (count != 0 && count));
            setChangeUI("showContent")
            console.log(totalAmount)
        }, 1000);

    }























    const copyToClipBoard = async () => {
        await navigator.clipboard.writeText(`https://ipractest.com/?ID=${userLoginEmail}`);
        alert('Text copied');
    }
    console.log(totalAmount)
    console.log(referedUserList)
    // console.log(checkBDPaid)
    // console.log(checkOtherPaid)
    return (
        <div className='w-full p-2 bg-transparent'>
            <h3 className='text-center mb-1'>Your Referral Link</h3>
            <div className='flex justify-center align-middle w-full'>
                <div className='w-full flex justify-between  sm:w-[500px] overflow-auto p-1 bg-green-400 rounded  font-bold text-center'>
                    <p className='text-white m-auto'>{
                        `https://ipractest.com/?ID=${userLoginEmail}`
                    }</p>
                    <button className='rounded grid p-1 h-[33px] bg-white border-1 border-gray-400 shadow-md ml-auto'
                        onClick={copyToClipBoard}
                    >
                        <FaCopy className='font-bold text-xl text-black ' />
                    </button>
                </div>
            </div>


            {/* Spriner for Reading  when data is loading ---------         */}
            {
                changeUI == "" && (<>
                    <div className='flex w-full justify-start align-middle p-3'>
                        <div id='theElementId' className=' w-full h-[100vh] sm:h-[420px] overflow-auto  rounded'>
                            <div className='w-full h-[430px] flex justify-center align-middle'>
                                <div
                                    className="m-auto inline-block h-[100px] w-[100px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_2.5s_linear_infinite]"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }



            {
                changeUI == "showContent" && (<>
                    <div className='flex w-full justify-start align-middle p-3'>
                        <div id='theElementId' className=' w-full h-[100vh] sm:h-[420px] overflow-auto  rounded'>

                            {userCountry == "Bangladesh" ? (
                                <h6 className='w-full text-end translate-x-[-10px] font-bold text-black'>Minimum withdrawal <span className='text-blue-600'>
                                    100 taka</span></h6>
                            ) : (
                                <h6 className='w-full text-end translate-x-[-10px] font-bold text-black'>Minimum withdrawal <span className='text-blue-600'>
                                    10$</span></h6>
                            )}
                            <div className="container mx-auto p-2">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead className='bg-blue-200'>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-[11px] sm:text-[15px] font-medium text-gray-500 uppercase tracking-wider border-b">User No:</th>
                                            <th className="px-6 py-3 text-center text-[11px] sm:text-[15px]  font-medium text-gray-500 uppercase tracking-wider border-b">User Name & Email's</th>
                                            <th className="px-6 py-3 text-[11px] sm:text-[15px] font-medium text-gray-500 uppercase tracking-wider border-b text-end">Purchase</th>
                                            <th className="px-6 py-3 text-[11px] sm:text-[15px] font-medium text-gray-500 uppercase tracking-wider border-b text-end">
                                                {userCountry == "Bangladesh" ? "Amount(৳)" : "Amount($)"}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            referedUserList.map((items, index) => {
                                                return <tr key={index}>
                                                    <td className="px-6 py-1 whitespace-nowrap">
                                                        <span className='text-xl underline font-bold'>{index + 1}</span>
                                                    </td>
                                                    <td className="px-6 py-1 whitespace-nowrap text-center">
                                                        {items.userName} <br />
                                                        <span className='text-[8px] translate-y-[-10px]'> {items.userEmail}</span>
                                                    </td>

                                                    <td className="px-6  py-1 whitespace-nowrap text-end">
                                                        {
                                                            items.paid ? (<Image src={ReferImg} className='w-[25px] mr-3 sm:w-[30] ml-auto' />) : <span className='text-xl font-bold text-red-600 mr-4'>X</span>
                                                        }


                                                    </td>
                                                    <td className="px-6 flex gap-2 py-1 translate-y-[9 px]     whitespace-nowrap text-end">
                                                        {
                                                            items.paid ? (<span className='ml-auto text-xl font-bold text-green-600'>{items.paid}</span>) : <span className='ml-auto text-xl font-bold text-green-600'>0</span>
                                                        }
                                                        {
                                                            items.extra && <p className='font-bold text-xl text-green-600'>+ {items.extra}</p>
                                                        }
                                                    </td>

                                                </tr>
                                            })
                                        }
                                    </tbody>

                                </table>
                                {
                                    totalAmount != 0 && <div className='w-full grid justify-end'>
                                        <p className='ml-auto w-full text-xl font-bold'>
                                            Total amount = <span className='text-2xl font-bold text-blue-700'>{totalAmount}{userCountry == "Bangladesh" ? "Tk" : "$"}</span>
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </>)
            }


            {
                changeUI == "none" && (<div className='w-full h-[50vh] flex justify-center align-middle'>
                    <div className='m-auto'>
                        <p>
                            You have No <span className='text-xl text-red-600'>one</span> in you Referral
                        </p>
                    </div>
                </div>)
            }
        </div>
    )
}
