"use client";
import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import Image from 'next/image';
import img1 from "../../../../../../../../assets/images/listening-images/Actual-test4-image1.jpg";
import img2 from "../../../../../../../../assets/images/listening-images/Actual-test4-image2.jpg";
import img3 from "../../../../../../../../assets/images/listening-images/Actual-test4-image3.jpg";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";



function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
    // let testItems = localStorage.getItem("ShowAnsByTest");
    const { ListeningShowAnswer, setListeningShowAnswer } = useStateContext();
    // for show and hide all notePad----   
    const [forNotePad1, setForNotePad1] = useState(false);
    const [forNotePad2, setForNotePad2] = useState(false);
    const [forNotePad3, setForNotePad3] = useState(false);
    const [forNotePad4, setForNotePad4] = useState(false);


    // function for handle audio by all audio-buttons make them realif--------->
    function updateAudiotime(changePath) {
        const player = document.getElementsByTagName("audio")[0];
        player.pause();
        player.setAttribute('src', changePath);
        player.load();
        player.play();
    }


    // rewind-buttons------------
    const incressRewind = () => {
        const player = document.getElementsByTagName("audio")[0];
        player.currentTime = player.currentTime + 10
        console.log(player)
    }
    const decressRewind = () => {
        const player = document.getElementsByTagName("audio")[0];
        player.currentTime = player.currentTime - 10
        console.log(player)
    }








    //  submitted answers for showing at submit popup---------->>             
    let LAllAnswersData = [
        ["10.25 am", "/", "Ten tweenty five am"],
        ["Box Hill", "/", "box hill"],
        ["30 to 39", "/", "Thirty to thirty nine", "/", "thirty to thirty nine"],
        ["domestic duties", "/", "Domestic duties"],
        ["married", "/", "Married"],
        ["walking", "/", "Walking"],
        ["tighten", "/", "Tighten"],
        ["hike", "/", "Hike"],
        ["swimming", "/", "Swimming"],
        ["energy", "/", "Energy"],
        ["A"], ["E"], ["D"], ["F"], ["C"], ["B"], ["E"], ["C"], ["I"], ["F"],
        ["symbols", "/", "Symbols"],
        ["interpreted", "/", "Interpreted"],
        ["nature", "/", "Nature"],
        ["headings", "/", "Headings"],
        ["Legal", "/", "Legal"],
        ["procedures", "/", "Procedures"],
        ["associated", "/", "Associated"],
        ["directions", "/", "Directions"],
        ["notes", "/", "Notes"],
        ["headings", "/", "Headings"],
        ["billion", "/", "Billion"],
        ["clean room", "/", "Clean room"],
        ["radiation", "/", "Radiation"],
        ["underground", "/", "Underground"],
        ["complex", "/", "Complex"],
        ["heavy water", "/", "Heavy water"],
        ["electronic", "/", "Electronic"],
        ["1000 tons", "/", "One thousand tons", "/", "one thousand tons"],
        ["electic current", "/", "Electic currect"],
        ["40 control", "/", "fourty control", "/", "Fourty control"]
    ]

    AllAnswersData(LAllAnswersData)











    // main work----------->
    return (
        <section className='ContainerListener '>
            {/* AudioPlayer component add  */}
            <div className="AudioPlayerClass">
                <div className='w-screen sm:w-[550px] text-white'>
                    <AudioPlayer
                        // className='w-screen sm:w-[550px] rounded bg-[#d4dae0] text-white'
                        src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section1.mp3?_=1" />
                    <div className="rewinds w-full mt-[-50px] text-white flex justify-center align-middle gap-[50px]">
                        <div className='text-3xl border-[1px] rounded-full bg-gray-400 text-white z-[33] cursor-pointer'
                            onClick={decressRewind}
                        ><BsFillRewindCircleFill /></div>
                        <div className='text-3xl border-[1px] rounded-full bg-gray-400 text-white z-[33] cursor-pointer'
                            onClick={incressRewind}
                        ><BsFillFastForwardCircleFill /></div>
                    </div>
                </div>
            </div>

            <div className="forAllDivs section-1 bg-sky-100 rounded mb-1">
                <>
                    <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 04</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section1.mp3?_=1") }}
                                    className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                            </div>
                            <div className="flex mt-[27px]">
                                <button onClick={() => { setForNotePad1(!forNotePad1) }}
                                    className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                            </div>
                        </div>
                    </div>
                </>

                {/* 1-10 Questions */}
                <div className="Questions">
                    <div className="Q-articles">
                        <h5>PART 1 </h5> <br />
                        Questions 1 – 5 <br />
                        Complete the form. <br />
                        Write NO MORE THAN THREE WORDS OR NUMBERS for each answer. <br /> <br />
                        <h5 className='text-center mt-2 text-inherit'>Survey Form</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Dealing with: exercise (Example) <br /></h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> <span className='font-bold'>Time contacted:</span></label>
                            <span className='Numbers'>1</span>
                            <input type="text" name='ques1' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques1.match(/ 10.25 am/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques1 != "" && UserData.ques1 == "10.25 am" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques1 != "" && !UserData.ques1.match(/ 10.25 am/gi) ? "( 10.25 am)" : ""}
                            </i>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'>Suburb:</label>
                            <span className='Numbers'>2</span>
                            <input type="text" name='ques2' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques2.match(/ Box Hill/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques2 != "" && UserData.ques2 == "Box Hill" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques2 != "" && !UserData.ques2.match(/ Box Hill/gi) ? "(Box Hill)" : ""}
                            </i>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'>Age Group: </label>
                            <span className='Numbers'>3</span>
                            <input type="text" name='ques3' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques3.match(/ 30 to 39/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques3 != "" && UserData.ques3 == "30 to 39" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques3 != "" && !UserData.ques3.match(/ 30 to 39/gi) ? "(30 to 39)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'> Occupation: </label>
                            <span className='Numbers'>4</span>
                            <input type="text" name='ques4' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques4.match(/ domestic duties/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques4 != "" && UserData.ques4 == "domestic duties" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques4 != "" && !UserData.ques4.match(/ domestic duties/gi) ? "(domestic duties)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'>Family:</label>
                            <span className='Numbers'>5</span>
                            <input type="text" name='ques5' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques5.match(/ married/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques5 != "" && UserData.ques5 == "married" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques5 != "" && !UserData.ques5.match(/ married/gi) ? "(married)" : ""}
                            </i>
                        </div>
                        <div className="Q-articles mt-5 mb-2">
                            <h5>Questions 6 – 10</h5> <br />
                            Complete the summary.<br /> <br />
                            <i className='font-bold'>Write ONE WORD ONLY for each answer.</i> <br />
                        </div>
                        <div className="Questions">
                            <div className='flex gap-1 flex-wrap mb-2'>
                                <label htmlFor="ques23">The subject undertakes exercise by regularly</label>
                                <span className='Numbers'>6</span>
                                <input type="text" name="ques6" id="ques6" onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques6.match(/ walking/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques6 != "" && UserData.ques6 == "walking" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques6 != "" && !UserData.ques6.match(/ walking/gi) ? "( walking)" : ""}
                                </i>
                                <p>She does yoga in order to relax and</p>
                                <span className='Numbers'>7</span>
                                <input type="text" name="ques7" id="ques7" onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques7.match(/ tighten/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques7 != "" && UserData.ques7 == "tighten" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques7 != "" && !UserData.ques7.match(/ tighten/gi) ? "( tighten)" : ""}
                                </i>
                                <p> her muscles. When she was younger, she would</p>
                                <span className='Numbers'>8</span>
                                <input type="text" name="ques8" id="ques8" onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques8.match(/ hike/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques8 != "" && UserData.ques8 == "hike" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques8 != "" && !UserData.ques8.match(/ hike/gi) ? "(hike)" : ""}
                                </i>
                                <p> and in the future, she may go</p>
                                <span className='Numbers'>9</span>
                                <input type="text" name="ques9" id="ques9" onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques9.match(/ swimming/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques9 != "" && UserData.ques9 == "swimming" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques9 != "" && !UserData.ques9.match(/ swimming/gi) ? "( swimming)" : ""}
                                </i>
                                <p> although that will depend on whether she has enough</p>
                                <span className='Numbers'>10</span>
                                <input type="text" name="ques10" id="ques10" onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques10.match(/ energy/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques10 != "" && UserData.ques10 == "energy" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques10 != "" && !UserData.ques10.match(/ energy/gi) ? "( energy)" : ""}
                                </i>
                            </div>
                        </div>


                    </div>
                </div>










            </div>

            {/* section-2 */}

            <div className="forAllDivs section-1 bg-sky-100 rounded mt-4">
                <>
                    <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-2</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad2 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section2.mp3?_=2") }}
                                    className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                            </div>
                            <div className="flex mt-[27px]">
                                <button onClick={() => { setForNotePad2(!forNotePad2) }}
                                    className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                            </div>
                        </div>
                    </div>
                </>

                {/* 11-20 Questions */}
                <div className="Questions">
                    <div className="Q-articles p-3">
                        <h5>PART 2 </h5> <br />
                        Questions 11 – 16<br /><br />
                        Label the floor plan.<br /> <br />
                        Choose the correct letter, A-F, for each answer. <br /> <br />
                        <h6>ILC Special Sessions Timetable</h6> <br />

                        <Image src={img1} alt="test-4 image-1" /> <br />

                    </div>
                    <div className="Questions">
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>11</span>
                            <label htmlFor="ques11"> Quiet reading</label>
                            <select name="ques11" id="ques11" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques11 != "A" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques11 != "" && UserData.ques11 == "A" && "text-green-700"}
                                 `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques11 != "" && UserData.ques11 != "A" ? "(A)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>12</span>
                            <label htmlFor="ques12"> Computers</label>
                            <select name="ques12" id="ques12" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques12 != "E" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques12 != "" && UserData.ques12 == "E" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques12 != "" && UserData.ques12 != "E" ? "(E)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>13</span>
                            <label htmlFor="ques13">Newspapers & magazines</label>
                            <select name="ques13" id="ques13" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques13 != "D" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques13 != "" && UserData.ques13 == "D" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques13 != "" && UserData.ques13 != "D" ? "(D)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>14</span>
                            <label htmlFor="ques14">Reference books</label>
                            <select name="ques14" id="ques14" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques14 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques14 != "" && UserData.ques14 == "F" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques14 != "" && UserData.ques14 != "F" ? "(F)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>15</span>
                            <label htmlFor="ques15">Audio section</label>
                            <select name="ques15" id="ques15" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques15 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques15 != "" && UserData.ques15 == "C" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques15 != "" && UserData.ques15 != "C" ? "(C)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>16</span>
                            <label htmlFor="ques16"> Main library</label>
                            <select name="ques16" id="ques16" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques16 != "B" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques16 != "" && UserData.ques16 == "B" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques16 != "" && UserData.ques16 != "B" ? "(B)" : ""}</i>
                        </div>

                    </div>
                    <div className="Q-articles">
                        <h5>Questions 17 – 20 </h5> <br />
                        Complete the timetable.<br /><br />
                        Choose  the correct letter, A-J, for each answer. <br /> <br />
                        <Image src={img2} alt="test-4 image-2" /> <br />
                    </div>
                    <div className="Questions">
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>17</span>
                            <label htmlFor="ques17"> Teacher-led discussion</label>
                            <select name="ques17" id="ques17" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques17 != "E" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques17 != "" && UserData.ques17 == "E" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                                <option value="H">H</option>
                                <option value="I">I</option>
                                <option value="J">J</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques17 != "" && UserData.ques17 != "E" ? "(E)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>18</span>
                            <label htmlFor="ques18"> Writing skills</label>
                            <select name="ques18" id="ques18" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques18 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques18 != "" && UserData.ques18 == "C" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                                <option value="H">H</option>
                                <option value="I">I</option>
                                <option value="J">J</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques18 != "" && UserData.ques18 != "C" ? "(C)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>19</span>
                            <label htmlFor="ques19">On-call teacher</label>
                            <select name="ques19" id="ques19" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques19 != "I" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques19 != "" && UserData.ques19 == "I" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                                <option value="H">H</option>
                                <option value="I">I</option>
                                <option value="J">J</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques19 != "" && UserData.ques19 != "I" ? "(I)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>20</span>
                            <label htmlFor="ques20"> Language exchange</label>
                            <select name="ques20" id="ques20" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques20 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques20 != "" && UserData.ques20 == "F" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                                <option value="H">H</option>
                                <option value="I">I</option>
                                <option value="J">J</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques20 != "" && UserData.ques20 != "F" ? "(F)" : ""}</i>
                        </div>

                    </div>

                </div>
            </div>

            {/* section-3*/}

            <div className="forAllDivs section-1 bg-sky-100 rounded mt-4">
                <>
                    <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-3</h5>
                    </div>
                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad3 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section3.mp3?_=3") }}
                                    className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                            </div>
                            <div className="flex mt-[27px]">
                                <button onClick={() => { setForNotePad3(!forNotePad3) }}
                                    className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                            </div>
                        </div>
                    </div>
                </>

                {/* 20-30 Questions */}
                <div className="Questions">
                    <div className="Q-articles">
                        <h5>PART 3 </h5> <br />
                        Questions 21 – 24<br />
                        Complete the summary.<br /> <br />
                        Write ONE WORD ONLY for each answer. <br />
                        <br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <label htmlFor="ques21">One of the basic strategies when listening to lectures is to use
                                <span className='Numbers'>21</span>
                                <input type="text" name="ques21" id="ques21" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques21.match(/symbols/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques21 != "" && UserData.ques21 == "symbols" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques21 != "" && !UserData.ques21.match(/symbols/gi) ? "(symbols)" : ""}
                                </i>


                                This saves times, but it is only effective if they can be
                                <span className='Numbers'>22</span>
                                <input type="text" name="ques22" id="que22" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques22.match(/interpreted/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques22 != "" && UserData.ques22 == "interpreted" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques22 != "" && !UserData.ques22.match(/interpreted/gi) ? "(interpreted)" : ""}
                                </i>


                                later. More generally, it is necessary to format the page in anticipation of the
                                <span className='Numbers'>23</span>
                                <input type="text" name="ques23" id="ques23" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques23.match(/nature/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques23 != "" && UserData.ques23 == "nature" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques23 != "" && !UserData.ques23.match(/nature/gi) ? "(nature)" : ""}
                                </i>


                                of the lecture. As an example, one can draw
                                <span className='Numbers'>24</span>
                                <input type="text" name="ques24" id="ques24" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques24.match(/headings/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques24 != "" && UserData.ques24 == "headings" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques24 != "" && !UserData.ques24.match(/headings/gi) ? "(headings)" : ""}
                                </i>
                                tables, and flowcharts, consistent with the way the subject matter is presented.</label>
                        </div>
                    </div>
                    <div className="Q-articles">
                        <h5>Questions 25 – 30 </h5> <br />
                        Complete the table.<br />
                        Write ONE WORD ONLY for each answer.<br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Subject</h5>
                            <h5>Recommended Page Design</h5>
                        </div>

                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <label>
                                <span className='Numbers'>25</span>
                                <input type="text" name='ques25' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques25.match(/Legal/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques25 != "" && UserData.ques25 == "Legal" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques25 != "" && !UserData.ques25.match(/Legal/gi) ? "(Legal)" : ""}
                                </i>
                                Studies. <br />
                                flowchart, showing courtroom processes and
                                <span className='Numbers'>26</span>
                                <input type="text" name='ques26' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques26.match(/procedures/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques26 != "" && UserData.ques26 == "procedures" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques26 != "" && !UserData.ques26.match(/procedures/gi) ? "(procedures)" : ""}
                                </i>
                            </label>
                        </div>

                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5 className='m-auto'>Culture Studies</h5>
                            <div className="question mt-2 flex flex-wrap gap-1 ml-2">
                                <label htmlFor="ques27">table or spider graph, linking</label>
                                <span className='Numbers'>27</span>
                                <input type="text" name='ques27' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques27.match(/associated/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques27 != "" && UserData.ques27 == "associated" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques27 != "" && !UserData.ques27.match(/associated/gi) ? "(associated)" : ""}
                                </i>
                                <p> thoughts etc.</p>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5 className='m-auto'>Management Theory</h5>
                            <div className="question ml-3 mt-2 flex flex-wrap gap-1">
                                <label htmlFor="ques28">network (like spider graph but has</label>
                                <span className='Numbers'>28</span>
                                <input type="text" name='ques28' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques28.match(/directions/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques28 != "" && UserData.ques28 == "directions" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques28 != "" && !UserData.ques28.match(/directions/gi) ? "(directions)" : ""}
                                </i>
                                <p>.)</p>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5 className='ml-2'>Political Science</h5>
                            <div className="question flex flex-wrap gap-1 ml-1">
                                <label htmlFor="ques29">linear</label>
                                <span className='Numbers'>29</span>
                                <input type="text" name='ques29' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques29.match(/notes/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques29 != "" && UserData.ques29 == "notes" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques29 != "" && !UserData.ques29.match(/notes/gi) ? "(notes)" : ""}
                                </i>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h6 className='ml-3'>Mass Media</h6>
                            <div className="question flex flex-wrap gap-1 ml-1">
                                <label htmlFor="que30">just use </label>
                                <span className='Numbers'>30</span>
                                <input type="text" name='ques30' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques30.match(/headings/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques30 != "" && UserData.ques30 == "headings" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques30 != "" && !UserData.ques30.match(/headings/gi) ? "(headings)" : ""}
                                </i>
                            </div>
                        </div>

                    </div>
                </div>

            </div>





            {/* section-4*/}

            <div className="forAllDivs section-1 bg-sky-100 pb-[30px] rounded mt-4">
                <>
                    <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-4</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad4 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section4.mp3?_=4") }}
                                    className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                            </div>
                            <div className="flex mt-[27px]">
                                <button onClick={() => { setForNotePad4(!forNotePad4) }}
                                    className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                            </div>
                        </div>
                    </div>
                </>

                {/* 1-10 Questions */}
                <div className="Questions">
                    <div className="Q-articles">
                        <h5>PART 4 </h5> <br />
                        Questions 31-35 <br />
                        Complete the notes. <br />
                        Write NO MORE THAN TWO WORDS for each answer. <br />
                        <h5 className='text-center mt-2 mb-2 text-inherit'>Neutrinos</h5> <br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h6 className='m-auto'>are everywhere</h6>
                            <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                <label htmlFor="ques31">100 to 200  ___<span className='Numbers'>31</span>
                                    <input type="text" name='ques31' onChange={handleValueChange}
                                        className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques31.match(/billion/gi) && "text-red-600"}
                                        ${ListeningShowAnswer == "Actual-test-4" && UserData.ques31 != "" && UserData.ques31 == "billion" && "text-green-700"}
                                        `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-4" && UserData.ques31 != "" && !UserData.ques31.match(/billion/gi) ? "(billion)" : ""}
                                    </i>
                                    pass through our bodies every second.</label>
                            </div>
                        </div>
                        <div className='w-full p-3 flex flex-wrap gap-3 justify-between border-1 border-gray-400'>
                            <h5 className=''>are difficult to detect because of</h5>
                            <h5>1. the presence of other particles</h5>
                            <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                <label htmlFor="ques32">usually need a <span className='Numbers'>32</span>
                                    <input type="text" name='ques32' onChange={handleValueChange}
                                        className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques12.match(/clean room/gi) && "text-red-600"}
                                        ${ListeningShowAnswer == "Actual-test-4" && UserData.ques12 != "" && UserData.ques12 == "clean room" && "text-green-700"}
                                         `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-4" && UserData.ques12 != "" && !UserData.ques12.match(/clean room/gi) ? "(clean room)" : ""}
                                    </i>
                                </label>
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-1">
                                <label htmlFor="ques33">2. the surrounding<span className='Numbers'>33</span>
                                    <input type="text" name='ques33' onChange={handleValueChange}
                                        className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques33.match(/radiation/gi) && "text-red-600"}
                                        ${ListeningShowAnswer == "Actual-test-4" && UserData.ques33 != "" && UserData.ques33 == "radiation" && "text-green-700"}
                                        `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-4" && UserData.ques33 != "" && !UserData.ques33.match(/radiation/gi) ? "(radiation)" : ""}
                                    </i>
                                </label>

                            </div>

                            <div className="question flex flex-wrap gap-1">
                                <label htmlFor="ques34">detection location usually<span className='Numbers'>34</span>
                                    <input type="text" name='ques34' onChange={handleValueChange}
                                        className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques34.match(/underground/gi) && "text-red-600"}
                                        ${ListeningShowAnswer == "Actual-test-4" && UserData.ques34 != "" && UserData.ques34 == "underground" && "text-green-700"}
                                        `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-4" && UserData.ques34 != "" && !UserData.ques34.match(/underground/gi) ? "(underground)" : ""}
                                    </i>
                                </label>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h6 className='m-auto'>3. challenge of installing equipment</h6>
                            <div className="question flex flex-wrap gap-2">
                                <label htmlFor="ques35">engineering is very </label>
                                <span className='Numbers'>35</span>
                                <input type="text" name='ques35' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques35.match(/complex/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-4" && UserData.ques35 != "" && UserData.ques35 == "complex" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-4" && UserData.ques35 != "" && !UserData.ques35.match(/complex/gi) ? "(complex)" : ""}
                                </i>
                            </div>
                        </div>

                    </div> <br /> <br />
                    <div className="Q-articles mb-3">
                        <h5>Questions 36-40</h5> <br />
                        Complete the diagram.<br />
                        Write NO MORE THAN TWO WORDS AND/OR NUMBERS for each answer. <br /> <br />
                        <Image src={img3} alt="test-4 image-3" />
                    </div>
                    <div className="Question">
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>36</span>
                            <input type="text" name="ques36" id="ques36" onChange={handleValueChange}
                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques36.match(/heavy water/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques36 != "" && UserData.ques36 == "heavy water" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques36 != "" && !UserData.ques36.match(/heavy water/gi) ? "(heavy water)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>37</span>
                            <input type="text" name="ques37" id="ques37" onChange={handleValueChange}
                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques37.match(/electronic/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques37 != "" && UserData.ques37 == "electronic" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques37 != "" && !UserData.ques37.match(/electronic/gi) ? "(electronic)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>38</span>
                            <input type="text" name="ques38" id="ques38" onChange={handleValueChange}
                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques38.match(/1000 tons/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques38 != "" && UserData.ques38 == "1000 tons" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques38 != "" && !UserData.ques38.match(/1000 tons/gi) ? "(1000 tons)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>39</span>
                            <input type="text" name="ques39" id="ques39" onChange={handleValueChange}
                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques39.match(/electic current/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques39 != "" && UserData.ques39 == "electic current" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques39 != "" && !UserData.ques39.match(/electic current/gi) ? "(electic current)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>40</span>
                            <input type="text" name="ques40" id="ques40" onChange={handleValueChange}
                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-4" && !UserData.ques40.match(/40 control/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques40 != "" && UserData.ques40 == "40 control" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-4" && UserData.ques40 != "" && !UserData.ques40.match(/40 control/gi) ? "(40 control)" : ""}
                            </i>
                        </div>

                    </div>
                </div>


            </div>


        </section >
    )
}



export default ListeningPage