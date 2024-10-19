"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import "./index.css";
import { useRouter } from 'next/navigation';
import { isSafari, isMobile, isOpera } from "react-device-detect";
import { useStateContext } from "../../../../contexts/ContextProvider";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from 'next/image';


//section Images------------------
import test1Sec1Images from "../../../../assets/images/Speaking-Images/test1Sec-1.png"
import test1Sec2Images from "../../../../assets/images/Speaking-Images/test1Sec-2.png"
import test1Sec3Images from "../../../../assets/images/Speaking-Images/test1Sec-3.png"

import test2Sec1Images from "../../../../assets/images/Speaking-Images/Test2Sec1.jpg"
import test2Sec2Images from "../../../../assets/images/Speaking-Images/Test2Sec2.jpg"
import test2Sec3Images from "../../../../assets/images/Speaking-Images/Test2Sec3.jpg"

import test3Sec1Images from "../../../../assets/images/Speaking-Images/test3Sec-1.png"
import test3Sec2Images from "../../../../assets/images/Speaking-Images/test3Sec-2.png"
import test3Sec3Images from "../../../../assets/images/Speaking-Images/test3Sec-3.png"

import test4Sec1Images from "../../../../assets/images/Speaking-Images/test4Sec-1.png"
import test4Sec2Images from "../../../../assets/images/Speaking-Images/test4Sec-2.png"
import test4Sec3Images from "../../../../assets/images/Speaking-Images/test4Sec-3.png"

import test5Sec1Images from "../../../../assets/images/Speaking-Images/test12Sec-1.png"
import test5Se2Images from "../../../../assets/images/Speaking-Images/Test5Sec2.jpg"
import test5Sec3Images from "../../../../assets/images/Speaking-Images/test5Sec-3.png"

import test6Sec1Images from "../../../../assets/images/Speaking-Images/Test6Sec1.jpg"
import test6Sec2Images from "../../../../assets/images/Speaking-Images/Test6Sec2.jpg"
import test6Sec3Images from "../../../../assets/images/Speaking-Images/Test6Sec3.jpg"

import test7Sec1Images from "../../../../assets/images/Speaking-Images/test7Sec-1.png"
import test7Sec2Images from "../../../../assets/images/Speaking-Images/test7Sec-2.png"
import test7Sec3Images from "../../../../assets/images/Speaking-Images/test7Sec-3.png"

import test8Sec1Images from "../../../../assets/images/Speaking-Images/test8Sec-1.png"
import test8Sec2Images from "../../../../assets/images/Speaking-Images/test8Sec-2.png"
import test8Sec3Images from "../../../../assets/images/Speaking-Images/test8Sec-3.png"

import test9Sec1Images from "../../../../assets/images/Speaking-Images/test9Sec-1.png"
import test9Sec2Images from "../../../../assets/images/Speaking-Images/test9Sec-2.png"
import test9Sec3Images from "../../../../assets/images/Speaking-Images/test9Sec-3.png"

import test10Sec1Images from "../../../../assets/images/Speaking-Images/test10Sec-1.png"
import test10Sec2Images from "../../../../assets/images/Speaking-Images/test10Sec-2.png"
import test10Sec3Images from "../../../../assets/images/Speaking-Images/test10Sec-3.png"

import test11Sec1Images from "../../../../assets/images/Speaking-Images/test11Sec-1.png"
import test11Sec2Images from "../../../../assets/images/Speaking-Images/test11Sec-2.png"
import test11Sec3Images from "../../../../assets/images/Speaking-Images/test11Sec-3.png"

import test12Sec1Images from "../../../../assets/images/Speaking-Images/test5Sec-1.png"
import test12Sec2Images from "../../../../assets/images/Speaking-Images/test12Sec-2.png"
import test12Sec3Images from "../../../../assets/images/Speaking-Images/test12Sec-3.png"

