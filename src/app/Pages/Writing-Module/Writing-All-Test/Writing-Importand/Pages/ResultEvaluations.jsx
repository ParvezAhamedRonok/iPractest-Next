"use client";
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../../../../Speaking-Module/Speaking-Func-Compoents/Pages/SpeakingResult/AnimatedProgressProvider.js";
import Compare from "./Compare.jsx";
//end of importing.........



export default function ResultEvaluations({ userTextToPassResultEvaluation, lexicalResWords, grammerMistakes, LexicalResourceScore, GrammarScore, storeCoherenceScore }) {
    const [storeSubordinateWords, setStoringsubordinateWords] = useState([]);
    const [storeLinkingWords, setStoringLinkingWords] = useState([]);


    const [show1content, setShow1Content] = useState(false)
    const [show2content, setShow2Content] = useState(false)
    const [show3content, setShow3Content] = useState(false)
    const [show4content, setShow4Content] = useState(false);

    console.log(grammerMistakes);
    console.log(lexicalResWords);

    // Subordinate Conjuctions Array--------
    let SubordianteConjuctionsArr = [
        'after', 'although', 'as', 'as if', 'as long as', 'as much as', 'as soon as', 'as though', 'because', 'before', 'by the time', 'even if', 'even though', 'if', 'in case', 'in order that', 'in the event that', 'lest', 'now that', 'once', 'only', 'only if', 'provided that', 'since', 'so', 'supposing', 'than', 'that', 'though', 'till', 'unless', 'until', 'when', 'whenever', 'where', 'whereas', 'wherever', 'whether or not', 'while',
        'should', 'teenagers', 'have', 'what', 'is', 'the', 'greatest', 'challenge', 'facing', 'teachers', 'today'
    ]

    //Linking Words Array------------
    let LinkingWords = [
        'although', 'apart from', 'but for', 'despite', 'even though', 'as', 'because', 'in so far as', 'since', 'as long as', 'if', 'provided that', 'unless', 'whether', 'in order to', 'so as to', 'so that', 'to', 'also', 'beside', 'in addition', 'moreover', 'as far as i am concern', 'in my opinion', 'to my mind', 'as a consequence', 'as a result', 'eventuallu', 'so', "that's why", 'either ..or', 'neither ..nor', 'or', 'whatever', 'whoever', 'but', 'however', 'on the one hand', 'on the other hand', 'whereas', 'while'
    ]


    useEffect(() => {
        SubordinateLinkingWords();
    }, [])




    //make Subordinate words && linking words by the code below with the help of those linking & subordinates word array combine with the user speech array----------  
    const SubordinateLinkingWords = () => {
        if (userTextToPassResultEvaluation) {
            let words = userTextToPassResultEvaluation.toLowerCase();
            // let wordArray = words.split(' ');
            let result = [];
            SubordianteConjuctionsArr.map((items) => {
                if (words.includes(items.toLowerCase())) {
                    result.push(items)
                }
            })

            // console.log(result);

            let linkingResult = [];
            LinkingWords.map((items) => {
                if (words.includes(items.toLowerCase())) {
                    linkingResult.push(items)
                }
            })

            // console.log(linkingResult);
            setStoringsubordinateWords(result);
            setStoringLinkingWords(linkingResult);


        }



    }





    return (
        <div className='grid justify-center align-middle p-2 sm:p-5'>
            <div className="grid w-full sm:w-[670px] justify-center align-middle p-3 bg-white shadow-lg rounded">
                <div className='flex w-full gap-2 flex-wrap justify-center p-2'>
                    <div className={`bg-[#541bac] w-full sm:w-[300px] grid rounded-[20px] ${show1content ? "h-auto" : "h-[100px]"}`}>
                        <div className='w-full'>
                            <div className='flex justify-between w-full align-middle pl-[10px] pt-[17px] pr-[10px]'>
                                <div className='p-1 flex justify-center align-middle gap-1'>
                                    <div className='p-1 rounded-[50%] bg-white w-[60px] h-[60px]'>

                                        <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={Number(storeCoherenceScore
                                            ) / 10 * 100}
                                            duration={1.5}
                                            easingFunction={easeQuadInOut}
                                        // repeat
                                        >
                                            {value => {
                                                let roundedValue = Math.round(value);
                                                let mainNumber = String(roundedValue).split("").join(".");
                                                // console.log(mainNumber)
                                                return (
                                                    <CircularProgressbar
                                                        value={value}
                                                        text={`${mainNumber}`}
                                                        strokeWidth={12}

                                                        styles={buildStyles({
                                                            pathTransition: "none",
                                                            //  textColor: "red",
                                                            pathColor: "green",

                                                            // trailColor: "gold"
                                                        })}
                                                    />
                                                );
                                            }}
                                        </AnimatedProgressProvider>
                                    </div>
                                    <p className='font-bold text-center m-auto text-[14px] text-white'>
                                        Coherence
                                    </p>

                                </div>
                                <div className=' flex justify-center align-middle'>
                                    <div className='rounded-[50%] m-auto bg-gray-50 w-[20px] h-[20px] '><span className="text-gray-950  font-bold cursor-pointer"
                                        onClick={() => {
                                            setShow1Content(!show1content)
                                            setShow2Content(false)
                                        }}
                                    >
                                        {
                                            show1content ? <IoMdArrowDropup className='text-2xl translate-y-[-2px] translate-x-[-2px]' /> : <IoMdArrowDropdown className='text-2xl translate-x-[-2px]' />
                                        }
                                    </span></div>
                                </div>

                            </div>
                        </div>
                        {
                            show1content && (<div className={`w-full flex justify-center align-middle bg-white text-black border-r-2 border-l-2 border-b-2 border-gray-300 p-2`}>
                                <div className='w-full bg-transparent text-start  text-black '>
                                    <span className='text-xl font-bold'>Subordinate Words</span>
                                    <div className='flex flex-wrap gap-2  w-full justify-start leading-3'>
                                        {
                                            storeSubordinateWords.map((items) => {
                                                return (<p className='text-[15px] text-black'>
                                                    <span className='w-[7px] h-[7px] mr-1 rounded-[50%] bg-black'></span>
                                                    {items}</p>)
                                            })
                                        }
                                    </div>
                                    <span className='text-xl text-start font-bold mt-1'>Linking Words</span>
                                    <div className='flex flex-wrap gap-3 w-full justify-start pt-2'>
                                        {
                                            storeLinkingWords.map((items) => {
                                                return (<p className='text-[15px] text-black'>
                                                    <span className='w-[7px] h-[7px] mr-1 rounded-[50%] bg-black'></span>
                                                    {items}</p>)
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                            )
                        }
                    </div>
                    <div className={`bg-orange-400 w-full sm:w-[300px] grid rounded-[20px] ${show2content ? "h-auto" : "h-[100px]"}`}>
                        <div className='w-full'>
                            <div className='flex justify-between w-full align-middle pl-[10px] pt-[17px] pr-[10px]'>
                                <div className='p-1 flex justify-center align-middle gap-1'>
                                    <div className='p-1 rounded-[50%] bg-white w-[60px] h-[60px]'>
                                        <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={Number(LexicalResourceScore) / 10 * 100}
                                            duration={1.5}
                                            easingFunction={easeQuadInOut}
                                        // repeat
                                        >
                                            {value => {
                                                let roundedValue = Math.round(value);
                                                let mainNumber = String(roundedValue).split("").join(".");
                                                // console.log(mainNumber)
                                                return (
                                                    <CircularProgressbar
                                                        value={value}
                                                        text={`${mainNumber}`}
                                                        strokeWidth={12}

                                                        styles={buildStyles({
                                                            pathTransition: "none",
                                                            //  textColor: "red",
                                                            pathColor: "gold",

                                                            // trailColor: "gold"
                                                        })}
                                                    />
                                                );
                                            }}
                                        </AnimatedProgressProvider>
                                    </div>
                                    <p className='font-bold text-center m-auto text-[14px] text-white'>
                                        Lexical Resource
                                    </p>

                                </div>
                                <div className=' flex justify-center align-middle'>
                                    <div className='rounded-[50%] m-auto bg-gray-50 w-[20px] h-[20px] '><span className="text-gray-950  font-bold cursor-pointer"
                                        onClick={() => {
                                            setShow2Content(!show2content);
                                            setShow1Content(false)
                                        }}
                                    >
                                        {
                                            show2content ? <IoMdArrowDropup className='text-2xl translate-y-[-2px] translate-x-[-2px]' /> : <IoMdArrowDropdown className='text-2xl translate-x-[-2px]' />
                                        }
                                    </span></div>
                                </div>

                            </div>
                        </div>

                        {
                            show2content && (
                                <div className={`w-full flex justify-center align-middle bg-white text-black border-r-2 border-l-2 border-b-2 border-gray-300 p-2`}>

                                    <div className='w-full bg-transparent text-black p-2'>

                                        <div className={`text-black w-full grid ${lexicalResWords[0] ? "justify-start" : "justify-center"}`}>
                                            {lexicalResWords[0] ? (
                                                lexicalResWords.map((items, index) => {
                                                    return (<div key={index} className={`flex w-full justify-start gap-3
                                                                    ${index == 0 && "text-[14px] font-bold mb-2"}
                                                                     ${items.match(/:/gi) && index != 0 && "text-[20px] font-bold mt-1"}
                                                                      text-[14px] `}>
                                                        {
                                                            !items.match(/:/gi) && (
                                                                <div className='w-[25px] translate-y-[4px]'>
                                                                    <div className={`rounded-[50%] bg-gray-700 w-[10px] h-[10px] ${items == "  " && "bg-transparent ml-1 "}`}>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        {
                                                            items
                                                        }
                                                    </div>)
                                                })
                                            ) : (
                                                // loader into lexical words if untill it's not come
                                                <div className='flex w-full h-full justify-center align-middle p-10'>
                                                    <div
                                                        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                                        role="status">
                                                        <span
                                                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
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
                    </div>
                </div>


                <div className='flex w-full gap-2 flex-wrap justify-center p-2'>
                    <div className={`bg-[#3ed9ae] w-full sm:w-[300px] grid rounded-[20px] ${show3content ? "h-auto" : "h-[100px]"}`}>
                        <div className='w-full'>
                            <div className='flex justify-between w-full align-middle pl-[10px] pt-[17px] pr-[10px]'>
                                <div className='p-1 flex justify-center align-middle gap-1'>
                                    <div className='p-1 rounded-[50%] bg-white w-[60px] h-[60px]'>

                                        <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={Number(GrammarScore) / 10 * 100}
                                            duration={1.5}
                                            easingFunction={easeQuadInOut}
                                        // repeat
                                        >
                                            {value => {
                                                let roundedValue = Math.round(value);
                                                let mainNumber = String(roundedValue).split("").join(".");
                                                // console.log(mainNumber)
                                                return (
                                                    <CircularProgressbar
                                                        value={value}
                                                        text={`${mainNumber}`}
                                                        strokeWidth={12}

                                                        styles={buildStyles({
                                                            pathTransition: "none",
                                                            //  textColor: "red",
                                                            pathColor: "green",
                                                            // trailColor: "gold"
                                                        })}
                                                    />
                                                );
                                            }}
                                        </AnimatedProgressProvider>
                                    </div>
                                    <p className='font-bold text-center m-auto text-[12px] text-white'>
                                        Grammatical Accuracy
                                    </p>

                                </div>
                                <div className=' flex justify-center align-middle'>
                                    <div className='rounded-[50%] m-auto bg-gray-50 w-[20px] h-[20px] '><span className="text-gray-950  font-bold cursor-pointer"
                                        onClick={() => {
                                            setShow3Content(!show3content);
                                            setShow4Content(false)

                                        }}
                                    >
                                        {
                                            show3content ? <IoMdArrowDropup className='text-2xl translate-y-[-2px] translate-x-[-2px]' /> : <IoMdArrowDropdown className='text-2xl translate-x-[-2px]' />
                                        }
                                    </span></div>
                                </div>

                            </div>
                        </div>
                        {
                            show3content && (
                                <div className={`w-full flex justify-center align-middle bg-white text-black border-r-2 border-l-2 border-b-2 border-gray-300 p-2`}>

                                    <div className='w-full bg-transparent  text-black p-2'>

                                        <div className={`text-black w-full grid ${grammerMistakes[0] ? "justify-start" : "justify-center"}`}>
                                            {grammerMistakes[0] ? (
                                                grammerMistakes.map((items, index) => {
                                                    return (<div key={index} className={`flex w-full gap-3
                                                                  ${index == 0 && "text-[12px] font-bold mb-2"} 
                                                                  ${index != 0 && items.match(/\d/g) && "text-[17px] font-bold mt-2"} 
                                                                  ${items.slice(0, 13).match(/Overall/gi) && "text-[18px] font-bold mt-2"} 

                                                                  ${items.slice(0, 12).match(/Problem/gi) && "text-[14px] font-bold mt-2 text-red-400"}
                                                                  ${items.slice(0, 12).match(/Solution/gi) && "text-[14px] font-bold mt-2 text-green-400"}
                                                                  ${items.slice(0, 12).match(/Issue/gi) && "text-[14px] font-bold mt-2 text-red-400"}
                                                                  ${items.slice(0, 12).match(/correct/gi) && "text-[14px] font-bold mt-2 text-green-400"}
                                                                  ${items.slice(0, 12).match(/Possible/gi) && "text-[14px] font-bold mt-2 text-green-400"}
                                                                  
                                                                  `}

                                                    >
                                                        {
                                                            items != " " && !items.match(/\d/g) && (
                                                                <div className={`*:
                                                                                ${index == 0 && "hidden"}
                                                                                ${items.match(/:/gi) && "hidden"}
                                                                                `}>
                                                                    <div className={`rounded-[50%] bg-gray-700 translate-y-[4px] w-[10px] h-[10px] ${items == "  " && "bg-transparent ml-2 "}
                                                                                    `}>

                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        {
                                                            items
                                                        }
                                                    </div>)
                                                })
                                            ) : (
                                                <div className='flex w-full h-full justify-center align-middle p-10'>
                                                    <div
                                                        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                                        role="status">
                                                        <span
                                                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
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

                    </div>


                    {/* <div className={`bg-purple-700 w-full sm:w-[300px] grid rounded-[20px] ${show4content ? "h-auto" : "h-[100px]"}`}>
                        <div className='w-full'>
                            <div className='flex justify-between w-full align-middle pl-[10px] pt-[17px] pr-[10px]'>
                                <div className='p-1 flex justify-center align-middle gap-1'>
                                    <div className='p-1 rounded-[50%] bg-white w-[60px] h-[60px]'>

                                        <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={Number(retriveJsonData.PronaunacationsScore) / 10 * 100}
                                            duration={1.5}
                                            easingFunction={easeQuadInOut}
                                        // repeat
                                        >
                                            {value => {
                                                let roundedValue = Math.round(value);
                                                let mainNumber = String(roundedValue).split("").join(".");
                                                // console.log(mainNumber)
                                                return (
                                                    <CircularProgressbar
                                                        value={value}
                                                        text={`${mainNumber}`}
                                                        strokeWidth={12}

                                                        styles={buildStyles({
                                                            pathTransition: "none",
                                                            //  textColor: "red",
                                                            pathColor: "purple",

                                                            // trailColor: "gold"
                                                        })}
                                                    />
                                                );
                                            }}
                                        </AnimatedProgressProvider>
                                    </div>
                                    <p className='font-bold text-center m-auto text-[14px] text-white'>
                                        Pronunciation
                                    </p>

                                </div>
                                <div className=' flex justify-center align-middle'>
                                    <div className='rounded-[50%] m-auto bg-gray-50 w-[20px] h-[20px] '><span className="text-gray-950  font-bold cursor-pointer"
                                        onClick={() => {
                                            setShow4Content(!show4content);
                                            setShow3Content(false);
                                        }}
                                    >
                                        {
                                            show4content ? <IoMdArrowDropup className='text-2xl translate-y-[-2px] translate-x-[-2px]' /> : <IoMdArrowDropdown className='text-2xl translate-x-[-2px]' />
                                        }
                                    </span></div>
                                </div>

                            </div>
                        </div>
                        {
                            show4content && (
                                <div className={`w-full flex justify-center align-middle bg-white text-black border-r-2 border-l-2 border-b-2 border-gray-300 p-2`}>

                                    <div className='w-full bg-transparent  text-black text-center ma-to text-xl'>
                                        {
                                            pronaunicationStatement
                                        }
                                    </div>

                                </div>
                            )
                        }

                    </div> */}
                </div>
            </div>
        </div>
    )
}
