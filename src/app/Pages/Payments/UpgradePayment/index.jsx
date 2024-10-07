"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Axios from 'axios';
import { useStateContext } from "../../../../contexts/ContextProvider";
// end importing/--->
// import CEO_Sir from '../../assets/images/ceo.jpg';
import Img1 from "../../../../assets/images/otherImgs/masterCard.png"
import Img2 from "../../../../assets/images/otherImgs/PaySupport2.jpeg"
import Img3 from "../../../../assets/images/otherImgs/bkash2.webp"
import Img4 from "../../../../assets/images/otherImgs/nogod2.jpeg"
import { AAMARPAY_POST_REQUEST_FOR_UPGRADE_USER_PAYMENT_INFO } from '../../../../assets/URL\'s/AllUrl';
import PaypalCheckoutButton from '../UpgradePayment/Paypal/PaypalCheckoutButton';



function PersonalMentor({ setopenUpgradeComponet }) {
    const { writingText, setWritingText, loginRedirectStatus, setLoginRedirectUrl } = useStateContext();
    const history = useRouter();
    //all locaStorags data store into those states.....
    const [countryName, setcountryName] = useState('')
    const [useremail, setuserEmail] = useState('');

    const [countryFlag, setcountryFlag] = useState('')

    //all state diclare here---------------
    const [storeBDCurrency, setStoreBDCurrency] = useState("BDT")

 
    //use useEffect for getting all user data
    useEffect(() => {
        setcountryFlag(localStorage.getItem('setCountryFlag') && localStorage.getItem('setCountryFlag'));
        setcountryName(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"));
        setuserEmail(localStorage.getItem('userEmail') && localStorage.getItem('userEmail'))
    }, [])





    return (
        <>
            <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                <div class="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
                    <div class="sm:mx-auto sm:w-full sm:max-w-2xl pt-[40px] ">
                        <div class="mt-[40px] bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
                            <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                                onClick={() => { setopenUpgradeComponet(false) }}
                            >
                                X
                            </div>
                            {/* 2.50 */}
                            <div className='text-center'>
                                <p className='text-[15px] sm:text-[18px] mt-2 text-purple-600 underline font-bold'>Want to Upgrade Starter to Expert</p> <br />
                                <p className='text-3xl font-bold text-purple-800'>Pay</p>
                                {
                                    countryName == "Bangladesh" ? (<>
                                        <form action={AAMARPAY_POST_REQUEST_FOR_UPGRADE_USER_PAYMENT_INFO} method="post">
                                            <span className='text-2xl translate-y-1 font-bold rounded-[50%] bg-purple-500 text-white shadow-sm text-center p-2  outline outline-3 outline-blue-500'>
                                                {
                                                    storeBDCurrency == "BDT" ? "300 ৳" : "2.65 $"
                                                }
                                            </span> <br /> <br />
                                            <div className="div flex gap-2 w-full justify-center">
                                                <label for="desc" className="form-label text-[12px] font-bold">Want to pay in:</label> <br />
                                                <select name="currency" className='rounded-[16px] translate-y-[-7px] text-[14px] text-black bg-gray-100 p-2 placeholder:text-[14px] cursor-pointer'
                                                    onChange={(e) => { setStoreBDCurrency(e.target.value) }}
                                                    required>
                                                    <option selected value="BDT">BDT</option>
                                                    <option value="USD">USD</option>
                                                </select>
                                            </div>
                                            <div className='w-full flex justify-center align-middle'>
                                                <button className='p-2 bg-blue-400 hover:bg-green-400 rounded-[20px] w-[50%] text-white text-xl' type='submit'>Continue</button>
                                            </div>
                                            <div className='w-full flex justify-center align-middle'>
                                                <div className='p-2 w-full sm:w-[80%] m-auto translate-y-[8px] rounded-[15px] translate-x-[-2px]  flex justify-center align-bottom gap-3'>
                                                    <div className='flex gap-3 m-auto bg-gray-300 p-2 rounded-[7px]'>
                                                        <img src={Img1} className='m-auto h-[30px] rounded-[3px]' />
                                                        <img src={Img3} className='m-auto h-[30px] rounded-[10px]' />
                                                        <img src={Img4} className='m-auto h-[36px] rounded-[10px]' />
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="text" className='h-[5px] w-full sm:w-[80%] rounded invisible' name='userEmail' value={useremail} />
                                        </form>
                                    </>) : (<>
                                        <span className='text-2xl translate-y-1 font-bold rounded-[50%] bg-purple-500 text-white shadow-sm text-center p-2  outline outline-3 outline-blue-500'>2 <span className='text-[15px]'>$</span></span> <br /> <br />
                                        <div className='w-[80%] sm:w-[50%] m-auto' >
                                            <PaypalCheckoutButton
                                            // productName={"Starter"}
                                            />
                                        </ div>
                                    </>)
                                }

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PersonalMentor