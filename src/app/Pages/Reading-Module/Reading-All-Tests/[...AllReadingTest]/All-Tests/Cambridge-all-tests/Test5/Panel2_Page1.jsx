"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>



function Panel2_Q1({ handleChange, UserData }) {
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
        <h5 className=''>Reading Passages-1</h5>
        <h6 className=''>Questions 1-6</h6> <br />
        <label className=''>Complete the notes below..</label> <br /><br />
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.<br /> <br />
          Write your answers in boxes 1-6 on your answer sheet.</label>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <h6>The London underground railway</h6> <br />
        <h6>The problem</h6> <br />
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1">●   The<span className='numberOfQuestion'>1</span>
            <input type="text" name="ques1" id="ques1" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques1.match(/population/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques1 != "" && UserData.ques1 == "population" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques1.match(/population/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  population
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "population",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "First paragraph, first line. In the first half (1800 – 1850) of the 1800s, London’s population grew at an astonishing rate."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            of London increased rapidly between 1800 and 1850 <br />
            ●   The streets were full of horse-drawn vehicles</label>
        </div> <br />
        <h6 className='mt-2 mb-2'>The proposed solution</h6>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2">●   Charles Pearson, a solicitor, suggested building an underground railway <br />
            ●   Building the railway would make it possible to move people to better housing in the<span className='numberOfQuestion'>2</span>
            <input type="text" name="ques2" id="ques2" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques2.match(/suburbs/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques2 != "" && UserData.ques2 == "suburbs" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques2.match(/suburbs/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  suburbs
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "suburbs",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Second Paragraph, Fourth line. His idea was to relocate the poor workers who lived in the innercity slums to newly constructed subur"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3">●   A number of <span className='numberOfQuestion'>3</span>
            <input type="text" name="ques3" id="ques3" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques3.match(/businessmen/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques3 != "" && UserData.ques3 == "businessmen" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques3.match(/businessmen/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  businessmen
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "businessmen",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Second Paragraph, Sixth line. Pearson’s ideas gained support amongst some businessmen and in."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            agreed with Pearson’s idea</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques4">●   The company initially had problems getting the <span className='numberOfQuestion'>4</span>
            <input type="text" name="ques4" id="ques4" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques4.match(/funding/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques4 != "" && UserData.ques4 == "funding" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques4.match(/funding/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  funding
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 4,
                        Ans1: "",
                        mainAns: "funding",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– Third Paragraph, Fourth line. The organization had difficulty in raising the funding for such a radical and expensive scheme."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            needed for the project</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques5">●   Negative articles about the project appeared in the <span className='numberOfQuestion'>5</span>
            <input type="text" name="ques5" id="ques5" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques5.match(/press/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques5 != "" && UserData.ques5 == "press" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques5.match(/press/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  press
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "press",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Third Paragraph, Fifth line. not least because of the critical (negative) articles printed by the press."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div> <br />

        <h6>The construction</h6> <br />
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques6">●   The chosen route did not require many buildings to be pulled down <br />
            ●   The ‘cut and cover’ method was used to construct the tunnels <br />
            ●   With the completion of the brick arch, the tunnel was covered with<span className='numberOfQuestion'>6</span>
            <input type="text" name="ques6" id="ques6" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques6.match(/soil/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques6 != "" && UserData.ques6 == "soil" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques6.match(/soil/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  soil
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "soil",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Fourth Paragraph, Last line. A two-metre-deep layer of soil was laid on the top of the tunnel and the road above rebuilt."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>
      </div> <br />

      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6>Questions 7-13</h6> <br />
        <label className=''>
          Do the following statements agree with the information given in Reading Passage 1?<br /> <br />
          In boxes 7-13 on your answer sheet, write </label>
        <label className=''>TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques7"> <span className='numberOfQuestion'>7</span> Other countries had built underground railways before the Metropolitan line opened.
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques7 != "FALSE" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques7 != "" && UserData.ques7 == "FALSE" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques7 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "underground railway",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Fifth Paragraph, First line. The metropolitan line, which opened on 10 January 1863, was the world’s first underground railway."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>More people than predicted travelled on the Metropolitan line on the first day.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques8 != "NOT GIVEN" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques8 != "" && UserData.ques8 == "NOT GIVEN" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques8 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "already thought",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– Fifth Paragraph, Second and third line. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking 18 minutes. ** nowhere it is written that people were more than predicted (already thought)."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"><span className='numberOfQuestion'>9</span>The use of ventilation shafts failed to prevent pollution in the tunnels.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques9 != "TRUE" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques9 != "" && UserData.ques9 == "TRUE" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques9 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "persisted",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Sixth Paragrah, Fifth line to last line. The line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels. ** Smoke and fumes remained (persisted) despite ventilation shafts in tunnel. It means shafts were failed to stop pollution in tunnels."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>A different approach from the ‘cut and cover’ technique was required in London’s central area.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques10 != "TRUE" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques10 != "" && UserData.ques10 == "TRUE" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques10 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "method of construction was not an option means this method could not be used",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Seventh Paragraph, Second line to last line. The problem was partly that that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital’s centre. The ‘cut and cover’ method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground. ** The ‘cut and cover’ method of construction was not an option means this method could not be used."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11">  <span className='numberOfQuestion'>11</span>The windows on City & South London trains were at eye level.
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques11 != "FALSE" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques11 != "" && UserData.ques11 == "FALSE" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques11 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "method of construction was not an option means this method could not be used",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Eighth Paragraph, Sixth line. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnels walls. ** Windows were just below the train’s roof. It means above the eye level."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>The City & South London Railway was a financial success.
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques12 != "FALSE" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques12 != "" && UserData.ques12 == "FALSE" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques12 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "method of construction was not an option means this method could not be used",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Eighth Paragraph, Eighth line . Although the city & South London Railway was a great technicalachievement, it did not make a profit. ** Financial success means earning a lot of money. But it was not true."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"> <span className='numberOfQuestion'>13</span>Trains on the ‘Tuppenny Tube’ nearly always ran on time.
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques13 != "NOT GIVEN" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques13 != "" && UserData.ques13 == "NOT GIVEN" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques13 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "method of construction was not an option means this method could not be used",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Eighth Paragraph, last three lines. The Central London Railway, known as the ‘Tuppenny Tube’, began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to growing tube networks. ** There is nothing about time."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />




      {/* All Questions from Passage-2 */}

      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h5 className='mb-1'>Reading Passage-2</h5>
        <h6>Questions 14-17</h6> <br />
        <label className=''> Reading Passage 2 has seven paragraphs, A-G.<br /> <br />
          Which section contains the following information? <br /> <br />
          Choose the correct letter, <span className='font-bold'>A-G</span>, in boxes <span className='font-bold'>14-17</span> on your answer sheet.</label> <br />
        <label >NB   You may use any letter more than once.</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>a mention of negative attitudes towards stadium building projects
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques14 != "A" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques14 != "" && UserData.ques14 == "A" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques14 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "method of construction was not an option means this method could not be used",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "A paragraph’s second part full. Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above 1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair. Vocabulary :- Scepticism – doubt as to the truth of something ** The meaning of these lines is that billions are spent on making these stadium, which are used only for one big event, and after that, there is no use of them, and even, they are not repaired. These are negative points for stadiums."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span>figures demonstrating the environmental benefits of a certain stadium
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques15 != "F" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques15 != "" && UserData.ques15 == "F" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques15 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "1.14 GHW & 660 tons",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– F Pragraph’s second part’s first line to fifth line. Freiburg Mage Solar Stadium in Germany is the first of new wave of stadiums as power plants, which also includes the Amsterdam Arena and the Kaohsiung Stadium. The latter, inaugurated in 2009, has 8,844 photovoltaic panels producing up to 1.14 GWh of electricity annually. This reduces the annual output of carbon dioxide by 660 tons and supplies up to 80 percent of the surrounding area when the stadium is not in use. Environmental benefits: 1.14 GWh of electricity is produced annually from the solar system at Kaohsiung Stadium, which reduces 660 tons of carbon dioxide emission. Figures: 1.14 GHW & 660 tons."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> examples of the wide range of facilities available at some new stadiums
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques16 != "E" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques16 != "" && UserData.ques16 == "E" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques16 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "1.14 GHW & 660 tons",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " paragraph’s second part full paragraph and first line from third paragraph. There’s a growing trend for stadiums to be equipped with public spaces and services that serve a function beyond sport, such as hotels, retail outlets, conference centres, restaurants and bars, children’s playgrounds and green space. Creating mixed-use developments such as this reinforces compactness and multi – functionality, **  making more efficient use of land helping to regenerate urban spaces. The wide range of facilities: hotels, retail outlets, conference centres, restaurants, bars, children’s playgrounds and green space."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"> <span className='numberOfQuestion'>17</span>reference to the disadvantages of the stadiums built during a certain era
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques17 != "D" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques17 != "" && UserData.ques17 == "D" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques17 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "1.14 GHW & 660 tons",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " D Paragraph’s second line to the last line. But some of the flexibility was lost at the beginning of the 20 century, as stadiums were developed using new products such as steel and reinforced concrete, and made use of bright lights for night-time matches. Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public ** Certain era: 20 century. Disadvantages:- 1. Due to the use of steel and concrete, the stadiums were not easy to change as intended. 2. Designed for sporting only so not accessible to the general public."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />




      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6>Questions 18-22</h6> <br />
        <label className=''> Complete the summary below.<br /> <br />
          Choose ONE WORD ONLY from the passage for each answer. <br /> <br />
          Write your answers in boxes 18-22 on your answer sheet.</label> <br />  <br />
        <h6 >Roman amphitheatres</h6> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques18">The Roman stadium of Europe have proved very versatile. The amphitheatre of Arles, for example, was converted first into a  <span className='numberOfQuestion'>18</span>
            <input type="text" name="ques18" id="ques18" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques18.match(/fortress/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques18 != "" && UserData.ques18 == "fortress" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques18.match(/fortress/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  fortress
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 18,
                        Ans1: "",
                        mainAns: "fortress",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "B paragraph’s first three line. The amphitheatre of Arles in Southwest France, with a capacity of 25,000 spectators, is perhaps the best example of just how versatile stadium can be. Built by the Romans in 90 AD, it became a fortress with four towers after the fifth century,"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            then into a residential area and finally into an arena where spectators could watch

            <span className='numberOfQuestion'>19</span>
            <input type="text" name="ques19" id="ques19" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques19.match(/bullfights/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques19 != "" && UserData.ques19 == "bullfights" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques19.match(/bullfights/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  bullfights
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "",
                        mainAns: "bullfights",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "B paragraph’s first part’s last three lines. With the growing interest in conservation during the 19 century, it was converted back into an arena for the staging of bullfights, thereby returning the structure to its original use as a venue for public spectacles."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            . Meanwhile, the arena in Verona, one of the oldest Roman amphitheatres, is famous today as a venue where

            <span className='numberOfQuestion'>20</span>
            <input type="text" name="ques20" id="ques20" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques20.match(/opera/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques20 != "" && UserData.ques20 == "opera" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques20.match(/opera/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  opera
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "opera",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "B paragraph’s second part’s last two lines It has endured the centuries and is currently considered one of the world’s prime sites for opera"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            is performed. The site of Lucca’s amphitheatre has also been used for many purposes over the centuries, including the storage of

            <span className='numberOfQuestion'>21</span>
            <input type="text" name="ques21" id="ques21" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques21.match(/salt/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques21 != "" && UserData.ques21 == "salt" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques21.match(/salt/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  salt
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 21,
                        Ans1: "",
                        mainAns: "salt",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "C paragraph from third line. The site (centre of the Italian Town of Lucca) evolved in a similar way to Arles and was progressively filled with buildings from the Middle Ages until the 19th century, variously used as houses, a salt depot and a prison. ** Depot = Storage"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            . It is now a market square with

            <span className='numberOfQuestion'>22</span>
            <input type="text" name="ques22" id="ques22" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && !UserData.ques22.match(/shops/gi) && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques22 != "" && UserData.ques22 == "shops" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && !UserData.ques22.match(/shops/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  shops
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "shops",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "C Paragraph’s last two line. Today, the ruins of the amphitheatre remain embedded in the various shops and residences surrounding the public square."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            and homes incorporated into the remains of the Roman amphitheatre.</label>
        </div>

      </div> <br />






      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6>Questions 23-24</h6> <br />
        <label className=''>
          Choose TWO letters, Below<br /> <br />
          the correct letters in boxes 23 and 24 on your answer sheet. <br /> <br />
          When comparing twentieth-century stadiums to ancient amphitheatres in <span className='font-bold'>Section D</span>, <span className='font-bold'>which TWO </span>negative features does the writer mention?
        </label> <br /> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques23"><span className='numberOfQuestion mr-1 mb-2'>23</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques23 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "C (They are in less convenient location)",
                      hiddenWord: "They are in less convenient location",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " D paragraph’s last three line. Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public. ** Because of stadiums surrounded by car parks, they might not accessible to the public."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques23' />
              They are less imaginatively designed.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques23' />
              They are less spacious.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques23' />
              They are in less convenient locations.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques24"><span className='numberOfQuestion mr-1 mb-2'>24</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques24 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "A ( They are less versatile)",
                      hiddenWord: " They are less versatile",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " D paragraph’s second & third line. But some of the flexibility was lost at the beginning of the 20th century, as stadiums were developed using new products such as steel and reinforced concrete, ** The use of steel and concrete reduced the flexibility(Versatility) of changing the structure of stadiums."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques24' />
              They are less versatile.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques24' />
              They are made of less durable materials.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques24' />
              found them hard to sell.
            </label>
            </div>
          </div>
        </div>
      </div> <br />


      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6>Questions 25-26</h6> <br />
        <label className=''> Write the correct letters in boxes 25 and 26 on your answer sheet. <br /> <br />
          <span className='font-bold'>Which TWO</span> advantages of modern stadium design does the writer mention?
        </label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques25"><span className='numberOfQuestion mr-1 mb-2'>25</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques25 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "",
                      mainAns: "B ( bringing community life back into the city environment)",
                      hiddenWord: "bringing community life back into the city environment",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " E paragraph’s third part’s first two line. This opens the space up to families and wider cross-section of society, instead of catering only to sportspeople and supporters. ** for more clarification, please read the second part of the E paragraph. Rest is clear I think"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques25' />
              offering improved amenities for the enjoyment of sports events
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques25' />
              bringing community life back into the city environment
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques25' />
              facilitating research into solar and wind energy solutions
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques26"><span className='numberOfQuestion mr-1 mb-2'>26</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques26 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "",
                      mainAns: "B (providing a suitable site for the installation of renewable power generators)",
                      hiddenWord: "providing a suitable site for the installation of renewable power generators",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " F paragraph’s first paragraph’s last three line. Stadiums are ideal for these purposes (power stations), because their canopies have large surface area for fitting photovoltaic panels (Solar Panels) and rise high enough (more than 40 metres) to make use of micro wind turbines."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques26' />
              enabling local residents to reduce their consumption of electricity
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques26' />
              providing a suitable site for the installation of renewable power generators
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques26' />
              renewable power generators
            </label>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Panel2_Q1



