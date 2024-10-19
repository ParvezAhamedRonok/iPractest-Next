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








function Card_To_30({ openTestAfter30, setOpenTestsAfter30, mainDataAll }) {
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
  let test21sec1 = []; let test21sec2 = []; let test21sec3 = [];
  let test22sec1 = []; let test22sec2 = []; let test22sec3 = [];
  let test23sec1 = []; let test23sec2 = []; let test23sec3 = [];
  let test24sec1 = []; let test24sec2 = []; let test24sec3 = [];
  let test25sec1 = []; let test25sec2 = []; let test25sec3 = [];
  let test26sec1 = []; let test26sec2 = []; let test26sec3 = [];
  let test27sec1 = []; let test27sec2 = []; let test27sec3 = [];
  let test28sec1 = []; let test28sec2 = []; let test28sec3 = [];
  let test29sec1 = []; let test29sec2 = []; let test29sec3 = [];
  let test30sec1 = []; let test30sec2 = []; let test30sec3 = [];




  useEffect(() => {
    //storing all localstorage data into variables by code below
    setuseremail(localStorage.getItem('userEmail'));
    setuserToken(localStorage.getItem("loginTOken"))
    setuserCountry(localStorage.getItem("setCountry"))

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
  const Test21Sec1 = (e) => {
    handleTestNavigation("Test21Sec1");
  };

  const Test21Sec2 = (e) => {
    handleTestNavigation("Test21Sec2");
  };

  const Test21Sec3 = (e) => {
    handleTestNavigation("Test21Sec3");
  };
  //test--22
  const Test22Sec1 = (e) => {
    handleTestNavigation("Test22Sec1");
  };

  const Test22Sec2 = (e) => {
    handleTestNavigation("Test22Sec2");
  };

  const Test22Sec3 = (e) => {
    handleTestNavigation("Test22Sec3");
  };

  //test--23
  const Test23Sec1 = (e) => {
    handleTestNavigation("Test23Sec1");
  };

  const Test23Sec2 = (e) => {
    handleTestNavigation("Test23Sec2");
  };

  const Test23Sec3 = (e) => {
    handleTestNavigation("Test23Sec3");
  };

  //test--24
  const Test24Sec1 = (e) => {
    handleTestNavigation("Test24Sec1");
  };

  const Test24Sec2 = (e) => {
    handleTestNavigation("Test24Sec2");
  };

  const Test24Sec3 = (e) => {
    handleTestNavigation("Test24Sec3");
  };

  //test--25
  const Test25Sec1 = (e) => {
    handleTestNavigation("Test25Sec1");
  };

  const Test25Sec2 = (e) => {
    handleTestNavigation("Test25Sec2");
  };

  const Test25Sec3 = (e) => {
    handleTestNavigation("Test25Sec3");
  };

  //test--26
  const Test26Sec1 = (e) => {
    handleTestNavigation("Test26Sec1");
  };

  const Test26Sec2 = (e) => {
    handleTestNavigation("Test26Sec2");
  };

  const Test26Sec3 = (e) => {
    handleTestNavigation("Test26Sec3");
  };


  //test--27
  const Test27Sec1 = (e) => {
    handleTestNavigation("Test27Sec1");
  };

  const Test27Sec2 = (e) => {
    handleTestNavigation("Test27Sec2");
  };

  const Test27Sec3 = (e) => {
    handleTestNavigation("Test27Sec3");
  };

  //test--28
  const Test28Sec1 = (e) => {
    handleTestNavigation("Test28Sec1");
  };

  const Test28Sec2 = (e) => {
    handleTestNavigation("Test28Sec2");
  };

  const Test28Sec3 = (e) => {
    handleTestNavigation("Test28Sec3");
  };


  //test--29
  const Test29Sec1 = (e) => {
    handleTestNavigation("Test29Sec1");
  };

  const Test29Sec2 = (e) => {
    handleTestNavigation("Test29Sec2");
  };

  const Test29Sec3 = (e) => {
    handleTestNavigation("Test29Sec3");
  };


  //test--30
  const Test30Sec1 = (e) => {
    handleTestNavigation("Test30Sec1");
  };

  const Test30Sec2 = (e) => {
    handleTestNavigation("Test30Sec2");
  };

  const Test30Sec3 = (e) => {
    handleTestNavigation("Test30Sec3");
  };

















  //for storing all speaking scores data for changing UI-----------
  //test-21
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test21Sec1") { test21sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test21Sec2") { test21sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test21Sec3") { test21sec3.push(items); }
  });

  //test-22
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test22Sec1") { test22sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test22Sec2") { test22sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test22Sec3") { test22sec3.push(items); }
  });

  //test-23
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test23Sec1") { test23sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test23Sec2") { test23sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test23Sec3") { test23sec3.push(items); }
  });

  //test-24
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test24Sec1") { test24sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test24Sec2") { test24sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test24Sec3") { test24sec3.push(items); }
  });

  //test-25
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test25Sec1") { test25sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test25Sec2") { test25sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test25Sec3") { test25sec3.push(items); }
  });

  //test-26
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test26Sec1") { test26sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test26Sec2") { test26sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test26Sec3") { test26sec3.push(items); }
  });

  //test-27
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test27Sec1") { test27sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test27Sec2") { test27sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test27Sec3") { test27sec3.push(items); }
  });

  //test-28
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test28Sec1") { test28sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test28Sec2") { test28sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test28Sec3") { test28sec3.push(items); }
  });

  //test-29
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test29Sec1") { test29sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test29Sec2") { test29sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test29Sec3") { test29sec3.push(items); }
  });

  //test-30
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test30Sec1") { test30sec1.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test30Sec2") { test30sec2.push(items); }
  });
  mainDataAll[0] && mainDataAll.map((items) => {
    if (items.SectionName == "Test30Sec3") { test30sec3.push(items); }
  });


  //store all speaking data singleitems for load more 10 test---
  if (test21sec1[0]) { checkLoadMoreArray.push("Test21Sec1"); }
  if (test21sec2[0]) { checkLoadMoreArray.push("Test21Sec2"); }
  if (test21sec3[0]) { checkLoadMoreArray.push("Test21Sec3"); }

  if (test22sec1[0]) { checkLoadMoreArray.push("Test22Sec1"); }
  if (test22sec2[0]) { checkLoadMoreArray.push("Test22Sec2"); }
  if (test22sec3[0]) { checkLoadMoreArray.push("Test22Sec3"); }

  if (test23sec1[0]) { checkLoadMoreArray.push("Test23Sec1"); }
  if (test23sec2[0]) { checkLoadMoreArray.push("Test23Sec2"); }
  if (test23sec3[0]) { checkLoadMoreArray.push("Test23Sec3"); }

  if (test24sec1[0]) { checkLoadMoreArray.push("Test24Sec1"); }
  if (test24sec2[0]) { checkLoadMoreArray.push("Test24Sec2"); }
  if (test24sec3[0]) { checkLoadMoreArray.push("Test24Sec3"); }

  if (test25sec1[0]) { checkLoadMoreArray.push("Test25Sec1"); }
  if (test25sec2[0]) { checkLoadMoreArray.push("Test25Sec2"); }
  if (test25sec3[0]) { checkLoadMoreArray.push("Test25Sec3"); }

  if (test26sec1[0]) { checkLoadMoreArray.push("Test26Sec1"); }
  if (test26sec2[0]) { checkLoadMoreArray.push("Test26Sec2"); }
  if (test26sec3[0]) { checkLoadMoreArray.push("Test26Sec3"); }

  if (test27sec1[0]) { checkLoadMoreArray.push("Test27Sec1"); }
  if (test27sec2[0]) { checkLoadMoreArray.push("Test27Sec2"); }
  if (test27sec3[0]) { checkLoadMoreArray.push("Test27Sec3"); }

  if (test28sec1[0]) { checkLoadMoreArray.push("Test28Sec1"); }
  if (test28sec2[0]) { checkLoadMoreArray.push("Test28Sec2"); }
  if (test28sec3[0]) { checkLoadMoreArray.push("Test28Sec3"); }

  if (test29sec1[0]) { checkLoadMoreArray.push("Test29Sec1"); }
  if (test29sec2[0]) { checkLoadMoreArray.push("Test29Sec2"); }
  if (test29sec3[0]) { checkLoadMoreArray.push("Test29Sec3"); }

  if (test30sec1[0]) { checkLoadMoreArray.push("Test30Sec1"); }
  if (test30sec2[0]) { checkLoadMoreArray.push("Test30Sec2"); }
  if (test30sec3[0]) { checkLoadMoreArray.push("Test30Sec3"); }






  //for-load-more-10-test-functions---
  const checkAllTestsForOpenNextTests = () => {
    setLoadMoreStatus(true);
    //Give access to the user if user have already finished above 10 test 
    // other wise tell to the user need to be finished above 10 tests first---
    setTimeout(() => {
      if (checkLoadMoreArray[0]) {
        if (checkLoadMoreArray.sort().length == 30) {
          setOpenTestsAfter30(true);
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test21sec1[0] || test21sec2[0] || test21sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>21</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}


                <div className=' mt-1' onClick={Test21Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test11Sec1Images} className="rounded-xl h-[78%]" />
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
                              907
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">About Work or Study </h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test21sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test21sec1[test21sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test21sec1[test21sec1.length - 1].ieltsScore) >= 4 && Number(test21sec1[test21sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test21sec1[test21sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test21sec1[test21sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test21Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test11Sec2Images} className="rounded-xl h-[79%]" />
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
                              907
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Describe a person you would like to study or work with?</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test21sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test21sec2[test21sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test21sec2[test21sec2.length - 1].ieltsScore) >= 4 && Number(test21sec2[test21sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test21sec2[test21sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test21sec2[test21sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test21Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test11Sec3Images} className="rounded-xl h-[78%]" />
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
                              <span className='font-bold text-sm ml-1 text-[11px] '>4.36</span>
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
                              587
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2 </h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test21sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test21sec3[test21sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test21sec3[test21sec3.length - 1].ieltsScore) >= 4 && Number(test21sec3[test21sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test21sec3[test21sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test21sec3[test21sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test22sec1[0] || test22sec2[0] || test22sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>12</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test22Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test12Sec1Images} className="rounded-xl h-[78%]" />
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
                              <span className='font-bold text-sm ml-1 text-[11px] '>4.12</span>
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
                              1253
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">about Chocolate</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test22sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test22sec1[test22sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test22sec1[test22sec1.length - 1].ieltsScore) >= 4 && Number(test22sec1[test22sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test22sec1[test22sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test22sec1[test22sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test22Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test12Sec2Images} className="rounded-xl h-[78%]" />
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
                              <span className='font-bold text-sm ml-1 text-[11px] '>4.95</span>
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
                              2671
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Describe an Adventisment that you don't like </h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test22sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test22sec2[test22sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test22sec2[test22sec2.length - 1].ieltsScore) >= 4 && Number(test22sec2[test22sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test22sec2[test22sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test22sec2[test22sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test22Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test12Sec3Images} className="rounded-xl h-[78%]" />
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
                              <span className='font-bold text-sm ml-1 text-[11px] '>4.99</span>
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test22sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test22sec3[test22sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test22sec3[test22sec3.length - 1].ieltsScore) >= 4 && Number(test22sec3[test22sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test22sec3[test22sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test22sec3[test22sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test23sec1[0] || test23sec2[0] || test23sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>13</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test23Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test13Sec1Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Writing </h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test23sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test23sec1[test23sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test23sec1[test23sec1.length - 1].ieltsScore) >= 4 && Number(test23sec1[test23sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test23sec1[test23sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test23sec1[test23sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test23Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test13Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Describe a website which hepled yoy to do some thing / website you visit often / use regularly.</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test23sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test23sec2[test23sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test23sec2[test23sec2.length - 1].ieltsScore) >= 4 && Number(test23sec2[test23sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test23sec2[test23sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test23sec2[test23sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test23Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test13Sec3Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test23sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test23sec3[test23sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test23sec3[test23sec3.length - 1].ieltsScore) >= 4 && Number(test23sec3[test23sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test23sec3[test23sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test23sec3[test23sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test24sec1[0] || test24sec2[0] || test24sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>14</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test24Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test14Sec1Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Technology  </h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test24sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test24sec1[test24sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test24sec1[test24sec1.length - 1].ieltsScore) >= 4 && Number(test24sec1[test24sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test24sec1[test24sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test24sec1[test24sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test24Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test14Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Describe something that you taught to your friends/relatives</h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test24sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test24sec2[test24sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test24sec2[test24sec2.length - 1].ieltsScore) >= 4 && Number(test24sec2[test24sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test24sec2[test24sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test24sec2[test24sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test24Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test14Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test24sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test24sec3[test24sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test24sec3[test24sec3.length - 1].ieltsScore) >= 4 && Number(test24sec3[test24sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test24sec3[test24sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test24sec3[test24sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test25sec1[0] || test25sec2[0] || test25sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>15</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test25Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test15Sec1Images} className="rounded-xl h-[78%]" />
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
                              876
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Weather</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test25sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test25sec1[test25sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test25sec1[test25sec1.length - 1].ieltsScore) >= 4 && Number(test25sec1[test25sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test25sec1[test25sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test25sec1[test25sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test25Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test15Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Discuss a place / country in which you would like to live / work for a sort period of time</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test25sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test25sec2[test25sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test25sec2[test25sec2.length - 1].ieltsScore) >= 4 && Number(test25sec2[test25sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test25sec2[test25sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test25sec2[test25sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test25Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test15Sec3Images} className="rounded-xl h-[78%]" />
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
                              <span className='font-bold text-sm ml-1 text-[11px] '>3.87</span>
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
                              1011
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test25sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test25sec3[test25sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test25sec3[test25sec3.length - 1].ieltsScore) >= 4 && Number(test25sec3[test25sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test25sec3[test25sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test25sec3[test25sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test26sec1[0] || test26sec2[0] || test26sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>16</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test26Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test1Sec1Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Let's talk about Social Media  </h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test26sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test26sec1[test26sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test26sec1[test26sec1.length - 1].ieltsScore) >= 4 && Number(test26sec1[test26sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test26sec1[test26sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test26sec1[test26sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test26Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test1Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center"> Describe about an interesting old person you met recently</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test26sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test26sec2[test26sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test26sec2[test26sec2.length - 1].ieltsScore) >= 4 && Number(test26sec2[test26sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test26sec2[test26sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test26sec2[test26sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test26Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test1Sec3Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test26sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test26sec3[test26sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test26sec3[test26sec3.length - 1].ieltsScore) >= 4 && Number(test26sec3[test26sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test26sec3[test26sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test26sec3[test26sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test27sec1[0] || test27sec2[0] || test27sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>17</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test27Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test2Sec1Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">About Snakes</h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test27sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test27sec1[test27sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test27sec1[test27sec1.length - 1].ieltsScore) >= 4 && Number(test27sec1[test27sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test27sec1[test27sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test27sec1[test27sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test27Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test2Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about apices of technology that you find difficults to use.</h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test27sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test27sec2[test27sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test27sec2[test27sec2.length - 1].ieltsScore) >= 4 && Number(test27sec2[test27sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test27sec2[test27sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test27sec2[test27sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test27Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test3Sec3Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test27sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test27sec3[test27sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test27sec3[test27sec3.length - 1].ieltsScore) >= 4 && Number(test27sec3[test27sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test27sec3[test27sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test27sec3[test27sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test28sec1[0] || test28sec2[0] || test28sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>18</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test28Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test3Sec1Images} className="rounded-xl h-[78%]" />
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
                              876
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about signing.</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test28sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test28sec1[test28sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test28sec1[test28sec1.length - 1].ieltsScore) >= 4 && Number(test28sec1[test28sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test28sec1[test28sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test28sec1[test28sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test28Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test3Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Describe a historical period you would like to know more about.</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test28sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test28sec2[test28sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test28sec2[test28sec2.length - 1].ieltsScore) >= 4 && Number(test28sec2[test28sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test28sec2[test28sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test28sec2[test28sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test28Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test3Sec3Images} className="rounded-xl h-[78%]" />
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
                              <span className='font-bold text-sm ml-1 text-[11px] '>3.87</span>
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
                              1011
                            </p>
                          </div>
                        </div>
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test28sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test28sec3[test28sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test28sec3[test28sec3.length - 1].ieltsScore) >= 4 && Number(test28sec3[test28sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test28sec3[test28sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test28sec3[test28sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test29sec1[0] || test29sec2[0] || test29sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>19</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test29Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test1Sec1Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Puzzels. </h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test29sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test29sec1[test29sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test29sec1[test29sec1.length - 1].ieltsScore) >= 4 && Number(test29sec1[test29sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test29sec1[test29sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test29sec1[test29sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test29Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test1Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Describe an unusual meal that you had.</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test29sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test29sec2[test29sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test29sec2[test29sec2.length - 1].ieltsScore) >= 4 && Number(test29sec2[test29sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test29sec2[test29sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test29sec2[test29sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test29Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test1Sec3Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test29sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test29sec3[test29sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test29sec3[test29sec3.length - 1].ieltsScore) >= 4 && Number(test29sec3[test29sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test29sec3[test29sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test29sec3[test29sec3.length - 1].ieltsScore)}
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
                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test30sec1[0] || test30sec2[0] || test30sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>20</span></div>
                {/* <h4 className='text-center'>Test 1</h4> */}
                <div className=' mt-1' onClick={Test30Sec1}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test2Sec1Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Public transportation.  </h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test30sec1[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test30sec1[test30sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test30sec1[test30sec1.length - 1].ieltsScore) >= 4 && Number(test30sec1[test30sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test30sec1[test30sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test30sec1[test30sec1.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test30Sec2}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test2Sec2Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Describe about a thing you complained about something but finally got a good result.</h6>
                        <div className='flex justify-center gap-3 w-full '>

                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test30sec2[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test30sec2[test30sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test30sec2[test30sec2.length - 1].ieltsScore) >= 4 && Number(test30sec2[test30sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test30sec2[test30sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test30sec2[test30sec2.length - 1].ieltsScore)}
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
                <div className=' mt-1' onClick={Test30Sec3}>
                  <div className="flex flex-col justify-center relative ">
                    <div
                      className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                      <div className="w-1/3 grid place-items-center">
                        <Image src={test2Sec3Images} className="rounded-xl h-[78%]" />
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
                        <h6 className="font-black text-gray-800 text-[10px] text-center">Related Questions about section 2</h6>
                        <div className='flex justify-center gap-3 w-full '>
                          <div className='grid justify-center align-middle translate-y-[1px]'>
                            <div className='m-auto'>
                              {
                                test30sec3[0] ?
                                  <>
                                    {
                                      useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test30sec3[test30sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test30sec3[test30sec3.length - 1].ieltsScore) >= 4 && Number(test30sec3[test30sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test30sec3[test30sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                        {Number(test30sec3[test30sec3.length - 1].ieltsScore)}
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
              !openTestAfter30 && <div className='flex flex-wrap justify-center gap-4  p-[12px] sm:p-[15px] pb-5 pt-3'>

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
                    Please complete all tests from 21 to 30 first to activate the next set of 10 tests.
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

export default Card_To_30;
