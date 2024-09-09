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
      // for show and hide all notePad---- 
      // let testItems = localStorage.getItem("ShowAnsByTest");
      const { ListeningShowAnswer, setListeningShowAnswer } = useStateContext();

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
            ["park"],
            ["blue"],
            ["reference"],
            ["story"],
            ["rain"],
            ["snack"],
            ["medication"],
            ["helmet"],
            ["tent"],
            ["199"],
            ["A"], ["A"], ["B"], ["A"], ["D"], ["F"], ["A"], ["H"], ["C"], ["G"],
            ["C"], ["A"], ["C"], ["B"], ["C"], ["A"], ["B"], ["A"], ["A"], ["C"],
            ["grandmother"],
            ["decade"],
            ["equipment"],
            ["economic"],
            ["basic"],
            ["round"],
            ["bone"],
            ["rough"],
            ["style"],
            ["sheep"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test3-Part1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 11</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test3-Part1.mp3?_=1") }}
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
                                    Write ONE WORD AND/OR A NUMBER for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 text-inherit'>JUNIOR CYCLE CAMP</h5> <br /> <br />
                                    <h5>The course focuses on skills and safety<br /> <br />
                                          ●   Charlie would be placed in Level 5.</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   First of all, children at this level are taken to practise in a</label>
                                          <span className='Numbers'>1</span>
                                          <input type="text" name='ques1' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques1.match(/park/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques1 != "" && UserData.ques1 == "park" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques1 != "" && !UserData.ques1.match(/park/gi) ? "(park)" : ""}
                                          </i>
                                    </div> <br />
                                    <h5>Instructors</h5>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Instructors wear
                                                <span className='Numbers'>2</span>
                                                <input type="text" name='ques2' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques2.match(/blue/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques2 != "" && UserData.ques2 == "blue" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques2 != "" && !UserData.ques2.match(/blue/gi) ? "(blue)" : ""}
                                                </i>
                                                shirts.</label>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> A</label>
                                          <span className='Numbers'>3</span>
                                          <input type="text" name='ques3' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques3.match(/reference/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques3 != "" && UserData.ques3 == "reference" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques3 != "" && !UserData.ques3.match(/reference/gi) ? "(reference)" : ""}
                                          </i>
                                          <p> is required and training is given..</p>
                                    </div> <br />
                                    <h5>Classes</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   The size of the classes is limited. <br />

                                                ●   There are quiet times during the morning for a
                                                <span className='Numbers'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques4.match(/story/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques4 != "" && UserData.ques4 == "story" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques4 != "" && !UserData.ques4.match(/story/gi) ? "(story)" : ""}
                                                </i>
                                                or a game.</label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Classes are held even if there is </label>
                                          <span className='Numbers'>5</span>
                                          <input type="text" name='ques5' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques5.match(/rain/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques5 != "" && UserData.ques5 == "rain" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques5 != "" && !UserData.ques5.match(/rain/gi) ? "(rain)" : ""}
                                          </i>
                                    </div> <br /> <br />
                                    <h5>What to bring</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6">●   a change of clothing<br />
                                                ●   a
                                                <span className='Numbers'>6</span>
                                                <input type="text" name='ques6' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques6.match(/snack/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques6 != "" && UserData.ques6 == "snack" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques6 != "" && !UserData.ques6.match(/snack/gi) ? "(snack)" : ""}
                                                </i>
                                          </label>
                                    </div> <br />
                                    <h5>●   shoes (not sandals) <br />
                                          ●   Charlie’s</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>7</span>
                                          <input type="text" name='ques7' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques7.match(/medication/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques7 != "" && UserData.ques7 == "medication" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques7 != "" && !UserData.ques7.match(/medication/gi) ? "(medication)" : ""}
                                          </i>
                                    </div> <br />
                                    <h5>Day 1</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Charlie should arrive at 9.20 am on the first day.<br />
                                                ●   Before the class, his
                                                <span className='Numbers'>8</span>
                                                <input type="text" name='ques8' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques8.match(/helmet/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques8 != "" && UserData.ques8 == "helmet" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques8 != "" && !UserData.ques8.match(/helmet/gi) ? "(helmet)" : ""}
                                                </i>
                                                will be checked..</label>
                                    </div> <br />
                                    <h5>Other information</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   He should then go to the</label>
                                          <span className='Numbers'>9</span>
                                          <input type="text" name='ques9' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques9.match(/tent/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques9 != "" && UserData.ques9 == "tent" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques9 != "" && !UserData.ques9.match(/tent/gi) ? "(tent)" : ""}
                                          </i>
                                          <p>to meet his class instructor.</p>
                                    </div> <br />
                                    <h5>Cost</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   The course costs $</label>
                                          <span className='Numbers'>10</span>
                                          <input type="text" name='ques10' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques10.match(/199/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques10 != "" && UserData.ques10 == "199" && "text-green-700"}
                                                
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques10 != "" && !UserData.ques10.match(/199/gi) ? "(199)" : ""}
                                          </i>
                                          <p>per week</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test3-Part2.mp3?_=2") }}
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
                                    According to Megan, what are the TWO main advantages of working in the agriculture and horticulture sectors?
                                    .<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'>
                                                <span className='Numbers mr-1 mb-2'>11</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques11 != "" && UserData.ques11 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >the active lifestyle</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  a private home..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> the above-average salaries </i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>12</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques12 != "" && UserData.ques12 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >  the flexible working opportunities</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>the opportunities for overseas travel</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>the chance to be in a natural environment</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="Q-articles">
                                          <h5>Questions 13 and 14</h5> <br />
                                          Questions 11 and 12<br /><br />
                                          Which TWO of the following are likely to be disadvantages for people working outdoors?
                                          .<br /> <br />
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>13</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques13 != "" && UserData.ques13 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' > the increasing risk of accidents.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>being in a very quiet location</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> dissatisfaction with the menus.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>14</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques14 != "" && UserData.ques14 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' > difficult weather conditions at times</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>the cost of housing</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>the level of physical fitness required</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />

                                    <div className="Q-articles mt-2">
                                          <h5>
                                                Questions 15-20<br /><br />
                                                What information does Megan give about each of the following job opportunities? <br /><br />
                                                Choose SIX answers from the box and write the correct letter, A-H, next to Questions 15-20.<br /><br />
                                          </h5> <br /><br />
                                          <h5 className='text-center mt-3 mb-3'>Information</h5>
                                          <i className='font-bold mt-3 mb-3 text-center'>
                                                A   not a permanent job<br /><br />

                                                B   involves leading a team<br /><br />
                                                C   experience not essential<br /><br />
                                                D   intensive work but also fun<br /><br />
                                                E   chance to earn more through overtime<br /><br />
                                                F   chance for rapid promotion<br /><br />
                                                G   accommodation available<br /><br />
                                                H   local travel involved<br /><br />
                                          </i>
                                          <h5 className='mt-3 mb-3'>Job opportunities</h5>

                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="Name">   Fresh food commercial manage</label>
                                          <input type="text" name='ques15' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques15 != "D" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques15 != "" && UserData.ques15 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques15 != "" && UserData.ques15 != "D" ? "(D)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="Name">  Agronomist</label>
                                          <input type="text" name='ques16' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques16 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques16 != "" && UserData.ques16 == "F" && "text-green-700"}
                                                
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques16 != "" && UserData.ques16 != "F" ? "(F)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="Name">  Fresh produce buyer   </label>
                                          <input type="text" name='ques17' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques17 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques17 != "" && UserData.ques17 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques17 != "" && UserData.ques17 != "A" ? "(A)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="Name">  Garden centre sales manager </label>
                                          <input type="text" name='ques18' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques18 != "H" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques18 != "" && UserData.ques18 == "H" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques18 != "" && UserData.ques18 != "H" ? "(H)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="Name">   Tree technician </label>
                                          <input type="text" name='ques19' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques19 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques19 != "" && UserData.ques19 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques19 != "" && UserData.ques19 != "C" ? "(C)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="Name"> Farm worker</label>
                                          <input type="text" name='ques20' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques20 != "G" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques20 != "" && UserData.ques20 == "G" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques20 != "" && UserData.ques20 != "G" ? "(G)" : ""}
                                          </i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test3-Part3.mp3?_=3") }}
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
                              <div className="Q-articles font-bold">
                                    <h5>PART 3 </h5> <br />
                                    Questions 21 and 22<br /> <br />
                                    <h5 className='text-center'>Which TWO points does Adam make about his experiment on artificial sweeteners?<br /> <br /></h5>
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>21</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques21 != "" && UserData.ques21 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >The results were what he had predicted.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> The experiment was simple to set up.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> A large sample of people was tested..</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>22</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques22 != "" && UserData.ques22 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >The subjects were unaware of what they were drinking..</i>
                                                      <i className='mt-[-10px] sm:mt-[0px]'>The test was repeated several times for each person..</i>
                                                      <i className='mt-[-9px] sm:mt-[0px]'> It happens more often.k</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="Q-articles mt-3">
                                          <h5>Questions 23 and 24 </h5> <br />
                                          <h5 className=''>Which TWO problems did Rosie have when measuring the fat content of nuts?<br /> <br /></h5>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>23</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques23 != "" && UserData.ques23 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >She used the wrong sort of nuts.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> She used an unsuitable chemical..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> She did not grind the nuts finely enough.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>24</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques24 != "" && UserData.ques24 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >  The information on the nut package was incorrect.</i>
                                                      <i className='mt-[-10px] sm:mt-[0px]'> The weighing scales may have been unsuitable.</i>
                                                      <i className='mt-[-10px] sm:mt-[0px]'> self-assessment</i>
                                                </div>
                                          </div>
                                    </div>



                                    <div className="Q-articles mt-3">
                                          <h5>
                                                Questions 25-30<br /> <br />
                                                Choose the correct letter, A, B or C.<br /><br />
                                          </h5> <br /><br />

                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>25</span>
                                                Adam suggests that restaurants could reduce obesity if their menus
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques25 != "" && UserData.ques25 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >offered fewer options.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>had more low-calorie foods..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  were organised in a particular way</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>26</span>
                                                The students agree that food manufacturers deliberately
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques26 != "" && UserData.ques26 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >make calorie counts hard to understand..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>fail to provide accurate calorie counts..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>use ineffective methods to reduce calories.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>27</span>
                                                What does Rosie say about levels of exercise in England?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques27 != "" && UserData.ques27 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >The amount recommended is much too low..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Most people overestimate how much they do.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Women now exercise more than they used to.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>28</span>
                                                Adam refers to the location and width of stairs in a train station to illustrate.
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques28 != "" && UserData.ques28 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='mt-[-7px] sm:mt-[0px]'>practical changes that can influence people’s behaviour..</i>
                                                      <i className='mt-[-9px] sm:mt-[0px]'>methods of helping people who have mobility problems.</i>
                                                      <i className='mt-[-10px] sm:mt-[0px]'>ways of preventing accidents by controlling crowd movement.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>29</span>
                                                What do the students agree about including reference to exercise in their presentation?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques29 != "" && UserData.ques29 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >They should probably leave it out.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>They need to do more research on it.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>They should discuss this with their tutor.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>30</span>
                                                What are the students going to do next for their presentation?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-11" && UserData.ques30 != "" && UserData.ques30 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >prepare some slides for it.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>find out how long they have for it.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> decide on its content and organisation</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test3-Part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-4 mb-2 text-inherit'>Hand knitting</h5> <br /> <br />
                              </div>
                              <h5>Interest in knitting</h5> <br /> <br />
                              <i>●   Knitting has a long history around the world.</i> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   We imagine someone like a </label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques31.match(/grandmother/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques31 != "" && UserData.ques31 == "grandmother" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques31 != "" && !UserData.ques31.match(/grandmother/gi) ? "(grandmother)" : ""}
                                          </i>
                                          <p>knitting.</p>

                                    </div><br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name">● A</label> </label>
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques32.match(/decade/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques32 != "" && UserData.ques32 == "decade" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques32 != "" && !UserData.ques32.match(/decade/gi) ? "(decade)" : ""}
                                          </i>
                                          <p>ago, knitting was expected to disappear. <br />

                                                ●   The number of knitting classes is now increasing.</p>
                                    </div> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   People are buying more</label>
                                          <span className='Numbers'>33</span>
                                          <input type="text" name='ques33' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques33.match(/equipment/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques33 != "" && UserData.ques33 == "equipment" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques33 != "" && !UserData.ques33.match(/equipment/gi) ? "(equipment)" : ""}
                                          </i>
                                          <p>for knitting nowadays</p>
                                    </div> <br />
                                    <h5>Benefits of knitting</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   gives support in times o </label>
                                          <span className='Numbers'>34</span>
                                          <input type="text" name='ques34' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques34.match(/economic/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques34 != "" && UserData.ques34 == "economic" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques34 != "" && !UserData.ques34.match(/economic/gi) ? "(economic)" : ""}
                                          </i>
                                          <p>difficulty</p>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   requires only </label>
                                          <span className='Numbers'>35</span>
                                          <input type="text" name='ques35' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques35.match(/basic/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques35 != "" && UserData.ques35 == "basic" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques35 != "" && !UserData.ques35.match(/basic/gi) ? "(basic)" : ""}
                                          </i>
                                          <p>skills and little money to start <br />
                                                ●   reduces stress in a busy life</p>
                                    </div> <br />
                                    <h5>Early knitting</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   The origins are not known.

                                                ●   Findings show early knitted items to be
                                                <span className='Numbers'>36</span>
                                                <input type="text" name='ques36' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques36.match(/round/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques36 != "" && UserData.ques36 == "round" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques36 != "" && !UserData.ques36.match(/round/gi) ? "(round)" : ""}
                                                </i>
                                                in shape.</label>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   The first needles were made of natural materials such as wood and</label>
                                          <span className='Numbers'>37</span>
                                          <input type="text" name='ques37' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques37.match(/bone/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques37 != "" && UserData.ques37 == "bone" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques37 != "" && !UserData.ques37.match(/bone/gi) ? "(bone)" : ""}
                                          </i>

                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Early yarns fel●   Early yarns fel</label>
                                          <span className='Numbers'>38</span>
                                          <input type="text" name='ques38' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques38.match(/rough/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques38 != "" && UserData.ques38 == "rough" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques38 != "" && !UserData.ques38.match(/rough/gi) ? "(rough)" : ""}
                                          </i>
                                          <p>to touch.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Wool became the most popular yarn for spinning. <br />
                                                ●   Geographical areas had their own
                                                <span className='Numbers'>39</span>
                                                <input type="text" name='ques39' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques39.match(/style/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques39 != "" && UserData.ques39 == "style" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques39 != "" && !UserData.ques39.match(/style/gi) ? "(style)" : ""}
                                                </i>
                                                of knitting.</label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Everyday tasks like looking afte</label>
                                          <span className='Numbers'>40</span>
                                          <input type="text" name='ques40' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-11" && !UserData.ques40.match(/sheep/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-11" && UserData.ques40 != "" && UserData.ques40 == "sheep" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-11" && UserData.ques40 != "" && !UserData.ques40.match(/sheep/gi) ? "(sheep)" : ""}
                                          </i>
                                          <p>were done while knitting.</p>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage