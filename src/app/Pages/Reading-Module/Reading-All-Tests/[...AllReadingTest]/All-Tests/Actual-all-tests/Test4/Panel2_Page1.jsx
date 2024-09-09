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

      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 1-5</h6> <br />
        <h6 className=''>Which paragraph contains</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>how one company helps families
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques1 != "E" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques1 != "" && UserData.ques1 == "E" && "text-green-700"}
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
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques1 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E discusses American Century Investments' initiatives where they support their employees by paying adoption expenses and providing home-fitness equipment. This goes beyond typical benefits to directly assist employees with family-related needs."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>two serious problems for employers
            <select name="ques2" id="ques2" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques2 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques2 != "" && UserData.ques2 == "B" && "text-green-700"}
                
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
              <option value="I">I</option>
              <option value="J">J</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques2 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B mentions two serious problems for employers—falling population of workers and tight controls on immigration. These issues create challenges in attracting and retaining talent, prompting employers to offer additional perks like flexible working to lure skilled workers."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span>one reason why employees need to work flexible hours
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques3 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques3 != "" && UserData.ques3 == "D" && "text-green-700"}
               
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques3 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D explains that globalization has expanded the hours during which workers need to communicate, necessitating flexible working hours to accommodate different time zones and work demands."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>a new publication to mirror changes in the work environment
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques4 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques4 != "" && UserData.ques4 == "A" && "text-green-700"}
               
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
              <option value="I">I</option>
              <option value="J">J</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques4 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A introduces the magazine 'Success,'' which is being resurrected to reflect contemporary workplace values emphasizing work-life balance rather than traditional measures of success like money and titles."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>how a division between companies is developing
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques5 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques5 != "" && UserData.ques5 == "C" && "text-green-700"}
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
              <option value="I">I</option>
              <option value="J">J</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques5 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C discusses a widening gap between companies regarding their adoption of work-life balance programs. Some firms like IBM and Bank of America have embraced numerous initiatives, while others lag behind due to capacity or reluctance to change."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>




      <br /> <br />
      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 6-10</h6>
        <h6 className=''>Match each name to the sentences below.</h6> <br />
        <h6 className='pl-3'>
          A James Freer <br /> <br />
          B Rob Marcolina <br /> <br />
          C Helen Murlis <br /> <br />
          D Joseph Guerriero <br /> <br />
          E Orison Swett Marden <br /> <br />
          F Nella Barkley<br /> <br />
        </h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>was given a break from work after the birth of his child
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques6 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques6 != "" && UserData.ques6 == "B" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques6 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Rob Marcolina, as mentioned in paragraph E, was allowed time off to look after his daughter when she was born to a surrogate mother."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>believes companies are not changing quickly enough
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques7 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques7 != "" && UserData.ques7 == "F" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques7 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Nella Barkley, as mentioned in paragraph D, suggests that large firms are beginning to understand the value of work-life balance schemes but are adopting them slowly."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>sees two kinds of companies emerging
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques8 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques8 != "" && UserData.ques8 == "C" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques8 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Helen Murlis, mentioned in paragraph C, observes a widening gap between firms 'at the creative end of employment' and those that are not, in terms of embracing work-life balance initiative"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"><span className='numberOfQuestion'>9</span>was the original writer of 'Success'
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques9 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques9 != "" && UserData.ques9 == "E" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques9 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Orison Swett Marden, mentioned in paragraph A, is noted as the original writer of 'Success,' a magazine being revived to reflect contemporary workplace values."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>believes work-life programs help a company to make money
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques10 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques10 != "" && UserData.ques10 == "A" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques10 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "James Freer, mentioned in paragraph G, is convinced that initiatives like flexible working and dependent-care facilities at IBM help produce better financial results."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 11-13</h6> <br />
        <h6 className=''>Write NO MORE THAN TWO WORDS from the text.</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>Ernst and Young has over two thousand people working on a
            <input type="text" name="ques11" id="ques11" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques11.match(/flexi-time/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques11 != "" && UserData.ques11 == "flexi-time" && "text-green-700"}
             
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques11.match(/flexi-time/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  flexi-time
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "flexi-time",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G mentions Ernst & Young's low-cost initiatives called 'People First,' which includes over 2,300 flexi-time employees in the United States."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            basis.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>The cost of training someone to a high level from a
            <input type="text" name="ques12" id="ques12" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques12.match(/raw recruit/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques12 != "" && UserData.ques12 == "raw recruit" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques12.match(/raw recruit/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  raw recruit
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "raw recruit",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph H discusses Booz Allen Hamilton's calculation that it costs more than $2 million to develop a raw recruit into a partner, illustrating the significant investment firms make in their employees"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            can cost millions of dollars.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>Despite their concern for a work-life balance, younger employees are willing to
            <input type="text" name="ques13" id="ques13" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques13.match(/binge-work/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques13 != "" && UserData.ques13 == "binge-work" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques13.match(/binge-work/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                binge-work
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "binge-work",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph J discusses how younger employees, despite valuing work-life balance, are willing to engage in intense work periods (binge-work) followed by extended sabbaticals to recharge, reflecting a shifting attitude towards work and life integration."
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



