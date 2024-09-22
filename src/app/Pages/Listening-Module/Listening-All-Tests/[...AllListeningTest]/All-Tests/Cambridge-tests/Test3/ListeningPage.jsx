"use client";
import React, { useRef , useState } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "../../../../../../../../assets/images/LTest2Img1.jpg"
import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
import Image from 'next/image';


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
        ["Marrowfield", "/", "marrowfield"],
        ["relative", "/", "Relative"],
        ["socialize", "/", "Socialize"],
        ["full", "/", "Full"],
        ["Domestic life", "/", "domestic life"],
        ["clouds", "/", "Clouds"],
        ["timing", "/", "Timing"],
        ["animal magic", "/", "Animal magic"],
        ["movement", "/", "Movement"],
        ["dark", "/", "Dark"],
        ["B"], ["B"], ["B"], ["B"], ["C"], ["B"], ["B"], ["C"], ["A"], ["A"],
        ["A"], ["B"], ["B"], ["B"], ["G"], ["E"], ["B"], ["C"], ["F"], ["A"],
        ["technical", "/", "Technical"],
        ["cheep", "/", "Cheep"],
        ["thousands", "/", "Thousands"],
        ["identification", "/", "Identification"],
        ["tracking", "/", "Tracking"],
        ["military", "/", "Military"],
        ["location", "/", "Location"],
        ["prediction", "/", "Prediction"],
        ["database", '/', "Database"],
        ["trust", "/", "Trust"],
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part1.mp3?_=1" />
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part1.mp3?_=1") }}
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
                        Questions 1-4 <br />
                        Complete the notes below. <br />
                        Write ONE WORD AND/OR A NUMBER for each answer. <br />
                        <h5 className='text-center mt-2 text-inherit'>Wayside Camera Club <br /> membership form</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Name:   Dan Green <br />
                            Email address:   dan1068@market.com</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●Home address:  52</label>
                            <span className='Numbers'>1</span>
                            <input type="text" name='ques1' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques1.match(/Marrowfield/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques1 != "" && UserData.ques1 == "Marrowfield" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques1 != "" && !UserData.ques1.match(/Marrowfield/gi) ? "(Marrowfield)" : ""}
                            </i>
                            <p>Street, Peacetown</p>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Heard about us:   from a </label>
                            <span className='Numbers'>2</span>
                            <input type="text" name='ques2' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques2.match(/relative/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques2 != "" && UserData.ques2 == "relative" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques2 != "" && !UserData.ques2.match(/relative/gi) ? "(relative)" : ""}
                            </i>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Reasons for joining:   to enter competitions to</label>
                            <span className='Numbers'>3</span>
                            <input type="text" name='ques3' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques3.match(/socialize/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques3 != "" && UserData.ques3 == "socialize" && "text-green-700"}
                                 `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques3 != "" && !UserData.ques3.match(/socialize/gi) ? "(socialize)" : ""}
                            </i>
                        </div><br /> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> Type of membership:  </label>
                            <span className='Numbers'>4</span>
                            <input type="text" name='ques4' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques4.match(/full/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques4 != "" && UserData.ques4 == "full" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques4 != "" && !UserData.ques4.match(/full/gi) ? "(full)" : ""}
                            </i>
                            <p>membership (£30)</p>
                        </div>

                        <div className="Q-articles">
                            <h5>Questions 50px-10</h5> <br />
                            Complete the table below.<br />
                            Write ONE WORD AND/OR A NUMBER for each answer. <br />
                            <h5 className='text-center mt-2 text-inherit'>Working at Milo’s Restaurants</h5> <br /> <br />
                        </div>
                        <div>
                            <h5 className='text-center p-3 border-1 border-black'>Photography competitions</h5>
                            <div className='grid grid-cols-3 p-3 mt-[-3px] border-1 border-black'>
                                <h5>Title of competition</h5>
                                <h5>Instructions</h5>
                                <h5>Feedback to Dan</h5>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-3 p-3 mt-[-3px] border-1 border-black'>
                            <span className='Numbers'>5</span>
                            <input type="text" name='ques5' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques5.match(/Domestic life/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques5 != "" && UserData.ques5 == "Domestic life" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques5 != "" && !UserData.ques5.match(/Domestic life/gi) ? "(Domestic life)" : ""}
                            </i>
                            <i>A scene in the home</i>
                            <i>The picture’s composition was not good</i>
                        </div>
                        <div className='flex flex-wrap gap-3 p-3 mt-[-3px] border-1 border-black'>
                            <i>‘Beautiful Sunsets’</i>
                            <label htmlFor="ques6">Scene must show some</label>
                            <span className='Numbers'>6</span>
                            <input type="text" name='ques6' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques6.match(/clouds/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques6 != "" && UserData.ques6 == "clouds" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques6 != "" && !UserData.ques6.match(/clouds/gi) ? "(clouds)" : ""}
                            </i>
                            <label htmlFor="ques6">The </label>
                            <span className='Numbers'>7</span>
                            <input type="text" name='ques7' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques7.match(/timing/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques7 != "" && UserData.ques7 == "timing" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques7 != "" && !UserData.ques7.match(/timing/gi) ? "(timing)" : ""}
                            </i>
                            <p> was wrong.</p>

                        </div>
                        <div className='flex flex-wrap gap-3 p-3 mt-[-3px] border-1 border-black'>
                            <span className='Numbers'>8</span>
                            <input type="text" name='ques8' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques8.match(/animal magic/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques8 != "" && UserData.ques8 == "animal magic" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques8 != "" && !UserData.ques8.match(/animal magic/gi) ? "(animal magic)" : ""}
                            </i>
                            <label htmlFor="ques6">Scene must show </label>
                            <span className='Numbers'>9</span>
                            <input type="text" name='ques9' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques9.match(/movement/gi) && "text-red-600"}
                                
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques9 != "" && UserData.ques9 == "movement" && "text-green-700"}`} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques9 != "" && !UserData.ques9.match(/movement/gi) ? "(movement)" : ""}
                            </i>
                            <label htmlFor="ques6">The photograph was too</label>
                            <span className='Numbers'>10</span>
                            <input type="text" name='ques10' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques10.match(/dark/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques10 != "" && UserData.ques10 == "dark" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques10 != "" && !UserData.ques10.match(/dark/gi) ? "(dark)" : ""}
                            </i>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part2.mp3?_=2") }}
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
                        Questions 11 and 12<br /><br />
                        Which TWO warnings does Dan give about picking mushrooms?<br /> <br />
                    </div>
                    <div className="Q-question">

                        <div className='mb-3 mt-2'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>11</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques11 != "" && UserData.ques11 != "B" ? "(B)" : ""}</i>
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
                                    <i className='' >Don’t pick more than one variety of mushroom at a time.</i>
                                    <i className=''>  Don’t pick mushrooms near busy roads..</i>
                                    <i className=''>It has good connections with the airport..</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3 mt-2'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>12</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques12 != "" && UserData.ques12 != "B" ? "(B)" : ""}</i>
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
                                    <i className='' > Don’t eat mushrooms while picking them.</i>
                                    <i className=''>Don’t eat mushrooms given to you.</i>
                                    <i className=''>Don’t pick old mushrooms.</i>
                                </div>
                            </div>
                        </div>

                        <div className="Q-articles">
                            <h5>Questions 13 and 14</h5> <br />
                            Which TWO ideas about wild mushrooms does Dan say are correct?<br /> <br />
                        </div>
                        <div className='mb-3 mt-2'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>13</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques13 != "" && UserData.ques13 != "B" ? "(B)" : ""}</i>
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
                                    <i className='' >Mushrooms should always be peeled before eating</i>
                                    <i className=''> Mushrooms eaten by animals may be unsafe.</i>
                                    <i className=''>Cooking destroys toxins in mushrooms.</i>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3 mt-2'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>14</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques14 != "" && UserData.ques14 != "B" ? "(B)" : ""}</i>
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
                                    <i className='' >  the rural location</i>
                                    <i className=''> Brightly coloured mushrooms can be edible.</i>
                                    <i className=''>All poisonous mushrooms have a bad smell.</i>
                                </div>
                            </div>
                        </div>

                        <div className="Q-articles">
                            <h5>Questions 15-20</h5> <br />
                            Choose the correct letter, A, B or C.<br /><br />
                        </div> <br />

                        <div className="Q-question">
                            <div className='mb-3'>
                                <div className='text-justify'>
                                    <label htmlFor="">
                                        <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>15</span>
                                        What advice does Dan give about picking mushrooms in parks?
                                        <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques15 != "" && UserData.ques15 != "C" ? "(C)" : ""}</i>
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
                                        <i className='' > Choose wooded areas.</i>
                                        <i className='mt-[3px] sm:mt-[0px]'> Don’t disturb wildlife.</i>
                                        <i className='mt-[3px] sm:mt-[0px]'>Get there early.</i>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <div className='text-justify mb-2'>
                                    <label>
                                        <span className='p-1  text-[13px] ml-2 sm:text-[15px] w-[25px] sm:w-[30px]  bg-[#007bff]  text-white rounded-[50%]'>16</span>
                                        Dan says it is a good idea for beginners to
                                        <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques16 != "" && UserData.ques16 != "B" ? "(B)" : ""}</i>
                                    </ label>
                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques16' />
                                        <input className='' type="radio" value="B" name='ques16' />
                                        <input className='' type="radio" value="C" name='ques16' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' > use a mushroom app.</i>
                                        <i className='mt-[3px] sm:mt-[0px]'>join a group.</i>
                                        <i className='mt-[3px] sm:mt-[0px]'>take a reference book.</i>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <div className='text-justifyflex flex-wrap mb-2'>
                                    <label>
                                        <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>17</span>
                                        What does Dan say is important for conservation?
                                        <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques17 != "" && UserData.ques17 != "B" ? "(B)" : ""}</i>
                                    </label>
                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques17' />
                                        <input className='' type="radio" value="B" name='ques17' />
                                        <input className='' type="radio" value="C" name='ques17' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' >selecting only fully grown mushrooms</i>
                                        <i className='mt-[3px] sm:mt-[0px]'> picking a limited amount of mushrooms</i>
                                        <i className='mt-[3px] sm:mt-[0px]'>avoiding areas where rare mushroom species grow</i>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <div className='text-justify flex flex-wrap mb-2'>
                                    <label>
                                        <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>18</span>
                                        According to Dan, some varieties of wild mushrooms are in decline because there is
                                        <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques18 != "" && UserData.ques18 != "C" ? "(C)" : ""}</i>
                                    </label>
                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques18' />
                                        <input className='' type="radio" value="B" name='ques18' />
                                        <input className='' type="radio" value="C" name='ques18' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' >a huge demand for them from restaurants.</i>
                                        <i className=''> a lack of rain in this part of the country</i>
                                        <i className=''>a rise in building developments locally.</i>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <div className='text-justify flex flex-wrap mb-2'>
                                    <label>
                                        <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>19</span>
                                        Dan says that when storing mushrooms, people should
                                        <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques19 != "" && UserData.ques19 != "A" ? "(A)" : ""}</i>
                                    </label>
                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques19' />
                                        <input className='' type="radio" value="B" name='ques19' />
                                        <input className='' type="radio" value="C" name='ques19' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' >keep them in the fridge for no more than two days.</i>
                                        <i className='mt-[-3px] sm:mt-[0px]'> keep them in a brown bag in a dark room.</i>
                                        <i className='mt-[-3px] sm:mt-[0px]'>leave them for a period after washing them.</i>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='text-justify flex flex-wrap mb-2'>
                                    <label>
                                        <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>20</span>
                                        What does Dan say about trying new varieties of mushrooms?
                                        <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques20 != "" && UserData.ques20 != "A" ? "(A)" : ""}</i>
                                    </ label>
                                </div>
                                <div className='flex gap-4 pl-2'>
                                    <div className="flex flex-col gap-6">
                                        <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                        <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                        <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                    </div>
                                    <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                        <input className='' type="radio" value="A" name='ques20' />
                                        <input className='' type="radio" value="B" name='ques20' />
                                        <input className='' type="radio" value="C" name='ques20' />
                                    </div>

                                    <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
                                        <i className='' >Experiment with different recipes.</i>
                                        <i className='mt-[3px] sm:mt-[0px]'>Expect some to have a strong taste.</i>
                                        <i className='mt-[3px] sm:mt-[0px]'>Cook them for a long time.</i>
                                    </div>
                                </div>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part3.mp3?_=3") }}
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
                        Which TWO opinions about the Luddites do the students express?<br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className='mb-3'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>21</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques21 != "" && UserData.ques21 != "A" ? "(A)" : ""}</i>
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
                                    <i className='' >Their actions were ineffective.</i>
                                    <i className=''> They are still influential today.</i>
                                    <i className=''>They have received unfair criticism.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>22</span>

                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques22 != "" && UserData.ques22 != "B" ? "(B)" : ""}</i>
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
                                    <i className='' > They were proved right.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>Their attitude is understandable.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>the contradictions in them</i>
                                </div>
                            </div>
                        </div>

                        <div className="Q-articles">
                            <h5>
                                Questions 23-24<br />
                                Which TWO predictions about the future of work are the students doubtful about?</h5> <br /><br />
                        </div>

                        <div className='mb-3'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>23</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques23 != "" && UserData.ques23 != "B" ? "(B)" : ""}</i>
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
                                    <i className='' >Work will be more rewarding.</i>
                                    <i className=''> Unemployment will fall</i>
                                    <i className=''> People will want to delay retiring.</i>
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>24</span>
                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-3" && UserData.ques24 != "" && UserData.ques24 != "B" ? "(B)" : ""}</i>
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
                                    <i className='' >came to the wrong conclusion.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'> Working hours will be shorter.</i>
                                    <i className='mt-[3px] sm:mt-[0px]'>People will change jobs more frequently.</i>
                                </div>
                            </div>
                        </div>






                        <div className="Q-articles">
                            <h5>Questions 25 - 30 </h5> <br />
                            What comment do the students make about each of the following jobs?<br /> <br />
                            Choose SIX answers from the box and write the correct letter, A-G, next to Questions 25-30.<br /> <br />
                            <h5>Comments</h5>
                            <i className='p-3 font-bold'>

                                A   These jobs are likely to be at risk.<br /> <br />

                                B   Their role has become more interesting in recent years.<br /> <br />

                                C   The number of people working in this sector has fallen dramatically.<br /> <br />

                                D   This job will require more qualifications.<br /> <br />

                                E   Higher disposable income has led to a huge increase in jobs.<br /> <br />

                                F   There is likely to be a significant rise in demand for this service.<br /> <br />

                                G   Both employment and productivity have risen.<br /> <br />
                            </i>
                            <h5>Jobs</h5>
                        </div> <br /> <br />

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>25</span>
                            <label htmlFor="Name"> ●   Accountants </label>
                            <input type="text" name='ques25' onChange={handleValueChange} className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques25 != "G" && "text-red-600"}
                                    ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques25 != "" && UserData.ques25 == "G" && "text-green-700"}
                            `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques25 != "" && UserData.ques25 != "G" ? "(G)" : ""}
                            </i>
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>26</span>
                            <label htmlFor="Name"> ●  Hairdressers</label>
                            <input type="text" name='ques26' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques26 != "E" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques26 != "" && UserData.ques26 == "E" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques26 != "" && UserData.ques26 != "E" ? "(E)" : ""}
                            </i>
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>27</span>
                            <label htmlFor="Name"> ●   Administrative staff </label>
                            <input type="text" name='ques27' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques27 != "B" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques27 != "" && UserData.ques27 == "B" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques27 != "" && UserData.ques27 != "B" ? "(B)" : ""}
                            </i>
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>28</span>
                            <label htmlFor="Name"> ●  Agricultural workers  </label>
                            <input type="text" name='ques28' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques28 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques28 != "" && UserData.ques28 == "C" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques28 != "" && UserData.ques28 != "C" ? "(C)" : ""}
                            </i>
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>29</span>
                            <label htmlFor="Name"> ●    Care workers </label>
                            <input type="text" name='ques29' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques29 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques29 != "" && UserData.ques29 == "F" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques29 != "" && UserData.ques29 != "F" ? "(F)" : ""}
                            </i>
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>30</span>
                            <label htmlFor="Name"> ●  Bank clerks  </label>
                            <input type="text" name='ques30' onChange={handleValueChange} className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques30 != "A" && "text-red-600"}
                               ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques30 != "" && UserData.ques30 == "A" && "text-green-700"}
                            `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques30 != "" && UserData.ques30 != "A" ? "(A)" : ""}
                            </i>
                        </div><br />


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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part4.mp3?_=4") }}
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
                        <h5 className='text-center mt-2 text-inherit'>Space Traffic Management</h5> <br /> <br />
                    </div>
                    <h5>A Space Traffic Management system <br />
                        ●   is a concept similar to Air Traffic Control, but for satellites rather than planes.</h5> <br />

                    <div className="Q-question">
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   would aim to set up legal and </label>
                            <span className='Numbers'>31</span>
                            <input type="text" name='ques31' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques31.match(/technical/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques31 != "" && UserData.ques31 == "technical" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques31 != "" && !UserData.ques31.match(/technical/gi) ? "(technical)" : ""}
                            </i>
                            <p>ways of improving safety. <br />
                                ●   does not actually exist at present.</p>
                        </div><br />
                        <h5 className='text-start mt-2 text-inherit'>Problems in developing effective Space Traffic Management</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   Satellites are now quite</label>
                            <span className='Numbers'>32</span>
                            <input type="text" name='ques32' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques32.match(/cheep/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques32 != "" && UserData.ques32 == "cheep" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques32 != "" && !UserData.ques32.match(/cheep/gi) ? "(cheep)" : ""}
                            </i>
                            <p> and therefore more widespread e.g. there are</p>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">constellations made up of</label>
                            <span className='Numbers'>33</span>
                            <input type="text" name='ques33' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques33.match(/thousands/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques33 != "" && UserData.ques33 == "thousands" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques33 != "" && !UserData.ques33.match(/thousands/gi) ? "(thousands)" : ""}
                            </i>
                            <p className='text-justify'>of satellites</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   At present, satellites are not required to transmit information to help with their</label>
                            <span className='Numbers'>34</span>
                            <input type="text" name='ques34' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques34.match(/identification/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques34 != "" && UserData.ques34 == "identification" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques34 != "" && !UserData.ques34.match(/identification/gi) ? "(identification)" : ""}
                            </i>
                        </div><br /> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   There are few systems for</label>
                            <span className='Numbers'>35</span>
                            <input type="text" name='ques35' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques35.match(/tracking/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques35 != "" && UserData.ques35 == "tracking" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques35 != "" && !UserData.ques35.match(/tracking/gi) ? "(tracking)" : ""}
                            </i>
                            <p> satellites. <br />
                                ●   Small pieces of debris may be difficult to identify.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   Operators may be unwilling to share details of satellites used for</label>
                            <span className='Numbers'>36</span>
                            <input type="text" name='ques36' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques36.match(/military/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques36 != "" && UserData.ques36 == "military" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques36 != "" && !UserData.ques36.match(/military/gi) ? "(military)" : ""}
                            </i>
                            <p>or commercial reasons.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   It may be hard to collect details of the object’s </label>
                            <span className='Numbers'>37</span>
                            <input type="text" name='ques37' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques37.match(/location/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques37 != "" && UserData.ques37 == "location" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques37 != "" && !UserData.ques37.match(/location/gi) ? "(location)" : ""}
                            </i>
                            <p>at a given time.</p>
                        </div>
                        <div className="question flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   Scientists can only make a</label>
                            <span className='Numbers'>38</span>
                            <input type="text" name='ques38' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques38.match(/prediction/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques38 != "" && UserData.ques38 == "prediction" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques38 != "" && !UserData.ques38.match(/prediction/gi) ? "(prediction)" : ""}
                            </i>
                            <p className='text-justify'> about where the satellite will go.</p>
                        </div> <br />
                        <h5>Solutions</h5>
                        <i>●   Common standards should be agreed on for the presentation of information.</i>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   The information should be combined in one</label>
                            <span className='Numbers'>39</span>
                            <input type="text" name='ques39' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques39.match(/database/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques39 != "" && UserData.ques39 == "database" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques39 != "" && !UserData.ques39.match(/database/gi) ? "(database)" : ""}
                            </i>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   A coordinated system must be designed to create </label>
                            <span className='Numbers'>40</span>
                            <input type="text" name='ques40' onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-3" && !UserData.ques40.match(/trust/gi) && "text-red-600"}
                                ${ListeningShowAnswer == "Cambridge-test-3" && UserData.ques40 != "" && UserData.ques40 == "trust" && "text-green-700"}
                                `} />
                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                {ListeningShowAnswer == "Cambridge-test-3" && UserData.ques40 != "" && !UserData.ques40.match(/trust/gi) ? "(trust)" : ""}
                            </i>
                            <p>in its users.</p>
                        </div>
                    </div>
                </div>


            </div>


        </section >
    )
}



export default ListeningPage