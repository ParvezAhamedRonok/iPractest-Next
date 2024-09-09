import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
// import ListeningTest1Aduio from "../../../../../assets/Audios/ListeningAudioTest1.mp3"
import img1 from "../../../../../../../../assets/images/LTest2Img1.jpg"
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
            ["traning", "/", "Traning"],
            ["discount", "/", "Discount"],
            ["taxi", "/", "Taxi"],
            ["server", "/", "Server"],
            ["English", "/", "english"],
            ["Wivenhoe", "/", "wivenhoe"],
            ["equipment", "/", "Equipment"],
            ["9.75"],
            ["deliveries", "/", "Deliveries"],
            ["Sunday", "/", "sunday"],
            ["B"], ["B"], ["B"], ["A"], ["G"], ["C"], ["D"], ["B"], ["H"], ["A"],
            ["C"], ["A"], ["B"], ["B"], ["A"], ["B"], ["D"], ["A"], ["C"], ["F"],
            ["conveninent", "/", "Conveninent"],
            ["suits", "/", "Suits"],
            ["tailor", "/", "Tailor"],
            ["profession", "/", "Profession"],
            ["visible", "/", "Visible"],
            ["strings", "/", "Strings"],
            ["waists", "/", "Waists"],
            ["perfume", "/", "Perfume"],
            ["image", "/", "Image"],
            ["handbag", "/", "Handbag"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part1.mp3?_=1" />
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
                              {/* <div className='flex justify-start w-[92vw]  sm:w-full'>
                                    <div className="AudioPlayerClass">
                                          <div className='w-[87vw] sm:w-[550px] text-white'>
                                                < AudioPlayer
                                                      // autoPlay
                                                      src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part1.mp3?_=1" />
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
                              </div> */}
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part1.mp3?_=1") }}
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
                                    Complete the notes below. <br />
                                    Write ONE WORD AND/OR A NUMBER for each answer. <br />
                                    <h5 className='text-center mt-2 text-inherit'>Working at Milo’s Restaurants</h5> <br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-start mt-2 text-inherit'>Benefits</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●</label>
                                          <span className='Numbers'>1</span>
                                          <input type="text" name='ques1' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques1.match(/traning/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques1 != "" && UserData.ques1 == "traning" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques1 != "" && !UserData.ques1.match(/traning/gi) ? "(traning)" : ""}
                                          </i>
                                          <p>provided for all staff</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●</label>
                                          <span className='Numbers'>2</span>
                                          <input type="text" name='ques2' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques2.match(/discount/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques2 != "" && UserData.ques2 == "discount" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques2 != "" && !UserData.ques2.match(/discount/gi) ? "(discount)" : ""}
                                          </i>
                                          <p>during weekdays at all Milo’s Restaurants</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●</label>
                                          <span className='Numbers'>3</span>
                                          <input type="text" name='ques3' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques3.match(/taxi/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques3 != "" && UserData.ques3 == "taxi" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques3 != "" && !UserData.ques3.match(/taxi/gi) ? "(taxi)" : ""}
                                          </i>
                                          <p>provided after midnight</p>
                                    </div><br /> <br />

                                    <h5>Person specification</h5> <br /> <br />
                                    <i>●   must be prepared to work well in a team</i><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   must care about maintaining a high standard of </label>
                                          <span className='Numbers'>4</span>
                                          <input type="text" name='ques4' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques4.match(/server/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques4 != "" && UserData.ques4 == "server" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques4 != "" && !UserData.ques4.match(/server/gi) ? "(server)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   must have a qualification in</label>
                                          <span className='Numbers'>5</span>
                                          <input type="text" name='ques5' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques5.match(/English/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques5 != "" && UserData.ques5 == "English" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques5 != "" && !UserData.ques5.match(/English/gi) ? "(English)" : ""}
                                          </i>
                                    </div> <br /> <br />

                                    <div className="Q-articles">
                                          <h5>Questions 6-10</h5> <br />
                                          Complete the table below.<br />
                                          Write ONE WORD AND/OR A NUMBER for each answer. <br />
                                          <h5 className='text-center mt-2 text-inherit'>Working at Milo’s Restaurants</h5> <br /> <br />
                                    </div>

                                    <div className='border-1 border-black'>
                                          <div className='border-1 border-black p-3'>
                                                <h5 className='font-bold text-center'>Location</h5> <br />
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <label htmlFor="Name"></label>
                                                      <span className='Numbers'>6</span>
                                                      <input type="text" name='ques6' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques6.match(/Wivenhoe/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques6 != "" && UserData.ques6 == "Wivenhoe" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques6 != "" && !UserData.ques6.match(/Wivenhoe/gi) ? "(Wivenhoe)" : ""}
                                                      </i>
                                                      <p>Street</p>
                                                </div><br />
                                                <h5>City Road</h5>
                                          </div>
                                          <div className='border-1 border-black p-3' >
                                                <h5 className='font-bold text-center'>Job title</h5>
                                                <h5 className='font-bold text-start'>Breakfast superviso</h5>
                                                <h5 className='font-bold text-start'>  Junior chef</h5>
                                          </div>

                                          <div className='border-1 border-black p-3'>
                                                <h5 className='font-bold text-center mb-2'>Responsibilities include</h5> <br />
                                                <h5>Checking portions, etc. are correct</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <label htmlFor="Name">Making sure</label>
                                                      <span className='Numbers'>7</span>
                                                      <input type="text" name='ques7' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques7.match(/equipment/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques7 != "" && UserData.ques7 == "equipment" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques7 != "" && !UserData.ques7.match(/equipment/gi) ? "(equipment)" : ""}
                                                      </i>
                                                      <p>is clean.Supporting senior chefs</p> <br />

                                                      <label htmlFor="Name">Maintaining stock and organising </label>
                                                      <span className='Numbers'>8</span>
                                                      <input type="text" name='ques8' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques8.match(/9.75/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques8 != "" && UserData.ques8 == "9.75" && "text-green-700"}
                                                           
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques8 != "" && !UserData.ques8.match(/9.75/gi) ? "(9.75)" : ""}
                                                      </i>

                                                </div>

                                          </div>

                                          <div className='border-1 border-black p-3'>
                                                <h5 className='font-bold text-center mb-2'>Pay and conditions</h5> <br />

                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <label htmlFor="Name">Starting salary</label>
                                                      <span className='Numbers'>9</span>
                                                      <input type="text" name='ques9' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques9.match(/deliveries/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques9 != "" && UserData.ques9 == "deliveries" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques9 != "" && !UserData.ques9.match(/deliveries/gi) ? "(deliveries)" : ""}
                                                      </i>
                                                      <p>per hour Start work at 5.30 a.m...Start work at 5.30 a.m.</p> <br />

                                                      <label htmlFor="Name">No work on a</label>
                                                      <span className='Numbers'>10</span>
                                                      <input type="text" name='ques10' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques10.match(/Sunday/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques10 != "" && UserData.ques10 == "Sunday" && "text-green-700"}
                                                            
                                                            
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques10 != "" && !UserData.ques10.match(/Sunday/gi) ? "(Sunday)" : ""}
                                                      </i>
                                                      <p>once a month</p>

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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part2.mp3?_=2") }}
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
                                    What are the TWO main reasons why this site has been chosen for the housing development? <br /> <br />
                              </div>
                              <div className="Q-question">

                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>11</span>
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques11 != "" && UserData.ques11 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >It has suitable geographical features..</i>
                                                      <i className=''>  There is easy access to local facilities.</i>
                                                      <i className=''>It has good connections with the airport..</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>12</span>
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques12 != "" && UserData.ques12 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' > The land is of little agricultural value.</i>
                                                      <i className=''>It will be convenient for workers..</i>
                                                      <i className=''> Most nearable things.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="Q-articles mt-4">
                                          <h5>Questions 13 and 14</h5> <br />
                                          Choose TWO letters<br /><br />
                                          What are the TWO main reasons why this site has been chosen for the housing development? <br /> <br />
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>13</span>
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques13 != "" && UserData.ques13 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >the facilities for cyclists</i>
                                                      <i className=''> the impact on the environment.</i>
                                                      <i className=''>It has good connections with the airport..</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>14</span>
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques14 != "" && UserData.ques14 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' > the encouragement of good relations between residents</i>
                                                      <i className=''>the low cost of all the accommodation.</i>
                                                      <i className=''> the rural location</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="Q-articles">
                                          <h5>Label the map below.</h5> <br />
                                          Write the correct letter, A-l, next to Questions 15-20<br /><br />
                                          <Image src={img1} alt="test-2 cambridge-image-1" />
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="Name"> School</label>
                                          <input type="text" name='ques15' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques15 != "G" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques15 != "" && UserData.ques15 == "G" && "text-green-700"}
                                                            
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques15 != "" && UserData.ques15 != "G" ? "(G)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="Name"> Sports centre</label>
                                          <input type="text" name='ques16' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques16 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques16 != "" && UserData.ques16 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques16 != "" && UserData.ques16 != "C" ? "(C)" : ""}
                                          </i>
                                          <p>Street</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="Name"> Clinic   </label>
                                          <input type="text" name='ques17' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques17 != "D" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques17 != "" && UserData.ques17 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques17 != "" && UserData.ques17 != "D" ? "(D)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="Name"> Community centre</label>
                                          <input type="text" name='ques18' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques18 != "B" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques18 != "" && UserData.ques18 != "B" ? "(B)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="Name"> Supermarket</label>
                                          <input type="text" name='ques19' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques19 != "H" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques19 != "" && UserData.ques19 == "H" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques19 != "" && UserData.ques19 != "H" ? "(H)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="Name"> Playground</label>
                                          <input type="text" name='ques20' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques20 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques20 != "" && UserData.ques20 == "A" && "text-green-700"}
                                                
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques20 != "" && UserData.ques20 != "A" ? "(A)" : ""}
                                          </i>
                                          <p>advertisement</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part3.mp3?_=3") }}
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
                                    Questions 21-24<br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <div className='text-justify mb-2'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>21</span>
                                                Why do the students think the Laki eruption of 1783 is so important?
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques21 != "" && UserData.ques21 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' > It was the most severe eruption in modern times</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>    It led to the formal study of volcanoes.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  It had a profound effect on society.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-2'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>22</span>
                                                What surprised Adam about observations made at the time?
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques22 != "" && UserData.ques22 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' > the number of places producing them.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> the contradictions in them</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  the lack of scientific data to support them</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-2'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>
                                                According to Michelle, what did the contemporary sources say about the Laki haze?
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques23 != "" && UserData.ques23 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >People thought it was similar to ordinary fog..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> It was associated with health issues</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> It completely blocked out the sun for weeks.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'
                                                >24</span>
                                                Adam corrects Michelle when she claims that Benjamin Franklin
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques24 != "" && UserData.ques24 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='mt-[-7px] sm:mt-[0px]'> came to the wrong conclusion about the cause of the haze.</i>
                                                      <i className='mt-[-10px] sm:mt-[0px]'>  was the first to identify the reason for the haze.</i>
                                                      <i className='mt-[-10px] sm:mt-[0px]'> supported the opinions of other observers about the haze.</i>
                                                </div>
                                          </div>
                                    </div>






                                    <div className="Q-articles">
                                          <h5>Questions 25 and 26 </h5> <br />
                                          Which TWO issues following the Laki eruption surprised the students?.<br /> <br />
                                    </div>

                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>25</span>
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques25 != "" && UserData.ques25 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' > how widespread the effects were.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> the number of deaths it caused</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> why they would like a career in fashion..</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>26</span>
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-2" && UserData.ques26 != "" && UserData.ques26 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' > the speed at which the volcanic ash cloud spread</i>
                                                      <i className='mt-[-3px] sm:mt-[0px]'> how long-lasting the effects were</i>
                                                      <i className='mt-[-3px] sm:mt-[0px]'> how people ignored the warning signs</i>
                                                </div>
                                          </div>
                                    </div>


                                    <div className="Questions">
                                          <div className="Q-articles text-justify mt-4">
                                                <h5> Questions 27 -30 <br /> <br />
                                                      What comment do the students make about the impact of the Laki eruption on the following countries?</h5> <br />
                                                <i>

                                                      Choose FOUR answers from the box and write the correct letter, A-F, next to Questions 27-30.<br /> <br />

                                                      Comments<br /> <br />
                                                      A   This country suffered the most severe loss of life.<br /> <br />
                                                      B   The impact on agriculture was predictable.<br /> <br />
                                                      C   There was a significant increase in deaths of young people.<br /> <br />
                                                      D   Animals suffered from a sickness.<br /> <br />
                                                      E   This country saw the highest rise in food prices in the world.<br /> <br />
                                                      F   It caused a particularly harsh winter.<br /> <br />
                                                      Countries<br /> <br />
                                                </i>
                                          </div>

                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>27</span>
                                                <label htmlFor="Name">  Iceland
                                                      <input type="text" name='ques27' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques27 != "D" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques27 != "" && UserData.ques27 == "D" && "text-green-700"}
                                                      `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques27 != "" && UserData.ques27 != "D" ? "(D)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>28</span>
                                                <label htmlFor="Name"> EGYPT
                                                      <input type="text" name='ques28' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques28 != "A" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques28 != "" && UserData.ques28 == "A" && "text-green-700"}
                                                      `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques28 != "" && UserData.ques28 != "A" ? "(A)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>29</span>
                                                <label htmlFor="Name"> UK
                                                      <input type="text" name='ques29' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques29 != "C" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques29 != "" && UserData.ques29 == "C" && "text-green-700"}
                                                      `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques29 != "" && UserData.ques29 != "C" ? "(C)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>30</span>
                                                <label htmlFor="Name"> USA
                                                      <input type="text" name='ques30' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques30 != "F" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques30 != "" && UserData.ques30 == "F" && "text-green-700"}
                                                      `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques30 != "" && UserData.ques30 != "F" ? "(F)" : ""}
                                                      </i>
                                                </label>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Pockets</h5> <br /> <br />
                              </div>
                              <h5>Reason for choice of subject</h5> <br />

                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   They are </label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques31.match(/conveninent/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques31 != "" && UserData.ques31 == "conveninent" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques31 != "" && !UserData.ques31.match(/conveninent/gi) ? "(conveninent)" : ""}
                                          </i>
                                          <p>but can be overlooked by consumers and designers.</p>
                                    </div><br />
                                    <h5 className='text-start mt-2 text-inherit'>Pockets in men’s clothes</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Men started to wear</label>
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques32.match(/suits/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques32 != "" && UserData.ques32 == "suits" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques32 != "" && !UserData.ques32.match(/suits/gi) ? "(suits)" : ""}
                                          </i>
                                          <p> in the 18th century.</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">● A</label>
                                          <span className='Numbers'>33</span>
                                          <input type="text" name='ques33' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques33.match(/tailor/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques33 != "" && UserData.ques33 == "tailor" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques33 != "" && !UserData.ques33.match(/tailor/gi) ? "(tailor)" : ""}
                                          </i>
                                          <p className='text-justify'>sewed pockets into the lining of the garments.
                                                ●   The wearer could use the pockets for small items.</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Bigger pockets might be made for men who belonged to a certain type of
                                                <span className='Numbers'>34</span>
                                                <input type="text" name='ques34' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques34.match(/profession/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques34 != "" && UserData.ques34 == "profession" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques34 != "" && !UserData.ques34.match(/profession/gi) ? "(profession)" : ""}
                                                </i>
                                          </label>
                                    </div><br /> <br />
                                    <h5>Pockets in women’s clothes</h5>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Women’s pockets were less
                                                <span className='Numbers'>35</span>
                                                <input type="text" name='ques35' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques35.match(/visible/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques35 != "" && UserData.ques35 == "visible" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques35 != "" && !UserData.ques35.match(/visible/gi) ? "(visible)" : ""}
                                                </i>
                                                than men’s.
                                                ●   Women were very concerned about pickpockets.</label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Pockets were produced in pairs using
                                                <span className='Numbers'>36</span>
                                                <input type="text" name='ques36' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques36.match(/strings/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques36 != "" && UserData.ques36 == "strings" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques36 != "" && !UserData.ques36.match(/strings/gi) ? "(strings)" : ""}
                                                </i>
                                                to link them together.</label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Pockets hung from the women’s
                                                <span className='Numbers'>37</span>
                                                <input type="text" name='ques37' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques37.match(/waists/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques37 != "" && UserData.ques37 == "waists" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques37 != "" && !UserData.ques37.match(/waists/gi) ? "(waists)" : ""}
                                                </i>
                                                under skirts and petticoats.</label>
                                    </div>
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">  ●   Items such as
                                                <span className='Numbers'>38</span>
                                                <input type="text" name='ques38' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques38.match(/perfume/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques38 != "" && UserData.ques38 == "perfume" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques38 != "" && !UserData.ques38.match(/perfume/gi) ? "(perfume)" : ""}
                                                </i>
                                                could be reached through a gap in the material.
                                                ●   Pockets, of various sizes, stayed inside clothing for many decades.</label>
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   When dresses changed shape, hidden pockets had a negative effect on the
                                                <span className='Numbers'>39</span>
                                                <input type="text" name='ques39' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques39.match(/image/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques39 != "" && UserData.ques39 == "image" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques39 != "" && !UserData.ques39.match(/image/gi) ? "(image)" : ""}
                                                </i>
                                                of women</label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Bags called ‘pouches’ became popular, before women carried a
                                                <span className='Numbers'>40</span>
                                                <input type="text" name='ques40' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-2" && !UserData.ques40.match(/handbag/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-2" && UserData.ques40 != "" && UserData.ques40 == "handbag" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-2" && UserData.ques40 != "" && !UserData.ques40.match(/handbag/gi) ? "(handbag)" : ""}
                                                </i>
                                          </label>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage