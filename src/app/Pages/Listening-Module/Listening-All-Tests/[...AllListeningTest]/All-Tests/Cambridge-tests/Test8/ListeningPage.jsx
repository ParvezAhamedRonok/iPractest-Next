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
            ["floors"],
            ["fridge"],
            ["shirts"],
            ["windows"],
            ["balcony"],
            ["electrician"],
            ["dust"],
            ["police"],
            ["training"],
            ["review"],
            ["A"], ["A"], ["A"], ["C"], ["A"], ["C"], ["B"], ["C"], ["B"], ["A"],
            ["C"], ["B"], ["A"], ["A"], ["B"], ["F"], ["A"], ["D"], ["C"], ["G"],
            ["golden"],
            ["healthy"],
            ["climate"],
            ["rock"],
            ["diameter"],
            ["tube"],
            ["firm"],
            ["steam"],
            ["cloudy"],
            ["liter"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part1.mp3?_=1" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part1.mp3?_=1") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Easy Life Cleaning Services</h5> <br /> <br />
                                    <h5>Basic cleaning package offered</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <h5>●   Cleaning all surfaces</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Cleaning the </label>
                                          <span className='Numbers'>1</span>
                                          <input type="text" name='ques1' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques1.match(/floors/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques1 != "" && UserData.ques1 == "floors" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques1 != "" && !UserData.ques1.match(/floors/gi) ? "(floors)" : ""}
                                          </i>
                                          <p>throughout the apartment</p>
                                    </div>
                                    <h5>●   Cleaning shower, sinks, toilet etc. <br /><br />
                                          Additional services agreed</h5>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Every week <br />

                                                –  Cleaning the
                                                <span className='Numbers'>2</span>
                                                <input type="text" name='ques2' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques2.match(/fridge/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques2 != "" && UserData.ques2 == "fridge" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques2 != "" && !UserData.ques2.match(/fridge/gi) ? "(fridge)" : ""}
                                                </i>
                                          </label>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">   –  Ironing clothes –</label>
                                          <span className='Numbers'>3</span>
                                          <input type="text" name='ques3' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques3.match(/shirts/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques3 != "" && UserData.ques3 == "shirts" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques3 != "" && !UserData.ques3.match(/shirts/gi) ? "(shirts)" : ""}
                                          </i>
                                          <p> only</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Every month <br />
                                                –  Cleaning all the
                                                <span className='Numbers'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques4.match(/windows/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques4 != "" && UserData.ques4 == "windows" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques4 != "" && !UserData.ques4.match(/windows/gi) ? "(windows)" : ""}
                                                </i>
                                          </label>
                                          <p>  from the inside</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> –  Washing down the </label>
                                          <span className='Numbers'>5</span>
                                          <input type="text" name='ques5' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques5.match(/balcony/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques5 != "" && UserData.ques5 == "balcony" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques5 != "" && !UserData.ques5.match(/balcony/gi) ? "(balcony)" : ""}
                                          </i>
                                    </div> <br /> <br />
                                    <h5>Other possibilities</h5><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6">●   They can organise a plumber or an</label>
                                          <span className='Numbers'>6</span>
                                          <input type="text" name='ques6' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques6.match(/electrician/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques6 != "" && UserData.ques6 == "electrician" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques6 != "" && !UserData.ques6.match(/electrician/gi) ? "(electrician)" : ""}
                                          </i>
                                          <p> if necessary.</p>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   A special cleaning service is available for customers who are allergic to</label>
                                          <span className='Numbers'>7</span>
                                          <input type="text" name='ques7' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques7.match(/dust/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques7 != "" && UserData.ques7 == "dust" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques7 != "" && !UserData.ques7.match(/dust/gi) ? "(dust)" : ""}
                                          </i>
                                    </div> <br />
                                    <h5>Information on the cleaners</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Before being hired, all cleaners have a background check carried out by the</label>
                                          <span className='Numbers'>8</span>
                                          <input type="text" name='ques8' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques8.match(/police/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques8 != "" && UserData.ques8 == "police" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques8 != "" && !UserData.ques8.match(/police/gi) ? "(police)" : ""}
                                          </i>
                                          <p>References are required.</p>
                                    </div>
                                    <h5>Costs</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   All cleaners are given</label>
                                          <span className='Numbers'>9</span>
                                          <input type="text" name='ques9' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques9.match(/training/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques9 != "" && UserData.ques9 == "training" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques9 != "" && !UserData.ques9.match(/training/gi) ? "(training)" : ""}
                                          </i>
                                          <p> for two weeks.</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Customers send a </label>
                                          <span className='Numbers'>10</span>
                                          <input type="text" name='ques10' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques10.match(/review/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques10 != "" && UserData.ques10 == "review" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques10 != "" && !UserData.ques10.match(/review/gi) ? "(review)" : ""}
                                          </i>
                                          <p>after each visit.Usually, each customer has one regular cleaner</p> <br /> <br />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part2.mp3?_=2") }}
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
                                    Questions 11 – 14<br /><br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-center mt-3 mb-3'>Oniton Hall</h5>
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3 flex flex-wrap'>
                                                <label htmlFor="">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>
                                                      Many hotel managers are unaware that their staff often leave because of
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-8" && UserData.ques11 != "" && UserData.ques11 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >   a lack of training..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> long hours..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>low pay. </i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3 flex '>
                                                <label htmlFor="">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                                      What is the impact of high staff turnover on managers?
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-8" && UserData.ques12 != "" && UserData.ques12 != "A" ? "(A)" : ""}</i>
                                                </label>
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
                                                      <i className='' > an increased workload</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>low morale</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>an inability to meet targets</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3 flex flex-wrap'>
                                                <label htmlFor="">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                                      What mistake should managers always avoid?
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-8" && UserData.ques13 != "" && UserData.ques13 != "A" ? "(A)" : ""}</i>
                                                </label>
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
                                                      <i className='' >failing to treat staff equally</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>reorganising shifts without warning</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>neglecting to have enough staff during busy periods</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3 flex flex-wrap'>
                                                <label htmlFor="">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>14</span>
                                                      What unexpected benefit did Dunwich Hotel notice after improving staff retention rates?
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-8" && UserData.ques14 != "" && UserData.ques14 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >a fall in customer complaints</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>an increase in loyalty club membership</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> a rise in spending per customer</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />



                                    <div className="Q-articles">
                                          <h5>Questions 15-20</h5> <br />
                                          Which way of reducing staff turnover was used in each of the following hotels?<br /><br />
                                          <i className='font-bold p-3 mt-2 mb-2'>Write the correct letter, A, B or C, next to Questions 15-20.</i>
                                          <i className='font-bold p-3 mt-2 mb-2 border-1 border-black'>
                                                <h5 className='text-center'>Ways of reducing staff turnover</h5>
                                                A   improving relationships and teamwork<br /><br />

                                                B   offering incentives and financial benefits<br /><br />

                                                C   providing career opportunities<br /><br />
                                          </i>
                                          <h5>Hotels</h5>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="Name">The Sun Club   </label>
                                          <input type="text" name='ques15' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques15 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques15 != "" && UserData.ques15 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques15 != "" && UserData.ques15 != "A" ? "(A)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="Name"> The Portland   </label>
                                          <input type="text" name='ques16' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques16 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques16 != "" && UserData.ques16 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques16 != "" && UserData.ques16 != "C" ? "(C)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="Name"> Bluewater Hotels    </label>
                                          <input type="text" name='ques17' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques17 != "B" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques17 != "" && UserData.ques17 == "B" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques17 != "" && UserData.ques17 != "B" ? "(B)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="Name"> Pentlow Hotels </label>
                                          <input type="text" name='ques18' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques18 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques18 != "" && UserData.ques18 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques18 != "" && UserData.ques18 != "C" ? "(C)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="Name">  Green Planet </label>
                                          <input type="text" name='ques19' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques19 != "B" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques19 != "" && UserData.ques19 == "B" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques19 != "" && UserData.ques19 != "B" ? "(B)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="Name">The Amesbury </label>
                                          <input type="text" name='ques20' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques20 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques20 != "" && UserData.ques20 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques20 != "" && UserData.ques20 != "A" ? "(A)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part3.mp3?_=3") }}
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
                                    <h5>PART 3  <br />
                                          Questions 21-22</h5> <br />
                                    <h5 className='text-center'>Which TWO points do Thomas and Jeanne make about Thomas’s sporting activities at school?<br /> <br /></h5>
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>21</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-8" && UserData.ques21 != "" && UserData.ques21 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' > He should have felt more positive about them.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  The training was too challenging for him.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> He could have worked harder at them.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>22</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-8" && UserData.ques22 != "" && UserData.ques22 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >His parents were disappointed in him.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>His fellow students admired him.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> removing obstacles in changing</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />
                                    <div className="Q-articles">
                                          <h5>Questions 23-24</h5> <br />
                                          <br />
                                          <h5 className='text-center'>Which TWO feelings did Thomas experience when he was in Kenya? <br /></h5> <br />
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>23</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-8" && UserData.ques23 != "" && UserData.ques23 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >disbelief.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>relief</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> stress</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>24</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-8" && UserData.ques24 != "" && UserData.ques24 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >gratitude</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>homesickness</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  extra time</i>
                                                </div>
                                          </div>
                                    </div>







                                    <div className="Q-articles mt-3 font-bold">
                                          <h5>
                                                Questions 25-30<br /> <br />
                                                What comment do the students make about the development of each of the following items of sporting equipment?<br /><br />
                                                Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.</h5> <br /><br />
                                          <div className='p-3 border-1 rounded border-black'>
                                                <h5 className='text-center mt-3 mb-3'>Comments about the development of the equipment</h5>
                                                <i className='font-bold p-3 mt-2 mb-2'>
                                                      A   It could cause excessive sweating.<br /><br />

                                                      B   The material was being mass produced for another purpose.<br /><br />

                                                      C   People often needed to make their own.<br /><br />

                                                      D   It often had to be replaced.<br /><br />

                                                      E   The material was expensive.<br /><br />

                                                      F   It was unpopular among spectators.<br /><br />

                                                      G   It caused injuries.<br /><br />

                                                      H   No one ring it liked it at first.<br /><br />
                                                </i>
                                          </div><br /><br />
                                          <h5>Items of sporting equipment</h5> <br />
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="Name"> the table tennis bat </label>
                                          <input type="text" name='ques25' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques25 != "B" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques25 != "" && UserData.ques25 == "B" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques25 != "" && UserData.ques25 != "B" ? "(B)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>26</span>
                                          <label htmlFor="Name">  the cricket helmet  </label>
                                          <input type="text" name='ques26' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques26 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques26 != "" && UserData.ques26 == "F" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques26 != "" && UserData.ques26 != "F" ? "(F)" : ""}
                                          </i>
                                    </div><br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="Name">the cycle helmet  </label>
                                          <input type="text" name='ques27' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques27 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques27 != "" && UserData.ques27 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques27 != "" && UserData.ques27 != "A" ? "(A)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>28</span>
                                          <label htmlFor="Name">the golf club </label>
                                          <input type="text" name='ques28' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques28 != "D" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques28 != "" && UserData.ques28 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques28 != "" && UserData.ques28 != "D" ? "(D)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>29</span>
                                          <label htmlFor="Name">the hockey stick    </label>
                                          <input type="text" name='ques29' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques29 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques29 != "" && UserData.ques29 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques29 != "" && !UserData.ques29 != "C" ? "(C)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>30</span>
                                          <label htmlFor="Name"> the football      </label>
                                          <input type="text" name='ques30' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques30 != "G" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques30 != "" && UserData.ques30 == "G" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques30 != "" && UserData.ques30 != "G" ? "(G)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-4 mb-2 text-inherit'>Maple syrup</h5> <br /> <br />
                              </div>
                              <h5>What is maple syrup? <br /> <br />
                                    ●   made from the sap of the maple tree<br /> <br />
                                    ●   added to food or used in cooking</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   colour described as</label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques31.match(/golden/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques31 != "" && UserData.ques31 == "golden" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques31 != "" && !UserData.ques31.match(/golden/gi) ? "(golden)" : ""}
                                          </i>

                                    </div><br />
                                    <h5>Transmutation theory</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name">●   very </label> </label>
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques32.match(/healthy/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques32 != "" && UserData.ques32 == "healthy" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques32 != "" && !UserData.ques32.match(/healthy/gi) ? "(healthy)" : ""}
                                          </i>
                                          <p> compared to refined sugar</p>
                                    </div> <br />
                                    <h5>The maple tree  <br />  <br />
                                          ●   has many species<br />  <br />
                                          ●   needs sunny days and cool nights<br />  <br />
                                          ●   maple leaf has been on the Canadian flag since 1964<br />  <br />
                                          ●   needs moist soil but does not need fertiliser as wel</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   best growing conditions and</label>
                                          <span className='Numbers'>33</span>
                                          <input type="text" name='ques33' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques33.match(/climate/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques33 != "" && UserData.ques33 == "climate" && "text-green-700"}
                                                  `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques33 != "" && !UserData.ques33.match(/climate/gi) ? "(climate)" : ""}
                                          </i>
                                          <p>are in Canada and North America</p>
                                    </div> <br />
                                    <h5>Early maple sugar producers <br /> <br />
                                          ●   made holes in the tree trunks</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   used hot</label>
                                          <span className='Numbers'>34</span>
                                          <input type="text" name='ques34' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques34.match(/rock/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques34 != "" && UserData.ques34 == "rock" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques34 != "" && !UserData.ques34.match(/rock/gi) ? "(rock)" : ""}
                                          </i>
                                          <p>to heat the sap</p>
                                    </div><br /> <br />
                                    <i>●   used tree bark to make containers for collection <br />

                                          ●   sweetened food and drink with sugar</i> <br /> <br />
                                    <h5>Today’s maple syrup <br /> <br />

                                          The trees</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Tree trunks may not have the correct</label>
                                          <span className='Numbers'>35</span>
                                          <input type="text" name='ques35' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques35.match(/diameter/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques35 != "" && UserData.ques35 == "diameter" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques35 != "" && !UserData.ques35.match(/diameter/gi) ? "(diameter)" : ""}
                                          </i>
                                          <p>until they have been growing for 40 years.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   The changing temperature and movement of water within the tree produces the sap.
                                                The production<br /> <br />
                                                ●   A tap drilled into the trunk and a  </label>
                                          <span className='Numbers'>36</span>
                                          <input type="text" name='ques36' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques36.match(/tube/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques36 != "" && UserData.ques36 == "tube" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques36 != "" && !UserData.ques36.match(/tube/gi) ? "(tube)" : ""}
                                          </i>
                                          <p>carries the sap into a bucket.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Large pans of sap called evaporators are heated by means of a</label>
                                          <span className='Numbers'>37</span>
                                          <input type="text" name='ques37' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques37.match(/firm/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques37 != "" && UserData.ques37 == "firm" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques37 != "" && !UserData.ques37.match(/firm/gi) ? "(firm)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   A lot of
                                                <span className='Numbers'>38</span>
                                                <input type="text" name='ques38' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques38.match(/steam/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques38 != "" && UserData.ques38 == "steam" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques38 != "" && !UserData.ques38.match(/steam/gi) ? "(steam)" : ""}
                                                </i>
                                                is produced during the evaporation process.</label>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   ‘Sugar sand’ is removed because it makes the syrup look
                                                <span className='Numbers'>39</span>
                                                <input type="text" name='ques39' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques39.match(/cloudy/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques39 != "" && UserData.ques39 == "cloudy" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques39 != "" && !UserData.ques39.match(/cloudy/gi) ? "(cloudy)" : ""}
                                                </i>
                                                and affects the taste.</label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   The syrup is ready for use. <br /> <br />

                                                ●   A huge quantity of sap is needed to make a
                                                <span className='Numbers'>40</span>
                                                <input type="text" name='ques40' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-8" && !UserData.ques40.match(/liter/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-8" && UserData.ques40 != "" && UserData.ques40 == "liter" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-8" && UserData.ques40 != "" && !UserData.ques40.match(/liter/gi) ? "(liter)" : ""}
                                                </i>
                                                of maple syrup.</label>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage