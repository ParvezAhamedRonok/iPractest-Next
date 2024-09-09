"use client"
import React, { useEffect, useState } from 'react';
import "../../LoginPage/SignUpPage.css"
import { useRouter } from 'next/navigation';
import Axios from 'axios';
import Image from 'next/image';
// import Timer from "../WritingAllTests/Writing-All-Pages/Writing-Importand/Pages/Timer";
import { useStateContext } from "../../../../contexts/ContextProvider";
import { AiOutlineLogin } from "react-icons/ai";
import NotPaidImg from "../../../../assets/images/Speaking-Images/sadGifs.gif"
// end importing--->

function TellusReason() {
    const { userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();
    const history = useRouter();
    //localstorages items stored by the help of useeffect below ------
    const [userEmail, setuseremail] = useState("");
    const [userLoginToken, setuserToken] = useState("")
    const [countryName, setuserCountry] = useState("");
    const [userProductID, setuserProductID] = useState("")
    const [DeviceNumber, setDeviceNumber] = useState("")


    //useState items------
    const [getUserReasons, setGetUserReasons] = useState("");
    const [showReasonPage, setShowReasonPage] = useState(false);
    const [reason1, setReason1] = useState(false);
    const [reason2, setReason2] = useState(false);
    const [reason3, setReason3] = useState(false);
    const [reason4, setReason4] = useState(false);
    const [reason5, setReason5] = useState(false);

    const [reason5UserText, setReason5UserText] = useState("")

    const [errorMsg, setErrorMsg] = useState("")


    useEffect(() => {
        // storing all localstorage data to variables....
        setuseremail(localStorage.getItem('userEmail') && localStorage.getItem('userEmail'));
        setuserToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"))
        setuserCountry(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"))
        setDeviceNumber(localStorage.getItem('DeviceNo') && localStorage.getItem('DeviceNo'))
        setuserProductID(localStorage.getItem("productID") && localStorage.getItem("productID"))


        // if (history.goBack()) {
        //     localStorage.removeItem("productID")
        // }
        Axios({
            method: "get",
            // url: 'http://localhost:8080/api/user/getSpecificUserReasonDetail/' + userEmail,
            url: 'https://node-js-express-login-example.onrender.com/api/user/getSpecificUserReasonDetail/' + userEmail,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.data);
                if (!res.data.data[0]) {
                    setGetUserReasons("thereHasNothing")
                } else if (res.data.data[0] && res.data.data.length < 3) {
                    setGetUserReasons("HasSomething")
                }


            })
            .catch((e) => { console.log(e) });



    }, [])

    // useEffect(() => {
    //     //for showing this page by pass those conditions below-----------------------            
    //     showReasonFunc()
    // }, [])


    // const showReasonFunc = () => {
    //     setTimeout(() => {
    //         if (localStorage.getItem("productID") && getUserReasons != "") {
    //             alert("condition--1")
    //             console.log("condition-1")
    //             if (!bdPaidStatus || !otherPaidStatus) {
    //                 alert("condition--2")
    //                 setShowReasonPage(true);
    //             }
    //         }
    //     }, 2000);
    // }



    // console.log(getUserReasons)

    // const handleChnage = (x) => {
    //     const fullName = x.target.name;
    //     const Values = x.target.value;
    //     setUsers((previous) => {
    //         return { ...previous, [fullName]: Values }
    //     })

    // }





    const handleSubmit = (x) => {
        x.preventDefault();
        let users;
        if (countryName == "Bangladesh") {
            users = {
                userEmail: userEmail,
                moduleName: userProductID,
                reason1: reason1 ? "Speaking module এর টেস্ট গুলার সংখ্যা অনেক কম।" : "",
                reason2: reason2 ? "টাকার পরিমান তুলনামুলক বেশি।" : "",
                reason3: reason3 ? "এই Website এর উপর আস্থা নাই।" : "",
                reason4: reason4 ? "টেস্ট গুলার ফলাফল আরও উন্নত করতে হবে।" : "",
                reason5: reason5 ? "অন্যান্য কারন " + "(Reason):" + reason5UserText : ""
            }
        } else {
            users = {
                userEmail: userEmail,
                moduleName: userProductID,
                reason1: reason1 ? "Speaking Module's tests are very low." : "",
                reason2: reason2 ? "   The amount of money is relatively high." : "",
                reason3: reason3 ? " There is no Trust in this website." : "",
                reason4: reason4 ? " The results of the tests need to be improved." : "",
                reason5: reason5 ? "  Other Reasons." + "(Reason):" + reason5UserText : ""
            }
        }


        if (reason1 != "" || reason2 != "" || reason3 != "" || reason4 != "" || reason5 != "") {
            Axios({
                method: "post",
                // url: "http://localhost:8080/api/user/PostToStoreUsersReasonS",
                url: "https://node-js-express-login-example.onrender.com/api/user/PostToStoreUsersReasonS",
                data: users,
            })
                .then((res) => {
                    console.log(res);
                    setGetUserReasons("")
                    localStorage.removeItem("productID");
                    alert("Thank You for your valueable comment.")

                })
                .catch((e) => {
                    console.log(e);
                    alert("Opps! Sorry there has network erro. Your request has not been sent")
                })
        } else {
            // alert("none")
            setErrorMsg("Please Select One")
        }
    }


    return (
        <>
            {
                userProductID && getUserReasons != "" && (
                    <>
                        {
                            (userPaymentStatusCheck == "") && (
                                <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                                    <div className="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
                                        <div className="sm:mx-auto sm:w-full sm:max-w-md pt-[40px] ">
                                            <div className="backGroundColorSetCss py-2 px-4 shadow sm:rounded-lg sm:px-10 relative">
                                                <div className='absolute top-3 text-center font-bold right-4 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300 z-[10000]'
                                                    onClick={() => {
                                                        // setShowReasonPage(false)
                                                        setGetUserReasons("")
                                                        localStorage.removeItem("productID");
                                                    }}
                                                >
                                                    X
                                                </div>

                                                <div className='absolute top-2 left-2'>
                                                    {
                                                        errorMsg && (<p className='text-red-500 text-[12px]'>{errorMsg}</p>)
                                                    }
                                                </div>

                                                <div className='absolute top-0 left-0 right-0 z-[1000]'>
                                                    <div className='w-full flex justify-center align-bottom'>
                                                        <div className='p-3 w-[175px] h-[160px] bg-gray-50 rounded-[50%] translate-y-[-50px] flex justify-center align-bottom'>
                                                            <Image src={NotPaidImg} alt="this is for not paid image-1" className='w-[110px] rounded-t-[20px]' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <form onSubmit={handleSubmit}>
                                                    <div className="grid items-center justify-start pt-[105px]">
                                                        <strong className='text-[16px]'>
                                                            {
                                                                countryName == "Bangladesh" ? <>আমরা খুবই দুঃখিত যে আপনি না কেনার সিদ্ধান্ত নিয়েছেন 😔😔 <br />
                                                                    আমরা কী জানতে পারি এটার কারণ কী?</> : <>We are very sorry that you decided not to buy 😔😔 <br />
                                                                    Can we know the reason for this please?</>
                                                            }


                                                        </strong> <br />
                                                        <p className="simple-reg-terms">
                                                            <div className=' flex text-[8px] sm:text-[13px]'>
                                                                <span className="checkbox">
                                                                    <label className="container flex jus gap-2" >
                                                                        <input title="Please tick" name="" type="checkbox"
                                                                            defaultChecked={reason1} onClick={() => { setReason1(!reason1) }}

                                                                            className="required translate-y-[2px]" id="js-accept-terms" />
                                                                        <div className="checkmark w-[1.6rem] sm:w-[1.3rem]"></div>
                                                                        <span className='text-[14px] font-bold translate-y-[-2px]'>
                                                                            {
                                                                                countryName == "Bangladesh" ? <>Speaking module এর টেস্ট গুলার সংখ্যা অনেক কম।</> : <> Speaking Module's tests are very low.</>
                                                                            }


                                                                        </span>
                                                                    </label>
                                                                </span>
                                                            </div>
                                                        </p>

                                                        <p className="simple-reg-terms">
                                                            <div className=' flex text-[8px] sm:text-[13px]'>
                                                                <span className="checkbox">
                                                                    <label className="container flex gap-2" >
                                                                        <input title="Please tick" name="" type="checkbox"
                                                                            defaultChecked={reason2} onClick={() => { setReason2(!reason2) }}
                                                                            className="required translate-y-[2px]" id="js-accept-terms" />
                                                                        <div className="checkmark"></div>
                                                                        <span className='text-[14px] font-bold translate-y-[-2px]'>
                                                                            {
                                                                                countryName == "Bangladesh" ? <>টাকার পরিমান তুলনামুলক বেশি।</> : <>  The amount of money is relatively high.</>
                                                                            }

                                                                        </span>
                                                                    </label>
                                                                </span>
                                                            </div>
                                                        </p>
                                                        <p className="simple-reg-terms">
                                                            <div className=' flex text-[8px] sm:text-[13px]'>
                                                                <span className="checkbox">
                                                                    <label className="container flex gap-2" >
                                                                        <input title="Please tick" name="" type="checkbox"
                                                                            defaultChecked={reason3} onClick={() => { setReason3(!reason3) }}
                                                                            className="required translate-y-[2px]" id="js-accept-terms" />
                                                                        <div className="checkmark"></div>
                                                                        <span className='text-[14px] font-bold translate-y-[-2px]'>
                                                                            {
                                                                                countryName == "Bangladesh" ? <>
                                                                                    এই Website এর উপর আস্থা নাই।
                                                                                </> : <>
                                                                                    There is no Trust in this website.
                                                                                </>
                                                                            }

                                                                        </span>
                                                                    </label>
                                                                </span>
                                                            </div>
                                                        </p>
                                                        <p className="simple-reg-terms">
                                                            <div className=' flex text-[8px] sm:text-[13px]'>
                                                                <span className="checkbox">
                                                                    <label className="container flex gap-2" >
                                                                        <input title="Please tick" name="" type="checkbox"
                                                                            defaultChecked={reason4} onClick={() => { setReason4(!reason4) }}
                                                                            className="required translate-y-[2px]" id="js-accept-terms" />
                                                                        <div className="checkmark"></div>
                                                                        <span className='text-[14px] font-bold translate-y-[-2px]'>
                                                                            {
                                                                                countryName == "Bangladesh" ? <>
                                                                                    টেস্ট গুলার ফলাফল আরও উন্নত করতে হবে।
                                                                                </> : <>
                                                                                    The results of the tests need to be improved.
                                                                                </>
                                                                            }
                                                                        </span>
                                                                    </label>
                                                                </span>
                                                            </div>
                                                        </p>
                                                        <p className="simple-reg-terms">
                                                            <div className=' flex text-[8px] sm:text-[13px]'>
                                                                <span className="checkbox">
                                                                    <label className="container flex gap-2" >
                                                                        <input title="Please tick" name="" type="checkbox"
                                                                            defaultChecked={reason5} onClick={() => { setReason5(!reason5) }}
                                                                            className="required translate-y-[2px]" id="js-accept-terms" />
                                                                        <div className="checkmark"></div>
                                                                        <span className='text-[14px] font-bold translate-y-[-2px]'>
                                                                            {
                                                                                countryName == "Bangladesh" ? <>
                                                                                    অন্যান্য কারন
                                                                                </> : <>
                                                                                    Other Reason
                                                                                </>
                                                                            }
                                                                        </span>
                                                                    </label>
                                                                </span>
                                                            </div>
                                                        </p>

                                                        {
                                                            reason5 && <div className='w-full'>
                                                                <textarea type="text" onChange={(userTest) => { setReason5UserText(userTest.target.value) }}
                                                                    value={reason5UserText}
                                                                    className='w-full p-1 rounded-[6px] border-1 border-gray-300 bg-sky-50'
                                                                    placeholder='please tell us..'
                                                                />
                                                            </div>
                                                        }
                                                    </div>

                                                    <div className="mt-3 pb-[36px]">
                                                        <span className="block w-full rounded-md shadow-sm">
                                                            <button type="submit" className="w-full flex gap-1 justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[10px] text-white bg-[#6f11f5] hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                                                <AiOutlineLogin className='text-xl' />  Submit
                                                            </button>
                                                        </span>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default TellusReason;