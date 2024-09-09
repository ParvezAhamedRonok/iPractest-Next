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
            ["litter"],
            ["dogs"],
            ["insects"],
            ["bitterfilies"],
            ["wall"],
            ["island"],
            ["boots"],
            ["beginners"],
            ["spoons"],
            ["35"],
            ["A"], ["C"], ["B"], ["B"], ["A"], ["A"], ["B"], ["A"], ["A"], ["C"],
            ["A"], ["B"], ["B"], ["A"], ["C"], ["C"], ["A"], ["E"], ["F"], ["C"],
            ["puzzle"],
            ["logic"],
            ["confusion"],
            ["meditation"],
            ["stone"],
            ["coins"],
            ["tree"],
            ["breathing"],
            ["paper"],
            ["anziety"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part1.mp3?_=1" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part1.mp3?_=1") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Buckworth Conservation Group</h5> <br /> <br />
                                    <h5>Regular activities <br /> Beach</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   making sure the beach does not have</label>
                                          <span className='Numbers'>1</span>
                                          <input type="text" name='ques1' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques1.match(/litter/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques1 != "" && !UserData.ques1.match(/litter/gi) ? "(litter)" : ""}
                                          </i>
                                          <p>on it</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">● no</label>
                                          <span className='Numbers'>2</span>
                                          <input type="text" name='ques2' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques2.match(/dogs/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques2 != "" && !UserData.ques2.match(/dogs/gi) ? "(dogs)" : ""}
                                          </i>
                                          <p> Nature reserve</p>
                                    </div><br /> <br />

                                    <h5>●   maintaining paths <br />
                                          ●   nesting boxes for birds installed</h5><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   next task is taking action to attract </label>
                                          <span className='Numbers'>3</span>
                                          <input type="text" name='ques3' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques3.match(/insects/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques3 != "" && !UserData.ques3.match(/insects/gi) ? "(insects)" : ""}
                                          </i>
                                          <p> to the place</p>
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   identifying types of </label>
                                          <span className='Numbers'>4</span>
                                          <input type="text" name='ques4' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques4.match(/bitterfilies/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques4 != "" && !UserData.ques4.match(/bitterfilies/gi) ? "(bitterfilies)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   building a new </label>
                                          <span className='Numbers'>5</span>
                                          <input type="text" name='ques5' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques5.match(/wall/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques5 != "" && !UserData.ques5.match(/wall/gi) ? "(wall)" : ""}
                                          </i>
                                    </div> <br /> <br />
                                    <h5>Forthcoming events <br /> <br />
                                          Saturday<br /> <br />
                                          ●   meet at Dunsmore Beach car park</h5><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6">●   walk across the sands and reach the</label>
                                          <span className='Numbers'>6</span>
                                          <input type="text" name='ques6' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques6.match(/island/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques6 != "" && !UserData.ques6.match(/island/gi) ? "(island)" : ""}
                                          </i>
                                    </div> <br />
                                    <i>●   take a picnic</i> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   wear appropriate</label>
                                          <span className='Numbers'>7</span>
                                          <input type="text" name='ques7' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques7.match(/boots/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques7 != "" && !UserData.ques7.match(/boots/gi) ? "(boots)" : ""}
                                          </i>
                                          <p>Woodwork session</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">   suitable for </label>
                                          <span className='Numbers'>8</span>
                                          <input type="text" name='ques8' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques8.match(/beginners/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques8 != "" && !UserData.ques8.match(/beginners/gi) ? "(beginners)" : ""}
                                          </i>
                                          <p>to participate in</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   making </label>
                                          <span className='Numbers'>9</span>
                                          <input type="text" name='ques9' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques9.match(/spoons/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques9 != "" && !UserData.ques9.match(/spoons/gi) ? "(spoons)" : ""}
                                          </i>
                                          <p>out of wood <br />
                                                ●   17th, from 10 a.m. to 3 p.m.</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   cost of session (no camping): </label>
                                          <span className='Numbers'>10</span>
                                          <p>£</p>
                                          <input type="text" name='ques10' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques10.match(/35/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques10 != "" && !UserData.ques10.match(/35/gi) ? "(35)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part2.mp3?_=2") }}
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
                                    Questions 11 and 14<br /><br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-center mt-3 mb-3'>Boat trip round Tasmania</h5>
                                    <div className='mb-3 mt-2'>
                                          <label className='text-justify mb-3 '>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>
                                                What is the maximum number of people who can stand on each side of the boat?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques11 != "" && UserData.ques11 != "A" ? "(A)" : ""}</i>
                                          </label>
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
                                                      <i className='' > 9</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> 15</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>18</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1            mb-2'>12</span>
                                                <label htmlFor="ques12"> What colour are the tour boats?
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques12 != "" && UserData.ques12 != "C" ? "(C)" : ""}</i>
                                                </label></div>
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
                                                      <i className='' >dark red</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> jet black</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>light green</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3 mt-2'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                                Which lunchbox is suitable for someone who doesn’t eat meat or fish?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques13 != "" && UserData.ques13 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >Lunchbox 1</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Lunch box 2</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Lunch box 3.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>14</span>
                                                <label htmlFor="ques14"> What should people do with their litter?
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques14 != "" && UserData.ques14 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' > take it home</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> hand it to a member of staff.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>put it in the bins provided on the boat</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />

                                    <div className="Q-articles">
                                          <h5>Questions 15-16</h5> <br />
                                          Which TWO features of the lighthouse does Lou mention?
                                          <i className='font-bold p-3 mt-2 mb-2'></i>
                                    </div> <br />
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>15</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques15 != "" && UserData.ques15 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >why it was built</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> who built it</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> how long it took to build</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>16</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques16 != "" && UserData.ques16 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >who staffed it</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  following instructions</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> what it was built with</i>
                                                </div>
                                          </div>
                                    </div>






                                    <div className="Q-articles mt-3">
                                          <h5>Questions 17-18</h5> <br />
                                          Which TWO types of creature might come close to the boat?
                                          <i className='font-bold p-3 mt-2 mb-2'></i>
                                    </div> <br />
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>17</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques17 != "" && UserData.ques17 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >sea eagles</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  fur seals</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  whales</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>18</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques18 != "" && UserData.ques18 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >dolphins</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> penguins</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> changarus</i>
                                                </div>
                                          </div>
                                    </div>



                                    <div className="Q-articles mt-3">
                                          <h5>Questions 19-20</h5> <br />
                                          Which TWO points does Lou make about the caves?<br /><br />
                                          <i className='font-bold p-3 mt-2 mb-2'></i>
                                    </div> <br />
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>19</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques19 != "" && UserData.ques19 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' > Someone will explain what is inside them.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>It is too dangerous for individuals to go near them</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  put it in the bins provided on the boat</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>20</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques20 != "" && UserData.ques20 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >The entrances to them are often blocked.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> Only large tourist boats can visit them.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> They cannot be reached on foot.</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part3.mp3?_=3") }}
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
                                    <h5 className='mt-3 mb-3 text-center'>Work experience for veterinary science students</h5>
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>21</span>
                                                What problem did both Diana and Tim have when arranging their work experience?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques21 != "" && UserData.ques21 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >make initial contact with suitable farms</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> organising transport to and from the farm</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> finding a placement for the required length of time</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>22</span>
                                                <label htmlFor="ques22"> Tim was pleased to be able to help
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques22 != "" && UserData.ques22 != "B" ? "(B)" : ""}</i>
                                                </label>
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
                                                      <i className='' >a lamb that had a broken leg.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>a sheep that was having difficult giving birth.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> a newly born lamb that was having trouble feeding.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>23</span>
                                                <label htmlFor="ques23"> Diana says the sheep on her farm
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques23 != "" && UserData.ques23 != "B" ? "(B)" : ""}</i>
                                                </label>
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
                                                      <i className='' >were of various different varieties.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>were mainly reared for their meat.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>had better quality wool than sheep on the hills.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>24</span>
                                                What did the students learn about adding supplements to chicken feed?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques24 != "" && UserData.ques24 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >These should only be given if specially needed.</i>
                                                      <i className=''>It is worth paying extra for the most effective ones.</i>
                                                      <i className=''>The amount given at one time should be limited.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>25</span>
                                                What happened when Diana was working with dairy cows?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques25 != "" && UserData.ques25 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >She identified some cows incorrectly.</i>
                                                      <i className=''>She accidentally threw some milk away.</i>
                                                      <i className='mt-2'>She made a mistake when storing milk.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>26</span>
                                                What did both farmers mention about vets and farming?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-5" && UserData.ques26 != "" && UserData.ques26 != "C" ? "(C)" : ""}</i>
                                          </label>

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

                                                <div className="flex flex-col gap-3 sm:gap-6 text-[12px] sm:text-[15px]">
                                                      <i className='' >Vets are failing to cope with some aspects of animal health.</i>
                                                      <i className=''>  There needs to be a fundamental change in the training of vets.</i>
                                                      <i className=''>Some jobs could be done by the farmer rather than by a vet.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="Q-articles">
                                          <h5>
                                                Questions 27-30<br />
                                                What opinion do the students give about each of the following modules on their veterinary science course?<br /><br />
                                                Choose FOUR answers from the box and write the correct letter, A-F, next to questions 27-30.</h5> <br /><br />
                                          <div className='p-3 border-1 rounded border-black'>
                                                <h5 className='text-center mt-3 mb-3'>Opinions</h5>
                                                <i className='font-bold p-3 mt-2 mb-2'>
                                                      A   Tim found this easier than expected.<br /><br />

                                                      B   Tim thought this was not very clearly organised.<br /><br />

                                                      C   Diana may do some further study on this.<br /><br />

                                                      D   They both found the reading required for this was difficult.<br /><br />

                                                      E   Tim was shocked at something he learned on this module.<br /><br />

                                                      F   They were both surprised how little is known about some aspects of this<br /><br />
                                                </i>
                                          </div><br /><br />
                                          <h5>Modules on Veterinary Science course</h5>
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="Name"> Medical terminology  </label>
                                          <input type="text" name='ques27' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques27.match(/A/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques27 != "" && !UserData.ques27.match(/A/gi) ? "(A)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>28</span>
                                          <label htmlFor="Name"> Diet and nutrition    </label>
                                          <input type="text" name='ques28' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques28.match(/E/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques28 != "" && !UserData.ques28.match(/E/gi) ? "(E)" : ""}
                                          </i>
                                    </div><br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>29</span>
                                          <label htmlFor="Name"> Animal disease     </label>
                                          <input type="text" name='ques29' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques29.match(/F/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques29 != "" && !UserData.ques29.match(/F/gi) ? "(F)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>30</span>
                                          <label htmlFor="Name">Wildlife medication </label>
                                          <input type="text" name='ques30' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques30.match(/C/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques30 != "" && !UserData.ques30.match(/C/gi) ? "(C)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-4 mb-2 text-inherit'>Labyrinths</h5> <br />
                              </div>
                              <h5>Definition<br />
                                    ●   a winding spiral path leading to a central area</h5> <br />
                              <h5>Labyrinths compared with mazes</h5> <br /> <br />

                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Mazes are a type of </label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques31.match(/puzzle/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques31 != "" && !UserData.ques31.match(/puzzle/gi) ? "(puzzle)" : ""}
                                          </i>
                                    </div><br />

                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques32.match(/logic/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques32 != "" && !UserData.ques32.match(/logic/gi) ? "(logic)" : ""}
                                          </i>
                                          <p>  is needed to navigate through a maze</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name"> –  the word ‘maze’ is derived from a word meaning a feeling of </label>
                                          <span className='Numbers'>33</span>
                                          <input type="text" name='ques33' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques33.match(/confusion/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques33 != "" && !UserData.ques33.match(/confusion/gi) ? "(confusion)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Labyrinths represent a journey through life <br />
                                                –  they have frequently been used in</label>
                                          <span className='Numbers'>34</span>
                                          <input type="text" name='ques34' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques34.match(/meditation/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques34 != "" && !UserData.ques34.match(/meditation/gi) ? "(meditation)" : ""}
                                          </i>
                                          <p>and prayer</p>
                                    </div><br /> <br />

                                    <h5 className='mt-3 mb-3'>His house on Guernsey <br />Early examples of the labyrinth spiral</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Ancient carvings on</label>
                                          <span className='Numbers'>35</span>
                                          <input type="text" name='ques35' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques35.match(/stone/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques35 != "" && !UserData.ques35.match(/stone/gi) ? "(stone)" : ""}
                                          </i>
                                          <p> have been found across many cultures</p>
                                    </div> <br />
                                    <i>●   The Pima, a Native American tribe, wove the symbol on baskets</i> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Ancient Greeks used the symbol on</label>
                                          <span className='Numbers'>36</span>
                                          <input type="text" name='ques36' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques36.match(/coins/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques36 != "" && !UserData.ques36.match(/coins/gi) ? "(coins)" : ""}
                                          </i>
                                    </div> <br />
                                    <h5>Walking labyrinths</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   The largest surviving example of a turf labyrinth once had a big</label>
                                          <span className='Numbers'>37</span>
                                          <input type="text" name='ques37' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques37.match(/tree/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques37 != "" && !UserData.ques37.match(/tree/gi) ? "(tree)" : ""}
                                          </i>
                                          <p>at its centre.</p>
                                    </div><br />
                                    <i className='font-bold'>●  Labyrinths nowadays</i> <br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Believed to have a beneficial impact on mental and physical health, e.g., walking a maze can reduce a person’s</label>
                                          <span className='Numbers'>38</span>
                                          <input type="text" name='ques38' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques38.match(/breathing/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques38 != "" && !UserData.ques38.match(/breathing/gi) ? "(breathing)" : ""}
                                          </i>
                                          <p>rate</p>
                                    </div> <br />
                                    <i>●   Used in medical and health and fitness settings and also prisons <br />
                                          ●   Popular with patients, visitors and staff in hospitals</i>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> –  patients who can’t walk can use ‘finger labyrinths’ made from</label>
                                          <span className='Numbers'>39</span>
                                          <input type="text" name='ques39' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques39.match(/paper/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques39 != "" && !UserData.ques39.match(/paper/gi) ? "(paper)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">   –  research has shown that Alzheimer’s sufferers experience less</label>
                                          <span className='Numbers'>40</span>
                                          <input type="text" name='ques40' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-5" && !UserData.ques40.match(/anziety/gi) && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-5" && UserData.ques40 != "" && !UserData.ques40.match(/anziety/gi) ? "(anziety)" : ""}
                                          </i>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage