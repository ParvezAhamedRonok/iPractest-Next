import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
import Image from 'next/image';



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
        ["receptionist", "/", "Receptionist"],
        ["medical", "/", "Medical"],
        ["Chastons", "/", "chastons"],
        ["appointments", "/", "Appointments"],
        ["database", "/", "Database"],
        ["experience", "/", "Experience"],
        ["confident", "/", "Confident"],
        ["temporary", "/", "Temporary"],
        ["1.15", "/", "One fifteen"],
        ["parking", "/", "Parking"],
        ["B"], ["A"], ["A"], ["C"], ["F"], ["G"], ["E"], ["A"], ["C"], ["B"],
        ["B"], ["A"], ["D"], ["A"], ["C"], ["G"], ["F"], ["A"], ["B"], ["C"],
        ["plot", "/", "Plot"],
        ["poverty", "/", "Poverty"],
        ["Europe", "/", "europe"],
        ["poetry", "/", "Poetry"],
        ["drawing", "/", "Drawing"],
        ["furniture", "/", "Furniture"],
        ["lamps", "/", "Lamps"],
        ["harbor", "/", "Harbor"],
        ["children", "/", "Children"],
        ["relatives", "/", "Relatives"],
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part1.mp3?_=1" />
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part1.mp3?_=1") }}
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
                        Questions 1-10 <br />
                        Complete the notes below. <br />
                        Write ONE WORD AND/OR A NUMBER for each answer. <br />
                        <h5 className='text-center mt-2 text-inherit'>Job details from employment agency</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●Role</label>
                            <span className='Numbers'>1</span>
                            <input type="text" name='ques1' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques1.match(/receptionist/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques1 != "" && UserData.ques1 == "receptionist" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques1 != "" && !UserData.ques1.match(/receptionist/gi) ? "(receptionist)" : ""}
                            </i>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Location     Fordham</label>
                            <span className='Numbers'>2</span>
                            <input type="text" name='ques2' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques2.match(/medical/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques2 != "" && UserData.ques2 == "medical" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques2 != "" && !UserData.ques2.match(/medical/gi) ? "(medical)" : ""}
                            </i>
                            <p> Centre</p>
                            <label htmlFor="Name"> Road, Fordham</label>
                            <span className='Numbers'>3</span>
                            <input type="text" name='ques3' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques3.match(/Chastons/gi) && "text-red-600"}
                                
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques3 != "" && UserData.ques3 == "Chastons" && "text-green-700"}`} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques3 != "" && !UserData.ques3.match(/Chastons/gi) ? "(Chastons)" : ""}
                            </i>
                        </div><br /> <br />

                        <h5>Work involves <br /> <br />●   dealing with enquiries</h5>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   making </label>
                            <span className='Numbers'>4</span>
                            <input type="text" name='ques4' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques4.match(/appointments/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques4 != "" && UserData.ques4 == "appointments" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques4 != "" && !UserData.ques4.match(/appointments/gi) ? "(appointments)" : ""}
                            </i>
                            <p>and reorganising them</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   maintaining the internal </label>
                            <span className='Numbers'>5</span>
                            <input type="text" name='ques5' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques5.match(/database/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques5 != "" && UserData.ques5 == "database" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques5 != "" && !UserData.ques5.match(/database/gi) ? "(database)" : ""}
                            </i>
                            <p> general administration</p>
                        </div> <br /> <br />
                        <h5>Requirements</h5>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>6</span>
                            <input type="text" name='ques6' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques6.match(/experience/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques6 != "" && UserData.ques6 == "experience" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques6 != "" && !UserData.ques6.match(/experience/gi) ? "(experience)" : ""}
                            </i>
                            <p>(essential)</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   a calm and</label>
                            <span className='Numbers'>7</span>
                            <input type="text" name='ques7' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques7.match(/confident/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques7 != "" && UserData.ques7 == "confident" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques7 != "" && !UserData.ques7.match(/confident/gi) ? "(confident)" : ""}
                            </i>
                            <p>manner <br />
                                ●   good IT </p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   a </label>
                            <span className='Numbers'>8</span>
                            <input type="text" name='ques8' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques8.match(/temporary/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques8 != "" && UserData.ques8 == "temporary" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques8 != "" && !UserData.ques8.match(/temporary/gi) ? "(temporary)" : ""}
                            </i>
                            <p>job – further opportunities may be available</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   hours: 7.45 a.m. to </label>
                            <span className='Numbers'>9</span>
                            <input type="text" name='ques9' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques9.match(/1.15/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques9 != "" && UserData.ques9 == "1.15" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques9 != "" && !UserData.ques9.match(/1.15/gi) ? "(1.15)" : ""}
                            </i>
                            <p>p.m. Monday to Friday</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ● </label>
                            <span className='Numbers'>10</span>
                            <input type="text" name='ques10' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques10.match(/parking/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques10 != "" && UserData.ques10 == "parking" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques10 != "" && !UserData.ques10.match(/parking/gi) ? "(parking)" : ""}
                            </i>
                            <p>is available onsite</p>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part2.mp3?_=2") }}
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
                    <div className="Q-articles">
                        <h5>PART 2 </h5> <br />
                        Questions 11 and 14<br /><br />
                        Choose the correct letter, A, B or C.<br /> <br />
                    </div>
                    <div className="Q-question">

                        <div className='mb-3 mt-2'>
                            <div className='flex flex-wrap gap-1'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>
                                <label htmlFor="ques11"> The museum building was originally
                                    <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques11 != "" && UserData.ques11 != "B" ? "(B)" : ""}</i>
                                </label>

                            </div>
                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques11' />
                                    <input className='' type="radio" value="B" name='ques11' />
                                    <input className='' type="radio" value="C" name='ques11' />
                                </div>

                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' > a factory.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> a private home.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> a hall of residence.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3 mt-2'>
                            <div className='text-justify  mb-2'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                The university uses part of the museum building as
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques12 != "" && UserData.ques12 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques12' />
                                    <input className='' type="radio" value="B" name='ques12' />
                                    <input className='' type="radio" value="C" name='ques12' />
                                </div>
                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' > teaching rooms.</i>
                                    <i className='mt-[4px] sm:mt-[0px]'>a research library.</i>
                                    <i className='mt-[4px] sm:mt-[0px]'>administration offices.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3 mt-2'>
                        <div className='text-justify mb-2'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'
>13</span>
                                What does the guide say about the entrance fee?
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques13 != "" && UserData.ques13 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques13' />
                                    <input className='' type="radio" value="B" name='ques13' />
                                    <input className='' type="radio" value="C" name='ques13' />
                                </div>

                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                <i className='mt-[-7px] sm:mt-[0px]'>Visitors decide whether or not they wish to pay.</i>
                                <i className='mt-[-10px] sm:mt-[0px]'>Only children and students receive a discount.</i>
                                <i className='mt-[-8px] sm:mt-[0px]'>The museum charges extra for special exhibitions.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3 mt-2'>
                        <div className='text-justify flex flex-wrap mb-2'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>14</span>
                                What are visitors advised to leave in the cloakroom?
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques14 != "" && UserData.ques14 != "C" ? "(C)" : ""}</i>
                            </div>

                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques14' />
                                    <input className='' type="radio" value="B" name='ques14' />
                                    <input className='' type="radio" value="C" name='ques14' />
                                </div>
                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' > cameras</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>coats.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>bags</i>
                                </div>
                            </div>
                        </div> <br /> <br />

                        <div className="Q-articles">
                            <h5>Questions 15-20</h5> <br />
                            What information does the speaker give about each of the following areas of the museum?<br /><br />
                            Choose SIX answers from the box and write the correct letter, A-H, next to Questions 15-20.<br /><br />
                            <h5>Information</h5>
                            <i className='font-bold p-3 mt-2 mb-2'>
                                A   Parents must supervise their children.<br /><br />

                                B   There are new things to see.<br /><br />

                                C   It is closed today.<br /><br />

                                D   This is only for school groups.<br /><br />

                                E   There is a quiz for visitors.<br /><br />

                                F   It features something created by students.<br /><br />

                                G   An expert is here today.<br /><br />

                                H   There is a one-way system.<br /><br />
                            </i>
                            <h5>Areas of museum</h5>
                        </div> <br />

                        <div className="Q-questions">
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>15</span>
                                <label htmlFor="Name"> Four Seasons</label>
                                <input type="text" name='ques15' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques15 != "F" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques15 != "" && UserData.ques15 == "F" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques15 != "" && UserData.ques15 != "F" ? "(F)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>16</span>
                                <label htmlFor="Name"> Farmhouse Kitchen </label>
                                <input type="text" name='ques16' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques16 != "G" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques16 != "" && UserData.ques16 == "G" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques16 != "" && UserData.ques16 != "G" ? "(G)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>17</span>
                                <label htmlFor="Name">A Year on the Farm</label>
                                <input type="text" name='ques17' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques17 != "E" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques17 != "" && UserData.ques17 == "E" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques17 != "" && UserData.ques17 != "E" ? "(E)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>18</span>
                                <label htmlFor="Name"> Wagon Walk </label>
                                <input type="text" name='ques18' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques18 != "A" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques18 != "" && UserData.ques18 == "A" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques18 != "" && UserData.ques18 != "A" ? "(A)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>19</span>
                                <label htmlFor="Name">Bees are Magic</label>
                                <input type="text" name='ques19' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques19 != "C" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques19 != "" && UserData.ques19 == "C" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques19 != "" && UserData.ques19 != "C" ? "(C)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>20</span>
                                <label htmlFor="Name"> The Pond </label>
                                <input type="text" name='ques20' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques20 != "B" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques20 != "" && UserData.ques20 == "B" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques20 != "" && UserData.ques20 != "B" ? "(B)" : ""}
                                </i>
                            </div>

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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part3.mp3?_=3") }}
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
                        Questions 21-22<br />
                        Which TWO educational skills were shown in the video of children doing origami?<br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className='mb-3'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>21</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques21 != "" && UserData.ques21 != "B" ? "(B)" : ""}</i>
                            </div>
                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques21' />
                                    <input className='' type="radio" value="B" name='ques21' />
                                    <input className='' type="radio" value="C" name='ques21' />
                                </div>

                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' >solving problems</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>  following instructions</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>working cooperatively</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>22</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques22 != "" && UserData.ques22 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques22' />
                                    <input className='' type="radio" value="B" name='ques22' />
                                    <input className='' type="radio" value="C" name='ques22' />
                                </div>

                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' >learning through play</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>developing hand-eye coordination</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> the contradictions in them</i>
                                </div>
                            </div>
                        </div>

                        <div className="Q-articles">
                            <h5>
                                Questions 23-27<br />
                                Which comment do the students make about each of the following children in the video? <br /><br />
                                Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 23-27</h5> <br /><br />
                            <h5>Comments</h5>
                            <i className='font-bold p-3 mt-2 mb-2'>
                                A   demonstrated independence <br /><br />
                                B   asked for teacher support <br /><br />
                                C   developed a competitive attitude <br /><br />
                                D   seemed to find the activity calming <br /><br />
                                E   seemed pleased with the results <br /><br />
                                F   seemed confused <br /><br />
                                G   seemed to find the activity easy <br /><br />
                            </i>
                            <h5>children</h5>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>23</span>
                            <label htmlFor="Name"> Sid    </label>
                            <input type="text" name='ques23' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques23 != "D" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques23 != "" && UserData.ques23 == "D" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques23 != "" &&  UserData.ques23 != "D" ? "(D)" : ""}
                            </i>
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>24</span>
                            <label htmlFor="Name"> Jack   </label>
                            <input type="text" name='ques24' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" &&  UserData.ques24 != "A" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques24 != "" && UserData.ques24 == "A" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques24 != "" && UserData.ques24 != "A" ? "(A)" : ""}
                            </i>
                        </div><br />

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>25</span>
                            <label htmlFor="Name">Naomi    </label>
                            <input type="text" name='ques25' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" &&  UserData.ques25 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques25 != "" && UserData.ques25 == "C" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques25 != "" &&  UserData.ques25 != "C" ? "(C)" : ""}
                            </i>
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>26</span>
                            <label htmlFor="Name"> Anya   </label>
                            <input type="text" name='ques26' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" &&  UserData.ques26 != "G" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques26 != "" && UserData.ques26 == "G" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques26 != "" &&  UserData.ques26 != "G" ? "(G)" : ""}
                            </i>
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>27</span>
                            <label htmlFor="Name">Zara   </label>
                            <input type="text" name='ques27' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" &&  UserData.ques27 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques27 != "" && UserData.ques27 == "F" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques27 != "" &&  UserData.ques27 != "F" ? "(F)" : ""}
                            </i>
                        </div><br />

                        <div className="Q-articles">
                            <h5>Questions 28-30</h5> <br />
                            Choose the correct letter, A, B or C.<br />
                        </div> <br /> <br />
                        <div className="Q-question">
                            <div className='mb-3'>
                                <div className='text-justify mb-3 flex flex-wrap'>
                                    <label htmlFor="">
                                    <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>28</span>
                                    Before starting an origami activity in class, the students think it is important for the teacher to
                                    <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques28 != "" && UserData.ques28 != "A" ? "(A)" : ""}</i>
                                    </label>
                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques28' />
                                        <input className='' type="radio" value="B" name='ques28' />
                                        <input className='' type="radio" value="C" name='ques28' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='mt-[-7px] sm:mt-[0px]'>make models that demonstrate the different stages</i>
                                    <i className='mt-[-7px] sm:mt-[0px]'> check children understand the terminology involved.</i>
                                    <i className='mt-[-9px] sm:mt-[0px]'>tell children not to worry if they find the activity difficult.</i>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='text-justify mb-3 flex flex-wrap '>
                                <label htmlFor="">
                                    <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'
>29</span>
                                    The students agree that some teachers might be unwilling to use origami in class because
                                    <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques29 != "" && UserData.ques29 != "B" ? "(B)" : ""}</i>
                                    </ label>
                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques29' />
                                        <input className='' type="radio" value="B" name='ques29' />
                                        <input className='' type="radio" value="C" name='ques29' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' >they may not think that crafts are important.</i>
                                        <i className=''>  they may not have the necessary skills.</i>
                                        <i className=''>they may worry that it will take up too much time.</i>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='text-justify mb-3 flex flex-wrap '>
                                <label htmlFor="">
                                    <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>30</span>
                                    Why do the students decide to use origami in their maths teaching practice?
                                    <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-4" && UserData.ques30 != "" && UserData.ques30 != "C" ? "(C)" : ""}</i>
                                    </ label>
                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques30' />
                                        <input className='' type="radio" value="B" name='ques30' />
                                        <input className='' type="radio" value="C" name='ques30' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' > to correct a particular misunderstanding</i>
                                        <i className='mt-[3px] sm:mt-[0px]'> to set a challenge</i>
                                        <i className='mt-[3px] sm:mt-[0px]'>to introduce a new concept</i>
                                    </div>
                                </div>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part4.mp3?_=4") }}
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
                        Questions 31-40 <br />
                        Complete the notes below. <br />
                        Write ONE WORD ONLY for each answer. <br />
                        <h5 className='text-center mt-2 mb-2 text-inherit'>Victor Hugo</h5> <br /> <br />
                    </div>
                    <h5>His novel, Les Misérables<br />
                        ●   It has been adapted for theatre and cinema.</h5> <br />

                    <div className="Q-question">
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   We know more about its overall</label>
                            <span className='Numbers'>31</span>
                            <input type="text" name='ques31' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques31.match(/plot/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques31 != "" && UserData.ques31 == "plot" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques31 != "" && !UserData.ques31.match(/plot/gi) ? "(plot)" : ""}
                            </i>
                            <p>than about its author.</p>
                        </div><br />
                        <h5 className='text-start mt-2 text-inherit'>His early career</h5> <br />
                        <i className='mt-2 mb-2'>●   In Paris, his career was successful and he led the Romantic movement.</i>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   He spoke publicly about social issues, such as</label>
                            <span className='Numbers'>32</span>
                            <input type="text" name='ques32' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques32.match(/poverty/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques32 != "" && UserData.ques32 == "poverty" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques32 != "" && !UserData.ques32.match(/poverty/gi) ? "(poverty)" : ""}
                            </i>
                            <p> and education.</p>
                        </div>
                        <i className='mt-2 mb-2'>●   Napoleon III disliked his views and exiled him.</i>
                        <h5>His exile from France</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   Victor Hugo had to live elsewhere in </label>
                            <span className='Numbers'>33</span>
                            <input type="text" name='ques33' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques33.match(/Europe/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques33 != "" && UserData.ques33 == "Europe" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques33 != "" && !UserData.ques33.match(/Europe/gi) ? "(Europe)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   He used his income from the sale of some</label>
                            <span className='Numbers'>34</span>
                            <input type="text" name='ques34' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques34.match(/poetry/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques34 != "" && UserData.ques34 == "poetry" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques34 != "" && !UserData.ques34.match(/poetry/gi) ? "(poetry)" : ""}
                            </i>
                            <p>he had written to buy a house on Guernsey.</p>
                        </div><br /> <br />

                        <h5 className='mt-3 mb-3'>His house on Guernsey <br />●   Victor Hugo lived in this house until the end of the Empire in France.</h5>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   The ground floor contains portraits, </label>
                            <span className='Numbers'>35</span>
                            <input type="text" name='ques35' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques35.match(/drawing/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques35 != "" && UserData.ques35 == "drawing" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques35 != "" && !UserData.ques35.match(/drawing/gi) ? "(drawing)" : ""}
                            </i>
                            <p>and tapestries that he valued.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   He bought cheap</label>
                            <span className='Numbers'>36</span>
                            <input type="text" name='ques36' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques36.match(/furniture/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques36 != "" && UserData.ques36 == "furniture" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques36 != "" && !UserData.ques36.match(/furniture/gi) ? "(furniture)" : ""}
                            </i>
                            <p>made of wood and turned this into beautiful wall carvings.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   The first floor consists of furnished areas with wallpaper and </label>
                            <span className='Numbers'>37</span>
                            <input type="text" name='ques37' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques37.match(/lamps/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques37 != "" && UserData.ques37 == "lamps" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques37 != "" && !UserData.ques37.match(/lamps/gi) ? "(lamps)" : ""}
                            </i>
                            <p>that have a Chinese design.</p>
                        </div><br />
                        <i>●   The library still contains many of his favourite books.</i> <br />
                        <div className="question flex flex-wrap gap-2">
                            <label htmlFor="Name">●   He wrote in a room at the top of the house that had a view of the</label>
                            <span className='Numbers'>38</span>
                            <input type="text" name='ques38' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques38.match(/harbor/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques38 != "" && UserData.ques38 == "harbor" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques38 != "" && !UserData.ques38.match(/harbor/gi) ? "(harbor)" : ""}
                            </i>
                        </div>
                        <h5>Solutions</h5>
                        <i>●   Common standards should be agreed on for the presentation of information.</i>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   He entertained other writers as well as poor</label>
                            <span className='Numbers'>39</span>
                            <input type="text" name='ques39' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques39.match(/children/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques39 != "" && UserData.ques39 == "children" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques39 != "" && !UserData.ques39.match(/children/gi) ? "(children)" : ""}
                            </i>
                            <p> in his house.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   Victor Hugo’s </label>
                            <span className='Numbers'>40</span>
                            <input type="text" name='ques40' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-4" && !UserData.ques40.match(/relatives/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-4" && UserData.ques40 != "" && UserData.ques40 == "relatives" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-4" && UserData.ques40 != "" && !UserData.ques40.match(/relatives/gi) ? "(relatives)" : ""}
                            </i>
                            <p>gave ownership of the house to the city of Paris in 1927.</p>
                        </div>
                    </div>
                </div>


            </div>


        </section >
    )
}



export default ListeningPage