
import React from 'react';


export default function ResultImprovement({ storeTapContentForChangeUI, SpeakingSummary, SpeakingImprovement }) {

    return (
        <div>
            <div className='w-full grid sm:flex gap-2 p-[10px] sm:p-[20px] bg-[#fafafa]'>
                <div className='sm:m-3 p-3 w-full sm:w-[50%] rounded-[15px] bg-white shadow-md'
                    style={{ filter: storeTapContentForChangeUI != "" && 'blur(8px)', pointerEvents: storeTapContentForChangeUI != "" && 'none' }}
                >
                    <strong className='text-[18px] text-black font-bold font-mono'>General Suggessions</strong>
                    {
                        SpeakingSummary == [] ? (
                            <>

                                <div className='flex w-full h-full justify-center align-middle p-10'>
                                    <div
                                        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                        role="status">
                                        <span
                                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                        >Loading...</span
                                        >
                                    </div>
                                </div>
                            </>) : (
                            <>

                                {
                                    SpeakingSummary.map((items, index) => {

                                        return (
                                            <div key={index} className={`
                                                                ${(items == "") && "hidden"}
                                                                ${(items.trim() == ".") && "hidden"}
                                                                    ${items.charAt(3) == "," && "hidden"}
                                                                   ${items.match(/:/gi) && "text-[17px] font-bold"}
                                                                   ${!items.match(/:/gi) && "flex gap-1 justify-start  pb-2 pt-0 pl-[18px] font-bold text-[14px] w-full"}
                                                                   `}>

                                                <div className={`
                                                         ${(items == "") && "hidden"}
                                                             ${(items.trim() == ".") && "hidden"}
                                                           ${(items == " ") && "hidden"}
                                                              ${(items.trim() == "") && "hidden"}
                                                            ${items.match(/:/gi) && "hidden"}
                                                           w-[18px] h-[18px] flex justify-center align-middle text-center `}>
                                                    <span className='p-1 w-[10px] m-auto h-[10px] rounded-[50%] bg-black'>
                                                    </span>
                                                </div>
                                                {
                                                    items
                                                }

                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                </div>

                <div className='sm:m-3 w-full sm:w-[50%] p-3 rounded-[15px] bg-white shadow-md'
                    style={{ filter: storeTapContentForChangeUI != "" && 'blur(8px)', pointerEvents: storeTapContentForChangeUI != "" && 'none' }}
                >
                    <div className='text-[18px] text-black font-bold mt-2 font-mono mb-3'>Section Wise Suggessions</div>
                    {
                        SpeakingImprovement[0] ? (<>
                            {
                                SpeakingImprovement.map((items, index) => {
                                    return (
                                        <div key={index} className={`
                                                            ${index == 0 && "text-[16px] font-bold text-black translate-x-[-20px]"}
                                                            ${items.slice(0, 20).match(/Fluency/g) && "text-[18px] font-bold  mt-2 translate-x-[-20px]"}
                                                            ${items.slice(0, 20).match(/Coherence/g) && "text-[18px] font-bold  mt-2 translate-x-[-20px]"}
                                                            ${items.slice(0, 20).match(/Lexical/g) && "text-[18px] font-bold  mt-2 translate-x-[-20px]"}
                                                            
                                                            ${items.slice(0, 25).match(/Grammatical Range/g) && "text-[18px] font-bold  mt-2 translate-x-[-20px]"}

                                                            ${items.slice(0, 20).match(/Overall/g) && "text-[18px] font-bold  mt-2 translate-x-[-20px]"}
                                                      "}
                                                      pt-1 pl-4 text-[14px] font-bold flex gap-4 justify-start   " `}>

                                            {/* make Bullects into every points */}
                                            <div className={`
                                                                   ${items.trim() == "" && "hidden"}
                                                                   ${index == 0 && "hidden"}
                                                                   ${items.slice(0, 20).match(/Fluency/g) && "hidden"}
                                                                   ${items.slice(0, 20).match(/Coherence/g) && "hidden"}
                                                                   ${items.slice(0, 20).match(/Lexical/g) && "hidden"}
                                                                   
                                                                   ${items.slice(0, 25).match(/Grammatical Range/g) && "hidden"}
       
                                                                   ${items.slice(0, 20).match(/Overall/g) && "hidden"}

                                                                           w-[18px] h-[18px] flex justify-center align-middle text-center `}>
                                                <span className='p-1 w-[10px] m-auto h-[10px] rounded-[50%] bg-black'>
                                                </span>
                                            </div>
                                            {
                                                items
                                            }

                                        </div>
                                    )
                                })
                            }
                        </>) : (
                            <div className='flex w-full h-full justify-center align-middle p-10'>
                                <div
                                    className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span
                                    >
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
