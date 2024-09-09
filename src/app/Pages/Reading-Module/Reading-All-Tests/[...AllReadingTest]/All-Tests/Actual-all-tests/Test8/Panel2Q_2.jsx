"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test8Panel2Q_2({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer ,  explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  // let testItems = localStorage.getItem("ShowAnsByTest");


  return (
    <section className='Panel2Section p-3 sm:p-5 mb-[50px]'>
      <div className='Panel2Section'>
        <div className="palne2_div1 ml-2">
          <h1>Section-2</h1>
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
        <h6 className=''>Questions 14-19</h6> <br />
        <h6 className=''>Write Yes, No or Not Given</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"> <span className='numberOfQuestion'>14</span>Public transport today is probably more convenient than in the days of the stagecoach.
            <select name="ques14" id="ques14" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques14 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques14 != "" && UserData.ques14 == "NO" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques14 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A: Martin Lowson complains that the fundamentals of public transport have not changed much since the era of the stagecoach, implying that current public transport is still inconvenient in some ways: The fundamentals of public transport, complains Martin Lowson, an academic and entrepreneur, have not changed very much since the era of the stagecoach."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques15"> <span className='numberOfQuestion'>15</span> PRT pods are able to travel above ground level.
            <select name="ques15" id="ques15" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques15 != "YES" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques15 != "" && UserData.ques15 == "YES" && "text-green-700"}
           
            `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques15 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B: The passage mentions that the pods would travel along narrow tracks or elevated rails: Instead of big trains or buses, passengers would board small, driverless pods, for one to four people, which would travel along narrow tracks or elevated rails."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques16"> <span className='numberOfQuestion'>16</span>The pods would travel quicker than conventional trains or buses.
            <select name="ques16" id="ques16" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques16 != "NOT GIVEN" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques16 != "" && UserData.ques16 == "NOT GIVEN" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques16 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage does not specifically compare the speed of the PRT pods to conventional trains or buses in terms of travel time. so ans is not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"> <span className='numberOfQuestion'>17</span> Richard Nixon felt that PRT was unsuitable for inner city transportation.
            <select name="ques17" id="ques17" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques17 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques17 != "" && UserData.ques17 == "NO" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques17 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D: Richard Nixon believed in the potential of PRT and pushed through the construction of a demonstration system, indicating his support for PRT: In 1972 Richard Nixon insisted that if American ingenuity could transport three men 200,000 miles to the moon, it could also find a better way to transport 200,000 men three miles to work. The answer, he thought, was PRT."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"> <span className='numberOfQuestion'>18</span>Raytheon were unable to complete their PRT project near Chicago.
            <select name="ques18" id="ques18" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques18 != "YES" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques18 != "" && UserData.ques18 == "YES" && "text-green-700"}
            
            `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques18 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D: Raytheon had to scrap their proposed PRT scheme near Chicago due to high projected costs: In the 1990s, for example, Raytheon, an American military engineering firm, had to scrap a proposed PRT scheme near Chicago when the projected costs topped $30m per kilometre."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"> <span className='numberOfQuestion'>19</span>The cost of running ULTra is much less than for previous PRT services.
            <select name="ques19" id="ques19" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques19 != "YES" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques19 != "" && UserData.ques19 == "YES" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques19 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E: Dr. Lowson states that ULTra's operating costs are 40% lower than those of a bus service, implying it is cheaper than previous PRT systems: The operating costs are 40% lower than those of a bus service, since there are no drivers."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 20-23</h6> <br />
        <h6 className=''>Write NO MORE THAN TWO WORDS AND/OR A NUMBER from the text.</h6> <br />
      </div>

      <div className="Question ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span>
            One of the reasons pods can move people quickly is because they are
            <input type="text" name="ques20" id="ques20" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-8" && !UserData.ques20.match(/automated/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques20 != "" && UserData.ques20 == "automated" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-8" && !UserData.ques20.match(/automated/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  automated
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "automated",
                        hiddenWord: "Paragraph C",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph C: The passage explains that because the pods are automated, they can travel much closer together than manually driven vehicles and thus get lots of people moving quickly: Since they are automated, they could travel much closer together than manually driven vehicles and so get lots of people moving quickly."
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
            French, German and Japanese projects failed partly due to
            <input type="text" name="ques21" id="ques21" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-8" && !UserData.ques21.match(/rising costs/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques21 != "" && UserData.ques21 == "rising costs" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-8" && !UserData.ques21.match(/rising costs/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  rising costs
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 21,
                        Ans1: "",
                        mainAns: "rising costs",
                        hiddenWord: "Paragraph D",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph D: The passage mentions that rising costs and subsiding political support were reasons why the projects failed: Rising costs and subsiding political support sank all the other projects."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span>
            Every year, the PRT system at Heathrow could transport up to
            <input type="text" name="ques22" id="ques22" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-8" && !UserData.ques22.match(/3m people/gi) && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques22 != "" && UserData.ques22 == "3m people" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-8" && !UserData.ques22.match(/3m people/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  3m people
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "3m people",
                        hiddenWord: "Paragraph F",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F: The passage states that if the project proves a success, BAA might expand the service to carry as many as 3 million people a year: If it proves a success, BAA might expand the service throughout the airport, to carry as many as 3m people a year"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            if it is successful.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>23</span>
            About six companies are copying a road system operated by
            <input type="text" name="ques23" id="ques23" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-8" && !UserData.ques23.match(/2getthere/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques23 != "" && UserData.ques23 == "2getthere" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-8" && !UserData.ques23.match(/2getthere/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  2getthere
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 23,
                        Ans1: "",
                        mainAns: "2getthere",
                        hiddenWord: "Paragraph F",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F: The passage mentions that 2getthere operates automated PRT-like buses and that half a dozen other firms are marketing variants on the same theme: A Dutch firm called 2getthere operates automated PRT-like buses in a suburb of Rotterdam and at Schiphol airport near Amsterdam, although PRT purists dislike them since they run on ordinary roads rather than dedicated tracks. Half a dozen other firms are marketing variants on the same theme."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 24-26</h6> <br />
        <h6 className=''>Complete the summary with words from the box below.</h6> <br />
      </div>

      <div className="Question ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques24"><span className='numberOfQuestion'>24</span>
            The PRT still face several hurdles. Some people think that one of the dangers of the pods is that operators will run them close to
            <input type="text" name="ques24" id="ques24" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-8" && !UserData.ques24.match(/each other/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques24 != "" && UserData.ques24 == "each other" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-8" && !UserData.ques24.match(/each other/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  each other
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "each other",
                        hiddenWord: "Paragraph G",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G: The passage mentions that some argue it would be dangerous to run pods close enough together, at high enough speeds, to eke enough capacity out of each line: Some argue that it would be dangerous to run pods close enough together, at high enough speeds, to eke enough capacity out of each line."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            in order to get the most profit from the line.<span className='numberOfQuestion'>25</span> Other people are concerned about the
            <input type="text" name="ques25" id="ques25" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-8" && !UserData.ques25.match(/effect/gi) && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques25 != "" && UserData.ques25 == "effect" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-8" && !UserData.ques25.match(/effect/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  effect
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "effect",
                        hiddenWord: "Paragraph G",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G: The passage states that other critics contend the tracks will be eyesores, especially if they are elevated: Other critics contend that the tracks will be eyesores, especially if they are elevated."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            they will have on the beauty of the surroundings. Dr Lowson feels that the biggest problem is that local authorities are reluctant to take
            <span className='numberOfQuestion'>26</span>
            <input type="text" name="ques26" id="ques26" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-8" && !UserData.ques26.match(/risks/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques26 != "" && UserData.ques26 == "risks" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-8" && !UserData.ques26.match(/risks/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  risks
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "risks",
                        hiddenWord: "Paragraph G",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G: The passage notes that Dr. Lowson believes hesitant local authorities are the only significant obstacle and quotes him saying, No one ever got fired for proposing a bus system: The European Commission has studied four potential schemes, and concluded that hesitant local authorities are the only significant obstacle. As Dr Lowson puts it, 'No one ever got fired for proposing a bus system"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
        <div className='w-[90%] ml-2 mr-2 border-1 border-gray-500 text-justify font-bold p-3'>
          PRT, proposals, tracks, themselves, risks, passengers, effect, opportunities, chance, each other, cost
        </div>

      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 27 - 35</h6> <br />
        <h6 className=''>Match each heading to the most suitable paragraph.</h6> <br />
        <h6 className='mt-2 mb-2'>
          i,  Better technology could move things forward <br /> <br />
          ii, A glimmer of hope <br /> <br />
          iii, The overall impact of inadequate transport for women <br /> <br />
          iv, Difficulties in copying successful schemes <br /> <br />
          v, Involving women more <br /> <br />
          vi, Simple ideas which make a huge difference <br /> <br />
          vii, Women suffer more than men <br /> <br />
          viii, Lack of progress cannot be blamed on technological limitations <br /> <br />
          ix, Women's requirements are currently not being taken into account <br /> <br />
          x, A gender-specific examination <br /> <br />
        </h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>Paragraph A
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques27 != "iii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques27 != "" && UserData.ques27 == "iii" && "text-green-700"}
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques27 != "iii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "iii",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A discusses the fundamental issues with public transport systems, implying the broad impact on all passengers, which would include women: The fundamentals of public transport, complains Martin Lowson, an academic and entrepreneur, have not changed very much since the era of the stagecoach."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>Paragraph B
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques28 != "ix" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques28 != "" && UserData.ques28 == "ix" && "text-green-700"}
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques28 != "ix"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ix
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "ix",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph introduces a new concept (PRT) designed to make public transport more efficient and user-friendly, which indirectly addresses the issue of current systems not meeting all passengers' needs, including women's: Dr Lowson's firm, Advanced Transport Systems, however, thinks it knows how to overcome all this"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span>Paragraph C
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques29 != "vii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques29 != "" && UserData.ques29 == "vii" && "text-green-700"}
              
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques29 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "vii",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph explains how the new PRT system could theoretically improve transport efficiency and user experience, hinting at how current inefficiencies may disproportionately affect women who rely on public transport: In theory, such a system could carry as many people as a more conventional light-rail network or bus service, at lower cost."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"><span className='numberOfQuestion'>30</span>Paragraph D
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques30 != "ii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques30 != "" && UserData.ques30 == "ii" && "text-green-700"}
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques30 != "ii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "ii",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph provides historical context and mentions previous attempts at implementing PRT, which shows there has been hope and effort toward innovative transport solutions: Since the 1950s, visionaries, or dreamers, depending on your point of view, have been touting PRT as the most efficient way to move people around smallish cities and big public spaces"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span>Paragraph E
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques31 != "x" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques31 != "" && UserData.ques31 == "x" && "text-green-700"}
              
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques31 != "x"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                x
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "x",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E discusses modern advancements and cost-effectiveness in PRT, representing a detailed examination of the current technological and economic aspects of public transport systems: Dr Lowson argues that things are different now, thanks to advances in engineering and computing"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion'>32</span>Paragraph F
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques32 != "vi" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques32 != "" && UserData.ques32 == "vi" && "text-green-700"}
              
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques32 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "vi",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph talks about the practical implementation and potential impact of PRT systems at Heathrow, showing how a seemingly simple idea could make a significant difference: BAA, the firm that operates Heathrow and several other British airports, is convinced."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33"><span className='numberOfQuestion'>33</span>Paragraph G
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques33 != "iv" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques33 != "" && UserData.ques33 == "iv" && "text-green-700"}
              
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques33 != "iv"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iv
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "iv",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph outlines the various challenges and criticisms faced by PRT systems, highlighting the difficulties in replicating successful models: There are still plenty of sceptics, however."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34"><span className='numberOfQuestion'>34</span>Paragraph H
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques34 != "viii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques34 != "" && UserData.ques34 == "viii" && "text-green-700"}
              
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques34 != "viii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "viii",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph H discusses the non-technological obstacles to PRT implementation, such as political and financial issues, implying that technology is not the primary hurdle: The local politicians who have the final say on most proposals certainly seem to worry that PRT will not live up to its promise."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"><span className='numberOfQuestion'>35</span>Paragraph I
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques35 != "v" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques35 != "" && UserData.ques35 == "v" && "text-green-700"}
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
              <option value="x">x</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques35 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "v",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph is not present in the provided passage, but based on the sequence and context, it could imply involving women more in the conversation and implementation of public transport solutions to meet diverse needs. If we follow the context from the previous pattern, it may likely introduce a new perspective or initiative regarding transport: The European Commission has studied four potential schemes, and concluded that hesitant local authorities are the only significant obstacle."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 36 - 40</h6> <br />
        <h6 className=''>Choose True, False or Not Given.</h6> <br />
        <h6 className=''><br />
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span>Many development projects have failed due to a lack of gender specific transportation.
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques36 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques36 != "" && UserData.ques36 == "NOT GIVEN" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques36 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This statement is not directly addressed in the provided passage, so the answer is NOT GIVEN."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span>Transport for women needs to be provided outside the rush hours.
            <select name="ques37" id="ques37" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques37 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques37 != "" && UserData.ques37 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques37 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This is supported by Paragraph H, which discusses the concerns and considerations regarding the implementation of PRT systems: The European Commission has studied four potential schemes, and concluded that hesitant local authorities are the only significant obstacle."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span>Cycling is an initiative which has had a positive impact in Peru.
            <select name="ques38" id="ques38" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques38 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques38 != "" && UserData.ques38 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques38 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Cycling in Peru is not mentioned in the provided passage. Therefore, the answer is FALSE."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>The workshops are attended by a large percentage of local women
            <select name="ques39" id="ques39" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques39 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques39 != "" && UserData.ques39 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques39 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage does not mention any specific attendance rates of women in workshops, so the answer is NOT GIVEN"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span>A remaining problem with the workshops is how to put the women at ease.
            <select name="ques40" id="ques40" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques40 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-8" && UserData.ques40 != "" && UserData.ques40 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-8" && UserData.ques40 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph A1111",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage does not discuss any remaining problems with workshops or mention anything about putting women at ease in such contexts. Therefore, the answer is FALSE."
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

export default Test8Panel2Q_2




