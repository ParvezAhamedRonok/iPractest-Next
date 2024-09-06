"use client"
import React, { useEffect, useState } from 'react';
import logo from "../../../../../../assets/images/Practestlogo.png";
import { CgProfile } from "react-icons/cg";
import { useRouter } from 'next/navigation';
import { MdFiberSmartRecord } from "react-icons/md";
import Image from 'next/image';
//end of the importing...


export default function ReasultHeader({ openLogInPage }) {
    const history = useRouter();
    const [userEmail, setuserEmail] = useState("")

    useEffect(() => {
        setuserEmail(localStorage.getItem("userEmail"))
    }, [])

    return (
        <div>
            <div className="w-full flex justify-between align-middle border-b-1 border-b-gray-300 shadow-md p-2">
                <div className='flex gap-2 pt-[10px]'>
                    <Image src={logo} alt="" className="w-[35%] sm:w-[40%] ml-2 cursor-pointer"
                        onClick={() => { history.push("/") }}
                    />
                </div>


                {
                    userEmail ?
                        <div className='flex gap-3'>
                            <div className='flex justify-center mt-2 align-middle mr-[2px] sm:mr-[10px] rounded-[15px] p-1 gap-1 translate-y-2 bg-[#06b6d4] h-[35px]'>
                                <MdFiberSmartRecord className='text-3xl text-red-600 m-auto cursor-pointer'
                                    onClick={() => { history.push("/MainDashBoard/Speaking-Records") }}
                                />
                                <p className='text-[10px] text-white m-auto'>Records</p>
                            </div>
                        </div>

                        : (
                            <div className="w-fill flex justify-end align-middle">
                                {/* <button className='sm:m-[10px] mr-3 pt-1 w-[100px] h-[30px] p-2 rounded-[22px] text-[10px] shadow-sm text-center bg-blue-600 text-white m-auto'
                                onClick={openLogInPage} 
                            >Login / Sign up</button> */}

                                <button className='sm:m-[10px] w-auto h-[32px] p-2 rounded-[24px] text-[12px] shadow-sm text-center bg-[#ff5771] hover:bg-blue-600 text-white m-auto mr-3 pt-1 flex gap-1'
                                    onClick={openLogInPage}
                                >
                                    <CgProfile className='translate-y-[-3px] text-2xl rounded-[50%] bg-transparent text-white ' />
                                    Login</button>
                            </div>
                        )
                }
            </div>
        </div>
    )
}
