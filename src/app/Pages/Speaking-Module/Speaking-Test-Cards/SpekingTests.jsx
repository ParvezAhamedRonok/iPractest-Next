"use client"
import React, { useEffect, useState } from 'react';
import "./index.css";
import { useRouter } from 'next/navigation';
import { isSafari, isMobile, isOpera } from "react-device-detect";
import "./index.css";
import LoginPage from "../../LoginPage/LoginPage";
import SignUpPage from '../../LoginPage/SignUpPage';
import { useStateContext } from "../../../../contexts/ContextProvider";
import { FaTeamspeak } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import Image from 'next/image';
import Motivation from './Motivation.jsx';
import { AiOutlineLogin } from "react-icons/ai";

import TellusReason from './TellusResoan';
import LoadingCom from '../../LoginPage/ForgetPassword/LoadingCom.js';

import ImagSide from "../../../../assets/images/Speaking-Images/ImgSide2.png"

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


//End of the importing-------------
function SpeakingTests({ openTestAfter10, setOpenTestsAfter10, mainDataAll }) {
    const { setWritingText, bdPaidStatus, setBdPaidSatus, otherPaidStatus, setOtherPaidStatus, billPopUp, setBillPopUp, userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();
    const history = useRouter();

    //all localstorage variables for storing the localstorage data...
    const [useremail, setuseremail] = useState("");
    const [userToken, setuserToken] = useState("")
    const [userCountry, setuserCountry] = useState("")


    const [forSignUpPage, setForSignUpPage] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false);
    const [loadMoreStatus, setLoadMoreStatus] = useState(false);
    const [ShowUserIfTheyDidNotCompleteAboveTests, setShowUserIfTheyDidNotCompleteAboveTests] = useState(false);
    const [showVocabularyPopup, setShowVocabularyPopup] = useState(false);

    const [openCongressPopup, setopenCongressPopup] = useState(false)


    //make array for user scores showing----
    //check-conditions-when-user-click-on-load-more-10-test-button------------
    let checkLoadMoreArray = [];
    let test1sec1 = []; let test1sec2 = []; let test1sec3 = []; let test2sec1 = []; let test2sec2 = []; let test2sec3 = [];
    let test3sec1 = []; let test3sec2 = []; let test3sec3 = []; let test4sec1 = []; let test4sec2 = []; let test4sec3 = [];
    let test5sec1 = []; let test5sec2 = []; let test5sec3 = []; let test6sec1 = []; let test6sec2 = []; let test6sec3 = [];
    let test7sec1 = []; let test7sec2 = []; let test7sec3 = []; let test8sec1 = []; let test8sec2 = []; let test8sec3 = [];
    let test9sec1 = []; let test9sec2 = []; let test9sec3 = []; let test10sec1 = []; let test10sec2 = []; let test10sec3 = [];


    //all Useeffect use here..........
    useEffect(() => {
        //storing all localstorage data into variables by code below
        setuseremail(localStorage.getItem('userEmail') && localStorage.getItem('userEmail'));
        setuserToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"))
        setuserCountry(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"))

        //for opening the speaking motivational popUp for motivate users..........
        if (localStorage.getItem('forSpeakingMotivation')) {
            setopenCongressPopup(true);
        }
        // alert(localStorage.getItem("S_ScorModuleNo3"))
    }, [])



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
    //             console.log(res.data);
    //             res.data.data.map((e) => {
    //                 if (e.paidStatus == "1") {
    //                     setBdPaidSatus(true)
    //                 }
    //             })
    //         })
    //         .catch((e) => { console.log(e); })
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
    //         console.log(res.data);
    //         res.data.data.map((e) => {
    //             if (e.orderId) {
    //                 setOtherPaidStatus(true)
    //             }
    //         })

    //     })
    //         .catch((e) => { console.log(e); })
    // }, []);



    console.log(useremail)
    console.log(userCountry);
    console.log(userToken)

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




    console.log(bdPaidStatus);
    console.log(otherPaidStatus);
    console.log(userPaymentStatusCheck)

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

        //         console.log("You have to login first..")
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
                console.log("You have to login first..");
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
                console.log("You have to login first..")
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
                console.log("You have to login first..");
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
                console.log("You have to login first..")
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
        if (items.SectionName == "Test1Sec1") {
            test1sec1.push(items);
        }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test1Sec2") {
            test1sec2.push(items);
        }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test1Sec3") { test1sec3.push(items); }
    })
    //test-2
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test2Sec1") { test2sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test2Sec2") { test2sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test2Sec3") { test2sec3.push(items); }
    })

    //test-3
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test3Sec1") { test3sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test3Sec2") { test3sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test3Sec3") { test3sec3.push(items); }
    })

    //test-4
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test4Sec1") { test4sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test4Sec2") { test4sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test4Sec3") { test4sec3.push(items); }
    })

    //test-5
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test5Sec1") { test5sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test5Sec2") { test5sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test5Sec3") { test5sec3.push(items); }
    })

    //test-6
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test6Sec1") { test6sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test6Sec2") { test6sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test6Sec3") { test6sec3.push(items); }
    })

    //test-7
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test7Sec1") { test7sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test7Sec2") { test7sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test7Sec3") { test7sec3.push(items); }
    })

    //test-8
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test8Sec1") { test8sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test8Sec2") { test8sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test8Sec3") { test8sec3.push(items); }
    })

    //test-9
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test9Sec1") { test9sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test9Sec2") { test9sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test9Sec3") { test9sec3.push(items); }
    })

    //test-10
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test10Sec1") { test10sec1.push(items); }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test10Sec2") { test10sec2.push(items); }
    })
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Test10Sec3") { test10sec3.push(items); }
    })

    //store all speaking data singleitems for load more 10 test---
    //test-1
    if (test1sec1[0]) { checkLoadMoreArray.push("Test1Sec1"); }
    if (test1sec2[0]) { checkLoadMoreArray.push("Test1Sec2"); }
    if (test1sec3[0]) { checkLoadMoreArray.push("Test1Sec3"); }

    //test-2
    if (test2sec1[0]) { checkLoadMoreArray.push("Test2Sec1"); }
    if (test2sec2[0]) { checkLoadMoreArray.push("Test2Sec2"); }
    if (test2sec3[0]) { checkLoadMoreArray.push("Test2Sec3"); }

    //test-3
    if (test3sec1[0]) { checkLoadMoreArray.push("Test3Sec1"); }
    if (test3sec2[0]) { checkLoadMoreArray.push("Test3Sec2"); }
    if (test3sec3[0]) { checkLoadMoreArray.push("Test3Sec3"); }

    //test-4
    if (test4sec1[0]) { checkLoadMoreArray.push("Test4Sec1"); }
    if (test4sec2[0]) { checkLoadMoreArray.push("Test4Sec2"); }
    if (test4sec3[0]) { checkLoadMoreArray.push("Test4Sec3"); }

    //test-5
    if (test5sec1[0]) { checkLoadMoreArray.push("Test5Sec1"); }
    if (test5sec2[0]) { checkLoadMoreArray.push("Test5Sec2"); }
    if (test5sec3[0]) { checkLoadMoreArray.push("Test5Sec3"); }

    //test-6
    if (test6sec1[0]) { checkLoadMoreArray.push("Test6Sec1"); }
    if (test6sec2[0]) { checkLoadMoreArray.push("Test6Sec2"); }
    if (test6sec3[0]) { checkLoadMoreArray.push("Test6Sec3"); }

    //test-7
    if (test7sec1[0]) { checkLoadMoreArray.push("Test7Sec1"); }
    if (test7sec2[0]) { checkLoadMoreArray.push("Test7Sec2"); }
    if (test7sec3[0]) { checkLoadMoreArray.push("Test7Sec3"); }

    //test-8
    if (test8sec1[0]) { checkLoadMoreArray.push("Test8Sec1"); }
    if (test8sec2[0]) { checkLoadMoreArray.push("Test8Sec2"); }
    if (test8sec3[0]) { checkLoadMoreArray.push("Test8Sec3"); }

    //test-9
    if (test9sec1[0]) { checkLoadMoreArray.push("Test9Sec1"); }
    if (test9sec2[0]) { checkLoadMoreArray.push("Test9Sec2"); }
    if (test9sec3[0]) { checkLoadMoreArray.push("Test9Sec3"); }

    //test-10
    if (test10sec1[0]) { checkLoadMoreArray.push("Test10Sec1"); }
    if (test10sec2[0]) { checkLoadMoreArray.push("Test10Sec2"); }
    if (test10sec3[0]) { checkLoadMoreArray.push("Test10Sec3"); }







    //for-load-more-10-test-functions---
    const checkAllTestsForOpenNextTests = () => {
        setLoadMoreStatus(true);
        // let checkAll10Tests = [
        //     'Test1Sec1', 'Test1Sec2', 'Test1Sec3',
        //     'Test2Sec1', 'Test2Sec2', 'Test2Sec3',
        //     'Test3Sec1', 'Test3Sec2', 'Test3Sec3',
        //     'Test4Sec1', 'Test4Sec2', 'Test4Sec3',
        //     'Test5Sec1', 'Test5Sec2', 'Test5Sec3',
        //     'Test6Sec1', 'Test6Sec2', 'Test6Sec3',
        //     'Test7Sec1', 'Test7Sec2', 'Test7Sec3',
        //     'Test8Sec1', 'Test8Sec2', 'Test8Sec3',
        //     'Test9Sec1', 'Test9Sec2', 'Test9Sec3',
        //     'Test10Sec1', 'Test10Sec2', 'Test10Sec3',

        // ]
        // let itemsNumber = [];
        // console.log(userAllSpeakingData)
        // console.log(typeof user.email);
        //Map all the user Speaking data && store data into the above empty arry in every time 
        // for make sure that how many tests has been done by the user ---
        // if (userAllSpeakingData[0]) {
        //     userAllSpeakingData.map((items, index) => {
        //         console.log(index)
        //         if (items.SectionName != null && items.SectionName != "") {
        //             itemsNumber.push(items.SectionName);
        //         }

        //     })
        // }
        // console.log(itemsNumber)
        // console.log(itemsNumber.sort());
        // console.log(typeof itemsNumber.sort().length)


        //Give access to the user if user have already finished above 10 test 
        // other wise tell to the user need to be finished above 10 tests first---
        setTimeout(() => {
            if (checkLoadMoreArray[0]) {
                // console.log(checkLoadMoreArray.sort().length)
                // alert(checkLoadMoreArray.sort().length)
                // alert(typeof checkLoadMoreArray.sort().length)
                if (checkLoadMoreArray.sort().length == 30) {
                    setOpenTestsAfter10(true);
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


        // console.log(itemsNumber)

    }





    console.log(test1sec1)
    console.log(test1sec2)
    console.log(test1sec3)
    console.log(test2sec1);
    console.log(mainDataAll)

    return (
        <>
            <section className="appie-service-area appie-service-3-area pt-[125px] sm:pt-[145px] pb-50" id="service"
            >
                <div className="w-full grid sm:flex gap-3 justify-center  p-4">
                    <div className="text-center w-[100%] sm:w-[50%]  rounded  grid justify-center align-middle h-[210px] sm:h-[350px]">
                        <div className="m-auto translate-x-[0px] sm:translate-x-[15px]">
                            <button
                                className="flex items-center border border-gray-300 rounded-[20px] shadow-md p-2 text-sm font-medium text-white hover:bg-gray-200 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-gray-500 m-auto gap-1"
                                style={{ background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)" }}
                                onClick={() => { setShowVocabularyPopup(true) }}
                            >
                                <span>Speaking Vocabularies</span>
                                <FaTeamspeak className="font-bold text-xl text-red-500" />

                            </button>
                            <strong className='text-3xl sm:text-5xl mb-3 font-bold'>Your Speaking Partner</strong>
                            <p className="mt-1"> Give all the ielts test and get results instantly.</p>
                            <div className='w-full justify-center p-3 mt-1'>
                                <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 zoom-in-out-box"
                                    onClick={() => {
                                        useremail ? history.push("/MainDashBoard/Speaking-Records") : alert("Need to login first")
                                    }}
                                >
                                    Check speaking Records
                                    <FaTeamspeak className='text-3xl mt-[-3px]' />
                                </button>

                            </div>
                        </div>
                    </div>
                    {
                        !isMobile && (
                            <div className="text-center w-[100%] sm:w-[50%]">
                                <Image src={ImagSide} alt="" className="w-[100%] sm:w-[74%] h-[250px] sm:h-[300px] rounded ml-[0px] sm:ml-[7px] z-[55] translate-y-[25px]" />
                            </div>
                        )
                    }
                </div>


                {/* <div className="appie-section-title text-center z-[3] w-[100%]">
                    <h5 className="appie-title">Your Speaking Partner</h5>
                    <p className='text-black '>
                        Speaking test is now more convenient
                    </p>
                    {
                        useremail && (
                            <div className='w-full justify-center p-3'>
                                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 zoom-in-out-box"
                                    onClick={() => { history.push("/MainDashBoard/Speaking-Records") }}
                                >
                                    Check speaking Records
                                    <FaTeamspeak className='text-3xl mt-[-3px]' />
                                </button>
                            </div>)
                    }

                </div> */}


                <div className='p-[10px] sm:p-[32px]  z-[55] translate-y-[-20px] sm:translate-y-[-27px]'>
                    <div className="w-full justify-center pt-[50px] sm:pt-[10px]  rounded-t-[33px] sm:rounded bg-gray-100">
                        <div className='flex flex-wrap justify-center gap-4  p-[12px] sm:p-[15px]'>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                ${(test1sec1[0] || test1sec2[0] || test1sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>1</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                {/* show overall scores of a test */}
                                {/* {(test1sec1[0] || test1sec2[0] || test1sec3[0]) && useremail && (
                                    <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                        Overall :
                                        <span className="font-bold text-[16px] translate-y-[-2px]">
                                            {
                                                Math.round(((Number(test1sec1[test1sec1.length - 1].ieltsScore) + Number(test1sec2[test1sec2.length - 1].ieltsScore) + Number(test1sec3[test1sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                            }
                                        </span>
                                    </div>
                                )
                                } */}

                                <div className=' mt-1' onClick={Test1Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about favorite food & fast food </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test1sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test1sec1[test1sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test1sec1[test1sec1.length - 1].ieltsScore) >= 4 && Number(test1sec1[test1sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test1sec1[test1sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test1sec1[test1sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test1Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About an Idiea for learning more effective</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test1sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test1sec2[test1sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test1sec2[test1sec2.length - 1].ieltsScore) >= 4 && Number(test1sec2[test1sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test1sec2[test1sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test1sec2[test1sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test1Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about motivate childrens & kids</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test1sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test1sec3[test1sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test1sec3[test1sec3.length - 1].ieltsScore) >= 4 && Number(test1sec3[test1sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test1sec3[test1sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test1sec3[test1sec3.length - 1].ieltsScore)}
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
                                            (test2sec1[0] || test2sec2[0] || test2sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test2sec1[test2sec1.length - 1].ieltsScore) + Number(test2sec2[test2sec2.length - 1].ieltsScore) + Number(test2sec3[test2sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )
                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test2sec1[0] || test2sec2[0] || test2sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>2</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test2Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About Hometown , where you grow up. </h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test2sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test2sec1[test2sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test2sec1[test2sec1.length - 1].ieltsScore) >= 4 && Number(test2sec1[test2sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test2sec1[test2sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test2sec1[test2sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test2Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe a place where has a lot of noise</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test2sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test2sec2[test2sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test2sec2[test2sec2.length - 1].ieltsScore) >= 4 && Number(test2sec2[test2sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test2sec2[test2sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test2sec2[test2sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test2Sec3}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">More about Noice</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test2sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test2sec3[test2sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test2sec3[test2sec3.length - 1].ieltsScore) >= 4 && Number(test2sec3[test2sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test2sec3[test2sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test2sec3[test2sec3.length - 1].ieltsScore)}
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
                                            (test3sec1[0] || test3sec2[0] || test3sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test3sec1[test3sec1.length - 1].ieltsScore) + Number(test3sec2[test3sec2.length - 1].ieltsScore) + Number(test3sec3[test3sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )
                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test3sec1[0] || test3sec2[0] || test3sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>3</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test3Sec1}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about Familly Members.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test3sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test3sec1[test3sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test3sec1[test3sec1.length - 1].ieltsScore) >= 4 && Number(test3sec1[test3sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test3sec1[test3sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test3sec1[test3sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test3Sec2}>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Discuss about a person Who inspired you.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test3sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test3sec2[test3sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test3sec2[test3sec2.length - 1].ieltsScore) >= 4 && Number(test3sec2[test3sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test3sec2[test3sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test3sec2[test3sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test3Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test10Sec2Images} className="rounded-xl h-[78%]" />
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About good news you have listened.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test3sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test3sec3[test3sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test3sec3[test3sec3.length - 1].ieltsScore) >= 4 && Number(test3sec3[test3sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test3sec3[test3sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test3sec3[test3sec3.length - 1].ieltsScore)}
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

                        <div className='flex flex-wrap justify-center gap-4  p-[7px] sm:p-[15px]'>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            (test4sec1[0] || test4sec2[0] || test4sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test4sec1[test4sec1.length - 1].ieltsScore) + Number(test4sec2[test4sec2.length - 1].ieltsScore) + Number(test4sec3[test4sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }

                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test4sec1[0] || test4sec2[0] || test4sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>4</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test4Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test4Sec1Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.90</span>
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
                                                            1315
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about reading books.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {/* {localStorage.getItem("S_ScorModuleNo10") && localStorage.getItem('userEmail') ?
                                                                <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                     ${Number(localStorage.getItem("S_ScorModuleNo10")) < 4 && "bg-red-600 text-white"}

                                                                     ${Number(localStorage.getItem("S_ScorModuleNo10")) >= 4 && Number(localStorage.getItem("S_ScorModuleNo10")) <= 6 && "bg-yellow-500 text-black"}
                                                                    
                                                                     ${Number(localStorage.getItem("S_ScorModuleNo10")) > 6 && "bg-green-600 text-white"}
                                                                    `}

                                                                >
                                                                    {
                                                                        localStorage.getItem("S_ScorModuleNo10")
                                                                    }
                                                                </div>
                                                                :
                                                                <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            } */}
                                                            {
                                                                test4sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test4sec1[test4sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test4sec1[test4sec1.length - 1].ieltsScore) >= 4 && Number(test4sec1[test4sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test4sec1[test4sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test4sec1[test4sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test4Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test4Sec2Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.06</span>
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
                                                            1336
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe an achievement/success.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test4sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test4sec2[test4sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test4sec2[test4sec2.length - 1].ieltsScore) >= 4 && Number(test4sec2[test4sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test4sec2[test4sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test4sec2[test4sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test4Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test4Sec3Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.80</span>
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
                                                            1466
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about success , gain achivenment</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test4sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test4sec3[test4sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test4sec3[test4sec3.length - 1].ieltsScore) >= 4 && Number(test4sec3[test4sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test4sec3[test4sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test4sec3[test4sec3.length - 1].ieltsScore)}
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
                                            (test5sec1[0] || test5sec2[0] || test5sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test5sec1[test5sec1.length - 1].ieltsScore) + Number(test5sec2[test5sec2.length - 1].ieltsScore) + Number(test5sec3[test5sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test5sec1[0] || test5sec2[0] || test5sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>5</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test5Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test5Sec1Images} className="rounded-xl h-[78%]" />
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
                                                            671
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About Watch Movies.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test5sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test5sec1[test5sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test5sec1[test5sec1.length - 1].ieltsScore) >= 4 && Number(test5sec1[test5sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test5sec1[test5sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test5sec1[test5sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test5Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test5Se2Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.90</span>
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
                                                            764
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe About work with family member.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test5sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test5sec2[test5sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test5sec2[test5sec2.length - 1].ieltsScore) >= 4 && Number(test5sec2[test5sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test5sec2[test5sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test5sec2[test5sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test5Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test5Sec3Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.64</span>
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
                                                            1238
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About family business.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test5sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test5sec3[test5sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test5sec3[test5sec3.length - 1].ieltsScore) >= 4 && Number(test5sec3[test5sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test5sec3[test5sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test5sec3[test5sec3.length - 1].ieltsScore)}
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
                                            (test6sec1[0] || test6sec2[0] || test6sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test6sec1[test6sec1.length - 1].ieltsScore) + Number(test6sec2[test6sec2.length - 1].ieltsScore) + Number(test6sec3[test6sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )
                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test6sec1[0] || test6sec2[0] || test6sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>6</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test6Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test6Sec1Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.80</span>
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
                                                            1870
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About Talent which makes a man perfect.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test6sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test6sec1[test6sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test6sec1[test6sec1.length - 1].ieltsScore) >= 4 && Number(test6sec1[test6sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test6sec1[test6sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test6sec1[test6sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test6Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test6Sec2Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.59</span>
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
                                                            1190
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe sea beaches. </h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test6sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test6sec2[test6sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test6sec2[test6sec2.length - 1].ieltsScore) >= 4 && Number(test6sec2[test6sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test6sec2[test6sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test6sec2[test6sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test6Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test6Sec3Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.91</span>
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
                                                            927
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">More about sea beaches.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test6sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test6sec3[test6sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test6sec3[test6sec3.length - 1].ieltsScore) >= 4 && Number(test6sec3[test6sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test6sec3[test6sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test6sec3[test6sec3.length - 1].ieltsScore)}
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



                        {/* 7 test - 9test (19 - 27 section) */}
                        <div className='flex flex-wrap justify-center gap-4  p-[7px] sm:p-[15px]'>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[28%] p-3 bg-transparent">
                                {/* {userPaymentStatusCheck != "Expert" ? ( */}
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            (test7sec1[0] || test7sec2[0] || test7sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test7sec1[test7sec1.length - 1].ieltsScore) + Number(test7sec2[test7sec2.length - 1].ieltsScore) + Number(test7sec3[test7sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }

                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test7sec1[0] || test7sec2[0] || test7sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>7</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test7Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test7Sec1Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.97</span>
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
                                                            440
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">talk about newspapers and magazines</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test7sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test7sec1[test7sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test7sec1[test7sec1.length - 1].ieltsScore) >= 4 && Number(test7sec1[test7sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test7sec1[test7sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test7sec1[test7sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test7Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test7Sec2Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.68</span>
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
                                                            1109
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about an enjoyable Moment in restaurant</h6>
                                                <div className='flex justify-center gap-3 w-full '>

                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test7sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test7sec2[test7sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test7sec2[test7sec2.length - 1].ieltsScore) >= 4 && Number(test7sec2[test7sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test7sec2[test7sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test7sec2[test7sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test7Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test7Sec3Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.66</span>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about successful restaurants & it's expriences</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test7sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test7sec3[test7sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test7sec3[test7sec3.length - 1].ieltsScore) >= 4 && Number(test7sec3[test7sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test7sec3[test7sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test7sec3[test7sec3.length - 1].ieltsScore)}
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
                                            (test8sec1[0] || test8sec2[0] || test8sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test8sec1[test8sec1.length - 1].ieltsScore) + Number(test8sec2[test8sec2.length - 1].ieltsScore) + Number(test8sec3[test8sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )
                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test8sec1[0] || test8sec2[0] || test8sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>8</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test8Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test8Sec1Images} className="rounded-xl h-[78%]" />
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
                                                            671
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About home where you live in.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test8sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test8sec1[test8sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test8sec1[test8sec1.length - 1].ieltsScore) >= 4 && Number(test8sec1[test8sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test8sec1[test8sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test8sec1[test8sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test8Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test8Sec2Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.51</span>
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
                                                            1678
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Discuss a difficult decision that you have made</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test8sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test8sec2[test8sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test8sec2[test8sec2.length - 1].ieltsScore) >= 4 && Number(test8sec2[test8sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test8sec2[test8sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test8sec2[test8sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test8Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test8Sec3Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.98</span>
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
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">good advice for making decisions, influence people's lives</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test8sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test8sec3[test8sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test8sec3[test8sec3.length - 1].ieltsScore) >= 4 && Number(test8sec3[test8sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test8sec3[test8sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test8sec3[test8sec3.length - 1].ieltsScore)}
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
                                            (test9sec1[0] || test9sec2[0] || test9sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test9sec1[test9sec1.length - 1].ieltsScore) + Number(test9sec2[test9sec2.length - 1].ieltsScore) + Number(test9sec3[test9sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )

                                }
                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test9sec1[0] || test9sec2[0] || test9sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>9</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test9Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test9Sec1Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>3.90</span>
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
                                                            1324
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">About your living, Spend time at the weekend</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test9sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test9sec1[test9sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test9sec1[test9sec1.length - 1].ieltsScore) >= 4 && Number(test9sec1[test9sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test9sec1[test9sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test9sec1[test9sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test9Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test9Sec2Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.38</span>
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
                                                            1425
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Talk about a club that yor was a member.</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test9sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test9sec2[test9sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test9sec2[test9sec2.length - 1].ieltsScore) >= 4 && Number(test9sec2[test9sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test9sec2[test9sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test9sec2[test9sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test9Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test9Sec3Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.90</span>
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
                                                            1100
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">talk about social activities & football, improvements things</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test9sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test9sec3[test9sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test9sec3[test9sec3.length - 1].ieltsScore) >= 4 && Number(test9sec3[test9sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test9sec3[test9sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test9sec3[test9sec3.length - 1].ieltsScore)}
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



                        {/* 10 test */}
                        <div className='flex w-[100%] sm:w-[85%] m-auto flex-wrap justify-start p-[7px] sm:p-[0px]'>
                            <div className="w-[100%] relative sm:w-[44%] md:w-[33%] p-3 bg-transparent">
                                {userPaymentStatusCheck == "" ? (
                                    <div className='z-[23] text-center w-[83px] absolute  p-1 rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[6px] rounded-br-[6px] text-white  bg-[#aa3ccf]  text-[12px] font-bold top-0 left-4 translate-y-[-8px]'>
                                        Premium
                                    </div>
                                ) : (
                                    <>
                                        {/* {
                                            (test10sec1[0] || test10sec2[0] || test10sec3[0]) && useremail && (
                                                <div className='z-[23] text-center w-[83px] absolute rounded-[5px] text-white  bg-blue-600 flex justify-center align-middle gap-2 text-[12px] font-bold top-0 left-4 translate-y-[-6px] pt-1'>
                                                    Overall :
                                                    <span className="font-bold text-[16px] translate-y-[-2px]">
                                                        {
                                                            Math.round(((Number(test10sec1[test10sec1.length - 1].ieltsScore) + Number(test10sec2[test10sec2.length - 1].ieltsScore) + Number(test10sec3[test10sec3.length - 1].ieltsScore)) / 3).toFixed(1) * 2) / 2
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        } */}
                                    </>
                                )
                                }

                                <div className={`absolute z-[3] text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${(test10sec1[0] || test10sec2[0] || test10sec3[0]) ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>10</span></div>
                                {/* <h4 className='text-center'>Test 1</h4> */}
                                <div className=' mt-1' onClick={Test10Sec1}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test10Sec1Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.59</span>
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
                                                            1008
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">talk about favourite colors,  Persons mood</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test10sec1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test10sec1[test10sec1.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test10sec1[test10sec1.length - 1].ieltsScore) >= 4 && Number(test10sec1[test10sec1.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test10sec1[test10sec1.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test10sec1[test10sec1.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test10Sec2}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test10Sec2Images} className="rounded-xl h-[78%]" />
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
                                                            <span className='font-bold text-sm ml-1 text-[11px] '>4.74</span>
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
                                                            937
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">Describe a piece of good news you heard from others</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test10sec2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test10sec2[test10sec2.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test10sec2[test10sec2.length - 1].ieltsScore) >= 4 && Number(test10sec2[test10sec2.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test10sec2[test10sec2.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test10sec2[test10sec2.length - 1].ieltsScore)}
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
                                <div className=' mt-1' onClick={Test10Sec3}>
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row  rounded-xl shadow-xl w-full border border-white bg-white sha p-1">

                                            <div className="w-1/3 grid place-items-center">
                                                <Image src={test10Sec3Images} className="rounded-xl h-[78%]" />
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
                                                            837
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] text-center">about effective learning, technology & learning outcomes</h6>
                                                <div className='flex justify-center gap-3 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                test10sec3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(test10sec3[test10sec3.length - 1].ieltsScore) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(test10sec3[test10sec3.length - 1].ieltsScore) >= 4 && Number(test10sec3[test10sec3.length - 1].ieltsScore) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(test10sec3[test10sec3.length - 1].ieltsScore) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(test10sec3[test10sec3.length - 1].ieltsScore)}
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
                            !openTestAfter10 && <div className='flex flex-wrap justify-center gap-4  p-[12px] sm:p-[15px] pb-5 pt-3'>
                                {/* <button className='p-2 hover:bg-blue-400 bg-green-400 flex justify-center align-middle rounded w-[80%] sm:w-[20%] text-white text-[15px]'
                                    onClick={checkAllTestsForOpenNextTests}
                                >
                                    {
                                        loadMoreStatus ? (<LoadingCom />) : <div className='flex gap-2'>Load More 10 Tests <AiOutlineLogin className='text-xl translate-y-[2px] text-purple-600 font-bold' /> </div>
                                    }
                                </button> */}
                                <button className="bookmarkBtn" onClick={checkAllTestsForOpenNextTests} >
                                    <span class="IconContainer">
                                        {loadMoreStatus ? (<LoadingCom className="text-xl" />) : < AiOutlineLogin className="text-xl" />}
                                    </span>
                                    <p className="text">Load More 10 Tests </p>
                                </button>
                            </div>
                        }











                    </div>

                </div>

            </section>






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
                    <div class="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
                        <div class="sm:mx-auto sm:w-full sm:max-w-xl pt-[60px] ">
                            <div class="mt-[40px] backGroundColorSetCss py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
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

            {/* Writing vocabulary list Links showing popUp */}

            {
                showVocabularyPopup && <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                    <div class="min-h-screen py-1 sm:px-6 lg:px-8 px-6 ">
                        <div class="sm:mx-auto sm:w-full sm:max-w-3xl pt-[20px] sm:pt-[0px] h-[600px] sm:h-auto overflow-auto">
                            <div class="mt-[20px] backGroundColorSetCss py-10 px-4 shadow-lg border-1 border-gray-100 sm:rounded-lg sm:px-10 relative">
                                <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                                    onClick={() => { setShowVocabularyPopup(false) }}
                                >
                                    X
                                </div>
                                <div className='pt-4 grid grid-cols-1 sm:grid-cols-2 gap-1  translate-y-2'>
                                    <div>
                                        <span className='font-bold text-xl sm:text-2xl text-purple-600 underline'>Vocabulary Links</span>
                                        <ul className='pl-2 ps-5 mt-2 space-y-1 list-disc list-inside'>
                                            <li><a href="https://ielts-up.com/writing/ielts-linking-words.html">Linking structures and cohesive devices</a></li>
                                            <li><a href="https://ielts-up.com/writing/ielts-essay-vocabulary.html">Academic word lists</a></li>
                                            <li><a href="https://ielts-up.com/speaking/ielts-vocabulary-speaking.html">Some Topic Vocabularis</a></li>

                                            {/* <li><a href=""></a></li> */}
                                        </ul>
                                    </div>
                                    <div className='sm:border-l-1 sm:border-l-gray-700 sm:pl-[20px] underline'>
                                        <span className='font-bold text-xl sm:text-2xl  text-purple-600'>Tips</span>
                                        <ul className='pl-2 ps-5 mt-2 space-y-1 list-disc list-inside'>
                                            <li><a href="https://ieltsliz.com/ielts-speaking-free-lessons-essential-tips/">Tips about Speaking All Sections</a></li>
                                            {/* <li><a href="">adksada</a></li>
                                            <li><a href="">adksada</a></li> */}

                                        </ul>
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

export default SpeakingTests;
