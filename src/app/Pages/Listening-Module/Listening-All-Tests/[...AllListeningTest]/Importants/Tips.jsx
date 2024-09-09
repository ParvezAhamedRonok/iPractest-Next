"use client";
import React, { useState } from 'react';
import { FcIdea } from "react-icons/fc";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";


function LTips() {
    const [tips, setTips] = useState(false)
    return (<div className="W-Tips fixed  left-2 bottom-[86px] sm:bottom-[55px] ">
        {
            tips && (<div className=" wow animated fadeInLeft p-[35px] mb-[-54px] sm:mb-[-38px] ml-[-40px] sm:ml-[-30px]">
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
                                <i className="fal fa-check" /> আপনার সাধারণ শোনার দক্ষতা উন্নত করুন |
                            </li>
                            <li>
                                <i className="fal fa-check" /> আপনার বিষয় শব্দভান্ডার পোলিশ |
                            </li>
                            <li>
                                <i className="fal fa-check" /> মনোযোগ হারাবেন না |
                            </li>
                            <li>
                                <i className="fal fa-check" /> শব্দ-সূচক দেখুন |
                            </li>
                            <li>
                                <i className="fal fa-check" />খুব তাড়াতাড়ি উত্তর লিখবেন না |
                            </li>
                            <li>
                                <i className="fal fa-check" /> নির্বোধ ভুলের জন্য চেক করুন |
                            </li>
                            <li>
                                <i className="fal fa-check" /> কোনো ফাঁকা উত্তর ছেড়ে দেবেন না!|
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

export default LTips