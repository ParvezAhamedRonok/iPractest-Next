import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { POST_OTP_ADD_USER_TO_DATABASE_AFTER_SUCCESSFULL_VARIFICATION, POST_SENDOTP_TO_USER_VIA_SMSNET_BD } from '@/assets/URL\'s/AllUrl';


export default function GetBDUserNumber({ OTP_Popup, setOTP_Popup }) {
    //all localstorage variables for storing the localstorage data...
    const [userloginemail, setuseremail] = useState("");
    const [userloginTOken, setuserToken] = useState("")
    const [userloginCountry, setuserCountry] = useState("");
    const [userLoginName, setUserLoginName] = useState("");



    // other state's
    //get user Number state..
    const [storingUserNumber, setstoringUserNumber] = useState();
    //state for change componet to OTP checker ..
    const [changePopUp, setChangePopup] = useState(true);

    //storing OTP which i am gettign from backend..
    const [storingOTPCode, setStoringOTPCode] = useState();

    //checkOTP state..
    const [matchOTP, setMatchOTP] = useState()





    //storing all localstorage data into variables by code below using use-States...
    useEffect(() => {
        setuseremail(localStorage.getItem('userEmail'));
        setuserToken(localStorage.getItem("loginTOken"))
        setuserCountry(localStorage.getItem("setCountry"));
        setUserLoginName(localStorage.getItem("userName"))
    }, [])






    //send OTP to the user numbe if it is valid..

    const snedOTPToNumber = (x) => {
        x.preventDefault()
        // alert("ajsda");
        axios({
            method: "post",
            // url: "http://localhost:8080/api/user/sendOTP-To-User-via-smsNet-BD",
            url: POST_SENDOTP_TO_USER_VIA_SMSNET_BD,
            headers: {
                "Authorization": `Bearer ${userloginTOken}`,
                'Content-Type': 'application/json'
            },
            data: {
                userNumber: storingUserNumber
            }
        })
            .then((res) => {
                console.log(res.data);
                alert("number send success..")
                // store OTP into a state if otp send successfully ...
                //storing OTP into  state....
                setStoringOTPCode(res.data.message)

                //change state to verify OTP
                setChangePopup(false);


            })
            .catch((e) => {
                console.log(e);
                alert(`Opps! Sorry,  ${e.response.data.message}`);
                //close popUp ..
                setOTP_Popup(false)

            })
    }



    //check OTP & save data to the database....
    const checkOTPCodeThenSaveToDatabase = (x) => {
        x.preventDefault();
        let OTP_From_Backend = Number(storingOTPCode);
        let OTP_Get_From_User = Number(matchOTP);
        if (OTP_From_Backend == OTP_Get_From_User) {
            //here will be save user number into backedn code ...
            axios({
                method: "post",
                // url: "http://localhost:8080/api/user/Add-User-To-Database-after-Successfull-Varification",
                url: POST_OTP_ADD_USER_TO_DATABASE_AFTER_SUCCESSFULL_VARIFICATION,
                headers: {
                    "Authorization": `Bearer ${userloginTOken}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    "userName": userLoginName,
                    "userEmail": userloginemail,
                    "userNumber": storingUserNumber
                }
            })
                .then((res) => {
                    console.log(res.data);;
                    alert("Thank you! You now have access to get all sections of test-1 for free.");
                    setOTP_Popup(false);
                    window.location.reload();
                })
                .catch((e) => {
                    console.log(e);
                    alert("Sorry! for this server erro please try again letter.");
                    //close popUp ..
                    setOTP_Popup(false)

                })
        } else {
            alert("Opps! sorry your OTP is not matched.Try again letter.")
        }


    }


    // console.log(OTP_Popup);
    // console.log(typeof storingOTPCode);
    // console.log(typeof matchOTP)
    return (
        <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
            <div className="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-xl pt-[60px] ">
                    <div className="mt-[40px] backGroundColorSetCss py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
                        <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                            onClick={() => { setOTP_Popup(false) }}
                        >
                            X
                        </div>

                        {/* Get mobile number component & send OTP to them. */}
                        {
                            changePopUp ? (
                                <form className="max-w-sm mx-auto" onSubmit={snedOTPToNumber}>
                                    <div className="flex flex-col space-y-2 text-center">
                                        <h4 className="text-xl md:text-2xl font-bold">Please Enter Your Number To Get Test-1 All Section Free</h4>

                                    </div> <br />
                                    <div className="flex items-center">
                                        <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 overflow-hidden" >
                                            <svg className="w-5 h-5" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#496e2d" r="256" /><circle cx="200.348" cy="256" fill="#d80027" r="111.304" /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                                        </button>
                                        <label for="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
                                        <div className="relative w-full">
                                            <input type="number" id="phone-input" aria-describedby="helper-text-explanation" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="01810-100100"
                                                onChange={(e) => { setstoringUserNumber(e.target.value) }}
                                                required />
                                        </div>
                                    </div>
                                    <p id="helper-text-explanation" className="mt-2 mb-4 text-sm text-gray-500 dark:text-gray-400 text-center">We will send you an SMS with a verification code.</p>
                                    <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send verification code</button>
                                </form>
                            ) : (


                                < form className='' onSubmit={checkOTPCodeThenSaveToDatabase}>
                                    {/* OTP code match component... */}
                                    <div className="flex flex-1 flex-col  justify-center  max-w-md mx-auto mt-2">
                                        <div className="flex flex-col space-y-2 text-center">
                                            <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
                                            <p className="text-md md:text-xl">
                                                Enter the OTP we just sent you.
                                            </p>
                                        </div>
                                        <div className="flex flex-col max-w-md space-y-5">
                                            <input type="number" placeholder="otp"
                                                className={`flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal ${Number(storingOTPCode) == Number(matchOTP) ? "text-green-600" : "text-red-500"}`}
                                                onChange={(e) => { setMatchOTP(e.target.value) }}
                                                required

                                            />
                                            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white" type='submit'>
                                                Confirm
                                            </button>
                                        </div>
                                    </div>

                                </form>

                            )
                        }



                    </div>
                </div>
            </div>
        </div >
    )
}





