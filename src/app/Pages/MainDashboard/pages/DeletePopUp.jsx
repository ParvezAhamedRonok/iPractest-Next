"use client";
import React, { useState } from 'react'
import axios from 'axios';
import { DELETE_USER_ACCOUNT_PARMANENTLY } from '../../../../assets/URL\'s/AllUrl';


export default function DeletePopUp({ setDeleteConfirmPop }) {
    const [getPassword, setGetPassword] = useState("");
    const [userLoginEmail, setUserloginEmail] = useState("");

    useEffect(() => {
        setUserloginEmail(localStorage.getItem("userEmail"))
    }, []);

    //delete account function for delete the user perpananently form the database til they are again sign up 
    const handleDeleteFunc = (x) => {
        x.preventDefault();
        // alert(getPassword);
        axios({
            method: "post",
            url: DELETE_USER_ACCOUNT_PARMANENTLY,
            // url: "http://localhost:8080/api/auth/DeleteAccountOftheUser",
            data: {
                "email": userLoginEmail,
                "password": getPassword,
            },
        })
            .then((res) => {
                console.log(res);
                if (res) {
                    localStorage.removeItem("userName");
                    localStorage.removeItem('userEmail');
                    localStorage.removeItem("loginTOken");
                    localStorage.removeItem('setCountry');
                    localStorage.removeItem('setCountryFlag');
                    window.location.reload();
                }

            })
            .catch((err) => {
                console.log(err);
                if (err.response.data.message == "Invalid Password!") {
                    alert("Opps! Password was incorrect.")
                }

            })
    }





    return (
        <div className='z-[1000000]'>
            <div className='fixed top-0 left-0 right-0 bottom-0'>
                <div className='flex w-full h-[100vh] justify-end align-middle'>
                    <div class="mt-24 p-4 rounded bg-white  text-center border-t-4 border-red-600 mx-auto text-gray-700 pt-0 w-full sm:w-[420px] h-[360px] shadow-md">
                        <span class="bg-red-600 text-white p-4 rounded-full inline-flex -mt-10 translate-y-[-20px] mb-2">
                            <svg class="fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" /></svg>
                        </span>
                        <h3 class="font-bold text-2xl text-black mb-2">Delete Account?</h3>
                        <p>You'll permanently loose your</p>
                        <ul class="list-disc inline-block text-left pt-2 ml-2">
                            <li>Profile</li>
                            {/* <li></li> */}
                            <li>Photos</li>
                        </ul>
                        <form onSubmit={handleDeleteFunc}>
                            <div className='w-full p-2 flex justify-center align-middle'>
                                <input type="text" name="password" id="password"
                                    className='p-2 rounded-[15px] border-1 border-gray-300 shadow-sm bg-gray-100 placeholder:text-[13px] placeholder:text-center'
                                    placeholder='please enter your password'
                                    required
                                    onChange={(event) => { setGetPassword(event.target.value) }} value={getPassword} />
                            </div>
                            <div class="flex pt-8">
                                <button class="w-1/2 mr-1 bg-gray-50 border text-gray-600 border-gray-400 hover:bg-blue-300 text-[14px] sm:text-[15px] py-2 px-4 rounded font-medium"
                                    onClick={() => { setDeleteConfirmPop(false) }}
                                >Cancel</button>
                                <button class="w-1/2 ml-1 bg-red-600 border border-red-600 text-white hover:bg-red-700 text-[14px] sm:text-[15px] hover:border-red-700 py-2 px-4 rounded font-medium"
                                    type='submit'
                                >Delete Account</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
