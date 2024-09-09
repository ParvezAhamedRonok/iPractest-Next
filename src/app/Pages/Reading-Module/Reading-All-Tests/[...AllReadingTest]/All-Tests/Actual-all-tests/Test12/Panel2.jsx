"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";

// end of importing---------->>




function Test12Panel2_Page1({ handleChange, UserData }) {
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

      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 1-7</h6> <br />
        <h6 className=''>Write True, False or Not Given.</h6> <br />      <h6 className=''><br />
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>Alexandria was a fairly unpleasant place to walk around.
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques1 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques1 != "" && UserData.ques1 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques1 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A describes Alexandria as dense, walkable, and charming, contradicting the statement that it was unpleasant to walk around."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>The US Naval Torpedo station was used to store weapons.
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques2 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques2 != "" && UserData.ques2 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques2 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B states that after its initial use, the US Naval Torpedo station was used to store munitions between wars."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>3</span>The artists enjoy sharing the 82 studios of the Torpedo Factory.
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques3 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques3 != "" && UserData.ques3 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques3 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C mentions the artists sharing studios but does not explicitly state whether they enjoy doing so."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>The layout of the Torpedo Factory is open-plan.
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques4 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques4 != "" && UserData.ques4 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques4 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D describes the layout of the Torpedo Factory as becoming more warrenlike as you ascend, suggesting it is not open-plan."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>Most of the art on display is very unusual.
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques5 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques5 != "" && UserData.ques5 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques5 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E mentions that while the art is skillfully done, it's not described as unusual."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>The photography in the Multiple Exposures Gallery is of very high quality.
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques6 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques6 != "" && UserData.ques6 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques6 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F praises the Multiple Exposures Gallery for displaying high-quality and inventive photography."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>Some of the art work is on a very large scale.
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques7 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques7 != "" && UserData.ques7 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques7 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph G describes a metal sculptor's studio with a large-scale sculpture, indicating that some art work is indeed on a very large scale."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 8-13</h6> <br />
        <h6 className=''>Write NO MORE THAN TWO WORDS for each answer.</h6> <br />
      </div>



      <div className="Question ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>
            When the second world war had finished, the US Naval Torpedo station was used as
            <input type="text" name="ques8" id="ques8" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques8.match(/storage/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques8 != "" && UserData.ques8 == "storage" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques8.match(/storage/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  storage
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "storage",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "After the Second World War ended, the US Naval Torpedo station was used primarily for storage of munitions, as described in paragraph B."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques9"><span className='numberOfQuestion'>9</span>
            A number of
            <input type="text" name="ques9" id="ques9" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques9.match(/extensive renovations/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques9 != "" && UserData.ques9 == "extensive renovations" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques9.match(/extensive renovations/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  extensive renovations
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "extensive renovations",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Over the last 25 years, a number of extensive renovations were undertaken to develop the Torpedo Factory into its current state as an arts center, as mentioned in paragraph C."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            were required over the last 25 years to make the Torpedo Factory what it is today..</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>
            The layout of the building becomes
            <input type="text" name="ques10" id="ques10" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques10.match(/more warrenlike/gi) && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques10 != "" && UserData.ques10 == "more warrenlike" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques10.match(/more warrenlike/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  more warrenlike
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 10,
                        Ans1: "",
                        mainAns: "more warrenlike",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The layout of the building becomes more warrenlike (more maze-like or intricate) as you ascend, as noted in paragraph D."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            as you get higher..</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>
            the
            <input type="text" name="ques11" id="ques11" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques11.match(/aerial/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques11 != "" && UserData.ques11 == "aerial" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques11.match(/Automaerialated/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Automaerialated
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "Automaerialated",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The aerial photograph of a field in Fujian caught the writer's attention, particularly one showcasing landscapes after a storm, as described in paragraph F."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            photograph of the Fujian field caught the writer's attention..</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>
            One artist was asking visitors for
            <input type="text" name="ques12" id="ques12" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques12.match(/help/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques12 != "" && UserData.ques12 == "help" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques12.match(/help/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  help
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "Automahelperialated",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In paragraph G, an artist at the Torpedo Factory was asking visitors for help with a Hebrew vernacular phrase, not an aerial phrase."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            with a Hebrew phrase..</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>13</span>
            The studio filled with
            <input type="text" name="ques13" id="ques13" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques13.match(/aluminium cylinders/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques13 != "" && UserData.ques13 == "aluminium cylinders" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques13.match(/aluminium cylinders/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  aluminium cylinders
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "aluminium cylinders",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The studio filled with aluminium cylinders reminded the writer of starting a long march, suggesting a metaphorical journey in the artistic process, as mentioned in paragraph G."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            reminded the writer of starting a long march..</label>
        </div>
      </div>


    </section>
  )
}

export default Test12Panel2_Page1




