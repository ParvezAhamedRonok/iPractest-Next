"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test6Panel2({ handleChange, UserData }) {
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
        <h6>Choose NO MORE THAN TWO WORDS and/or a NUMBER from the text for each answer.</h6> <br />
      </div>




      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>
            As soon as you can you should begin a
            <input type="text" name="ques1" id="ques1" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques1.match(/regime/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques1 != "" && UserData.ques1 == "regime" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques1.match(/regime/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  regime
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "regime",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The word regime fits into the sentence structure and refers to the recommended foot-care routine mentioned in the text."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of foot-care..</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>The Nail Brightening System is for nails which have lost their shine or become
            <input type="text" name="ques2" id="ques2" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques2.match(/discoloured/gi) && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques2 != "" && UserData.ques2 == "discoloured" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques2.match(/discoloured/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  discoloured
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "discoloured",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer directly matches the description in the text regarding the purpose of the Nail Brightening System"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i></label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span>In summer, you can keep your feet cooler by using
            <input type="text" name="ques3" id="ques3" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques3.match(/leather lining/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques3 != "" && UserData.ques3 == "leather lining" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques3.match(/leather lining/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  leather lining
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "leather lining",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer comes from the advice in the text about choosing shoes with leather lining to help absorb perspiration and keep feet cooler in summer."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>Your heals are more likely to crack if you wear
            <input type="text" name="ques4" id="ques4" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques4.match(/open backed/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques4 != "" && UserData.ques4 == "open backed" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques4.match(/open backed/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  open backed
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 4,
                        Ans1: "",
                        mainAns: "open backed",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer reflects the warning in the text that open-backed shoes can lead to cracked heels due to lack of support and protection."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>shoes.
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>You should start cutting your toenails regularly shortly before
            <input type="text" name="ques5" id="ques5" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques5.match(/your holiday/gi) && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques5 != "" && UserData.ques5 == "your holiday" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques5.match(/your holiday/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  your holiday
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "your holiday",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer corresponds to the advice in the text to begin a regular toenail trimming routine before going on holiday."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>In winter, you can stop bacteria building up by wearing socks made of
            <input type="text" name="ques6" id="ques6" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques6.match(/natural materials/gi) && "text-red-600"}
                       ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques6 != "" && UserData.ques6 == "natural materials" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques6.match(/natural materials/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  natural materials
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "natural materials",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer is based on the recommendation in the text to wear socks made of natural materials in winter to prevent bacterial growth due to moisture build-up."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>There is a risk o
            <input type="text" name="ques7" id="ques7" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques7.match(/chilblains/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques7 != "" && UserData.ques7 == "chilblains" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques7.match(/chilblains/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  chilblains
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 7,
                        Ans1: "",
                        mainAns: "chilblains",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer reflects the caution mentioned in the text about the risk of developing chilblains if feet are warmed up too quickly, causing discomfort and swelling."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>developing if you warm up your feet too quickly.
          </label>
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 8-14</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?</h6> <br />
        <h6 className=''><br />
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>You should not do any weightlifting if you have heart disease.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques8 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques8 != "" && UserData.ques8 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques8 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B suggests modifying or avoiding weightlifting if you have certain conditions like heart disease, but it doesn't outright forbid weightlifting for everyone with heart disease."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"> <span className='numberOfQuestion'>9</span>'If you are tired it is better to skip your gym session.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques9 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques9 != "" && UserData.ques9 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques9 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This advice is inferred from paragraph C, which emphasizes not working out when tired to avoid worsening your condition or causing injury."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>Stretching your muscles can increase your heart rate
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques10 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques10 != "" && UserData.ques10 == "NOT GIVEN" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques10 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "There is no specific mention in the passage about stretching increasing heart rate, so this statement cannot be confirmed as true or false."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>Gentle walking is an adequate warm-up activity for some people
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques11 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques11 != "" && UserData.ques11 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques11 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D emphasizes light cardiovascular activities like jogging or jumping jacks as part of a warm-up, not just gentle walking."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>You should wear a belt when lifting heavy weights
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques12 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques12 != "" && UserData.ques12 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques12 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This is mentioned in paragraph G, which advises using a weight belt for support during heavy lifts to protect the lumbar region."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>When using the stepping machine use the hand rails to help you as much as you like
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques13 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques13 != "" && UserData.ques13 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques13 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E advises against leaning heavily on stair-stepper rails to prevent wrist and back injuries, suggesting proper posture instead."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>It's a good idea to clean your hands between exercises.
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques14 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques14 != "" && UserData.ques14 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques14 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "There is no specific mention in the passage about cleaning hands between exercises, so this statement cannot be confirmed as true or false."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>




      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 15-21</h6> <br />
        <h6 className=''>The text contains nine sections, A - I</h6> <br />
        <h6 className=''>Which section contains the following information?</h6><br />
      </div>


      <div className="Question ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>15</span>
            a trend aimed at strengthening back muscles
            <input type="text" name="ques15" id="ques15" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques15 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques15 != "" && UserData.ques15 == "E" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques15 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 15,
                        Ans1: "",
                        mainAns: "E",
                        hiddenWord: "paragraph E",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This section discusses using proper lifting form, which is important for strengthening muscles, including the back."
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
            a trend involving a combination of diet and exercise
            <input type="text" name="ques16" id="ques16" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques16 != "F" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques16 != "" && UserData.ques16 == "F" && "text-green-700"}
           
             `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques16 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 16,
                        Ans1: "",
                        mainAns: "F",
                        hiddenWord: "paragraph F",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This section emphasizes the importance of drinking water during workouts and paying attention to bodily signals, which are integral parts of combining diet and exercise for overall health."
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
            a trend requiring more certified trainers
            <input type="text" name="ques17" id="ques17" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques17 != "D" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques17 != "" && UserData.ques17 == "D" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques17 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 17,
                        Ans1: "",
                        mainAns: "D",
                        hiddenWord: "paragraph D",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This section discusses the importance of proper warm-ups and controlled exercises, implying the need for knowledgeable trainers to guide individuals in these practices."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>
            a trend which should be a part of all fitness programmes
            <input type="text" name="ques18" id="ques18" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques18 != "B" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
           
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques18 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 18,
                        Ans1: "",
                        mainAns: "B",
                        hiddenWord: "paragraph B",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This section emphasizes the need to check your fitness before starting any strength-training program, which is crucial for ensuring safety and effectiveness in all fitness programs."
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
            a trend aimed at helping people undergoing care
            <input type="text" name="ques19" id="ques19" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques19 != "I" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques19 != "" && UserData.ques19 == "I" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques19 != "I"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  I
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "",
                        mainAns: "I",
                        hiddenWord: "paragraph I",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This section talks about discontinuing fitness activity if experiencing certain symptoms, which is aimed at helping individuals undergoing care by preventing exacerbation of health issues."
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
            a problem which is increasing quickly
            <input type="text" name="ques20" id="ques20" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques20 != "C" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques20 != "" && UserData.ques20 == "C" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques20 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "C",
                        hiddenWord: "paragraph C",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This section mentions the importance of not exercising when tired or ill, which could lead to worsening health conditions, suggesting a problem that could be escalating in relevance."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>
            a trend aimed at helping people carry out their normal activities
            <input type="text" name="ques21" id="ques21" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques21 != "H" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques21 != "" && UserData.ques21 == "H" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques21 != "H"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  H
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 21,
                        Ans1: "",
                        mainAns: "H",
                        hiddenWord: "paragraph H",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This section discusses using gym equipment safely and cleaning hands to reduce the risk of spreading viruses, which helps individuals maintain health and continue their daily activities."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
      </div>
    </section>
  )
}

export default Test6Panel2




