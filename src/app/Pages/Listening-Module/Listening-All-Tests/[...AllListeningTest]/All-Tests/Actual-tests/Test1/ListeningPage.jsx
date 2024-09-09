"use client";
import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "../../../../../../../../assets/images/listening-images/Actual-test1-image1.jpg";
import img2 from "../../../../../../../../assets/images/listening-images/Actual-test1-image2.jpg"
import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
import Image from 'next/image';

//end of the importing...



function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
    // for show and hide all notePad----   
    const [forNotePad1, setForNotePad1] = useState(false);
    const [forNotePad2, setForNotePad2] = useState(false);
    const [forNotePad3, setForNotePad3] = useState(false);
    const [forNotePad4, setForNotePad4] = useState(false);
    const { ListeningShowAnswer, setListeningShowAnswer } = useStateContext();
    // console.log(testItems)

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
        ["The Animal park", "/", "THE ANIMAL PARK", "/", "the animal park"],
        ["Cold and Cloudy", "/", "cold and cloudy", "/", "COLD AND CLOUDY"],
        ["10.15 am", "/", "Ten fifteen am"],
        ["Birds of prey", "/", "birds of prey", "/", "BIRDS OF PREY"],
        ["the reptile display", "/", "The Reptile Display", "/", "The reptile display"],
        ["6.30 pm", "/", "Six thirty pm"],
        ["Chinese", "/", "chinese"],
        ["Japanese", "/", "japanese"],
        ["Koreans", "/", "koreans"],
        ["Thai"],
        ["B"], ["A"], ["B"], ["C"], ["A"], ["D"], ["F"], ["B"], ["C"], ["A"],
        ["G"], ["E"], ["C"], ["A"],
        ["Header", "/", "header"],
        ["16", "/", "Sixteen", "/", "sixteen"],
        ["12", "/", "Twilve", '/', "twilve"],
        ["Single", "/", "single"],
        ["Work", "/", "work"],
        ["Teacher", "/", "teacher"],
        ["Regulations", "/", "regulations"],
        ["Short grass", "/", "short grass"],
        ["Development", "/", "development"],
        ["Passive recrestion", "/", "passive recrestion"],
        ["Get lost", "/", "get lost"],
        ["Industrial Revolution", "/", "industrial revolution"],
        ["50,000", "/", "fifty thousand", "/", "Fifty thousand"],
        ["central lake", "/", "Central lake"],
        ["Refuge", "/", "refuge"],
        ["Melbourne", "/", "melbourne"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section1.mp3?_=1" />
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



            <div className="forAllDivs section-1 bg-sky-100 rounded mb-1 ">
                <>
                    <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 01 with</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section1.mp3?_=1") }}
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
                        Questions 1-6 <br />
                        Complete the notes. <br />
                        Write NO MORE THAN THREE WORDS OR A NUMBER for each answer <br /> <br />
                        <h5 className='text-center mt-2 text-inherit'>School Excursion</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Day: Wednesday (Example)</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Destination: </label>
                            <span className='Numbers'>1</span>
                            <input type="text" name='ques1' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques1.match(/The Animal park/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques1 != "" && UserData.ques1 == "The Animal park" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques1.match(/The Animal park/gi) ? "(The Animal park)" : ""}
                            </i>
                        </div>
                        <h5 className='text-start mt-2 text-inherit'>Travelling by bus</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Weather: </label>
                            <span className='Numbers'>2</span>
                            <input type="text" name='ques2' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques2.match(/Cold and Cloudy/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques2 != "" && UserData.ques2 == "Cold and Cloudy" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques2.match(/Cold and Cloudy/gi) ? "(Cold and Cloudy)" : ""}
                            </i>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Arrival time:</label>
                            <span className='Numbers'>3</span>
                            <input type="text" name='ques3' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques3.match(/10.15 am/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques3 != "" && UserData.ques3 == "10.15 am" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && UserData.ques3 != "" && !UserData.ques3.match(/10.15 am/gi) ? "(10.15 am)" : ""}
                            </i>
                            <p></p>
                        </div> <br />
                        <h5>Activities Planned</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> See: </label>
                            <span className='Numbers'>4</span>
                            <input type="text" name='ques4' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques4.match(/Birds of prey/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques4 != "" && UserData.ques4 == "Birds of prey" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques4.match(/Birds of prey/gi) ? "(Birds of prey)" : ""}
                            </i>
                        </div> <br />
                        <h5>Eat: Catered lunch</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Attend: </label>
                            <span className='Numbers'>5</span>
                            <input type="text" name='ques5' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques5.match(/the reptile display/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques5 != "" && UserData.ques5 == "the reptile display" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques5.match(/the reptile display/gi) ? "(the reptile display)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Return time:</label>
                            <span className='Numbers'>6</span>
                            <input type="text" name='ques6' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques6.match(/6.30 pm/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques6 != "" && UserData.ques6 == "6.30 pm" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques6.match(/6.30 pm/gi) ? "(6.30 pm)" : ""}
                            </i>
                        </div>
                    </div>
                </div> <br />




                <div className="Q-articles  mb-3 p-2 mt-2">
                    <h5> Questions 7-10</h5><br />
                    Complete the table. <br /> <br />
                    Write ONE WORD ONLY for each answer. <br />
                </div>


                <div className="Questions">
                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                        <h5>Nationality</h5>
                        <h5>%</h5>
                    </div>
                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>7</span>
                            <input type="text" name='ques7' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques7.match(/Chinese/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques7 != "" && UserData.ques7 == "Chinese" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques7.match(/Chinese/gi) ? "(Chinese)" : ""}
                            </i>
                        </div>
                        <h5>26</h5>
                    </div>
                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                        <div className="question flex flex-wrap gap-2">
                            <span className='Numbers'>8</span>
                            <input type="text" name='ques8' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques8.match(/Japanese/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques8 != "" && UserData.ques8 == "Japanese" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques8.match(/Japanese/gi) ? "(Japanese)" : ""}
                            </i>
                        </div>
                        <h5>25</h5>
                    </div>
                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>9</span>
                            <input type="text" name='ques9' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques9.match(/Koreans/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques9 != "" && UserData.ques9 == "Koreans" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques9.match(/Koreans/gi) ? "(Koreans)" : ""}
                            </i>
                        </div>
                        <h5>16</h5>
                    </div>
                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                        <h5>Indonesian</h5>
                        <h5>15</h5>
                    </div>
                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>10</span>
                            <input type="text" name='ques10' onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques10.match(/Thai/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques10 != "" && UserData.ques10 == "Thai" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques10.match(/Thai/gi) ? "(Thai)" : ""}
                            </i>
                        </div>
                        <h5>8</h5>
                    </div>
                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                        <h5>Saudi</h5>
                        <h5>3</h5>
                    </div>
                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                        <h5>other</h5>
                        <h5>7</h5>
                    </div>
                </div>
            </div> <br />




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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section2.mp3?_=2") }}
                                    className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                            </div>
                            <div className="flex mt-[27px]">
                                <button onClick={() => { setForNotePad2(!forNotePad2) }}
                                    className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                            </div>
                        </div>
                    </div>
                </>

                {/* 1-10 Questions */}
                <div className="">
                    <div className="Q-articles">
                        <h5>PART 2 </h5> <br />
                        Questions 11 – 15 <br />
                        Choose the correct letter, A, B, or C <br /> <br />
                    </div>
                    <div className="Question">
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>
                                The company deals mostly with:
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques11 != "B" ? "(B)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques11' />
                                    <i className='' > Big cities. </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques11' />
                                    <i className=''>   Nature holidays.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques11' />
                                    <i className=''>Nepal.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                The overseas consultants deal mostly with:
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques12 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques12' />
                                    <i className='' >Asia. </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques12' />
                                    <i className=''> North America.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques12' />
                                    <i className=''> Europe.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                For deserts and gorges, customers should come in the:
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques13 != "B" ? "(B)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques13' />
                                    <i className='' > Morning. </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques13' />
                                    <i className=''> Afternoon.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques13' />
                                    <i className=''> Night.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>14</span>
                                Trips to regional locations are good because:
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques14 != "C" ? "(C)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques14' />
                                    <i className='' >The buses are comfortable. </i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques14' />
                                    <i className=''>There is storage for suitcases.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques14' />
                                    <i className=''> They can be seen quickly.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='text-justify mb-3'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>15</span>
                                SleekLine buses are particularly known for their:
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques15 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='' onChange={handleValueChange}>
                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                    <input className='' type="radio" value="A" name='ques15' />
                                    <i className='' >Service.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                    <input className='' type="radio" value="B" name='ques15' />
                                    <i className=''> Size.</i>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                    <input className='' type="radio" value="C" name='ques15' />
                                    <i className=''>Comfort.</i>
                                </div>
                            </div>
                        </div>


                    </div> <br />
                    <div className="Q-articles p-3">
                        <h5>Questions 16-20 </h5> <br />
                        Identify the rooms in the office plan. <br />
                        Choose the correct letter, A-G, next to the questions.<br /> <br />
                        <Image src={img1} alt="test-1 listening image" />
                    </div>
                    <div className="Questions p-3">
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>16</span>
                            <label htmlFor="ques16"> Local Tours
                                <select name="ques16" id="ques16" onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques16 != "D" && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques16 != "" && UserData.ques16 == "D" && "text-green-700"}
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
                                <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques16 != "D" ? "D" : ""}</i>
                            </label>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>17</span>
                            <label htmlFor="ques17">Interstate Tours</label>
                            <select name="ques17" id="ques17" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques17 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques17 != "" && UserData.ques17 == "F" && "text-green-700"}
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
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques17 != "F" ? "F" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>18</span>
                            <label htmlFor="ques18">International Tours</label>
                            <select name="ques18" id="ques18" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques18 != "B" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
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
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques18 != "B" ? "B" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>19</span>
                            <label htmlFor="ques19">Asian Region</label>
                            <select name="ques19" id="ques19" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques19 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques19 != "" && UserData.ques19 == "C" && "text-green-700"}
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
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques19 != "C" ? "C" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>20</span>
                            <label htmlFor="ques20">General Office</label>
                            <select name="ques20" id="ques20" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques20 != "A" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques20 != "" && UserData.ques20 == "A" && "text-green-700"}
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
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-1" && UserData.ques20 != "A" ? "A" : ""}</i>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section3.mp3?_=3") }}
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
                        Complete the timetable..<br /> <br />
                        Write the correct letter, A-H, for each answer.<br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Morning</h5>
                            <h5>Afternoon</h5>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Monday</h5>
                            <h5>Opening Lecture</h5>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>21</span>
                                <input type="text" name='ques21' onChange={handleValueChange}
                                    className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques21 != "G" && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques21 != "" && UserData.ques21 == "G" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && UserData.ques21 != "G" ? "(G)" : ""}
                                </i>
                            </div>

                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Tuesday</h5>
                            <div className="question flex flex-wrap gap-2">
                                <span className='Numbers'>22</span>
                                <input type="text" name='ques22' onChange={handleValueChange}
                                    className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques22 != "E" && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques22 != "" && UserData.ques22 == "E" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && UserData.ques22 != "E" ? "(E)" : ""}
                                </i>
                            </div>
                            <h5>Study Skills</h5>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Wednesday</h5>
                            <h5>X</h5>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>23</span>
                                <input type="text" name='ques23' onChange={handleValueChange}
                                    className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques23 != "C" && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques23 != "" && UserData.ques23 == "C" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && UserData.ques23 != "C" ? "(C)" : ""}
                                </i>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Thursday</h5>
                            <h5>X</h5>
                            <h5>X</h5>
                        </div>
                        <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                            <h5>Friday</h5>
                            <h5>X</h5>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>24</span>
                                <input type="text" name='ques24' onChange={handleValueChange}
                                    className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && UserData.ques24 != "A" && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques24 != "" && UserData.ques24 == "A" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && UserData.ques24 != "A" ? "(A)" : ""}
                                </i>
                            </div>
                        </div>
                        <div className='p-3'>
                            <p><span className='font-bold mr-2'>A</span> BBQ</p>
                            <p><span className='font-bold mr-2'>B</span> Careers lecture</p>
                            <p><span className='font-bold mr-2'>C</span>Computer lab visit</p>
                            <p><span className='font-bold mr-2'>D</span> Dance</p>
                            <p><span className='font-bold mr-2'>E</span> Library tour</p>
                            <p><span className='font-bold mr-2'>F</span>Student Union induction</p>
                            <p><span className='font-bold mr-2'>G</span>University tour</p>
                            <p><span className='font-bold mr-2'>H</span>Legal rights lecture</p>

                        </div>

                    </div>
                    <div className="Q-articles">
                        <h5>Questions 25-30</h5> <br />
                        Complete the labels.<br />
                        Write ONE WORD OR A NUMBER for each answer..<br /> <br />
                        <Image src={img2} alt="test 1 listening image-2" />
                    </div>
                    <div className="Questions mt-3">
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers translate-y-[6px]'>25</span>
                            <input type="text" name="ques25" id="ques25" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques25.match(/Header/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques25 != "" && UserData.ques25 == "Header" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques25.match(/Header/gi) ? "(Header)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers translate-y-[6px]'>26</span>
                            <input type="text" name="ques26" id="ques26" onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques26.match(/16/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques26 != "" && UserData.ques26 == "16" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques26.match(/16/gi) ? "(16)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers translate-y-[6px]'>27</span>
                            <input type="text" name="ques27" id="ques27" onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques27.match(/12/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques27 != "" && UserData.ques27 == "12" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques27.match(/12/gi) ? "(12)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers translate-y-[6px]'>28</span>
                            <input type="text" name="ques28" id="ques28" onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques28.match(/Single/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques28 != "" && UserData.ques28 == "Single" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques28.match(/Single/gi) ? "(Single)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers translate-y-[6px]'>29</span>
                            <input type="text" name="ques29" id="ques29" onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques29.match(/Work/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques29 != "" && UserData.ques29 == "Work" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques29.match(/Work/gi) ? "(Work)" : ""}
                            </i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers translate-y-[6px]'>30</span>
                            <input type="text" name="ques30" id="ques30" onChange={handleValueChange}
                                className={` font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques30.match(/Teacher/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-1" && UserData.ques30 != "" && UserData.ques30 == "Teacher" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Actual-test-1" && !UserData.ques30.match(/Teacher/gi) ? "(Teacher)" : ""}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section4.mp3?_=4") }}
                                    className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                            </div>
                            <div className="flex mt-[27px]">
                                <button onClick={() => { setForNotePad4(!forNotePad4) }}
                                    className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                            </div>
                        </div>
                    </div>
                </>

                {/* 31-40 Questions */}
                <div className="Questions">
                    <div className="Q-articles p-3">
                        <h5>PART 4 </h5> <br />
                        Questions 31-34 <br />
                        Complete the sentences <br />
                        Write NO MORE THAN TWO WORDS for each answer. <br />
                    </div>
                    <div className="Question p-3">
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> Behavior in parks is controlled by
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>31</span>
                                <input type="text" name='ques31' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques31.match(/Regulations/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques31 != "" && UserData.ques31 == "Regulations" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques31.match(/Regulations/gi) ? "(Regulations)" : ""}
                                </i>
                            </label>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Insect numbers are reduced by having
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>32</span>
                                <input type="text" name='ques32' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques32.match(/Short grass/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques32 != "" && UserData.ques32 == "Short grass" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques32.match(/Short grass/gi) ? "(Short grass)" : ""}
                                </i>
                            </label>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">A wilderness park does not have any
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>33</span>
                                <input type="text" name='ques33' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques33.match(/Development/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques33 != "" && UserData.ques33 == "Development" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques33.match(/Development/gi) ? "(Development)" : ""}
                                </i>
                            </label>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Observing trees and lying in the grass are examples of
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>34</span>
                                <input type="text" name='ques34' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques34.match(/Passive recrestion/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques34 != "" && UserData.ques34 == "Passive recrestion" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques34.match(/Passive recrestion/gi) ? "(Passive recrestion)" : ""}
                                </i>
                            </label>
                        </div>
                    </div>
                    <div className="Q-articles font-bold p-3">
                        <h5>Questions 35-40</h5> <br />
                        Complete the notes. <br />
                        Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.<br /> <br />
                        PARKS <br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='w-full grid grid-cols-2 gap-3 justify-between border-1 border-gray-400'>
                            <h6 className='w-full text-center p-2'>1000 years ago</h6>
                            <div className='w-full flex flex-wrap box-border overflow-auto p-2'>
                                <label htmlFor="Name"> Behavior in parks is controlled by</label>
                                <span className='Numbers'>35</span>
                                <input type="text" name='ques35' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques35.match(/Get lost/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques35 != "" && UserData.ques35 == "Get lost" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques35.match(/Get lost/gi) ? "(Get lost)" : ""}
                                </i>
                                <span className='Numbers'>36</span>
                                <input type="text" name='ques36' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques36.match(/Industrial Revolution/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques36 != "" && UserData.ques36 == "Industrial Revolution" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques36.match(/Industrial Revolution/gi) ? "(Industrial Revolution)" : ""}
                                </i>
                            </div>

                        </div>
                        <div className='w-full grid grid-cols-2 gap-3 justify-between border-1 border-gray-400'>
                            <h6 className='w-full text-center p-2'>Princes Park</h6>
                            <div className='w-full flex flex-wrap box-border overflow-auto p-2'>
                                <label htmlFor="Name">land originally worth £ </label>
                                <span className='Numbers'>37</span>
                                <input type="text" name='ques37' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques37.match(/50,000/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques37 != "" && UserData.ques37 == "50,000" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques37.match(/50,000/gi) ? "(50,000)" : ""}
                                </i>
                                <p>designed by Joseph Paxton in the middle was a</p>
                                <span className='Numbers'>38</span>
                                <input type="text" name='ques38' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques38.match(/central lake/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques38 != "" && UserData.ques38 == "central lake" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques38.match(/central lake/gi) ? "(central lake)" : ""}
                                </i>
                            </div>

                        </div>
                        <div className='w-full grid grid-cols-2 gap-3 justify-between border-1 border-gray-400'>
                            <h6 className='w-full text-center p-2'>Neighborhood Parks</h6>
                            <div className='w-full flex flex-wrap box-border overflow-auto p-2'>
                                <label htmlFor="Name">now regarded as a </label>
                                <span className='Numbers'>39</span>
                                <input type="text" name='ques39' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques39.match(/Refuge/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques39 != "" && UserData.ques39 == "Refuge" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques39.match(/Refuge/gi) ? "(Refuge)" : ""}
                                </i>
                                <p>satisfy a natural desire can be famous, e.g. in</p>
                                <span className='Numbers'>40</span>
                                <input type="text" name='ques40' onChange={handleValueChange}
                                    className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-1" && !UserData.ques40.match(/Melbourne/gi) && "text-red-600"}
                                    ${ListeningShowAnswer == "Actual-test-1" && UserData.ques40 != "" && UserData.ques40 == "Melbourne" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Actual-test-1" && !UserData.ques40.match(/Melbourne/gi) ? "(Melbourne)" : ""}
                                </i>
                            </div>

                        </div>
                    </div>
                </div>

            </div>






        </section >
    )
}



export default ListeningPage