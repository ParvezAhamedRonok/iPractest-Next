"use client"
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { ClockLoader } from "react-spinners";
import Select from 'react-dropdown-select'




function Index({ setAmerPayPayment }) {
  const history = useRouter();
  //all locaStorags data store into those states.....
  const [userCountry, setuserCountry] = useState('')
  const [userEmail, setuserEmail] = useState('')


  const [country, setCounrty] = useState([]);
  const [countryValue, setCountryValue] = useState([]);
  const [isloading, setisloading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    cus_name: "",
    cus_phone: "",
    cus_email: "",
    webEmail: userEmail,
    address: "",
    city: "",
    country: countryValue[0] && countryValue[0].value,
    postcode: "",
    desc: "This is for 3 Months Pay descriptions",
    productName: "3MonthProduct",
  });




  //for getting all the country names & values--
  useEffect(() => {
    //get user localstorages data's
    setuserCountry(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"))
    setuserEmail(localStorage.getItem("userEmail") && localStorage.getItem("userEmail"))


    Axios.get("https://restcountries.com/v3.1/all")
      .then((e) => {
        // console.log(e.data.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0)))
        return setCounrty(e.data.sort((a, b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0)))
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])











  const handleInput = (x) => {
    const values = x.target.value;
    const names = x.target.name;
    setUserInfo((pre) => {
      return { ...pre, [names]: values };
    })
  }

  // console.log(userInfo);
  const handleSubmit = (x) => {
    x.preventDefault();
    console.log(userInfo);
    fetch("http://localhost:8080/api/user/aamarPayPaymentMethods", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfo
        // {
        //       userName:userInfo.userName,
        //       userEmail:userInfo.userEmail,
        //       postcode:userInfo.postcode,
        //       price:userInfo.price,
        //       number:userInfo.number,
        // }
      )
    })
      .then((e) => e.json())
      .then((result) => {
        console.log(result);
        //redirect to the payment success page
        // if payment succeed this URL also make for redirect user to the success page
        // window.location.replace(result.url); 
        if (result.data.data === "success") {
          history.push("/MainDashBoard/Let's-Practice")
        } else {
          history.push("/React_FailedURL/Sorry-Page")
        }


      })
      .catch((err) => console.log(err.message));

  }



  return (
    <div className="Result-PopUp pt-[60px]  fixed top-0 left-2 w-[90%] sm:w-[100%] z-[12375431]">
      <div className="grid w-[100vw] h-auto justify-center align-middle">
        <section className=' grid grid-cols-1 translate-y-[-37px] rounded  justify-center align-middle w-[100vw] sm:w-[650px] p-4 h-[90vh] overflow-auto   bg-blue-100 shadow-2xl z-[100000] '>
          <form onSubmit={handleSubmit} className=''>
            <div className='flex w-full justify-end'>
              <button
                style={{ color: 'rgb(153, 171, 180)' }}
                className="text-2xl  hover:drop-shadow-xl rounded-[50%] pt-[9px] sm:mr-5 mr-1 hover:bg-light-gray w-[43px] h-[43px] flex justify-center align-middle"
                onClick={() => { setAmerPayPayment(false) }}>  <MdOutlineCancel />
              </button>
            </div>
            <div className='mb-3 w-full text-2xl font-bold text-center underline'>Billing Informations</div> <br />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="userName" className='font-bold text-[15px]'>Full Name :</label> <br />
                <input type="text" className='p-2 w-full rounded' placeholder='Enter your full name' name='cus_name' onChange={handleInput} required />
              </div>
              <div>
                <label htmlFor="userName" className='font-bold text-[15px]'>Enter Email :</label> <br />
                <input type="text" className='p-2 w-full rounded' placeholder='Enter your Email' name='cus_email' onChange={handleInput} required />
              </div>
            </div> <br />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="userName" className='font-bold text-[15px]'>Phone Number :</label> <br />
                <input type='number' className='p-2 w-full rounded' placeholder='Enter your Number' name='cus_phone' onChange={handleInput} required />
              </div>
              <div>
                <label htmlFor="targetedProggram" className='text-[13px] font-bold'>Country</label> <br />
                <Select options={country.map((item, index) => {
                  // console.log(item)
                  return {
                    value: item.name.common,
                    label: item.name.common,
                  }
                })}
                  values={countryValue}
                  onChange={(values) => setCountryValue([...values])}
                  style={{ padding: "11px" }}
                  className=' bg-white w-full border-2 border-gray-400 rounded cursor-pointer text-black'
                  required
                />
              </div>
            </div> <br />
            <div className="div1">
              <label htmlFor="address" className='font-bold text-[15px]'>Address :</label> <br />
              <input type="text" className='p-2 w-full sm:w-[80%] rounded' placeholder='Enter your address' name='address' onChange={handleInput} required />
            </div> <br />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="div1">
                <label htmlFor="postcode" className='font-bold text-[15px]'>city :</label> <br />
                <input type="text" className='p-2 w-full rounded' placeholder='Enter your city' name='city' onChange={handleInput} required />
              </div><div className="div1">
                <label htmlFor="postcode" className='font-bold text-[15px]'>postcode :</label> <br />
                <input type="number" className='p-2 w-full rounded' placeholder='Enter your postcode' name='postcode' onChange={handleInput} required />
              </div>

            </div>
            <br />
            <button className='p-2 hover:bg-blue-400 bg-green-400 rounded w-[100%] text-white text-xl' type='submit'>Click to procced</button>
          </form>
        </section>
      </div>

    </div>
  )
}

export default Index
