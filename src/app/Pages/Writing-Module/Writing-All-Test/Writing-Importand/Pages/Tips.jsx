"use client";
import React, { useState } from 'react';
import { FcIdea } from "react-icons/fc";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

function WTips() {
    const [tips, setTips] = useState(false);




    return (<div className="W-Tips fixed  left-2  bottom-[56px]  ">
        {
            tips && (<div className=" wow animated fadeInLeft p-[30px] mb-[-50px] sm:mb-0 ml-[-40px] sm:ml-[-30px]">
                <div className="pricing-one__single">
                    <div className='text-xl sm:text-2xl text-red-500 w-full flex justify-end mr-1 cursor-pointer'>
                        <button
                            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray mt-[-15px]"
                            onClick={() => { setTips(!tips) }}>  <MdOutlineCancel />
                        </button>
                    </div>
                    <div className="pricig-body">
                        <ul>
                            <li>
                                <i className="fal fa-check" /> পরীক্ষার ফরম্যাট বুঝুন |
                            </li>
                            <li>
                                <i className="fal fa-check" /> আপনার লেখা পরীক্ষা করুন |
                            </li>
                            <li>
                                <i className="fal fa-check" /> ব্যবহার করা মানদণ্ড বুঝে নিন |
                            </li>
                            <li>
                                <i className="fal fa-check" /> সাধারণ কাজ লেখা |
                            </li>
                            <li>
                                <i className="fal fa-check" /> সুসংগত অনুচ্ছেদে আপনার ধারণাগুলি সংগঠিত করুন |
                            </li>
                            <li>
                                <i className="fal fa-check" /> পুনরাবৃত্তি এড়িয়ে চলুন |
                            </li>

                        </ul>
                    </div>
                </div>
            </div>)
        }
        <div className="wT2 p-1 mt-[-20px]">
            <button
                onClick={() => { setTips(!tips) }}
                className="w-[60px] sm:w-[70px] flex p-1 bg-green-500 rounded text-white  justify-center align-middle gap-1">
                {
                    tips ? <AiOutlineBulb className='text-1xl sm:text-2xl' /> :
                        <FcIdea className='text-1xl sm:text-2xl' />
                }
                <span className='text-[10px] sm:text-[15px]'>Tips</span>
            </button>
        </div>
    </div>
    )
}

export default WTips