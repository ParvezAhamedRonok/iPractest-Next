"use client"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useRouter } from 'next/navigation';
import logo from '../../../../assets/images/Practestlogo.png';
import LoadingCom from './LoadingCom';
import { useStateContext } from "../../../../contexts/ContextProvider";
import ForgotImg from "../../../../assets/images/otherImgs/forgotImag-1.png";
import { FaLock } from "react-icons/fa";
import { LOGIN_URL, FORGOT_PASSWORD_POST_FOR_CHECK_USER_EMAIL, FORGOT_PASSWORD_PUT_FOR_UPDATE_USER_PASSWORD } from "../../../../assets/URL's/AllUrl.js"
//end of the importing.................



function Index({ setAmerPayPayment }) {
  const { setWritingText } = useStateContext();
  const history = useRouter();
  //all localstorage storeing by states....
  const [DeviceNumber, setDeviceNumber] = useState('')

  const [simpleLoading, setSimpleLoading] = useState(false);
  const [DeviceNo, setDeviceNo] = useState("")

  const [changeForm, setChangeForm] = useState("sendMail")

  const [serverCode, setServerCode] = useState();
  const [userCode, setUserCode] = useState();

  const [userInfo, setUserInfo] = useState({
    userEmail: "",
    password: "",
    retypePassword: ""
  });

  useEffect(() => {
    setDeviceNumber(localStorage.getItem('DeviceNo'));

    if (!DeviceNumber || DeviceNumber == "null" || DeviceNumber == "undefined") {
      setDeviceNo("")
    } else {
      setDeviceNo("anyThing")
    }
  }, [])
  // console.log(typeof serverCode);
  const handleInput = (x) => {
    const values = x.target.value;
    const names = x.target.name;
    setUserInfo((pre) => {
      return { ...pre, [names]: values };
    })
  }

  // function for send mail to the user 
  // if the user is valid with our database it will open the changePassword form 
  // otherwise will give error with status code 404
  const handleSubmitforSendMailToUser = async (x) => {
    x.preventDefault();
    setSimpleLoading(true)
    // console.log(userInfo);
    // "http://localhost:8080/api/auth/sendMailToTheUser"
    await Axios.post(FORGOT_PASSWORD_POST_FOR_CHECK_USER_EMAIL, {
      email: userInfo.userEmail,
    })
      .then((res) => {
        setSimpleLoading(false)
        // console.log(res.data.code);
        setServerCode(res.data.code);
        setChangeForm("checkCode");
      }).catch((err) => {
        console.log(err)
        setSimpleLoading(false)
        setChangeForm("EmailNotMatched")
      }
      );

  }

  const handleSubmitforCheckCode = async (x) => {
    x.preventDefault();
    // console.log(userInfo);
    if (serverCode == userCode) {
      setChangeForm("newPassword");
    } else {
      setChangeForm("codeNotMatched");
    }
  }



  // function for change user pasword & user name 
  // after successfull done those i will redirect the user into the main dashboard page
  const handleSubmitforChangePassword = async (x) => {
    x.preventDefault();
    if (userInfo.password == userInfo.retypePassword) {
      setSimpleLoading(true);
      // console.log(userInfo);
      //"http://localhost:8080/api/auth/updateUserPassword" 
      await Axios.put(FORGOT_PASSWORD_PUT_FOR_UPDATE_USER_PASSWORD, {
        email: userInfo.userEmail,
        password: userInfo.password
      })
        .then((res) => {
          if (res.data.message == "success") {
            setSimpleLoading(false)
            handleSubmitForLoginAfterUpdatePassword();
          }
        }).catch((err) => {
          console.log(err)
          setSimpleLoading(false)
          setChangeForm("serverError")
        }
        );
    }
  }







  const handleSubmitForLoginAfterUpdatePassword = (x) => {
    // x.preventDefault();
    setSimpleLoading(true)
    Axios({
      method: "post",
      url: LOGIN_URL,
      // url: "http://localhost:8080/api/auth/signin",
      data: {
        "username": userInfo.userEmail,
        "password": userInfo.password,
        "Devices": DeviceNo != "" ? DeviceNumber : ""
      },
    })
      .then((res) => {
        console.log(res)
        // console.log(res.data.token);
        // console.log(res.data.username);
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
          setSimpleLoading(false);
          history.push("/Pages/MainDashboard/Dashboard");
        }, 1000);

      })
      .catch((e) => {
        if (e.response.data.message == "Too many devices") {
          alert("Access blocked ,Your password has been changed but You have logged in  with too many devices or Too many browers! please login with your previous device or browser that you have used or Contact us")
        } else {
          setChangeForm("serverError");
          setSimpleLoading(false)
          console.log(e)

        }

      })
  }





  return (
    <div>
      <div className='w-full p-3 flex align-middle h-[100px] border-b-1 border-b-gray-400'>
        <img className="w-[120px] ml-3 cursor-pointer"
          src={logo} alt="go to home page"
          onClick={() => { history.push("/") }}
        />
      </div>


      <div className="Result-PopUp pt-[60px]  fixed top-[100px] left-2 w-[90%] sm:w-[100%] z-[12375431]">
        <div className="grid w-[100vw] h-auto justify-center align-middle">
          <section className=' grid grid-cols-1 translate-y-[-37px] rounded  justify-center align-middle w-[100vw] sm:w-[630px] p-4 min-h-[300px] max-h-auto overflow-auto   bg-blue-100 shadow-2xl z-[100000] '>
            {
              changeForm == "sendMail" && (<form onSubmit={handleSubmitforSendMailToUser} className='p-4'>
                <div className='grid w-full justify-center align-middle'>
                  <div className='m-auto text-center'>
                    <FaLock className='text-6xl mb-1 text-center m-auto' /> <br />
                    <h2 className='mb-1'>Enter you email</h2>
                  </div>
                </div> <br />
                <div className="w-full mb-4 flex justify-center align-middle">
                  <input
                    required
                    type="email"
                    name="userEmail"
                    value={userInfo.cus_email}
                    className="p-3 w-[100%] sm:w-[70%] rounded"
                    placeholder='Enter your email'
                    onChange={handleInput}
                  />
                </div>
                <div className='w-full flex justify-center align-middle'>
                  <button className='p-2 hover:bg-blue-400 bg-green-400 flex justify-center align-middle rounded w-[50%] sm:w-[30%] text-white text-xl' type='submit'>
                    {
                      simpleLoading ? (<LoadingCom />) : "Send code"
                    }
                  </button>
                </div>
              </form>)
            }


            {/* Check user code with the server given code component */}
            {
              changeForm == "checkCode" && (<form onSubmit={handleSubmitforCheckCode} className='p-4'>

                <div className='grid w-full justify-center align-middle'>
                  <div className='m-auto text-center'>
                    <img src={ForgotImg} className='w-[200px]  translate-x-[36px]' />
                    <h2 className='mb-1'>Verify your email</h2>
                    <p className='text-center text-[16px]'>Please enter the 6 digits code <br /> send to {userInfo.userEmail}</p>
                  </div>
                </div> <br />
                <div className="w-full mb-4 flex justify-center align-middle">
                  <input
                    required
                    type="number"
                    name="userCode"
                    value={userCode}
                    className="p-3 w-[100%] sm:w-[70%] rounded"
                    placeholder='Enter code here'
                    onChange={(e) => { setUserCode(e.target.value) }}
                  />
                </div>
                <div className='w-full flex justify-center align-middle'>
                  <button className='p-2 hover:bg-blue-400 bg-green-400 rounded flex justify-center align-middle w-[50%] sm:w-[30%] text-white text-xl' type='submit'>
                    {
                      simpleLoading ? (<LoadingCom />) : "Confirm"
                    }
                  </button>
                </div>
              </form>)
            }





            {/* set new userName & Password component */}
            {
              changeForm == "newPassword" && (<form onSubmit={handleSubmitforChangePassword} className='p-4'>
                <div className='mb-2 w-full text-2xl font-bold  underline'>Enter New userName & Password</div> <br />
                <div className="w-full grid grid-cols-1 gap-3 mb-4">
                  <div>
                    <label htmlFor='password'>New Password:</label><br />
                    <input
                      required
                      type="password"
                      name="password"
                      value={userInfo.cus_email}
                      className="p-2 w-[100%] sm:w-[70%] rounded"
                      placeholder='Enter new password'
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor='retypePassword'>Retype Password:</label><br />
                    <input
                      required
                      type="password"
                      name="retypePassword"
                      value={userInfo.cus_email}
                      className="p-2 w-[100%] sm:w-[70%] rounded"
                      placeholder='Retype your Password'
                      onChange={handleInput}
                    /><br />
                    {userInfo.retypePassword != "" && userInfo.password != userInfo.retypePassword && <p className='text-red-400'>Password is not matched</p>}
                  </div>
                </div>
                <div className='w-full'>
                  <button className='p-2 hover:bg-blue-400 flex justify-center align-middle bg-green-400 rounded w-[50%] sm:w-[30%] text-white text-xl' type='submit'>
                    {
                      simpleLoading ? (<LoadingCom />) : "Submit"
                    }
                  </button>
                </div>
              </form>)
            }

          </section>
        </div>

      </div>



      {/* this is for not match popUp when user has not the valid information  */}
      {
        changeForm == "codeNotMatched" && <div className="Result-PopUp pt-[10px] p-[10px]  fixed top-[110px] left-[-14px] sm:left-[5px] w-[90%] sm:w-[100%] z-[345678900000] ">
          <div className="grid w-[100vw] h-[100%] justify-center align-middle">
            <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[450px] p-4 h-auto box-border overflow-x-auto bg-white shadow-2xl'>
              <div className="w-full flex justify-between mb-3">
                <img src={logo} alt="" className="w-[110px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                  onClick={() => { history.push("/") }}
                />
              </div> <div className='w-full text-center'>
                <p className='text-2xl'><span className='text-3xl text-red-400 mr-2'>Sorry</span>Your Code is not matched</p> <br />
              </div>
            </section>
          </div>
        </div>
      }
      {
        changeForm == "EmailNotMatched" && (<div className="Result-PopUp pt-[10px] p-[10px]  fixed top-[110px] left-[-14px] sm:left-[5px] w-[90%] sm:w-[100%] z-[345678900000] ">
          <div className="grid w-[100vw] h-[100%] justify-center align-middle">
            <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[450px] p-4 h-auto box-border overflow-x-auto bg-white shadow-2xl'>
              <div className="w-full flex justify-between mb-3">
                <img src={logo} alt="" className="w-[110px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                  onClick={() => { history.push("/") }}
                />
              </div> <div className='w-full text-center'>
                <p className='text-2xl'><span className='text-3xl text-red-400 mr-2'>Sorry</span>Your Email is not matched</p> <br />
              </div>
            </section>
          </div>
        </div>)
      }


      {/* this is for server erro message popUp when response is not good but user has the valid informations      */}
      {
        changeForm == "serverError" && <div className="Result-PopUp pt-[10px] p-[10px]  fixed top-[110px] left-[-14px] sm:left-[5px] w-[90%] sm:w-[100%] z-[345678900000] ">
          <div className="grid w-[100vw] h-[100%] justify-center align-middle">
            <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[450px] p-4 h-auto box-border overflow-x-auto bg-white shadow-2xl'>
              <div className="w-full flex justify-between mb-3">
                <img src={logo} alt="" className="w-[110px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                  onClick={() => { history.push("/") }}
                />
              </div> <div className='w-full text-center'>
                <p className='text-2xl'><span className='text-3xl text-red-400'>Oops!</span> Something went wrong please try again</p> <br />
              </div>
            </section>
          </div>
        </div>
      }








    </div>
  )

}

export default Index


