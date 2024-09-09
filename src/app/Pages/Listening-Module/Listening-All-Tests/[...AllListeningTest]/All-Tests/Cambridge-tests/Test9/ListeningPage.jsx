import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import Image1 from "../../../../../../../../assets/images/listening-images/cambridge-t-9-Ima1.jpg"
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
            ["egg"],
            ["tower"],
            ["car"],
            ["animals"],
            ["bridge"],
            ["movie"],
            ["decorate"],
            ["wednesdays", "/", "Wednesdays"],
            ["fradstone", "/", "Fradstone"],
            ["parking"],
            ["C"], ["A"], ["B"], ["C"], ["H"], ["C"], ["G"], ["B"], ["I"], ["A"],
            ["C"], ["B"], ["B"], ["B"], ["D"], ["C"], ["A"], ["H"], ["F"], ["G"],
            ["practical"],
            ["publication"],
            ["choices"],
            ["negative"],
            ["play"],
            ["capitalism"],
            ["depression"],
            ["logic"],
            ["opportunity"],
            ["practice"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 09</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part1.mp3?_=1") }}
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
                                    Questions 1 – 10 <br />
                                    Complete the notes below. <br />
                                    Write ONE WORD AND/OR A NUMBER for each answer.<br /> <br />
                                    <h5 className='text-center mt-2 text-inherit'>Children’s Engineering Workshops</h5> <br /> <br />
                                    <h5>Tiny Engineers (ages 4-5)</h5> <br />
                                    <h5>Activities</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <h5>●   Cleaning all surfaces</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Create a cover for an
                                                <span className='Numbers'>1</span>
                                                <input type="text" name='ques1' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques1.match(/egg/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques1 != "" && UserData.ques1 == "egg" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques1 != "" && !UserData.ques1.match(/egg/gi) ? "(egg)" : ""}
                                                </i>
                                                so they can drop it from a height without breaking it.
                                          </label>
                                    </div>
                                    <h5>●   Cleaning shower, sinks, toilet etc. <br /><br />
                                          Additional services agreed</h5>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Take part in a competition to build the tallest
                                                <span className='Numbers'>2</span>
                                                <input type="text" name='ques2' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques2.match(/tower/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques2 != "" && UserData.ques2 == "tower" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques2 != "" && !UserData.ques2.match(/tower/gi) ? "(tower)" : ""}
                                                </i>
                                          </label>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">  ●   Make a
                                                <span className='Numbers'>3</span>
                                                <input type="text" name='ques3' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques3.match(/car/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques3 != "" && UserData.ques3 == "car" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques3 != "" && !UserData.ques3.match(/car/gi) ? "(car)" : ""}
                                                </i>
                                                powered by a balloon.
                                          </label>
                                    </div> <br />
                                    <h5>Junior Engineers (ages 6-8)</h5> <br />
                                    <h5>Activities:</h5> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Build model cars, trucks and
                                                <span className='Numbers'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques4.match(/animals/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques4 != "" && UserData.ques4 == "animals" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques4 != "" && !UserData.ques4.match(/animals/gi) ? "(animals)" : ""}
                                                </i>
                                                and learn how to program them so they can move.
                                          </label>

                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Take part in a competition to build the longest
                                                <span className='Numbers'>5</span>
                                                <input type="text" name='ques5' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques5.match(/bridge/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques5 != "" && UserData.ques5 == "bridge" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques5 != "" && !UserData.ques5.match(/bridge/gi) ? "(bridge)" : ""}
                                                </i>
                                                using card and wood.
                                          </label>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6">●   Create a short
                                                <span className='Numbers'>6</span>
                                                <input type="text" name='ques6' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques6.match(/movie/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques6 != "" && UserData.ques6 == "movie" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques6 != "" && !UserData.ques6.match(/movie/gi) ? "(movie)" : ""}
                                                </i>
                                                with special software.
                                          </label>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Build,
                                                <span className='Numbers'>7</span>
                                                <input type="text" name='ques7' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques7.match(/decorate/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques7 != "" && UserData.ques7 == "decorate" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques7 != "" && !UserData.ques7.match(/decorate/gi) ? "(decorate)" : ""}
                                                </i>
                                                and program a humanoid robot.  <br />
                                                Cost for a five-week block: £50
                                          </label>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">Held on
                                                <span className='Numbers'>8</span>
                                                <input type="text" name='ques8' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques8.match(/Wednesdays/gi) && "text-red-600"}
                                                      
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques8 != "" && UserData.ques8 == "Wednesdays" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques8 != "" && !UserData.ques8.match(/Wednesdays/gi) ? "(Wednesdays)" : ""}
                                                </i>
                                                from 10 am to 11 am
                                          </label>
                                    </div>
                                    <h5>Location</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">Building 10A,
                                                <span className='Numbers'>9</span>
                                                <input type="text" name='ques9' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques9.match(/Fradstone/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques9 != "" && UserData.ques9 == "Fradstone" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques9 != "" && !UserData.ques9.match(/Fradstone/gi) ? "(Fradstone)" : ""}
                                                </i>
                                                Industrial Estate, Grasford
                                          </label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> Plenty of
                                                <span className='Numbers'>10</span>
                                                <input type="text" name='ques10' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques10.match(/parking/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques10 != "" && UserData.ques10 == "parking" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques10 != "" && !UserData.ques10.match(/parking/gi) ? "(parking)" : ""}
                                                </i>
                                                is available.</label><br /> <br />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part2.mp3?_=2") }}
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
                              <div className="Question">
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>
                                                Stevenson’s was founded in
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques11 != "" && UserData.ques11 != "C" ? "(C)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques11' />
                                                      <i className='' > 1923 </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques11' />
                                                      <i className=''> 1924</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques11' />
                                                      <i className=''>1926</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                                Originally, Stevenson’s manufactured goods for
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques12 != "" && UserData.ques12 != "A" ? "(A)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques12' />
                                                      <i className='' >the healthcare industry. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques12' />
                                                      <i className=''> the automotive industry.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques12' />
                                                      <i className=''> the machine tools industry.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                                What does the speaker say about the company premises?
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques13 != "" && UserData.ques13 != "B" ? "(B)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques13' />
                                                      <i className='' > The company has recently moved. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques13' />
                                                      <i className=''>The company has no plans to move.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques13' />
                                                      <i className=''> The company is going to move shortly.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>14</span>
                                                The programme for the work experience group includes
                                                <i className='text-green-700 ml-2 font-bold text-xl'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques14 != "" && UserData.ques14 != "C" ? "(C)" : ""}</i>
                                          </div>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques14' />
                                                      <i className='' >time to do research. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques14' />
                                                      <i className=''> meetings with a teacher.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques14' />
                                                      <i className=''>talks by staff.</i>
                                                </div>
                                          </div>
                                    </div>



                                    <div className="articles mt-3 mb-3">
                                          <h5>Questions 15-20</h5> <br />
                                          <label htmlFor="">Label the map below. <br /> Write the correct letter, A-J, next to Questions 15-20.</label> <br />
                                          <h5 className='w-full text-center'>Plan of Stevenson’s site</h5> <br />
                                          <Image src={Image1} alt="cambridge-test9 image-1" /> <br />

                                          <div className="Questions p-3">
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>15</span>
                                                      <label htmlFor="ques15">  coffee room
                                                            <select name="ques15" id="ques15" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques15 != "H" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques15 != "" && UserData.ques15 == "H" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques15 != "" && UserData.ques15 != "H" ? "H" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>16</span>
                                                      <label htmlFor="ques16">   warehouse
                                                            <select name="ques16" id="ques16" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques16 != "C" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques16 != "" && UserData.ques16 == "C" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques16 != "" && UserData.ques16 != "C" ? "C" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>17</span>
                                                      <label htmlFor="ques17">staff canteen
                                                            <select name="ques17" id="ques17" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques17 != "G" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques17 != "" && UserData.ques17 == "G" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques17 != "" && UserData.ques17 != "G" ? "G" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>18</span>
                                                      <label htmlFor="ques18"> meeting room
                                                            <select name="ques18" id="ques18" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques18 != "B" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques18 != "" && UserData.ques18 != "B" ? "B" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>19</span>
                                                      <label htmlFor="ques19"> human resources
                                                            <select name="ques19" id="ques19" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques19 != "I" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques19 != "" && UserData.ques19 == "I" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques19 != "" && UserData.ques19 != "I" ? "I" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>20</span>
                                                      <label htmlFor="ques20">boardroom
                                                            <select name="ques20" id="ques20" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques20 != "A" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques20 != "" && UserData.ques20 == "A" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques20 != "" && UserData.ques20 != "A" ? "A" : ""}</i>
                                                      </label>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part3.mp3?_=3") }}
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
                                    <h5>PART 3  <br />
                                          Questions 21 and 22</h5> <br />
                                    <h5 className='text-center'>Which TWO parts of the introductory stage to their art projects do Jess and Tom agree were useful?<br /> <br /></h5>
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques21"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>21</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques21 != "" && UserData.ques21 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques21' />
                                                      <i className='' >the Bird Park visit</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques21' />
                                                      <i className=''>  the workshop sessions</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques21' />
                                                      <i className=''>the Natural History Museum visit</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques22"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>22</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques22 != "" && UserData.ques22 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques22' />
                                                      <i className='' > the projects done in previous years </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques22' />
                                                      <i className=''>  the handouts with research sources</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques22' />
                                                      <i className=''>The future is unlucky</i>
                                                </div>
                                          </div>
                                    </div>

                              </div>

                              <div className="Q-articles font-bold">
                                    <h5>
                                          Questions 23 and 24</h5> <br />
                                    <h5 className='text-center'>In which TWO ways do both Jess and Tom decide to change their proposals?<br /> <br /></h5>
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques23"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques23 != "" && UserData.ques23 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques23' />
                                                      <i className='' > by giving a rationale for their action plans</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques23' />
                                                      <i className=''>  by being less specific about the outcome</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques23' />
                                                      <i className=''> by adding a video diary presentation</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques24"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>24</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques24 != "" && UserData.ques24 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques24' />
                                                      <i className='' > the projects done in previous years </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques24' />
                                                      <i className=''> by making their notes more evaluative</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques24' />
                                                      <i className=''>Tby providing a timeline and a mind map</i>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                              <div className="Q-articles font-bold">
                                    <h5> Questions 25 - 30</h5> <br />
                                    <h5 className='text-justify'>Which personal meaning do the students decide to give to each of the following pictures? <br />
                                          Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.<br /> Personal meanings</h5>

                              </div>
                              <div className='p-3'>
                                    <p><span className='font-bold mr-2'>A</span> a childhood memory</p>
                                    <p><span className='font-bold mr-2'>B</span>hope for the future</p>
                                    <p><span className='font-bold mr-2'>C</span> fast movement</p>
                                    <p><span className='font-bold mr-2'>D</span> a potential threat</p>
                                    <p><span className='font-bold mr-2'>E</span> the power of colour</p>
                                    <p><span className='font-bold mr-2'>F</span>the continuity of life</p>
                                    <p><span className='font-bold mr-2'>G</span>protection of nature</p>
                                    <p><span className='font-bold mr-2'>H</span>a confused attitude to nature</p>

                              </div> <br />
                              <h5>Pictures</h5> <br />
                              <div className="Questions p-3">
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="ques25">  Falcon (Landseer)
                                                <select name="ques25" id="ques25" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques25 != "D" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques25 != "" && UserData.ques25 == "D" && "text-green-700"}
                                                      `}>
                                                      <option value="" selected></option>
                                                      <option value="A">A</option>
                                                      <option value="B">B</option>
                                                      <option value="C">C</option>
                                                      <option value="D">D</option>
                                                      <option value="E">E</option>
                                                      <option value="F">F</option>
                                                      <option value="G">G</option>
                                                      <option value="H">H</option>
                                                      <option value="I">I</option>
                                                      <option value="J">J</option>
                                                </select>
                                                <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques25 != "" && UserData.ques25 != "D" ? "D" : ""}</i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>26</span>
                                          <label htmlFor="ques26">  Fish hawk (Audubon)
                                                <select name="ques26" id="ques26" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques26 != "C" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques26 != "" && UserData.ques26 == "C" && "text-green-700"}
                                                      `}>
                                                      <option value="" selected></option>
                                                      <option value="A">A</option>
                                                      <option value="B">B</option>
                                                      <option value="C">C</option>
                                                      <option value="D">D</option>
                                                      <option value="E">E</option>
                                                      <option value="F">F</option>
                                                      <option value="G">G</option>
                                                      <option value="H">H</option>
                                                      <option value="I">I</option>
                                                      <option value="J">J</option>
                                                </select>
                                                <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques26 != "" && UserData.ques26 != "C" ? "C" : ""}</i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="ques27">Kingfisher (van Gogh)
                                                <select name="ques27" id="ques27" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques27 != "A" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques27 != "" && UserData.ques27 == "A" && "text-green-700"}
                                                      `}>
                                                      <option value="" selected></option>
                                                      <option value="A">A</option>
                                                      <option value="B">B</option>
                                                      <option value="C">C</option>
                                                      <option value="D">D</option>
                                                      <option value="E">E</option>
                                                      <option value="F">F</option>
                                                      <option value="G">G</option>
                                                      <option value="H">H</option>
                                                      <option value="I">I</option>
                                                      <option value="J">J</option>
                                                </select>
                                                <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques27 != "" && UserData.ques27 != "A" ? "A" : ""}</i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>28</span>
                                          <label htmlFor="ques28">Portrait of William Wells
                                                <select name="ques28" id="ques28" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques28 != "H" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques28 != "" && UserData.ques28 == "H" && "text-green-700"}
                                                      `}>
                                                      <option value="" selected></option>
                                                      <option value="A">A</option>
                                                      <option value="B">B</option>
                                                      <option value="C">C</option>
                                                      <option value="D">D</option>
                                                      <option value="E">E</option>
                                                      <option value="F">F</option>
                                                      <option value="G">G</option>
                                                      <option value="H">H</option>
                                                      <option value="I">I</option>
                                                      <option value="J">J</option>
                                                </select>
                                                <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques28 != "" && UserData.ques28 != "H" ? "H" : ""}</i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>29</span>
                                          <label htmlFor="ques29">   Vairumati (Gauguin)
                                                <select name="ques29" id="ques29" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques29 != "F" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques29 != "" && UserData.ques29 == "F" && "text-green-700"}
                                                      `}>
                                                      <option value="" selected></option>
                                                      <option value="A">A</option>
                                                      <option value="B">B</option>
                                                      <option value="C">C</option>
                                                      <option value="D">D</option>
                                                      <option value="E">E</option>
                                                      <option value="F">F</option>
                                                      <option value="G">G</option>
                                                      <option value="H">H</option>
                                                      <option value="I">I</option>
                                                      <option value="J">J</option>
                                                </select>
                                                <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques29 != "" && UserData.ques29 != "F" ? "F" : ""}</i>
                                          </label>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>30</span>
                                          <label htmlFor="ques30"> Portrait of Giovanni de Medici
                                                <select name="ques30" id="ques30" onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques30 != "G" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques30 != "" && UserData.ques30 == "G" && "text-green-700"}
                                                      `}>
                                                      <option value="" selected></option>
                                                      <option value="A">A</option>
                                                      <option value="B">B</option>
                                                      <option value="C">C</option>
                                                      <option value="D">D</option>
                                                      <option value="E">E</option>
                                                      <option value="F">F</option>
                                                      <option value="G">G</option>
                                                      <option value="H">H</option>
                                                      <option value="I">I</option>
                                                      <option value="J">J</option>
                                                </select>
                                                <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-test-9" && UserData.ques30 != "" && UserData.ques30 != "G" ? "G" : ""}</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-4 mb-2 text-inherit'>Stoicism</h5> <br /> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> Stoicism is still relevant today because of its
                                                <span className='Numbers'>31</span>
                                                <input type="text" name='ques31' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques31.match(/practical/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques31 != "" && UserData.ques31 == "practical" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques31 != "" && !UserData.ques31.match(/practical/gi) ? "(practical)" : ""}
                                                </i>
                                                appeal.
                                          </label>

                                    </div><br />
                                    <h5>Ancient Stoics</h5> <br />
                                    <label htmlFor="">●   Stoicism was founded over 2,000 years ago in Greece.</label> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">    ●   The Stoics’ ideas are surprisingly well known, despite not being intended for
                                                <span className='Numbers'>32</span>
                                                <input type="text" name='ques32' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques32.match(/publication/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques32 != "" && UserData.ques32 == "publication" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques32 != "" && !UserData.ques32.match(/publication/gi) ? "(publication)" : ""}
                                                </i>
                                          </label>
                                    </div> <br />
                                    <h5>Stoic principles</h5> <br />
                                    <label htmlFor="">●   Happiness could be achieved by leading a virtuous life.  <br />

                                          ●   Controlling emotions was essential.</label>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Epictetus said that external events cannot be controlled but the
                                                <span className='Numbers'>33</span>
                                                <input type="text" name='ques33' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques33.match(/choices/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques33 != "" && UserData.ques33 == "choices" && "text-green-700"}
                                                       `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques33 != "" && !UserData.ques33.match(/choices/gi) ? "(choices)" : ""}
                                                </i>
                                                people make in response can be controlled.
                                          </label>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   A Stoic is someone who has a different view on experiences which others would consider as
                                                <span className='Numbers'>34</span>
                                                <input type="text" name='ques34' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques34.match(/negative/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques34 != "" && UserData.ques34 == "negative" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques34 != "" && !UserData.ques34.match(/negative/gi) ? "(negative)" : ""}
                                                </i>
                                          </label>
                                    </div><br /> <br />
                                    <h5>The influence of Stoicism</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   George Washington organised a
                                                <span className='Numbers'>35</span>
                                                <input type="text" name='ques35' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques35.match(/play/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques35 != "" && UserData.ques35 == "play" && "text-green-700"}
                                                       `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques35 != "" && !UserData.ques35.match(/play/gi) ? "(play)" : ""}
                                                </i>
                                                about Cato to motivate his men.
                                          </label>
                                    </div> <br />
                                    <label htmlFor="">●   The French artist Delacroix was a Stoic.</label> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Adam Smith’s ideas on
                                                <span className='Numbers'>36</span>
                                                <input type="text" name='ques36' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques36.match(/capitalism/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques36 != "" && UserData.ques36 == "capitalism" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques36 != "" && !UserData.ques36.match(/capitalism/gi) ? "(capitalism)" : ""}
                                                </i>
                                                were influenced by Stoicism.
                                          </label>
                                    </div> <br />
                                    <label htmlFor="">●   Some of today’s political leaders are inspired by the Stoics. <br />

                                          ●   Cognitive Behaviour Therapy (CBT)</label>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">–  the treatment for
                                                <span className='Numbers'>37</span>
                                                <input type="text" name='ques37' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques37.match(/depression/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques37 != "" && UserData.ques37 == "depression" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques37 != "" && !UserData.ques37.match(/depression/gi) ? "(depression)" : ""}
                                                </i>
                                                is based on ideas from Stoicism
                                          </label>
                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">–  people learn to base their thinking on
                                                <span className='Numbers'>38</span>
                                                <input type="text" name='ques38' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques38.match(/logic/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques38 != "" && UserData.ques37 == "logic" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques38 != "" && !UserData.ques38.match(/logic/gi) ? "(logic)" : ""}
                                                </i>
                                          </label>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   In business, people benefit from Stoicism by identifying obstacles as
                                                <span className='Numbers'>39</span>
                                                <input type="text" name='ques39' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques39.match(/opportunity/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques39 != "" && UserData.ques39 == "opportunity" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques39 != "" && !UserData.ques39.match(/opportunity/gi) ? "(opportunity)" : ""}
                                                </i>
                                          </label>
                                    </div>

                                    <h5>Relevance of Stoicism</h5> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   It requires a lot of
                                                <span className='Numbers'>40</span>
                                                <input type="text" name='ques40' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-9" && !UserData.ques40.match(/practice/gi) && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-test-9" && UserData.ques40 != "" && UserData.ques40 == "practice" && "text-green-700"}
                                                      `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-9" && UserData.ques40 != "" && !UserData.ques40.match(/practice/gi) ? "(practice)" : ""}
                                                </i>
                                                but Stoicism can help people to lead a good life. <br />●   It teaches people that having a strong character is more important than anything else. </label>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage