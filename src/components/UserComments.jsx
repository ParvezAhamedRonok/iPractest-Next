"use client"
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { BsEmojiSmile } from "react-icons/bs"
import Axios from "axios";
import { MdOutlineCancel } from "react-icons/md";
import { COMMENT_POST_FOR_STORE_USER_DATA } from "../assets/URL's/AllUrl"

//end of the importing....



function UserFeedBack({ closeCommentPopUp, setPassComment }) {
    //all localstorage data storing state....
    const [userMainToken, setuserMainToken] = useState("");
    const [userEmail, setuserEmail] = useState("")
    const [userName, setuserName] = useState("");

    const [saveRating, setSaveRationg] = useState(null);
    const [VisiablePopUp, setVisiblePopup] = useState(true);
    const [thanksIcon, setThanksIcon] = useState(false);
    const [comments, setcomments] = useState();
    const [unloginUsername, setunloginUsername] = useState("");


    //use effect uses..
    useEffect(() => {
        setuserEmail(localStorage.getItem("userEmail"));
        setuserName(localStorage.getItem('userName'))
    }, [])






    //function for user comments
    const handleUserCommenbts = (e) => {
        e.preventDefault();
        setVisiblePopup(false);
        setThanksIcon(true);
        Axios({
            method: "post",
            url: COMMENT_POST_FOR_STORE_USER_DATA,
            // url: "http://localhost:8080/api/user/Comments",
            data: {
                "rating": saveRating || "",
                "name": userName || unloginUsername || "Someone",
                "userEmail": userEmail || "",
                "data": comments
            },
        })
            .then((res) => {
                console.log(res)
                if (res) {
                    setTimeout(() => {
                        setVisiblePopup(false);
                        setThanksIcon(false);
                        setPassComment(false)
                    }, 2000);


                }

            })
            .catch((e) => { console.log(e) })


    }



    const handleUserComments = (x) => {
        const values = x.target.value
        x.preventDefault();
        setcomments(values)

    }
    const handleUnloginUsers = (x) => {
        const values = x.target.value
        x.preventDefault();
        setunloginUsername(values)

    }






    return (
        <div className='fixed top-1 left-0 sm:left-[25%]  z-[2039239029] '>
            {
                VisiablePopUp && (
                    <form
                        onSubmit={handleUserCommenbts}
                        className='w-[100vw] sm:w-[600px] sm:h-auto bg-sky-200 rounded-[3%] grid grid-cols-1 pt-2 overflow-hidden'>
                        <div className='w-[95%] text-red-400 flex justify-end cursor-pointer '>
                            <button
                                style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                                className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                onClick={closeCommentPopUp}>  <MdOutlineCancel />
                            </button>
                        </div>




                        <div className='flex w-full justify-center align-middle pr-2 sm:pr-3 mb-3'>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1

                                return <label key={i}>
                                    <input
                                        className='d-none'
                                        type="radio" name="rating" value={ratingValue}
                                        onClick={() => { setSaveRationg(ratingValue) }}

                                    />
                                    <FaStar color={ratingValue <= saveRating ? "yellow" : "gray"}
                                        className='text-3xl sm:text-[50px] cursor-pointer'
                                    />
                                </label>
                            })}
                        </div>

                        {/* <div>
                        {saveRating}
                    </div> */}

                        {/* for user Comments we can use from here */}
                        <div className='flex flex-col mb-2' >
                            {
                                userName ? ""
                                    :
                                    <div className='w-full flex justify-center align-middle mb-2' >
                                        <input
                                            className='p-2 border-none w-[70%] border-b-2 border-b-gray-500 rounded-[2%]'
                                            type="text" name="unloginusername" id="unloginusername"
                                            onChange={handleUnloginUsers}
                                            placeholder='Please enter you name'
                                        />
                                    </div>
                            }



                            <textarea className='w-[80%] sm:w-[70%]  ml-[40px] sm:ml-[90px] p-2 mb-3 rounded'
                                rows='4' required name='userComment' id='userComment'
                                onChange={handleUserComments}
                                placeholder='Please enter you comment.'
                            ></textarea>
                            <button className='p-2  bg-red-300 rounded hover:bg-sky-500 w-[120px] m-auto'
                                type='submit'
                            >submit</button>
                        </div>

                    </form>
                )
            }
            {
                thanksIcon && (<div className='w-[100vw] sm:w-[600px] h-[250px] bg-sky-200 rounded-[3%] 
                  flex justify-center gap-4 align-middle overflow-hidden pt-[100px]'>
                    <div className='cursor-pointer absolute top-4 right-[25px]'>
                        <button
                            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            onClick={closeCommentPopUp}>  <MdOutlineCancel />
                        </button>
                    </div>
                    <h1 className='text-3xl'>Thank You</h1>
                    <BsEmojiSmile className='text-4xl' color='blue' />
                    {/* {saveUser}
                           {saveRating} */}

                </div>)
            }

        </div>
    )
}

export default UserFeedBack