"use client";
import React, { useRef , useState } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
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
            ["family"],
            ["fit"],
            ["hotels"],
            ["carrowniskey"],
            ["week"],
            ["bay"],
            ["September"],
            ["19"],
            ["30"],
            ["boots"],
            ["B"], ["B"], ["C"], ["C"], ["A"], ["E"], ["D"], ["G"], ["F"], ["C"],
            ["B"], ["A"], ["A"], ["B"], ["C"], ["A"], ["D"], ["B"], ["F"], ["H"],
            ["mud"],
            ["feathers"],
            ["shape"],
            ["moon"],
            ["neck"],
            ["evidence"],
            ["destinations"],
            ["oceans"],
            ["recovery"],
            ["atlas"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part1.mp3?_=1" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part1.mp3?_=1") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Advice on surfing holidays</h5> <br /> <br />
                                    <h5>Jack’s advice</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Recommends surfing for</label>
                                          <span className='Numbers'>1</span>
                                          <input type="text" name='ques1' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques1.match(/family/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques1 != "" && UserData.ques1 == "family" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques1 != "" && !UserData.ques1.match(/family/gi) ? "(family)" : ""}
                                          </i>
                                          <p> holidays in the summer</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Need to be quite </label>
                                          <span className='Numbers'>2</span>
                                          <input type="text" name='ques2' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques2.match(/fit/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques2 != "" && UserData.ques2 == "fit" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques2 != "" && !UserData.ques2.match(/fit/gi) ? "(fit)" : ""}
                                          </i>
                                    </div><br /> <br />
                                    <h5>Irish surfing locations</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   County Clare <br /> <br />

                                                –  Lahinch has some good quality
                                                <span className='Numbers'>3</span>
                                                <input type="text" name='ques3' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques3.match(/hotels/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques3 != "" && UserData.ques3 == "hotels" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques3 != "" && !UserData.ques3.match(/hotels/gi) ? "(hotels)" : ""}
                                                </i>
                                          </label>
                                          <p> and surf schools
                                                –  There are famous cliffs nearby</p>
                                    </div> <br />
                                    <h5>Lunch club</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   County Mayo--

                                                –  Good surf school at </label>
                                          <span className='Numbers'>4</span>
                                          <input type="text" name='ques4' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques4.match(/carrowniskey/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques4 != "" && UserData.ques4 == "carrowniskey" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques4 != "" && !UserData.ques4.match(/carrowniskey/gi) ? "(carrowniskey)" : ""}
                                          </i>
                                          <p> beach</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">  –  Surf camp lasts for one</label>
                                          <span className='Numbers'>5</span>
                                          <input type="text" name='ques5' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques5.match(/week/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques5 != "" && UserData.ques5 == "week" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques5 != "" && !UserData.ques5.match(/week/gi) ? "(week)" : ""}
                                          </i>
                                    </div> <br /> <br />
                                    <h5>Help for individuals needed next week</h5><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6"> –  Can also explore the loca</label>
                                          <span className='Numbers'>6</span>
                                          <input type="text" name='ques6' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques6.match(/bay/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques6 != "" && UserData.ques6 == "bay" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques6 != "" && !UserData.ques6.match(/bay/gi) ? "(bay)" : ""}
                                          </i>
                                          <p>by kayak</p>
                                    </div> <br />

                                    <h5>Weather</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Best month to go:</label>
                                          <span className='Numbers'>7</span>
                                          <input type="text" name='ques7' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques7.match(/September/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques7 != "" && UserData.ques7 == "September" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques7 != "" && !UserData.ques7.match(/September/gi) ? "(September)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Average temperature in summer: approx</label>
                                          <span className='Numbers'>8</span>
                                          <input type="text" name='ques8' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques8.match(/19/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques8 != "" && UserData.ques8 == "19" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques8 != "" && !UserData.ques8.match(/19/gi) ? "(19)" : ""}
                                          </i>
                                          <p>degrees</p>
                                    </div> <br />
                                    <h5>Costs</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Equipment
                                                –  Wetsuit and surfboard:</label>
                                          <span className='Numbers'>9</span>
                                          <input type="text" name='ques9' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques9.match(/30/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques9 != "" && UserData.ques9 == "30" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques9 != "" && !UserData.ques9.match(/30/gi) ? "(30)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> euros per day

                                                –  Also advisable to hire </label>
                                          <span className='Numbers'>10</span>
                                          <input type="text" name='ques10' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques10.match(/boots/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques10 != "" && UserData.ques10 == "boots" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques10 != "" && !UserData.ques10.match(/boots/gi) ? "(boots)" : ""}
                                          </i>
                                          <p>for warmth</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part2.mp3?_=2") }}
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
                                    Questions 11-12<br /><br />
                                    Which TWO facts are given about the school’s extended hours childcare service?<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-center mt-3 mb-3'>Oniton Hall</h5>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'>
                                                <span className='Numbers mr-1 mb-2'>11</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques11 != "" && UserData.ques11 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >   It started recently.</i>
                                                      <i className=''>  More children attend after school than before school.</i>
                                                      <i className=''>An average of 50 children attend in the mornings. </i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>12</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques12 != "" && UserData.ques12 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >A child cannot attend both the before and after school sessions.</i>
                                                      <i className='mt-[-6px] sm:mt-[0px]'>The maximum number of children who can attend is 70.</i>
                                                      <i className='mt-[-5px] sm:mt-[0px]'>a place for artists and writers.</i>
                                                </div>
                                          </div>
                                    </div>


                                    <div className="Q-articles">
                                          <h5></h5> <br />
                                          Questions 13-15 <br /><br />
                                          Choose the correct letter, A, B or C.?<br /> <br />
                                    </div>


                                    <div className='mb-3 mt-2'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                                How much does childcare cost for a complete afternoon session per child?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques13 != "" && UserData.ques13 != "C" ? "(C)" : ""}</i>
                                          </label>

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
                                                      <i className='' >£3.50.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> £5.70</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> £7.20</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>14</span>
                                                <label htmlFor="ques14">  What does the manager say about food?
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques14 != "" && UserData.ques14 != "C" ? "(C)" : ""}</i>
                                                </label></div>
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
                                                      <i className='' >Children with allergies should bring their own food.</i>
                                                      <i className='mt-[-5px] sm:mt-[0px]'>Children with allergies should bring their own food.</i>
                                                      <i className='mt-[-5px] sm:mt-[0px]'>  Children are given a proper meal at 5 p.m.</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />
                                    <div className='mb-3 mt-2'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>15</span>
                                                What is different about arrangements in the school holidays?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques15 != "" && UserData.ques15 != "A" ? "(A)" : ""}</i>
                                          </label>
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
                                                      <i className='' > Children from other schools can attend.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Older children can attend</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> A greater number of children can attend.</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />


                                    <div className="Q-articles">
                                          <h5>Questions 16-20</h5> <br />
                                          What information is given about each of the following activities on offer?<br /><br />
                                          <i className='font-bold p-3 mt-2 mb-2'>Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 16-20.</i>
                                          <i className='font-bold p-3 mt-2 mb-2 border-1 border-black'>
                                                Information<br /><br />

                                                A   has limited availability<br /><br />

                                                B   is no longer available<br /><br />

                                                C   is for over 8s only<br /><br />

                                                D   requires help from parents<br /><br />

                                                E   involves an additional fee<br /><br />

                                                F   is a new activity<br /><br />

                                                G   was requested by children<br /><br />
                                          </i>
                                          <h5>Activities</h5>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="Name">Spanish      </label>
                                          <input type="text" name='ques16' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques16 != "E" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques16 != "" && UserData.ques16 == "E" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques16 != "" && UserData.ques16 != "E" ? "(E)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="Name">Music            </label>
                                          <input type="text" name='ques17' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques17 != "D" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques17 != "" && UserData.ques17 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques17 != "" && UserData.ques17 != "D" ? "(D)" : ""}
                                          </i>

                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="Name">  Painting  </label>
                                          <input type="text" name='ques18' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques18 != "G" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques18 != "" && UserData.ques18 == "G" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques18 != "" && UserData.ques18 != "G" ? "(G)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="Name">  Yoga</label>
                                          <input type="text" name='ques19' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques19 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques19 != "" && UserData.ques19 == "F" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques19 != "" && UserData.ques19 != "F" ? "(F)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="Name">Cooking</label>
                                          <input type="text" name='ques20' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques20 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques20 != "" && UserData.ques20 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques20 != "" && UserData.ques20 != "C" ? "(C)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part3.mp3?_=3") }}
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
                                    Questions 21-24<br /> <br />
                                    <h5 className='text-center'> Holly’s Work Placement Tutorial<br /> <br /></h5>
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>21</span>
                                                Holly has chosen the Orion Stadium placement because
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques21 != "" && UserData.ques21 != "B" ? "(B)" : ""}</i>
                                          </label>

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
                                                      <i className='' >  it involves children.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> it is outdoors.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> it sounds like fun</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>22</span>
                                                Which aspect of safety does Dr Green emphasise most?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques22 != "" && UserData.ques22 != "A" ? "(A)" : ""}</i>
                                          </label>
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
                                                      <i className='' >ensuring children stay in the stadium</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>checking the equipment children will use</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> removing obstacles in changing rooms</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>
                                                What does Dr Green say about the spectators?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques23 != "" && UserData.ques23 != "A" ? "(A)" : ""}</i>
                                          </label>
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
                                                      <i className='' >They can be hard to manage.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>They make useful volunteers.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  They shouldn’t take photographs.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>24</span>
                                                What has affected the schedule in the past?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-7" && UserData.ques24 != "" && UserData.ques24 != "B" ? "(B)" : ""}</i>
                                          </label>
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
                                                      <i className='' >bad weather</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>an injury</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  extra time</i>
                                                </div>
                                          </div>
                                    </div>







                                    <div className="Q-articles mt-3">
                                          <h5>
                                                Questions 25-30<br /> <br />
                                                What do Holly and her tutor agree is an important aspect of each of the following events management skills?<br /><br />
                                                Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.</h5> <br /><br />
                                          <div className='p-3 border-1 rounded border-black'>
                                                <h5 className='text-center mt-3 mb-3'>Important aspects</h5>
                                                <i className='font-bold p-3 mt-2 mb-2'>
                                                      A   being flexible<br /><br />
                                                      B   focusing on details<br /><br />
                                                      C   having a smart appearance<br /><br />
                                                      D   hiding your emotions<br /><br />
                                                      E   relying on experts<br /><br />
                                                      F   trusting your own views<br /><br />
                                                      G   doing one thing at a time<br /><br />
                                                      H   thinking of the future<br /><br />
                                                </i>
                                          </div><br /><br />
                                          <h5>Events management skills</h5> <br />
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="Name">   Communication </label>
                                          <input type="text" name='ques25' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques25 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques25 != "" && UserData.ques25 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques25 != "" && UserData.ques25 != "C" ? "(C)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>26</span>
                                          <label htmlFor="Name"> Organisation  </label>
                                          <input type="text" name='ques26' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques26 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques26 != "" && UserData.ques26 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques26 != "" && UserData.ques26 != "A" ? "(A)" : ""}
                                          </i>
                                    </div><br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="Name">Time management </label>
                                          <input type="text" name='ques27' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques27 != "D" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques27 != "" && UserData.ques27 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques27 != "" && UserData.ques27 != "D" ? "(D)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>28</span>
                                          <label htmlFor="Name">Creativity </label>
                                          <input type="text" name='ques28' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques28 != "B" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques28 != "" && UserData.ques28 == "B" && "text-green-700"}
                                                 `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques28 != "" && UserData.ques28 != "B" ? "(B)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>29</span>
                                          <label htmlFor="Name">Leadership </label>
                                          <input type="text" name='ques29' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques29 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques29 != "" && UserData.ques29 == "F" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques29 != "" && UserData.ques29 != "F" ? "(F)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>30</span>
                                          <label htmlFor="Name">Networking  </label>
                                          <input type="text" name='ques30' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques30 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques30 != "" && UserData.ques30 == "H" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques30 != "" && UserData.ques30 != "F" ? "(H)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-2 mb-2 text-inherit'>Bird Migration Theory</h5> <br /> <br />
                              </div>
                              <h5>Most birds are believed to migrate seasonally. <br />
                                    Hibernation theory</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   It was believed that birds hibernated underwater or buried themselves in</label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques31.match(/mud/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques31 != "" && UserData.ques31 == "mud" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques31 != "" && !UserData.ques31.match(/mud/gi) ? "(mud)" : ""}
                                          </i>

                                    </div><br />
                                    <p> ●   This theory was later disproved by experiments on caged birds.</p> <br />
                                    <h5>Transmutation theory</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name"> ●   Aristotle believed birds changed from one species into another in summer and winter.
                                                –  In autumn he observed that redstarts experience the loss of  </label> </label>
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques32.match(/feathers/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques32 != "" && UserData.ques32 == "feathers" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques32 != "" && !UserData.ques32.match(/feathers/gi) ? "(feathers)" : ""}
                                          </i>
                                          <p> and thought they then turned into robins.</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name"> –  Aristotle’s assumptions were logical because the two species of birds had a similar</label>
                                          <span className='Numbers'>33</span>
                                          <input type="text" name='ques33' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques33.match(/shape/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques33 != "" && UserData.ques33 == "shape" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques33 != "" && !UserData.ques33.match(/shape/gi) ? "(shape)" : ""}
                                          </i>
                                    </div> <br />
                                    <h5>17th century</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Charles Morton popularised the idea that birds fly to the  </label>
                                          <span className='Numbers'>34</span>
                                          <input type="text" name='ques34' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques34.match(/moon/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques34 != "" && UserData.ques34 == "moon" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques34 != "" && !UserData.ques34.match(/moon/gi) ? "(moon)" : ""}
                                          </i>
                                          <p>in winter.</p>
                                    </div><br /> <br />
                                    <h5>Scientific developments</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   In 1822, a stork was killed in Germany which had an African spear in its</label>
                                          <span className='Numbers'>35</span>
                                          <input type="text" name='ques35' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques35.match(/neck/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques35 != "" && UserData.ques35 == "neck" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques35 != "" && !UserData.ques35.match(/neck/gi) ? "(neck)" : ""}
                                          </i>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">   –  previously there had been no </label>
                                          <span className='Numbers'>36</span>
                                          <input type="text" name='ques36' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques36.match(/evidence/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques36 != "" && UserData.ques36 == "evidence" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques36 != "" && !UserData.ques36.match(/evidence/gi) ? "(evidence)" : ""}
                                          </i>
                                          <p>that storks migrate to Africa</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Little was known about the</label>
                                          <span className='Numbers'>37</span>
                                          <input type="text" name='ques37' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques37.match(/destinations/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques37 != "" && UserData.ques37 == "destinations" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques37 != "" && !UserData.ques37.match(/destinations/gi) ? "(destinations)" : ""}
                                          </i>
                                          <p> and journeys of migrating birds until the practice of ringing was established..</p>
                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">–  It was thought large birds carried small birds on some journeys because they were considered incapable of travelling across huge</label>
                                          <span className='Numbers'>38</span>
                                          <input type="text" name='ques38' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques38.match(/oceans/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques38 != "" && UserData.ques38 == "oceans" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques38 != "" && !UserData.ques38.match(/oceans/gi) ? "(oceans)" : ""}
                                          </i>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">–  Ringing depended on what is called the </label>
                                          <span className='Numbers'>39</span>
                                          <input type="text" name='ques39' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques39.match(/recovery/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques39 != "" && UserData.ques39 == "recovery" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques39 != "" && !UserData.ques39.match(/recovery/gi) ? "(recovery)" : ""}
                                          </i>
                                          <p>’ of dead birds.</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   In 1931, the first</label>
                                          <span className='Numbers'>40</span>
                                          <input type="text" name='ques40' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-7" && !UserData.ques40.match(/atlas/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-7" && UserData.ques40 != "" && UserData.ques40 == "atlas" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-7" && UserData.ques40 != "" && !UserData.ques40.match(/atlas/gi) ? "(atlas)" : ""}
                                          </i>
                                          <p> to show the migration of European birds was printed.</p>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage