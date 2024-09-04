

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import logo from '../../../assets/images/Practestlogo.png';
import { FaBookReader } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SignUpPage from '../LoginPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import { useStateContext } from "../../../contexts/ContextProvider";

// import Img from '../../assets/images/NavbarImg.png';
// import UpgradeComponnt from "../../Payments/UpgradePayment/index";
import peningImg1 from "../../../assets/images/LandingImgs/peping-6.gif"
// import peningImg2 from "../../../assets/images/LandingImgs/pepning-3.gif"
import { GiUpgrade } from 'react-icons/gi'

// end of the importing-----





function NavigationBar({ drawer, action }) {
 const[userPaymentStatusCheck , setuserPaymentStatusCheck] = useState('')

    //localstore data saver states here...
    const [userSignupInfo, setuserSignupInfo] = useState('')
    const [loginTOken, setloginTOken] = useState('')

    const [itemSize, setSize] = useState('0px');
    const [item, setItem] = useState('home');
    const history = useRouter();
    //state for show user upgrade component if user want to upgrade Starter to expet----------------
    const [openUpgrateComponent, setopenUpgradeComponet] = useState(false);

    useEffect(() => {
        //get all localstorage data & store them into state for use somewhere--
        setloginTOken(localStorage.getItem("loginTOken"))
        setuserSignupInfo(localStorage.getItem("userSignupInfo"))
    }, [])

    // for signUp page
    const [forSignUpPage, setForSignUpPage] = useState(false)
    const openSignUpPage = (x) => {
        setTimeout(() => {
            setForSignUpPage(!forSignUpPage)
            setOpenLogIn(false)    //solution
        }, 250);
    }
    //for login page    
    const [openLogIn, setOpenLogIn] = useState(false);
    const openLogInPage = (x) => {
        setTimeout(() => {
            setOpenLogIn(!openLogIn)
            setForSignUpPage(false) // solution
        }, 250);
    }



    const handler = (e, value) => {
        e.preventDefault();
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            setSize(`${43 * getItems}px`);
            setItem(value);
        }
    };



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


            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                                <div className="offcanvas-brand text-center mb-40 relative ">
                                    <Image className="w-[150px]" src={logo} alt="this is for logo iaages" />
                                </div>
                                <div id="menu" className="text-left ">
                                    {
                                        userSignupInfo || loginTOken ? (

                                            <div className='flex gap-2'>
                                                <span className="main-btn ml-1 mb-2 p-2" style={{ cursor: "pointer" }}
                                                    onClick={() => { history.push("/MainDashBoard/Dashboard") }}>
                                                    <p className='flex text-white'>
                                                        <FaBookReader className='text-xl mr-2' />
                                                        Dashboard</p>
                                                </span>
                                                {
                                                    userPaymentStatusCheck == "Starter" && (<div className='relative'>
                                                        <Image src={peningImg1} className='translate-y-[-37px] translate-x-[20px] mr-2 w-[50px] h-[50px] absolute top-0 left-0 right-0  z-[10]'
                                                            alt='this is for peningImg1 iaages'
                                                        />

                                                        <span className=" bg-[#663399] rounded-[20px] relative ml-2 p-2 z-[100]" style={{ cursor: "pointer" }}
                                                            onClick={() => {
                                                                //  history.push("/MainDashBoard/Dashboard")
                                                                setopenUpgradeComponet(true)
                                                            }}>
                                                            <p className='flex text-white text-[10px]'>
                                                                <GiUpgrade className='text-[14px] translate-y-1 mr-2 text-green-400' />

                                                                Upgrade</p>
                                                        </span>
                                                    </div>)
                                                }
                                            </div>
                                        ) : (
                                            <div>
                                                <span className=" ml-0 w-[130px] rounded-[20px] text-center mb-4 p-2 bg-orange-400 border-1 border-blue-300 
                                                 hover:bg-blue-400 text-white text-[13px]
                                                " style={{ cursor: "pointer" }}
                                                    onClick={openSignUpPage}>
                                                    Get Started
                                                </span>
                                            </div>
                                        )

                                    }
                                    <ul className="offcanvas_main_menu">

                                        <li
                                            onClick={(e) => handler(e, 'home')}
                                            id="home"
                                            className="menu-item-has-children active"
                                        >

                                            <Link href="/">Home</Link>

                                            {/* if we want we can use that.. */}
                                            {/* <ul
                                                                    className="sub-menu"
                                                                    style={{
                                                                        height: item === 'home' ? itemSize : '0px',
                                                                    }}
                                                                >
                                                                    <li>
                                                                        <Link href="/">Home 1 my type</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-two">Home 2</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-three">Home 3</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-four">Home 4</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-five">Home 5</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-six">Home 6</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-seven">Home 7</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-eight">Home 8</Link>
                                                                    </li>
                                                                </ul> */}
                                        </li>

                                        <li
                                            onClick={(e) => handler(e, 'service')}
                                            id="service"
                                            // onClick={(e) => alert("Speaking page is under construction. This page will be live on 15th oct.")}
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/speakingpage">Speaking</Link>
                                        </li>

                                        <li
                                            onClick={(e) => handler(e, 'service')}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/ReadingPage/cambridgeAllTests">Reading</Link>

                                        </li>

                                        <li
                                            onClick={(e) => handler(e, 'service')}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/WrittingPage">Writing</Link>
                                        </li>

                                        <li
                                            onClick={(e) => handler(e, 'service')}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/ListeningPage/cambridgeAllTests">Listening</Link>
                                        </li>

                                        {/* <li
                                            onClick={(e) => handler(e, 'pages')}
                                            id="pages"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="#">Pages</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === 'pages' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link href="/about-us">About Us</Link>
                                                </li>

                                                <li>
                                                    <Link href="/error">Error</Link>
                                                </li>
                                            </ul>
                                        </li> */}


                                        {/* <li
                                            onClick={(e) => handler(e, 'news')}
                                            id="news"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="#">News</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === 'news' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link href="/news">news page</Link>
                                                </li>
                                                <li>
                                                    <Link href="/news/single-news">Single News</Link>
                                                </li>
                                            </ul>
                                        </li> */}


                                        <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="about-us"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/about-us">About Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="contact"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/SOP-Download">SOP</Link>
                                        </li>


                                        {/* <li
                                            onClick={(e) => handler(e, 'pages')}
                                            id="pages"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="#">Services</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === 'pages' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link href="/SOP-Download">SOP-Download</Link>
                                                </li>

                                                <li>
                                                    <Link href="/Create-CV">Create CV</Link>
                                                </li>
                                            </ul>
                                        </li> */}


                                        {/* <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="contact"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/contact">Contact</Link>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <a href="https://www.facebook.com/saud.arian">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/saud.arian">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/saud.arian">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/saud.arian">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="parvej.rownok@ipractest.com">
                                                <i className="fal fa-envelope"></i>{' '}
                                                support@iPractest.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://web.whatsapp.com/">
                                                <i className="fal fa-phone"></i> +880 16439-14634
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com/maps/@24.9232148,89.9404879,13.25z?entry=ttu">
                                                <i className="fal fa-map-marker-alt"></i> 2/8 tajmahal road , dhaka , Bangladesh
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

export default NavigationBar;
