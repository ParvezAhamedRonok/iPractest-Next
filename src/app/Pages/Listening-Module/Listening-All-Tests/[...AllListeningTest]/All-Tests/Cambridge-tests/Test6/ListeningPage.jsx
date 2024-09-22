"use client"
import React, { useRef , useState } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
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
            ["collecting"],
            ["records"],
            ["west"],
            ["transport"],
            ["art"],
            ["hospital"],
            ["garden"],
            ["quiz"],
            ["tickets"],
            ["poster"],
            ["B"], ["C"], ["C"], ["B"], ["D"], ["C"], ["G"], ["A"], ["E"], ["F"],
            ["A"], ["A"], ["D"], ["C"], ["A"], ["E"], ["F"], ["B"], ["C"], ["C"],
            ["321,000"],
            ["vocabulary"],
            ["podcast"],
            ["smartphones"],
            ["bilingual"],
            ["playground"],
            ["picture"],
            ["grammer"],
            ["identity"],
            ["fluent"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part1.mp3?_=1" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part1.mp3?_=1") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Opportunities for voluntary work in Southoe village</h5> <br /> <br />
                                    <h5>Library</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Help with</label>
                                          <span className='Numbers'>1</span>
                                          <input type="text" name='ques1' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques1.match(/collecting/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques1 != "" && UserData.ques1 == "collecting" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques1 != "" && !UserData.ques1.match(/collecting/gi) ? "(collecting)" : ""}
                                          </i>
                                          <p> books (times to be arranged)</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Help needed to keep </label>
                                          <span className='Numbers'>2</span>
                                          <input type="text" name='ques2' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques2.match(/records/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques2 != "" && UserData.ques2 == "records" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques2 != "" && !UserData.ques2.match(/records/gi) ? "(records)" : ""}
                                          </i>
                                          <p> of books up to date</p>
                                    </div><br /> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Library is in the</label>
                                          <span className='Numbers'>3</span>
                                          <input type="text" name='ques3' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques3.match(/west/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques3 != "" && UserData.ques3 == "west" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques3 != "" && !UserData.ques3.match(/west/gi) ? "(west)" : ""}
                                          </i>
                                          <p> Room in the village hall</p>
                                    </div> <br />
                                    <h5>Lunch club</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Help by providing  </label>
                                          <span className='Numbers'>4</span>
                                          <input type="text" name='ques4' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques4.match(/transport/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques4 != "" && UserData.ques4 == "transport" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques4 != "" && !UserData.ques4.match(/transport/gi) ? "(transport)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Help with hobbies such as </label>
                                          <span className='Numbers'>5</span>
                                          <input type="text" name='ques5' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques5.match(/art/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques5 != "" && UserData.ques5 == "art" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques5 != "" && !UserData.ques5.match(/art/gi) ? "(art)" : ""}
                                          </i>
                                    </div> <br /> <br />
                                    <h5>Help for individuals needed next week</h5><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6">●   Taking Mrs Carroll to</label>
                                          <span className='Numbers'>6</span>
                                          <input type="text" name='ques6' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques6.match(/hospital/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques6 != "" && UserData.ques6 == "hospital" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques6 != "" && !UserData.ques6.match(/hospital/gi) ? "(hospital)" : ""}
                                          </i>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Work in the</label>
                                          <span className='Numbers'>7</span>
                                          <input type="text" name='ques7' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques7.match(/garden/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques7 != "" && UserData.ques7 == "garden" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques7 != "" && !UserData.ques7.match(/garden/gi) ? "(garden)" : ""}
                                          </i>
                                          <p>at Mr Selsbury’s house</p>
                                    </div>

                                    <div className="Q-articles mt-4 font-bold">
                                          <h5> Questions 8-10</h5> <br />
                                          <br />
                                          Complete the notes below. <br />
                                          Write ONE WORD AND/OR A NUMBER for each answer. <br />

                                    </div>


                                    <div>
                                          <h5 className='p-3 border-1 border-black text-center'>Village social events</h5>
                                          <div className='grid grid-cols-4 border-1 border-black p-3 mt-[-3px]'>
                                                <h5>Date</h5>
                                                <h5>Event</h5>
                                                <h5>Location</h5>
                                                <h5>Help needed</h5>
                                          </div>
                                          <div className='grid grid-cols-2 gap-3 border-1 border-black p-3 mt-[-3px]'>
                                                <h5>19 Oct__</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='Numbers'>8</span>
                                                      <input type="text" name='ques8' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques8.match(/quiz/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques8 != "" && UserData.ques8 == "quiz" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques8 != "" && !UserData.ques8.match(/quiz/gi) ? "(quiz)" : ""}
                                                      </i>
                                                      <h5>Village hall</h5>
                                                      <h5>providing refreshments</h5>

                                                </div>
                                          </div>
                                          <div className='grid grid-cols-2 gap-3 border-1 border-black p-3 mt-[-3px]'>
                                                <h5>18 Nov_dance__Village hall</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='Numbers'>9</span>
                                                      <input type="text" name='ques9' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques9.match(/tickets/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques9 != "" && UserData.ques9 == "tickets" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques9 != "" && !UserData.ques9.match(/tickets/gi) ? "(tickets)" : ""}
                                                      </i>

                                                </div>
                                          </div>
                                          <div className='grid grid-cols-2 gap-3 border-1 border-black p-3 mt-[-3px]'>
                                                <h5>31 Dec_New Year’s Eve party_Mountfort Hotell</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <label htmlFor="ques10">designing the </label>
                                                      <span className='Numbers'>10</span>
                                                      <input type="text" name='ques10' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques10.match(/poster/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques10 != "" && UserData.ques10 == "poster" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques10 != "" && !UserData.ques10.match(/poster/gi) ? "(poster)" : ""}
                                                      </i>

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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part2.mp3?_=2") }}
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
                                    <h5 className='text-center mt-3 mb-3'>Oniton Hall</h5>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'>
                                                <span className='Numbers mr-1 mb-2'>11</span>
                                                <label htmlFor="ques11"> Many past owners made changes to
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques11 != "" && UserData.ques11 != "B" ? "(B)" : ""}</i>
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

                                                <div className="flex flex-col gap-8 sm:gap-6 text-[12px] sm:text-[15px]">
                                                      <i className='' > the gardens.</i>
                                                      <i className=''> the house.</i>
                                                      <i className=''>the farm. </i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                                Sir Edward Downes built Oniton Hall because he wanted
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques12 != "" && UserData.ques12 != "C" ? "(C)" : ""}</i>
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
                                                <div className="flex flex-col gap-7 sm:gap-6 text-[12px] sm:text-[15px]">
                                                      <i className='' >a place for discussing politics.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>a place to display his wealth.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>a place for artists and writers.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                                Visitors can learn about the work of servants in the past from
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques13 != "" && UserData.ques13 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >audio guides.</i>
                                                      <i className='mt-[4px] sm:mt-[0px]'>photographs.</i>
                                                      <i className='mt-[4px] sm:mt-[0px]'> people in costume</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>14</span>
                                                <label htmlFor="ques14"> What is new for children at Onion Hall?
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques14 != "" && UserData.ques14 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >clothes for dressing up</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>mini tractors</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>the adventure playground</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />


                                    <div className="Q-articles">
                                          <h5>Questions 15-20</h5> <br />
                                          Which activity is offered at each of the following locations on the farm?<br /><br />
                                          <i className='font-bold p-3 mt-2 mb-2'>Choose SIX answers from the box and write the correct letter, A-H, next to Questions 15-20.</i>
                                          <i className='font-bold p-3 mt-2 mb-2 border-1 border-black'>
                                                Activities<br /><br />
                                                A   shopping<br /><br />
                                                B   watching cows being milked<br /><br />
                                                C   seeing old farming equipment<br /><br />
                                                D   eating and drinking<br /><br />
                                                E   starting a trip<br /><br />
                                                F   seeing rare breeds of animals<br /><br />
                                                G   helping to look after animals<br /><br />
                                                H   using farming tools<br /><br />
                                          </i>
                                          <h5>Locations on the farm</h5>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="Name"> dairy  </label>
                                          <input type="text" name='ques15' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques15 != "D" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques15 != "" && UserData.ques15 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques15 != "" && UserData.ques15 != "D" ? "(D)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="Name">large barn  </label>
                                          <input type="text" name='ques16' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques16 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques16 != "" && UserData.ques16 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques16 != "" && UserData.ques16 != "C" ? "(C)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="Name">large barn  </label>
                                          <input type="text" name='ques17' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques17 != "G" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques17 != "" && UserData.ques17 == "G" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques17 != "" && UserData.ques17 != "G" ? "(G)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="Name"> large barn  </label>
                                          <input type="text" name='ques18' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques18 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques18 != "" && UserData.ques18 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques18 != "" && UserData.ques18 != "A" ? "(A)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="Name"> shed </label>
                                          <input type="text" name='ques19' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques19 != "E" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques19 != "" && UserData.ques19 == "E" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques19 != "" && UserData.ques19 != "E" ? "(E)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="Name">shed </label>
                                          <input type="text" name='ques20' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques20 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques20 != "" && UserData.ques20 == "F" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques20 != "" && UserData.ques20 != "F" ? "(F)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part3.mp3?_=3") }}
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
                                    Questions 21-22<br />
                                    Which TWO things do the students agree they need to include in their review of Romeo and Juliet?.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>21</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques21 != "" && UserData.ques21 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >   a personal reaction</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> a description of the theatre</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> a summary of the plot</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>22</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques22 != "" && UserData.ques22 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >a reference to particular scenes</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>analysis of the text</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> a newly born lamb.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="Q-articles mt-2">
                                          <h5>
                                                Questions 23-27<br /> <br />
                                                Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?<br /><br />
                                                Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 23-27</h5> <br /><br />
                                          <div className='p-3 border-1 rounded border-black'>
                                                <h5 className='text-center mt-3 mb-3'>Opinions</h5>
                                                <i className='font-bold p-3 mt-2 mb-2'>
                                                      A   They both expected this to be more traditional.<br /><br />
                                                      B   They both thought this was original.<br /><br />
                                                      C   They agree this created the right atmosphere.<br /><br />
                                                      D   They agree this was a major strength.<br /><br />
                                                      E   They were both disappointed by this.<br /><br />
                                                      F   They disagree about why this was an issue.<br /><br />
                                                      G   They disagree about how this could be improved.<br /><br />
                                                </i>
                                          </div><br /><br />
                                          <h5>Aspects of the production</h5> <br />
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>23</span>
                                          <label htmlFor="Name">  the set   </label>
                                          <input type="text" name='ques23' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques23 != "D" && "text-red-600"}`} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques23 != "" && UserData.ques23 != "D" ? "(D)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>24</span>
                                          <label htmlFor="Name"> the lighting   </label>
                                          <input type="text" name='ques24' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques24 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques24 != "" && UserData.ques24 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques24 != "" && UserData.ques24 != "C" ? "(C)" : ""}
                                          </i>
                                    </div><br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="Name">the lighting  </label>
                                          <input type="text" name='ques25' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques25 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques25 != "" && UserData.ques25 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques25 != "" && UserData.ques25 != "A" ? "(A)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>26</span>
                                          <label htmlFor="Name">the lighting</label>
                                          <input type="text" name='ques26' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques26 != "E" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques26 != "" && UserData.ques26 == "E" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques26 != "" && UserData.ques26 != "E" ? "(E)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="Name"> the actors’ delivery </label>
                                          <input type="text" name='ques27' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques27 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques27 != "" && UserData.ques27 == "F" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques27 != "" && UserData.ques27 != "F" ? "(F)" : ""}
                                          </i>
                                    </div><br />
                                    <div className="Q-articles">
                                          <h5>Questions 28-30 </h5> <br />
                                          Choose the correct letter, A, B or C.<br /><br />
                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>28</span>
                                                The students think the story of Romeo and Juliet is still relevant for young people today because
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques28 != "" && UserData.ques28 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='mt-[-10px] sm:mt-0' >The students think the story of Romeo and Juliet is still relevant for young people today because</i>
                                                      <i className='mt-[-14px] sm:mt-0' >  it deals with problems that families experience.</i>
                                                      <i className='' >  it teaches them about relationships.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>29</span>
                                                The students found watching Romeo and Juliet in another language
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques29 != "" && UserData.ques29 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >  frustrating.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> frustrating.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>moving.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>30</span>
                                                Why do the students think Shakespeare’s plays have such international appeal?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-test-6" && UserData.ques30 != "" && UserData.ques30 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >  The stories are exciting.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>   There are recognisable characters..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  There are recognisable characters..</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part4.mp3?_=4") }}
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
                                    Complete the notes below. <br />
                                    Write ONE WORD ONLY for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 mb-2 text-inherit'>The impact of digital technology on the Icelandic language</h5> <br /> <br />
                              </div>
                              <h5>The Icelandic language</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   has approximately </label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques31.match(/321,000/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques31 != "" && UserData.ques31 == "321,000" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques31 != "" && !UserData.ques31.match(/321,000/gi) ? "(321,000)" : ""}
                                          </i>
                                          <p> speakers</p>
                                    </div><br />

                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name"> ●   has a </label> </label>
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques32.match(/vocabulary/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques32 != "" && UserData.ques32 == "vocabulary" && "text-green-700"}
                                                 `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques32 != "" && !UserData.ques32.match(/vocabulary/gi) ? "(vocabulary)" : ""}
                                          </i>
                                          <p>  that is still growing</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   has not changed a lot over the last thousand years <br /> <br />
                                                ●   has its own words for computer-based concepts, such as web browser and
                                                <span className='Numbers'>33</span>
                                                <input type="text" name='ques33' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques33.match(/podcast/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques33 != "" && UserData.ques33 == "podcast" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques33 != "" && !UserData.ques33.match(/podcast/gi) ? "(podcast)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <i className='font-bold'>Young speakers</i> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   are big users of digital technology, such as </label>
                                          <span className='Numbers'>34</span>
                                          <input type="text" name='ques34' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques34.match(/smartphones/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques34 != "" && UserData.ques34 == "smartphones" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques34 != "" && !UserData.ques34.match(/smartphones/gi) ? "(smartphones)" : ""}
                                          </i>
                                    </div><br /> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   are becoming</label>
                                          <span className='Numbers'>35</span>
                                          <input type="text" name='ques35' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques35.match(/bilingual/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques35 != "" && UserData.ques35 == "bilingual" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques35 != "" && !UserData.ques35.match(/bilingual/gi) ? "(bilingual)" : ""}
                                          </i>
                                          <p>  very quickly</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   are having discussions using only English while they are in the </label>
                                          <span className='Numbers'>36</span>
                                          <input type="text" name='ques36' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques36.match(/playground/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques36 != "" && UserData.ques36 == "playground" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques36 != "" && !UserData.ques36.match(/playground/gi) ? "(playground)" : ""}
                                          </i>
                                          <p>at school</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   are better able to identify the content of a</label>
                                          <span className='Numbers'>37</span>
                                          <input type="text" name='ques37' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques37.match(/picture/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques37 != "" && UserData.ques37 == "picture" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques37 != "" && !UserData.ques37.match(/picture/gi) ? "(picture)" : ""}
                                          </i>
                                          <p>●   are better able to identify the content of a.</p>
                                    </div><br />
                                    <i className='font-bold'>Technology and internet companies</i> <br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   write very little in Icelandic because of the small number of speakers and because of how complicated its</label>
                                          <span className='Numbers'>38</span>
                                          <input type="text" name='ques38' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques38.match(/grammer/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques38 != "" && UserData.ques38 == "grammer" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques38 != "" && !UserData.ques38.match(/grammer/gi) ? "(grammer)" : ""}
                                          </i>
                                          <p>is</p>
                                    </div> <br />
                                    <h5>The Icelandic government</h5> <br />
                                    <i>●   has set up a fund to support the production of more digital content in the language <br />
                                          ●   believes that Icelandic has a secure future</i>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   is worried that young Icelanders may lose their</label>
                                          <span className='Numbers'>39</span>
                                          <input type="text" name='ques39' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques39.match(/identity/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques39 != "" && UserData.ques39 == "identity" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques39 != "" && !UserData.ques39.match(/identity/gi) ? "(identity)" : ""}
                                          </i>
                                          <p>as Icelanders</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   is worried about the consequences of children not being </label>
                                          <span className='Numbers'>40</span>
                                          <input type="text" name='ques40' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-6" && !UserData.ques40.match(/fluent/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-6" && UserData.ques40 != "" && UserData.ques40 == "fluent" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-6" && UserData.ques40 != "" && !UserData.ques40.match(/fluent/gi) ? "(fluent)" : ""}
                                          </i>
                                          <p> in either</p>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage