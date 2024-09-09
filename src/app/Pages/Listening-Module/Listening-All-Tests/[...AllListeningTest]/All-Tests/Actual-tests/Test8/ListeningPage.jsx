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
            ["Elsinore"],
            ["077896245"],
            ["waiter"],
            ["baseball coach"],
            ["rescue diver"],
            ["diving experience"],
            ["Octobar"],
            ["Saturday mornings"],
            ["6 o'clock"],
            ["The radio"],
            ["B"], ["C"], ["B"], ["A"], ["C"], ["A"], ["B"], ["B"], ["A"], ["A"],
            ["C"], ["B"], ["B"], ["C"], ["F"], ["G"], ["E"], ["C"], ["A"], ["B"],
            ["nervous"],
            ["a gift"],
            ["last"],
            ["well-organized"],
            ["paying attention"],
            ["sheet of paper"],
            ["full"],
            ["one or two"],
            ["time"],
            ["a script"]


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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-08-Section1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 07</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-08-Section1.mp3?_=1") }}
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
                                    Complete the form below. <br />
                                    Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 text-inherit'>Phone interview</h5> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Name:</h5>
                                          <h5>John Murphy</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Example:</h5>
                                          <h5>Answer</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Position applying for::</h5>
                                          <h5>lifeguard</h5>
                                    </div>

                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Street Address:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <p>45</p>
                                                <span className='Numbers'>1</span>
                                                <input type="text" name='ques1' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques1.match(/Elsinore/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques1 != "" && UserData.ques1 == "Elsinore" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques1 != "" && !UserData.ques1.match(/Elsinore/gi) ? "(Elsinore)" : ""}
                                                </i>
                                                <p>Count</p>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Contact phone number:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>2</span>
                                                <input type="text" name='ques2' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques2.match(/077896245/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques2 != "" && UserData.ques2 == "077896245" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques2 != "" && !UserData.ques2.match(/077896245/gi) ? "(077896245)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Current part-time job:`</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>3</span>
                                                <input type="text" name='ques3' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques3.match(/waiter/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques3 != "" && UserData.ques3 == "waiter" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques3 != "" && !UserData.ques3.match(/waiter/gi) ? "(waiter)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Previous job at Ridgemont High School:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques4.match(/baseball coach/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques4 != "" && UserData.ques4 == "baseball coach" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques4 != "" && !UserData.ques4.match(/baseball coach/gi) ? "(baseball coach)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Additional relevant work experience: </h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques5">by</label>
                                                <span className='Numbers'>5</span>
                                                <input type="text" name='ques5' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques5.match(/rescue diver/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques5 != "" && UserData.ques5 == "rescue diver" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques5 != "" && !UserData.ques5.match(/rescue diver/gi) ? "(rescue diver)" : ""}
                                                </i>
                                                <p>to destination:</p>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Relevant skills/qualifications:</h5>
                                          <div className="question mt-2 ml-3 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <p>CPR certification &</p>
                                                <span className='Numbers'>6</span>
                                                <input type="text" name='ques6' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques6.match(/diving experience/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques6 != "" && UserData.ques6 == "diving experience" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques6 != "" && !UserData.ques6.match(/diving experience/gi) ? "(diving experience)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>CPR certification expiration date:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>7</span>
                                                <input type="text" name='ques7' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques7.match(/Octobar/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques7 != "" && UserData.ques7 == "Octobar" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques7 != "" && !UserData.ques7.match(/Octobar/gi) ? "(Octobar)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Preferred weekly shift:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>8</span>
                                                <input type="text" name='ques8' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques8.match(/Saturday mornings/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques8 != "" && UserData.ques8 == "Saturday mornings" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques8 != "" && !UserData.ques8.match(/Saturday mornings/gi) ? "(Saturday mornings)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Time available to start work:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">

                                                <span className='Numbers'>9</span>
                                                <input type="text" name='ques9' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques9.match(/6 o'clock/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques9 != "" && UserData.ques9 == "6 o'clock" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques9 != "" && !UserData.ques9.match(/6 o'clock/gi) ? "(n6 o'clocko)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Advertisement source:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">

                                                <span className='Numbers'>10</span>
                                                <input type="text" name='ques10' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques10.match(/The radio/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-8" && UserData.ques10 != "" && UserData.ques10 == "The radio" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-8" && UserData.ques10 != "" && !UserData.ques10.match(/The radio/gi) ? "(The radio)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-08-Section2.mp3?_=2") }}
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
                                    Questions 11-20<br /><br />
                                    Choose the correct letter, A, B or C<br /> <br />
                              </div>

                              <div className="Questions">

                                    <div className='mb-3'>
                                          <label htmlFor="ques11" className='flex'><span className='Numbers mr-1 mb-2'>11</span>The lecture was organised by
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques11 != "" && UserData.ques11 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques11' />
                                                      <i className='' >  City of Nottingham. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques11' />
                                                      <i className=''>   University of Nottingham Students’ Union.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques11' />
                                                      <i className=''> Nottingham Police Department..</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques12" className='flex'><span className='Numbers mr-1 mb-2'>12</span>The majority of crime on campus is
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques12 != "" && UserData.ques12 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques12' />
                                                      <i className='' > Drugs and Alcohol. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques12' />
                                                      <i className=''>Violence.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques12' />
                                                      <i className=''>Theft.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify flex'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                                The campus crime rate has ………….. so far this year.
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques13 != "" && UserData.ques13 != "B" ? "(B)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques13' />
                                                      <i className='' > increased </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques13' />
                                                      <i className=''> decreased</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques13' />
                                                      <i className=''>  stayed the same</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify flex'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>14</span>
                                                Why is there added concern about crime?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques14 != "" && UserData.ques14 != "A" ? "(A)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques14' />
                                                      <i className='' >exaggeration in media</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques14' />
                                                      <i className=''>crime TV shows</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques14' />
                                                      <i className=''>factual news articles</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify flex'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>15</span>
                                                Carlos says if you are the victim of a crime, you should
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques15 != "" && UserData.ques15 != "C" ? "(C)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques15' />
                                                      <i className='' >run away. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques15' />
                                                      <i className=''> resist.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques15' />
                                                      <i className=''>seek help.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify flex'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>16</span>
                                                What is the primary method for increasing safety?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques16 != "" && UserData.ques16 != "A" ? "(A)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques16' />
                                                      <i className='' >  informing students and staff of safety precautions </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques16' />
                                                      <i className=''> offering free self-defense courses to students.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques16' />
                                                      <i className=''>reminding students to carry a mobile phone at all times</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify flex'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>17</span>
                                                If a student must work late, it is most important to
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques17 != "" && UserData.ques17 != "B" ? "(B)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques17' />
                                                      <i className='' > not return home until the morning.  </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques17' />
                                                      <i className=''>   go back with a friend.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques17' />
                                                      <i className=''>bring a mobile phone.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques18" className='flex'><span className='Numbers mr-1 mb-2'>18</span> It is dangerous to
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques18 != "" && UserData.ques18 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques18' />
                                                      <i className='' > drive home late at night. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques18' />
                                                      <i className=''>  carry a knife..</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques18' />
                                                      <i className=''> carry pepper spray.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>19</span>
                                                Students who complete a self-defense course are

                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques19 != "" && UserData.ques19 != "A" ? "(A)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques19' />
                                                      <i className='' >more aware of dangers. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques19' />
                                                      <i className=''>   mentally tougher.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques19' />
                                                      <i className=''>walking more confidently..</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques20" className='flex'><span className='Numbers mr-1 mb-2'>20</span>A university is
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques20 != "" && UserData.ques20 != "A" ? "(A)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques20' />
                                                      <i className='' > not surrounded by walls.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques20' />
                                                      <i className=''> patrolled by military.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques20' />
                                                      <i className=''>completely safe..</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-08-Section3.mp3?_=3") }}
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
                                    Questions 21-23<br />
                                    <h5 >Choose the correct letter, A, B or C. <br /> <br /></h5>
                              </div>

                        </div>

                        <div className="Questions">

                              <div className='mb-3'>
                                    <label htmlFor="ques21" className='flex'><span className='Numbers mr-1 mb-2'>21</span> Information on the test is from
                                          <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques21 != "" && UserData.ques21 != "C" ? "(C)" : ""}</i>
                                    </label>
                                    <div className='' onChange={handleValueChange}>
                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                <input className='' type="radio" value="A" name='ques21' />
                                                <i className='' >I the teacher. </i>
                                          </div>

                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                <input className='' type="radio" value="B" name='ques21' />
                                                <i className=''>A class.</i>
                                          </div>

                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                <input className='' type="radio" value="C" name='ques21' />
                                                <i className=''>A handout.</i>
                                          </div>
                                    </div>
                              </div>
                              <div className='mb-3'>
                                    <label htmlFor="ques22" className='flex'><span className='Numbers mr-1 mb-2'>22</span>This assignment is important because
                                          <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques22 != "" && UserData.ques22 != "B" ? "(B)" : ""}</i>
                                    </label>
                                    <div className='' onChange={handleValueChange}>
                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                <input className='' type="radio" value="A" name='ques22' />
                                                <i className='' >it will become a permanent record. </i>
                                          </div>

                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                <input className='' type="radio" value="B" name='ques22' />
                                                <i className=''> it is a must for passing 11th grade English.</i>
                                          </div>

                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                <input className='' type="radio" value="C" name='ques22' />
                                                <i className=''> it will affect the English level next year..</i>
                                          </div>
                                    </div>
                              </div>
                              <div className='mb-3'>
                                    <div className='mb-2'>
                                          <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>
                                          Bobby chooses football as project topic because
                                          <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-8" && UserData.ques23 != "" && UserData.ques23 != "B" ? "(B)" : ""}</i>

                                    </div>
                                    <div className='' onChange={handleValueChange}>
                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                <input className='' type="radio" value="A" name='ques23' />
                                                <i className='' >I  he often plays football. </i>
                                          </div>

                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                <input className='' type="radio" value="B" name='ques23' />
                                                <i className=''>his father loves football.</i>
                                          </div>

                                          <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                <input className='' type="radio" value="C" name='ques23' />
                                                <i className=''> he is interested in football.</i>
                                          </div>
                                    </div>
                              </div>


                        </div>
                        <div className="Q-articles">
                              <h5>Questions 24-30 </h5> <br />
                              What problems do the speakers identify for this project?<br />
                              <h5 >Choose SEVEN answers from the box and write the letters, A-H, next to questions 24-30. <br /> <br /></h5>

                              <div className='p-3'>
                                    <p><span className='font-bold mr-2'>A</span>  too vague</p>
                                    <p><span className='font-bold mr-2'>B</span> too factual</p>
                                    <p><span className='font-bold mr-2'>C</span> too unreliable</p>
                                    <p><span className='font-bold mr-2'>D</span>  too noisy</p>
                                    <p><span className='font-bold mr-2'>E</span>  too long</p>
                                    <p><span className='font-bold mr-2'>F</span> too sort</p>
                                    <p><span className='font-bold mr-2'>G</span> too complicated</p>
                                    <p><span className='font-bold mr-2'>H</span> too simple</p>

                              </div>
                        </div>
                        <div className="Questions">
                              <div className='flex gap-1 flex-wrap mb-2'>
                                    <span className='Numbers'>24</span>
                                    <label htmlFor="ques24"> Background sounds</label>
                                    <input type="text" name="ques24" id="ques24" onChange={handleValueChange}
                                          className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-8" && UserData.ques24 != "C" && "text-red-600"}
                                          
                                          ${ListeningShowAnswer == "Actual-test-8" && UserData.ques24 != "" && UserData.ques24 == "C" && "text-green-700"}
                                          `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                          {ListeningShowAnswer == "Actual-test-8" && UserData.ques24 != "" && UserData.ques24 != "C" ? "(C)" : ""}
                                    </i>
                              </div>
                              <div className='flex gap-1 flex-wrap mb-2'>
                                    <span className='Numbers'>25</span>
                                    <label htmlFor="ques25">Answers of questions.</label>
                                    <input type="text" name="ques25" id="ques25" onChange={handleValueChange}
                                          className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-8" && UserData.ques25 != "F" && "text-red-600"}
                                          ${ListeningShowAnswer == "Actual-test-8" && UserData.ques25 != "" && UserData.ques25 == "F" && "text-green-700"}
                                          `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                          {ListeningShowAnswer == "Actual-test-8" && UserData.ques25 != "" && UserData.ques25 != "F" ? "(F)" : ""}
                                    </i>

                              </div>
                              <div className='flex gap-1 flex-wrap mb-2'>
                                    <span className='Numbers'>26</span>
                                    <label htmlFor="ques26">One of the questions</label>
                                    <input type="text" name="ques26" id="ques26" onChange={handleValueChange}
                                          className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-8" && UserData.ques26 != "G" && "text-red-600"}
                                          
                                          ${ListeningShowAnswer == "Actual-test-8" && UserData.ques26 != "" && UserData.ques26 == "G" && "text-green-700"}
                                          `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                          {ListeningShowAnswer == "Actual-test-8" && UserData.ques26 != "" && UserData.ques26 != "G" ? "(G)" : ""}
                                    </i>

                              </div>
                              <div className='flex gap-1 flex-wrap mb-2'>
                                    <span className='Numbers'>27</span>
                                    <label htmlFor="ques27">Time of answering</label>
                                    <input type="text" name="ques27" id="ques27" onChange={handleValueChange}
                                          className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-8" && UserData.ques27 != "E" && "text-red-600"}
                                          
                                          ${ListeningShowAnswer == "Actual-test-8" && UserData.ques27 != "" && UserData.ques27 == "E" && "text-green-700"}
                                          `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                          {ListeningShowAnswer == "Actual-test-8" && UserData.ques27 != "" && UserData.ques27 != "E" ? "(E)" : ""}
                                    </i>

                              </div>
                              <div className='flex gap-1 flex-wrap mb-2'>
                                    <span className='Numbers'>28</span>
                                    <label htmlFor="ques28">Recording equipment</label>
                                    <input type="text" name="ques28" id="ques28" onChange={handleValueChange}
                                          className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-8" && UserData.ques28 != "C" && "text-red-600"}
                                          
                                          ${ListeningShowAnswer == "Actual-test-8" && UserData.ques28 != "" && UserData.ques28 == "C" && "text-green-700"}
                                          `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                          {ListeningShowAnswer == "Actual-test-8" && UserData.ques28 != "" && UserData.ques28 != "C" ? "(C)" : ""}
                                    </i>

                              </div>
                              <div className='flex gap-1 flex-wrap mb-2'>
                                    <span className='Numbers'>29</span>
                                    <label htmlFor="ques29">Topic of project</label>
                                    <input type="text" name="ques29" id="ques29" onChange={handleValueChange}
                                          className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-8" && UserData.ques29 != "A" && "text-red-600"}
                                          
                                          ${ListeningShowAnswer == "Actual-test-8" && UserData.ques29 != "" && UserData.ques29 == "A" && "text-green-700"}
                                          `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                          {ListeningShowAnswer == "Actual-test-8" && UserData.ques29 != "" && UserData.ques29 != "A" ? "(A)" : ""}
                                    </i>
                              </div>
                              <div className='flex gap-1 flex-wrap mb-2'>
                                    <span className='Numbers'>30</span>
                                    <label htmlFor="ques30"> Report on project.</label>
                                    <input type="text" name="ques30" id="ques30" onChange={handleValueChange}
                                          className={`inputs font-bold ${ListeningShowAnswer == "Actual-test-8" && UserData.ques30 != "B" && "text-red-600"}
                                          
                                          ${ListeningShowAnswer == "Actual-test-8" && UserData.ques30 != "" && UserData.ques30 == "B" && "text-green-700"}
                                          `} />
                                    <i className='text-green-600 font-bold mr-2 ml-2'>
                                          {ListeningShowAnswer == "Actual-test-8" && UserData.ques30 != "" && UserData.ques30 != "B" ? "(B)" : ""}
                                    </i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-08-Section4.mp3?_=4") }}
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
                                    Questions 31-40 <br />
                                    Complete the notes below.<br />
                                    Write NO MORE THAN THREE WORDS for each answer. <br />
                                    <h5 className='mt-2 mb-2 text-inherit'>GIVING A SPEECH</h5> <br /> <br />
                                    <h5 className='mt-2 mb-2 text-inherit'>Reasons for nervousness</h5> <br /> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• Lecturers often feel more</label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques31.match(/nervous/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques31 != "" && UserData.ques31 == "nervous" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques31 != "" && !UserData.ques31.match(/nervous/gi) ? "(nervous)" : ""}
                                          </i>
                                          <p> if the speech is important.</p>

                                    </div><br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name">• Many think that the ability to make a good public speaking is</label> </label>
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques32.match(/a gift/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques32 != "" && UserData.ques32 == "a gift" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques32 != "" && !UserData.ques32.match(/a gift/gi) ? "(a gift)" : ""}
                                          </i>
                                          <p> while in fact it is a skill that can be learned by anyone.</p>
                                    </div> <br />
                                    <h5>How to prepare a quality speech</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">• The audience will only remember the </label>
                                          <span className='Numbers'>33</span>
                                          <input type="text" name='ques33' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques33.match(/last/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques33 != "" && UserData.ques33 == "last" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques33 != "" && !UserData.ques33.match(/last/gi) ? "(last)" : ""}
                                          </i>
                                          <p>sentence of a speech.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• Ensure that your speech is</label>
                                          <span className='Numbers'>34</span>
                                          <input type="text" name='ques34' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques34.match(/well-organized/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques34 != "" && UserData.ques34 == "well-organized" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques34 != "" && !UserData.ques34.match(/well-organized/gi) ? "(well-organized)" : ""}
                                          </i>
                                    </div>
                                    <h5>Do’s and Don’ts</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• Don’t start your speech until audience is</label>
                                          <span className='Numbers'>35</span>
                                          <input type="text" name='ques35' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques35.match(/paying attention/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques35 != "" && UserData.ques35 == "paying attention" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques35 != "" && !UserData.ques35.match(/paying attention/gi) ? "(paying attention)" : ""}
                                          </i>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> • You can make your main ideas or notes on cards or a </label>
                                          <span className='Numbers'>36</span>
                                          <input type="text" name='ques36' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques36.match(/sheet of paper/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques36 != "" && UserData.ques36 == "sheet of paper" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques36 != "" && !UserData.ques36.match(/sheet of paper/gi) ? "(sheet of paper)" : ""}
                                          </i>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• You do not need to write down the </label>
                                          <span className='Numbers'>37</span>
                                          <input type="text" name='ques37' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques37.match(/full/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques37 != "" && UserData.ques37 == "full" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques37 != "" && !UserData.ques37.match(/full/gi) ? "(full)" : ""}
                                          </i>
                                          <p>speech.</p>
                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">• You can just write</label>
                                          <span className='Numbers'>38</span>
                                          <input type="text" name='ques38' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques38.match(/one or two/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques38 != "" && UserData.ques38 == "one or two" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques38 != "" && !UserData.ques38.match(/one or two/gi) ? "(one or two)" : ""}
                                          </i>
                                          <p> ideas..</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• Remember to  </label>
                                          <span className='Numbers'>39</span>
                                          <input type="text" name='ques39' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques39.match(/time/gi) && "text-red-600"}
                                                
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques39 != "" && UserData.ques39 == "time" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques39 != "" && !UserData.ques39.match(/time/gi) ? "(time)" : ""}
                                          </i>
                                          <p>  yourself to see how long your speech will be..</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> • Don’t just read from  </label>
                                          <span className='Numbers'>40</span>
                                          <input type="text" name='ques40' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-8" && !UserData.ques40.match(/a script/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-8" && UserData.ques40 != "" && UserData.ques40 == "a script" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-8" && UserData.ques40 != "" && !UserData.ques40.match(/a script/gi) ? "(a script)" : ""}
                                          </i>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage