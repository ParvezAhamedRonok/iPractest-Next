import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "../../../../../../../../assets/images/listening-images/Actual-test7-image1.jpg";
import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
import Image from 'next/image';




function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
      // for show and hide all notePad----   
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
            ["no"],
            ["amazing weather"],
            ["Town Hall"],
            ["variety"],
            ["plane"],
            ["older than 40"],
            ["mid-range"],
            ["tourism"],
            ["computer programmer"],
            ["good value"],
            ["B"], ["A"], ["E"], ["C"], ["D"], ["E"], ["G"], ["C"], ["D"], ["A"], ["C"], ["B"], ["A"],
            ["interview"],
            ["format"],
            ["copies"],
            ["May 11th"],
            ["change"],
            ["note"],
            ["procedure"],
            ["distance"],
            ["sound"],
            ["smell"],
            ["the flexibility"],
            ["reaction"],
            ["native language"],
            ["newspapers"],
            ["enviroment"],
            ["swiming pool"],
            ["national park"]


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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section1.mp3?_=1" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section1.mp3?_=1") }}
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
                                    Complete the form below.<br />
                                    Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 text-inherit'>Tourism Survey</h5> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Example</h5>
                                          <h5>Answer</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Name:</h5>
                                          <h5>Robert Goddard</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Destination:</h5>
                                          <h5>Melbourne</h5>
                                    </div>

                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>First time visited Melbourne?</h5>
                                          <div className="question mt-2 flex  gap-2 box-border overflow-auto">
                                                <label htmlFor="">
                                                      <span className='Numbers'>1</span>
                                                      <input type="text" name='ques1' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques1.match(/no/gi) && "text-red-600"}
                                                            
                                                            ${ListeningShowAnswer == "Actual-test-7" && UserData.ques1 != "" && UserData.ques1 == "no" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-7" && UserData.ques1 != "" && !UserData.ques1.match(/no/gi) ? "(no)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Best thing about the city:</h5>
                                          <div className="question mt-2 flex  gap-2 box-border overflow-auto">
                                                <label htmlFor="">
                                                      <span className='Numbers'>2</span>
                                                      <input type="text" name='ques2' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques2.match(/amazing weather/gi) && "text-red-600"}
                                                            
                                                            ${ListeningShowAnswer == "Actual-test-7" && UserData.ques2 != "" && UserData.ques2 == "amazing weather" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-7" && UserData.ques2 != "" && !UserData.ques2.match(/amazing weather/gi) ? "(amazingweather)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Favourite attraction:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>3</span>
                                                <input type="text" name='ques3' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques3.match(/Town Hall/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques3 != "" && UserData.ques3 == "Town Hall" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques3 != "" && !UserData.ques3.match(/Town Hall/gi) ? "(Town Hall)" : ""}
                                                </i>
                                          </div>
                                    </div>

                                    <div className='w-full p-3 flex justify-start border-1 border-gray-400'>
                                          <h5>Best thing about</h5>
                                    </div>
                                    <div className='w-full ml-2 p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>the destination’s dining options:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques4.match(/variety/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques4 != "" && UserData.ques4 == "variety" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques4 != "" && !UserData.ques4.match(/variety/gi) ? "(variety)" : ""}
                                                </i>
                                                <p>of food</p>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-start border-1 border-gray-400'>
                                          <h5>Method of transport</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>to destination::</h5>
                                          <div className="question ml-3 mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques5">by</label>
                                                <span className='Numbers'>5</span>
                                                <input type="text" name='ques5' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques5.match(/plane/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques5 != "" && UserData.ques5 == "plane" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques5 != "" && !UserData.ques5.match(/plane/gi) ? "(plane)" : ""}
                                                </i>
                                                <p>to destination:</p>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Age group:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>6</span>
                                                <input type="text" name='ques6' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques6.match(/older than 40/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques6 != "" && UserData.ques6 == "older than 40" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques6 != "" && !UserData.ques6.match(/older than 40/gi) ? "(older than 40)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Income level:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <p>by</p>
                                                <span className='Numbers'>7</span>
                                                <input type="text" name='ques7' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques7.match(/mid range/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques7 != "" && UserData.ques7 == "mid range" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques7 != "" && !UserData.ques7.match(/mid range/gi) ? "(mid range)" : ""}
                                                </i>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Purpose of visit:</h5>
                                          <div className="question mt-2 flex  gap-2 box-border overflow-auto">
                                                <label htmlFor="">• on business
                                                      <span className='Numbers'>8</span>
                                                      <input type="text" name='ques8' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques8.match(/tourism/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques8 != "" && UserData.ques8 == "tourism" && "text-green-700"}
                                                      `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Actual-test-7" && UserData.ques8 != "" && !UserData.ques8.match(/tourism/gi) ? "(tourism)" : ""}
                                                      </i>
                                                </label>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Occupation:</h5>
                                          <div className="question mt-2 p-2 ml-3 flex flex-wrap gap-2 box-border overflow-auto">

                                                <span className='Numbers'>9</span>
                                                <input type="text" name='ques9' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques9.match(/computer programmer/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques9 != "" && UserData.ques9 == "computer programmer" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques9 != "" && !UserData.ques9.match(/computer programmer/gi) ? "(computer programmer)" : ""}
                                                </i>
                                                <p>• writer for a travel magazine</p>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-1 border-gray-400'>
                                          <h5>Opinion about accommodation:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">

                                                <span className='Numbers'>10</span>
                                                <input type="text" name='ques10' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques10.match(/good value/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques10 != "" && UserData.ques10 == "good value" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques10 != "" && !UserData.ques10.match(/good value/gi) ? "(good value)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section2.mp3?_=2") }}
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
                                    Label the map below.<br /> <br />
                                    Choose the correct letter, A-E, next to questions 11-15.<br /> <br />
                                    <Image src={img1} alt="test-7 image-1" />  <br />
                              </div>

                              <div className="Questions">

                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>11</span>
                                          <label htmlFor="ques11">Science Museum</label>
                                          <select name="ques11" id="ques11" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques11 != "B" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques11 != "" && UserData.ques11 == "B" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques11 != "" && UserData.ques11 != "B" ? "B" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>12</span>
                                          <label htmlFor="ques12"> National History Museum</label>
                                          <select name="ques12" id="ques12" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques12 != "A" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques12 != "" && UserData.ques12 == "A" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques12 != "" && UserData.ques12 != "A" ? "A" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>13</span>
                                          <label htmlFor="ques13">Car Park</label>
                                          <select name="ques13" id="ques13" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques13 != "E" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques13 != "" && UserData.ques13 == "E" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques13 != "" && UserData.ques13 != "E" ? "E" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>14</span>
                                          <label htmlFor="ques14">Shopping Mall</label>
                                          <select name="ques14" id="ques14" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques14 != "C" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques14 != "" && UserData.ques14 == "C" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques14 != "" && UserData.ques14 != "C" ? "C" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="ques15"> Primary School</label>
                                          <select name="ques15" id="ques15" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques15 != "D" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques15 != "" && UserData.ques15 == "D" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques15 != "" && UserData.ques15 != "D" ? "D" : ""}</i>
                                    </div>
                              </div>
                              <div className="Q-articles">
                                    <h5>Questions 16-20</h5> <br />
                                    What is the improvement of each main point of interest in the area?<br /><br />
                                    Choose FIVE answers from the box and write the correct letter, A-G, next to questions 16-20.<br /> <br />
                                    <div className='p-3'>
                                          <p><span className='font-bold mr-2'>A</span>  New entrance</p>
                                          <p><span className='font-bold mr-2'>B</span> Free lunch provided</p>
                                          <p><span className='font-bold mr-2'>C</span>Free information provided</p>
                                          <p><span className='font-bold mr-2'>D</span> Increase in size</p>
                                          <p><span className='font-bold mr-2'>E</span>Additional signs</p>
                                          <p><span className='font-bold mr-2'>F</span>New exhibitions</p>
                                          <p><span className='font-bold mr-2'>G</span>University tour</p>
                                          <p><span className='font-bold mr-2'>H</span> New structure</p>

                                    </div>
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="ques16">CarPark .</label>
                                          <input type="text" name="ques16" id="ques16" onChange={handleValueChange}
                                                className={` inputs font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques16 != "E" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques16 != "" && UserData.ques16 == "E" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques16 != "" && UserData.ques16 != "E" ? "(E)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="ques17">Primary School .</label>
                                          <input type="text" name="ques17" id="ques17" onChange={handleValueChange}
                                                className={` inputs font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques17 != "G" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques17 != "" && UserData.ques17 == "G" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques17 != "" && UserData.ques17 != "G" ? "(G)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="ques18"> Science Museum</label>
                                          <input type="text" name="ques18" id="ques18" onChange={handleValueChange}
                                                className={` inputs font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques18 != "C" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques18 != "" && UserData.ques18 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques18 != "" && UserData.ques18 != "C" ? "(C)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="ques19">National History Museum</label>
                                          <input type="text" name="ques19" id="ques19" onChange={handleValueChange}
                                                className={` inputs font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques19 != "D" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques19 != "" && UserData.ques19 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques19 != "" && UserData.ques19 != "D" ? "(D)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="ques20">Shopping Mall</label>
                                          <input type="text" name="ques20" id="ques20" onChange={handleValueChange}
                                                className={` inputs font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques20 != "A" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques20 != "" && UserData.ques20 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques20 != "" && UserData.ques20 != "A" ? "(A)" : ""}
                                          </i>
                                    </div>


                              </div>


                        </div>
                  </div>

                  {/* section-3*/}

                  <div className="forAllDivs section-1 bg-sky-100 rounded mt-4">
                        <>
                              <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                                    <h5 className='w-[70%]  text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-3</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad3 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section3.mp3?_=3") }}
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
                                    <h5 className='text-center'>Choose the correct letter, A, B or C.<br /> <br /></h5>
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques21" className='flex'><span className='Numbers mr-1 mb-2'>21</span>The proposal will
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques21 != "" && UserData.ques21 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques21' />
                                                      <i className='' > be reviewed by two examiners. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques21' />
                                                      <i className=''> be added to the final grade.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques21' />
                                                      <i className=''>be returned with feedback.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques22" className='flex'><span className='Numbers mr-1 mb-2'>22</span>The proposal will consist mostly of
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques22 != "" && UserData.ques22 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques22' />
                                                      <i className='' > topics</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques22' />
                                                      <i className=''> Methods</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques22' />
                                                      <i className=''>Results.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className=' flex mb-2'><span className='pt-[1px]  mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>For the practice paper, the tutor has directed the students to make sure to
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques23 != "" && UserData.ques23 != "A" ? "(A)" : ""}</i>
                                          </div>

                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques23' />
                                                      <i className='' >pay attention to time limits. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques23' />
                                                      <i className=''>   write at least 6,000 words..</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques23' />
                                                      <i className=''>keep on topic..</i>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="Q-articles">
                                    <h5>Questions 24-30</h5> <br />
                                    Complete the sentences below.<br />
                                    <h5 className='text-center'>Write ONE WORD AND/OR A NUMBER for each answer<br /> <br /></h5>
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>24</span>
                                          <label htmlFor="ques24">There is no need to</label>
                                          <input type="text" name="ques24" id="ques24" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques24.match(/interview/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques24 != "" && UserData.ques24 == "interview" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques24 != "" && !UserData.ques24.match(/interview/gi) ? "(interview)" : ""}
                                          </i>
                                          <p> lots of people.</p>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="ques25">Pay attention to the</label>
                                          <input type="text" name="ques25" id="ques25" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques25.match(/format/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques25 != "" && UserData.ques25 == "format" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques25 != "" && !UserData.ques25.match(/format/gi) ? "(format)" : ""}
                                          </i>
                                          <p>  of the final report.</p>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>26</span>
                                          <label htmlFor="ques26">Prepare two </label>
                                          <input type="text" name="ques26" id="ques26" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques26.match(/copies/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques26 != "" && UserData.ques26 == "copies" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques26 != "" && !UserData.ques26.match(/copies/gi) ? "(copies)" : ""}
                                          </i>
                                          <p> one for the teacher, another for the students themselves.</p>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="ques27">The deadline of the final paper is </label>
                                          <input type="text" name="ques27" id="ques27" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques27.match(/May 11th/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques27 != "" && UserData.ques27 == "May 11th" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques27 != "" && !UserData.ques27.match(/May 11th/gi) ? "(May 11th)" : ""}
                                          </i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>28</span>
                                          <label htmlFor="ques28">The students can</label>
                                          <input type="text" name="ques28" id="ques28" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques28.match(/change/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques28 != "" && UserData.ques28 == "change" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques28 != "" && !UserData.ques28.match(/change/gi) ? "(change)" : ""}
                                          </i>
                                          <p> their topics before the beginning of April.</p>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>29</span>Students deciding to change topics must deliver a
                                                <input type="text" name="ques29" id="ques29" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques29.match(/note/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques29 != "" && UserData.ques29 == "note" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques29 != "" && !UserData.ques29.match(/note/gi) ? "(note)" : ""}
                                                </i>
                                                to the teacher in advance.
                                          </div>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>30</span>At the beginning of the report, the hypothesis and an outline of the .
                                                <input type="text" name="ques30" id="ques29" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques30.match(/procedure/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques30 != "" && UserData.ques30 == "procedure" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques30 != "" && !UserData.ques30.match(/procedure/gi) ? "(procedure)" : ""}
                                                </i>
                                                are needed.
                                          </div>
                                    </div>

                              </div>

                        </div>


                  </div>

                  {/* section-4*/}

                  <div className="forAllDivs section-1 bg-sky-100 pb-[30px] rounded mt-4">
                        <>
                              <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                                    <h5 className='w-[70%] text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-4</h5>
                              </div>

                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad4 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section4.mp3?_=4") }}
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
                                    Write NO MORE THAN TWO WORDS for each answer. <br />
                                    <h5 className='text-center mt-2 mb-2 text-inherit'>Advertising Effect</h5> <br /> <br />
                              </div>
                              <h5>The important factor to consider</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> • The</label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques31.match(/distance/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques31 != "" && UserData.ques31 == "distance" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques31 != "" && !UserData.ques31.match(/distance/gi) ? "(distance)" : ""}
                                          </i>
                                          <p>that customers must travel affects the probability that they will buy the product.</p>

                                    </div><br />
                                    <h5>Methods of communication</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name"> • Advertising slogans are easier to remember if there is a  </label> </label>
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques32.match(/sound/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques32 != "" && UserData.ques32 == "sound" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques32 != "" && !UserData.ques32.match(/sound/gi) ? "(sound)" : ""}
                                          </i>
                                          <p> played with them..</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name"> –  • Mandy’s Candy Store appeals to people’s sense of</label>
                                          <span className='Numbers'>33</span>
                                          <input type="text" name='ques33' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques33.match(/smell/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques33 != "" && UserData.ques33 == "smell" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques33 != "" && !UserData.ques33.match(/smell/gi) ? "(smell)" : ""}
                                          </i>
                                          <p> to draw in customers.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• To an ad campaign for digital products, it is </label>
                                          <span className='Numbers'>34</span>
                                          <input type="text" name='ques34' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques34.match(/the flexibility/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques34 != "" && UserData.ques34 == "the flexibility" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques34 != "" && !UserData.ques34.match(/the flexibility/gi) ? "(the flexibility)" : ""}
                                          </i>
                                          <p>that is extremely important.</p>
                                    </div><br /> <br />
                                    <h5>Effect on your product sales</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• The customer’s</label>
                                          <span className='Numbers'>35</span>
                                          <input type="text" name='ques35' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques35.match(/reaction/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques35 != "" && UserData.ques35 == "reaction" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques35 != "" && !UserData.ques35.match(/reaction/gi) ? "(reaction)" : ""}
                                          </i>
                                          <p>after he or she experiences the ad is most important.</p>
                                    </div> <br />
                                    <h5>Marketing strategies</h5> <br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">  • On international flights, it is wise for advertisements to be displayed in the common</label>
                                          <span className='Numbers'>36</span>
                                          <input type="text" name='ques36' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques36.match(/native language/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques36 != "" && UserData.ques36 == "native language" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Actual-test-7" && UserData.ques36 != "" && !UserData.ques36.match(/native language/gi) ? "(native language)" : ""}
                                          </i>
                                          <p> of most passengers.</p>
                                    </div> <br />
                                    <div className="question flex flex-wrap gap-2">
                                          <div className='text-justify'>• Very few young people buy<span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>37</span>
                                                <input type="text" name="ques37" id="ques27" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques37.match(/newspapers/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques37 != "" && UserData.ques37 == "newspapers" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques37 != "" && !UserData.ques37.match(/newspapers/gi) ? "(newspapers)" : ""}
                                                </i>
                                          </div>
                                    </div> <br />






                                    <div className="question flex flex-wrap gap-2">
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>38</span>• The UNESCO website would be a good place to advertise for companies aiming to improve the
                                                <input type="text" name="ques38" id="ques29" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques38.match(/enviroment/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques38 != "" && UserData.ques38 == "enviroment" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques38 != "" && !UserData.ques38.match(/enviroment/gi) ? "(enviroment)" : ""}
                                                </i>
                                                are needed.
                                          </div>
                                    </div> <br />


                                    <div className="question flex flex-wrap gap-2">
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>39</span>• One good location to place ads for suntan lotion is the
                                                <input type="text" name="ques39" id="ques29" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques39.match(/swiming pool/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques39 != "" && UserData.ques39 == "swiming pool" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques39 != "" && !UserData.ques39.match(/swiming pool/gi) ? "(swiming pool)" : ""}
                                                </i>
                                          </div>
                                    </div> <br />

                                    <div className="question flex flex-wrap gap-2">
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>40</span>• A good scene for a water purification commercial would be wonderful sights of a
                                                <input type="text" name="ques40" id="ques40" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && !UserData.ques40.match(/national park/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Actual-test-7" && UserData.ques40 != "" && UserData.ques40 == "national park" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Actual-test-7" && UserData.ques40 != "" && !UserData.ques40.match(/national park/gi) ? "(national park)" : ""}
                                                </i>
                                          </div>
                                    </div> <br />

                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage