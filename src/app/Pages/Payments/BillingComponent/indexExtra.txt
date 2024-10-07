import React, { useEffect, useState } from 'react';
import "./index.css";
import BdCheckOutPage from "../SSL-Commerz/PaymentForm";
import StripeCheckOutPage from "../StripeMain/Index";
import PaypalCheckoutPage from "../Paypal/checkoutPage"
import SSLCOMMERZ from "../../assets/images/ssl-commerz.png";
import AamarPay from "../../assets/images/aamarPay.png";
import { Toaster } from 'react-hot-toast';
import AamarPayBDPaymentForm from "../AmerPay/index";
import Axios from "axios";
import Img1 from "../../assets/images/otherImgs/masterCard.png"
import Img2 from "../../assets/images/otherImgs/PaySupport2.jpeg"
import Img3 from "../../assets/images/otherImgs/bkash2.webp"
import Img4 from "../../assets/images/otherImgs/nogod2.jpeg"
import { MdOutlineCancel } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { SaveUserWhoClickedForPaymentButDonnot } from '../../assets/URL\'s/AllUrl';
import PaymentImg from "../../assets/images/Payments/study1.png"
import PaymentImg2 from "../../assets/images/Payments/img4.png"
import { isMobile } from 'react-device-detect';
import { TfiWrite } from "react-icons/tfi";
import { FaSpeakap } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { BsOpencollective } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { PiCrown } from "react-icons/pi";
import SideImg1 from "../../assets/images/Payments/sideImg1.png"



