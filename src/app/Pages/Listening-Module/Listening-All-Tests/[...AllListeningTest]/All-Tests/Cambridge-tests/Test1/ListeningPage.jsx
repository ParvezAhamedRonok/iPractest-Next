"use client";
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
    const { ListeningShowAnswer, setListeningShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
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
        ["DW30 7YZ"],
        ["24th April", "/", "24th april", "/", "Tweenty four april"],
        ["dentist", "/", "Dentist"],
        ["parking", "/", "Parking"],
        ["Claxby", "/", "claxby"],
        ["late", "/", "Late"],
        ["evening", "/", "Evening"],
        ["supermarket", "/", "Supermarket"],
        ["pollution", "/", "Pollution"],
        ["storage", "/", "Storage"],
        ["C"], ["A"], ["A"], ["B"], ["B"], ["B"], ["G"], ["D"], ["A"], ["F"],
        ["A"], ["B"], ["A"], ["C"], ["B"], ["A"], ["B"], ["B"], ["A"], ["A"],
        ["fences", "/", "Fences"],
        ["family", "/", "Family"],
        ["helicopters"],
        ["stress", "/", "Stress"],
        ["sides", "/", "Sides"],
        ["breathing", '/', "Breathing"],
        ["breathing", '/', "Breathing"],
        ["employment", "/", "Employment"],
        ["weapons", "/", "Weapons"],
        ["tourism", "/", "Tourism"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test1-part1.mp3?_=1" />
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test1-part1.mp3?_=1") }}
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
                        <h5 className='text-center mt-2 text-inherit'>Transport survey</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Name:   Sadie Jones <br /> <br /> Year of birth:   1991</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> Postcode:   1</label>
                            <span className='Numbers'>1</span>
                            <input type="text" name='ques1' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques1.match(/DW30 7YZ/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques1 != "" && UserData.ques1 == "DW30 7YZ" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques1.match(/DW30 7YZ/gi) ? " DW30 7YZ"
                                    // <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                                    //     DW30 7YZ
                                    //     <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                                    //         onClick={() => {
                                    //             setExplainRLQuestions(true);
                                    //             setExplainObjForRL(makeObj => ({
                                    //                 number: 1,
                                    //                 Ans1: "",
                                    //                 mainAns: "DW30 7YZ",
                                    //                 hiddenWord: "Paragraph A, lines 4-5",
                                    //                 hiddenWord2: "",
                                    //                 hiddenWord3: "",
                                    //                 keyWords: "",
                                    //                 explain: "(Paragraph A, lines 4-5) Michael Krauss argues that linguistic diversity is important, stating, The world would be less beautiful and less interesting without linguistic diversity"
                                    //             }))
                                    //         }}
                                    //     >Exp..</span>
                                    // </div>
                                    : ""}
                            </i>
                        </div>


                        <h5 className='text-start mt-2 text-inherit'>Travelling by bus</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Date of bus journey: </label>
                            <span className='Numbers'>2</span>
                            <input type="text" name='ques2' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques2.match(/24th April/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques2 != "" && UserData.ques2 == "24th April" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques2 != "" && !UserData.ques2.match(/24th April/gi) ? "(24th April)" : ""}
                            </i>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Reason for trip:   shopping and visit to the</label>
                            <span className='Numbers'>3</span>
                            <input type="text" name='ques3' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques3.match(/dentist/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques3 != "" && UserData.ques3 == "dentist" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques3 != "" && !UserData.ques3.match(/dentist/gi) ? "(dentist)" : ""}
                            </i>
                            <p></p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> Travelled by bus because cost of</label>
                            <span className='Numbers'>4</span>
                            <input type="text" name='ques4' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques4.match(/parking/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques4 != "" && UserData.ques4 == "parking" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques4 != "" && !UserData.ques4.match(/parking/gi) ? "(parking)" : ""}
                            </i>
                            <p>too high</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> Got on bus at</label>
                            <span className='Numbers'>5</span>
                            <input type="text" name='ques5' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques5.match(/Claxby/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques5 != "" && UserData.ques5 == "Claxby" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques5 != "" && !UserData.ques5.match(/Claxby/gi) ? "(Claxby)" : ""}
                            </i>
                            <p>Street</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> Complaints about bus service:– bus today was </label>
                            <span className='Numbers'>6</span>
                            <input type="text" name='ques6' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques6.match(/late/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques6 != "" && UserData.ques6 == "late" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques6 != "" && !UserData.ques6.match(/late/gi) ? "(late)" : ""}
                            </i>
                            <p>–   frequency of buses in the</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> –   frequency of buses in the </label>
                            <span className='Numbers'>7</span>
                            <input type="text" name='ques7' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques7.match(/evening/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques7 != "" && UserData.ques7 == "evening" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques7 != "" && !UserData.ques7.match(/evening/gi) ? "(evening)" : ""}
                            </i>
                            <p>Street</p>
                        </div>
                        <h5 className='text-start mt-2 text-inherit'>Travelling by car</h5> <br />
                        <div className="question flex flex-wrap gap-2">
                            <label htmlFor="Name">Goes to the  </label>
                            <span className='Numbers'>8</span>
                            <input type="text" name='ques8' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques8.match(/supermarket/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques8 != "" && UserData.ques8 == "supermarket" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques8 != "" && !UserData.ques8.match(/supermarket/gi) ? "(supermarket)" : ""}
                            </i>
                            <p>by car</p>
                        </div>
                        <h5 className='text-start mt-2 text-inherit'>Travelling by bicycle</h5> <br />

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Dislikes travelling by bike in the city centre because of the </label>
                            <span className='Numbers'>9</span>
                            <input type="text" name='ques9' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques9.match(/pollution/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques9 != "" && UserData.ques9 == "pollution" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques9 != "" && !UserData.ques9.match(/pollution/gi) ? "(pollution)" : ""}
                            </i>
                            <p>by car</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Doesn’t own a bike because of a lack of</label>
                            <span className='Numbers'>10</span>
                            <input type="text" name='ques10' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques10.match(/Storage/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques10 != "" && UserData.ques10 == "Storage" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques10 != "" && !UserData.ques10.match(/Storage/gi) ? "(Storage)" : ""}
                            </i>
                            <p>by car</p>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test1-part2.mp3?_=2") }}
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
                <div className="Questions">
                    <div className="Q-articles">
                        <h5>PART 2 </h5> <br />
                        Questions 11-13 <br />
                        Choose the correct letter, A, B or C. <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-center mt-2 mb-2 text-inherit'> Becoming a volunteer for ACE</h5> <br />

                        <div className='mb-3'>
                            <div className='text-justify mb-2'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>
                                Why does the speaker apologise about the seats?
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques11 != "" && UserData.ques11 != "C" ? "(C)" : ""}</i>
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
                                    <i className='' >They are too small.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> There are not enough of them.</i>
                                    <i className='mt-[4px] sm:mt-[0px]'> Some of them are very close together.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='text-justify mb-2'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                What does the speaker say about the age of volunteers?
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques12 != "" && UserData.ques12 != "A" ? "(A)" : ""}</i>
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
                                    <i className='' >The age of volunteers is less important than other factors.</i>
                                    <i className='mt-[-9px] sm:mt-[0px]'> Young volunteers are less reliable than older ones.</i>
                                    <i className='mt-[-7px] sm:mt-[0px]'>  Most volunteers are about 60 years old.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='text-justify mb-2'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                What does the speaker say about training?
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques13 != "" && UserData.ques13 != "A" ? "(A)" : ""}</i>
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
                                    <i className='' >It is continuous.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> It is conducted by a manager.</i>
                                    <i className='mt-[4px] sm:mt-[0px]'> It takes place online.</i>
                                </div>
                            </div>
                        </div>


                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4">
                                <h5> Questions 14 and 15</h5> <br />
                                Choose TWO letters, A-E.<br />
                                Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers?<br />
                            </div> <br /> <br />

                            <div className='mb-3'>
                                <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>14</span>
                                    <label htmlFor="ques14 ">
                                        <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques14 != "" && UserData.ques14 != "B" ? "(B)" : ""}</i>
                                    </label>

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
                                        <i className='' >their financial situation</i>
                                        <i className=''> their level of commitment</i>
                                        <i className=''> their work experience</i>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>15</span>
                                    <label htmlFor="ques15">
                                        <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques15 != "" && UserData.ques15 != "B" ? "(B)" : ""}</i>
                                    </label>

                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques15' />
                                        <input className='' type="radio" value="B" name='ques15' />
                                        <input className='' type="radio" value="C" name='ques15' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' >as free timer</i>
                                        <i className='mt-[3px] sm:mt-[0px]'>  their ambition</i>
                                        <i className='mt-[4px] sm:mt-[0px]'> their availability</i>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4 mb-3">
                                <h5> Questions 16-20</h5> <br />
                                What does the speaker suggest would be helpful for each of the following areas of voluntary work?<br />
                                Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 16-20.<br />
                            </div>
                            <div className="Q-articles text-justify mt-4 mb-3">
                                <h5>

                                    Helpful things volunteers might offer <br /> <br />
                                    A   experience on stage<br /> <br />
                                    B   original, new ideas<br /> <br />
                                    C   parenting skills<br /> <br />
                                    D   an understanding of food and diet<br /> <br />
                                    E   retail experience<br /> <br />
                                    F   a good memory<br /> <br />
                                    G   a good level of fitness<br /> <br />
                                </h5> <br /> <br />
                                <h5>Area of voluntary work</h5>
                            </div>


                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>16</span>
                                <label htmlFor="Name"> Fundraising </label>
                                <input type="text" name='ques16' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques16 != "B" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques16 != "" && UserData.ques16 == "B" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques16 != "" && UserData.ques16 != "B" ? "(B)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>17</span>
                                <label htmlFor="Name"> Litter collection </label>
                                <input type="text" name='ques17' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques17 != "G" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques17 != "" && UserData.ques17 == "G" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques17 != "" && UserData.ques17 != "G" ? "(G)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>18</span>
                                <label htmlFor="Name"> ‘Playmates’  </label>
                                <input type="text" name='ques18' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques18 != "D" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques18 != "" && UserData.ques18 == "D" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques18 != "" && UserData.ques18 != "D" ? "(D)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>19</span>
                                <label htmlFor="Name"> Story club </label>
                                <input type="text" name='ques19' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques19 != "A" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques19 != "" && UserData.ques19 == "A" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques19 != "" && UserData.ques19 != "A" ? "(A)" : ""}
                                </i>
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>20</span>
                                <label htmlFor="Name"> First aid </label>
                                <input type="text" name='ques20' onChange={handleValueChange}
                                    className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques20 != "F" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques20 != "" && UserData.ques20 == "F" && "text-green-700"}
                                    `} />
                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                    {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques20 != "" && UserData.ques20 != "F" ? "(F)" : ""}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test1-part3.mp3?_=3") }}
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
                        Questions 21-26<br />
                        Choose the correct letter, A, B or C.<br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-center mt-2 mb-2 text-inherit'> Talk on jobs in fashion design</h5> <br />

                        <div className='mb-3'>
                            <div className='text-justify mb-2 flex'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>21</span>
                                What problem did Chantal have at the start of the talk?
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques21 != "" && UserData.ques21 != "A" ? "(A)" : ""}</i>
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
                                    <i className='' >Her view of the speaker was blocked.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>  She was unable to find an empty seat.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> The students next to her were talking.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='text-justify mb-2 flex'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>22</span>
                                What were Hugo and Chantal surprised to hear about the job market?
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques22 != "" && UserData.ques22 != "B" ? "(B)" : ""}</i>
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
                                    <i className='mt-[-3px] sm:mt-[0px]'> It has become more competitive than it used to be..</i>
                                    <i className='mt-[-10px] sm:mt-[0px]'> There is more variety in it than they had realised.</i>
                                    <i className='mt-[-9px] sm:mt-[0px]'>  Some areas of it are more exciting than others.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='text-justify mb-2 flex'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>
                                Hugo and Chantal agree that the speaker’s message was?
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques23 != "" && UserData.ques23 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques23' />
                                    <input className='' type="radio" value="B" name='ques23' />
                                    <input className='' type="radio" value="C" name='ques23' />
                                </div>

                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' >unfair to them at times.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>  hard for them to follow.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> critical of the industry.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='text-justify mb-2 flex'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>24</span>
                                What do Hugo and Chantal criticise about their school careers advice?
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques24 != "" && UserData.ques24 != "C" ? "(C)" : ""}</i>
                            </div>

                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques24' />
                                    <input className='' type="radio" value="B" name='ques24' />
                                    <input className='' type="radio" value="C" name='ques24' />
                                </div>

                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' >when they received the advice</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> how much advice was given</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> who gave the advice</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='text-justify mb-2 flex'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>25</span>
                                When discussing their future, Hugo and Chantal disagree on
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques25 != "" && UserData.ques25 != "B" ? "(B)" : ""}</i>
                            </div>
                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques25' />
                                    <input className='' type="radio" value="B" name='ques25' />
                                    <input className='' type="radio" value="C" name='ques25' />
                                </div>

                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' >which is the best career in fashion..</i>
                                    <i className=''> when to choose a career in fashion.</i>
                                    <i className=''>why they would like a career in fashion..</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='text-justify mb-2 flex'>
                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>26</span>
                                How does Hugo feel about being an unpaid assistant?
                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques26 != "" && UserData.ques26 != "A" ? "(A)" : ""}</i>
                            </div>
                            <div className='flex gap-4 pl-2'>
                                <div className="flex flex-col gap-6">
                                    <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                    <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                    <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                </div>
                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                    <input className='' type="radio" value="A" name='ques26' />
                                    <input className='' type="radio" value="B" name='ques26' />
                                    <input className='' type="radio" value="C" name='ques26' />
                                </div>

                                <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                    <i className='' >He is realistic about the practice.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>  He feels the practice is dishonest.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> He thinks others want to change the practice.</i>
                                </div>
                            </div>
                        </div>


                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4">
                                <h5> Questions 27 and 28</h5> <br />
                                choose Which TWO mistakes did the speaker admit she made in her first job?<br /> <br />
                            </div>

                            <div className='mb-3'>
                                <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>27</span>
                                    <label htmlFor="ques27">
                                        <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques27 != "" && UserData.ques27 != "B" ? "(B)" : ""}</i> </label>

                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques27' />
                                        <input className='' type="radio" value="B" name='ques27' />
                                        <input className='' type="radio" value="C" name='ques27' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' >being dishonest to her employer</i>
                                        <i className=''> paying too much attention to how she looked</i>
                                        <i className=''> expecting to become well known</i>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>28</span>
                                    <label htmlFor="ques28">   <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques28 != "" && UserData.ques28 != "B" ? "(B)" : ""}</i></label>

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
                                        <i className='' >trying to earn a lot of money</i>
                                        <i className=''> their ambition</i>
                                        <i className=''>openly disliking her client</i>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4">
                                <h5> Questions 29 and 30</h5> <br />
                                choose Which TWO pieces of retail information do Hugo and Chantal agree would be useful?<br /> <br />
                            </div>

                            <div className='mb-3'>
                                <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>29</span>
                                    <label htmlFor="ques29 ">  <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques29 != "" && UserData.ques29 != "A" ? "(A)" : ""}</i></label>

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
                                        <i className='' >the reasons people return fashion items</i>
                                        <i className=''>  how much time people have to shop for clothes</i>
                                        <i className=''> expecting to become well known</i>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>30</span>
                                    <label htmlFor="ques30">   <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-1" && UserData.ques30 != "" && UserData.ques30 != "A" ? "(A)" : ""}</i></label>

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
                                        <i className='' >the best time of year for fashion buying</i>
                                        <i className=''> the most popular fashion sizes</i>
                                        <i className=''>fashion designs people want but can’t find</i>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test1-part4.mp3?_=4") }}
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
                        <h5 className='text-center mt-2 text-inherit'>Elephant translocation</h5> <br /> <br />
                    </div>
                    <div className="Q-articles p-2">
                        <h5>Reasons for overpopulation at Majete National Park</h5> <br />
                        <i className='font-bold'>●   strict enforcement of anti-poaching laws</i>
                        <i className='font-bold'>●   successful breeding</i>
                    </div>

                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Problems caused by elephant overpopulation</h5> <br />
                        <h5 className='text-start mt-2 text-inherit'>●   greater competition, causing hunger for elephants</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   damage to </label>
                            <span className='Numbers'>31</span>
                            <input type="text" name='ques31' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques31.match(/fences/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques31 != "" && UserData.ques31 == "fences" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques31 != "" && !UserData.ques31.match(/fences/gi) ? "(fences)" : ""}
                            </i>
                            <p>in the park</p>
                        </div>
                        <h5 className='text-start mt-2 text-inherit'>The translocation process</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   a suitable group of elephants from the same </label>
                            <span className='Numbers'>32</span>
                            <input type="text" name='ques32' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques32.match(/family/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques32 != "" && UserData.ques32 == "family" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques32 != "" && !UserData.ques32.match(/family/gi) ? "(family)" : ""}
                            </i>
                            <p> was selected</p>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   vets and park staff made use of</label>
                            <span className='Numbers'>33</span>
                            <input type="text" name='ques33' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques33.match(/helicopters/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques33 != "" && UserData.ques33 == "helicopters" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques33 != "" && !UserData.ques33.match(/helicopters/gi) ? "(helicopters)" : ""}
                            </i>
                            <p>to help guide the elephants into an open plain</p>
                        </div>

                        <h5>●   elephants were immobilised with tranquilisers</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">  –   this process had to be completed quickly to reduce</label>
                            <span className='Numbers'>34</span>
                            <input type="text" name='ques34' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques34.match(/stress/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques34 != "" && UserData.ques34 == "stress" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques34 != "" && !UserData.ques34.match(/stress/gi) ? "(stress)" : ""}
                            </i>
                            <p>too high</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> –   elephants had to be turned on their </label>
                            <span className='Numbers'>35</span>
                            <input type="text" name='ques35' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques35.match(/sides/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques35 != "" && UserData.ques35 == "sides" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques35 != "" && !UserData.ques35.match(/sides/gi) ? "(sides)" : ""}
                            </i>
                            <p>to avoid damage to their lungs</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">  –   elephants’ </label>
                            <span className='Numbers'>36</span>
                            <input type="text" name='ques36' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques36.match(/breathing/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques36 != "" && UserData.ques36 == "breathing" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques36 != "" && !UserData.ques36.match(/breathing/gi) ? "(breathing)" : ""}
                            </i>
                            <p>had to be monitored constantly–   tracking devices were fitted to the matriarchs</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> –   data including the size of their tusks and  </label>
                            <span className='Numbers'>37</span>
                            <input type="text" name='ques37' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques37.match(/breathing/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques37 != "" && UserData.ques37 == "breathing" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques37 != "" && !UserData.ques37.match(/breathing/gi) ? "(breathing)" : ""}
                            </i>
                            <p>was taken
                                ●   elephants were taken by truck to their new reserve</p>
                        </div>
                        <h5 className='text-start mt-2 text-inherit'>Advantages of translocation at Nkhotakota Wildlife Park</h5> <br />

                        <div className="question flex flex-wrap gap-2">
                            <span className='Numbers'>38</span>
                            <label htmlFor="Name">  </label>
                            <input type="text" name='ques38' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques38.match(/employment/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques38 != "" && UserData.ques38 == "employment" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques38 != "" && !UserData.ques38.match(/employment/gi) ? "(employment)" : ""}
                            </i>
                            <p>opportunities</p>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   a reduction in the number of poachers and  </label>
                            <span className='Numbers'>39</span>
                            <input type="text" name='ques39' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques39.match(/weapons/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques39 != "" && UserData.ques39 == "weapons" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques39 != "" && !UserData.ques39.match(/weapons/gi) ? "(weapons)" : ""}
                            </i>
                            <p>●   an example of conservation that other parks can follow</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   an increase in </label>
                            <span className='Numbers'>40</span>
                            <input type="text" name='ques40' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-1" && !UserData.ques40.match(/tourism/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-1" && UserData.ques40 != "" && UserData.ques40 == "tourism" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-1" && UserData.ques40 != "" && !UserData.ques40.match(/tourism/gi) ? "(tourism)" : ""}
                            </i>
                            <p>as a contributor to GDP</p>
                        </div>
                    </div>
                </div>










            </div>






        </section >
    )
}



export default ListeningPage