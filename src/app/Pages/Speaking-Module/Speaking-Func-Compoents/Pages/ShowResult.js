"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import logo from "../../../assets/images/Practestlogo.png";
import { Flex, Progress } from 'antd';
import { useStateContext } from "../../../contexts/ContextProvider";
import Image from 'next/image';
//end of the importing....

export default function ShowResult() {
    const { showSpeakingResult, setShoeSpeakingResult } = useStateContext();
    const history = useRouter();
    const [retriveJsonData, setretriveJsonData] = useState()

    useEffect(() => {
        let SpeakingScores = localStorage.getItem("showSpeakingResult");
        setretriveJsonData(JSON.parse(SpeakingScores))
    }, [])




    let cssBackground = {
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,46,111,1) 6%, rgba(67,67,166,1) 14%, rgba(0,212,255,1) 69%, rgba(48,46,111,1) 100%, rgba(0,212,255,1) 100%)"
    }

    return (
        <div>
            {
                showSpeakingResult && (
                    <div className="Result-PopUp pt-[145px] sm:pt-[165px]  fixed top-2 left-0 sm:left-2 w-[92%] sm:w-[100%]">
                        <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                            <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[100vw] sm:w-[600px] pt-3 pb-4 h-auto shadow-2xl border-2 border-gray-400 z-[100000] '
                                style={cssBackground}
                            >
                                {
                                    localStorage.getItem("userEmail") ? "" : (
                                        <div className='w-full h-[50px] flex justify-center align-middle pt-3 font-bold text-[11px] sm:text-[17px] bg-red-200 text-black rounded translate-y-[-15px]'>
                                            Please login if you want to save your speech.
                                        </div>
                                    )
                                }
                                <div className="w-full flex justify-end ">

                                    <Image src={logo} alt="" className="w-[28%] sm:w-[18%] h-[60px] translate-x-[-15px]  cursor-pointer"
                                        onClick={() => { history.push("/") }}
                                    />
                                </div>



                                <div className="m-auto translate-y-[-26px]">
                                    <div className="translate-x-[65px] mb-2">
                                        <Flex gap="small" wrap="wrap">
                                            <Progress type="circle" strokeWidth={12} percent={Number(retriveJsonData.ieltsResult) / 9 * 100} format={(percent) => `${retriveJsonData.ieltsResult}`} size={85} strokeColor="rgb(255, 145, 0)" trailColor="rgb(192,192,192)" />
                                        </Flex>
                                        <p className="text-[11px] font-bold ml-3">Ielts Score</p>
                                    </div>
                                    <div className="ml-2">
                                        <div>
                                            <div className="relative w-[200px] bg-[rgb(192,192,192)] rounded h-[25px] mb-1 ">
                                                <div className="bg-[rgb(255,145,0)] h-[25px] rounded" style={{ width: Number(retriveJsonData.LexicalResourceResult) / 10 * 100 + "%" }}></div>
                                                <div className="barTexts w-[200px] flex justify-between align-middle absolute top-0 left-0">
                                                    <p className='ml-2 text-black font-bold text-[12px]'>LexicalResource</p>
                                                    <p className='font-bold text-black text-xl mr-2'>{retriveJsonData.LexicalResourceResult}</p>
                                                </div>
                                            </div>
                                            <div className="relative w-[200px] bg-[rgb(192,192,192)] rounded h-[25px] mb-1 ">
                                                <div className="bg-[rgb(255,175,0)] h-[25px] rounded" style={{ width: Number(retriveJsonData.GrammerResult) / 10 * 100 + "%" }}></div>
                                                <div className="barTexts w-[200px] flex justify-between align-middle absolute top-0 left-0">
                                                    <p className='ml-2 text-black font-bold text-[12px]'>Grammar</p>
                                                    <p className='font-bold text-black text-xl mr-2'>{retriveJsonData.GrammerResult}</p>
                                                </div>
                                            </div>
                                            <div className="relative w-[200px] bg-[rgb(192,192,192)] rounded h-[25px] mb-1 ">
                                                <div className="bg-[rgba(255,179,0,0.80)] h-[25px] rounded" style={{ width: Number(retriveJsonData.ieltswordResult) / 9 * 100 + "%" }}></div>
                                                <div className="barTexts w-[200px] flex justify-between align-middle absolute top-0 left-0">
                                                    <p className='ml-2 text-black font-bold text-[12px]'>Fluency Score</p>
                                                    <p className='font-bold text-black text-xl mr-2'>{Number(retriveJsonData.ieltswordResult).toFixed(1)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='w-full flex justify-end '>
                                    <button
                                        className='w-[70px] translate-x-[-10px] h-[40px] mt-auto border-2 border-gray-300 rounded-[20px] text-black text-[15px] bg-blue-300 hover:bg-white'
                                        onClick={() => {
                                            // stopRecording(); history.push("/SpeakingPage");
                                            setShoeSpeakingResult(false);
                                            localStorage.removeItem("showSpeakingResult")
                                        }}>Close
                                    </button>

                                </div>

                            </section>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
