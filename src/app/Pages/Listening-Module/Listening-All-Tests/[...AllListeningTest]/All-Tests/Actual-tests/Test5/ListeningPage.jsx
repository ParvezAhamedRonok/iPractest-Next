"use client"
import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "../../../../../../../../assets/images/listening-images/Actual-test5-image1.jpg"
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
            ["equipment"],
            ["Fred"],
            ["6 days"],
            ["Mike"],
            ["Leo"],
            ["C"], ["A"], ["C"], ["B"], ["C"], ["E"], ["A"], ["D"], ["F"], ["C"],
            ["yellow"],
            ["garden shed"],
            ["wildlife reserve"],
            ["firewood"],
            ["garden bin"],
            ["Walfare State"],
            ["too long"],
            ["in perspective"],
            ["oversimplifies"],
            ["Political theory"],
            ["not relevent"],
            ["C"], ["S"], ["P"], ["P"], ["C"], ["C"], ["B"], ["A"], ["A"],
            ["participate"],
            ["natural springs"],
            ["local product"],
            ["characterized"],
            ["mature"]

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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 05</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section1.mp3?_=1") }}
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
                                    Questions 1-5<br />
                                    Complete the notes. <br />
                                    Write NO MORE THAN TWO WORDS AND/OR NUMBERS for each answer. <br />
                                    <h5 className='text-center mt-2 text-inherit'>Basic Details of Project</h5> <br />
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5 className='m-auto'>Example
                                                Pre-phase</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques1">involves selecting rooms &</label>
                                                <span className='Numbers'>1</span>
                                                <input type="text" name='ques1' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques1.match(/equipment/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques1 != "" && UserData.ques1 == "equipment" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques1 != "" && !UserData.ques1.match(/equipment/gi) ? "(equipment)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5 className=''>Phase 1:</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-3">
                                                <label htmlFor="ques2">time needed: 3 day staff involved: Jenna,
                                                      <input type="text" name='ques2' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques2.match(/Fred/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-5" && UserData.ques2 != "" && UserData.ques2 == "Fred" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-5" && UserData.ques2 != "" && !UserData.ques2.match(/Fred/gi) ? "(Fred)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5 className='m-auto'>Phase 2:</h5>
                                          <div className="question mt-2 flex flex-wrap gap-1 ml-4">
                                                <label htmlFor="ques3">time needed: </label>
                                                <span className='Numbers'>3</span>
                                                <input type="text" name='ques3' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques3.match(/6 days/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques3 != "" && UserData.ques3 == "6 days" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques3 != "" && !UserData.ques3.match(/6 days/gi) ? "(6 days)" : ""}
                                                </i>
                                                <label htmlFor="ques4">staff involved: </label>
                                                <span className='Numbers'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques4.match(/Mike/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques4 != "" && UserData.ques4 == "Mike" && "text-green-700"}
                                                       `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques4 != "" && !UserData.ques4.match(/Mike/gi) ? "(Mike)" : ""}
                                                </i>
                                                <label htmlFor="ques5">with assistance from </label>
                                                <span className='Numbers'>5</span>
                                                <input type="text" name='ques5' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques5.match(/Leo/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques5 != "" && UserData.ques5 == "Leo" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques5 != "" && !UserData.ques5.match(/Leo/gi) ? "(Leo)" : ""}
                                                </i>
                                          </div>
                                    </div>


                              </div>
                              <div className="Q-articles mt-5">
                                    <h5 className='mb-2'>Questions 6-10</h5>
                                    Choose the correct letter, A, B, or C.<br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques6"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>6</span> The main form of data collection will be
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques6 != "" && UserData.ques6 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques6' />
                                                      <i className='' >questionnaires </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques6' />
                                                      <i className=''>  Internet polling.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques6' />
                                                      <i className=''> face-to-face interviews..</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques7"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>7</span> To finish in time, the staff will have to
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques7 != "" && UserData.ques7 != "A" ? "(A)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques7' />
                                                      <i className='' >  work late. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques7' />
                                                      <i className=''> come in early.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques7' />
                                                      <i className=''>take some work home.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques8"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>8</span> The final report will contain
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques8 != "" && UserData.ques8 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques8' />
                                                      <i className='' > three appendices.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques8' />
                                                      <i className=''>material from the company website.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques8' />
                                                      <i className=''>a supplementary booklet..</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques9"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>9</span>The final report will be handed in on the
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques9 != "" && UserData.ques9 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques9' />
                                                      <i className='' >5th</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques9' />
                                                      <i className=''> 15th</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques9' />
                                                      <i className=''>25th</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques10"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>10</span>What point does the writer make about AI in the first paragraph?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques10 != "" && UserData.ques10 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques10' />
                                                      <i className='' >an office party. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques10' />
                                                      <i className=''>  a restaurant dinner.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques10' />
                                                      <i className=''>  presents for all involved.</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section2.mp3?_=2") }}
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
                                    Questions 11-15<br /><br />
                                    Complete the repair schedule.<br /> <br />
                                    Write the correct letter, A-F, for each answer. <br /> <br />
                                    <h6>Problems to Fix</h6> <br /> <br />
                              </div>
                              <div className='p-1'>
                                    <p><span className='font-bold mr-2'>A</span> Birds in ceiling</p>
                                    <p><span className='font-bold mr-2'>B</span>   Broken windows</p>
                                    <p><span className='font-bold mr-2'>C</span>Electrical fault</p>
                                    <p><span className='font-bold mr-2'>D</span>  Fallen tree</p>
                                    <p><span className='font-bold mr-2'>E</span>  Leaking roof</p>
                                    <p><span className='font-bold mr-2'>F</span>Staining on walls</p> <br /> <br />
                                    <h6>Schedule of Repairs</h6><br /> <br />
                                    <Image src={img1} alt="test-5 image-1" />
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>11</span>
                                          <input type="text" name="ques11" id="ques11" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques11 != "E" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-5" && UserData.ques11 != "" && UserData.ques11 == "E" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-5" && UserData.ques11 != "" && UserData.ques11 != "E" ? "(E)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>12</span>
                                          <input type="text" name="ques12" id="ques12" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques12 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-5" && UserData.ques12 != "" && UserData.ques12 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-5" && UserData.ques12 != "" && UserData.ques12 != "A" ? "(A)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>13</span>
                                          <input type="text" name="ques13" id="ques13" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques13 != "D" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-5" && UserData.ques13 != "" && UserData.ques13 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-5" && UserData.ques13 != "" && UserData.ques13 != "D" ? "(D)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>14</span>
                                          <input type="text" name="ques14" id="ques14" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques14 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-5" && UserData.ques14 != "" && UserData.ques14 == "F" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-5" && UserData.ques14 != "" && UserData.ques14 != "F" ? "(F)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>15</span>
                                          <input type="text" name="ques15" id="ques15" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques15 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-5" && UserData.ques15 != "" && UserData.ques15 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-5" && UserData.ques15 != "" && UserData.ques15 != "C" ? "(C)" : ""}
                                          </i>
                                    </div>
                              </div>
                              <div className="Q-articles">
                                    <h5>Questions 16-20</h5> <br />
                                    Complete the sentences.<br /><br />
                                    Write NO MORE THAN TWO WORDS for each answer.<br /> <br />
                                    <h6>Additional Details Concerning Repairs</h6> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques16" className='flex'>The stained walls will be painted<span className='Numbers'>16</span>
                                                <input type="text" name="ques16" id="ques16" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques16.match(/yellow/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques16 != "" && UserData.ques16 == "yellow" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques16 != "" && !UserData.ques16.match(/yellow/gi) ? "(yellow)" : ""}
                                                </i>

                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques17" className='flex'>Extra paint will be left in the<span className='Numbers'>17</span>
                                                <input type="text" name="ques17" id="ques17" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques17.match(/garden shed/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques17 != "" && UserData.ques17 == "garden shed" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques17 != "" && !UserData.ques17.match(/garden shed/gi) ? "(garden shed)" : ""}
                                                </i></label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques18" className='flex'>The baby birds will be given to a <span className='Numbers'>18</span>
                                                <input type="text" name="ques18" id="ques18" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques18.match(/wildlife reserve/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques18 != "" && UserData.ques18 == "wildlife reserve" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques18 != "" && !UserData.ques18.match(/wildlife reserve/gi) ? "(wildlife reserve)" : ""}
                                                </i></label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques19" className='flex'>The fallen tree will be used as<span className='Numbers'>19</span>
                                                <input type="text" name="ques19" id="ques19" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques19.match(/firewood/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques19 != "" && UserData.ques19 == "firewood" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques19 != "" && !UserData.ques19.match(/firewood/gi) ? "(firewood)" : ""}
                                                </i></label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques20" className='flex'>The smaller parts of the tree will be put in a<span className='Numbers'>20</span>
                                                <input type="text" name="ques20" id="ques20" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques20.match(/garden bin/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques20 != "" && UserData.ques20 == "garden bin" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques20 != "" && !UserData.ques20.match(/garden bin/gi) ? "(garden bin)" : ""}
                                                </i>
                                          </label>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section3.mp3?_=3") }}
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
                                    Complete the table.<br /> <br />
                                    <h5 className='mt-3 mb-3 text-center'>Write NO MORE THAN TWO WORDS for each answer.</h5>
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Subject</h5>
                                          <h5>Textbook Used</h5>
                                          <h5>Criticism of this book</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5 className='m-auto'>Social History</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                                <span className='Numbers'>21</span>
                                                <input type="text" name='ques21' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques21.match(/Walfare State/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques21 != "" && UserData.ques21 == "Walfare State" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques21 != "" && !UserData.ques21.match(/Walfare State/gi) ? "(Walfare State)" : ""}
                                                </i>
                                          </div>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                                <p>it is</p>
                                                <span className='Numbers'>22</span>
                                                <input type="text" name='ques22' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques22.match(/too long/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques22 != "" && UserData.ques22 == "too long" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques22 != "" && !UserData.ques22.match(/too long/gi) ? "(too long)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5 className='m-auto'>Cultural Studies</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                                <span className='Numbers'>23</span>
                                                <input type="text" name='ques23' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques23.match(/in perspective/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques23 != "" && UserData.ques23 == "in perspective" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques23 != "" && !UserData.ques23.match(/in perspective/gi) ? "(in perspective)" : ""}
                                                </i>

                                                <label htmlFor="ques24" className='flex gap-2'>It<span className='Numbers'>24</span>
                                                      <input type="text" name='ques24' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques24.match(/oversimplifies/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-5" && UserData.ques24 != "" && UserData.ques24 == "oversimplifies" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-5" && UserData.ques24 != "" && !UserData.ques24.match(/oversimplifies/gi) ? "(oversimplifies)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>25</span>
                                                <input type="text" name='ques25' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques25.match(/Political theory/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques25 != "" && UserData.ques25 == "Political theory" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques25 != "" && !UserData.ques25.match(/Political theory/gi) ? "(Political theory)" : ""}
                                                </i>
                                          </div>
                                          <h5 className='m-auto'>Government in Action</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques26">It is</label>
                                                <span className='Numbers'>26</span>
                                                <input type="text" name='ques26' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques26.match(/not relevent/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques26 != "" && UserData.ques26 == "not relevent" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques26 != "" && !UserData.ques26.match(/not relevent/gi) ? "(not relevent)" : ""}
                                                </i>
                                          </div>
                                    </div>

                              </div>
                              <div className="Q-articles mt-5">
                                    <h5 className='mb-2'>Questions 27-30 </h5>
                                    Choose the correct letter, S, C, or P.<br />
                                    NB You may use a letter more than once..<br /> <br />

                                    <div className='p-3'>
                                          <p><span className='font-bold mr-2'>S</span> Social History</p>
                                          <p><span className='font-bold mr-2'>C</span>   Cultural Studies</p>
                                          <p><span className='font-bold mr-2'>P</span>Political Theory</p>
                                    </div> <br />
                                    <h5>What are the speakers’ favorite subjects?</h5> <br />

                                    <div className="Questions">
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>27</span>
                                                <label htmlFor="ques27">Steve</label>
                                                <input type="text" name="ques27" id="ques27" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques27 != "C" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques27 != "" && UserData.ques27 == "C" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques27 != "" && UserData.ques27 != "C" ? "(C)" : ""}
                                                </i>
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>28</span>
                                                <label htmlFor="ques28">David</label>
                                                <input type="text" name="ques28" id="ques28" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques28 != "S" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques28 != "" && UserData.ques28 == "S" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques28 != "" && UserData.ques28 != "S" ? "(S)" : ""}
                                                </i>
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>29</span>
                                                <label htmlFor="ques29">Susan</label>
                                                <input type="text" name="ques29" id="ques29" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques29 != "P" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques29 != "" && UserData.ques29 == "P" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques29 != "" && UserData.ques29 != "P" ? "(P)" : ""}
                                                </i>
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>30</span>
                                                <label htmlFor="ques30">Olive</label>
                                                <input type="text" name="ques30" id="ques30" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && UserData.ques30 != "P" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques30 != "" && UserData.ques30 == "P" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques30 != "" && UserData.ques30 != "P" ? "(P)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section4.mp3?_=4") }}
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
                        <div className="Questions mt-2">
                              <div className="Q-articles">
                                    <h5>PART 4 </h5> <br />
                                    Questions 31-32 <br />
                                    Choose the correct letter, A, B, or C. <br /><br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques31"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>31</span>Originally, country
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques31 != "" && UserData.ques31 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques31' />
                                                      <i className='' > required fewer workers. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques31' />
                                                      <i className=''> had lots of animals.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques31' />
                                                      <i className=''> were more interesting places.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques32"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>32</span>Now, the problems there
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques32 != "" && UserData.ques32 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques32' />
                                                      <i className='' >can be solved. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques32' />
                                                      <i className=''> are numerous.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques32' />
                                                      <i className=''>are expected.</i>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="Q-articles p-3 font-bold">
                                    <h5>Questions 33-35</h5> <br />
                                    Choose THREE answers from the list and write the correct letter, A-F, next to the questions 33-35.<br /> <br />
                                    Which THREE factors are typical of modern farming? <br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques33"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>33</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques33 != "" && UserData.ques33 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques33' />
                                                      <i className='' >   Many overheads </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques33' />
                                                      <i className=''>   More machines</i>
                                                </div>

                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques34"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>34</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques34 != "" && UserData.ques34 != "A" ? "(A)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques34' />
                                                      <i className='' >   Fewer types of products </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques34' />
                                                      <i className=''>   More frequent feeding</i>
                                                </div>

                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques35"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>35</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-5" && UserData.ques35 != "" && UserData.ques35 != "A" ? "(A)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques35' />
                                                      <i className='' >Greater numbers of products </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques35' />
                                                      <i className=''>  More factories</i>
                                                </div>
                                          </div>
                                    </div>
                              </div>


                              <div className="Q-articles p-3 font-bold mt-3">
                                    <h5>Questions 36-40</h5> <br />
                                    Complete the table.<br /> <br />
                                    Write NO MORE THAN TWO WORDS for each answer. <br />
                              </div>



                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Possible Solution</h5>
                                          <h5>Important Factor</h5>
                                          <h5>Examples</h5>
                                    </div>
                                    <div className='w-full p-3 flex gap-6 justify-between border-1 border-gray-400'>
                                          <h5>tourism</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                                <label htmlFor="ques36">Locals must
                                                      <span className='Numbers'>36</span>
                                                      <input type="text" name='ques36' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques36.match(/participate/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-5" && UserData.ques36 != "" && UserData.ques36 == "participate" && "text-green-700"}
                                                             `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-5" && UserData.ques36 != "" && !UserData.ques36.match(/participate/gi) ? "(participate)" : ""}
                                                      </i>

                                                      Daylesford area uses its
                                                      <span className='Numbers'>37</span>
                                                      <input type="text" name='ques37' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques37.match(/natural springs/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Actual-test-5" && UserData.ques37 != "" && UserData.ques37 == "natural springs" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-5" && UserData.ques37 != "" && !UserData.ques37.match(/natural springs/gi) ? "(natural springs)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <div className="question flex flex-wrap gap-2">
                                                <label htmlFor="ques38">using the</label>
                                                <span className='Numbers'>38</span>
                                                <input type="text" name='ques38' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques38.match(/local product/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques38 != "" && UserData.ques38 == "local product" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques38 != "" && !UserData.ques38.match(/local product/gi) ? "(local product)" : ""}
                                                </i>

                                                <label htmlFor="ques39">– is</label>
                                                <span className='Numbers'>39</span>
                                                <input type="text" name='ques39' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques39.match(/characterized/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques39 != "" && UserData.ques39 == "characterized" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques39 != "" && !UserData.ques39.match(/characterized/gi) ? "(characterized)" : ""}
                                                </i>
                                                <p>by its distinctive product– must market the idea effectively</p>

                                                <label htmlFor="ques40">– Shepparton is known for its</label>
                                                <span className='Numbers'>40</span>
                                                <input type="text" name='ques40' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-5" && !UserData.ques40.match(/mature/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Actual-test-5" && UserData.ques40 != "" && UserData.ques40 == "mature" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-5" && UserData.ques40 != "" && !UserData.ques40.match(/mature/gi) ? "(mature)" : ""}
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