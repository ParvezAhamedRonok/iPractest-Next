import React, { useRef } from 'react'
import "../../../ListeningAllStyles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "../../../../../../../../assets/images/listeningTest12Img1.jpg"
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
            ["28th"],
            ["550"],
            ["Chervil"],
            ["garage"],
            ["garden"],
            ["parking"],
            ["wood"],
            ["bridge"],
            ["monument"],
            ["March"],
            ["C"], ["A"], ["B"], ["B"], ["C"], ["F"], ["A"], ["I"], ["E"], ["H"],
            ["B"], ["A"], ["B"], ["A"], ["C"], ["F"], ["D"], ["E"], ["B"], ["A"],
            ["spices"],
            ["settlement"],
            ["fat"],
            ["head"],
            ["movement"],
            ["balance"],
            ["brain"],
            ["smell"],
            ["rats"],
            ["forest"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test4-Part1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 12</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test4-Part1.mp3?_=1") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Holiday rental</h5> <br /> <br />
                                    <h5>Owner’s names: Jack Fitzgerald and Shirley Fitzgerald<br /> <br />
                                          Granary Cottage</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   available for week beginning</label>
                                          <span className='Numbers'>1</span>
                                          <input type="text" name='ques1' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques1.match(/28th/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques1 != "" && UserData.ques1 == "28th" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques1 != "" && !UserData.ques1.match(/28th/gi) ? "(28th)" : ""}
                                          </i>
                                          <p>May</p>
                                    </div> <br /> <br />
                                    <h5>Instructors</h5>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   cost for the week:_ £ </label>
                                          <span className='Numbers'>2</span>
                                          <input type="text" name='ques2' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques2.match(/550/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques2 != "" && UserData.ques2 == "550" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques2 != "" && !UserData.ques2.match(/550/gi) ? "(550)" : ""}
                                          </i>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>3</span>
                                          <input type="text" name='ques3' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques3.match(/Chervil/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques3 != "" && UserData.ques3 == "Chervil" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques3 != "" && !UserData.ques3.match(/Chervil/gi) ? "(Chervil)" : ""}
                                          </i>
                                          <p> Cottage.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   cost for the week: £480 __
                                                ●   building was originally a
                                                <span className='Numbers'>4</span>
                                                <input type="text" name='ques4' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques4.match(/garage/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques4 != "" && UserData.ques4 == "garage" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques4 != "" && !UserData.ques4.match(/garage/gi) ? "(garage)" : ""}
                                                </i>
                                          </label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   walk through doors from living room into a </label>
                                          <span className='Numbers'>5</span>
                                          <input type="text" name='ques5' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques5.match(/garden/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques5 != "" && UserData.ques5 == "garden" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques5 != "" && !UserData.ques5.match(/garden/gi) ? "(garden)" : ""}
                                          </i>
                                    </div> <br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6">●   several</label>
                                          <span className='Numbers'>6</span>
                                          <input type="text" name='ques6' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques6.match(/parking/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques6 != "" && UserData.ques6 == "parking" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques6 != "" && !UserData.ques6.match(/parking/gi) ? "(parking)" : ""}
                                          </i>
                                          <p>spaces at the front</p>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques7">●   bathroom has a shower
                                                ●   central heating and stove that burns
                                                <span className='Numbers'>7</span>
                                                <input type="text" name='ques7' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques7.match(/wood/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques7 != "" && UserData.ques7 == "wood" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques7 != "" && !UserData.ques7.match(/wood/gi) ? "(wood)" : ""}
                                                </i>
                                          </label>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   views of old</label>
                                          <span className='Numbers'>8</span>
                                          <input type="text" name='ques8' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques8.match(/bridge/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques8 != "" && UserData.ques8 == "bridge" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques8 != "" && !UserData.ques8.match(/bridge/gi) ? "(bridge)" : ""}
                                          </i>
                                          <p> from living room</p>
                                    </div> <br /> <br />
                                    <h5>Other information</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   view of hilltop</label>
                                          <span className='Numbers'>9</span>
                                          <input type="text" name='ques9' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques9.match(/monument/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques9 != "" && UserData.ques9 == "monument" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques9 != "" && !UserData.ques9.match(/monument/gi) ? "(monument)" : ""}
                                          </i>
                                          <p>from the bedroom</p>
                                    </div> <br />
                                    <h5>Payment</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   deposit: £144 <br />

                                                ●   deadline for final payment: end of</label>
                                          <span className='Numbers'>10</span>
                                          <input type="text" name='ques10' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques10.match(/March/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques10 != "" && UserData.ques10 == "March" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques10 != "" && !UserData.ques10.match(/March/gi) ? "(March)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test4-Part2.mp3?_=2") }}
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
                                    Questions 11-14<br /><br />
                                    Choose the correct letter, A, B or C.
                                    .<br /> <br />
                                    <h5 className='text-center mt-3 mb-3'> Local council report on traffic and highways</h5>
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3 flex flex-wrap'>
                                                <label htmlFor="">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>
                                                      A survey found people’s main concern about traffic in the area was
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-12" && UserData.ques11 != "" && UserData.ques11 != "C" ? "(C)" : ""}</i>
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
                                                      <i className='' >cuts to public transport.</i>
                                                      <i className='mt-[3px] sm:mt-[0px]'>poor maintenance of roads.</i>
                                                      <i className='mt-[5px] sm:mt-[1px]'> changes in the type of traffic. </i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3 flex flex-wrap'>
                                                <label htmlFor="">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                                                      Which change will shortly be made to the cycle path next to the river?
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-12" && UserData.ques12 != "" && UserData.ques12 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' >  It will be widened.</i>
                                                      <i className='mt-[4px] sm:mt-[0px]'>It will be extended.</i>
                                                      <i className='mt-[4px] sm:mt-[0px]'> It will be resurfaced.</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3 flex flex-wrap'>
                                                <label htmlFor="">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>
                                                      Plans for a pedestrian crossing have been postponed because
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-12" && UserData.ques13 != "" && UserData.ques13 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >  the Post Office has moved..</i>
                                                      <i className='mt-[4px] sm:mt-[0px]'>the proposed location is unsafe.</i>
                                                      <i className='mt-[4px] sm:mt-[0px]'> funding is not available at present.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <div className='text-justify mb-3 flex flex-wrap'>
                                                <label htmlFor="">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>14</span>
                                                      On Station Road, notices have been erected
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-12" && UserData.ques14 != "" && UserData.ques14 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='mt-[-10px] sm:mt-0' >telling cyclists not to leave their bikes outside the station ticket office.</i>
                                                      <i className='mt-[-10px] sm:mt-0' > asking motorists to switch off engines when waiting at the level crossing.</i>
                                                      <i className='mt-[-10px] sm:mt-0' > warning pedestrians to leave enough time when crossing the railway line.</i>
                                                </div>
                                          </div>
                                    </div> <br /> <br />

                                    <div className="Q-articles mt-2">
                                          <h5>
                                                Questions 15-20<br /> <br />
                                                Label the map below. <br /> <br />
                                                Write the correct letter, A-I, next to Questions 15-20.<br /><br />
                                          </h5> <br />
                                          <h5 className='text-center mt-3 mb-3'>Recreation ground after proposed changes</h5> <br /> <br />
                                          <Image src={img1} alt="test-12 image-1" />


                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="Name">     New car park  </label>
                                          <input type="text" name='ques15' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques15 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques15 != "" && UserData.ques15 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques15 != "" && UserData.ques15 != "C" ? "(C)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="Name">  New cricket pitch </label>
                                          <input type="text" name='ques16' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques16 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques16 != "" && UserData.ques16 == "F" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques16 != "" && UserData.ques16 != "F" ? "(F)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="Name">  Children’s playground </label>
                                          <input type="text" name='ques17' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques17 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques17 != "" && UserData.ques17 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques17 != "" && UserData.ques17 != "A" ? "(A)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="Name"> Skateboard ramp </label>
                                          <input type="text" name='ques18' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques18 != "I" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques18 != "" && UserData.ques18 == "I" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques18 != "" && UserData.ques18 != "I" ? "(I)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="Name">  Pavilion </label>
                                          <input type="text" name='ques19' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques19 != "E" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques19 != "" && UserData.ques19 == "E" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques19 != "" && UserData.ques19 != "E" ? "(E)" : ""}
                                          </i>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="Name">Notice board </label>
                                          <input type="text" name='ques20' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques20 != "H" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques20 != "" && UserData.ques20 == "H" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques20 != "" && UserData.ques20 != "H" ? "(H)" : ""}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test4-Part3.mp3?_=3") }}
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
                                    <h5>PART 3  <br /> <br />
                                          Questions 21-22 </h5><br />
                                    <h5 className='text-center'>Which TWO benefits of city bike-sharing schemes do the students agree are the most important?<br /> <br /></h5>
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>21</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-12" && UserData.ques21 != "" && UserData.ques21 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >reducing noise pollution</i>
                                                      <i className='mt-1 sm:mt-0'> reducing traffic congestion</i>
                                                      <i className='mt-[6px] sm:mt-[1px]'> encouraging health and fitness</i>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>22</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-12" && UserData.ques22 != "" && UserData.ques22 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' > improving air quality.</i>
                                                      <i className='mt-2 sm:mt-0'>making cycling affordable</i>
                                                      <i className='mt-[6px] sm:mt-[1px]'> It happens more often.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="Q-articles">
                                          <h5>Questions 23 and 24 </h5> <br />
                                          <h5 className='text-center'>Which TWO things do the students think are necessary for successful bike-sharing schemes?<br /> <br /></h5>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>23</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-12" && UserData.ques23 != "" && UserData.ques23 != "B" ? "(B)" : ""}</i>
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
                                                      <i className='' >Bikes should have a GPS system.</i>
                                                      <i className='mt-2 sm:mt-0'>The app should be easy to use.</i>
                                                      <i className='mt-[6px] sm:mt-[1px]'>  Only one scheme should be available.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className='flex flex-wrap gap-1'><span className='Numbers mr-1 mb-2'>24</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Cambridge-test-12" && UserData.ques24 != "" && UserData.ques24 != "A" ? "(A)" : ""}</i>
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
                                                      <i className='' > Public awareness should be raised.</i>
                                                      <i className='mt-[3px] sm:mt-[1px]'>There should be a large network of cycle lanes.</i>
                                                      <i className='mt-[1px]'> self-assessment</i>
                                                </div>
                                          </div>
                                    </div>



                                    <div className="Q-articles">
                                          <h5>
                                                Questions 25-30<br /> <br />
                                                What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?
                                                Choose SIX answers from the box and write the correct letter, A-G, next to Questions 25-30.<br /><br />
                                          </h5>
                                          <h5 className='text-center mt-3 mb-3 '> Opinion of bike-sharing scheme</h5>
                                          <i className='p-3 font-bold'>
                                                A   They agree it has been disappointing.<br /><br />

                                                B   They think it should be cheaper.<br /><br />

                                                C   They are surprised it has been so successful.<br /><br />

                                                D   They agree that more investment is required.<br /><br />

                                                E   They think the system has been well designed.<br /><br />

                                                F   They disagree about the reasons for its success.<br /><br />

                                                G   They think it has expanded too quickly.<br /><br />
                                          </i>
                                          <h5>Cities</h5> <br />

                                    </div>


                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="Name"> Amsterdam</label>
                                          <input type="text" name='ques25' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques25 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques25 != "" && UserData.ques25 == "C" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques25 != "" && UserData.ques25 != "C" ? "(C)" : ""}
                                          </i>
                                          <p>Street</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>26</span>
                                          <label htmlFor="Name">  Dublin </label>
                                          <input type="text" name='ques26' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques26 != "F" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques26 != "" && UserData.ques26 == "F" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques26 != "" && UserData.ques26 != "F" ? "(F)" : ""}
                                          </i>
                                          <p>Street</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="Name">  London</label>
                                          <input type="text" name='ques27' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques27 != "D" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques27 != "" && UserData.ques27 == "D" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques27 != "" && UserData.ques27 != "D" ? "(D)" : ""}
                                          </i>
                                          <p>Street</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>28</span>
                                          <label htmlFor="Name"> Buenos Aires</label>
                                          <input type="text" name='ques28' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques28 != "E" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques28 != "" && UserData.ques28 == "E" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques28 != "" && UserData.ques28 != "E" ? "(E)" : ""}
                                          </i>
                                          <p>Street</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>29</span>
                                          <label htmlFor="Name">  New York</label>
                                          <input type="text" name='ques29' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques29 != "B" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques29 != "" && UserData.ques29 == "B" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques29 != "" && UserData.ques29 != "B" ? "(B)" : ""}
                                          </i>
                                          <p>Street</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>30</span>
                                          <label htmlFor="Name"> Sydney </label>
                                          <input type="text" name='ques30' onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques30 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques30 != "" && UserData.ques30 == "A" && "text-green-700"}
                                                `} />
                                          <i className='text-green-600 font-bold mr-2 ml-2'>
                                                {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques30 != "" && UserData.ques30 != "A" ? "(A)" : ""}
                                          </i>
                                          <p>Street</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test4-Part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-2 mb-2 text-inherit'>THE EXTINCTION OF THE DODO BIRD</h5> <br /> <br />
                              </div>
                              <h5>The dodo was a large flightless bird which used to inhabit the island of Mauritius.</h5> <br /> <br />
                              <h5>History</h5> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   1507 – Portuguese ships transporting
                                                <span className='Numbers'>31</span>
                                                <input type="text" name='ques31' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques31.match(/spices/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques31 != "" && UserData.ques31 == "spices" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques31 != "" && !UserData.ques31.match(/spices/gi) ? "(spices)" : ""}
                                                </i>
                                                stopped at the island to collect food and water.</label>

                                    </div><br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   1638 – The Dutch established a
                                                <span className='Numbers'>32</span>
                                                <input type="text" name='ques32' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques32.match(/settlement/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques32 != "" && UserData.ques32 == "settlement" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques32 != "" && !UserData.ques32.match(/settlement/gi) ? "(settlement)" : ""}
                                                </i>
                                                on the island.
                                                ●   They killed the dodo birds for their meat. <br />
                                                ●   The last one was killed in 1681 </label>
                                    </div> <br />
                                    <h5>Description</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   The only record we have is written descriptions and pictures (possibly  <br />unreliable).

                                                ●   A Dutch painting suggests the dodo was very
                                                <span className='Numbers'>33</span>
                                                <input type="text" name='ques33' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques33.match(/fat/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques33 != "" && UserData.ques33 == "fat" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques33 != "" && !UserData.ques33.match(/fat/gi) ? "(fat)" : ""}
                                                </i>
                                          </label>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   The only remaining soft tissue is a dried
                                                <span className='Numbers'>34</span>
                                                <input type="text" name='ques34' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques34.match(/head/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques34 != "" && UserData.ques34 == "head" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques34 != "" && !UserData.ques34.match(/head/gi) ? "(head)" : ""}
                                                </i>
                                                difficulty</label>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Recent studies of a dodo skeleton suggest the birds were capable of rapidy
                                                <span className='Numbers'>35</span>
                                                <input type="text" name='ques35' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques35.match(/movement/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques35 != "" && UserData.ques35 == "movement" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques35 != "" && !UserData.ques35.match(/movement/gi) ? "(movement)" : ""}
                                                </i>
                                          </label>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   It’s thought they were able to use their small wings to maintain
                                                <span className='Numbers'>36</span>
                                                <input type="text" name='ques36' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques36.match(/balance/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques36 != "" && UserData.ques36 == "balance" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques36 != "" && !UserData.ques36.match(/balance/gi) ? "(balance)" : ""}
                                                </i>
                                                in shape.</label>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Their
                                                <span className='Numbers'>37</span>
                                                <input type="text" name='ques37' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques37.match(/brain/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques37 != "" && UserData.ques37 == "brain" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques37 != "" && !UserData.ques37.match(/brain/gi) ? "(brain)" : ""}
                                                </i>
                                                was of average size.</label>

                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Their sense of
                                                <span className='Numbers'>38</span>
                                                <input type="text" name='ques38' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques38.match(/smell/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques38 != "" && UserData.ques38 == "smell" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques38 != "" && !UserData.ques38.match(/smell/gi) ? "(smell)" : ""}
                                                </i>
                                                enabled them to find food.</label>
                                    </div> <br />
                                    <h5>Reasons for extinction</h5> <br />
                                    <i>●   Hunting was probably not the main cause. <br />

                                          ●   Sailors brought dogs and monkeys.</i> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●
                                                <span className='Numbers'>39</span>
                                                <input type="text" name='ques39' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques39.match(/rats/gi) && "text-red-600"}
                                                ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques39 != "" && UserData.ques39 == "rats" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques39 != "" && !UserData.ques39.match(/rats/gi) ? "(rats)" : ""}
                                                </i>
                                                also escaped onto the island and ate the birds’ eggs.</label>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   The arrival of farming meant the
                                                <span className='Numbers'>40</span>
                                                <input type="text" name='ques40' onChange={handleValueChange}
                                                      className={`font-bold ${ListeningShowAnswer == "Cambridge-test-12" && !UserData.ques40.match(/forest/gi) && "text-red-600"}
                                                         ${ListeningShowAnswer == "Cambridge-test-12" && UserData.ques40 != "" && UserData.ques40 == "forest" && "text-green-700"}
                                                `} />
                                                <i className='text-green-600 font-bold mr-2 ml-2'>
                                                      {ListeningShowAnswer == "Cambridge-test-12" && UserData.ques40 != "" && !UserData.ques40.match(/forest/gi) ? "(forest)" : ""}
                                                </i>
                                                was destroyed.</label>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage