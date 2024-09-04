"use client"
import React, { useEffect, useState } from 'react';
import logo from '../../../../assets/images/Practestlogo.png';
import StickyMenu from '../../../../lib/StickyMenu';
import NavigationHome from '../../LandingHome/NavigationHome';
import LoginPage from '../../LoginPage/LoginPage';
import SignUpPage from '../../LoginPage/SignUpPage';
import { FaBookReader } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
//end importing----->




function HeaderHomeOne({ action }) {
    const history = useRouter();
    const [userInforbyFacebookGoogle, setUserinfobyFbGoogle] = useState();
    const [userLoginToken, setUserloginToken] = useState()

    const [forSignUpPage, setForSignUpPage] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false);
    const [OpenNavImage, setOpenNavImage] = useState(true)
    //for login page    

    useEffect(() => {
        setUserinfobyFbGoogle(localStorage.getItem("userSignupInfo") && localStorage.getItem("userSignupInfo"));
        setUserloginToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"))

        StickyMenu();
    }, []);

    const openLogInPage = (x) => {
        setTimeout(() => {
            setOpenLogIn(!openLogIn)
            setForSignUpPage(false) // solution
        }, 250);
    }


    // for signUp page
    const openSignUpPage = (x) => {
        setTimeout(() => {
            setForSignUpPage(!forSignUpPage)
            setOpenLogIn(false)    //solution
        }, 250);
    }



    //make the audio tag sticky when user scroll the page-----
    window.addEventListener("scroll", function () {
        try {
            if (window.scrollY > 100) {
                setOpenNavImage(false)
            } else {
                setOpenNavImage(true)
            }
        } catch (error) {
            // console.log("Error has been occoured..")
        }
    })



    console.log(OpenNavImage)
    return (

        <>
            {/* for openLogIn & openSignUpPage connect with their states */}
            {
                openLogIn && (
                    <div style={{ transition: "3s ease-in-out " }}>
                        <LoginPage
                            openLogInPage={openLogInPage}
                            openSignUpPage={openSignUpPage}

                        />
                    </div>)
            }
            {
                forSignUpPage && (
                    <div style={{ transition: "3s ease-in-out " }}>
                        <SignUpPage
                            openSignUpPage={openSignUpPage}
                            openLogInPage={openLogInPage}
                        />
                    </div>)
            }


            <header className="appie-header-area appie-header-3-area appie-sticky relative bg-blue-500" >
                <div className={`${OpenNavImage && "translate-y-[-10px]"} container `}>
                    <div className="header-nav-box header-nav-box-3 ">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    <a href="/">
                                        <Image className="w-[150px]" src={logo} alt="logo image in sop" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-10  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className='flex gap-3 justify-end'>
                                    <div className="appie-header-main-menu">
                                        <NavigationHome />
                                    </div>
                                    <div className="appie-btn-box text-right">
                                        {
                                            userInforbyFacebookGoogle || userLoginToken
                                                ? (<div>
                                                    <a className="main-btn ml-30 p-2" style={{ cursor: "pointer" }}
                                                        onClick={() => { history.push("/MainDashBoard/Dashboard") }}>
                                                        <p className='flex text-white text-[12px]'>
                                                            <FaBookReader className='text-[14px] translate-y-1 mr-2 text-green-400' />
                                                            Dashboard</p>
                                                    </a>

                                                </div>) : (<>
                                                    <a className="login-btn" style={{ cursor: "pointer" }} onClick={openLogInPage} >
                                                        <i className="fal fa-user " style={{ color: "#fff" }} /> Login
                                                    </a>
                                                    <a className="main-btn ml-30 text-[13px]" style={{ color: "#fff", cursor: "pointer" }} onClick={openSignUpPage}>
                                                        Get Started
                                                    </a>
                                                </>)
                                        }

                                        <div
                                            onClick={(e) => action(e)}
                                            className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                        >

                                            <i className="fa fa-bars" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderHomeOne;
