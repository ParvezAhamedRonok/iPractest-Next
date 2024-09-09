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
            ["frame"],
            ["195"],
            ["payment"],
            ["grandparents"],
            ["color"],
            ["hand"],
            ["background"],
            ["focus"],
            ["10 days"],
            ["plastic"],
            ["C"], ["B"], ["A"], ["A"], ["C"], ["A"], ["B"], ["C"], ["B"], ["C"],
            ["B"], ["A"], ["C"], ["C"],
            ["history"],
            ["paper"],
            ["people"],
            ["stress"],
            ["graph"],
            ["evaluate"],
            ["creativity"],
            ["therapy"],
            ["fitness"],
            ["balance"],
            ["brain"],
            ["motivation"],
            ["isolation"],
            ["calories"],
            ["obesity"],
            ["habit"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test2-Part1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 10</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test2-Part1.mp3?_=1") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Copying photos to digital format</h5> <br /> <br />
                                    <h5>Name of company: Picturerep</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <h5>Requirements</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Maximum size of photos is 30 cm, minimum size 4 cm. <br /> <br />

                                                ●   Photos must not be in a
                                                <span className='Numbers'>1</span>
                                                <input type="text" name='ques1' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques1.match(/frame/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques1 != "" && UserData.ques1 == "frame" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques1 != "" && !UserData.ques1.match(/frame/gi) ? "(frame)" : ""}
                                                </i>
                                                or an album.t</label>
                                    </div>
                                    <h5>or an album.</h5>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">The cost for 360 photos is £
                                                <input type="text" name='ques2' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques2.match(/195/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques2 != "" && UserData.ques2 == "195" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques2 != "" && !UserData.ques2.match(/195/gi) ? "(195)" : ""}
                                                </i>
                                                (including one disk).</label>
                                          <span className='Numbers'>2</span>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">   ●   Before the complete order is sent,
                                                <span className='Numbers'>3</span>
                                                <input type="text" name='ques3' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques3.match(/payment/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques3 != "" && UserData.ques3 == "payment" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques3 != "" && !UserData.ques3.match(/payment/gi) ? "(payment)" : ""}
                                                </i>
                                                is required.</label>
                                    </div> <br />
                                    <h5>Services included in the price</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Photos can be placed in a folder, e.g. with the name</label>
                                          <span className='Numbers'>4</span>
                                          <input type="text" name='ques4' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques4.match(/grandparents/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques4 != "" && UserData.ques4 == "grandparents" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques4 != "" && !UserData.ques4.match(/grandparents/gi) ? "(grandparents)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   The
                                                <span className='Numbers'>5</span>
                                                <input type="text" name='ques5' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques5.match(/color/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques5 != "" && UserData.ques5 == "color" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques5 != "" && !UserData.ques5.match(/color/gi) ? "(color)" : ""}
                                                </i>
                                                and contrast can be improved if necessary. </label>
                                    </div> <br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6">●   Photos which are very fragile will be scanned by </label>
                                          <span className='Numbers'>6</span>
                                          <input type="text" name='ques6' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques6.match(/hand/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques6 != "" && UserData.ques6 == "hand" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques6 != "" && !UserData.ques6.match(/hand/gi) ? "(hand)" : ""}
                                          </i>
                                    </div> <br />
                                    <h5>Special restore service (costs extra)</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   It may be possible to remove an object from a photo, or change the</label>
                                          <span className='Numbers'>7</span>
                                          <input type="text" name='ques7' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques7.match(/background/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques7 != "" && UserData.ques7 == "background" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques7 != "" && !UserData.ques7.match(/background/gi) ? "(background)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   A photo which is not correctly in</label>
                                          <span className='Numbers'>8</span>
                                          <input type="text" name='ques8' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques8.match(/focus/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques8 != "" && UserData.ques8 == "focus" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques8 != "" && !UserData.ques8.match(/focus/gi) ? "(focus)" : ""}
                                          </i>
                                          <p>cannot be fixed.</p>
                                    </div> <br /> <br />
                                    <h5>Other information</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Orders are completed within</label>
                                          <span className='Numbers'>9</span>
                                          <input type="text" name='ques9' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques9.match(/10 days/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques9 != "" && UserData.ques9 == "10 days" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques9 != "" && !UserData.ques9.match(/10 days/gi) ? "(10 days)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Send the photos in a box not </label>
                                          <span className='Numbers'>10</span>
                                          <input type="text" name='ques10' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques10.match(/plastic/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques10 != "" && UserData.ques10 == "plastic" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques10 != "" && !UserData.ques10.match(/plastic/gi) ? "(plastic)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test2-Part2.mp3?_=2") }}
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
                                    Questions 11 – 15<br /><br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-center mt-3 mb-3'>Minster Park</h5>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'>
                                                <span className='Numbers mr-1 mb-2'>11</span>
                                                <label htmlFor="ques11">Dartfield House school used to be
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques11 != "" && UserData.ques11 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' > a tourist information centre..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>  a private home..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>a local council building. </i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                                What is planned with regard to the lower school?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques12 != "" && UserData.ques12 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' > All buildings on the main site will be improved.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>The lower school site will be used for new homes.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Additional school buildings will be constructed on the lower school site.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3 mt-2'>
                                          <div className=' gap-1'><span className='Numbers mr-1 mb-2'>13</span>
                                                <label htmlFor="ques13">  The catering has been changed because of
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques13 != "" && UserData.ques13 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >long queuing times.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>changes to the school timetable.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> dissatisfaction with the menus.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>14</span>
                                                <label htmlFor="ques14"> Parents are asked to
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques14 != "" && UserData.ques14 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='mt-[-8px] sm:mt-[0px]'>  help their children to decide in advance which serving point to use.</i>
                                                      <i className='mt-[-9px] sm:mt-[0px]'>make sure their children have enough money for food.</i>
                                                      <i className='mt-[-9px] sm:mt-[0px]'>advise their children on healthy food to eat.</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>15</span>
                                                What does the speaker say about the existing canteen?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques15 != "" && UserData.ques15 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='mt-[3px] sm:mt-[0px]'>Food will still be served there.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Only staff will have access to it.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Pupils can take their food into it.</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />



                                    <div className="Q-articles">
                                          <h5>Questions 16-18</h5> <br />
                                          What comment does the speaker make about each of the following serving points in the Food Hall?<br /><br />
                                          <i className='font-bold p-3 mt-2 mb-2'>Choose THREE answers from the box and write the correct letter,</i>
                                    </div> <br />
                                    <h5>Food available at serving points in Food Hall <br /> <br />

                                          16   World Adventures <br /> <br />
                                          17   Street Life <br /> <br />
                                          18   Speedy Italian</h5> <br /> <br />

                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>16</span><label htmlFor="">Comment-1
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques16 != "" && UserData.ques16 != "A" ? "(A)" : ""}</i>
                                          </label></div>
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
                                                      <i className='' >daily change in menu.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Only staff will have access</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>Pupils can take their</i>
                                                </div>
                                          </div>
                                    </div> <br />
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>17</span><label htmlFor="">Comment-2
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques17 != "" && UserData.ques17 != "B" ? "(B)" : ""}</i>
                                          </label></div>
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
                                                      <i className='' >Food will still be served </i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>pupils help to plan menus</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> food into it.</i>
                                                </div>
                                          </div>
                                    </div> <br />
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>18</span><label htmlFor="">Comment-3
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques18 != "" && UserData.ques18 != "C" ? "(C)" : ""}</i>
                                          </label></div>
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
                                                      <i className='' > different food every week.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>can have access to it.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>only vegetarian food.</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />

                                    <div className="Q-articles">
                                          <h5>Questions 19 and 20</h5> <br />
                                          Which TWO optional after-school lessons are new?<br /><br />
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>19</span><label htmlFor=""> <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques19 != "" && UserData.ques19 != "B" ? "(B)" : ""}</i></label></div>
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
                                                      <i className='' > swimming</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>piano</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>vegetarian </i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>20</span><label htmlFor=""> <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques20 != "" && UserData.ques20 != "C" ? "(C)" : ""}</i></label></div>
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
                                                      <i className='' >  cycling</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>theatre sound and lighting</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>acting</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />


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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test2-Part3.mp3?_=3") }}
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
                                    <h5 className='text-center'>Which TWO points do Thomas and Jeanne make about Thomas’s sporting activities at school?<br /> <br /></h5>
                              </div>
                              <h5 className='w-full text-center'>Assignment on sleep and dreams</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>21</span>
                                                Luke read that one reason why we often forget dreams is that
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques21 != "" && UserData.ques21 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='mt-[-7px] sm:mt-[0px]'> our memories cannot cope with too much information</i>
                                                      <i className='mt-[-9px] sm:mt-[0px]'> we might other wise be confused about what is real..</i>
                                                      <i className='mt-[-9px] sm:mt-[0px]'> we do not think they are important.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-3 flex flex-wrap'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>22</span>
                                                What do Luke and Susie agree about dreams predicting the future?
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques22 != "" && UserData.ques22 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' > It may just be due to chance..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>It only happens with certain types of event..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> It happens more often than some people think</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>
                                                Susie says that a study on pre-school children having a short nap in the day
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques23 != "" && UserData.ques23 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >had controversial results..</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>used faulty research methodology.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> failed to reach any clear conclusions</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='text-justify mb-3'>
                                                <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>24</span>
                                                In their last assignment, both students had problems with
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-10" && UserData.ques24 != "" && UserData.ques24 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >statistical analysis.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>making an action plan.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'> self-assessment</i>
                                                </div>
                                          </div>
                                    </div>







                                    <div className="Q-articles mt-3">
                                          <h5>
                                                Questions 25-30<br /> <br />
                                                Write ONE WORD ONLY for each answer<br /><br />
                                          </h5> <br /><br />
                                          <h5 className='text-center mt-3 mb-3'>Assignment plan</h5>
                                          <div className='p-3 border-1 rounded border-black'>
                                                <div className='p-3 text-center border-1 border-black'>
                                                      Decide on research question: <br /><br />
                                                      Is there a relationship between hours of sleep and number of dreams?
                                                </div>
                                                <div className='p-3 text-center border-1 border-black'>
                                                      <label htmlFor="Name">Decide on sample:
                                                            Twelve students from the </label>
                                                      <span className='Numbers'>25</span>
                                                      <input type="text" name='ques25' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques25.match(/history/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques25 != "" && UserData.ques25 == "history" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques25 != "" && !UserData.ques25.match(/history/gi) ? "(history)" : ""}
                                                      </i>
                                                </div>

                                                <div className='p-3 text-center border-1 border-black'>
                                                      Decide on methodology:<br /><br />

                                                      Self-reporting
                                                </div>


                                                <div className='p-3 text-center border-1 border-black'>
                                                      <label htmlFor="Name">Decide on procedure:
                                                            Answers on </label>
                                                      <span className='Numbers'>26</span>
                                                      <input type="text" name='ques26' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques26.match(/paper/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques26 != "" && UserData.ques26 == "paper" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques26 != "" && !UserData.ques26.match(/paper/gi) ? "(paper)" : ""}
                                                      </i>
                                                </div>

                                                <div className='p-3 text-center border-1 border-black flex flex-wrap'>
                                                      <label htmlFor="Name">Check ethical guidelines for working with</label>
                                                      <span className='Numbers'>27</span>
                                                      <input type="text" name='ques27' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques27.match(/people/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques27 != "" && UserData.ques27 == "people" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques27 != "" && !UserData.ques27.match(/people/gi) ? "(people)" : ""}
                                                      </i>
                                                      <label htmlFor="Name">Ensure that risk is assessed and </label>
                                                      <span className='Numbers'>28</span>
                                                      <input type="text" name='ques28' onChange={handleValueChange}
                                                            className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques28.match(/stress/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques28 != "" && UserData.ques28 == "stress" && "text-green-700"}
                                                            `} />
                                                      <i className='text-green-600 font-bold mr-2 ml-2'>
                                                            {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques28 != "" && !UserData.ques28.match(/stress/gi) ? "(stress)" : ""}
                                                      </i>
                                                      <p> is kept to a minimum</p>
                                                </div>
                                                <div className='p-3 text-center border-1 border-black flex flex-wrap gap-3'>
                                                      <label htmlFor="Name">Analyse the results <br />
                                                            Calculate the correlation and make a
                                                            <span className='Numbers'>29</span>
                                                            <input type="text" name='ques29' onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques29.match(/graph/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques29 != "" && UserData.ques29 == "graph" && "text-green-700"}
                                                            `} />
                                                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                                                  {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques29 != "" && !UserData.ques29.match(/graph/gi) ? "(graph)" : ""}
                                                            </i>
                                                            <span className='Numbers'>30</span>
                                                            <input type="text" name='ques30' onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques30.match(/evaluate/gi) && "text-red-600"}
                                                            ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques30 != "" && UserData.ques30 == "evaluate" && "text-green-700"}
                                                            `} />
                                                            <i className='text-green-600 font-bold mr-2 ml-2'>
                                                                  {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques30 != "" && !UserData.ques30.match(/evaluate/gi) ? "(evaluate)" : ""}
                                                            </i>
                                                            the research</label>
                                                </div>



                                          </div><br /><br />

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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test2-Part4.mp3?_=4") }}
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
                                    Write ONE WORD ONLY for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 mb-2 text-inherit'>Health benefits of dance</h5> <br /> <br />
                              </div>
                              <h5>Recent findings: <br />
                                    ●   All forms of dance produce various hormones associated with feelings of happiness.<br /> <br />
                                    ●   Dancing with others has a more positive impact than dancing alone.</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   An experiment on university students suggested that dance increases</label>
                                          <span className='Numbers'>31</span>
                                          <input type="text" name='ques31' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques31.match(/creativity/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques31 != "" && UserData.ques31 == "creativity" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques31 != "" && !UserData.ques31.match(/creativity/gi) ? "(creativity)" : ""}
                                          </i>

                                    </div><br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name">●   For those with mental illness, dance could be used as a form of</label> </label>
                                          <span className='Numbers'>32</span>
                                          <input type="text" name='ques32' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques32.match(/therapy/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques32 != "" && UserData.ques32 == "therapy" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques32 != "" && !UserData.ques32.match(/therapy/gi) ? "(therapy)" : ""}
                                          </i>
                                    </div> <br />
                                    <h5>Benefits of dance for older people:</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   accessible for people with low levels of</label>
                                          <span className='Numbers'>33</span>
                                          <input type="text" name='ques33' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques33.match(/fitness/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques33 != "" && UserData.ques33 == "fitness" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques33 != "" && !UserData.ques33.match(/fitness/gi) ? "(fitness)" : ""}
                                          </i>
                                    </div> <br />
                                    <h5>●   reduces the risk of heart disease</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   better </label>
                                          <span className='Numbers'>34</span>
                                          <input type="text" name='ques34' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques34.match(/balance/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques34 != "" && UserData.ques34 == "balance" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques34 != "" && !UserData.ques34.match(/balance/gi) ? "(balance)" : ""}
                                          </i>
                                          <p>reduces the risk of accidents</p>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   improves</label>
                                          <span className='Numbers'>35</span>
                                          <input type="text" name='ques35' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques35.match(/brain/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques35 != "" && UserData.ques35 == "brain" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques35 != "" && !UserData.ques35.match(/brain/gi) ? "(brain)" : ""}
                                          </i>
                                          <p>function by making it work faster</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   improves participants’ general well-being

                                                ●   gives people more<br /> <br /> </label>
                                          <span className='Numbers'>36</span>
                                          <input type="text" name='ques36' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques36.match(/motivation/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques36 != "" && UserData.ques36 == "motivation" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques36 != "" && !UserData.ques36.match(/motivation/gi) ? "(motivation)" : ""}
                                          </i>
                                          <p>to take exercise</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   can lessen the feeling of</label>
                                          <span className='Numbers'>37</span>
                                          <input type="text" name='ques37' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques37.match(/isolation/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques37 != "" && UserData.ques37 == "isolation" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques37 != "" && !UserData.ques37.match(/isolation/gi) ? "(isolation)" : ""}
                                          </i>
                                          <p>very common in older people</p>
                                    </div><br />
                                    <h5>Benefits of Zumba:</h5> <br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   A study at The University of Wisconsin showed that doing Zumba for 40 minutes uses up as many</label>
                                          <span className='Numbers'>38</span>
                                          <input type="text" name='ques38' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques38.match(/calories/gi) && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques38 != "" && UserData.ques38 == "calories" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques38 != "" && !UserData.ques38.match(/calories/gi) ? "(calories)" : ""}
                                          </i>
                                          <p>as other quite intense forms of exercise</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   The American Journal of Health Behavior study showed that:

                                                –  women suffering from </label>
                                          <span className='Numbers'>39</span>
                                          <input type="text" name='ques39' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques39.match(/obesity/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques39 != "" && UserData.ques39 == "obesity" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques39 != "" && !UserData.ques39.match(/obesity/gi) ? "(obesity)" : ""}
                                          </i>
                                          <p>  benefited from doing Zumba</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">  –  Zumba became a</label>
                                          <span className='Numbers'>40</span>
                                          <input type="text" name='ques40' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-10" && !UserData.ques40.match(/habit/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-10" && UserData.ques40 != "" && UserData.ques40 == "habit" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-10" && UserData.ques40 != "" && !UserData.ques40.match(/habit/gi) ? "(habit)" : ""}
                                          </i>
                                          <p> for the participants.</p>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage