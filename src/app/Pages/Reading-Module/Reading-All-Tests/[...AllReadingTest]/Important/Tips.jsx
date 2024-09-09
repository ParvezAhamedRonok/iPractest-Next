"use client"
import React, { useState } from 'react';
import { FcIdea } from "react-icons/fc";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

function RTips() {
    const [tips, setTips] = useState(false)

    return (
        <div className="W-Tips fixed  left-2  bottom-[86px] sm:bottom-[55px] mt-3 z-20">
            {
                tips && (<div className=" wow animated fadeInLeft p-[35px] mb-[-50px] sm:mb-[-30px] ml-[-40px] sm:ml-[-30px]">
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
                                    <i className="fal fa-check" /> প্রতিটি শব্দ বোঝার আশা করবেন না |
                                </li>
                                <li>
                                    <i className="fal fa-check" /> আপনার পড়ার দক্ষতা অনুশীলন করুন, আপনার IELTS দক্ষতা নয় |
                                </li>
                                <li>
                                    <i className="fal fa-check" /> নির্দেশাবলী খুব সাবধানে পড়ুন|
                                </li>
                                <li>
                                    <i className="fal fa-check" /> আতঙ্কিত হবেন না |
                                </li>
                                <li>
                                    <i className="fal fa-check" /> এটা কি সত্যিই একটি শব্দভান্ডার পরীক্ষা |
                                </li>
                                <li>
                                    <i className="fal fa-check" /> সময় অত্যন্ত গুরুত্বপূর্ণ |
                                </li>

                                <li>
                                    <i className="fal fa-check" /> আপনি ইতিমধ্যে বিষয় সম্পর্কে জানেন কিছু উপেক্ষা করুন |
                                </li>

                                <li>
                                    <i className="fal fa-check" />আপনার উত্তর স্থানান্তর করার সময় সতর্ক থাকুন |
                                </li>

                                <li>
                                    <i className="fal fa-check" /> কোনো ফাঁকা রাখবেন না |
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>)
            }
            <div className="wT2 p-1">
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

export default RTips