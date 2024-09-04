"use client"
import React, { useEffect, useState } from 'react'
import "./Style.css"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ClockLoader } from "react-spinners";
import logo from "../../../../assets/images/Practestlogo.png";
import { MdOutlineCancel } from "react-icons/md";
import Select from 'react-dropdown-select'
import { options } from "./Subjects.js"
import { useStateContext } from "../../../../contexts/ContextProvider";
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from '../LoginPage/SignUpPage';
import Image from 'next/image';
import CountrySelect from '../LoginPage/CountrySelect2.jsx';
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";
import { SOP_POST_FOR_GET_BACKENDFEEDBACK, SOP_POST_FOR_STORE_USER_DATA_IN_BACKEND, SOP_GET_SPECIFIC_USER_DATA } from "../../../assets/URL's/AllUrl.js";

//END OF THE IMPORTING....




export default function SOPForm() {
    const { setWritingText, loginRedirectStatus, setLoginRedirectUrl, userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();
    const history = useRouter();

    //all user localstorages data storing states.......
    const [userCountryInfo, setUserCountryInfo] = useState();
    const [usersCountryName, setuserCountryName] = useState("");
    const [DeviceNumber, setUserDeviceName] = useState("")
    const [useremail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [refferDID, setRefferdID] = useState("");
    const [userLoginToken, setUserloginToken] = useState("")
    const [userFB_GoogleLoginToken, setuserFB_GoogleLoginToken] = useState("");
    const [userSignUpinfo, setUserSignupInfo] = useState("")

    const [SelectCountry, setSelectCountry] = useState(false);

    const [forSignUpPage, setForSignUpPage] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false);

    const [programArray, setProgramArray] = useState([]);

    const [showFormsByState, setShowFormsByState] = useState("firstForm");
    const [loadingMsg, setLoading] = useState("");
    const [formInputValues, setFormInputValues] = useState({
        fullName: "",
        targetedUniversity: "",
        interest: "",
        careerGoal: "",
        firstProject: "",
        secondProject: "",
        reasonToApply: "",
        additionalInfo: ""

    });


    useEffect(() => {
        setUserEmail(localStorage.getItem('userEmail') && localStorage.getItem('userEmail'));
        setUserName(localStorage.getItem("userName") && localStorage.getItem("userName"));
        setUserloginToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"));
        setuserFB_GoogleLoginToken(localStorage.getItem("GoogleFacebookToken") && localStorage.getItem("GoogleFacebookToken"));
        setUserSignupInfo(localStorage.getItem("userSignupInfo") && localStorage.getItem("userSignupInfo"));
        setuserCountryName(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"));


    }, [])





    //state for get the subject/course name from user by auto suggested....



    // check paymentStaus user have payemnt already or No
    CheckPaymentStatus()



    const inputValueGetAndPush = (event) => {
        //    event.preventDefault();
        setShowFormsByState(event);
    }

    //handle-inputs-values------->
    const signUpinputChange = (x) => {
        const fullName = x.target.name;
        const fullValue = x.target.value;
        setFormInputValues((prevs) => {
            return { ...prevs, [fullName]: fullValue }
        })
    }



    // function to submit data backend & get the respone 
    // after that with the response store all data to our database for 
    // showing to the user  
    var sentData = {
        inputs: `My full name is ${formInputValues.fullName}, My target program is ${programArray[0] && programArray[0].name}, My targeted University is ${formInputValues.targetedUniversity}, I am interest in ${formInputValues.interest}, My career goal is ${formInputValues.careerGoal} My first work exprience is ${formInputValues.firstProject}, My second work exprience ${formInputValues.secondProject}, I want to apply because ${formInputValues.reasonToApply}, Some additional informations are ${formInputValues.additionalInfo},`,
    };
    // console.log(sentData)
    const finalFuncToMakeSOP = async () => {
        // x.preventDefault();
        setLoading("loading")
        console.log("Functon has been procced")
        await axios({
            method: "post",
            url: SOP_POST_FOR_GET_BACKENDFEEDBACK,
            data: sentData,
        }).then(async (res) => {
            console.log(typeof res.data)
            await axios({
                method: "post",
                url: SOP_POST_FOR_STORE_USER_DATA_IN_BACKEND,
                // url: "http://localhost:8080/api/user/saveUserAllSOPToDatabase",
                data: {
                    "userName": userName,
                    "userEmail": useremail,
                    "SOPData": res.data

                },
            }).then((res) => {
                console.log("Success...");
                // console.log(res.data)
                if (res.data == "successFul") {
                    setLoading("SOPpopUp");
                }

            })
                .catch((err) => {
                    console.log(err)
                    setLoading("Failed");
                });


        })
            .catch((err) => {
                console.log(err);
                setLoading("Failed");
            });
    }



    // console.log(formInputValues)




    // it will be a function when user want to make SOP it will show the user to login 
    // if they are not logged in yet--
    const userLoginFunction = (x) => {
        x.preventDefault();
        if (!userLoginToken && !userFB_GoogleLoginToken && !userSignUpinfo) {
            openLogInPage();
        } else {
            functionForCheckConditions();
        }
    }
    //Function for open login & SignUp pages Base on state    
    const openLogInPage = (x) => {
        setTimeout(() => {
            setLoginRedirectUrl("RedirectUrlStatusChane")
            setWritingText("Please login if you want to Make (SOP)")
            setOpenLogIn(!openLogIn)
            setForSignUpPage(false) // solution
        }, 250);
    }

    const openSignUpPage = (x) => {
        setTimeout(() => {
            setForSignUpPage(!forSignUpPage)
            setOpenLogIn(false)    //solution
        }, 250);
    }





    // function for senddaing to the login & signUp pages 
    // & make conditions if user already been LOGGED IN...
    const functionForCheckConditions = () => {
        setLoading("loading")
        setTimeout(() => {
            if (!usersCountryName || usersCountryName == null || usersCountryName == "undefined") {
                setSelectCountry(true);
                setLoading("")
                // requestForToken();
            } else {
                axios({
                    method: "get",
                    url: SOP_GET_SPECIFIC_USER_DATA + useremail,
                    // url: 'http://localhost:8080/api/user/getSpecificUserSop/' + useremail,
                    headers: {
                        "Authorization": `Bearer ${userLoginToken}`,
                        'Content-Type': 'application/json'
                    }
                })
                    .then((res) => {
                        console.log(res);
                        setLoading("")
                        //   console.log(res.data);
                        if (res.data.data[0]) {
                            paymentFunction();

                        } else {
                            finalFuncToMakeSOP();
                        }
                    })
                    .catch((e) => {
                        console.log(e)
                        setLoading("Failed")
                    });
            }
        }, 2000);
    }



    // Payement Functions when user have already a SOP
    const paymentFunction = () => {
        if (userPaymentStatusCheck == "Expert" || userPaymentStatusCheck == "Starter") {
            finalFuncToMakeSOP();
        } else {
            // setBillPopUp(true);
            history.push("/Payment-billing-information-page")
            localStorage.setItem("productID", "SOP-Maker-for-user");
        }
    }




    return (
        <div className='m-auto p-3'>
            {
                showFormsByState == "firstForm" && (
                    <form action="" onSubmit={() => { inputValueGetAndPush("secondForm") }}>
                        <section className='grid grid-cols-1 mt-[30px] sm:mt-[45px] md:mt-[25px]  rounded  justify-center align-middle w-[99vw] sm:w-[770px]  box-border overflow-x-auto bg-white border-1 border-gray-200 shadow-lg'>
                            <div class="flex justify-center align-middle px-5 py-4 bg-gray-100 border-b border-gray-300">
                                Fill the information below
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 p-[20px] sm:p-[30px] '>
                                <div className=''>
                                    <label htmlFor="fullName" className='text-[13px] font-bold'>Full Name *</label> <br />
                                    <input type="text" name="fullName" id="fullName" className='p-2 border-1 border-gray-300 rounded w-full placeholder:text-[12px] text-black placeholder:opacity-70 ' placeholder='Your Full Name'
                                        value={formInputValues.fullName}
                                        onChange={signUpinputChange}
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="targetedProggram" className='text-[13px] font-bold'>Target proggram *</label> <br />
                                    <Select options={options}
                                        labelField="name"
                                        valueField="name"
                                        onChange={(values) => setProgramArray(values)}
                                        className='p-2 border-1 border-gray-300 rounded w-full placeholder:text-[12px] text-black placeholder:opacity-70 '
                                        placeholder='eg. MS in computer science'
                                        name="targetedProggram" id="targetedProggram"
                                        value={programArray[0] && programArray[0].name}
                                        required
                                    />
                                </div>

                                <div className=''>
                                    <label htmlFor="targetedUniversity" className='text-[13px] font-bold'>Target University *</label> <br />
                                    <input type="text" name="targetedUniversity" id="targetedUniversity" className='p-2 border-1 border-gray-300 rounded w-full placeholder:text-[12px] text-black placeholder:opacity-70' placeholder='eg. TU MUNICH'
                                        value={formInputValues.targetedUniversity}
                                        onChange={signUpinputChange}
                                        required />
                                </div>
                                <div className=''>
                                    <label htmlFor="interest" className='text-[13px] font-bold'>Area of interest *</label> <br />
                                    <input type="text" name="interest" id="interest" className='p-2 border-1 border-gray-300 rounded w-full placeholder:text-[12px] text-black placeholder:opacity-70' placeholder='eg. Computer vision for healtcare'
                                        value={formInputValues.interest}
                                        onChange={signUpinputChange}
                                        required />
                                </div>
                                <div className=''>
                                    <label htmlFor="careerGoal" className='text-[13px] font-bold'>Career Goal *</label> <br />
                                    <input type="text" name="careerGoal" id="careerGoal" className='p-2 border-1 border-gray-300 rounded w-full placeholder:text-[12px] text-black placeholder:opacity-70' placeholder='I want to work as a AI researcher'
                                        value={formInputValues.careerGoal}
                                        onChange={signUpinputChange}
                                        required />
                                </div>


                            </div>

                            <div class="flex justify-end px-5 py-4 bg-gray-100 border-t border-gray-300">
                                {/* <button class="px-3 py-2  text-gray-600 transition duration-150 hover:text-gray-700"
                    >Back</button> */}
                                <button class=" transition duration-150 "
                                    type='submit'
                                >
                                    <a className="w-auto text-black p-2 border-1 border-gray bg-sky-300 rounded-[30px] hover:bg-red-400 cursor-pointer border-r-t-[20px]">
                                        Next<i className="fal fa-arrow-right ml-2 text-[11px]" />
                                    </a>
                                </button>
                            </div>
                        </section>
                    </form>
                )
            }

            {/* Second form */}
            {
                showFormsByState == "secondForm" && (
                    <form action="" onSubmit={() => { inputValueGetAndPush("thirdForm") }}>
                        <section className='grid grid-cols-1 mt-[80px] sm:mt-[80px]   rounded  justify-center align-middle w-[98vw] sm:w-auto h-auto  box-border overflow-x-auto bg-white border-1 border-gray-200 shadow-lg'>
                            <div class="flex justify-center align-middle px-5 py-4 bg-gray-100 border-b border-gray-300">
                                Fill the information below
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 p-[18px] sm:p-[26px] '>
                                <div className=''>
                                    <label htmlFor="firstProject" className='text-[12px] font-bold'>Work exprience /First project (Description , Achievement/Outcome) <span className='text-[14px]'>*</span></label> <br />
                                    <textarea name="firstProject" id="firstProject" cols={2} rows={6} className='w-full p-3 border-2 border-gray-300 rounded'
                                        placeholder='I analyize the problem of mapping an indoor enviroment the limitation of the current approaches through a literature survey etc etc...'
                                        value={formInputValues.firstProject}
                                        onChange={signUpinputChange}
                                        required></textarea>
                                </div>
                                <div className=''>
                                    <label htmlFor="fullName" className='text-[12px] font-bold'>Work exprience /Second project (Description , Achievement/Outcome) <span className='ml-2 text-[14px]'>(optional)</span></label> <br />
                                    <textarea name="secondProject" id="secondProject" cols={2} rows={6}
                                        placeholder='Developed a cost effective & green AI system to reduce electricity consumption by 12% per household etc etc...'
                                        className='w-full p-3 border-2 border-gray-300 rounded'
                                        value={formInputValues.secondProject}
                                        onChange={signUpinputChange}
                                    ></textarea>
                                </div>

                            </div>

                            <div class="flex justify-between px-5 py-4 bg-gray-100 border-t border-gray-300">
                                <button class=" text-gray-600 transition duration-150  "
                                    onClick={() => { inputValueGetAndPush("firstForm") }}
                                >
                                    <a className="w-auto text-black p-2 border-1 border-gray bg-sky-300 rounded-[30px] hover:bg-red-400 cursor-pointer border-r-t-[20px]">
                                        <i className="fal fa-arrow-left mr-1 text-[11px]" />Back
                                    </a>
                                </button>

                                <button class=" transition duration-150  "
                                    type='submit'
                                >
                                    <a className="w-auto text-black p-2 border-1 border-gray bg-sky-300 rounded-[30px] hover:bg-red-400 cursor-pointer border-r-t-[20px]">
                                        Next<i className="fal fa-arrow-right ml-2 text-[11px]" />
                                    </a>
                                </button>
                            </div>
                        </section>
                    </form>
                )
            }

            {/* Third form */}
            {
                showFormsByState == "thirdForm" && (
                    <div >
                        <section className='grid grid-cols-1 mt-[70px] sm:mt-[60px]   rounded  justify-center align-middle w-[98vw] sm:w-[950px] h-auto  box-border overflow-x-auto bg-white border-1 border-gray-200 shadow-lg'>
                            <div class="flex justify-center align-middle  px-5 py-4 bg-gray-100 border-b border-gray-300">
                                Fill the information below
                            </div>
                            <form action="" onSubmit={userLoginFunction}>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 p-[20px] sm:p-[30px] '>
                                    <div className=''>
                                        <label htmlFor="reasonToApply" className='text-[12px] font-bold translate-y-[20px]'>Why do you want to apply to this university? <span className='text-[14px]'>*</span></label> <br /> <br />
                                        <textarea name="reasonToApply" id="reasonToApply" cols={2} rows={6} className='w-full p-3 border-2 border-gray-300 rounded'
                                            placeholder='eg. TU MUNICH has a wide range of CS electives..'
                                            value={formInputValues.reasonToApply}
                                            onChange={signUpinputChange}
                                            required></textarea>
                                    </div>
                                    <div className=''>
                                        <div className='w-full'>
                                            <span className='text-[14px] text-center w-full sm:w-[80%] text-black rounded bg-green-300 p-1'>You can also write in your Mother Language</span>
                                        </div>
                                        <label htmlFor="additionalInfo" className='text-[12px] font-bold'>Any additional informations?
                                            <span className='text-[14px]'>*</span>
                                        </label> <br />
                                        <textarea name="additionalInfo" id="additionalInfo" cols={2} rows={6}
                                            placeholder='I like developing.I also volunteered to help deferently abled people with accessible software...'
                                            className='w-full p-3 border-2 border-gray-300 rounded'
                                            value={formInputValues.additionalInfo}
                                            onChange={signUpinputChange}
                                            required
                                        ></textarea>
                                        {/* <p className="text-[13px] sm:text-[16px]  needEffect" data-text="You can also write in your Mother Language">"You can also write in your Mother Language"</p> <br /> */}
                                    </div>

                                </div>

                                <div class="flex justify-between px-5 py-4 bg-gray-100 border-t border-gray-300">
                                    <button class=" transition duration-150  "
                                        onClick={() => { inputValueGetAndPush("secondForm") }}
                                    >
                                        <a className="w-auto text-black p-2 border-1 border-gray bg-sky-300 rounded-[30px] hover:bg-red-400 cursor-pointer border-r-t-[20px]">
                                            <i className="fal fa-arrow-left mr-1 text-[11px]" />Back
                                        </a>
                                    </button>
                                    <button class="px-3 py-2 rounded-[20px] bg-green-300 hover:bg-red-300 text-center text-gray-600 transition duration-150 hover:text-gray-700 "
                                        type='submit'
                                    >Submit</button>
                                </div>
                            </form>
                        </section>
                    </div>
                )
            }




            {/* for testing purpose--- */}
            {/* <div id='feedBackDataCheck'> </div> */}

            {/* loading sections when user submit the form's */}
            {loadingMsg == "loading" && <section className="fixed top-2 left-2 w-[90%] sm:w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[100000] grid-cols-1 grid-rows-5">
                <div className="fixed top-[30%]  left-[26%] z-[200000] sm:left-[45%] w-[100vw] h-[100vh]">
                    <div className="flex opacity-6 justify-center align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
                        <div className="bg-white rounded-[15px] p-3 h-auto">
                            <ClockLoader size={100} color="#36d7b7" />
                        </div>

                    </div>
                </div>
            </section>
            }

            {/* Successfully saved SOP to the data base & showing this popup 
             to the user if he/she want's to see their SOP in there dashboard   */}

            {

                loadingMsg == "SOPpopUp" && <div className="Result-PopUp pt-[10px]  fixed top-[70px] sm:top-[100px] left-2 w-[90%] sm:w-[100%] z-[345678900000]">
                    <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                        <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[450px] p-4 h-auto box-border overflow-x-auto bg-sky-100 shadow-2xl'>
                            <div className="w-full flex justify-between mb-3">
                                <Image src={logo} alt="sop landing page image" className="w-[110px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                                    onClick={() => { history.push("/") }}
                                />
                                <button
                                    style={{ color: 'rgb(153, 171, 180)' }}
                                    className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
                                       hover:bg-light-gray w-[60px] h-[60px] flex justify-center align-middle"
                                    onClick={() => { setLoading("") }}>  <MdOutlineCancel />
                                </button>
                            </div>
                            <div className='w-full text-center'>
                                <p className='text-2xl'><span className='text-3xl'>🎉</span> You have Successfully made your SOP</p> <br />
                                <p >If you want to see your SOP click the button or go to your Dashboard</p> <br />
                                <button
                                    onClick={() => { history.push("/MainDashBoard/SOPFile") }}
                                    className='p-1 rounded border-2 border-gray-400 bg-blue-200 cursor-pointer hover:bg-red-200'>Check Your SOP</button>
                            </div>



                        </section>
                    </div>
                </div>
            }
            {
                loadingMsg == "Failed" && <div className="Result-PopUp pt-[10px] p-[10px]  fixed top-[130px] left-[-14px] sm:left-[5px] w-[90%] sm:w-[100%] z-[345678900000] ">
                    <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                        <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[450px] p-4 h-auto box-border overflow-x-auto bg-white shadow-2xl'>
                            <div className="w-full flex justify-between mb-3">
                                <Image src={logo} alt="sop landing image-2" className="w-[110px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                                    onClick={() => { history.push("/") }}
                                />
                                <button
                                    style={{ color: 'rgb(153, 171, 180)' }}
                                    className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
                                      hover:bg-light-gray w-[60px] h-[60px] flex justify-center align-middle"
                                    onClick={() => { setLoading("") }}>  <MdOutlineCancel />
                                </button>
                            </div> <div className='w-full text-center'>
                                <p className='text-2xl'><span className='text-3xl text-red-400'>Sorry</span> Something went wrong please try again</p> <br />
                            </div>
                        </section>
                    </div>
                </div>
            }





            {/* for openLogIn & openSignUpPage connect with their states */}
            {
                openLogIn && loginRedirectStatus != "" && (
                    <div style={{ transition: openLogIn && "3s ease-in-out " }}>
                        <LoginPage
                            openLogInPage={openLogInPage}
                            openSignUpPage={openSignUpPage}
                            finalFuncAfterLogInorSignUp={functionForCheckConditions}

                        />
                    </div>)
            }
            {
                forSignUpPage && loginRedirectStatus != "" && (
                    <div style={{ transition: forSignUpPage && "3s ease-in-out " }}>
                        <SignUpPage
                            openSignUpPage={openSignUpPage}
                            openLogInPage={openLogInPage}
                            finalFuncAfterLogInorSignUp={functionForCheckConditions}
                        />
                    </div>)
            }






            {/* for select the user Country.... */}
            {
                SelectCountry && (<CountrySelect
                    setSelectCountry={setSelectCountry}
                    functionForCheckConditions={functionForCheckConditions}
                />)
            }

        </div>
    )
}

