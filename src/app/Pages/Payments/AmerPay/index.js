"use client";
import React, { useState, useEffect } from 'react';
import "./index.css"
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AAMARPAY_POST_FOR_OPEN_CHECKOUTPAGE } from "../../../../assets/URL's/AllUrl"

import Img1 from "../../../../assets/images/otherImgs/masterCard.png"
import Img3 from "../../../../assets/images/otherImgs/bkash2.webp"
import Img4 from "../../../../assets/images/otherImgs/nogod2.jpeg"





function Index({ setAmerPayPayment, productName }) {
  const history = useRouter();
  //all locaStorags data store into those states.....
  const [userCountry, setuserCountry] = useState('')
  const [userEmail, setuserEmail] = useState('');
  const [refferedID, setRefferedID] = useState('')

  const [userInfo, setUserInfo] = useState({
    cus_name: "",
    cus_email: "",
    webEmail: userEmail,
    cus_phone: "",
    currency: "BDT",
    address: userEmail + "",
    city: "",
    Country: userCountry,
    postcode: "",
    WhichproductName: "3 Month Product",
  });

  //use useEffect ----
  useEffect(() => {
    //get user localstorages data's
    setuserCountry(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"))
    setuserEmail(localStorage.getItem("userEmail") && localStorage.getItem("userEmail"))
    setRefferedID(localStorage.getItem("referID") && localStorage.getItem("referID"))
  }, [])





  const handleInput = (x) => {
    const values = x.target.value;
    const names = x.target.name;
    setUserInfo((pre) => {
      return { ...pre, [names]: values };
    })
  }

  return (
    <div className="Result-PopUp pt-[60px]  fixed top-0 left-0 w-[100%] sm:w-[100%] z-[12375431]">
      <div className="grid w-[100vw] h-auto justify-center align-middle">
        <section className=' grid gap-1 sm:flex  translate-y-[-40px] rounded  justify-center align-middle w-[100vw] sm:w-[770px]  h-[95vh] overflow-auto   bg-white shadow-2xl z-[100000] relative'>
          <div className='w-[30%] h-full  hidden sm:flex justify-center align-middle ' style={{
            background: "linear-gradient(109.6deg, rgb(72, 200, 160) 11.2%, rgb(32, 40, 48) 91.3%)"
          }}>
            <div className='grid gap-3 m-auto text-white'>
              <label className='text-[17px] text-center'>To Pay</label>
              {
                productName == "Starter" && (<>
                  {
                    userInfo.currency == "BDT" ? (<p className='flex gap-2 text-[50px] justify-center text-white'><span className='text-[60px] mt-[-2px]'>৳</span>187</p>) : (
                      <p className='flex gap-2 text-[55px] justify-center text-white'><span className='text-[65px] mt-[-2px]'>$</span>2</p>
                    )
                  }
                </>)
              }
              {
                productName == "Expert" && (<>
                  {
                    userInfo.currency == "BDT" ? (<p className='flex gap-2 text-[50px] justify-center text-white'><span className='text-[60px] mt-[-2px]'>৳</span>487</p>) : (
                      <p className='flex gap-2 text-[55px] justify-center text-white'><span className='text-[65px] mt-[-2px]'>$</span>4</p>
                    )
                  }
                </>)
              }
              {/* <p className='mt-auto flex gap-2 '>Cancel Payment</p> */}
            </div>

          </div>
          <form action={AAMARPAY_POST_FOR_OPEN_CHECKOUTPAGE} method="post" className='p-[15px] sm:p-[20px] w-full sm:w-[70%] h-full overflow-auto '>
            {/* <form action="http://localhost:8080/api/user/aamarPayPaymentMethods" method="post" className='p-[15px] sm:p-[20px] w-full sm:w-[70%]'> */}
            {/* <form onSubmit={handleSubmit}> */}
            <div className='flex  justify-end'>
              <button
                style={{ color: 'rgb(153, 171, 180)' }}
                className="text-2xl  hover:drop-shadow-xl rounded-[50%] pt-[9px] sm:mr-5 mr-1 hover:bg-light-gray w-[43px] h-[43px] flex justify-center align-middle"
                onClick={() => { setAmerPayPayment(false) }}>  <MdOutlineCancel />
              </button>
            </div>
            <div className=' w-full text-2xl sm:text-3xl font-bold mt-[15px] sm:mt-[0px] '>
              Checkout<br />
              <p className=''>Billing Informations</p>
            </div>
            <hr className='' />

            <div className="w-full flex justify-between gap-1 sm:gap-3">
              <div className="mb-3">
                <label for="name" className="text-[12px] font-bold">Name</label><br />
                <input required name="cus_name" className="rounded-[20px] text-[14px] text-black bg-gray-100 p-2 placeholder:text-[14px]" placeholder='Enter Your Full Name' onChange={handleInput} />
              </div>
              <div className="mb-3">
                <label for="email" className="text-[13px] font-bold">Email</label><br />
                <input
                  required
                  type="email"
                  name="cus_email"
                  value={userEmail}
                  className="rounded-[20px] bg-gray-100 p-2 text-[14px] text-black placeholder:text-[14px] w-[100px] sm:w-auto"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="w-full flex justify-between gap-2 sm:gap-3">
              <div>
                <label htmlFor="userName" className='text-[12px] font-bold'>Phone Number :</label> <br />
                <input type='number' className="rounded-[20px] text-[14px] text-black bg-gray-100 p-2 placeholder:text-[14px]" placeholder='Enter your Number' name='cus_phone' onChange={handleInput} required />
              </div>
              <div>
                <label htmlFor="Country" className='text-[12px] font-bold'>Country</label> <br />
                <input type="text" className='rounded-[20px] bg-gray-100 text-[14px] text-black p-2 placeholder:text-[14px] w-[100px] sm:w-auto'
                  placeholder='Enter your Country'
                  name='Country'
                  value={userInfo.Country}
                  onChange={handleInput} required />
              </div>
            </div> <br />
            <div className="w-full flex justify-between gap-2 sm:gap-3">
              <div className="div1">
                <label htmlFor="postcode" className='text-[12px] font-bold'>city :</label> <br />
                <input type="text" className='rounded-[20px] bg-gray-100 p-2 text-[14px] text-black placeholder:text-[14px]' placeholder='Enter your city' name='city' onChange={handleInput} required />
              </div>
              <div className='grid gap-1'>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="div">
                    <label for="desc" className="form-label text-[12px] font-bold">Currency:</label> <br />
                    <select name="currency" className='rounded-[16px] text-[14px] text-black bg-gray-100 p-2 placeholder:text-[14px] cursor-pointer' onChange={handleInput} required>
                      <option selected value="BDT">BDT</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>
                </div>
                {
                  productName == "Starter" && (<>
                    {
                      userInfo.currency == "BDT" ? (<p className='flex gap-2 font-bold text-[12px] ml-1'>Amount: <span className='translate-x-[3px] font-bold'>৳</span>187</p>) : (
                        <p className='flex gap-2 font-bold text-[15px] ml-1'>Amount: <span className=' font-bold translate-x-[5px] translate-y-[-1px] text-[19px]'>$</span>2</p>
                      )
                    }
                  </>)
                }
                {
                  productName == "Expert" && (<>
                    {
                      userInfo.currency == "BDT" ? (<p className='flex gap-2 font-bold text-[12px] ml-1'>Amount: <span className='translate-x-[3px] font-bold'>৳</span>487</p>) : (
                        <p className='flex gap-2 font-bold text-[15px] ml-1'>Amount: <span className=' font-bold translate-x-[5px] translate-y-[-1px] text-[19px]'>$</span>4</p>
                      )
                    }
                  </>)
                }
              </div>

            </div>
            <input type="text" className='h-[5px] w-full sm:w-[80%] rounded invisible' name='referID' value={refferedID ? refferedID : ""} />
            {/*this is is invisiable got to the backend for the amount for showing the user that how much they have to pay..*/}
            <input type="text" className='h-[5px] w-full sm:w-[80%] rounded invisible' name='productName' value={productName} />
            <br />
            <p className="simple-reg-terms">
              <label className='text-[10px] sm:text-[13px] flex gap-[2px]'>
                <span className="checkbox">
                  {/* <input title="Please tick" name="accept_terms" type="checkbox"  className="required translate-y-[2px]" id="js-accept-terms" required /> */}
                  <label class="container">
                    <input title="Please tick" name="accept_terms" type="checkbox"
                      className="required translate-y-[2px]" id="js-accept-terms" required />
                    <div class="checkmark"></div>
                  </label>
                </span>
                <div className='translate-y-[-4px]'>
                  <span
                    title="Please tick">I accept the </span> <a style={{ display: 'inline-block' }} target="_blank" href="https://ipractest.com/iPractest-Privacy-Policy"
                      title="Opens in a new tab">Privacy Policy</a> &amp; <a target="_blank" href="https://ipractest.com/iPractest-Terms-Conditions"
                        title="Opens in a new tab">Terms &amp; Conditions</a>
                </div>
              </label>
            </p>
            <p className="simple-reg-terms">
              <label className=' text-[10px] sm:text-[13px] flex gap-[2px]'>
                <span className="checkbox">
                  <label class="container">
                    <input title="Please tick" name="accept_terms" type="checkbox"
                      className="required translate-y-[2px]" id="js-accept-terms" required />
                    <div class="checkmark"></div>
                  </label>
                </span>
                <div className='translate-y-[-4px]'>
                  <span
                    title="Please tick">I accept the </span> <a style={{ display: 'inline-block' }} target="_blank" href="https://ipractest.com/Ipractest-Refund-Policy"
                      title="Opens in a new tab">Refunds Policy
                  </a> &amp; <a target="_blank" href="https://ipractest.com/Ipractest-Cencel-Policy"
                    title="Opens in a new tab">Cancellation Policy</a>
                </div>
              </label>
            </p>
            <div className='w-full flex justify-center align-middle'>
              <button className='p-2 bg-blue-400 hover:bg-green-400 rounded-[20px] w-[50%] text-white text-xl' type='submit'>Continue</button>
            </div>

            <div className='w-full flex justify-center align-middle'>
              <div className='p-2 w-full sm:w-[80%] m-auto translate-y-[30px] sm:translate-y-[37px] rounded-[15px] translate-x-[-2px]  flex justify-center align-bottom gap-3'>
                <div className='flex gap-3 m-auto bg-gray-300 p-2 rounded-[7px]'>
                  <Image src={Img1} className='m-auto h-[37px] rounded-[3px]' />
                  <Image src={Img3} className='m-auto w-[50px] h-[39px] rounded-[10px]' />
                  <Image src={Img4} className='m-auto w-[50px] h-[43px] rounded-[10px]' />
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>

    </div>
  )

}

export default Index

