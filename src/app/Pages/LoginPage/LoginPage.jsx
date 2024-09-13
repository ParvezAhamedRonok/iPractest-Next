import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Axios from 'axios';
import GoogleFacebooklog from './GoogleFacebooklog';
import { ClockLoader } from "react-spinners";
import Timer from "../Writing-Module/Writing-All-Test/Writing-Importand/Pages/Timer";
import { useStateContext } from "../../../contexts/ContextProvider";
import { LOGIN_URL } from "../../../assets/URL's/AllUrl"

import { PiUserPlusBold } from "react-icons/pi";
import { AiOutlineLogin } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
// end importing--->



function LoginPage({ openLogInPage, openSignUpPage }) {
  const { setWritingText } = useStateContext();
  const history = useRouter();

  //all localstorage storeing by states....
  const [DeviceNumber, setDeviceNumber] = useState('')
  const [countryInfo, setcountryInfo] = useState()


  const [errormsg, setErrorMsg] = useState("");
  const [loadingMsg, setLoadingMsg] = useState(false);

  const [DeviceNo, setDeviceNo] = useState("")

  const [users, setUsers] = useState({
    username: "",
    password: "",
  })
  const { username, password } = users;



  useEffect(() => {
    setDeviceNumber(localStorage.getItem('DeviceNo'));
    let localDataInfo = localStorage.getItem("CountryInfo");
    setcountryInfo(JSON.parse(localDataInfo));

    if (!DeviceNumber || DeviceNumber == "null" || DeviceNumber == "undefined") {
      setDeviceNo("")
    } else {
      setDeviceNo("anyThing")
    }
  }, [])





  // for redirect into into the dashboard
  const nextPath = (path) => {
    history.push(path);
  }




  const handleChnage = (x) => {
    const fullName = x.target.name;
    const Values = x.target.value;
    setUsers((previous) => {
      return { ...previous, [fullName]: Values }
    })

  }


  // console.log(DeviceNo)

  const handleSubmit = (x) => {
    x.preventDefault();
    setLoadingMsg(true)

    Axios({
      method: "post",
      // url:"http://localhost:8080/api/auth/signin",
      url: LOGIN_URL,
      data: {
        "username": users.username,
        "password": users.password,
        "Devices": DeviceNo != "" ? DeviceNumber : "",
        //country & flag for if user has no counrty name or flag then update those with this
        "country": countryInfo ? loadingMsg.countryName : "",
        "countryFlag": countryInfo ? loadingMsg.countryFlag : "",
      },
    })
      .then((res) => {
        console.log(res)
        // console.log(res.data.token);
        // console.log(res.data.username);
        console.log(typeof res.data.referID);
        localStorage.setItem('loginTOken', res.data.token);
        localStorage.setItem('userName', res.data.username);
        localStorage.setItem('userEmail', res.data.email);
        localStorage.setItem('setCountry', res.data.country);
        localStorage.setItem('setCountryFlag', res.data.countryFlag);
        if (res.data.referID != "") {
          localStorage.setItem("referID", res.data.referID);
        }

        if (res.data.Devices != "" || res.data.Devices != "undefined") {
          localStorage.setItem('DeviceNo', res.data.Devices)
        }
        setTimeout(() => {
          // setsignUpMsg(false);
          setLoadingMsg(false);
          openLogInPage()  // this is for close popUp
          nextPath("/Pages/MainDashboard/Dashboard");
          // if (loginRedirectStatus == "") {
          //   nextPath("/MainDashBoard/Dashboard");
          // } else {
          //   setLoginRedirectUrl("")
          // }
        }, 1000);

      })
      .catch((e) => {
        // setErrorMsg(true)
        setLoadingMsg(false)
        console.log(e);
        if (e.message == "Network Error") {
          setErrorMsg("NetworkErr");
          setTimeout(() => {
            setErrorMsg("")
          }, 4000);
        }
        else if (e.response.data.message == "Too many devices") {
          alert("Access blocked ,  You have logged in  with too many devices or Too many browers! please login with your previous device or browser that you have used or Contact us")
        }
        else {
          setErrorMsg("errorMsg");
          setTimeout(() => {
            setErrorMsg("")
          }, 4000);
        }
      })
  }


  setTimeout(() => {
    setWritingText("");
  }, 6000);




  return (
    <>
      <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
        <div className="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-md pt-[40px] sm:pt-[0px] ">
            <div className="mt-[40px] backGroundColorSetCss py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
              <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                onClick={openLogInPage}
              >
                X
              </div>

              <div className='absolute top-2 left-2'>
                {
                  errormsg == "errorMsg" && (<p className='text-red-500 text-[12px]'>Invalid information please try again</p>)
                }
                {
                  errormsg == "NetworkErr" && (<p className='text-red-500 text-[12px]'>Network Error! Please check your internet</p>)
                }
              </div>

              <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4 ">
                <div className='flex justify-between align-middle gap-3 pt-2 pb-2 pl-4 pr-4'>
                  <button className='pb-3 rounded-[10px] w-full text-white bg-[#6f11f5] flex gap-2 justify-center align-middle pt-3'>
                    <FaRegUser className='text-[13px] translate-y-1'
                      onClick={openLogInPage}
                    />
                    Log in

                  </button>

                  <button className='pb-3 rounded-[10px] w-full text-[#6f11f5] flex gap-2 justify-center align-middle pt-3'
                    onClick={openSignUpPage}
                  >
                    <PiUserPlusBold className='text-[17px] text-purple-700 translate-y-[1px]' />
                    Sign up

                  </button>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-7">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input type="text" id="input-group-1" className="bg-white shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="username"
                    required
                    onChange={handleChnage}
                    value={username}
                    placeholder='Username or Email'
                  />
                </div>

                <div className="relative mb-3 mt-1">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg enableBackground="new 0 0 32 32" id="Layer_1" version="1.1" viewBox="0 0 32 32" className='w-4 h-4'><g id="lock"><path d="M25,13V9c0-4.971-4.029-9-9-9c-4.971,0-9,4.029-9,9v4c-1.657,0-3,1.343-3,3v3v1v2v1c0,4.971,4.029,9,9,9h6   c4.971,0,9-4.029,9-9v-1v-2v-1v-3C28,14.342,26.656,13,25,13z M9,9c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7v4h-2V9.002   c0-2.762-2.238-5-5-5c-2.762,0-5,2.238-5,5V13H9V9z M20,9v0.003V13h-8V9.002V9c0-2.209,1.791-4,4-4C18.209,5,20,6.791,20,9z M26,19   v1v2v1c0,3.859-3.141,7-7,7h-6c-3.859,0-7-3.141-7-7v-1v-2v-1v-3c0-0.552,0.448-1,1-1c0.667,0,1.333,0,2,0h14c0.666,0,1.332,0,2,0   c0.551,0,1,0.448,1,1V19z" fill="#333333" /><path d="M16,19c-1.104,0-2,0.895-2,2c0,0.607,0.333,1.76,0.667,2.672c0.272,0.742,0.614,1.326,1.333,1.326   c0.782,0,1.061-0.578,1.334-1.316C17.672,22.768,18,21.609,18,21C18,19.895,17.104,19,16,19z" fill="#333333" /></g></svg>
                  </div>
                  <input type="password" id="input-group-1" className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600  shadow-md shadow-smdark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="password"
                    onChange={handleChnage}
                    required
                    value={password}
                    placeholder='Password'
                  />
                </div>


                <div className="grid items-center justify-start">
                  <div className="text-[11px] sm:text-sm leading-5 cursur-pointer text-purple-600 hover:text-blue-600">
                    <a onClick={() => { history.push("/Ipractest-Forget-password-component") }}
                      className="font-medium  focus:outline-none focus:underline transition ease-in-out duration-150 cursur-pointer">
                      Forgot password?
                    </a>
                  </div>

                  <div className="flex items-center mt-4">
                    <input id="remember_me" name="remember" type="checkbox" value="1" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                    <label htmlFor="remember_me" class="ml-2 translate-y-[4px] block text-sm leading-5 text-gray-900">Remember me</label>
                  </div>


                </div>

                <div className="mt-3">
                  <span className="block w-full rounded-md shadow-sm">
                    <button type="submit" className="w-full flex gap-1 justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[10px] text-white bg-[#6f11f5] hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                      <AiOutlineLogin className='text-xl' />  Log in
                    </button>
                  </span>
                </div>
              </form>
              <div className="w-full grid justify-center gap-2 mt-2 align-middle">
                <p className='text-xl font-bold text-center'>Or</p>
                <GoogleFacebooklog />
              </div>

            </div>
          </div>
        </div>
      </div>


      {loadingMsg && <section className="fixed top-2 left-2 w-[90%] sm:w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[1000000] grid-cols-1 grid-rows-5">
        <div className="fixed top-[30%]  left-[26%] z-[200000] sm:left-[45%] w-[100vw] h-[100vh]">
          <div className="flex opacity-6 justify-center align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
            <div className="bg-white rounded-[15px] p-3 h-auto">
              <ClockLoader size={100} color="#36d7b7" />
              <div className="w-full flex justify-center p-1 mt-1 bg-sky-300 text-white"
                style={{ borderTopLeftRadius: "27px", borderTopRightRadius: "27px" }}
              >
                <Timer Second={20} />
              </div>
            </div>

          </div>
        </div>
      </section>
      }

    </>
  )
}

export default LoginPage