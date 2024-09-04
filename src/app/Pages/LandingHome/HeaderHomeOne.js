
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../assets/images/Practestlogo.png';
import StickyMenu from '../../../lib/StickyMenu';
import NavigationHome from './NavigationHome';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../LoginPage/SignUpPage';
import { FaBookReader } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { isMobile } from 'react-device-detect';
import { useStateContext } from "../../../contexts/ContextProvider";

import Img from '../../../assets/images/NavbarImg.png';
// import UpgradeComponnt from "../../../Payments/UpgradePayment/index";
import peningImg1 from "../../../assets/images/LandingImgs/peping-6.gif"
import peningImg2 from "../../../assets/images/LandingImgs/pepning-3.gif"
import { GiUpgrade } from 'react-icons/gi'
//end importing----->




function HeaderHomeOne({ action }) {
    const history = useRouter();
    const { userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();

    //localstore data saver states here...
    const [userSignupInfo, setuserSignupInfo] = useState('')
    const [loginTOken, setloginTOken] = useState('')

    const [forSignUpPage, setForSignUpPage] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false);
    const [OpenNavImage, setOpenNavImage] = useState(true);
    //state for show user upgrade component if user want to upgrade Starter to expet----------------
    const [openUpgrateComponent, setopenUpgradeComponet] = useState(false);
    //for login page    
    // console.log(userPaymentStatusCheck)

    useEffect(() => {
        StickyMenu();
        //get all localstorage data & store them into state for use somewhere--
        setloginTOken(localStorage.getItem("loginTOken"))
        setuserSignupInfo(localStorage.getItem("userSignupInfo"))

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










    console.log(loginTOken)
    console.log(userSignupInfo)
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




            <header className="appie-header-area appie-header-3-area appie-sticky relative" >
                {
                    OpenNavImage && (

                        <Image
                            src={Img}
                            alt="Navbar backgraoun image"
                            style={{
                                width: isMobile ? "100%" : "90%",
                                height: isMobile ? "117px" : "185px",
                                position: "absolute",
                                top: "0px",
                                right: '0px',
                                zIndex: -333
                            }}
                        />
                    )
                }
                <div className={`${OpenNavImage && "translate-y-[-10px]"} container `}>
                    <div className="header-nav-box header-nav-box-3 ">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box ">

                                    <Image
                                        src={logo} // Local image
                                        alt="this is for logo iaages"
                                        className="w-[150px]"
                                        onClick={() => { history.push("/") }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-10  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className='flex gap-3 justify-end '>
                                    <div className="appie-header-main-menu translate-x-[15px]">
                                        <NavigationHome />
                                    </div>
                                    <div className="appie-btn-box text-right">
                                        {
                                            userSignupInfo || loginTOken ? (
                                            <div className='translate-x-[0px] md:translate-x-[60px] flex'>
                                                <a rel='canonical' href='/MainDashBoard/Dashboard' className="main-btn ml-2 p-2" style={{ cursor: "pointer" }}

                                                >
                                                    <p className='flex text-white text-[12px]'>
                                                        <FaBookReader className='text-[14px] translate-y-1 mr-2 text-green-400' />
                                                        Dashboard</p>
                                                </a>
                                                {
                                                    userPaymentStatusCheck == "Starter" && (<div className='relative'>

                                                        <Image
                                                            src={peningImg1} // Local image
                                                            alt='this is for peningImg1 iaages'
                                                            className='translate-y-[-30px] translate-x-[20px] mr-2 w-[50px] h-[50px] absolute top-0 left-0 right-0  z-[10]'
                                                        />

                                                        <span className=" bg-[#663399] rounded-[20px] relative ml-2 p-2 z-[100]" style={{ cursor: "pointer" }}
                                                            onClick={() => {
                                                                // history.push("/MainDashBoard/Dashboard")
                                                                setopenUpgradeComponet(true)
                                                            }}>
                                                            <p className='flex text-white text-[10px]'>
                                                                <GiUpgrade className='text-[14px] translate-y-1 mr-2 text-green-400' />

                                                                Upgrade</p>
                                                        </span>
                                                    </div>)
                                                }

                                            </div>) : (<>
                                                <span className="login-btn sm:translate-x-[10px] translate-y-[-3px] sm:translate-y-[0px]" style={{ cursor: "pointer" }} onClick={openLogInPage} >
                                                    <i className="fal fa-user " style={{ color: "#fff" }} /> Login
                                                </span>
                                                <span className="main-btn ml-30 text-[13px]" style={{ color: "#fff", cursor: "pointer" }} onClick={openSignUpPage}>
                                                    Get Started
                                                </span>
                                            </>)
                                        }

                                        <div
                                            onClick={(e) => action(e)}
                                            className="toggle-btn ml-30 canvas_open d-lg-none d-block "
                                        >

                                            <i className="fa fa-bars md:translate-x-[50px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {/* below component if for Upgradation if user bought a starter pack then if they want they can upgrade this */}
            {/* {
                openUpgrateComponent && (
                    <UpgradeComponnt
                        setopenUpgradeComponet={setopenUpgradeComponet}
                    />
                )
            } */}
        </>
    );
}

export default HeaderHomeOne;
