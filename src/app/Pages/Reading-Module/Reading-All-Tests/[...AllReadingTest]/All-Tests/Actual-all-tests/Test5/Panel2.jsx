"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>





function Test5Panel2({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  const [valueName, setValuename] = useState("");
  const [inputValues, setinputValues] = useState("")
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

      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 1-7</h6> <br />
        <h6 className=''>Complete the sentences below.</h6> <br />
        <h6>Choose NO MORE THAN TWO WORDS and/or a NUMBER from the text for each answer.</h6>
      </div>




      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>
            Which page would you go to if you were interested in making your own films?
            <input type="text" name="ques1" id="ques1" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques1.match(/56/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques1 != "" && UserData.ques1 == "56" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques1.match(/56/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  56
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "56",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The TECHNOLOGY section features an article titled 'How to become a home-movie mogul' on page 56, which would provide information on making your own films."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>Which section has information about summer trends?
            <input type="text" name="ques2" id="ques2" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques2.match(/Living/gi) && "text-red-600"}
                     ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques2 != "" && UserData.ques2 == "Living" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques2.match(/Living/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Living
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "Living",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The LIVING section discusses topics like 'For summer fun, people are getting stuck on Velcro balls' and 'Sports sandals are the hip soles for hip souls,' which are related to summer trends."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i></label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span>Which page would you go to if you were interested in building design?
            <input type="text" name="ques3" id="ques3" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques3.match(/66/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques3 != "" && UserData.ques3 == "66" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques3.match(/66/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  66
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "66",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The DESIGN section includes an article on page 66 titled 'Mickey Mouse's firm becomes the big cheese in architecture,' which pertains to building design."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>On which page would you find a story of corruption?
            <input type="text" name="ques4" id="ques4" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques4.match(/14/gi) && "text-red-600"}
                          ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques4 != "" && UserData.ques4 == "14" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques4.match(/14/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  14
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 4,
                        Ans1: "",
                        mainAns: "14",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The BUSINESS section on page 14 discusses the collapsed B.C.C.I. and its 'black network' involved in activities such as arms sales, bribery, and kidnapping, indicating corruption."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>Which page would you go to read about people's opinions?
            <input type="text" name="ques5" id="ques5" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques5.match(/63/gi) && "text-red-600"}
                         ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques5 != "" && UserData.ques5 == "63" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques5.match(/63/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  63
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "63",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The VIEW POINTS section on page 63 is likely to contain various opinions and viewpoints on different topics."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>What is the main topic of the article on page 57?
            <input type="text" name="ques6" id="ques6" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques6.match(/Hollywood/gi) && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques6 != "" && UserData.ques6 == "Hollywood" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques6.match(/Hollywood/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Hollywood
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "Hollywood",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The TELEVISION section on page 57 features an article titled From Britain, a caustic look at Hollywood, indicating that Hollywood is the main topic."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>What is the main problem between the 'Browns' and the 'Blacks'?
            <input type="text" name="ques7" id="ques7" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques7.match(/employment opportunities/gi) && "text-red-600"}
                      ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques7 != "" && UserData.ques7 == "employment opportunities" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques7.match(/employment opportunities/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  employment opportunities
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 7,
                        Ans1: "",
                        mainAns: "employment opportunities",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The NATION section has an article titled Browns vs. Blacks which discusses the clash between the two biggest minority groups over employment opportunities, highlighting this as the main issue."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 8-14</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?</h6> <br />
        <h6 className=''>
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>Robert Heinlein's radio programme includes the achievements of a spaceman
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques8 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques8 != "" && UserData.ques8 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques8 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The schedule for Short Stories by Robert Heinlein - Ordeal in Space at 18:30-19:00 states it delves into the psyche of a traumatized spaceman, but it does not mention the achievements of the spaceman."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"> <span className='numberOfQuestion'>9</span>'Beyond our Ken' is basically about how we relate to other people.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques9 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques9 != "" && UserData.ques9 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques9 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The programme Beyond Our Ken at 19:00-19:30 is described as featuring Kenneth Horne's freedom of Gigglesway and 'Hornerama' probes love and marriage, which does not specifically indicate it is about how we relate to other people in general."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>At 19:30, Roger's boss may have bad news for him.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques10 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques10 != "" && UserData.ques10 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques10 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Brothers in Law - Tell 'Em the Tale at 19:30-20:00 mentions that lawyer Roger is worried in case the news from his boss is bad."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>'Crossing the Glacier' is about two women helping each other survive a cold journey
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques11 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques11 != "" && UserData.ques11 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques11 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Crossing the Glacier at 21:15-21:30 is about two emotionally frozen women getting to know and help each other, not about surviving a cold journey."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>The programme at 21:30 is the last episode.
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques12 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques12 != "" && UserData.ques12 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques12 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Mr Finchley Goes to Paris Episode 5 at 21:30-22:00 is episode 5 out of 6, indicating it is not the last episode."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>You can listen to the voice of Richard Johnson at 22:30
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques13 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques13 != "" && UserData.ques13 == "TRUE" && "text-green-700"}
               `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques13 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Bleak Expectations Series 1, A Young Love Mercilessly Dismembered at 22:30-23:00 features Richard Johnson."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>At 23:30, you can listen to the first episodes of'Four Sad Faces'.
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques14 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques14 != "" && UserData.ques14 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques14 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Four Sad Faces Episode 2 at 23:30-00:00 is described as episode 2 out of 2, indicating it is not the first episode."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>




      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 15-20</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?</h6> <br />
        <h6 className=''>Do the following </h6><br />
      </div>


      <div className="Question ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>15</span>
            NBC and Monogram Studios are the only two TV networks that provide a
            <input type="text" name="ques15" id="ques15" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques15.match(/guided tour/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques15 != "" && UserData.ques15 == "guided tour" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques15.match(/guided tour/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  guided tour
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 15,
                        Ans1: "",
                        mainAns: "guided tour",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In paragraph A, it states that NBC Studios in Burbank and KCET (Monogram Studios) are the only places that offer guided tours of their TV operations: AABC TV doesn't offer a guided tour of their studio. Neither does CBS, nor even Fox. In fact, if you want to see the inside of a TV studio, your only other choice is over at KCET - the local public television (PBS) station, Channel 28, which offers a free guided tour of its historic Monogram Studios."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>16</span>
            A guided tour at Universal Studios costs
            <input type="text" name="ques16" id="ques16" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques16 != "$36" && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques16 != "" && UserData.ques16 == "$36" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && UserData.ques16 != "$36"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  $36
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 16,
                        Ans1: "",
                        mainAns: "$36",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph B compares the costs of different studio tours: NBC's $7.50 admission charge seems like a bargain compared with the $36 charged by Universal Studios or the $30 charged by nearby Warner Brothers."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>17</span>
            <input type="text" name="ques17" id="ques17" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques17.match(/the NBC/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques17 != "" && UserData.ques17 == "the NBC" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques17.match(/the NBC/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  the NBC
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 17,
                        Ans1: "",
                        mainAns: "the NBC",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph C describes the duration of the NBC tour: It's just a 70-minute, indoor walking tour, offering a down-to-earth view of a working television studio."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>tour takes 70 minutes..</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>
            During the tour you will see the car park used by the
            <input type="text" name="ques18" id="ques18" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques18.match(/celebrities/gi) && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques18 != "" && UserData.ques18 == "celebrities" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques18.match(/celebrities/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  celebrities
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 18,
                        Ans1: "",
                        mainAns: "celebrities",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Paragraph D mentions the car park: The tour leads you through the studio's labyrinth of hallways, past the makeup department, through the Peacock Store, and out into the parking lot where Jay Leno and other celebrities park their cars."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>19</span>
            Since 1994 the Tonight Show has been produced in
            <input type="text" name="ques19" id="ques19" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques19.match(/Studio three/gi) && "text-red-600"}
                     ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques19 != "" && UserData.ques19 == "Studio three" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques19.match(/Studio three/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Studio three
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "",
                        mainAns: "Studio three",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Paragraph E provides this information: Then it's up to Studio Three, the set where the 'Tonight Show' is taped. (Jay Leno moved the show to this building in 1994, from the historic Studio One where Johnny Carson taped his shows.)"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span>
            Visitors can only see several
            <input type="text" name="ques20" id="ques20" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques20.match(/display cases/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques20 != "" && UserData.ques20 == "display cases" && "text-green-700"}
             `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques20.match(/display cases/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  display cases
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "display cases",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F explains this critique: Tour guests don't get to see the actual makeup or special-effects departments in action, instead they are merely shown simple display cases filled with related props."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            rather than seeing inside actual departments. .</label>
        </div>
      </div>
    </section>
  )
}

export default Test5Panel2
