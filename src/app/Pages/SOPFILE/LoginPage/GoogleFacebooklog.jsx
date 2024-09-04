"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios"
import { ClockLoader } from "react-spinners";
// import Timer from "../../WritingAllTests/Writing-All-Pages/Writing-Importand/Pages/Timer";
// import { GoogleLogin } from 'react-google-login'; 
import "./GoogleFace.css";
import { isMobile } from "react-device-detect"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useStateContext } from "../../../../contexts/ContextProvider";

import { LOGIN_URL, SIGNUP_URL } from "../../../../assets/URL's/AllUrl";

// END OF THE IMPORTING-----












function GoogleFacebooklog({ finalFuncAfterLogInorSignUp }) {
  const { setWritingText, loginRedirectStatus, setLoginRedirectUrl } = useStateContext();
  const history = useRouter();

  //all user localstorages data storing states.......
  const [userCountryInfo, setUserCountryInfo] = useState();
  const [usersCountryName, setuserCountryName] = useState("");
  const [DeviceNumber, setUserDeviceName] = useState("")
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [refferDID, setRefferdID] = useState("")



  const [loadingMsg, setLoadingMsg] = useState(false);
  //state for checking localStorage --
  const [DeviceNo, setDeviceNo] = useState("")

  //Code below is for checking localStorage status
  useEffect(() => {
    //user all localstorage storing into states into this useEffect below...
    let countryInfo = localStorage.getItem("CountryInfo");
    setUserCountryInfo(countryInfo && JSON.parse(countryInfo));
    setUserDeviceName(localStorage.getItem('DeviceNo'));
    setRefferdID(localStorage.getItem("referID") && localStorage.getItem("referID"))


    //check device numbers...
    if (!DeviceNumber || DeviceNumber == "null" || DeviceNumber == "undefined") {
      setDeviceNo("")
    } else {
      setDeviceNo("anyThing")
    }
  }, [])

  const nextPath = (path) => {
    history.push(path);
  }






  const GoogleOnSuccessFunc = (decodedres) => {
    let userName = decodedres.name;
    let email = decodedres.email;
    let password = userName + "32/2sda/zxwxzX";
    console.log(decodedres.name);
    localStorage.setItem("UserProfileImg", decodedres.picture);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    // refreshTokenSetup(res);
    if (decodedres) {
      setLoadingMsg(true);
      axios({
        method: "post",
        url: SIGNUP_URL,
        // url: "http://localhost:8080/api/auth/signup",
        data: {
          "username": userName,
          "email": email,
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
              // openSignUpPage()   this is for close popUp
              // if (loginRedirectStatus == "") {
              //   nextPath("/MainDashBoard/Dashboard");
              // } else {
              //   setLoginRedirectUrl("")
              // }
              setLoginRedirectUrl("")
              finalFuncAfterLogInorSignUp();
            }, 1000);

          }

        })
        .catch((e) => {
          console.log(e)
          if (e) {
            axios({
              method: "post",
              url: LOGIN_URL,
              // url: "http://localhost:8080/api/auth/signin",
              data: {
                "username": userName,
                "password": password,
                "Devices": DeviceNo != "" ? DeviceNumber : "",
                //country & flag for if user has no counrty name or flag then update those with this
                "country": userCountryInfo ? userCountryInfo.countryName : "",
                "countryFlag": userCountryInfo ? userCountryInfo.countryFlag : "",
              },
            })
              .then((res) => {
                console.log(res)
                // console.log(res.data.token);
                // console.log(res.data.username);
                // setLoadingMsg(true);
                localStorage.setItem('loginTOken', res.data.token);
                localStorage.setItem('userName', res.data.username);
                localStorage.setItem('userEmail', res.data.email);
                localStorage.setItem('setCountry', res.data.country);
                localStorage.setItem('setCountryFlag', res.data.countryFlag);
                if (res.data.referID != "") { localStorage.setItem("referID", res.data.referID) }
                if (res.data.Devices != "" || res.data.Devices != "undefined") {
                  localStorage.setItem('DeviceNo', res.data.Devices)
                }

                if (res) {
                  setTimeout(() => {
                    setLoadingMsg(false);
                    // openSignUpPage()   this is for close popUp
                    // if (loginRedirectStatus == "") {
                    //   nextPath("/MainDashBoard/Dashboard");
                    // } else {
                    //   setLoginRedirectUrl("")
                    // }
                    setLoginRedirectUrl("")
                    finalFuncAfterLogInorSignUp();
                  }, 1000);
                }
              })
              .catch((e) => {
                console.log(e);
                setLoadingMsg(false);
                if (e.response.data.message == "Too many devices") {
                  alert("Access blocked ,  You have logged in  with too many devices or Too many browers! please login with your previous device or browser that you have used or Contact us")
                }
              })
          }
        })
    }

  };
  // const onFailure = (res) => {
  //   console.log('Login failed: res:', res);
  //   // alert(
  //   //   `Failed to login. 😢 Please Try again`
  //   // );
  // };




  return (
    <>
      {/* <LoginSocialGoogle
        client_id={
          clientId}
        scope='openid profile email'
        discoveryDocs='claims_supported'
        access_type='offline'
        auto_select={true}
        onResolve={({ provider, data }) => {
          console.log(data)
          console.log(data.name)
          console.log(data.email)
          console.log(provider)

          let userName = data.name;
          let email = data.email;
          let password = userName + "32/2sda/zxwxzX";
     
        }}
        onReject={(err) => { console.log(err) }}
      >
      </LoginSocialGoogle> */}
      <div className={`mainGoogleAuth flex pt-[3px]  rounded justify-center align-middle cursor-pointer`}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("user Info");
            console.log(decoded);
            GoogleOnSuccessFunc(decoded);

          }}
          onError={() => {
            console.log('Login Failed');
          }} />

      </div>

      {/* log-in by the facebook */}
      {/* <LoginSocialFacebook
        appId='613582557209667'
        onResolve={(Response) => {
          let userName = Response.data.name;
          let email = Response.data.email;
          let password = userName + "32/2sda/zxwxzX"
          console.log(userName);
          console.log(email)
          //showing user facebook data into the colsole
          console.log(Response.data);
          if (Response) {
            setLoadingMsg(true);
            axios({
              method: "post",
              url: "https://ipractestuserhandle.azurewebsites.net/api/auth/signup",
              // url:"http://localhost:8080/api/auth/signup",
              data: {
                "username": userName,
                "email": email,
                  "country": userCountryInfo ? userCountryInfo.countryName : "",
                  "countryFlag": userCountryInfo ? userCountryInfo.countryFlag : "",
                "referID":localStorage.getItem("referID") ? localStorage.getItem("referID") : "",
                "roles": ["user"]
              },
            })
              .then((res) => {
                console.log(res);
                // setLoadingMsg(true);
                if (res) {
                  // setsignUpMsg(true);
                  localStorage.setItem('loginTOken', res.data.token);
                  localStorage.setItem('userName', res.data.username);
                  localStorage.setItem('userEmail', res.data.email);
                 localStorage.setItem('setCountry', res.data.country);
                localStorage.setItem('setCountryFlag', res.data.countryFlag);
                 if (res.data.referID != ""){ localStorage.setItem("referID", res.data.referID)} 
                  setTimeout(() => {
                    // setsignUpMsg(false);
                    // openSignUpPage()  // this is for close popUp
                    setTimeout(() => {
                      setLoadingMsg(false);
              // openSignUpPage()   this is for close popUp
              // if (loginRedirectStatus == "") {
              //   nextPath("/MainDashBoard/Dashboard");
              // } else {
              //   setLoginRedirectUrl("")
              // }
              setLoginRedirectUrl("")
              finalFuncAfterLogInorSignUp();
                    }, 1000);
                  }, 1000);

                }

              })
              .catch((e) => {
                console.log(e)
                if (e) {
                  axios({
                    method: "post",
                    url: "https://ipractestuserhandle.azurewebsites.net/api/auth/signin",
                    // url:"http://localhost:8080/api/auth/signin",
                    data: {
                      "username": userName,
                      "password": password,
                    },
                  })
                    .then((res) => {
                      console.log(res)
                      // setLoadingMsg(true);
                      // console.log(res.data.token);
                      // console.log(res.data.username);
                      localStorage.setItem('loginTOken', res.data.token);
                      localStorage.setItem('userName', res.data.username);
                      localStorage.setItem('userEmail', res.data.email);
                      localStorage.setItem('setCountry', res.data.country);
                      localStorage.setItem('setCountryFlag', res.data.countryFlag);
                      if (res.data.referID != ""){ localStorage.setItem("referID", res.data.referID)}  
                      if (res) {
                        setTimeout(() => {
                          // setsignUpMsg(false);
                          setLoadingMsg(false);
                          // openSignUpPage()  this is for close popUp
              // openSignUpPage()   this is for close popUp
              // if (loginRedirectStatus == "") {
              //   nextPath("/MainDashBoard/Dashboard");
              // } else {
              //   setLoginRedirectUrl("")
              // }
              setLoginRedirectUrl("")
              finalFuncAfterLogInorSignUp();
                        }, 1000);
                      }

                    })
                    .catch((e) => {
                      console.log(e);
                      setLoadingMsg(false);
                    })
                }
              })
          }
        }

        }
        onReject={(error) => { console.log(error) }}

      >

        <div className="flex p-2 rounded bg-sky-200 gap-2 justify-center align-middle cursor-pointer">
          <i className='text-2xl sm:text-3xl text-blue-600'><IoLogoFacebook /></i>
          <p className='text-[11px] sm:text-[14px]  mt-1'>Continue with Facebook</p>
        </div>
      </LoginSocialFacebook> */}





      {/* for loading after successfully login */}
      {loadingMsg && <section className="fixed top-2 left-2 w-[90%] sm:w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[100000] grid-cols-1 grid-rows-5">
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

export default GoogleFacebooklog