import test13Sec1Images from "../../../../assets/images/Speaking-Images/Test13Sec1.jpg"
import test13Sec2Images from "../../../../assets/images/Speaking-Images/test2Sec-2.png"
import test13Sec3Images from "../../../../assets/images/Speaking-Images/test2Sec-3.png"

import test14Sec1Images from "../../../../assets/images/Speaking-Images/Test14Sec1.jpg"
import test14Sec2Images from "../../../../assets/images/Speaking-Images/Test14Sec2.jpg"

import test15Sec1Images from "../../../../assets/images/Speaking-Images/Test15Sec1.jpg"
import test15Sec2Images from "../../../../assets/images/Speaking-Images/Test15Sec2.jpg"
import test15Sec3Images from "../../../../assets/images/Speaking-Images/Test15Sec3.jpg"


//client components....
const LoginPage = dynamic(() => import("../../LoginPage/LoginPage"))
const SignUpPage = dynamic(() => import("../../LoginPage/SignUpPage"))
const Motivation = dynamic(() => import("./Motivation.jsx"))
const TellusReason = dynamic(() => import("./TellusResoan"))

//End of the importing-------------








function Card_To_40({ openTestAfter40, setOpenTestsAfter40, mainDataAll }) {
    const { setWritingText, bdPaidStatus, setBdPaidSatus, otherPaidStatus, setOtherPaidStatus, billPopUp, setBillPopUp, userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();
    const history = useRouter();
    //localstorage data storing variables here....
    const [useremail, setuseremail] = useState("");
    const [userToken, setuserToken] = useState("")
    const [userCountry, setuserCountry] = useState("")


    const [forSignUpPage, setForSignUpPage] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false);
    const [loadMoreStatus, setLoadMoreStatus] = useState(false);
    const [ShowUserIfTheyDidNotCompleteAboveTests, setShowUserIfTheyDidNotCompleteAboveTests] = useState(false)
    const [openCongressPopup, setopenCongressPopup] = useState(false)
    // const [bdPaidStatus, setBdPaidSatus] = useState(false);
    // const [otherPaidStatus, setOtherPaidStatus] = useState(false);


    //make array for user scores showing----
    //check-conditions-when-user-click-on-load-more-10-test-button------------
    let checkLoadMoreArray = [];
    let test31sec1 = []; let test31sec2 = []; let test31sec3 = [];
    let test32sec1 = []; let test32sec2 = []; let test32sec3 = [];
    let test33sec1 = []; let test33sec2 = []; let test33sec3 = [];
    let test34sec1 = []; let test34sec2 = []; let test34sec3 = [];
    let test35sec1 = []; let test35sec2 = []; let test35sec3 = [];
    let test36sec1 = []; let test36sec2 = []; let test36sec3 = [];
    let test37sec1 = []; let test37sec2 = []; let test37sec3 = [];
    let test38sec1 = []; let test38sec2 = []; let test38sec3 = [];
    let test39sec1 = []; let test39sec2 = []; let test39sec3 = [];
    let test40sec1 = []; let test40sec2 = []; let test40sec3 = [];




    useEffect(() => {
        //storing all localstorage data into variables by code below
        setuseremail(localStorage.getItem('userEmail') && localStorage.getItem('userEmail'));
        setuserToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"))
        setuserCountry(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"))

        //for opening the speaking motivational popUp for motivate users..........
        if (localStorage.getItem('forSpeakingMotivation')) {
            setopenCongressPopup(true);
        }
    }, [])

    //console.log(mainDataAll)

    function MainiOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }





    //Function for open login & SignUp pages Base on state    
    const openLogInPage = (x) => {
        setTimeout(() => {
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






    // Utility function for browser and device checks
    const checkBrowserAndDevice = () => {
        if (MainiOS()) {
            return alert("Sorry...Speaking Exam is not available for iPhone and iPad.");
        } else if (isMobile && isOpera) {
            return alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha");
        } else if (isSafari) {
            return alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha");
        }
        return true; // Browser and device are supported
    };


    // Utility function for checking if the user is logged in and has a valid subscription
    const checkUserAccess = () => {
        if (userPaymentStatusCheck === "Expert") {
            return true; // User has a valid subscription
        }
        return false; // User doesn't have a valid subscription
    };

    // Function to handle navigation and checks
    const handleTestNavigation = (section) => {
        if (checkUserAccess()) {
            if (checkBrowserAndDevice()) {
                history.push(`/Pages/Speaking-Module/${section}`);
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                history.push("/Pages/Payments/BillingComponent");
            } else {
                setWritingText("Need to login first");
                openLogInPage();
            }
        }
    };


    // Speaking-Test21-Section Functions
    const Test31Sec1 = (e) => {
        handleTestNavigation("Test31Sec1");
    };

    const Test31Sec2 = (e) => {
        handleTestNavigation("Test31Sec2");
    };

    const Test31Sec3 = (e) => {
        handleTestNavigation("Test31Sec3");
    };

    const Test32Sec1 = (e) => {
        handleTestNavigation("Test32Sec1");
    };

    const Test32Sec2 = (e) => {
        handleTestNavigation("Test32Sec2");
    };

    const Test32Sec3 = (e) => {
        handleTestNavigation("Test32Sec3");
    };

    const Test33Sec1 = (e) => {
        handleTestNavigation("Test33Sec1");
    };

    const Test33Sec2 = (e) => {
        handleTestNavigation("Test33Sec2");
    };

    const Test33Sec3 = (e) => {
        handleTestNavigation("Test33Sec3");
    };

    const Test34Sec1 = (e) => {
        handleTestNavigation("Test34Sec1");
    };

    const Test34Sec2 = (e) => {
        handleTestNavigation("Test34Sec2");
    };

    const Test34Sec3 = (e) => {
        handleTestNavigation("Test34Sec3");
    };

    const Test35Sec1 = (e) => {
        handleTestNavigation("Test35Sec1");
    };

    const Test35Sec2 = (e) => {
        handleTestNavigation("Test35Sec2");
    };

    const Test35Sec3 = (e) => {
        handleTestNavigation("Test35Sec3");
    };

    const Test36Sec1 = (e) => {
        handleTestNavigation("Test36Sec1");
    };

    const Test36Sec2 = (e) => {
        handleTestNavigation("Test36Sec2");
    };

    const Test36Sec3 = (e) => {
        handleTestNavigation("Test36Sec3");
    };

    const Test37Sec1 = (e) => {
        handleTestNavigation("Test37Sec1");
    };

    const Test37Sec2 = (e) => {
        handleTestNavigation("Test37Sec2");
    };

    const Test37Sec3 = (e) => {
        handleTestNavigation("Test37Sec3");
    };

    const Test38Sec1 = (e) => {
        handleTestNavigation("Test38Sec1");
    };

    const Test38Sec2 = (e) => {
        handleTestNavigation("Test38Sec2");
    };

    const Test38Sec3 = (e) => {
        handleTestNavigation("Test38Sec3");
    };

    const Test39Sec1 = (e) => {
        handleTestNavigation("Test39Sec1");
    };

    const Test39Sec2 = (e) => {
        handleTestNavigation("Test39Sec2");
    };

    const Test39Sec3 = (e) => {
        handleTestNavigation("Test39Sec3");
    };

    const Test40Sec1 = (e) => {
        handleTestNavigation("Test40Sec1");
    };

    const Test40Sec2 = (e) => {
        handleTestNavigation("Test40Sec2");
    };

    const Test40Sec3 = (e) => {
        handleTestNavigation("Test40Sec3");
    };












    //for storing all speaking scores data for changing UI-----------
    //test-31
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test31Sec1") { test31sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test31Sec2") { test31sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test31Sec3") { test31sec3.push(items); }
    });

    //test-32
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test32Sec1") { test32sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test32Sec2") { test32sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test32Sec3") { test32sec3.push(items); }
    });

    //test-33
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test33Sec1") { test33sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test33Sec2") { test33sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test33Sec3") { test33sec3.push(items); }
    });

    //test-34
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test34Sec1") { test34sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test34Sec2") { test34sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test34Sec3") { test34sec3.push(items); }
    });

    //test-35
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test35Sec1") { test35sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test35Sec2") { test35sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test35Sec3") { test35sec3.push(items); }
    });

    //test-36
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test36Sec1") { test36sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test36Sec2") { test36sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test36Sec3") { test36sec3.push(items); }
    });

    //test-37
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test37Sec1") { test37sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test37Sec2") { test37sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test37Sec3") { test37sec3.push(items); }
    });

    //test-38
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test38Sec1") { test38sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test38Sec2") { test38sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test38Sec3") { test38sec3.push(items); }
    });

    //test-39
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test39Sec1") { test39sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test39Sec2") { test39sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test39Sec3") { test39sec3.push(items); }
    });

    //test-40
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test40Sec1") { test40sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test40Sec2") { test40sec2.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test40Sec3") { test40sec3.push(items); }
    });


    //store all speaking data singleitems for load more 10 test---
    //test-31
    if (test31sec1[0]) { checkLoadMoreArray.push("Test31Sec1"); }
    if (test31sec2[0]) { checkLoadMoreArray.push("Test31Sec2"); }
    if (test31sec3[0]) { checkLoadMoreArray.push("Test31Sec3"); }

    //test-32
    if (test32sec1[0]) { checkLoadMoreArray.push("Test32Sec1"); }
    if (test32sec2[0]) { checkLoadMoreArray.push("Test32Sec2"); }
    if (test32sec3[0]) { checkLoadMoreArray.push("Test32Sec3"); }

    //test-33
    if (test33sec1[0]) { checkLoadMoreArray.push("Test33Sec1"); }
    if (test33sec2[0]) { checkLoadMoreArray.push("Test33Sec2"); }
    if (test33sec3[0]) { checkLoadMoreArray.push("Test33Sec3"); }

    //test-34
    if (test34sec1[0]) { checkLoadMoreArray.push("Test34Sec1"); }
    if (test34sec2[0]) { checkLoadMoreArray.push("Test34Sec2"); }
    if (test34sec3[0]) { checkLoadMoreArray.push("Test34Sec3"); }

    //test-35
    if (test35sec1[0]) { checkLoadMoreArray.push("Test35Sec1"); }
    if (test35sec2[0]) { checkLoadMoreArray.push("Test35Sec2"); }
    if (test35sec3[0]) { checkLoadMoreArray.push("Test35Sec3"); }

    //test-36
    if (test36sec1[0]) { checkLoadMoreArray.push("Test36Sec1"); }
    if (test36sec2[0]) { checkLoadMoreArray.push("Test36Sec2"); }
    if (test36sec3[0]) { checkLoadMoreArray.push("Test36Sec3"); }

    //test-37
    if (test37sec1[0]) { checkLoadMoreArray.push("Test37Sec1"); }
    if (test37sec2[0]) { checkLoadMoreArray.push("Test37Sec2"); }
    if (test37sec3[0]) { checkLoadMoreArray.push("Test37Sec3"); }

    //test-38
    if (test38sec1[0]) { checkLoadMoreArray.push("Test38Sec1"); }
    if (test38sec2[0]) { checkLoadMoreArray.push("Test38Sec2"); }
    if (test38sec3[0]) { checkLoadMoreArray.push("Test38Sec3"); }

    //test-39
    if (test39sec1[0]) { checkLoadMoreArray.push("Test39Sec1"); }
    if (test39sec2[0]) { checkLoadMoreArray.push("Test39Sec2"); }
    if (test39sec3[0]) { checkLoadMoreArray.push("Test39Sec3"); }

    //test-40
    if (test40sec1[0]) { checkLoadMoreArray.push("Test40Sec1"); }
    if (test40sec2[0]) { checkLoadMoreArray.push("Test40Sec2"); }
    if (test40sec3[0]) { checkLoadMoreArray.push("Test40Sec3"); }







    //for-load-more-10-test-functions---
    const checkAllTestsForOpenNextTests = () => {
        setLoadMoreStatus(true);
        //Give access to the user if user have already finished above 10 test 
        // other wise tell to the user need to be finished above 10 tests first---
        setTimeout(() => {
            if (checkLoadMoreArray[0]) {
                if (checkLoadMoreArray.sort().length == 30) {
                    setOpenTestsAfter40(true);
                    setLoadMoreStatus(false);
                } else {
                    // alert("Please Finish ALL 1 - 10 tests first To active next 10 tests");
                    setShowUserIfTheyDidNotCompleteAboveTests(true)
                    setLoadMoreStatus(false);
                }
            } else {
                // alert("Please Finish ALL 1 - 10 tests first To active next 10 tests");
                setShowUserIfTheyDidNotCompleteAboveTests(true)
                setLoadMoreStatus(false);
            }

        }, 2000);


    }





    return (
        <>
            <section className="appie-service-area appie-service-3-area  pt-0" id="service"
            >

                <div className='p-[10px] sm:p-[32px]  z-[55] translate-y-[-20px] sm:translate-y-[-57px]'>
                    <div className="w-full justify-center pt-[50px] sm:pt-[10px]  rounded-t-[33px] sm:rounded bg-gray-100">

                        {/* 11 test - 12test (28 - 36 section) */}
                        <div className='flex flex-wrap justify-center gap-4  p-[7px] sm:p-[15px]'>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo11") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo31")) + Number(localStorage.getItem("S_ScorModuleNo32")) + Number(localStorage.getItem("S_ScorModuleNo33"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test31sec1[0] || test31sec2[0] || test31sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>31</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}


                                <div className=' mt-1' onClick={Test31Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test11Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>2.87</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            407
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About spending time in nature</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test31sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test31sec1[test31sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test31sec1[test31sec1.length - 1].ieltsScore) >= 4 && Number(test31sec1[test31sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test31sec1[test31sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test31sec1[test31sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test31Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test11Sec2Images} className="rounded-xl h-[79%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.87</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            807
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">ABout your your dream vacation where you want to go</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test31sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test31sec2[test31sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test31sec2[test31sec2.length - 1].ieltsScore) >= 4 && Number(test31sec2[test31sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test31sec2[test31sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test31sec2[test31sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test31Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test11Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.36</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            787
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about dream Vacation , destination, experience you have spend </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test31sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test31sec3[test31sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test31sec3[test31sec3.length - 1].ieltsScore) >= 4 && Number(test31sec3[test31sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test31sec3[test31sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test31sec3[test31sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo12") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo34")) + Number(localStorage.getItem("S_ScorModuleNo35")) + Number(localStorage.getItem("S_ScorModuleNo36"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )


                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test32sec1[0] || test32sec2[0] || test32sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>32</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test32Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test12Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.72</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            953
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about Math & Favourite subjects.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test32sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test32sec1[test32sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test32sec1[test32sec1.length - 1].ieltsScore) >= 4 && Number(test32sec1[test32sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test32sec1[test32sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test32sec1[test32sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test32Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test12Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.95</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            1671
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about an important choice that you had in your life.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test32sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test32sec2[test32sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test32sec2[test32sec2.length - 1].ieltsScore) >= 4 && Number(test32sec2[test32sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test32sec2[test32sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test32sec2[test32sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test32Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test12Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.79</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            2144
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">talk about life-changing situations, unplanned circumstances</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test32sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test32sec3[test32sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test32sec3[test32sec3.length - 1].ieltsScore) >= 4 && Number(test32sec3[test32sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test32sec3[test32sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test32sec3[test32sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {/* {!bdPaidStatus && !otherPaidStatus && ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo13") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo37")) + Number(localStorage.getItem("S_ScorModuleNo38")) + Number(localStorage.getItem("S_ScorModuleNo39"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test33sec1[0] || test33sec2[0] || test33sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>33</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test33Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test13Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.98</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            871
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about the polutions </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test33sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test33sec1[test33sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test33sec1[test33sec1.length - 1].ieltsScore) >= 4 && Number(test33sec1[test33sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test33sec1[test33sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test33sec1[test33sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test33Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test13Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.56</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            601
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe time when you was late.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test33sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test33sec2[test33sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test33sec2[test33sec2.length - 1].ieltsScore) >= 4 && Number(test33sec2[test33sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test33sec2[test33sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test33sec2[test33sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test33Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test13Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.24</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            871
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about time management.</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test33sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test33sec3[test33sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test33sec3[test33sec3.length - 1].ieltsScore) >= 4 && Number(test33sec3[test33sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test33sec3[test33sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test33sec3[test33sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*Test1 14 - 16  && sections(37-45)*/}
                        <div className='flex flex-wrap justify-center gap-4  p-[12px] sm:p-[15px]'>
                            {/*Test No 14--------*/}
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {/* {!bdPaidStatus && !otherPaidStatus && ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo14") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo40")) + Number(localStorage.getItem("S_ScorModuleNo41")) + Number(localStorage.getItem("S_ScorModuleNo42"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )
                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test34sec1[0] || test34sec2[0] || test34sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>34</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test34Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test14Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.56</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            923
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about sports games. </h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test34sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test34sec1[test34sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test34sec1[test34sec1.length - 1].ieltsScore) >= 4 && Number(test34sec1[test34sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test34sec1[test34sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test34sec1[test34sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test34Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test14Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.41</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            1471
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe a traffic jan you have seen.</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test34sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test34sec2[test34sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test34sec2[test34sec2.length - 1].ieltsScore) >= 4 && Number(test34sec2[test34sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test34sec2[test34sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test34sec2[test34sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test34Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test14Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.00</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            1055
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk more about traffic jams.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test34sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test34sec3[test34sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test34sec3[test34sec3.length - 1].ieltsScore) >= 4 && Number(test34sec3[test34sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test34sec3[test34sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test34sec3[test34sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/*Test No 15--------*/}
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {/* {!bdPaidStatus && !otherPaidStatus && ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo15") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo43")) + Number(localStorage.getItem("S_ScorModuleNo44")) + Number(localStorage.getItem("S_ScorModuleNo45"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test35sec1[0] || test35sec2[0] || test35sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>35</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test35Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test15Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.96</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            676
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Mirroor that makes you nice</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test35sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test35sec1[test35sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test35sec1[test35sec1.length - 1].ieltsScore) >= 4 && Number(test35sec1[test35sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test35sec1[test35sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test35sec1[test35sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test35Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test15Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.29</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            965
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Discuss an invention has changed  people live.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test35sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test35sec2[test35sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test35sec2[test35sec2.length - 1].ieltsScore) >= 4 && Number(test35sec2[test35sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test35sec2[test35sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test35sec2[test35sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test35Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test15Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.87</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            811
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About innovention that change people lives.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test35sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test35sec3[test35sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test35sec3[test35sec3.length - 1].ieltsScore) >= 4 && Number(test35sec3[test35sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test35sec3[test35sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test35sec3[test35sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {/* {!bdPaidStatus && !otherPaidStatus && ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo16") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo46")) + Number(localStorage.getItem("S_ScorModuleNo47")) + Number(localStorage.getItem("S_ScorModuleNo48"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test36sec1[0] || test36sec2[0] || test36sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>36</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test36Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test1Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.96</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            771
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Let's talk about Watch  </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test36sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test36sec1[test36sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test36sec1[test36sec1.length - 1].ieltsScore) >= 4 && Number(test36sec1[test36sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test36sec1[test36sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test36sec1[test36sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test36Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test1Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.76</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            681
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center"> Describe an advertisement you remember.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test36sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test36sec2[test36sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test36sec2[test36sec2.length - 1].ieltsScore) >= 4 && Number(test36sec2[test36sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test36sec2[test36sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test36sec2[test36sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test36Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test1Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.44</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            861
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">advertising be regulated & endorsement</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test36sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test36sec3[test36sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test36sec3[test36sec3.length - 1].ieltsScore) >= 4 && Number(test36sec3[test36sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test36sec3[test36sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test36sec3[test36sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Test 17 -- 19 && sections (46-54)*/}

                        <div className='flex flex-wrap justify-center gap-4  p-[12px] sm:p-[15px]'>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {/* {!bdPaidStatus && !otherPaidStatus && ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo17") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo49")) + Number(localStorage.getItem("S_ScorModuleNo50")) + Number(localStorage.getItem("S_ScorModuleNo51"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test37sec1[0] || test37sec2[0] || test37sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>37</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test37Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test2Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.56</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            723
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About your hobbies, & your favourite numbers </h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test37sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test37sec1[test37sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test37sec1[test37sec1.length - 1].ieltsScore) >= 4 && Number(test37sec1[test37sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test37sec1[test37sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test37sec1[test37sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test37Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test2Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.21</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            1671
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about an event.</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test37sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test37sec2[test37sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test37sec2[test37sec2.length - 1].ieltsScore) >= 4 && Number(test37sec2[test37sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test37sec2[test37sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test37sec2[test37sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test37Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test3Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.19</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            1255
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">helping in the community, funding needed.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test37sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test37sec3[test37sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test37sec3[test37sec3.length - 1].ieltsScore) >= 4 && Number(test37sec3[test37sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test37sec3[test37sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test37sec3[test37sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {/* {!bdPaidStatus && !otherPaidStatus && ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo18") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo52")) + Number(localStorage.getItem("S_ScorModuleNo53")) + Number(localStorage.getItem("S_ScorModuleNo54"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test38sec1[0] || test38sec2[0] || test38sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>38</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test38Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test3Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.26</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            676
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Sitting down.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test38sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test38sec1[test38sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test38sec1[test38sec1.length - 1].ieltsScore) >= 4 && Number(test38sec1[test38sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test38sec1[test38sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test38sec1[test38sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test38Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test3Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.39</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            961
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Discuss Traditional product of a country.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test38sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test38sec2[test38sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test38sec2[test38sec2.length - 1].ieltsScore) >= 4 && Number(test38sec2[test38sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test38sec2[test38sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test38sec2[test38sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test38Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test3Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.47</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            911
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">More about traditional products</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test38sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test38sec3[test38sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test38sec3[test38sec3.length - 1].ieltsScore) >= 4 && Number(test38sec3[test38sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test38sec3[test38sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test38sec3[test38sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {/* {!bdPaidStatus && !otherPaidStatus && ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo19") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo55")) + Number(localStorage.getItem("S_ScorModuleNo56")) + Number(localStorage.getItem("S_ScorModuleNo57"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test39sec1[0] || test39sec2[0] || test39sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>39</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test39Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test1Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.96</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            671
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about as old building. </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test39sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test39sec1[test39sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test39sec1[test39sec1.length - 1].ieltsScore) >= 4 && Number(test39sec1[test39sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test39sec1[test39sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test39sec1[test39sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test39Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test1Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.96</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            671
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe positive changes in life.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test39sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test39sec2[test39sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test39sec2[test39sec2.length - 1].ieltsScore) >= 4 && Number(test39sec2[test39sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test39sec2[test39sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test39sec2[test39sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test39Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test1Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.44</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            871
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">More about positive changes in life</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test39sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test39sec3[test39sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test39sec3[test39sec3.length - 1].ieltsScore) >= 4 && Number(test39sec3[test39sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test39sec3[test39sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test39sec3[test39sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*Test 19 -- 21 && sections (55-63)*/}

                        <div className='flex w-[100%] sm:w-[85%] m-auto flex-wrap justify-start p-[7px] sm:p-[0px]'>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[33%] p-3 bg-transparent">
                                {/* {!bdPaidStatus && !otherPaidStatus && ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            localStorage.getItem("S_OkmoduleNo1") && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(localStorage.getItem("S_ScorModuleNo58")) + Number(localStorage.getItem("S_ScorModuleNo59")) + Number(localStorage.getItem("S_ScorModuleNo60"))) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )
                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test40sec1[0] || test40sec2[0] || test40sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>40</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test40Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test2Sec1Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.76</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            1123
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About about favourite place to meet. </h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test40sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test40sec1[test40sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test40sec1[test40sec1.length - 1].ieltsScore) >= 4 && Number(test40sec1[test40sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test40sec1[test40sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test40sec1[test40sec1.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 1
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test40Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test2Sec2Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.41</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            1471
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe abput an important event.</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test40sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test40sec2[test40sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test40sec2[test40sec2.length - 1].ieltsScore) >= 4 && Number(test40sec2[test40sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test40sec2[test40sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test40sec2[test40sec2.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 2
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=' mt-1' onClick={Test40Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <img src={test2Sec3Images} className="rounded-xl h-[78%]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-3 pt-2 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-center gap-2 item-center">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.09</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                alt=""
                                                                className='rounded-[50%]'
                                                                width={10}
                                                                height={10}
                                                            />
                                                            <Image
                                                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                                                alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={7}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            1655
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About  event celevrations in your life.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test40sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test40sec3[test40sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test40sec3[test40sec3.length - 1].ieltsScore) >= 4 && Number(test40sec3[test40sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test40sec3[test40sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test40sec3[test40sec3.length - 1].ieltsScore)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>
                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Section 3
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>


                        {/*Next Tests opens by the help of this button check those above 10 tests if user have completed those tests then open next tests other wise say the user have to finished above 10 tests*/}
                        {
                            !openTestAfter40 && <div className='flex flex-wrap justify-center gap-4  p-[12px] sm:p-[15px] pb-5 pt-3'>

                                <button className="bookmarkBtn" onClick={checkAllTestsForOpenNextTests} >
                                    <span className="IconContainer">
                                        {loadMoreStatus ? (<LoadingCom className="text-xl" />) : < AiOutlineLogin className="text-xl" />}
                                    </span>
                                    <p className="text">Load More 10 Tests </p>
                                </button>
                            </div>
                        }










                    </div>

                </div>

            </section >






            {/* for openLogIn & openSignUpPage connect with their states */}
            {
                openLogIn && (
                    <div style={{ transition: openLogIn && "3s ease-in-out " }}>
                        <LoginPage
                            openLogInPage={openLogInPage}
                            openSignUpPage={openSignUpPage}

                        />
                    </div>)
            }
            {
                forSignUpPage && (
                    <div style={{ transition: forSignUpPage && "3s ease-in-out " }}>
                        <SignUpPage
                            openSignUpPage={openSignUpPage}
                            openLogInPage={openLogInPage}
                        />
                    </div>)
            }


            <TellusReason />


            {/* popup for showing to the user if they did not complete the above 10 tests------ */}
            {
                ShowUserIfTheyDidNotCompleteAboveTests && <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                    <div className="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
                        <div className="sm:mx-auto sm:w-full sm:max-w-xl pt-[40px] ">
                            <div className="mt-[40px] backGroundColorSetCss py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
                                <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                                    onClick={() => { setShowUserIfTheyDidNotCompleteAboveTests(false) }}
                                >
                                    X
                                </div>
                                <div className='pt-4'>
                                    <div className='flex gap-2 text-xl text-center font-bold'>
                                        Please complete all tests from 31 to 40 first to activate the next set of 10 tests.
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            }


        </>
    );
}

export default Card_To_40;
