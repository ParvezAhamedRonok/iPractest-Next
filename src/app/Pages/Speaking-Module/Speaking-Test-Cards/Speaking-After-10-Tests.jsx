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








function SpeakingAfter10Tests({ openTestAfter20, setOpenTestsAfter20, mainDataAll }) {
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
    let test11sec1 = []; let test11sec2 = []; let test11sec3 = []; let test12sec1 = []; let test12sec2 = []; let test12sec3 = [];
    let test13sec1 = []; let test13sec2 = []; let test13sec3 = []; let test14sec1 = []; let test14sec2 = []; let test14sec3 = [];
    let test15sec1 = []; let test15sec2 = []; let test15sec3 = []; let test16sec1 = []; let test16sec2 = []; let test16sec3 = [];
    let test17sec1 = []; let test17sec2 = []; let test17sec3 = []; let test18sec1 = []; let test18sec2 = []; let test18sec3 = [];
    let test19sec1 = []; let test19sec2 = []; let test19sec3 = []; let test20sec1 = []; let test20sec2 = []; let test20sec3 = [];





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






    // useEffect(() => {
    //     Axios({
    //         method: "get",
    //         url: 'http://localhost:8080/api/user/checkforDBPayAccess/' + useremail,
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then((res) => {
    //             //console.log(res.data);
    //             res.data.data.map((e) => {
    //                 if (e.paidStatus == "1") {
    //                     setBdPaidSatus(true)
    //                 }
    //             })
    //         })
    //         .catch((e) => { //console.log(e); })
    // }, []);

    // useEffect(() => {
    //     Axios({
    //         method: "get",
    //         url: 'http://localhost:8080/api/user/AccesPaypalPaid/' + useremail,
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((res) => {
    //         //console.log(res.data);
    //         res.data.data.map((e) => {
    //             if (e.orderId) {
    //                 setOtherPaidStatus(true)
    //             }
    //         })

    //     })
    //         .catch((e) => { //console.log(e); })
    // }, []);





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



    // Speaking-Test1-Section Functions
    const Test1Sec1 = (e) => {
        // if (bdPaidStatus || otherPaidStatus) {
        if (MainiOS()) {
            alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
        }
        else if (isMobile && isOpera) {
            alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
        }
        else if (isSafari) {
            alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
        }
        else {
            history.push("/Pages/Speaking-Module/Test1Sec1")
        };
        // } else {
        //     if (useremail && userCountry) {
        //         setBillPopUp(true);
        //history.push("/Pages/Payments/BillingComponent")
        //         // if(userCountry === "Bangladesh"){ 
        //         // }
        //     } else {
        // localStorage.setItem("productID", "Ok");

        //         //console.log("You have to login first..")
        //         openLogInPage();
        //         //setloginPage & Sign up page here...
        //     }
        // }
    }


    const Test1Sec2 = (e) => {
        if (MainiOS()) {
            alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
        }
        else if (isMobile && isOpera) {
            alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
        }
        else if (isSafari) {
            alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
        }
        else {
            // //e.preventDefault();
            history.push("/Pages/Speaking-Module/Test1Sec2")
        };
        // //e.preventDefault(); history.push("/Pages/Speaking-Module/Test1Sec2")

    };
    const Test1Sec3 = (e) => {
        // //e.preventDefault();
        if (MainiOS()) {
            alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
        }
        else if (isMobile && isOpera) {
            alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
        }
        else if (isSafari) {
            alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
        }
        else {
            history.push("/Pages/Speaking-Module/Test1Sec3")
        }


    };
    // Speaking-Test2-Section Functions           
    const Test2Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test2Sec1")
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
                // if(userCountry === "Bangladesh"){ 
                // }
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                //console.log("You have to login first..");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
                //if i want to redirect user to the payment page when he/she wants to pay for signup/login & after
                //they go to the dashboard it will chaek that user has that status to go to the payment page or not..
                // localStorage.setItem("redirectPayPage" , 1)

            }
        }


    };
    const Test2Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test2Sec2")
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                history.push("/Pages/Payments/BillingComponent")
                // setBillPopUp(true);
                // if(userCountry === "Bangladesh"){ 
                // }
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                //console.log("You have to login first..")
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }




    };
    const Test2Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test2Sec3")
            }

        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
                // if(userCountry === "Bangladesh"){ 
                // }
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                //console.log("You have to login first..");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };





    // Speaking-Test3-Section Functions           
    const Test3Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test3Sec1")
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
                // if(userCountry === "Bangladesh"){ 
                // }
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                //console.log("You have to login first..")
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }


    };
    const Test3Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test3Sec2")
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }


    };
    const Test3Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test3Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }


    };
    // Speaking-Test1-Section Functions
    const Test4Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test4Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test4Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test4Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }


    };
    const Test4Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test4Sec3")
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    // Speaking-Test2-Section Functions           
    const Test5Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test5Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }


    };
    const Test5Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test5Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test5Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test5Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }
    };
    // Speaking-Test3-Section Functions           
    const Test6Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test6Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }
    };
    const Test6Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test6Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test6Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test6Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }
    };
    // Speaking-Test1-Section Functions
    const Test7Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        // if (userPaymentStatusCheck == "Expert") {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test7Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }
    };
    const Test7Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test7Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test7Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test7Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }
    };
    // Speaking-Test2-Section Functions           
    const Test8Sec1 = (e) => {
        //e.preventDefault();

        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test8Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }
    };
    const Test8Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test8Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }
    };
    const Test8Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test8Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };

    // Speaking-Test-9-Section           
    const Test9Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test9Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test9Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test9Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test9Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test9Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };


    // Speaking-Test-10-Section           
    const Test10Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test10Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test10Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test10Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test10Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test10Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };


    // Speaking-Test-11-Section           
    const Test11Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test11Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test11Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test11Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test11Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test11Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };



    // Speaking-Test-12-Section           
    const Test12Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test12Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test12Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test12Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test12Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test12Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };



    // Speaking-Test-13-Section           
    const Test13Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test13Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test13Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test13Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test13Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test13Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };



    // Speaking-Test-14-Section           
    const Test14Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test14Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test14Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test14Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test14Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test14Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    }


    // Speaking-Test-15-Section           
    const Test15Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test15Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test15Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test15Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test15Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test15Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };


    // Speaking-Test-16-Section           
    const Test16Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test16Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test16Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test16Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test16Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test16Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };


    // Speaking-Test-17-Sections--------          
    const Test17Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test17Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test17Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test17Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test17Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test17Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };

    // Speaking-Test-17-Sections--------          
    const Test18Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test18Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test18Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test18Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test18Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test18Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };


    // Speaking-Test-19-Sections--------          
    const Test19Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test19Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test19Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test19Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test19Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test19Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };

    // Speaking-Test-17-Sections--------          
    const Test20Sec1 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test20Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test20Sec2 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test20Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test20Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test20Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };



    // Speaking-Test-17-Sections--------          
    const Test21Sec1 = (e) => {
        ////e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test21Sec1");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test21Sec2 = (e) => {
        ////e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test21Sec2");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };
    const Test21Sec3 = (e) => {
        //e.preventDefault();
        // if (bdPaidStatus || otherPaidStatus) {
        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
            if (MainiOS()) {
                alert("Sorry...Speaking Exam is not available for iPhone and iPad.")
            }
            else if (isMobile && isOpera) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else if (isSafari) {
                alert("Please use Chrome/Firefox/Microsoft-Edge/Aloha")
            }
            else {
                history.push("/Pages/Speaking-Module/Test21Sec3");
            }
        } else {
            if (useremail && userCountry) {
                localStorage.setItem("productID", "SpeakingPage");
                // setBillPopUp(true);
                history.push("/Pages/Payments/BillingComponent")
            } else {
                // localStorage.setItem("productID", "SpeakingPage");
                setWritingText("Need to login first");
                openLogInPage();
                //setloginPage & Sign up page here...
            }
        }

    };








    //for storing all speaking scores data for changing UI-----------
    //test-1
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test11Sec1") {
            test11sec1.push(items);
        }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test11Sec2") {
            test11sec2.push(items);
        }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test11Sec3") { test11sec3.push(items); }
    })
    //test-2
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test12Sec1") { test12sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test12Sec2") { test12sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test12Sec3") { test12sec3.push(items); }
    })

    //test-3
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test13Sec1") { test13sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test13Sec2") { test13sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test13Sec3") { test13sec3.push(items); }
    })

    //test-4
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test14Sec1") { test14sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test14Sec2") { test14sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test14Sec3") { test14sec3.push(items); }
    })

    //test-5
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test15Sec1") { test15sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test15Sec2") { test15sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test15Sec3") { test15sec3.push(items); }
    })

    //test-6
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test16Sec1") { test16sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test16Sec2") { test16sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test16Sec3") { test16sec3.push(items); }
    })

    //test-7
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test17Sec1") { test17sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test17Sec2") { test17sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test17Sec3") { test17sec3.push(items); }
    })

    //test-8
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test18Sec1") { test18sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test18Sec2") { test18sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test18Sec3") { test18sec3.push(items); }
    })

    //test-9
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test19Sec1") { test19sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test19Sec2") { test19sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test19Sec3") { test19sec3.push(items); }
    })

    //test-10
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test20Sec1") { test20sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test20Sec2") { test20sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test20Sec3") { test20sec3.push(items); }
    })

    //store all speaking data singleitems for load more 10 test---
    //test-1
    if (test11sec1[0]) { checkLoadMoreArray.push("Test11Sec1"); }
    if (test11sec2[0]) { checkLoadMoreArray.push("Test11Sec2"); }
    if (test11sec3[0]) { checkLoadMoreArray.push("Test11Sec3"); }

    //test-2
    if (test12sec1[0]) { checkLoadMoreArray.push("Test12Sec1"); }
    if (test12sec2[0]) { checkLoadMoreArray.push("Test12Sec2"); }
    if (test12sec3[0]) { checkLoadMoreArray.push("Test12Sec3"); }

    //test-3
    if (test13sec1[0]) { checkLoadMoreArray.push("Test13Sec1"); }
    if (test13sec2[0]) { checkLoadMoreArray.push("Test13Sec2"); }
    if (test13sec3[0]) { checkLoadMoreArray.push("Test13Sec3"); }

    //test-4
    if (test14sec1[0]) { checkLoadMoreArray.push("Test14Sec1"); }
    if (test14sec2[0]) { checkLoadMoreArray.push("Test14Sec2"); }
    if (test14sec3[0]) { checkLoadMoreArray.push("Test14Sec3"); }

    //test-5
    if (test15sec1[0]) { checkLoadMoreArray.push("Test15Sec1"); }
    if (test15sec2[0]) { checkLoadMoreArray.push("Test15Sec2"); }
    if (test15sec3[0]) { checkLoadMoreArray.push("Test15Sec3"); }

    //test-6
    if (test16sec1[0]) { checkLoadMoreArray.push("Test16Sec1"); }
    if (test16sec2[0]) { checkLoadMoreArray.push("Test16Sec2"); }
    if (test16sec3[0]) { checkLoadMoreArray.push("Test16Sec3"); }

    //test-7
    if (test17sec1[0]) { checkLoadMoreArray.push("Test17Sec1"); }
    if (test17sec2[0]) { checkLoadMoreArray.push("Test17Sec2"); }
    if (test17sec3[0]) { checkLoadMoreArray.push("Test17Sec3"); }

    //test-8
    if (test18sec1[0]) { checkLoadMoreArray.push("Test18Sec1"); }
    if (test18sec2[0]) { checkLoadMoreArray.push("Test18Sec2"); }
    if (test18sec3[0]) { checkLoadMoreArray.push("Test18Sec3"); }

    //test-9
    if (test19sec1[0]) { checkLoadMoreArray.push("Test19Sec1"); }
    if (test19sec2[0]) { checkLoadMoreArray.push("Test19Sec2"); }
    if (test19sec3[0]) { checkLoadMoreArray.push("Test19Sec3"); }

    //test-10
    if (test20sec1[0]) { checkLoadMoreArray.push("Test20Sec1"); }
    if (test20sec2[0]) { checkLoadMoreArray.push("Test20Sec2"); }
    if (test20sec3[0]) { checkLoadMoreArray.push("Test20Sec3"); }







    //for-load-more-10-test-functions---
    const checkAllTestsForOpenNextTests = () => {
        setLoadMoreStatus(true);
        // let itemsNumber = [];
        // //console.log(userAllSpeakingData)
        // //console.log(typeof user.email);
        //Map all the user Speaking data && store data into the above empty arry in every time 
        // for make sure that how many tests has been done by the user ---
        // if (userAllSpeakingData[0]) {
        //     userAllSpeakingData.map((items, index) => {
        //         //console.log(index)
        //         if (items.SectionName != null && items.SectionName != "") {
        //             itemsNumber.push(items.SectionName);
        //         }

        //     })
        // }
        // //console.log(itemsNumber)
        // //console.log(itemsNumber.sort());
        // //console.log(typeof itemsNumber.sort().length)


        //Give access to the user if user have already finished above 10 test 
        // other wise tell to the user need to be finished above 10 tests first---
        setTimeout(() => {
            if (checkLoadMoreArray[0]) {
                // //console.log(checkLoadMoreArray.sort().length)
                // alert(checkLoadMoreArray.sort().length)
                // alert(typeof checkLoadMoreArray.sort().length)
                if (checkLoadMoreArray.sort().length == 30) {
                    setOpenTestsAfter20(true);
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


        // //console.log(itemsNumber)

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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test11sec1[0] || test11sec2[0] || test11sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>11</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}


                                <div className=' mt-1' onClick={Test11Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About spending time in nature</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test11sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test11sec1[test11sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test11sec1[test11sec1.length - 1].ieltsScore) >= 4 && Number(test11sec1[test11sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test11sec1[test11sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test11sec1[test11sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test11Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">ABout your your dream vacation where you want to go</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test11sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test11sec2[test11sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test11sec2[test11sec2.length - 1].ieltsScore) >= 4 && Number(test11sec2[test11sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test11sec2[test11sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test11sec2[test11sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test11Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about dream Vacation , destination, experience you have spend </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test11sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test11sec3[test11sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test11sec3[test11sec3.length - 1].ieltsScore) >= 4 && Number(test11sec3[test11sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test11sec3[test11sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test11sec3[test11sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test12sec1[0] || test12sec2[0] || test12sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>12</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test12Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about Math & Favourite subjects.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test12sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test12sec1[test12sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test12sec1[test12sec1.length - 1].ieltsScore) >= 4 && Number(test12sec1[test12sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test12sec1[test12sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test12sec1[test12sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test12Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about an important choice that you had in your life.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test12sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test12sec2[test12sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test12sec2[test12sec2.length - 1].ieltsScore) >= 4 && Number(test12sec2[test12sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test12sec2[test12sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test12sec2[test12sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test12Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">talk about life-changing situations, unplanned circumstances</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test12sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test12sec3[test12sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test12sec3[test12sec3.length - 1].ieltsScore) >= 4 && Number(test12sec3[test12sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test12sec3[test12sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test12sec3[test12sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test13sec1[0] || test13sec2[0] || test13sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>13</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test13Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about the polutions </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test13sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test13sec1[test13sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test13sec1[test13sec1.length - 1].ieltsScore) >= 4 && Number(test13sec1[test13sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test13sec1[test13sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test13sec1[test13sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test13Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe time when you was late.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test13sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test13sec2[test13sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test13sec2[test13sec2.length - 1].ieltsScore) >= 4 && Number(test13sec2[test13sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test13sec2[test13sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test13sec2[test13sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test13Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about time management.</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test13sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test13sec3[test13sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test13sec3[test13sec3.length - 1].ieltsScore) >= 4 && Number(test13sec3[test13sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test13sec3[test13sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test13sec3[test13sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test14sec1[0] || test14sec2[0] || test14sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>14</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test14Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about sports games. </h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test14sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test14sec1[test14sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test14sec1[test14sec1.length - 1].ieltsScore) >= 4 && Number(test14sec1[test14sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test14sec1[test14sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test14sec1[test14sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test14Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe a traffic jan you have seen.</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test14sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test14sec2[test14sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test14sec2[test14sec2.length - 1].ieltsScore) >= 4 && Number(test14sec2[test14sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test14sec2[test14sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test14sec2[test14sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test14Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk more about traffic jams.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test14sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test14sec3[test14sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test14sec3[test14sec3.length - 1].ieltsScore) >= 4 && Number(test14sec3[test14sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test14sec3[test14sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test14sec3[test14sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test15sec1[0] || test15sec2[0] || test15sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>15</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test15Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Mirroor that makes you nice</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test15sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test15sec1[test15sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test15sec1[test15sec1.length - 1].ieltsScore) >= 4 && Number(test15sec1[test15sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test15sec1[test15sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test15sec1[test15sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test15Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Discuss an invention has changed  people live.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test15sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test15sec2[test15sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test15sec2[test15sec2.length - 1].ieltsScore) >= 4 && Number(test15sec2[test15sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test15sec2[test15sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test15sec2[test15sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test15Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About innovention that change people lives.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test15sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test15sec3[test15sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test15sec3[test15sec3.length - 1].ieltsScore) >= 4 && Number(test15sec3[test15sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test15sec3[test15sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test15sec3[test15sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test16sec1[0] || test16sec2[0] || test16sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>16</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test16Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Let's talk about Watch  </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test16sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test16sec1[test16sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test16sec1[test16sec1.length - 1].ieltsScore) >= 4 && Number(test16sec1[test16sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test16sec1[test16sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test16sec1[test16sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test16Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center"> Describe an advertisement you remember.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test16sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test16sec2[test16sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test16sec2[test16sec2.length - 1].ieltsScore) >= 4 && Number(test16sec2[test16sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test16sec2[test16sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test16sec2[test16sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test16Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">advertising be regulated & endorsement</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test16sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test16sec3[test16sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test16sec3[test16sec3.length - 1].ieltsScore) >= 4 && Number(test16sec3[test16sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test16sec3[test16sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test16sec3[test16sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test17sec1[0] || test17sec2[0] || test17sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>17</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test17Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About your hobbies, & your favourite numbers </h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test17sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test17sec1[test17sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test17sec1[test17sec1.length - 1].ieltsScore) >= 4 && Number(test17sec1[test17sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test17sec1[test17sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test17sec1[test17sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test17Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about an event.</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test17sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test17sec2[test17sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test17sec2[test17sec2.length - 1].ieltsScore) >= 4 && Number(test17sec2[test17sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test17sec2[test17sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test17sec2[test17sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test17Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">helping in the community, funding needed.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test17sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test17sec3[test17sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test17sec3[test17sec3.length - 1].ieltsScore) >= 4 && Number(test17sec3[test17sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test17sec3[test17sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test17sec3[test17sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test18sec1[0] || test18sec2[0] || test18sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>18</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test18Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Sitting down.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test18sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test18sec1[test18sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test18sec1[test18sec1.length - 1].ieltsScore) >= 4 && Number(test18sec1[test17sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test18sec1[test18sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test18sec1[test18sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test18Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Discuss Traditional product of a country.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test18sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test18sec2[test18sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test18sec2[test18sec2.length - 1].ieltsScore) >= 4 && Number(test18sec2[test18sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test18sec2[test18sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test18sec2[test18sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test18Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">More about traditional products</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test18sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test18sec3[test18sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test18sec3[test18sec3.length - 1].ieltsScore) >= 4 && Number(test18sec1[test17sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test18sec3[test18sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test18sec3[test18sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test19sec1[0] || test19sec2[0] || test19sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>19</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test19Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about as old building. </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test19sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test19sec1[test19sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test19sec1[test19sec1.length - 1].ieltsScore) >= 4 && Number(test19sec1[test19sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test19sec1[test19sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test19sec1[test19sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test19Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe positive changes in life.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test19sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test19sec2[test19sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test19sec2[test19sec2.length - 1].ieltsScore) >= 4 && Number(test19sec2[test19sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test19sec2[test19sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test19sec2[test19sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test19Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">More about positive changes in life</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test19sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test19sec3[test19sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test19sec3[test19sec3.length - 1].ieltsScore) >= 4 && Number(test19sec3[test19sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test19sec3[test19sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test19sec3[test19sec3.length - 1].ieltsScore)}
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
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test20sec1[0] || test20sec2[0] || test20sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>20</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test20Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About about favourite place to meet. </h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test20sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test20sec1[test20sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test20sec1[test20sec1.length - 1].ieltsScore) >= 4 && Number(test20sec1[test20sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test20sec1[test20sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test20sec1[test20sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test20Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe abput an important event.</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test20sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test20sec2[test20sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test20sec2[test20sec2.length - 1].ieltsScore) >= 4 && Number(test20sec2[test20sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test20sec2[test20sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test20sec2[test20sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test20Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About  event celevrations in your life.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test20sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test20sec3[test20sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test20sec3[test20sec3.length - 1].ieltsScore) >= 4 && Number(test20sec3[test20sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test20sec3[test20sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test20sec3[test20sec3.length - 1].ieltsScore)}
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
                        {/* 
                            !openTestAfter10 && <div className='flex flex-wrap justify-center gap-4  p-[12px] sm:p-[15px] pb-5 pt-3'>
                                {/* <button className='p-2 hover:bg-blue-400 bg-green-400 flex justify-center align-middle rounded w-[80%] sm:w-[20%] text-white text-[15px]'
                                    onClick={checkAllTestsForOpenNextTests}
                                >
                                    {
                                        loadMoreStatus ? (<LoadingCom />) : <div className='flex gap-2'>Load More 10 Tests <AiOutlineLogin className='text-xl translate-y-[2px] text-purple-600 font-bold' /> </div>
                                    }
                                </button> 
                                <button className="bookmarkBtn" onClick={checkAllTestsForOpenNextTests} >
                                    <span className="IconContainer">
                                        {loadMoreStatus ? (<LoadingCom className="text-xl" />) : < AiOutlineLogin className="text-xl" />}
                                    </span>
                                    <p className="text">Load More 10 Tests </p>
                                </button>
                            </div>
                        
                         */}











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
                                        Please complete all tests from 1 to 10 first to activate the next set of 10 tests.
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* Give Motivate user component */}
            {

                openCongressPopup && (
                    <Motivation
                        setopenCongressPopup={setopenCongressPopup}
                        Test1Sec1={Test1Sec1}
                        Test1Sec2={Test1Sec2}
                        Test1Sec3={Test1Sec3}

                        Test2Sec1={Test2Sec1}
                        Test2Sec2={Test2Sec2}
                        Test2Sec3={Test2Sec3}

                        Test3Sec1={Test3Sec1}
                        Test3Sec2={Test3Sec2}
                        Test3Sec3={Test3Sec3}

                        Test4Sec1={Test4Sec1}
                        Test4Sec2={Test4Sec2}
                        Test4Sec3={Test4Sec3}

                        Test5Sec1={Test5Sec1}
                        Test5Sec2={Test5Sec2}
                        Test5Sec3={Test5Sec3}

                        Test6Sec1={Test6Sec1}
                        Test6Sec2={Test6Sec2}
                        Test6Sec3={Test6Sec3}

                        Test7Sec1={Test7Sec1}
                        Test7Sec2={Test7Sec2}
                        Test7Sec3={Test7Sec3}

                        Test8Sec1={Test8Sec1}
                        Test8Sec2={Test8Sec2}
                        Test8Sec3={Test8Sec3}

                        Test9Sec1={Test9Sec1}
                        Test9Sec2={Test9Sec2}
                        Test9Sec3={Test9Sec3}

                        Test10Sec1={Test10Sec1}
                        Test10Sec2={Test10Sec2}
                        Test10Sec3={Test10Sec3}

                        Test11Sec1={Test11Sec1}
                        Test11Sec2={Test11Sec2}
                        Test11Sec3={Test11Sec3}

                        Test12Sec1={Test12Sec1}
                        Test12Sec2={Test12Sec2}
                        Test12Sec3={Test12Sec3}

                        Test13Sec1={Test13Sec1}
                        Test13Sec2={Test13Sec2}
                        Test13Sec3={Test13Sec3}

                        Test14Sec1={Test14Sec1}
                        Test14Sec2={Test14Sec2}
                        Test14Sec3={Test14Sec3}

                        Test15Sec1={Test15Sec1}
                        Test15Sec2={Test15Sec2}
                        Test15Sec3={Test15Sec3}

                        Test16Sec1={Test16Sec1}
                        Test16Sec2={Test16Sec2}
                        Test16Sec3={Test16Sec3}

                        Test17Sec1={Test17Sec1}
                        Test17Sec2={Test17Sec2}
                        Test17Sec3={Test17Sec3}

                        Test18Sec1={Test18Sec1}
                        Test18Sec2={Test18Sec2}
                        Test18Sec3={Test18Sec3}

                        Test19Sec1={Test19Sec1}
                        Test19Sec2={Test19Sec2}
                        Test19Sec3={Test19Sec3}

                        Test20Sec1={Test20Sec1}
                        Test20Sec2={Test20Sec2}
                        Test20Sec3={Test20Sec3}


                    />
                )
            }



        </>
    );
}

export default SpeakingAfter10Tests;