function Index() {
    const history = useHistory();
    var userCountry = localStorage.getItem("setCountry");
    var moduleName = localStorage.getItem("productID");

    const [saveDataforSecondPage, setSaveDataForSecondPage] = useState("")
    const [bdPayment, setBdpaymnt] = useState(false);
    const [otherPay, setOtherPay] = useState(false);
    const [AmerPayPayment, setAmerPayPayment] = useState(false);
    const [changeHeightInpaypal, setChangeHeightPaypal] = useState(false)



    //Save user who clicked for payment but they don't pay............
    useEffect(() => {
        funForWhenUserClickToPay("_firstPage")
    }, []);


    const funForWhenUserClickToPay = (pages) => {
        console.log(pages)
        Axios({
            method: "post",
            // url: "http://localhost:8080/api/user/saveUserWhoClickedForPayment",
            url: SaveUserWhoClickedForPaymentButDonnot,
            data: {
                "userName": localStorage.getItem('userName'),
                "userEmail": localStorage.getItem("userEmail"),
                "userCountry": localStorage.getItem("setCountry"),
                "moduleName": moduleName ? moduleName + pages : "AllModuless" + pages,
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => { console.log(e) })
    }





    return (
        <>
            <div className='w-full h-[96vh] grid justify-center align-middle p-3 mt-2'>
                {
                    !AmerPayPayment && (
                        <div className={`w-full sm:w-[660px] md:w-[880px] ${userCountry != "Bangladesh" && "overflow-scroll"} h-full grid gap-3 sm:flex justify-center align-middle shadow-lg p-2 rounded-[20px] `}>
                            {
                                !isMobile && (
                                    <div className={`w-full h-auto m-auto`}>
                                        <img src={PaymentImg} className='w-[100%] h-[100%]' alt="" />
                                    </div>
                                )
                            }
                            <div className={`w-full ${userCountry == "Bangladesh" ? "h-auto" : "h-[98%]"} m-auto pb-4  rounded-[10px] border-l-1 border-l-gray-300`}>
                                <div className='grid'>
                                    <img src={PaymentImg2} alt="payment main image" className='m-auto w-[75%] sm:w-[70%]  rounded-[10px]' />
                                    <strong className='text-center text-3xl text-[#3f78b7] mt-1 mb-2 block '>PREMIUM</strong>
                                    <div className='w-full flex justify-center align-middle mt-1'>
                                        <div className='flex gap-3'>

                                            {
                                                userCountry == "Bangladesh" ? (<del className='font-bold text-2xl text-gray-600 translate-y-[-4px] opacity-75'>
                                                    ৳2000
                                                </del>) : (
                                                    <del className='font-bold text-2xl text-gray-600 translate-y-[-4px] opacity-75'>
                                                        $16
                                                    </del>
                                                )
                                            }
                                            <strong className='text-3xl pr-[20px] text-[#3f78b7] mr-2 font-bold border-r-2 border-r-red-600'>{
                                                userCountry == "Bangladesh" ? "৳ 428" : "$ 4"
                                            }</strong>
                                        </div>
                                        <p className='text-xl font-bold ml-2 leading-[19px] text-[#3f78b7]  '>Get Full  <br />Access </p>
                                    </div>
                                    <div className='w-full mt-1 pt-1 pb-1 pl-[4%] pr-[3%] sm:pl-[12%]'>
                                        <div className='w-full bg-[#541bac] h-auto p-2 sm:pr-[15%] flex gap-1 justify-center align-middle rounded-[12px] hover:outline hover:outline-3 hover:outline-offset-2 hover:outline-blue-500 relative'>
                                            <img src={SideImg1} alt="incressable image for study"
                                                className='w-[70px] translate-x-[-8px] translate-y-[-7px]'
                                            />
                                            <div className='m-auto pt-1 translate-x-[-7px] leading-[13px]'>
                                                <strong className='text-[13px] text-white leading-[13px]'>Will increase speaking fluency, accuracy, confidence. </strong>
                                                <p className='text-[11px] text-gray-200 flex gap-1 leading-[13px] translate-y-[3px]'>
                                                    <div className='rounded-[50%] bg-[#f95cad] w-[8px] h-[8px]  translate-y-[2px]'></div>After 3 months consistence practice you  will get 6.5+ score</p>
                                            </div>
                                            <div className='absolute right-2 bottom-[-15px] h-[30px]  p-2 flex justify-center align-middle rounded-t-[44%] rounded-b-[44%] bg-[#cf52a5]'>
                                                <IoDiamondOutline className='text-xl translate-y-[-1px] text-white' />
                                            </div>
                                        </div>
                                        <div className='w-full mt-3 bg-[#541bac] h-auto p-2 flex gap-1 justify-center align-middle rounded-[12px] hover:outline hover:outline-3 hover:outline-offset-2 hover:outline-blue-500 relative'>
                                            <img src={SideImg1} alt="incressable image for study"
                                                className='w-[70px] translate-x-[-8px] translate-y-[-7px]'
                                            />
                                            <div className='m-auto pt-1 translate-x-[-7px] leading-[13px]'>
                                                <strong className='text-[13px] text-white'>Will increase writing grammar accuracy, coherence.</strong>
                                                <p className='text-[11px] text-gray-200 flex gap-1 translate-y-[2px]'>
                                                    <div className='rounded-[50%] bg-[#f95cad] w-[8px] h-[8px] translate-y-[5px]'></div>
                                                    Instant writing score with feedback</p>
                                                <p className='text-[11px] text-gray-200 flex gap-1 leading-[12px]'>
                                                    <div className='rounded-[50%] bg-[#f95cad] w-[8px] h-[8px] translate-y-[5px]'></div>With regular practice you will get  your desired score</p>
                                            </div>
                                            <div className='absolute right-2 bottom-[-15px] h-[30px]  p-2 flex justify-center align-middle rounded-t-[44%] rounded-b-[44%] bg-[#c552a5]'>
                                                <PiCrown className='text-xl translate-y-[-1px] text-white' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full grid p-[10px] justify-center '>
                                        <label className='flex gap-2 text-[#3f78b7] font-sans'>
                                            <LuPackageOpen className='translate-y-[1px] text-blue-800' /> Unlimited Reading and Writing Test.</label>
                                        <label className='flex gap-2 text-[#3f78b7] font-sans'>
                                            <FaSpeakap className='translate-y-[1px] text-blue-800' /> Get a pass on all speaking tests.</label>
                                        <label className='flex gap-2 text-[#3f78b7] font-sans'>
                                            < TfiWrite className='translate-y-[1px] text-blue-800' />Unlimited writing corrections.</label>
                                        <label className='flex gap-2 text-[#3f78b7] font-sans'>
                                            <BsOpencollective className='translate-y-[1px] text-blue-800' />Make an Unlimited SOP for your <br /> varsity admission.</label>
                                        <label className='flex gap-2 text-[#3f78b7] font-sans'>
                                            <MdFeedback className='translate-y-[1px] text-blue-400' /> Get writing feedback from iPractest.</label>
                                    </div>
                                </div>
                                {

                                    userCountry == "Bangladesh" ? (
                                        <div className='w-full grid justify-center align-middle'>
                                            <button className='p-2 translate-y-[-7px] rounded-[7px] w-[180px] shadow-sm hover:bg-green-400 bg-blue-500 text-white'
                                                onClick={() => {
                                                    setAmerPayPayment(true);
                                                    funForWhenUserClickToPay("_SecondPage");
                                                }}
                                            >BUY NOW</button>
                                        </div>
                                    ) : (
                                        <div className='' >
                                            <PaypalCheckoutPage />
                                        </ div>
                                    )
                                }

                                <div className='w-full h-full grid justify-center align-middle'>
                                    {
                                        userCountry == "Bangladesh" && (
                                            <div className='flex gap-2 justify-center align-bottom p-2 mt-auto'>
                                                <div className='p-2 w-auto rounded-[15px] bg-gray-300 translate-x-[-2px] flex justify-center align-middle gap-3 translate-y-[15px]'>
                                                    <img src={Img1} className='m-auto h-[34px] rounded-[3px]' />
                                                    <img src={Img3} className='m-auto h-[34px] rounded-[10px]' />
                                                    <img src={Img4} className='m-auto h-[40px] rounded-[10px]' />
                                                </div>

                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* <div className='absolute top-3 right-4'>
                <button className='w-[40px] h-[40px] text-center rounded-[50%] bg-gray-200 shadow-sm text-xl hover:bg-blue-300 text-red-700 font-bold'
                    onClick={() => { history.push(`/${localStorage.getItem("productID")}`) }}
                >
                    X
                </button>
            </div> */}


            <Toaster position="top-right"
                reverseOrder={false} />
            {
                bdPayment && (<>
                    <BdCheckOutPage
                        setBdpaymnt={setBdpaymnt}
                    />
                </>)
            }
            {
                AmerPayPayment && (<>
                    <AamarPayBDPaymentForm
                        setAmerPayPayment={setAmerPayPayment}
                    />
                </>)
            }

        </>




    )
}

export default Index