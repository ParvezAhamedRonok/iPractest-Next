"use client"
import React, { useEffect, useState } from 'react';
import "./index.css";
import PaypalCheckoutPage from "../Paypal/checkoutPage"
import { Toaster } from 'react-hot-toast';
import AamarPayBDPaymentForm from "../AmerPay/index";
import Image from 'next/image';
import Axios from "axios";
import Img1 from "../../../../assets/images/otherImgs/masterCard.png"
import Img3 from "../../../../assets/images/otherImgs/bkash2.webp"
import Img4 from "../../../../assets/images/otherImgs/nogod2.jpeg"
import { useRouter } from 'next/navigation';
import { SaveUserWhoClickedForPaymentButDonnot } from '../../../../assets/URL\'s/AllUrl';

//end of the importing..........


let PaypalAmountStatus;
function Index() {
    const history = useRouter();
    //all locaStorags data store into those states.....
    const [userCountry, setuserCountry] = useState('')
    const [userEmail, setuserEmail] = useState('');
    const [moduleName, setmoduleName] = useState('')
    const [userName, setuserName] = useState('')

    const [toggleSwitch, setSwitchValue] = useState(true);

    const [AmerPayPayment, setAmerPayPayment] = useState(false);
    const [productName, setproductName] = useState("")

    const handleSwitch = (e) => {
        e.preventDefault();
        setSwitchValue(!toggleSwitch);
    };



    //Save user who clicked for payment but they don't pay............
    useEffect(() => {
        //get all user localstorages data here && store them into a state
        setuserCountry(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"))
        setmoduleName(localStorage.getItem("productID") && localStorage.getItem("productID"));
        setuserName(localStorage.getItem('userName') && localStorage.getItem('userName'));
        setuserEmail(localStorage.getItem("userEmail") && localStorage.getItem("userEmail"))

        //function for who is not want to pay after want to the payment page...
        funForWhenUserClickToPay("_firstPage");

    }, []);


    const funForWhenUserClickToPay = (pages) => {
        console.log(pages)
        Axios({
            method: "post",
            // url: "http://localhost:8080/api/user/saveUserWhoClickedForPayment",
            url: SaveUserWhoClickedForPaymentButDonnot,
            data: {
                "userName": userName,
                "userEmail": userEmail,
                "userCountry": userCountry,
                "moduleName": moduleName ? moduleName + pages : "AllModuless" + pages,
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => { console.log(e) })
    }


    if (toggleSwitch) {
        PaypalAmountStatus = "Starter"
    } else {
        PaypalAmountStatus = "Expert"
    }
    console.log(PaypalAmountStatus)
    console.log(userCountry)
    return (
        <>
            {
                !AmerPayPayment && (<section className='w-full bg-[#e7dddb] p-4'>
                    <div className='sm:p-[50px] w-full'>
                        <div className='p-0 sm:p-4 w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-2 '>
                            <div className='grid w-full justify-center sm:justify-start align-middle gap-3 sm:gap-0 translate-x-[-14px] sm:translate-x-[10px]'>
                                <strong className='text-2xl sm:text-4xl font-sans'>Choose your plans</strong>
                                <div>

                                    <p className=' font-serif block sm:hidden'>Unlock Your IELTS Potential with
                                        Our  <br /> Flexible and Affordable Pricing Plans </p>
                                    <p className=' font-serif hidden sm:block'>Unlock Your IELTS Potential with
                                        Our   Flexible and <br /> Affordable Pricing Plans </p>
                                </div>


                            </div>
                            <div className='appie-pricing-2-area translate-y-[-20px] sm:translate-x-[-10px]'>
                                <div className='w-full h-full  flex justify-center sm:justify-end align-middle'>
                                    <div className="appie-section-title text-center">
                                        <div className="appie-pricing-tab-btn">
                                            <ul
                                                className="nav nav-pills mb-3"
                                                id="pills-tab"
                                                role="tablist"
                                            >
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        onClick={(e) => handleSwitch(e)}
                                                        className={`nav-link  ${toggleSwitch ? 'bg-purple-600 text-white' : ''
                                                            }`}
                                                        href="#"
                                                        type="button"
                                                        role="tab"
                                                    >
                                                        Starter
                                                    </a>
                                                </li>
                                                <li
                                                    className={`nav-item ${toggleSwitch ? 'on' : 'off'}`}
                                                    role="presentation"
                                                >
                                                    <a
                                                        onClick={(e) => handleSwitch(e)}
                                                        className={`nav-link  ${toggleSwitch === false ? 'bg-purple-600 text-white' : ''
                                                            }`}
                                                        href="#"
                                                        type="button"
                                                        role="tab"
                                                    >
                                                        Expert
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*This is for Pc view*/}

                        <div className='w-full h-full justify-center align-middle hidden sm:block'>
                            <div className='m-auto bgSetCssForPayment p-5 rounded-[20px]'>
                                {/* <strong className='text-[14px] font-bold absolute top-2 left-3'>Improvement Guarantee</strong> */}
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="w-[800px] m-auto justify-content-center flex gap-4 justify-center align-middle">
                                        <div className='gird  sm:flex gap-4 w-full m-auto'>
                                            <div className={`${toggleSwitch && "border-1 border-blue-600 rounded-[25px]"} translate-y-[-20px] sm:translate-y-[0px] w-full`}
                                                onMouseEnter={() => {
                                                    setSwitchValue(true)
                                                }}
                                            >
                                                <div
                                                    className="
                        pricing-one__single pricing-one__single_2
                        animated
                        fadeInLeft
                      "
                                                >
                                                    <div className="pricig-heading">
                                                        <div className="price-range">
                                                            <sup> {userCountry == "Bangladesh" ? "৳" : "$"}</sup> <span>{
                                                                userCountry == "Bangladesh" ? 187 : 2
                                                            }</span>
                                                            <p className='translate-x-[8px]'>/Three Months</p>
                                                        </div>
                                                        <h6 className='flex'>Starter</h6>
                                                        <p>Ideal for beginners who want to explore our platform before committing.</p>
                                                    </div>
                                                    <div className="pricig-body">
                                                        <ul>
                                                            <li>
                                                                <i className="fal fa-check" /> 20 Speaking Practice Test.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> 48 Reading and Listening Mock Test.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> 200+ Writing Evaluation and Mock Test.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> 200+ writing Improvement feedback.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> Get all Reading Explanations.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> Unlimited SOP creation with AI.
                                                            </li>
                                                        </ul>
                                                        <div className="p-3">
                                                            {
                                                                userCountry == "Bangladesh" ? (
                                                                    <div className="w-full bg-purple-600 cursor-pointer rounded-[20px] cursor-pointer translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                        onClick={() => {
                                                                            setAmerPayPayment(true);
                                                                            funForWhenUserClickToPay("_SecondPage");
                                                                            setproductName("Starter")
                                                                        }}
                                                                    >
                                                                        Start Practicing
                                                                    </div>
                                                                ) : (
                                                                    <div className='' >
                                                                        {
                                                                            toggleSwitch && <PaypalCheckoutPage
                                                                                productName={PaypalAmountStatus}
                                                                            />
                                                                        }
                                                                    </ div>
                                                                )
                                                            }

                                                        </div>
                                                        <div className='w-full h-full grid justify-center align-middle'>
                                                            {
                                                                userCountry == "Bangladesh" && (
                                                                    <div className='flex gap-2 justify-center align-bottom p-2 mt-auto'>
                                                                        <div className='p-2 w-auto rounded-[15px] bg-gray-300 translate-x-[-2px] flex justify-center align-middle gap-3 translate-y-[15px]'>
                                                                            <Image src={Img1} className='m-auto h-[34px] rounded-[3px]' />
                                                                            <Image src={Img3} className='m-auto w-[50px] h-[34px] rounded-[10px]' />
                                                                            <Image src={Img4} className='m-auto w-[50px] h-[40px] rounded-[10px]' />
                                                                        </div>

                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${!toggleSwitch && "border-1 border-blue-600 rounded-[25px]"} w-full translate-y-[-20px] sm:translate-y-[0px]`}
                                                onMouseEnter={() => {
                                                    setSwitchValue(false)
                                                }}
                                            >
                                                <div
                                                    className="
                        pricing-one__single pricing-one__single_2
                        animated
                        fadeInLeft bg-blue-600 relative
                      "
                                                >
                                                    <div className='absolute top-3 right-5'>
                                                        <button className='p-1 text-center rounded-[20px] w-[130px] bg-purple-600 text-white text-[12px]'>Most Popular</button>
                                                    </div>

                                                    <div className="pricig-heading">
                                                        <div className="price-range">
                                                            <sup> {userCountry == "Bangladesh" ? "৳" : "$"}</sup> <span>{
                                                                userCountry == "Bangladesh" ? 487 : 4
                                                            }</span>
                                                            <p className='translate-x-[8px]'>/Three Months</p>
                                                        </div>
                                                        <h6 className='flex gap-2'>Expert <button className='p-1 rounded-[20px] text-[12px] bg-gradient-to-r from-blue-600 to-fuchsia-500 w-[180px] text-white'>Improvement Guarantee </button></h6>
                                                        <p>Perfect for dedicated learners aiming to improve their IELTS scores with full access to our resources.</p>
                                                    </div>
                                                    <div className="pricig-body">
                                                        <ul>
                                                            <li>
                                                                <i className="fal fa-check text-[11px]" />Personal mentor for IELTS personalised guidance.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> 40+ Speaking Mock Test.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check text-[14px]" /> 48 Reading and Listening Mock Test
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" />400+ Writing Evaluation and Mock Test.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> 400+ writing feedback.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> Get all Reading Explanations.
                                                            </li>
                                                            <li>
                                                                <i className="fal fa-check" /> Unlimited SOP creation with AI.
                                                            </li>
                                                        </ul>

                                                        <div className="p-3">
                                                            {
                                                                userCountry == "Bangladesh" ? (
                                                                    <div className="w-full bg-purple-600 cursor-pointer rounded-[20px] translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                        onClick={() => {
                                                                            setAmerPayPayment(true);
                                                                            funForWhenUserClickToPay("_SecondPage");
                                                                            setproductName("Expert")
                                                                        }}
                                                                    >
                                                                        Start Practicing
                                                                    </div>
                                                                ) : (
                                                                    <div className='' >
                                                                        {
                                                                            !toggleSwitch && <PaypalCheckoutPage
                                                                                productName={PaypalAmountStatus}
                                                                            />
                                                                        }
                                                                    </ div>
                                                                )
                                                            }

                                                        </div>

                                                        <div className='w-full h-full grid justify-center align-middle'>
                                                            {
                                                                userCountry == "Bangladesh" && (
                                                                    <div className='flex gap-2 justify-center align-bottom p-2 mt-auto'>
                                                                        <div className='p-2 w-auto rounded-[15px] bg-gray-300 translate-x-[-2px] flex justify-center align-middle gap-3 translate-y-[15px]'>
                                                                            <Image src={Img1} className='m-auto h-[34px] rounded-[3px]' />
                                                                            <Image src={Img3} className='m-auto w-[50px] h-[34px] rounded-[10px]' />
                                                                            <Image src={Img4} className='m-auto w-[50px] h-[40px] rounded-[10px]' />
                                                                        </div>

                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*This is for Mobile view*/}

                        <div className='w-full h-full justify-center align-middle block sm:hidden'>
                            {/* <strong className='text-[14px] font-bold translate-y-[-70px]'>Improvement Guarantee</strong> */}
                            <div className='m-auto rounded-[20px]'>

                                <div className="tab-content" id="pills-tabContent">

                                    <div className="w-full m-auto justify-content-center flex gap-4 justify-center align-middle">
                                        <div className='gird sm:flex gap-4 w-full m-auto'>
                                            {
                                                toggleSwitch ? (
                                                    <div className=" translate-y-[-35px] sm:translate-y-[0px] w-full">
                                                        <div
                                                            className="
                        pricing-one__single pricing-one__single_2
                        animated
                        fadeInLeft
                      "
                                                        >
                                                            <div className="pricig-heading">
                                                                <div className="price-range">
                                                                    <sup> {userCountry == "Bangladesh" ? "৳" : "$"}</sup> <span>{
                                                                        userCountry == "Bangladesh" ? 187 : 2
                                                                    }</span>
                                                                    <p className='translate-x-[8px]'>/Three Months</p>
                                                                </div>
                                                                <h6>Starter</h6>
                                                                <p>Ideal for beginners who want to explore our platform before committing.</p>
                                                            </div>
                                                            <div className="pricig-body">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fal fa-check" /> 20 Speaking Practice Test.
                                                                    </li>
                                                                    <li>
                                                                        <i className="fal fa-check" /> 48 Reading and Listening Mock Test.
                                                                    </li>
                                                                    <li>
                                                                        <i className="fal fa-check" /> 200+ Writing Evaluation and Mock Test.
                                                                    </li>
                                                                    <li>
                                                                        <i className="fal fa-check" /> 200+ writing Improvement feedback.
                                                                    </li>
                                                                    <li>
                                                                        <i className="fal fa-check" /> Get all Reading Explanations.
                                                                    </li>
                                                                    <li>
                                                                        <i className="fal fa-check" /> Unlimited SOP creation with AI.
                                                                    </li>
                                                                </ul>
                                                                <div className="p-3">
                                                                    {
                                                                        userCountry == "Bangladesh" ? (
                                                                            <div className="w-full bg-purple-600 cursor-pointer rounded-[20px] translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                                onClick={() => {
                                                                                    setAmerPayPayment(true);
                                                                                    funForWhenUserClickToPay("_SecondPage");
                                                                                    setproductName("Starter")
                                                                                }}
                                                                            >
                                                                                Start Practicing
                                                                            </div>
                                                                        ) : (
                                                                            <div className='' >
                                                                                <PaypalCheckoutPage
                                                                                    productName={PaypalAmountStatus}
                                                                                />
                                                                            </ div>
                                                                        )
                                                                    }

                                                                </div>
                                                                <div className='w-full h-full grid justify-center align-middle'>
                                                                    {
                                                                        userCountry == "Bangladesh" && (
                                                                            <div className='flex gap-2 justify-center align-bottom p-2 mt-auto'>
                                                                                <div className='p-2 w-auto rounded-[15px] bg-gray-300 translate-x-[-2px] flex justify-center align-middle gap-3 translate-y-[15px]'>
                                                                                    <Image src={Img1} className='m-auto h-[34px] rounded-[3px]' />
                                                                                    <Image src={Img3} className='m-auto w-[50px] h-[34px] rounded-[10px]' />
                                                                                    <Image src={Img4} className='m-auto w-[50px] h-[40px] rounded-[10px]' />
                                                                                </div>

                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (<div className="w-full translate-y-[-35px] sm:translate-y-[0px]">
                                                    <div
                                                        className="
                    pricing-one__single pricing-one__single_2
                    animated
                    fadeInLeft bg-blue-600 relative
                  "
                                                    >
                                                        <div className='absolute top-3 right-5'>
                                                            <button className='p-1 text-center rounded-[20px] w-[130px] bg-purple-600 text-white text-[12px]'>Most Popular</button>
                                                        </div>

                                                        <div className="pricig-heading">
                                                            <div className="price-range">
                                                                <sup> {userCountry == "Bangladesh" ? "৳" : "$"}</sup> <span>{
                                                                    userCountry == "Bangladesh" ? 487 : 4
                                                                }</span>
                                                                <p className='translate-x-[8px]'>/Three Months</p>
                                                            </div>
                                                            <h6 className='flex gap-2'>Expert <button className='p-1 rounded-[20px] text-[12px] bg-gradient-to-r from-blue-600 to-fuchsia-500 w-[180px] text-white'>Improvement Guarantee </button></h6>
                                                            <p>Perfect for dedicated learners aiming to improve their IELTS scores with full access to our resources.</p>
                                                        </div>
                                                        <div className="pricig-body">
                                                            <ul>
                                                                <li>
                                                                    <i className="fal fa-check text-[11px]" />Personal mentor for IELTS personalised guidance.
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" /> 40+ Speaking Mock Test.
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check text-[14px]" /> 48 Reading and Listening Mock Test
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" />400+ Writing Evaluation and Mock Test.
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" /> 400+ writing feedback.
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" /> Get all Reading Explanations.
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" /> Unlimited SOP creation with AI.
                                                                </li>
                                                            </ul>

                                                            <div className="p-3">
                                                                {
                                                                    userCountry == "Bangladesh" ? (
                                                                        <div className="w-full bg-purple-600 cursor-pointer rounded-[20px] translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                            onClick={() => {
                                                                                setAmerPayPayment(true);
                                                                                funForWhenUserClickToPay("_SecondPage");
                                                                                setproductName("Expert")
                                                                            }}
                                                                        >
                                                                            Start Practicing
                                                                        </div>
                                                                    ) : (
                                                                        <div className='translate-x-[-15px]' >
                                                                            <PaypalCheckoutPage
                                                                                productName={PaypalAmountStatus}
                                                                            />
                                                                        </ div>
                                                                    )
                                                                }

                                                            </div>

                                                            <div className='w-full h-full grid justify-center align-middle'>
                                                                {
                                                                    userCountry == "Bangladesh" && (
                                                                        <div className='flex gap-2 justify-center align-bottom p-2 mt-auto'>
                                                                            <div className='p-2 w-auto rounded-[15px] bg-gray-300 translate-x-[-2px] flex justify-center align-middle gap-3 translate-y-[15px]'>
                                                                                <Image src={Img1} className='m-auto h-[34px] rounded-[3px]' />
                                                                                <Image src={Img3} className='m-auto w-[50px] h-[34px] rounded-[10px]' />
                                                                                <Image src={Img4} className='m-auto w-[50px] h-[40px] rounded-[10px]' />
                                                                            </div>

                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>)
                                            }

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </section>)
            }




            <Toaster position="top-right"
                reverseOrder={false} />
            {
                AmerPayPayment && (<>
                    <AamarPayBDPaymentForm
                        setAmerPayPayment={setAmerPayPayment}
                        productName={productName}
                    />
                </>)
            }





        </>
    );
}



export default Index