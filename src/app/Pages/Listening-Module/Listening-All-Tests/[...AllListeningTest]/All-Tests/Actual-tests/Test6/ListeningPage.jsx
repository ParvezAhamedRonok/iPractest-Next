"use client"
import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai"
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
            ["quiet"],
            ["impolite"],
            ["rarely"],
            ["somke"],
            ["promptly"],
            ["co-operate"],
            ["attend meeting"],
            ["follow rules"],
            ["strictly forbidden"],
            ["be done"],
            ["steps"],
            ["danger"],
            ["respond"],
            ["unconscious"],
            ["blockages"],
            ["irregular"],
            ["medics"],
            ["C"], ["A"], ["A"], ["C"], ["A"], ["B"], ["C"], ["C"],
            ["ensure"],
            ["deposited"],
            ["display"],
            ["distribute"],
            ["reward"],
            // , ["ABCDE"], // extra one thik kort hobe
            ["B"], ["B"], ["B"],
            ["effectiveness"],
            ["liquid"],
            ["pipeword"],
            ["a quarter"],
            ["suffocation"],
            ["double"],
            ["heavy metals"]

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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-06-Section1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 06</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-06-Section1.mp3?_=1") }}
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
                              <div className="Q-articles p-3">
                                    <h5>PART 1 </h5> <br />
                                    Questions 1-6 <br />
                                    Complete the table. <br />
                                    Write ONE WORD ONLY for each answer. <br />
                                    <h5 className='text-center mt-2 text-inherit'>Name of new tenant: Anders (EXAMPLE)</h5> <br />
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Good Points About Him</h5>
                                          <h5>Bad Points About Him</h5>
                                    </div>

                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Behaviour</h5>
                                          <div className="question mt-2 ml-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques1">He is</label>
                                                <span className='Numbers'>1</span>
                                                <input type="text" name='ques1' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques1.match(/quiet/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques1 != "" && UserData.ques1 == "quiet" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques1 != "" && !UserData.ques1.match(/quiet/gi) ? "(quiet)" : ""}
                                                </i>
                                          </div>
                                          <div className="question mt-2 ml-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques2">He is</label>
                                                <span className='Numbers'>2</span>
                                                <input type="text" name='ques2' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques2.match(/impolite/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques2 != "" && UserData.ques2 == "impolite" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques2 != "" && !UserData.ques2.match(/impolite/gi) ? "(impolite)" : ""}
                                                </i>
                                          </div>
                                    </div>

                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>His Friends</h5>
                                          <div className="question mt-2 ml-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques3">His friends visit</label>
                                                <span className='Numbers'>3</span>
                                                <input type="text" name='ques3' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques3.match(/rarely/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques3 != "" && UserData.ques3 == "rarely" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques3 != "" && !UserData.ques3.match(/rarely/gi) ? "(rarely)" : ""}
                                                </i>
                                          </div>
                                          <div className="question mt-2 ml-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques4">they</label>
                                                <span className='Numbers'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques4.match(/somke/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques4 != "" && UserData.ques4 == "somke" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques4 != "" && !UserData.ques4.match(/somke/gi) ? "(somke)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>other</h5>
                                          <div className="question mt-2 ml-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques5">He pays rent</label>
                                                <span className='Numbers'>5</span>
                                                <input type="text" name='ques5' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques5.match(/promptly/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques5 != "" && UserData.ques5 == "promptly" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques5 != "" && !UserData.ques5.match(/promptly/gi) ? "(promptly)" : ""}
                                                </i>
                                          </div>
                                          <div className="question mt-2 ml-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques6">He doesn’t </label>
                                                <span className='Numbers'>6</span>
                                                <input type="text" name='ques6' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques6.match(/co-operate/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques6 != "" && UserData.ques6 == "co-operate" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques6 != "" && !UserData.ques6.match(/co-operate/gi) ? "(co-operate)" : ""}
                                                </i>
                                          </div>
                                    </div>

                              </div>
                              <div className="Q-articles p-2 font-bold">
                                    <h5>Questions 7-10</h5> <br />
                                    Complete the notes. <br />
                                    Write NO MORE THAN TWO WORDS for each answer.<br />
                                    Issues to Discuss <br /> <br />
                              </div>
                              <div className="Questions p-2">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques7">Communication:</label>
                                          <span className='Numbers'>7</span>
                                          <input type="text" name="ques7" id="ques7" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques7.match(/attend meeting/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques7 != "" && UserData.ques7 == "attend meeting" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques7 != "" && !UserData.ques7.match(/attend meeting/gi) ? "(attend meeting)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques8">Friends:</label>
                                          <span className='Numbers'>8</span>
                                          <input type="text" name="ques8" id="ques8" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques8.match(/follow rules/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques8 != "" && UserData.ques8 == "follow rules" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques8 != "" && !UserData.ques8.match(/follow rules/gi) ? "(follow rules)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques9">Cigarettes:</label>
                                          <span className='Numbers'>9</span>
                                          <input type="text" name="ques9" id="ques9" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques9.match(/strictly forbidden/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques9 != "" && UserData.ques9 == "strictly forbidden" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques9 != "" && !UserData.ques9.match(/strictly forbidden/gi) ? "(strictly forbidden)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques10">Cleaning: must</label>
                                          <span className='Numbers'>10</span>
                                          <input type="text" name="ques10" id="ques10" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques10.match(/be done/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques10 != "" && UserData.ques10 == "be done" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques10 != "" && !UserData.ques10.match(/be done/gi) ? "(be done)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-06-Section2.mp3?_=2") }}
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
                                    Questions 11-17 <br /> <br />
                                    Complete the sentences<br /><br />
                                    Write ONE WORD ONLY for each answer.<br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques11">It is important for everyone to know simple first aid
                                                <span className='Numbers'>11</span>
                                                <input type="text" name="ques11" id="ques11" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques11.match(/steps/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques11 != "" && UserData.ques11 == "steps" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques11 != "" && !UserData.ques11.match(/steps/gi) ? "(steps)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques12" className='flex flex-wrap '>After an accident, one must firstly be aware of
                                                <span className='Numbers'>12</span>
                                                <input type="text" name="ques12" id="ques12" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques12.match(/danger/gi) && "text-red-600"}
                                                      
                                                           
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques12 != "" && UserData.ques12 == "danger" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques12 != "" && !UserData.ques12.match(/danger/gi) ? "(danger)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques13" className='flex flex-wrap '>After that, the first-aider must
                                                <span className='Numbers'>13</span>
                                                <input type="text" name="ques13" id="ques13" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques13.match(/respond/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques13 != "" && UserData.ques13 == "respond" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques13 != "" && !UserData.ques13.match(/respond/gi) ? "(respond)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques14" className='flex flex-wrap '>Clearing of airways may not happen when patients are
                                                <span className='Numbers'>14</span>
                                                <input type="text" name="ques14" id="ques14" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques14.match(/unconscious/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques14 != "" && UserData.ques14 == "unconscious" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques14 != "" && !UserData.ques14.match(/unconscious/gi) ? "(unconscious)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques15" className='flex flex-wrap '>The mouth must be checked for
                                                <span className='Numbers'>15</span>
                                                <input type="text" name="ques15" id="ques15" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques15.match(/blockages/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques15 != "" && UserData.ques15 == "blockages" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques15 != "" && !UserData.ques15.match(/blockages/gi) ? "(blockages)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques16" className='flex flex-wrap '>CPR must be done if breathing is absent or
                                                <span className='Numbers'>16</span>
                                                <input type="text" name="ques16" id="ques16" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques16.match(/irregular/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques16 != "" && UserData.ques16 == "irregular" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques16 != "" && !UserData.ques16.match(/irregular/gi) ? "(irregular)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques17" className='flex flex-wrap '>CPR must be done up to the arrival of
                                                <span className='Numbers'>17</span>
                                                <input type="text" name="ques17" id="ques17" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques17.match(/medics/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques17 != "" && UserData.ques17 == "medics" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques17 != "" && !UserData.ques17.match(/medics/gi) ? "(medics)" : ""}
                                                </i>
                                          </label>
                                    </div>

                              </div>
                              <div className="Q-articles">
                                    <h5>Questions 18-20 </h5> <br />
                                    Choose THREE answers from the list and write the correct letter, A-G, next to the questions 18-20. <br /> <br />
                                    <h5>Which THREE pieces of advice does the first-aid officer say are most important?</h5> <br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques18"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>18</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques18 != "" && UserData.ques18 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques18' />
                                                      <i className='' >Have proper equipment </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques18' />
                                                      <i className=''> Give regular first-aid training.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques18' />
                                                      <i className=''>Have a safety officer</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques19"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>19</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques19 != "" && UserData.ques19 != "A" ? "(A)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques19' />
                                                      <i className='' > Instil safe behaviour </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques19' />
                                                      <i className=''> Put posters on walls.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques19' />
                                                      <i className=''>The future is unlucky</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques20"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>20</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques20 != "" && UserData.ques20 != "A" ? "(A)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques20' />
                                                      <i className='' > Have safety meetings </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques20' />
                                                      <i className=''>  Have first-aid boxes.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques20' />
                                                      <i className=''>see limitations on the capabilities of AI.</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-06-Section3.mp3?_=3") }}
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
                                    Questions 21-25<br />
                                    Choose the correct letter, A, B, or C.<br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>21</span>Nicole received the best information from the
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques21 != "" && UserData.ques21 != "C" ? "(C)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques21' />
                                                      <i className='' >staff </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques21' />
                                                      <i className=''> students.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques21' />
                                                      <i className=''>cleaners.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>22</span>The product used most wastefully was
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques22 != "" && UserData.ques22 != "A" ? "(A)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques22' />
                                                      <i className='' >copying paper. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques22' />
                                                      <i className=''> Plastic.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques22' />
                                                      <i className=''>paper plates and cups.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>The proportion of interviewed people who expressed concern over waste was
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques23 != "" && UserData.ques23 != "B" ? "(B)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques23' />
                                                      <i className='' >30% </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques23' />
                                                      <i className=''> 45%</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques23' />
                                                      <i className=''>55%.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>24</span>The proportion who claim they take action over this problem was
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques24 != "" && UserData.ques24 != "C" ? "(C)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques24' />
                                                      <i className='' >10% </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques24' />
                                                      <i className=''>one third</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques24' />
                                                      <i className=''>one half</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>25</span>Nicole thinks many people do nothing because they are
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques25 != "" && UserData.ques25 != "C" ? "(C)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques25' />
                                                      <i className='' >lazy </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques25' />
                                                      <i className=''>   uncaring..</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques25' />
                                                      <i className=''>uninformed.</i>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                              <div className="Q-articles mt-3 mb-2">
                                    <h5>Questions 26-30</h5> <br />
                                    Complete the flowchart.<br />
                                    Write ONE WORD ONLY for each answer.<br /> <br />
                              </div>
                              <div className="Questions p-3 w-full grid justify-center align-middle">
                                    <h6>Procedure to Reduce Copying Waste</h6> <br /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>26</span>
                                          <input type="text" name="ques26" id="ques26" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques26.match(/ensure/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques26 != "" && UserData.ques26 == "ensure" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques26 != "" && !UserData.ques26.match(/ensure/gi) ? "(ensure)" : ""}
                                          </i>
                                          <label htmlFor="ques26">that the staff do double-sided copying.</label>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques27">Unwanted copies are </label>
                                          <span className='Numbers'>27</span>
                                          <input type="text" name="ques27" id="ques27" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques27.match(/deposited/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques27 != "" && UserData.ques27 == "deposited" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques27 != "" && !UserData.ques27.match(/deposited/gi) ? "(deposited)" : ""}
                                          </i>
                                          <p>  into a special recycling tray.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>28</span>
                                          <input type="text" name="ques28" id="ques28" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques28.match(/display/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques28 != "" && UserData.ques28 == "display" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques28 != "" && !UserData.ques28.match(/display/gi) ? "(display)" : ""}
                                          </i>
                                          <p>  these clearly, for easy reuse.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <h5>Stack them in a special copying tray each morning.</h5> <br />
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>29</span>
                                          <input type="text" name="ques29" id="ques29" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques29.match(/distribute/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques29 != "" && UserData.ques29 == "distribute" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques29 != "" && !UserData.ques29.match(/distribute/gi) ? "(distribute)" : ""}
                                          </i>
                                          <p>codes which allow each user to access this tray.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques30">Give highest users a </label>
                                          <span className='Numbers'>30</span>
                                          <input type="text" name="ques30" id="ques30" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques30.match(/reward/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-6" && UserData.ques30 != "" && UserData.ques30 == "reward" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-6" && UserData.ques30 != "" && !UserData.ques30.match(/reward/gi) ? "(reward)" : ""}
                                          </i>
                                          <p>(e.g. cinema tickets).</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-06-Section4.mp3?_=4") }}
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
                              <div className="Q-articles">
                                    <h5>PART 4 </h5> <br />
                                    Questions 31-33 <br />
                                    Choose the correct letter, A, B, or C. <br />
                              </div> <br /> <br />
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques31" className='flex'><span className='Numbers mr-1 mb-2'>31</span>Society cannot
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques31 != "" && UserData.ques31 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques31' />
                                                      <i className='' >find more coal and oil. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques31' />
                                                      <i className=''>  reduce waste C02.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques31' />
                                                      <i className=''> take C02 from power stations.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques32" className='flex'><span className='Numbers mr-1 mb-2'>32</span>Turning carbon dioxide into a solid
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques32 != "" && UserData.ques32 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques32' />
                                                      <i className='' > is slow but practical. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques32' />
                                                      <i className=''> can be made faster.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques32' />
                                                      <i className=''>cannot happen naturally.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques33" className='flex'><span className='Numbers mr-1 mb-2'>33</span>Seawater
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-6" && UserData.ques33 != "" && UserData.ques33 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques33' />
                                                      <i className='' >has lots of carbonic acid. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques33' />
                                                      <i className=''> has closely connected types of life.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques33' />
                                                      <i className=''> is highly acidic.</i>
                                                </div>
                                          </div>
                                    </div>
                              </div> <br /> <br />
                              <div className="Q-articles">
                                    <h5>Questions 34-40 </h5> <br />
                                    Complete the table. <br />
                                    Write NO MORE THAN TWO WORDS OR A NUMBER for each answer. <br /> <br />
                                    <h5>Three Problems of Geosequestration</h5>
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Risk of leaks</h5>
                                          <h5>Cost</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>34</span>
                                                <input type="text" name='ques34' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques34.match(/effectiveness/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques34 != "" && UserData.ques34 == "effectiveness" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques34 != "" && !UserData.ques34.match(/effectiveness/gi) ? "(effectiveness)" : ""}
                                                </i>
                                                <label htmlFor="ques1">still not proven</label>
                                          </div>
                                    </div>

                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques35">Gas would become</label>
                                                <span className='Numbers'>35</span>
                                                <input type="text" name='ques35' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques35.match(/liquid/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques35 != "" && UserData.ques35 == "liquid" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques35 != "" && !UserData.ques35.match(/liquid/gi) ? "(liquid)" : ""}
                                                </i>
                                          </div>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-1 box-border overflow-auto">
                                                <label htmlFor="ques36">expensive, particularly the</label>
                                                <span className='Numbers'>36</span>
                                                <input type="text" name='ques36' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques36.match(/pipeword/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques36 != "" && UserData.ques36 == "pipeword" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques36 != "" && !UserData.ques36.match(/pipeword/gi) ? "(pipeword)" : ""}
                                                </i>
                                          </div>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-1 box-border overflow-auto">
                                                <label htmlFor="ques37"> Require the plant to burn</label>
                                                <span className='Numbers'>37</span>
                                                <input type="text" name='ques37' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques37.match(/a quarter/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques37 != "" && UserData.ques37 == "a quarter" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques37 != "" && !UserData.ques37.match(/a quarter/gi) ? "(a quarter)" : ""}
                                                </i>
                                                <p>of its coal</p>
                                          </div>

                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <AiOutlineArrowDown className='test-4xl' /> <br />
                                          <AiOutlineArrowDown className='test-4xl' /> <br />
                                          <AiOutlineArrowDown className='test-4xl' /> <br />
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques38">risk of widespread</label>
                                                <span className='Numbers'>38</span>
                                                <input type="text" name='ques38' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques38.match(/suffocation/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques38 != "" && UserData.ques38 == "suffocation" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques38 != "" && !UserData.ques38.match(/suffocation/gi) ? "(suffocation)" : ""}
                                                </i>
                                          </div>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques39">Price of electricity could</label>
                                                <span className='Numbers'>39</span>
                                                <input type="text" name='ques39' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques39.match(/double/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques39 != "" && UserData.ques39 == "double" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques39 != "" && !UserData.ques39.match(/double/gi) ? "(double)" : ""}
                                                </i>
                                          </div>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques40">release of more Sulphur,
                                                      ash, and</label>
                                                <span className='Numbers'>40</span>
                                                <input type="text" name='ques40' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-6" && !UserData.ques40.match(/heavy metals/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-6" && UserData.ques40 != "" && UserData.ques40 == "heavy metals" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-6" && UserData.ques40 != "" && !UserData.ques40.match(/heavy metals/gi) ? "(heavy metals)" : ""}
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