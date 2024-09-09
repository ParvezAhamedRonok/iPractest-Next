"use client"
import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import { useStateContext } from "../../../../../../../../contexts/ContextProvider";




function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
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
        ["engineering", "/", "Engineering"],
        ["car salesman", "/", "Car salesman"],
        ["playing chess", "/", "Playing chess"],
        ["electronics", "Electronics"],
        ["1200", "/", "Twelve houndred"],
        ["immediately", "/", "Immediately"],
        ["speaks Spanish", "/", "Speaks spanish"],
        ["A"], ["B"], ["A"],
        ["consultation", "/", "Consultation"],
        ["diet", "Diet"],
        ["test", "/", "Test"],
        ["monthly", "/", "Monthly"],
        ["three", "/", "Three"],
        ["C"], ["A"], ["E"], ["F"], ["B"], ["B"], ["C"], ["A"], ["B"], ["C"],
        ["7", "/", "Seven"],
        ["MBP"],
        ["not stable", "/", "Not stable"],
        ["bad attitude", "/", "Bad attitude"],
        ["health problems", "/", "Health problem"],
        ["C"], ["C"], ["A"],
        ["limestone", "/", "Limestone"],
        ["solidifies", "/", "Solidifies"],
        ["fault lines", "/", "Fault lines"],
        ["calcium", "/", "Calcium"],
        ["flowstone", "/", "Flowstone"],
        ["1986", "/", "Nineteen eighty six"],
        ["bottom up", "/", "Bottom up"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section1.mp3?_=1" />
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
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 03</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section1.mp3?_=1") }}
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
                        Questions 1-7 <br />
                        Complete the form. <br />
                        Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.<br />
                        <h5 className='text-start mt-2 text-inherit'> Client Details</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Name: Andrew Peterson (Example) <br /></h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> <span className='font-bold'>Educational Qualification:</span>Degree in<span className='Numbers'>1</span>
                                <input type="text" name='ques1' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques1.match(/engineering/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques1 != "" && UserData.ques1 == "engineering" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques1 != "" && !UserData.ques1.match(/engineering/gi) ? "(engineering)" : ""}
                                </i>
                            </label>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'>Previous Job:</label>
                            <span className='Numbers'>2</span>
                            <input type="text" name='ques2' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques2.match(/car salesman/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques2 != "" && UserData.ques2 == "car salesman" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques2 != "" && !UserData.ques2.match(/car salesman/gi) ? "(car salesman)" : ""}
                            </i>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'>Hobbies: </label>
                            <span className='Numbers'>3</span>
                            <input type="text" name='ques3' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques3.match(/playing chess/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques3 != "" && UserData.ques3 == "playing chess" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques3 != "" && !UserData.ques3.match(/playing chess/gi) ? "(playing chess)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'> Main Skills: </label>
                            <span className='Numbers'>4</span>
                            <input type="text" name='ques4' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques4.match(/electronics/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques4 != "" && UserData.ques4 == "electronics" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques4 != "" && !UserData.ques4.match(/electronics/gi) ? "(electronics)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'> Expected Salary ($):</label>
                            <span className='Numbers'>5</span>
                            <input type="text" name='ques5' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques5.match(/1200/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques5 != "" && UserData.ques5 == "1200" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques5 != "" && !UserData.ques5.match(/1200/gi) ? "(1200)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'> Can start: </label>
                            <span className='Numbers'>6</span>
                            <input type="text" name='ques6' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques6.match(/immediately/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques6 != "" && UserData.ques6 == "immediately" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques6 != "" && !UserData.ques6.match(/immediately/gi) ? "(immediately)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'> Other languages: </label>
                            <span className='Numbers'>7</span>
                            <input type="text" name='ques7' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques7.match(/speaks Spanish/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques7 != "" && UserData.ques7 == "speaks Spanish" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques7 != "" && !UserData.ques7.match(/speaks Spanish/gi) ? "(speaks Spanish)" : ""}
                            </i>
                        </div> <br /> <br />

                        <div className="Q-articles">
                            <h5>Questions 8-10</h5> <br />
                            Choose THREE letters from the list, A-G.<br /> <br />
                            <i className='font-bold'>Which THREE qualities do employers most value in their staff?</i>
                        </div>
                        <div className="Questions p-3">
                            <div className='mb-3'>
                                <label htmlFor="ques8"><span className='Numbers mr-1 mb-2'>8</span>
                                    <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques8 != "" && UserData.ques8 != "A" ? "(A)" : ""}</i>
                                </label>
                                <div className='' onChange={handleValueChange}>
                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                        <input className='' type="radio" value="A" name='ques8' />
                                        <i className='' >Problem-solving skills </i>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                        <input className='' type="radio" value="B" name='ques8' />
                                        <i className=''>  Diligence</i>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                        <input className='' type="radio" value="C" name='ques8' />
                                        <i className=''>Experience.</i>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="ques9"><span className='Numbers mr-1 mb-2'>9</span>
                                    <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques9 != "" && UserData.ques9 != "B" ? "(B)" : ""}</i>
                                </label>
                                <div className='' onChange={handleValueChange}>
                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                        <input className='' type="radio" value="A" name='ques9' />
                                        <i className='' >Flexible hours </i>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                        <input className='' type="radio" value="B" name='ques9' />
                                        <i className=''>   Independent thinking</i>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                        <input className='' type="radio" value="C" name='ques9' />
                                        <i className=''>loyality.</i>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="ques10"><span className='Numbers mr-1 mb-2'>10</span>
                                    <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques10 != "" && UserData.ques10 != "C" ? "(C)" : ""}</i>
                                </label>
                                <div className='' onChange={handleValueChange}>
                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                        <input className='' type="radio" value="A" name='ques10' />
                                        <i className='' >Good personality </i>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                        <input className='' type="radio" value="B" name='ques10' />
                                        <i className=''>  Qualifications</i>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                        <input className='' type="radio" value="C" name='ques10' />
                                        <i className=''>dignity.</i>
                                    </div>
                                </div>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section2.mp3?_=2") }}
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
                        Questions 11 – 15<br /><br />
                        Answer the questions.<br />ONE WORD ONLY for each answer. <br /><br />
                    </div>
                    <div className="Questions">
                        <div className='flex gap-1 flex-wrap mb-2'>

                            <label htmlFor="ques1">
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>

                                What does the centre provide first
                                <input type="text" name="ques11" id="ques11" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques11.match(/consultation/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques11 != "" && UserData.ques11 == "consultation" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques11 != "" && !UserData.ques11.match(/consultation/gi) ? "(consultation)" : ""}
                                </i>
                            </label>

                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <label htmlFor="ques12">
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                What is important to control
                                <input type="text" name="ques12" id="ques12" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques12.match(/diet/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques12 != "" && UserData.ques12 == "diet" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques12 != "" && !UserData.ques12.match(/diet/gi) ? "(diet)" : ""}
                                </i>
                            </label>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <label htmlFor="ques13">
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>

                                What will be used to assess member’s fitness level
                                <input type="text" name="ques13" id="ques13" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques13.match(/test/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques13 != "" && UserData.ques13 == "test" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques13 != "" && !UserData.ques13.match(/test/gi) ? "(test)" : ""}
                                </i>
                            </label>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <label htmlFor="ques14">
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>14</span>

                                How often is the exercise schedule reviewed
                                <input type="text" name="ques14" id="ques14" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques14.match(/monthly/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques14 != "" && UserData.ques14 == "monthly" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques14 != "" && !UserData.ques14.match(/monthly/gi) ? "(monthly)" : ""}
                                </i>
                            </label>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <label htmlFor="ques15">
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>15</span>

                                How many exercise programs are available
                                <input type="text" name="ques15" id="ques15" onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques15.match(/three/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques15 != "" && UserData.ques15 == "three" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques15 != "" && !UserData.ques15.match(/three/gi) ? "(three)" : ""}
                                </i>
                            </label>
                        </div>

                    </div>
                    <div className="Q-articles p-3 font-bold">
                        <h5>Questions 16-20 </h5> <br />
                        Write the correct letter, A-G, next to the questions.<br /><br />
                        Which place is best for <br /><br />
                    </div>
                    <div className="Questions">
                        <div className='p-2'>
                            <p><span className='font-bold mr-2'>A</span>  jogging machines</p>
                            <p><span className='font-bold mr-2'>B</span>Yoga studio</p>
                            <p><span className='font-bold mr-2'>C</span> Weight units</p>
                            <p><span className='font-bold mr-2'>D</span> Front-desk area</p>
                            <p><span className='font-bold mr-2'>E</span>  Squash courts</p>
                            <p><span className='font-bold mr-2'>F</span> Shower blocks</p>
                            <p><span className='font-bold mr-2'>G</span>Swimming pool</p>
                        </div> <br /> <br />
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>16</span>
                            <label htmlFor="ques16">developing confidence?</label>
                            <select name="ques16" id="ques16" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques16 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques16 != "" && UserData.ques16 == "C" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques16 != "" && UserData.ques16 != "C" ? "(C)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>17</span>
                            <label htmlFor="ques17">  reducing stress?</label>
                            <select name="ques17" id="ques17" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques17 != "A" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques17 != "" && UserData.ques17 == "A" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques17 != "" && UserData.ques17 != "A" ? "(A)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>18</span>
                            <label htmlFor="ques18"> building fitness?</label>
                            <select name="ques18" id="ques18" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques18 != "E" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques18 != "" && UserData.ques18 == "E" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques18 != "" && UserData.ques18 != "E" ? "(E)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>19</span>
                            <label htmlFor="ques19">meeting others?</label>
                            <select name="ques19" id="ques19" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques19 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques19 != "" && UserData.ques19 == "F" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques19 != "" && UserData.ques19 != "F" ? "(F)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>20</span>
                            <label htmlFor="ques20">finding information?</label>
                            <select name="ques20" id="ques20" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques20 != "A" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques20 != "" && UserData.ques20 == "A" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques20 != "" && UserData.ques20 != "B" ? "(B)" : ""}</i>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section3.mp3?_=3") }}
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
                        Questions 21 – 25<br />
                        Choose the correct letter, A, B, or C.<br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>21</span>
                                The position needs someone good at
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques21 != "" && UserData.ques21 != "B" ? "(B)" : ""}</i>
                            </div>

                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques21' />
                                    <i className='' > Computers </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques21' />
                                    <i className=''> Dealing with people.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques21' />
                                    <i className=''>Arts</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>

                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>22</span>
                                The directors will select someone from the faculty of
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques22 != "" && UserData.ques22 != "C" ? "(C)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques22' />
                                    <i className='' > Arts </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques22' />
                                    <i className=''>  Computing..</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques22' />
                                    <i className=''>Business</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>
                                The position will require the person to
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques23 != "" && UserData.ques23 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques23' />
                                    <i className='' >  Work long hours.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques23' />
                                    <i className=''> Train others.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques23' />
                                    <i className=''>  Do weekend work.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>24</span>
                                The position will come with a
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques24 != "" && UserData.ques24 != "B" ? "(B)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques24' />
                                    <i className='' > Cars </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques24' />
                                    <i className=''>Parking space.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques24' />
                                    <i className=''> Much better salary.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>25</span>
                                The best aspect of the job is it
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques25 != "" && UserData.ques25 != "C" ? "(C)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques25' />
                                    <i className='' >  Gives more responsibility. </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques25' />
                                    <i className=''> Comes with a private office.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques25' />
                                    <i className=''>   Is a step to higher positions</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Q-articles mt-2 mb-2">
                        <h5>Questions 26-30</h5> <br />
                        Complete the table.<br />
                        Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.<br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 text-center border-1 border-gray-400'>
                            <h5>Candidates</h5>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Steven</h5>
                            <h5>Abdul</h5>
                            <h5>Lek</h5>
                            <h5>Oscar</h5>
                        </div>

                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5 className='m-auto'>Years of Experience</h5>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>26</span>
                                <input type="text" name='ques26' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques26.match(/7/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques26 != "" && UserData.ques26 == "7" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques26 != "" && !UserData.ques26.match(/7/gi) ? "(7)" : ""}
                                </i>
                            </div>
                            <h5>7</h5>
                            <h5>8</h5>
                            <h5>12</h5>
                        </div>
                        <div className='w-full p-3 flex justify-between align-middle border-1 border-gray-400'>
                            <h5 className='m-auto'>Qualification</h5>
                            <h5 className='ml-2 mr-2 mt-1'>MBA</h5>
                            <div className="question mt-2 flex flex-wrap gap-1">
                                <span className='Numbers'>27</span>
                                <input type="text" name='ques27' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques27.match(/MBP/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques27 != "" && UserData.ques27 == "MBP" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques27 != "" && !UserData.ques27.match(/MBP/gi) ? "(MBP)" : ""}
                                </i>
                                degree<h5 className='ml-2 mr-2'>Certificates</h5>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between flex-wrap  border-1 border-gray-400'>Possible Concerns
                            <span className='Numbers'>28</span>
                            <input type="text" name='ques28' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques28.match(/not stable/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques28 != "" && UserData.ques28 == "not stable" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques28 != "" && !UserData.ques28.match(/not stable/gi) ? "(not stable)" : ""}
                            </i>
                            limited English
                            <span className='Numbers'>29</span>
                            <input type="text" name='ques29' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques29.match(/bad attitude/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques29 != "" && UserData.ques29 == "bad attitude" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques29 != "" && !UserData.ques29.match(/bad attitude/gi) ? "(bad attitude)" : ""}
                            </i>
                            <span className='Numbers'>30</span>
                            <input type="text" name='ques30' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques30.match(/health problems/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques30 != "" && UserData.ques30 == "health problems" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-3" && UserData.ques30 != "" && !UserData.ques30.match(/health problems/gi) ? "(health problems)" : ""}
                            </i>

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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section4.mp3?_=4") }}
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
                    <div className="Q-articles font-bold mb-3">
                        <h5>PART 4 </h5> <br />
                        Questions 31-33<br />
                        Choose the correct letter, A, B, or C. <br />
                    </div>
                    <div className="Questions">
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>31</span>
                                Caves are
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques31 != "" && UserData.ques31 != "C" ? "(C)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques31' />
                                    <i className='' > Often ignored. </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques31' />
                                    <i className=''> Mostly in remote areas..</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques31' />
                                    <i className=''>Often difficult to explore</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>

                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>32</span>
                                People who explore caves
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques32 != "" && UserData.ques32 != "C" ? "(C)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques32' />
                                    <i className='' >  Mostly need to know about cartography </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques32' />
                                    <i className=''>  Enjoy overcoming the difficulties..</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques32' />
                                    <i className=''>Usually know about cave sciences.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>33</span>
                                China has
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques33 != "" && UserData.ques33 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques33' />
                                    <i className='' > Probably the most undiscovered caves. </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques33' />
                                    <i className=''> A growing number of cave explorers..</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques33' />
                                    <i className=''>Some of the best documented caves.</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="Q-articles font-bold mb-2">
                        Questions 34-40<br />
                        Complete the table and notes.<br /><br />
                        Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.<br /><br /> <br />
                        <h5>Three Main Reasons for Cave Formation</h5><br /><br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Dissolution</h5>
                            <h5>Volcanic Lava Tubes</h5>
                            <h5>Action of Waves</h5>
                        </div>

                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <div className="question mt-2 flex flex-wrap gap-2 box-border overflow-auto">
                                <label htmlFor="ques34">mainly involves
                                    <span className='Numbers'>34</span>
                                    <input type="text" name='ques34' onChange={handleValueChange}
                                        className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques34.match(/limestone/gi) && "text-red-600"}
                                        ${ListeningShowAnswer == "Actual-test-3" && UserData.ques34 != "" && UserData.ques34 == "limestone" && "text-green-700"}
                                        `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-3" && UserData.ques34 != "" && !UserData.ques34.match(/limestone/gi) ? "(limestone)" : ""}
                                    </i>
                                </label>

                                <label htmlFor="ques35">topmost surface cools down and
                                    <span className='Numbers'>35</span>
                                    <input type="text" name='ques35' onChange={handleValueChange}
                                        className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques35.match(/solidifies/gi) && "text-red-600"}
                                        ${ListeningShowAnswer == "Actual-test-3" && UserData.ques35 != "" && UserData.ques35 == "solidifies" && "text-green-700"}
                                        `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-3" && UserData.ques35 != "" && !UserData.ques35.match(/solidifies/gi) ? "(solidifies)" : ""}
                                    </i>
                                    hotter lava continue to flow beneath</label>

                                <label htmlFor="ques36">waves pound in to cliffs then erode into
                                    <span className='Numbers'>36</span>
                                    <input type="text" name='ques36' onChange={handleValueChange}
                                        className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques36.match(/fault lines/gi) && "text-red-600"}
                                        ${ListeningShowAnswer == "Actual-test-3" && UserData.ques36 != "" && UserData.ques36 == "fault lines" && "text-green-700"}
                                        `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-3" && UserData.ques36 != "" && !UserData.ques36.match(/fault lines/gi) ? "(fault lines)" : ""}
                                    </i>
                                    or less rigid rocks.</label>
                            </div>
                        </div>

                        <div className='w-full p-3 flex gap-4 justify-between border-1 border-gray-400'>
                            <h5 className='m-auto mr-3'>Limestone caves</h5>
                            <div className="question mt-2 flex flex-wrap gap-1 box-border overflow-auto">
                                <label htmlFor="ques37">often have formations made of</label>
                                <span className='Numbers'>37</span>
                                <input type="text" name='ques37' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques37.match(/calcium/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques37 != "" && UserData.ques37 == "calcium" && "text-green-700"}
                                     `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques37 != "" && !UserData.ques37.match(/calcium/gi) ? "(calcium)" : ""}
                                </i>
                                <label htmlFor="ques37">carbonate e.g. stalactites, stalagmites, and</label>
                                <span className='Numbers'>38</span>
                                <input type="text" name='ques38' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques38.match(/flowstone/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques38 != "" && UserData.ques38 == "flowstone" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-3" && UserData.ques38 != "" && !UserData.ques38.match(/flowstone/gi) ? "(flowstone)" : ""}
                                </i>
                            </div>
                        </div>

                        <div className='w-full gap-4 p-3 flex justify-between border-1 border-gray-400'>
                            <h5 className='m-auto text-[12px] sm:text-[15px] '>e.g.Lechuguilla</h5>
                            <div className="question mt-2 flex flex-wrap gap-1 box-border overflow-auto">
                                <label htmlFor="ques39">finally revealed in
                                    <span className='Numbers'>39</span>
                                    <input type="text" name='ques39' onChange={handleValueChange}
                                        className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques39.match(/1986/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques39 != "" && UserData.ques39 == "1986" && "text-green-700"}
                                    `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-3" && UserData.ques39 != "" && !UserData.ques39.match(/1986/gi) ? "(1986)" : ""}
                                    </i>
                                    interestingly, formed from the
                                    <span className='Numbers'>40</span>
                                    <input type="text" name='ques40' onChange={handleValueChange}
                                        className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && !UserData.ques40.match(/bottom up/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-3" && UserData.ques40 != "" && UserData.ques40 == "bottom up" && "text-green-700"}
                                    `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                        {ListeningShowAnswer == "Actual-test-3" && UserData.ques40 != "" && !UserData.ques40.match(/bottom up/gi) ? "(bottom up)" : ""}
                                    </i>
                                </label>
                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </section >
    )
}



export default ListeningPage