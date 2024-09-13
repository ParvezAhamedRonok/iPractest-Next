"use client";
import React, { useEffect, useState } from 'react';
import { BsExclamationCircle } from "react-icons/bs";
import { Flex, Progress } from 'antd';



export default function DueProggressBar() {
    const [postIeltsRate, setpostIeltsRate] = useState("35");
    const [LexicalResourceScore, setLexicalResourceScore] = useState("40");
    const [GrammarScore, setGeammarScore] = useState("90");
    const [changeIELTSColor, setChangeIELTSColor] = useState("");
    const [changeLexicalColor, setChangeLexicalColor] = useState("");
    const [changeGrammarColor, setChangeGrammarColor] = useState("");

    useEffect(() => {
        thisMainFunction();
    }, [])



    // this function will be called when sendTothbackend function called & result popup will be called / or when this 
    // component will be called..
    const thisMainFunction = () => {
       setTimeout(() => {
        if (Number(postIeltsRate) < 60) { setChangeIELTSColor("red") }
        else if (Number(postIeltsRate) >= 60 && Number(postIeltsRate) <= 80) { setChangeIELTSColor("yellow") }
        else if (Number(postIeltsRate) >= 80) { setChangeIELTSColor("green") }

       }, 800);
        setTimeout(() => {
            if (Number(LexicalResourceScore) < 60) { setChangeLexicalColor("red") }
            else if (Number(LexicalResourceScore) >= 60 && Number(LexicalResourceScore) <= 80) { setChangeLexicalColor("yellow") }
            else if (Number(LexicalResourceScore) >= 80) { setChangeLexicalColor("green") }
        }, 700);

        setTimeout(() => {
            if (Number(GrammarScore) < 60) { setChangeGrammarColor("red") }
            else if (Number(GrammarScore) >= 60 && Number(GrammarScore) <= 80) { setChangeGrammarColor("yellow") }
            else if (Number(GrammarScore) >= 80) { setChangeGrammarColor("green") }
        }, 700);
    }


    return (
        <div>
            <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                <section className=' flex gap-1 w-[100vw] sm:w-[730px] p-4 h-[350px]  bg-white shadow-2xl border-2 border-gray-400 z-[100000] '>

                    <div className=" p-2 w-full ">
                        <div className="mb-2 p-2">
                            <p className="text-[22px] font-bold ml-3  flex gap-1  mt-1">Pronunciation Scores <BsExclamationCircle className="ml-1 text-2xl" /></p> <br />
                            <div className="translate-x-[60px]">
                                <Flex gap="small" wrap="wrap">
                                    <Progress type="circle" strokeLinecap="butt" strokeWidth={13} percent={postIeltsRate} format={(percent) => `${postIeltsRate}`} size={120} strokeColor={changeIELTSColor} trailColor="rgb(192,192,192)" />
                                </Flex>
                            </div>
                            <div className="mt-auto flex gap-3 translate-y-[76px] translate-x-[-14px]">
                                <div className="flex gap-">
                                    <div className="w-[25px] h-[23px] bg-red-600"></div>
                                    <p>0 ~ 59</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-[25px] h-[23px] bg-yellow-600"></div>
                                    <p>60 ~ 79</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-[25px] h-[23px] bg-green-600"></div>
                                    <p>80 ~ 100</p>
                                </div>

                            </div>

                        </div>


                    </div>
                    <div className=" w-full">
                        <h4 className="mb-4 mt-4">Scores Breakdown</h4>
                        <div className='h-auto mb-3'>
                            <div className=" w-[90%] mb-1 text-base flex justify-between  font-medium dark:text-white">
                                <p className='font-bold text-black flex gap-1'>Prosody Score <BsExclamationCircle className="ml-1 text-xl" /></p>
                                <p className='font-bold'>95 / 100</p>
                            </div>
                            <div className="w-[92%] bg-gray-200  h-4 mb-1 dark:bg-gray-700">
                                <div className={` h-4  border-1 border-gray-100 dark:bg-gray-300`} style={{ width: Number(LexicalResourceScore) + "%", background:changeLexicalColor }}></div>
                            </div>
                        </div>
                        <div className='h-auto mb-3'>
                            <div className=" w-[90%] mb-1 text-base flex justify-between  font-medium dark:text-white">
                                <p className='font-bold text-black flex gap-1'>Fluency Score <BsExclamationCircle className="ml-1 text-xl" /></p>
                                <p className='font-bold'>95 / 100</p>
                            </div>
                            <div className="w-[92%] bg-gray-200  h-4 mb-1 dark:bg-gray-700">
                                <div className={` h-4  border-1 border-gray-100 dark:bg-gray-300`} style={{ width: Number(LexicalResourceScore) + "%", background:changeLexicalColor }}></div>
                            </div>
                        </div>
                        <div className='h-auto '>
                            <div className=" w-[90%] mb-1 text-base flex justify-between  font-medium dark:text-white">
                                <p className='font-bold text-black flex gap-1'>Prosody Score <BsExclamationCircle className="ml-1 text-xl" /></p>
                                <p className='font-bold'>95 / 100</p>
                            </div>
                            <div className="w-[92%] bg-gray-200  h-4 mb-1 dark:bg-gray-700">
                                <div className={` h-4  border-1 border-gray-100 dark:bg-gray-300`} style={{ width: Number(GrammarScore) + "%", background:changeGrammarColor }}></div>
                            </div>
                        </div>
                        
                    </div>


                </section>
            </div>
        </div>
    )
}
