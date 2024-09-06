"use client"
import React, { useEffect } from 'react'
import { useStateContext } from "../../../../../contexts/ContextProvider";
import { isMobile } from "react-device-detect"

export default function AnswerSelectCom({ StepNumbers, showStepOk }) {
    const { showSpeakingResult, setShoeSpeakingResult, speakingStepsNo, setSpeakingStepNo } = useStateContext();

    var numbers = [];
    for (let a = 0; a < speakingStepsNo; a++) {
        numbers.push(a)
    }
    let firsLineSteps = numbers.slice(0, 5)
    let secondLineSteps = numbers.slice(5, 9)
    let thirdLineSteps = numbers.slice(9, 13)
    let fourtLineSteps = numbers.slice(13)
 

    return (
        <div className="w-full grid  justify-center gap-0 mt-1  h-auto  box-border " >
            <div className=" w-[90vw] grid sm:w-[700px]  p-2 h-auto overflow-auto box-border rounded-[16px] justify-center align-middle sm:translate-x-[17px]">

                <div className={`grid sm:flex justify-center align-middle`}>
                    <div className="flex justify-center align-middle">
                        {
                            firsLineSteps.map((items, i, { length }) => {
                                let matchItem = showSpeakingResult.filter(x => parseInt(x) == items);
                                let findNumber = matchItem[0] && parseInt(matchItem[0]);
                                let findColor = matchItem[0] && matchItem[0].replace(/\d+/g, '')
                                // i + 1 === length && matchItem[0] && callForStoreFunc()
                                return <div className='flex justify-start align-middle'>
                                    <p className={`text-center w-[53px] pt-[2px] h-[30px] text-[14px] font-bold rounded-[50%]  ${matchItem[0] && findColor == "green" ? "bg-green-200 border-[3px] border-green-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "red" ? "bg-red-200 border-[3px] border-red-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "yellow" ? "bg-yellow-200 border-[3px] border-yellow-500 text-gray-700 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                            `}
                                    // style={{ backgroundColor: matchItem[0] ? findColor : "white", color: matchItem[0] ? "white" : "black" }}
                                    >{items}</p>
                                    <div className={`${i + 1 === length && isMobile && "bg-transparent"} w-full m-auto h-[2px] bg-blue-800`}></div>
                                </div>
                            })
                        }
                    </div>
                    <div className="flex justify-center align-middle">
                        {
                            secondLineSteps[0] && secondLineSteps.map((items, i, { length }) => {
                                let matchItem = showSpeakingResult.filter(x => parseInt(x) == items);
                                let findNumber = matchItem[0] && parseInt(matchItem[0]);
                                let findColor = matchItem[0] && matchItem[0].replace(/\d+/g, '')
                                // i + 1 === length && matchItem[0] && callForStoreFunc()
                                return <div className='flex justify-start align-middle'>
                                    <p className={`text-center w-[53px] pt-[2px] h-[30px] text-[14px] font-bold rounded-[50%]  ${matchItem[0] && findColor == "green" ? "bg-green-200 border-[3px] border-green-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "red" ? "bg-red-200 border-[3px] border-red-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "yellow" ? "bg-yellow-200 border-[3px] border-yellow-500 text-gray-700 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                            `}
                                    // style={{ backgroundColor: matchItem[0] ? findColor : "white", color: matchItem[0] ? "white" : "black" }}
                                    >{items}</p>
                                    <div className={`${i + 1 === length && "bg-transparent"} w-full m-auto h-[2px] bg-blue-800`}></div>
                                </div>
                            })
                        }
                    </div>
                </div>

                {/* from 9-15 if thery are exist into that array */}

                <div className={`grid sm:flex justify-center align-middle mt-1`}>
                    <div className="flex justify-center align-middle">
                        {
                            thirdLineSteps[0] && thirdLineSteps.map((items, i, { length }) => {
                                let matchItem = showSpeakingResult.filter(x => parseInt(x) == items);
                                let findNumber = matchItem[0] && parseInt(matchItem[0]);
                                let findColor = matchItem[0] && matchItem[0].replace(/\d+/g, '')
                                // i + 1 === length && matchItem[0] && callForStoreFunc()
                                return <div className='flex justify-start align-middle'>
                                    <p className={`text-center w-[53px] pt-[2px] h-[30px] text-[14px] font-bold rounded-[50%]  ${matchItem[0] && findColor == "green" ? "bg-green-200 border-[3px] border-green-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "red" ? "bg-red-200 border-[3px] border-red-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "yellow" ? "bg-yellow-200 border-[3px] border-yellow-500 text-gray-700 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                            `}
                                    // style={{ backgroundColor: matchItem[0] ? findColor : "white", color: matchItem[0] ? "white" : "black" }}
                                    >{items}</p>
                                    <div className={`${i + 1 === length && !fourtLineSteps[0] && "bg-transparent"} w-full m-auto h-[2px] bg-blue-800`}></div>
                                </div>
                            })
                        }
                    </div>
                    <div className="flex justify-center align-middle">
                        {
                            fourtLineSteps[0] && fourtLineSteps.map((items, i, { length }) => {
                                let matchItem = showSpeakingResult.filter(x => parseInt(x) == items);
                                let findNumber = matchItem[0] && parseInt(matchItem[0]);
                                let findColor = matchItem[0] && matchItem[0].replace(/\d+/g, '')
                                // i + 1 === length && matchItem[0] && callForStoreFunc()
                                return <div className='flex justify-start align-middle'>
                                    <p className={`text-center w-[53px] pt-[2px] h-[30px] text-[14px] font-bold rounded-[50%]  ${matchItem[0] && findColor == "green" ? "bg-green-200 border-[3px] border-green-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "red" ? "bg-red-200 border-[3px] border-red-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "yellow" ? "bg-yellow-200 border-[3px] border-yellow-500 text-gray-700 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                            `}
                                    // style={{ backgroundColor: matchItem[0] ? findColor : "white", color: matchItem[0] ? "white" : "black" }}
                                    >{items}</p>
                                    <div className={`${i + 1 === length && "bg-transparent"} w-full m-auto h-[2px] bg-blue-800`}></div>
                                </div>
                            })
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}
