"use client"
import React, { useEffect, useState } from 'react';
import "./SignUpPage.css";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import GoogleFacebooklog from './GoogleFacebooklog';
import { ClockLoader } from "react-spinners";
// import Timer from "../../WritingAllTests/Writing-All-Pages/Writing-Importand/Pages/Timer";

import { useStateContext } from "../../../../contexts/ContextProvider";
import { SIGNUP_URL } from "../../../../assets/URL's/AllUrl";

import { FaRegUser } from "react-icons/fa";
import { PiUserPlusBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";



// end importing



function SignUpPage({ openSignUpPage, openLogInPage, finalFuncAfterLogInorSignUp }) {
      const { writingText, setWritingText, loginRedirectStatus, setLoginRedirectUrl } = useStateContext();
      let history = useRouter()

      //all user localstorages data storing states.......
      const [userCountryInfo, setUserCountryInfo] = useState();
      const [usersCountryName, setuserCountryName] = useState("");
      const [DeviceNumber, setUserDeviceName] = useState("")
      const [userEmail, setUserEmail] = useState("");
      const [userName, setUserName] = useState("");
      const [refferDID, setRefferdID] = useState("")

      const [errormsg, setErrorMsg] = useState("");
      const [signUpMsg, setsignUpMsg] = useState(false);
      const [loadingMsg, setLoadingMsg] = useState(false);
      const [signUpData, setSignUpData] = useState({
            username: "",
            email: "",
            password: ""
      });
      const { username, email, password } = signUpData

      const nextPath = (path) => {
            history.push(path);
      }


      useEffect(() => {
            //user all localstorage storing into states into this useEffect below...
            let countryInfo = localStorage.getItem("CountryInfo");
            setUserCountryInfo(countryInfo && JSON.parse(countryInfo));
            setUserDeviceName(localStorage.getItem('DeviceNo') && localStorage.getItem('DeviceNo'));
            setRefferdID(localStorage.getItem("referID") && localStorage.getItem("referID"))


      }, [])










      //handle-inputs-values------->
      const signUpinputChange = (x) => {
            const fullName = x.target.name;
            const fullValue = x.target.value;
            setSignUpData((prevs) => {
                  return { ...prevs, [fullName]: fullValue }
            })
      }
      // handle-submit-form-data----------->
      const handleSignUpdataSubmit = (x) => {
            x.preventDefault();
            setLoadingMsg(true);

            axios({
                  method: "post",
                  url: SIGNUP_URL,
                  // url:"http://localhost:8080/api/auth/signup",
                  data: {
                        "username": signUpData.username,
                        "email": signUpData.email,
                        "password": password,
                        "country": userCountryInfo ? userCountryInfo.countryName : "",
                        "countryFlag": userCountryInfo ? userCountryInfo.countryFlag : "",
                        "referID": refferDID ? refferDID : "",
                        "roles": ["user"]
                  },
            })
                  .then((res) => {
                        console.log(res);
                        if (res) {
                              // setsignUpMsg(true);
                              localStorage.setItem('loginTOken', res.data.token);
                              localStorage.setItem('userName', res.data.username);
                              localStorage.setItem('userEmail', res.data.email);
                              localStorage.setItem("setCountry", res.data.country);
                              localStorage.setItem("setCountryFlag", res.data.countryFlag)
                              if (res.data.referID != "") { localStorage.setItem("referID", res.data.referID) }
                              localStorage.setItem('DeviceNo', res.data.Devices)
                              setTimeout(() => {
                                    // setsignUpMsg(false);
                                    setLoadingMsg(false);
                                    openSignUpPage()  // this is for close popUp
                                    finalFuncAfterLogInorSignUp();
                                    // if (loginRedirectStatus == "") {
                                    //       nextPath("/MainDashBoard/Dashboard");
                                    // } else {
                                    //       setLoginRedirectUrl("")
                                    // }
                              }, 500);

                        }

                  })
                  .catch((e) => {
                        setLoadingMsg(false);
                        console.log(e)
                        if (e.message == "Network Error") {
                              setErrorMsg("NetworkErr");
                              setTimeout(() => {
                                    setErrorMsg("")
                              }, 4000);
                        } else {
                              setErrorMsg("errorMsg");
                              setTimeout(() => {
                                    setErrorMsg("")
                              }, 4000);
                        }
                  })


      }




      //main rendering-------
      return (
            <>
                  <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                        <div class="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
                              <div class="sm:mx-auto sm:w-full sm:max-w-md pt-[40px] ">
                                    <div class="mt-[26px] backGroundColorSetCss py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
                                          <div className='absolute top-1 text-center font-bold right-2 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                                                onClick={openSignUpPage}
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

                                          <div class="sm:mx-auto sm:w-full sm:max-w-md mb-4 ">
                                                <div className='flex justify-between align-middle gap-3 pt-2 pb-2 pl-4 pr-4'>
                                                      <button className=' pb-3 rounded-[10px] w-full text-[#6f11f5] flex gap-2 justify-center align-middle pt-3'
                                                            onClick={openLogInPage}
                                                      >
                                                            <FaRegUser className='text-[13px] translate-y-1' />
                                                            Log in

                                                      </button>

                                                      <button className='pb-3 rounded-[10px] w-full text-white bg-[#6f11f5] flex gap-2 justify-center align-middle pt-3'
                                                            onClick={openSignUpPage}
                                                      >
                                                            <PiUserPlusBold className='text-[17px] text-white translate-y-[2px]' />
                                                            Sign up

                                                      </button>
                                                </div>
                                          </div>
                                          <form onSubmit={handleSignUpdataSubmit}>
                                                <div class="relative mb-7">
                                                      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                            <FaUser className='text-[12px]' />
                                                      </div>
                                                      <input type="text" id="input-group-1" class="bg-white shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            name="username"
                                                            value={username}
                                                            onChange={signUpinputChange}
                                                            placeholder='Enter Username'
                                                            required
                                                      />
                                                </div>

                                                <div class="relative mb-7">
                                                      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                            </svg>
                                                      </div>
                                                      <input type="email" id="input-group-1" class="bg-white shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            name="email"
                                                            value={email}
                                                            onChange={signUpinputChange}
                                                            placeholder='Enter your Email'
                                                            required
                                                      />
                                                </div>

                                                <div class="relative mb-3 mt-1">
                                                      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                            <svg enable-background="new 0 0 32 32" id="Layer_1" version="1.1" viewBox="0 0 32 32" className='w-4 h-4'><g id="lock"><path d="M25,13V9c0-4.971-4.029-9-9-9c-4.971,0-9,4.029-9,9v4c-1.657,0-3,1.343-3,3v3v1v2v1c0,4.971,4.029,9,9,9h6   c4.971,0,9-4.029,9-9v-1v-2v-1v-3C28,14.342,26.656,13,25,13z M9,9c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7v4h-2V9.002   c0-2.762-2.238-5-5-5c-2.762,0-5,2.238-5,5V13H9V9z M20,9v0.003V13h-8V9.002V9c0-2.209,1.791-4,4-4C18.209,5,20,6.791,20,9z M26,19   v1v2v1c0,3.859-3.141,7-7,7h-6c-3.859,0-7-3.141-7-7v-1v-2v-1v-3c0-0.552,0.448-1,1-1c0.667,0,1.333,0,2,0h14c0.666,0,1.332,0,2,0   c0.551,0,1,0.448,1,1V19z" fill="#333333" /><path d="M16,19c-1.104,0-2,0.895-2,2c0,0.607,0.333,1.76,0.667,2.672c0.272,0.742,0.614,1.326,1.333,1.326   c0.782,0,1.061-0.578,1.334-1.316C17.672,22.768,18,21.609,18,21C18,19.895,17.104,19,16,19z" fill="#333333" /></g></svg>
                                                      </div>
                                                      <input type="password" id="input-group-1" class="bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600  shadow-md shadow-smdark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            name="password"
                                                            value={password}
                                                            required
                                                            onChange={signUpinputChange}
                                                            placeholder='Enter Password'
                                                      />
                                                </div>


                                                <div class="grid items-center justify-start">
                                                      <p className="simple-reg-terms">
                                                            <label className='text-[8px] sm:text-[13px] flex gap-[2px]'>
                                                                  <span className="checkbox">
                                                                        <label class="container">
                                                                              <input title="Please tick" name="accept_terms" type="checkbox"
                                                                                    className="required translate-y-[2px]" id="js-accept-terms" required />
                                                                              <div class="checkmark"></div>
                                                                        </label>
                                                                  </span>
                                                                  <div className='translate-y-[-3px]'>
                                                                        <span
                                                                              title="Please tick">I accept the </span> <a style={{ display: 'inline-block' }} target="_blank" href="https://ipractest.com/Ipractest-Refund-Policy"
                                                                                    title="Opens in a new tab">Refunds Policy
                                                                        </a> &amp; <a target="_blank" href="https://ipractest.com/Ipractest-Cencel-Policy"
                                                                              title="Opens in a new tab">Cancellation Policy</a>
                                                                  </div>
                                                            </label>
                                                      </p>


                                                </div>

                                                <div class="mt-3">
                                                      <span class="block w-full rounded-md shadow-sm">
                                                            <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent gap-2 text-sm font-medium rounded-[10px] text-white bg-[#6f11f5] hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                                                  <PiUserPlusBold className='text-xl' />  Sign up
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
                                                {/* <Timer Second={20} /> */}
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </section>
                  }


            </>
      )
}

export default SignUpPage