"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test8Panel2({ handleChange, UserData }) {
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
        <h6 className=''>Questions 1-8</h6> <br />
        <h6 className=''>Match each heading to the most suitable paragraph.</h6> <br />
        <h6 className='mt- mb-3 '>
          i, Starting point for young scientists<br /><br />
          ii, Fuel or food?<br /><br />
          iii, Change in focus of research<br /><br />
          iv, Problems with the current infrastructure<br /><br />
          v, The future role of electricity<br /><br />
          vi, Employment opportunities look bright<br /><br />
          vii, A low-pollution solution<br /><br />
          viii, The need for new infrastructure<br /><br />
          ix, Past and present influences on transportation<br />
        </h6>
      </div>


      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"> <span className='numberOfQuestion'>1</span>Paragraph A
            <select name="ques1" id="ques1" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques1 != "ix" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques1 != "" && UserData.ques1 == "ix" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
              <option value="ix">ix</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques1 != "ix"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ix
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "ix",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A discusses how society has historically been shaped by various modes of transport and how current transport systems are being influenced by the threat of climate change. This aligns with the idea of past and present influences on transportation."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"> <span className='numberOfQuestion'>2</span>Paragraph B
            <select name="ques2" id="ques2" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques2 != "iii" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques2 != "" && UserData.ques2 == "iii" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
              <option value="ix">ix</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques2 != "iii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "iii",
                      hiddenWord: "miles per hour",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B highlights the shift in transport research focus from speed (miles per hour) to fuel efficiency (miles per gallon) due to climate change concerns and governmental targets. This represents a significant change in the focus of research."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3"> <span className='numberOfQuestion'>3</span>Paragraph C
            <select name="ques3" id="ques3" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques3 != "vi" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques3 != "" && UserData.ques3 == "vi" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
              <option value="ix">ix</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques3 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "vi",
                      hiddenWord: "opportunities",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C emphasizes the growing demand for expertise in green energy and the numerous job opportunities available for those with the right technical skills, suggesting a bright employment outlook in this sector."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4"> <span className='numberOfQuestion'>4</span>Paragraph D
            <select name="ques4" id="ques4" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques4 != "i" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques4 != "" && UserData.ques4 == "i" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
              <option value="ix">ix</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques4 != "i"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "i",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D provides advice for young scientists and engineers on how to begin their careers in the green transport sector, suggesting a focus on applied science or engineering and considering training with large engineering firms."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques5"> <span className='numberOfQuestion'>5</span>Paragraph E
            <select name="ques5" id="ques5" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques5 != "v" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques5 != "" && UserData.ques5 == "v" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
              <option value="ix">ix</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques5 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "v",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E discusses the increasing investments in electric vehicles and the belief in a transition to electricity for personal transportation, indicating the future role of electricity in transport."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"> <span className='numberOfQuestion'>6</span>Paragraph F
            <select name="ques6" id="ques6" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques6 != "viii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques6 != "" && UserData.ques6 == "viii" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
              <option value="ix">ix</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques6 != "viii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "viii",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F outlines the challenges associated with electric cars, such as the need for a new infrastructure to support battery charging and exchange, highlighting the need for new infrastructure."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques7"> <span className='numberOfQuestion'>7</span>Paragraph G
            <select name="ques7" id="ques7" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques7 != "ii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques7 != "" && UserData.ques7 == "ii" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
              <option value="ix">ix</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques7 != "ii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "ii",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph G addresses the debate over biofuels, particularly the concern that biofuel production could compete with agricultural land needed for food, framing it as a choice between fuel and food."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8"> <span className='numberOfQuestion'>8</span>Paragraph H
            <select name="ques8" id="ques8" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques8 != "vii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques8 != "" && UserData.ques8 == "vii" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
              <option value="ix">ix</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques8 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "vii",
                      hiddenWord: "Paragraph H",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph H discusses fuel cells as a promising technology for producing low-emission energy for vehicles, presenting it as a low-pollution solution despite current challenges in production and infrastructure."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 9-13</h6> <br />
        <h6 className=''>Match each name to the sentences below.</h6> <br />
        <h6 className=''> A, Jeff Hardy<br /><br />
          B, Nigel Brandon<br /><br />
          C, Steven Chu<br /><br />
          D, Barry Potier<br /><br />
          E, Tristan Smith<br /><br />
          F, Roger Kemp</h6><br />
      </div>


      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"> <span className='numberOfQuestion'>9</span> thinks that job-hunters face an easy decision
            <select name="ques9" id="ques9" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques9 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques9 != "" && UserData.ques9 == "F" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques9 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "F (Roger Kemp)",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C: Roger Kemp from Lancaster University suggests that energy should be the career of choice for scientists, technicians, and engineers, implying it's an obvious and easy decision for job-hunters."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"> <span className='numberOfQuestion'>10</span>  thinks that job-hunters need a sound understanding of the basic concepts
            <select name="ques10" id="ques10" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques10 != "E" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques10 != "" && UserData.ques10 == "E" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques10 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "E (Tristan Smith)",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D: Tristan Smith from University College London advises job-hunters to focus on excellent knowledge of first principles, indicating the need for a sound understanding of basic concepts."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"> <span className='numberOfQuestion'>11</span>  is quite optimistic about biofuels
            <select name="ques11" id="ques11" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques11 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques11 != "" && UserData.ques11 == "A" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques11 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "A (Jeff Hardy)",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph G: Jeff Hardy from the UK Energy Research Centre acknowledges the interest in future biofuel technologies that move away from crops and towards using agricultural waste, indicating optimism about biofuels."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"> <span className='numberOfQuestion'>12</span> believes there are great opportunities for job-hunters in fuel cell technology
            <select name="ques12" id="ques12" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques12 != "B" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques12 != "" && UserData.ques12 == "B" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques12 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "B (Nigel Brandon)",
                      hiddenWord: "Paragraph H",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph H: Nigel Brandon from Imperial College London believes that there are tremendous opportunities for young scientists and engineers in fuel cell technology, emphasizing the career prospects in this area."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"> <span className='numberOfQuestion'>13</span>  welcomes the problems of moving to electric cars
            <select name="ques13" id="ques13" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques13 != "E" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques13 != "" && UserData.ques13 == "E" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques13 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "E (Tristan Smith)",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F: Tristan Smith discusses the challenges associated with switching to electric cars and sees these challenges as opportunities for engineers to innovate and contribute to CO2 reduction targets"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>



    </section>
  )
}

export default Test8Panel2




