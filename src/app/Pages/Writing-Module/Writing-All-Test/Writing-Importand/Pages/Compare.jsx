
import React from 'react'
import Diff from "./Diff";
import Diff2 from "./Diff2";



function Compare({ itemsSet, imageText, writingData, correctData }) {


    return (
        <div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 box-border">
                <div className=" box-border bg-white  p-[8px] sm:p-[12px] rounded overflow-y-scroll h-[30vh] sm:h-[71vh] border-b-4 ">
                    <i className="text-2xl font-bold m-3 not-italic translate-x-[-5px] translate-y-[-12px] border-b-[3px] border-b-[#e7a03c]">Your Answer</i>{" "}
                    <br />
                    <div className="p-3 bg-[#f9f9f9] shadow-md translate-y-[-12px]">
                        <Diff
                            string1={itemsSet == "uploaded-text" && imageText || itemsSet == "writing-text" && writingData}
                            string2={correctData}
                            mode="words"
                        />
                    </div>
                </div>
                <div className="box-border bg-white   p-[8px] sm:p-[12px] rounded overflow-y-scroll h-[40vh] sm:h-[71vh]">
                    <i className="text-2xl translate-y-[-12px] m-3 not-italic translate-x-[-5px] font-bold border-b-[3px] border-b-[#e7a03c]">
                        Corrected Answer
                    </i> <br />
                    <div className="bg-[#e6f2fc] p-3 shadow-md translate-y-[-12px]">
                        <Diff2
                            string1={itemsSet === "uploaded-text" && imageText || itemsSet === "writing-text" && writingData}
                            string2={correctData}
                            mode="words"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compare