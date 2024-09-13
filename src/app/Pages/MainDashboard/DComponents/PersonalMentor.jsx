"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStateContext } from "../../../../contexts/ContextProvider";
// end importing--->
import CEO_Sir from '../../../../assets/images/ceo.jpg';
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image';
import { SiWhatsapp } from "react-icons/si";

//end of importings............




function PersonalMentor({ setOpenMentorPopUp }) {
    const { writingText, setWritingText, loginRedirectStatus, setLoginRedirectUrl } = useStateContext();
    const history = useRouter();



    return (
        <>
            <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                <div class="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
                    <div class="sm:mx-auto sm:w-full sm:max-w-md pt-[40px] ">
                        <div class="mt-[40px] bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
                            <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                                onClick={() => { setOpenMentorPopUp(false) }}
                            >
                                X
                            </div>
                            <div className='text-[16px] mt-3 text-purple-500 translate-x-[-7px]  font-bold mb-3'>Your personal Mentor</div>

                            <div className='m-auto grid gap-2'>
                                <Image src={CEO_Sir} alt="" className="m-auto w-[130px] h-[130px] rounded-[50%] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"

                                />
                                <div className='m-autu gap-4 grid justify-center align-middle mt-1 translate-x-1'>
                                    <p className='flex gap-2 text-center'><FaFacebook className='p-1 bg-purple-600 text-white text-3xl rounded-[50%] translate-y-[-1px]' /> <a href="https://www.facebook.com/saud.arian" className='underline'>Alam Al Saud</a></p>
                                    <p className='flex gap-2 text-center'><SiWhatsapp className='p-1 bg-purple-600 text-white text-3xl rounded-[50%] translate-y-[-3px]' /> +49 162 3951485</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PersonalMentor