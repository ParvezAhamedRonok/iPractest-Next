"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test7Panel2({ handleChange, UserData }) {
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
        <h6 className=''>Questions 1-6</h6> <br />
        <h6 className=''>RIn which paragraph contains</h6> <br />
      </div>


      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"> <span className='numberOfQuestion'>1</span>The nationality of the largest group of visitors to Vietnam.
            <select name="ques1" id="ques1" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques1 != "B" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques1 != "" && UserData.ques1 == "B" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques1 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B mentions that Chinese visitors head the table of visitors to Vietnam, indicating that the largest group of visitors to Vietnam is Chinese."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"> <span className='numberOfQuestion'>2</span> A summary of three changes in the travel industry.
            <select name="ques2" id="ques2" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques2 != "A" && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques2 != "" && UserData.ques2 == "A" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques2 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph A summarizes three changes: the advent of cheap air travel and package tours in the 1960s, the impact of the internet on booking travel, and the current shift driven by emerging economies in both destination choices and as sources of tourists."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3"> <span className='numberOfQuestion'>3</span>An increase in the spending power of some economies.
            <select name="ques3" id="ques3" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques3 != "E" && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques3 != "" && UserData.ques3 == "E" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques3 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E discusses the increase in spending power in emerging economies, noting that nearly a billion people will see their incomes rise beyond a threshold where they can spend more on discretionary goods and services, including travel."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4"> <span className='numberOfQuestion'>4</span>The countries where new tourists are coming from.
            <select name="ques4" id="ques4" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques4 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques4 != "" && UserData.ques4 == "B" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques4 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph B mentions that fast-growing emerging economies like the BRICs (Brazil, Russia, India, China) and others such as South Korea and Vietnam are changing the world of travel, either as destinations or as sources of newly affluent travelers."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques5"> <span className='numberOfQuestion'>5</span>A pessimistic outlook for established markets.
            <select name="ques5" id="ques5" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques5 != "D" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques5 != "" && UserData.ques5 == "D" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques5 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D provides a pessimistic outlook for established markets like the United States, where concerns over the economy, rising fuel costs, and a weak dollar are affecting travel spending and booking trends."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"> <span className='numberOfQuestion'>6</span>Complexities in measuring the size of the travel industry.
            <select name="ques6" id="ques6" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques6 != "C" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques6 != "" && UserData.ques6 == "C" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques6 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C discusses the complexities in measuring the size of the travel industry, noting challenges in accurately assessing economic activity due to the inclusion of various sectors like airlines and restaurants that cater to both tourists and locals."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 7-13</h6> <br />
        <h6 className=''>Choose True, False or Not Given.</h6> <br />
        <h6 className=''><br />
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>Most of Orbitz customers do not travel abroad.
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques7 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques7 != "" && UserData.ques7 == "TRUE" && "text-green-700"}
           
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques7 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph D mentions that the majority of Orbitz's business is domestic bookings, which were 6% lower in the first quarter compared to the previous year. This implies that most of their customers are booking domestic travel, supporting the statement."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>Next year a billion people will receive $5000 more income per year.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques8 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques8 != "" && UserData.ques8 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques8 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E discusses that by the middle of the next decade, nearly a billion people will see their annual household incomes rise beyond $5,000, which is the threshold for spending on discretionary goods. However, it does not specify that this increase will happen within the next year, making the statement false."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"> <span className='numberOfQuestion'>9</span>Bill Marriot plans to build more hotels in China than in the Middle East.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques9 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques9 != "" && UserData.ques9 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques9 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This statement is not directly mentioned in the provided passages. While Bill Marriott is mentioned in paragraph F discussing the expansion in the Middle East, there is no comparison made to his plans for China. so answer is not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>The number of overseas visits by the Chinese was 5m more last year than the year before.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques10 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques10 != "" && UserData.ques10 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques10 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " The exact increase of 5 million visits by the Chinese is not specified in the passages provided. Paragraph G mentions the increase in Chinese visits abroad but does not give a specific comparison to the previous year. so answer is not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>In the next decade, travel and tourism in China is forecasted to become four times larger than it is today.
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques11 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques11 != "" && UserData.ques11 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques11 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph G discusses the WTTC forecast that Chinese demand for travel and tourism will quadruple in value in the next ten years, indicating that the industry is projected to become four times larger than it is currently."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span> AeroMexico will start direct flights to Vietnam within the next two years.
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques12 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques12 != "" && UserData.ques12 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques12 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " There is no mention of AeroMexico starting direct flights to Vietnam within the next two years in the provided passages. Paragraph H mentions AeroMexico starting direct flights between Mexico City and Shanghai, but there's no specific mention of flights to Vietnam. so , not given is answer"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>Thailand expects to see 10% more visitors this year than last year.
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques13 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques13 != "" && UserData.ques13 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques13 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "There is no specific mention of Thailand expecting a 10% increase in visitors in the provided passages. Paragraph H discusses expectations of more Chinese visitors to Thailand this year but does not give a percentage increase. so , not given is answer"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


      </div>




      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 14-18</h6> <br />
        <h6 className=''>Choose the correct letter, A, B or C.</h6> <br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='mb-3'>
          <label htmlFor="ques14"><span className='numberOfQuestion mr-1 mb-2'>14</span> 'The main purpose of introducing RFID is
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques14 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "Radio-Frequency Identification",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Certainly! The main purpose of introducing RFID (Radio-Frequency Identification) technology in the context of baggage handling, as discussed in the passage, is to reduce the number of lost bags. Paragraph B explains that currently, about 0.7% of the 1.5 billion bags carried on commercial flights each year go astray. This issue not only inconveniences passengers but also costs airlines significantly—around $1 billion annually industry-wide. The problem largely stems from the limitations of traditional printed bar-code labels, which can be misread by baggage handling machines, resulting in misplaced bags. In contrast, RFID tags offer higher accuracy rates, exceeding 95%, which significantly reduces the likelihood of bags being lost. Therefore, the adoption of RFID technology is primarily aimed at improving baggage handling efficiency and minimizing the incidence of lost luggage, benefiting both airlines and passengers alike."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques14' />
              to baggage handling much quicker.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques14' />
              reduce the number of bags which are lost.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques14' />
              reduce the cost of handling bags.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques15"><span className='numberOfQuestion mr-1 mb-2'>15</span> One of the main problems with bar-codes on labels is that
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques15 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "Radio-Frequency Identification",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B discusses the issue with bar-codes on labels in the context of baggage handling. It explains that one of the main problems with bar-codes is their tendency to be misread by the machines that process baggage. Specifically, crumpled or torn bar-code labels can result in accuracy rates as low as 80%. This means that a significant proportion of bar-coded bags are not correctly read by the automated systems as they travel between passengers and planes. As a result, this unreliability contributes to the problem of lost baggage, as the mishandling of bar-coded labels can lead to bags being misplaced or sent to the wrong destination. Therefore, the main problem highlighted in the paragraph regarding bar-codes on labels is their inconsistent readability, which significantly impacts the efficiency of baggage handling operations."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques15' />
              they get damaged between plane and passenger.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques15' />
              they cannot be correctly read often enough.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques15' />
              they get damaged by the machines designed to read them.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques16"><span className='numberOfQuestion mr-1 mb-2'>16</span>The more expensive tags are particularly advantageous
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques16 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "Radio-Frequency Identification",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C discusses the advantage of more expensive RFID tags when bags move between different airlines. It explains that while RFID tags can be beneficial in reducing lost baggage overall due to their higher accuracy rates, there are complexities involved when multiple airlines are involved in handling the same bag. The association between the RFID tag and the passenger's information is stored in the airline's database. Therefore, when a bag with an RFID tag moves through different airlines or airports, it requires real-time access to these databases to determine how to route the bag correctly. ** In contrast, the more expensive RFID tags allow data, including passenger and routing details, to be written into the tag itself at the time of check-in. This means that the information travels with the bag throughout its journey, eliminating the need for continuous database look-ups across different airline systems. This approach is particularly advantageous in situations where bags need to transfer seamlessly between airlines without relying on immediate access to each airline's database. Thus, the paragraph highlights that the more expensive RFID tags offer operational advantages in scenarios involving inter-airline baggage transfers."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques16' />
              when bags move between different airlines.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques16' />
              when real-time connections are slow.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques16' />
              because they reduce check in time
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques17"><span className='numberOfQuestion mr-1 mb-2'>17</span> If the IATA's standards are introduced
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques17 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "Radio-Frequency Identification",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "If the International Air Transport Association (IATA)'s standards for RFID tags are introduced, more airlines are likely to join the scheme. The IATA aims to establish standards that promote the adoption of RFID technology across the airline industry. These standards would ensure interoperability between different airlines and airports, making it easier for airlines to implement RFID systems without compatibility issues. This approach could lead to broader industry adoption as more airlines see the benefits of reducing lost baggage incidents and improving operational efficiency through RFID technology."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques17' />
              airlines will find it easier to be competitive on the ground.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques17' />
              many airlines will still prefer not to use RFID tags.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques17' />
              more airlines will join the scheme.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques18"><span className='numberOfQuestion mr-1 mb-2'>18</span>Atlantic's V:port
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques18 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "Radio-Frequency Identification",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Virgin Atlantic's V entertainment system enhances Virgin's image by offering extensive in-flight entertainment options, including 300 hours of on-demand movies and TV shows, music-on-demand, and interactive games. This system is designed not only to entertain passengers but also to associate Virgin with innovation and fun. By providing such advanced entertainment options, Virgin positions itself as a leader in delivering exceptional in-flight experiences, thereby enhancing its brand reputation and customer loyalty. The paragraph highlighting this information is from section E of the passage you provided."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques18' />
              relies on a hard drive in every passenger's seat.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques18' />
              games all have multi-user support
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques18' />
              help Virgin's image.
            </label>
            </div>
          </div>
        </div>


      </div>







      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 19 - 26</h6> <br />
        <h6 className=''>Complete the summary with NO MORE THAN TWO WORDS from the text.</h6> <br />
      </div>


      <div className="Question ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>19</span>
            The
            <input type="text" name="ques19" id="ques19" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques19.match(/availability/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques19 != "" && UserData.ques19 == "availability" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques19.match(/availability/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  availability
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "",
                        mainAns: "availability",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F (In-flight Internet Access): The passage discusses the growing availability of in-flight internet access on long-haul routes, indicating that several airlines have started offering this service."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of in- flight internet access is growing and several airlines.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span>
            have already started to offer it on their
            <input type="text" name="ques20" id="ques20" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques20.match(/Long haul/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques20 != "" && UserData.ques20 == "Long haul" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques20.match(/Long haul/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Long haul
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "Long haul",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F (Lufthansa Deployment): Lufthansa is specifically mentioned as the first airline to deploy in-flight internet access on long-haul flights, supporting the statement that airlines have started offering this technology."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            routes.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>
            Passengers will be expected to pay around $25 for access, depending on the
            <input type="text" name="ques21" id="ques21" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques21.match(/duration/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques21 != "" && UserData.ques21 == "duration" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques21.match(/duration/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  duration
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 21,
                        Ans1: "",
                        mainAns: "duration",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F (Pricing Structure): The passage mentions that passengers are expected to pay around $25 for in-flight internet access, with prices varying depending on the flight duration."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of the flight..</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span>
            Having this
            <input type="text" name="ques22" id="ques22" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques22.match(/technology/gi) && "text-red-600"}
                   ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques22 != "" && UserData.ques22 == "technology" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques22.match(/technology/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  technology
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "technology",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F (Mobile Phones Use): It's noted that having in-flight internet access does not automatically allow for the use of mobile phones due to potential disruption issues."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            on board will also allow the use of mobile phones,.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>23</span>
            which do not in fact cause problems with the
            <input type="text" name="ques23" id="ques23" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques23.match(/avionic systems/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques23 != "" && UserData.ques23 == "aavionic systems" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques23.match(/avionic systems/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  avionic systems
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 23,
                        Ans1: "",
                        mainAns: "avionic systems",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F (Avionic Systems): The passage clarifies that mobile phones on planes do not typically interfere with avionic systems, contrary to common belief."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques24"><span className='numberOfQuestion'>24</span>
            The problem, it seems, with mobiles which are not
            <input type="text" name="ques24" id="ques24" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques24.match(/switched/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques24 != "" && UserData.ques24 == "switched" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques24.match(/switched/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  switched
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "switched",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Not directly addressed in the provided passage: This statement cannot be confirmed with the given information."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>25</span>
            off is that they disturb the
            <input type="text" name="ques25" id="ques25" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques25.match(/Networks/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques25 != "" && UserData.ques25 == "Networks" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques25.match(/Networks/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Networks
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "Networks",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F (Disruption of Networks): The passage explains how airborne mobile phones left on can disrupt mobile networks on the ground by rapidly switching between base stations as the aircraft moves."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            below.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span>
            Even when the technology is fully in place, OnAir predict that frequent fliers may prefer
            <input type="text" name="ques26" id="ques26" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques26.match(/more discreet/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques26 != "" && UserData.ques26 == "more discreet" && "text-green-700"}
             `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques26.match(/more discreet/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  more discreet
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "more discreet",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph H (Frequent Fliers' Communication Preferences): According to OnAir's research discussed in Paragraph H, frequent fliers may prefer more discreet forms of communication like internet access and text messaging over voice calls."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            forms of communication than voice calls..</label>
        </div>
      </div>
    </section>
  )
}

export default Test7Panel2




