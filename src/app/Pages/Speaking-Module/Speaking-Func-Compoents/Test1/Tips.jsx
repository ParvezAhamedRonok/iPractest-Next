"use client"
import React, { useState } from 'react';
import { FcIdea } from "react-icons/fc";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

function STips() {
    const [tips, setTips] = useState(false);




    return (<div className="S-Tips fixed  left-2  bottom-[7px] z-[22222] ">
        {
            tips && (<div className=" wow animated fadeInLeft p-[35px] mb-[-50px] sm:mb-[-20px] ml-[-40px] sm:ml-[-30px]">
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
                                <i className="fal fa-check" /> পরীক্ষার আগে আপনার উত্তর মুখস্থ করবেন না |
                            </li>
                            <li>
                                <i className="fal fa-check" /> স্বতঃস্ফূর্তভাবে কথা বলুন |
                            </li>
                            <li>
                                <i className="fal fa-check" /> নমুনা প্রশ্ন ব্যবহার করে আপনার IELTS কথা বলার অনুশীলন করুন |
                            </li>
                            <li>
                                <i className="fal fa-check" />আপনার উত্তর বিস্তারিত এবং প্রসারিত করুন |
                            </li>
                            <li>
                                <i className="fal fa-check" />আপনার উত্তর তাড়াহুড়ো করবেন না। ধীরে এবং পরিষ্কার করে কথা বল. |
                            </li>
                            <li>
                                <i className="fal fa-check" /> ভুল করলে ঘাবড়াবেন না |
                            </li>

                            <li>
                                <i className="fal fa-check" /> সাবলীলতা এবং নির্ভুলতা আলাদাভাবে অনুশীলন করুন |
                            </li>

                            <li>
                                <i className="fal fa-check" /> আপনার প্রতিক্রিয়াগুলিতে উদাহরণ ব্যবহার করার সময়, অনুমানমূলক পরিস্থিতি এড়াতে চেষ্টা করুন। |
                            </li>
                        </ul>
                    </div>
                </div>
            </div>)
        }
        <div className="wT2 p-1">
            <button
                onClick={() => { setTips(!tips) }}
                className="w-[60px] sm:w-[70px] mb-2 flex p-1 bg-green-500 rounded text-white  justify-center align-middle gap-1">
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

export default STips