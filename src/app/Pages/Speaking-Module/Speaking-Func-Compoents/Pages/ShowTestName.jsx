import React from 'react'
import { isMobile } from 'react-device-detect'
import { FaCircleCheck } from "react-icons/fa6";



export default function ShowTestName({testNo}) {
    return (
        <div>
            {
                isMobile ? (<div className="fixed  flex  gap-1 text-center p-1 rounded-[12px] text-gray-50 bg-white 
            bottom-3 right-3 ">
                    <FaCircleCheck className="text-xl text-green-600 translate-y-[1px]" />
                    <p className="text-[12px] text-black font-bold">
                        {
                            testNo.slice(0, -4)
                        }
                    </p>
                    <p className="text-[12px] text-black font-bold">
                        {
                            testNo.slice(-4) == "Sec1" && "Section-1"
                        }
                        {
                            testNo.slice(-4) == "Sec2" && "Section 2"
                        }
                        {
                            testNo.slice(-4) == "Sec3" && "Section 3"
                        }
                    </p>
                </div>) : (
                    <div className="absolute  flex  gap-1 text-center p-1 rounded-[12px] text-gray-50 bg-white 
            sm:top-[120px] sm:left-[10px] ">
                        <FaCircleCheck className="text-xl text-green-600 translate-y-[1px]" />
                        <p className="text-[12px] text-black font-bold">
                            {
                                testNo.slice(0, -4)
                            }
                        </p>
                        <p className="text-[12px] text-black font-bold">
                            {
                                testNo.slice(-4) == "Sec1" && "Section-1"
                            }
                            {
                                testNo.slice(-4) == "Sec2" && "Section 2"
                            }
                            {
                                testNo.slice(-4) == "Sec3" && "Section 3"
                            }
                        </p>
                    </div>
                )
            }
        </div>
    )
}
