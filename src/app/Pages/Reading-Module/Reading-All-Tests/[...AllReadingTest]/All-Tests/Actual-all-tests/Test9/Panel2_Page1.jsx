"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test9Panel2_Page2({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  // let testItems = localStorage.getItem("ShowAnsByTest");

  return (
    <section className='Panel2Section p-3 sm:p-5 mb-[50px]'>
      <div className='Panel2Section'>
        <div className="palne2_div1 ml-2">
          <h1>Section-1</h1>
        </div>

        <div className="palne2_div2 p-2">
          {/* show & hide the nodepan by cliking those icons    */}
          {showNotePad && (<textarea name="textarea" id="textarea" cols="70" rows="4"></textarea>)}
          <div className="btn " onClick={() => { setShowNotePad(!showNotePad) }}>
            {showNotePad ? <button className="  main-btn ml-30"> <i><GiNotebook /></i> Hide Notepad</button> : <button className="main-btn ml-30"> <i><GiNotebook /></i> Show Notepad</button>}
          </div>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 1 - 7</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the bellow</h6>
        <h6>TRUE - if the statement agrees with the information </h6>
        <h6>FALSE - if the statement contradicts the information </h6>
        <h6>NOT GIVEN - if there i</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>If you combine your flight and holiday booking, you do not need to stay on a Saturday night.
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques1 != "TRUE" && "text-red-600"}
              {ReadingShowAnswer == "Actual-Test-9" && UserData.ques1 != "ix" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques1 != "" && UserData.ques1 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques1 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Saturday-night stay requirements",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The first paragraph states, 'avoid Saturday-night stay requirements' when you book your flights as part of your vacation package."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>To arrive at Keystone from DEN you can take the Interstate 70.
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques2 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques2 != "" && UserData.ques2 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques2 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Saturday-night stay requirements",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The second paragraph mentions that Denver International Airport (DEN) is 90 miles east of Keystone via Interstate 70."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span>Indirect flights are available to EGE from Miami..
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques3 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques3 != "" && UserData.ques3 == "NOT GIVEN" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques3 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Saturday-night stay requirements",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The third paragraph lists direct flights to Vail/Eagle County Airport (EGE) from several cities, but Miami is not mentioned, nor is there information about indirect flights. so, answer is not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>Colorado Springs Municipal Airport is closer to Keystone than DEN is.
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques4 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques4 != "" && UserData.ques4 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques4 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Saturday-night stay requirements",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The third paragraph indicates that Colorado Springs Municipal Airport is 109 miles from Keystone, whereas Denver International Airport (DEN) is 90 miles east of Keystone."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>CME Premier is the most expensive CME service.
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques5 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques5 != "" && UserData.ques5 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques5 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Saturday-night stay requirements",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The fifth paragraph mentions CME Premier as a private chauffeured travel option, but there is no comparison of prices to determine if it is the most expensive service. so, it will be not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>CME shuttle service is not available 24 hours a day..
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques6 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques6 != "" && UserData.ques6 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques6 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Saturday-night stay requirements",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The sixth and seventh paragraphs state that shuttle service is not available for flights arriving at the airport later than 8:30pm or departing earlier than 10:00am."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>he CME private shuttle and CME scheduled service have the same timetable..
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques7 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques7 != "" && UserData.ques7 == "NOT GIVEN" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques7 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Saturday-night stay requirements",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage provides details about the schedules of CME shuttle services but does not specify if the private and scheduled services follow the same timetable."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
      </div>








      <div className='articles pl-[10px] sm:pl-[25px] mb-3 mt-3'>
        <h6 className=''>Questions 8 - 14</h6> <br />
        <h6 className=''>Complete the sentences below.</h6>
        <h6>Choose NO MORE THAN THREE WORDS and/or a NUMBER from the text for each answer.</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>Check on the website before going so as not to be disappointed by such things as.
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques8.match(/height restrictions/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques8 != "" && UserData.ques8 == "height restrictions" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques8.match(/height restrictions/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  height restrictions
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "height restrictions",
                        hiddenWord: "Saturday-night stay requirements",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The first paragraph under Theme Parks advises, Many of the rides have height restrictions, so to avoid disappointment, check details on the relevant website before you set off."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques9"><span className='numberOfQuestion'>9</span>Alton Towers is Britain's only
            <input type="text" name="ques9" id="ques9" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques9.match(/disney/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques9 != "" && UserData.ques9 == "disney" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques9.match(/disney/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  disney
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "disney",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The paragraph about Alton Towers states, This is Britain's only proper theme park resort in the Disney mould."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            style theme park.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>New at Alton Towers is a play area called
            <input type="text" name="ques10" id="ques10" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques10.match(/Cloud Cuckoo Land/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques10 != "" && UserData.ques10 == "Cloud Cuckoo Land" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques10.match(/Cloud Cuckoo Land/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Cloud Cuckoo Land
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 10,
                        Ans1: "",
                        mainAns: "Cloud Cuckoo Land",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The What's new? section under Alton Towers mentions, Also new is Cloud Cuckoo Land, which includes an impressive indoor soft play area and a rather average musical show."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>If you don't mind getting wet at Alton Towers, try the game
            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques11.match(/Battle Galleons/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques11 != "" && UserData.ques11 == "Battle Galleons" && "text-green-700"}
               `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques11.match(/Battle Galleons/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Battle Galleons
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "Battle Galleons",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The Thumbs up section under Alton Towers notes, And if you are prepared to get absolutely soaked, Battle Galleons (basically a water pistol fight on a grand scale) is great fun."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>One of the negatives is the
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques12.match(/high cost/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques12 != "" && UserData.ques12 == "high cost" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques12.match(/high cost/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  high cost
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "high cost",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The Thumbs down section under Alton Towers states, Given the high cost of admission, there are too many funfair stalls charging several pounds a go."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of getting in.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>If you want to get on some of the big rides early, try booking.
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques13.match(/in advance/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques13 != "" && UserData.ques13 == "in advance" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques13.match(/in advance/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  in advance
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "in advance",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The Tips section under Alton Towers suggests, Buy tickets in advance at www.altontowers.com Not only are they cheaper, but (new this year), you get access to some major rides an hour before the regular opening time."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>Perhaps the quiet garden area is a good place to have
            <input type="text" name="ques14" id="ques14" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques14.match(/a picnic/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques14 != "" && UserData.ques14 == "a picnic" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques14.match(/a picnic/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  a picnic
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 14,
                        Ans1: "",
                        mainAns: "a picnic",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The Best picnic spots section under Alton Towers recommends, either on the lawns in front of the mansion, or in the tranquil landscaped gardens."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-3 mt-3'>
        <h6 className=''>Questions 15 - 20</h6> <br />
        <h6 className=''>The text has six section</h6>
        <h6>Which section contains the following information?</h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques15"> <span className='numberOfQuestion'>15</span>where  to  see  the  top  entries  in  each  group.
            <input type="text" name="ques15" id="ques15" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques15 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques15 != "" && UserData.ques15 == "E" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && UserData.ques15 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 15,
                        Ans1: "",
                        mainAns: "E",
                        hiddenWord: "Paragraph: E",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph: E. Veolia Photographer of the Year ** You can see the top entries from the Veolia Wildlife Photographer of the Year competition at the Natural History Museum in London. The exhibition showcases a stunning collection of images capturing various animal habitats, from underwater scenes to urban wildlife. It's a comprehensive display of the best wildlife photography from around the world."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>where  to  see some  impressive  metal objects
            <input type="text" name="ques16" id="ques16" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques16 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques16 != "" && UserData.ques16 == "A" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && UserData.ques16 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 16,
                        Ans1: "",
                        mainAns: "A",
                        hiddenWord: "Paragraph: A",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph: A. Anish Kapoor: Turning the World Upside Down **To see impressive metal objects, visit the exhibition of Anish Kapoor's work in Kensington Gardens. Kapoor's sculptures, made of stainless steel and mirrored surfaces, are notable for their imposing presence and reflective qualities. This outdoor exhibition allows visitors to interact with the sculptures in the lush surroundings of the Royal Park."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            style theme park.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>where to see an unusual floor surface
            <input type="text" name="ques17" id="ques17" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques17 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques17 != "" && UserData.ques17 == "F" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && UserData.ques17 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 17,
                        Ans1: "",
                        mainAns: "F",
                        hiddenWord: "Paragraph: F",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph: F. The Unilever Series: Ai Weiwei ** TFor an unusual floor surface, head to Tate Modern's Turbine Hall where Ai Weiwei's installation is on display. The installation, featuring over 100 million porcelain sunflower seeds spread across the floor, creates a visually striking and unique experience for visitors exploring the hall."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>where to see historical objects related to life after death
            <input type="text" name="ques18" id="ques18" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques18 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques18 != "" && UserData.ques18 == "C" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && UserData.ques18 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 18,
                        Ans1: "",
                        mainAns: "C",
                        hiddenWord: "Paragraph: C",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph: F. Journey Through the Afterlife: Ancient Egyptian Book of the Dead ** To view historical objects related to ancient Egyptian beliefs about the afterlife, visit the British Museum. The exhibition Journey Through the Afterlife: Ancient Egyptian Book of the Dead displays artifacts and documents dating back 3,500 years, including spells, images, and rituals that were essential in preparing the deceased for the afterlife."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques19"><span className='numberOfQuestion'>19</span>where  to  see  artwork which has been  absent   from  London  for  some  time
            <input type="text" name="ques19" id="ques19" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques19 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques19 != "" && UserData.ques19 == "B" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && UserData.ques19 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "",
                        mainAns: "B",
                        hiddenWord: "Paragraph: B",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph: B.  Pioneering Painters: The Glasgow Boys 1880-1900 ** To see artwork that hasn't been displayed in London for over 40 years, visit the exhibition on the Glasgow Boys at a location not specified in the provided text. This group of painters made waves in the late 19th-century art world with their experimental and ambitious work, making this exhibition a rare opportunity to view their pieces in London once again."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of getting in.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span>where to see a wide range of animal habitats
            <input type="text" name="ques20" id="ques20" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques20 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques20 != "" && UserData.ques20 == "E" && "text-green-700"}
             
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-9" && UserData.ques20 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "E",
                        hiddenWord: "Paragraph: E",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph: E. Veolia Photographer of the Year ** At the Natural History Museum, you can explore a wide range of animal habitats through the Wildlife Photographer of the Year exhibition. This includes diverse photographs capturing various aspects of the natural world, from landscapes to close-up shots of animals in their habitats."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

      </div>

    </section>
  )
}

export default Test9Panel2_Page2



