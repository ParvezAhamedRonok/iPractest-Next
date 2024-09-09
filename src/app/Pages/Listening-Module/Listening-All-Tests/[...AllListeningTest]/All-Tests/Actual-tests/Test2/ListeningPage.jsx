"use client";
import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from 'next/image';
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
            ["Practical", "/", "practical"],
            ["Pizza", "/", "pizza"],
            ["light walking", "/", "Light walking"],
            ["Pine Park", "/", "pine park"],
            ["Fruit juice", "/", "fruit juice"],
            ["B"], ["I"], ["C"], ["B"], ["I"],
            ["Padded", "/", "padded"],
            ["Corners", "/", "corners"],
            ["Special skill", "/", "special skill"],
            ["Learning toys", "/", "learning toys"],
            ["Disinfec", "/", "disinfec"],
            ["Germs", "/", "germs"],
            ["C"], ["A"], ["C"], ["B"],
            ["21 Topic", "/", "tweenty topics", "/", "Tweenty topics"],
            ["Current", "/", "current"],
            ["Thesis", "/", "therir"],
            ["Outline", "/", "outline"],
            ["Progress", "/", "progress"],
            ["Aspects", "/", "aspects"],
            ["Real life", "/", "real life"],
            ["Necessity", "/", "necessity"],
            ["Style guide", "/", "style guide"],
            ["10%", "/", "ten percent", "/", "Ten percent"],
            ["A"], ["B"], ["C"],
            ["Revolution", "/", "revolution"],
            ["Sik", "/", "sik"],
            ["Attention", "/", "attention"],
            ["Bruno", "/", "bruno"],
            ["Motion", "/", "motion"],
            ["Bible", "/", "bible"],
            ["20%", "/", "tweenty percent", "/", "Tweenty percent"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 02</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>

                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section1.mp3?_=1") }}
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
                                    Questions 1-5 <br />
                                    Complete the sentences. <br />
                                    Write NO MORE THAN TWO WORDS for each answer. <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-start mt-2 text-inherit'>Example</h5> <br />
                                    <h5 className='text-start mt-2 text-inherit'>Peter consumes far too much soft drink</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> Peter and Mary’s diet will be both sensible and <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>1</span>
                                                <input type="text" name='ques1' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques1.match(/Practical/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-2" && UserData.ques1 != "" && UserData.ques1 == "Practical" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques1 != "" && !UserData.ques1.match(/Practical/gi) ? "(Practical)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">Every two months, they can eat
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>2</span>
                                                <input type="text" name='ques2' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques2.match(/Pizza/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-2" && UserData.ques2 != "" && UserData.ques2 == "Pizza" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques2 != "" && !UserData.ques2.match(/Pizza/gi) ? "(Pizza)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">On Saturdays, they will go<span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>3</span>
                                                <input type="text" name='ques3' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques3.match(/light walking/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-2" && UserData.ques3 != "" && UserData.ques3 == "light walking" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques3 != "" && !UserData.ques3.match(/light walking/gi) ? "(light walking)" : ""}
                                                </i>
                                          </label>
                                    </div><br /> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> This coming Saturday, they will go to <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques4.match(/Pine Park/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-2" && UserData.ques4 != "" && UserData.ques4 == "Pine Park" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques4 != "" && !UserData.ques4.match(/Pine Park/gi) ? "(Pine Park)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">In every meal, there will be <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>5</span>

                                                <input type="text" name='ques5' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques5.match(/Fruit juice/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-2" && UserData.ques5 != "" && UserData.ques5 == "Fruit juice" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques5 != "" && !UserData.ques5.match(/Fruit juice/gi) ? "(Fruit juice)" : ""}
                                                </i>
                                          </label>
                                    </div> <br /> <br />

                                    <div className="Q-articles">
                                          <h5>Questions 6-10</h5> <br />
                                          Choose the correct letter, C, I, or B.<br />
                                    </div>

                                    <div className="Questions">
                                          <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                                <h5>Peter’s opinion</h5>
                                                <h5>Mary’s opinion</h5>
                                          </div>
                                          <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                                <h5>Tuesdays</h5>
                                                <h5>B</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>6</span>
                                                      <input type="text" name='ques6' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques6 != "B" && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques6 != "" && UserData.ques6 == "B" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques6 != "" && UserData.ques6 != "B" ? "(B)" : ""}
                                                      </i>
                                                </div>
                                          </div>
                                          <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                                <h5>Thursdays</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>7</span>
                                                      <input type="text" name='ques7' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques7 != "I" && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques7 != "" && UserData.ques7 == "I" && "text-green-700"}
                                                             `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques7 != "" && UserData.ques7 != "I" ? "(I)" : ""}
                                                      </i>
                                                </div>
                                                <div className="question flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>8</span>
                                                      <input type="text" name='ques8' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques8 != "C" && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques8 != "" && UserData.ques8 == "C" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques8 != "" && UserData.ques8 != "C" ? "(C)" : ""}
                                                      </i>
                                                </div>
                                          </div>

                                          <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                                <h5>Sundays</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>9</span>
                                                      <input type="text" name='ques9' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques9 != "B" && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques9 != "" && UserData.ques9 == "B" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques9 != "" && UserData.ques9 != "B" ? "(B)" : ""}
                                                      </i>
                                                </div>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>10</span>
                                                      <input type="text" name='ques10' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques10 != "I" && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques10 != "" && UserData.ques10 == "I" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques10 != "" && UserData.ques10 != "I" ? "(I)" : ""}
                                                      </i>
                                                </div>
                                          </div>

                                          <div className='p-3'>
                                                <p><span className='font-bold mr-2'>A</span> Chocolate</p>
                                                <p><span className='font-bold mr-2'>I</span>Ice-cream</p>
                                                <p><span className='font-bold mr-2'>C</span>Biscuits</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section2.mp3?_=2") }}
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
                                    Complete the table.<br /><br />
                                    Write NO MORE THAN TWO WORDS for each answer. <br /> <br />
                                    Advantages of Stanfield Childcare Centre <br /> <br />
                              </div>


                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Detail</h5>
                                          <h5>Another Detail</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>1</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques11">Walls are<span className='Numbers'>11</span>
                                                      <input type="text" name='ques11' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques11.match(/Padded/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques11 != "" && UserData.ques11 == "Padded" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques11 != "" && !UserData.ques11.match(/Padded/gi) ? "(Padded)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques12">includes the <span className='Numbers'>12</span>
                                                      <input type="text" name='ques12' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques12.match(/Corners/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques12 != "" && UserData.ques12 == "Corners" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques12 != "" && !UserData.ques12.match(/Corners/gi) ? "(Corners)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>2</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques13">Teachers are able to teach a<span className='Numbers'>13</span>
                                                      <input type="text" name='ques13' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques13.match(/Special skill/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques13 != "" && UserData.ques13 == "Special skill" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques13 != "" && !UserData.ques13.match(/Special skill/gi) ? "(Special skill)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                          <div className="question flex flex-wrap gap-2">
                                                <label htmlFor="ques14">There are many special<span className='Numbers'>14</span>
                                                      <input type="text" name='ques14' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques14.match(/Learning toys/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques14 != "" && UserData.ques14 == "Learning toys" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques14 != "" && !UserData.ques14.match(/Learning toys/gi) ? "(Learning toys)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>3</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques15">They <span className='Numbers'>15</span>
                                                      <input type="text" name='ques15' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques15.match(/Disinfec/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques15 != "" && UserData.ques15 == "Disinfec" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques15 != "" && !UserData.ques15.match(/Disinfec/gi) ? "(Disinfec)" : ""}
                                                      </i>
                                                      Surfaces daily.</label>
                                          </div>
                                          <div className="question flex flex-wrap gap-2">
                                                <label htmlFor="ques16">procedures to limit the spread of <span className='Numbers'>16</span>
                                                      <input type="text" name='ques16' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques16.match(/Germs/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-2" && UserData.ques16 != "" && UserData.ques16 == "Germs" && "text-green-700"}
                                                            
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-2" && UserData.ques16 != "" && !UserData.ques16.match(/Germs/gi) ? "(Germs)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>

                              </div>


                              <div className="Q-articles p-3 font-bold">
                                    Questions 17-20.<br /><br />
                                    Choose the correct letter, A, B, or C. <br />
                              </div>
                              <div className='p-3'>
                                    <p><span className='font-bold mr-2'>A</span>  Andrea</p>
                                    <p><span className='font-bold mr-2'>B</span>Bella</p>
                                    <p><span className='font-bold mr-2'>C</span> Cathy</p>
                              </div>

                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="ques17"> has her own children?</label>
                                          <select name="ques17" id="ques17" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques17 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques17 != "" && UserData.ques17 == "C" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques17 != "" && UserData.ques17 != "C" ? "(C)" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="ques18">often sleeps at the center?</label>
                                          <select name="ques18" id="ques18" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques18 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques18 != "" && UserData.ques18 == "A" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques18 != "" && UserData.ques18 != "A" ? "(A)" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="ques19"> is good with shy children?</label>
                                          <select name="ques19" id="ques19" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques19 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques19 != "" && UserData.ques19 == "C" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques19 != "" && UserData.ques19 != "C" ? "(C)" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="ques20"> is a good cook?</label>
                                          <select name="ques20" id="ques20" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques20 != "B" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques20 != "" && UserData.ques20 == "B" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques20 != "" && UserData.ques20 != "B" ? "(B)" : ""}</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section3.mp3?_=3") }}
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
                                    Complete the flowchart. <br />  <br />
                                    Write ONE WORD ONLY for each answer..<br /> <br />
                              </div>
                              <div className="Questions p-3 w-full grid justify-center align-middle">
                                    <h6>Foundation for Essay Writing</h6> <br /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques21">Decide</label>
                                          <span className='Numbers'>21</span>
                                          <input type="text" name="ques21" id="ques21" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques21.match(/21 Topic/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques21 != "" && UserData.ques21 == "21 Topic" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-2" && UserData.ques21 != "" && !UserData.ques21.match(/21 Topic/gi) ? "(21 Topic)" : ""}
                                          </i>
                                          <p> you like.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques22">Focus on </label>
                                          <span className='Numbers'>22</span>
                                          <input type="text" name="ques22" id="ques22" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques22.match(/Current/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques22 != "" && UserData.ques22 == "Current" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-2" && UserData.ques22 != "" && !UserData.ques22.match(/Current/gi) ? "(Current)" : ""}
                                          </i>
                                          <p> area of interest.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques23">Write</label>
                                          <span className='Numbers'>23</span>
                                          <input type="text" name="ques23" id="ques23" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques23.match(/Thesis/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques23 != "" && UserData.ques23 == "Thesis" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-2" && UserData.ques23 != "" && !UserData.ques23.match(/Thesis/gi) ? "(Thesis)" : ""}
                                          </i>
                                          <p> statement.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques24">Create</label>
                                          <span className='Numbers'>24</span>
                                          <input type="text" name="ques24" id="ques24" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques24.match(/Outline/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques24 != "" && UserData.ques24 == "Outline" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-2" && UserData.ques24 != "" && !UserData.ques24.match(/Outline/gi) ? "(Outline)" : ""}
                                          </i>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques25">Ensure this </label>
                                          <span className='Numbers'>25</span>
                                          <input type="text" name="ques25" id="ques25" onChange={handleValueChange}
                                                className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques25.match(/Progress/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques25 != "" && UserData.ques25 == "Progress" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-2" && UserData.ques25 != "" && !UserData.ques25.match(/Progress/gi) ? "(Progress)" : ""}
                                          </i>
                                          <p>clearly.</p>
                                    </div>
                              </div>
                              <div className="Q-articles font-bold mt-2">
                                    <h5 className='font-bold '>Questions 26-30</h5> <br />
                                    Complete the summary.<br />
                                    Write NO MORE THAN TWO WORDS OR A NUMBER for each answer. <br />  <br />
                              </div>
                              <div className="Questions">
                                    <div className='flex flex-wrap mb-2'>
                                          <label htmlFor="ques2">There are several
                                                <span className='Numbers'>26</span>
                                                <input type="text" name="ques26" id="ques26" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques26.match(/Aspects/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-2" && UserData.ques26 != "" && UserData.ques26 == "Aspects" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques26 != "" && !UserData.ques26.match(/Aspects/gi) ? "(Aspects)" : ""}
                                                </i>
                                                involved in producing a good essay. The writer must think independently and give

                                                <span className='Numbers'>27</span>
                                                <input type="text" name="ques27" id="ques27" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques27.match(/Real life/gi) && "text-red-600"}
                                                             ${ListeningShowAnswer == "Actual-test-2" && UserData.ques27 != "" && UserData.ques27 == "Real life" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques27 != "" && !UserData.ques27.match(/Real life/gi) ? "(Real life)" : ""}
                                                </i>
                                                examples as support, each one with a reference (which is a

                                                <span className='Numbers'>28</span>
                                                <input type="text" name="ques28" id="ques28" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques28.match(/Necessity/gi) && "text-red-600"}
                                                          ${ListeningShowAnswer == "Actual-test-2" && UserData.ques28 != "" && UserData.ques28 == "Necessity" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques28 != "" && !UserData.ques28.match(/Necessity/gi) ? "(Necessity)" : ""}
                                                </i>
                                                ). The formatting must follow the

                                                <span className='Numbers'>29</span>
                                                <input type="text" name="ques29" id="ques29" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques29.match(/Style guide/gi) && "text-red-600"}
                                                               ${ListeningShowAnswer == "Actual-test-2" && UserData.ques29 != "" && UserData.ques29 == "Style guide" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques29 != "" && !UserData.ques29.match(/Style guide/gi) ? "(Style guide)" : ""}
                                                </i>
                                                issued by the university, as well as the word count decided by the lecturer, although it can vary by
                                                <span className='Numbers'>30</span>
                                                <input type="text" name="ques30" id="ques30" onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques30.match(/10%/gi) && "text-red-600"}
                                                                   ${ListeningShowAnswer == "Actual-test-2" && UserData.ques30 != "" && UserData.ques30 == "10%" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques30 != "" && !UserData.ques30.match(/10%/gi) ? "(10%)" : ""}
                                                </i>
                                          </label>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section4.mp3?_=4") }}
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
                              <div className="Q-articles font-bold">
                                    <h5>PART 4 </h5> <br />
                                    Questions 31-33 <br />
                                    Choose the correct letter, A, B, or C.<br />
                              </div>

                              <div className="Questions mt-3">
                                    <div className='mb-3'>

                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>31</span>
                                                Geocentrism
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques31 != "" && UserData.ques31 != "A" ? "(A)" : ""}</i>
                                          </div>

                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques31' />
                                                      <i className='' > has a long history. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques31' />
                                                      <i className=''> is similar to heliocentrism.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques31' />
                                                      <i className=''> took some time to be deduced.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>32</span>
                                                Heliocentrism
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques32 != "" && UserData.ques32 != "B" ? "(B)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques32' />
                                                      <i className='' >was realised only recently. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques32' />
                                                      <i className=''> was not generally accepted.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques32' />
                                                      <i className=''>fitted the views of the church.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>

                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>33</span>
                                                The night sky
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques33 != "" && UserData.ques33 != "C" ? "(C)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques33' />
                                                      <i className='' >is relatively simple. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques33' />
                                                      <i className=''>remains basically the same.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques33' />
                                                      <i className=''> was once used for navigation.</i>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                              <div className="Q-articles font-bold">
                                    <h5>Questions 34-40</h5> <br />
                                    Complete the notes. <br />
                                    Write ONE WORD OR A NUMBER for each answer..<br />
                              </div>
                              <div className="Questions p-2 mt-3">
                                    <div className='w-full grid grid-cols-2 border-1 border-gray-400'>
                                          <h5 className='m-auto'>Nicolaus Copernicus</h5>
                                          <div className="question mt-2 flex flex-wrap ">
                                                <label htmlFor="ques34">started the Copernican  </label>
                                                <span className='Numbers'>34</span>
                                                <input type="text" name='ques34' onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques34.match(/Revolution/gi) && "text-red-600"}
                                                                     ${ListeningShowAnswer == "Actual-test-2" && UserData.ques34 != "" && UserData.ques34 == "Revolution" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques34 != "" && !UserData.ques34.match(/Revolution/gi) ? "(Revolution)" : ""}
                                                </i>

                                                <label htmlFor="ques35">his book published the year he was</label>
                                                <span className='Numbers'>35</span>
                                                <input type="text" name='ques35' onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques35.match(/Sik/gi) && "text-red-600"}
                                                             ${ListeningShowAnswer == "Actual-test-2" && UserData.ques35 != "" && UserData.ques35 == "Sik" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques35 != "" && !UserData.ques35.match(/Sik/gi) ? "(Sik)" : ""}
                                                </i>
                                                <p>and then passed away This book generated little</p>

                                                <span className='Numbers'>36</span>
                                                <input type="text" name='ques36' onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques36.match(/Attention/gi) && "text-red-600"}
                                                           ${ListeningShowAnswer == "Actual-test-2" && UserData.ques36 != "" && UserData.ques36 == "Attention" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques36 != "" && !UserData.ques36.match(/Attention/gi) ? "(Attention)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3  grid grid-cols-2  border-1 border-gray-400'>
                                          <h5 className='m-auto'>Other scientists</h5>
                                          <div className="question mt-2 flex flex-wrap ">
                                                <label htmlFor="ques37">Galileo was persecuted.</label>
                                                <span className='Numbers'>37</span>
                                                <input type="text" name='ques37' onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques37.match(/Bruno/gi) && "text-red-600"}
                                                           ${ListeningShowAnswer == "Actual-test-2" && UserData.ques37 != "" && UserData.ques37 == "Bruno" && "text-green-700"}
                                                     
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques37 != "" && !UserData.ques37.match(/Bruno/gi) ? "(Bruno)" : ""}
                                                </i>

                                                <label htmlFor="ques38">was killed.even the sun believed to be in </label>
                                                <span className='Numbers'>38</span>
                                                <input type="text" name='ques38' onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques38.match(/Motion/gi) && "text-red-600"}
                                                                   ${ListeningShowAnswer == "Actual-test-2" && UserData.ques38 != "" && UserData.ques38 == "Motion" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques38 != "" && !UserData.ques38.match(/Motion/gi) ? "(Motion)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3  grid grid-cols-2  border-1 border-gray-400'>
                                          <h5 className='m-auto'>Modern geocentrism</h5>
                                          <div className="question mt-2 flex flex-wrap ">
                                                <label htmlFor="ques39">based on the </label>
                                                <span className='Numbers'>39</span>
                                                <input type="text" name='ques39' onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques39.match(/Bible/gi) && "text-red-600"}
                                                          ${ListeningShowAnswer == "Actual-test-2" && UserData.ques39 != "" && UserData.ques39 == "Bible" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques39 != "" && !UserData.ques39.match(/Bible/gi) ? "(Bible)" : ""}
                                                </i>

                                                <label htmlFor="ques40">Believers also support creationism.</label>
                                                <span className='Numbers'>40</span>
                                                <input type="text" name='ques40' onChange={handleValueChange}
                                                      className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-2" && !UserData.ques40.match(/20%/gi) && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Actual-test-2" && UserData.ques40 != "" && UserData.ques40 == "20%" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-2" && UserData.ques40 != "" && !UserData.ques40.match(/20%/gi) ? "(20%)" : ""}
                                                </i>
                                                <p> of Americans believe in this.</p>
                                          </div>
                                    </div>


                              </div>

                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage