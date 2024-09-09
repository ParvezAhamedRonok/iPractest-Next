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

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 14 - 23</h6> <br />
        <h6 className='mb-1'>Match each heading to the most suitable paragraph.</h6> <br />
        <div className='mt-2 mb-2'>
          <span className='font-bold  mr-2'>i</span>Simplification through regulation<br />
          <span className='font-bold  mr-2'>ii</span>How companies manage progress<br />
          <span className='font-bold  mr-2'>iii</span>	Large sections of a company can be handled externally<br />
          <span className='font-bold  mr-2'>vi</span>	The administrative challenges companies face<br />
          <span className='font-bold  mr-2'>v</span>	Car production on the same road as other consumer goods<br />
          <span className='font-bold  mr-2'>vi</span>	Why companies are not buying<br />
          <span className='font-bold  mr-2'>vii</span>From systems to people<br />
          <span className='font-bold  mr-2'>viii</span>	How companies manage administration<br />
          <span className='font-bold  mr-2'>ix</span>	Office administration follows manufacturing<br />
          <span className='font-bold  mr-2'>x</span>	More complicated products have emerged<br />
          <span className='font-bold  mr-2'>xi</span>	Problems of IT systems developments<br />
        </div>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>14</span>
          <label htmlFor="ques14">Paragraph A</label>
          <select name="ques14" id="ques14" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques14 != "ii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques14 != "" && UserData.ques14 == "ii" && "text-green-700"}
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques14 != "ii"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              ii
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 14,
                    Ans1: "",
                    mainAns: "ii",
                    hiddenWord: "",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "Paragraph A discusses how industries manage the complexity of their products through outsourcing, allowing specialization in specific tasks. This reflects how companies manage progress by dividing tasks effectively among different entities in the production chain."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>15</span>
          <label htmlFor="ques15">Paragraph B</label>
          <select name="ques15" id="ques15" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques15 != "viii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques15 != "" && UserData.ques15 == "viii" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques15 != "viii"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              viii
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 15,
                    Ans1: "",
                    mainAns: "viii",
                    hiddenWord: "",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph describes how computers mechanize office work by automating paperwork and the flow of information. It highlights that banks, insurance firms, and other companies use computers extensively to automate production processes and administrative tasks. This automation helps companies save on labor costs, streamline operations, and increase profitability."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>16</span>
          <label htmlFor="ques16">Paragraph C</label>
          <select name="ques16" id="ques16" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques16 != "x" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques16 != "" && UserData.ques16 == "x" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques16 != "x"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              x
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 16,
                    Ans1: "",
                    mainAns: "x",
                    hiddenWord: "",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "The heading 'x More complicated products have emerged' directly aligns with the content of Paragraph C. The paragraph discusses how advancements in technology, particularly through the use of computers, have enabled companies to develop and offer more intricate and sophisticated products. It illustrates this with examples from the banking and insurance sectors, where automation has facilitated the introduction of a wide range of complex financial instruments and tailored insurance products."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>17</span>
          <label htmlFor="ques17">Paragraph D</label>
          <select name="ques17" id="ques17" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques17 != "xi" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques17 != "" && UserData.ques17 == "xi" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques17 != "xi"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              xi
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 17,
                    Ans1: "",
                    mainAns: "xi",
                    hiddenWord: "",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "Paragraph D discusses the challenges and complexities associated with managing IT systems in companies as computers become widespread. It addresses issues such as integrating different systems and maintaining them effectively."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>18</span>
          <label htmlFor="ques18">Paragraph E</label>
          <select name="ques18" id="ques18" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques18 != "vi" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques18 != "" && UserData.ques18 == "vi" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques18 != "vi"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              vi
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 18,
                    Ans1: "",
                    mainAns: "vi",
                    hiddenWord: "",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph highlights that one of the primary reasons for the recession in corporate IT spending is that companies are struggling to absorb new technologies. It explains how companies, entangled in managing new products and the complex computer systems that support them, face difficulties. For instance, banks may find it challenging to ensure that customers who opt out of receiving junk mail do not receive it due to system inefficiencies. This creates a situation where, metaphorically, every tenth car would come out without a steering wheel."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>19</span>
          <label htmlFor="ques19">Paragraph F</label>
          <select name="ques19" id="ques19" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques19 != "ix" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques19 != "" && UserData.ques19 == "ix" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques19 != "ix"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              ix
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 19,
                    Ans1: "",
                    mainAns: "ix",
                    hiddenWord: "",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "Paragraph F discusses how companies outsource IT and administrative tasks to external providers, similar to how manufacturing tasks are outsourced to specialized firms. It reflects how office administration trends follow manufacturing trends in outsourcing and specialization."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>20</span>
          <label htmlFor="ques20">Paragraph G</label>
          <select name="ques20" id="ques20" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques20 != "vii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques20 != "" && UserData.ques20 == "vii" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques20 != "vii"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              vii
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 20,
                    Ans1: "",
                    mainAns: "vii",
                    hiddenWord: "",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "Paragraph G discusses business-process outsourcing (BPO), where companies outsource not just systems but also the workforce managing them. It shows how companies move from managing systems internally to outsourcing entire administrative functions and their management."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>21</span>
          <label htmlFor="ques21">Paragraph H</label>
          <select name="ques21" id="ques21" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques21 != "iii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques21 != "" && UserData.ques21 == "iii" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques21 != "iii"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              iii
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 21,
                    Ans1: "",
                    mainAns: "iii",
                    hiddenWord: "departments",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "Paragraph H discusses the trend of outsourcing entire departments like HR and their supporting systems to external specialists. It illustrates how large sections of administrative work can be effectively handled externally through outsourcing."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>22</span>
          <label htmlFor="ques22">Paragraph I</label>
          <select name="ques22" id="ques22" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques22 != "i" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques22 != "" && UserData.ques22 == "i" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques22 != "i"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              i
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 22,
                    Ans1: "",
                    mainAns: "i",
                    hiddenWord: "regulation",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "Paragraph I talks about how industries adopt common standards (regulation) to simplify production processes. It shows how regulatory standards help in simplifying and standardizing manufacturing processes, similar to the potential for simplifying administrative tasks."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>23</span>
          <label htmlFor="ques23">Paragraph J</label>
          <select name="ques23" id="ques23" onChange={handleChange}
            className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques23 != "v" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques23 != "" && UserData.ques23 == "v" && "text-green-700"}
           
            `}>
            <option value="" ></option>
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
            <option value="xi">xi</option>
          </select>
          <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques23 != "v"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              v
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 23,
                    Ans1: "",
                    mainAns: "v",
                    hiddenWord: "manufacturing",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "Paragraph J discusses how car manufacturing might adopt industry-wide standards similar to consumer electronics, allowing for specialization and standardization. It parallels the theme of mechanization and standardization across different industries."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>
        </div>

      </div>




      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 24 - 26</h6> <br />
        <h6 className=''>Choose A, B or C.</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <h6>Questions 40</h6><br />
        <h6 className='mb-1'>Choose the correct letter, A, B or C.</h6> <br />

        <div className='mb-3'>
          <label htmlFor="ques24"><span className='numberOfQuestion mr-1 mb-2'>24</span>
            FDC
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && UserData.ques24 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "C",
                        hiddenWord: "vii From systems to people",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This paragraph talks about how companies, like First Data Corporation (FDC), engage in business-process outsourcing (BPO) to handle significant portions of administrative work, including customer-facing tasks. For instance, FDC manages various aspects of the administrative workload involved in running a credit-card business. This includes processing transactions, handling applications, authorizing credit limits, issuing cards, and providing customer service for a vast number of credit-card accounts on behalf of other companies (card issuers)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques24' />
                outsources most of the work associated with a credit card business.
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques24' />
                is well-known by the customers of many banks.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques24' />
                deals directly with other firm's customers..</label>
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor="ques25"><span className='numberOfQuestion mr-1 mb-2'>25</span>
            Duncan Harwood claims that
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && UserData.ques25 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "A",
                        hiddenWord: "administrative",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This paragraph talks about how big companies are increasingly outsourcing chunks of their administrative work and the systems that support them to external specialists. Specifically, it mentions outsourcing HR departments and their supporting systems to companies like Hewitt, Accenture, and Convergys. For example, ADP, a payroll-outsourcing company, handles payroll for a significant portion of the private-sector workforce in America."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques25' />
                some large organisations are paying other companies to look after their HR.
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques25' />
                Accenture and others are allowing other big companies to provide their HR needs.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques25' />
                ADP is paying Accenture and others to provide its HR requirements.</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques26"><span className='numberOfQuestion mr-1 mb-2'>26</span>
            Regulation in some sectors has
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && UserData.ques26 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "B",
                        hiddenWord: "administrative",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph - I , This paragraph talks about how regulation in industries such as car manufacturing has encouraged manufacturers to adopt common standards. For example, carmakers have reworked their manufacturing processes to use common platforms, allowing them to assemble different car models with shared parts. This standardization enables parts suppliers to specialize in producing fewer parts in larger quantities, thereby reducing complexity and improving efficiency in the manufacturing process"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques26' />
                opened the door for companies like Flextronics and Selectron. </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques26' />
                elped some suppliers to focus on particular products ..</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques26' />
                made life easier for producers of branded products. </label>
            </div>
          </div>
        </div>
      </div>



      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 27 - 33</h6> <br />
        <h6 className=''>Write Yes, No or Not Given.</h6>  <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>During the war, Major Parkinson realised that he didn't have any work that really needed doing.
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques27 != "YES" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques27 != "" && UserData.ques27 == "YES" && "text-green-700"}
           
                `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT-GIVEN">NOT-GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques27 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "passage A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This aligns with the passage A, where Major Parkinson observed that when key leaders were absent due to leave or illness, the flood of paperwork and administrative tasks ceased, suggesting that much of the work might have been unnecessary or created simply to keep the bureaucratic machinery running."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>A team in Austria have produced a mathematical model of Parkinson's situation during the war.
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques28 != "YES" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques28 != "" && UserData.ques28 == "YES" && "text-green-700"}
                `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT-GIVEN">NOT-GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques28 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "passage A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This statement is supported by passage C, where physicists from the Medical University of Vienna created mathematical models to simulate bureaucratic dynamics similar to those observed by Parkinson during the war."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span>The theory Parkinson puts forward is based entirely on his experiences in the war.
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques29 != "NO" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques29 != "" && UserData.ques29 == "NO" && "text-green-700"}
                `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT-GIVEN">NOT-GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques29 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "passages D and E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Parkinson's observations were not solely based on his wartime experiences but also on historical research and broader insights into bureaucratic systems, as mentioned in passages D and E. His theory encompasses historical trends and sociological perspectives beyond his personal experience during the war"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques30"><span className='numberOfQuestion'>30</span>William Niskanen's developed his thinking partly from Parkinson's analysis.
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques30 != "YES" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques30 != "" && UserData.ques30 == "YES" && "text-green-700"}
                `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT-GIVEN">NOT-GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques30 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "passage E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This is supported by passage E, where it's noted that economists like William Niskanen drew on Parkinson's insights into bureaucratic growth to develop their own theories about the motivations behind bureaucratic expansion."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span>Niskanen felt that administrators were usually not motivated by status.
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques31 != "NO" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques31 != "" && UserData.ques31 == "NO" && "text-green-700"}
                `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT-GIVEN">NOT-GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques31 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "passage E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Passage E suggests the opposite; Niskanen theorized that bureaucrats often seek to increase their budgets and control over resources, which can enhance their status and influence within the organization. This indicates that status and power were indeed seen as motivating factors."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion'>32</span>Every time the UK cabinet grew to 20 members, between 1257 and 1955, it was reduced in size..
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques32 != "NOT-GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques32 != "" && UserData.ques32 == "NOT-GIVEN" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT-GIVEN">NOT-GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques32 != "NOT-GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT-GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "NOT-GIVEN",
                      hiddenWord: "passage Eeeeee",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passages do not explicitly state whether the UK cabinet was reduced in size each time it reached 20 members. It discusses historical growth patterns but doesn't provide specific details on reduction after reaching 20 members. so not given answer"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques33"><span className='numberOfQuestion'>33</span>Klimek believes there is a direct relationship between the size of a countries top committees and its level of development..
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques33 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques33 != "" && UserData.ques33 == "YES" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT-GIVEN">NOT-GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-4" && UserData.ques33 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "passage Eeeeee",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph H discusses Klimek's findings that larger executive bodies are correlated with lower measures of stability, literacy, economic power, and political stability, suggesting a relationship between committee size and a country's developmental indicators."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-2'>
        <h6 className=''>Questions 34 - 40 </h6> <br />
        <h6 className=''>Complete the summary with NO MORE THAN TWO WORDS from the text.</h6>  <br />
      </div>



      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques34">While Mr Fortunato thinks the Austrian group's finding regarding the
            <span className='numberOfQuestion'>34</span>
            <input type="text" name="ques34" id="ques34" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques34.match(/size/gi) && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques34 != "" && UserData.ques34 == "size" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques34.match(/size/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  size
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "size",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "(paragraph I): Refers to the number of members in a group, which is central to Mr. Fortunato's consideration of decision-making dynamics."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            of the group could prove the
            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques35.match(/conjecture/gi) && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques35 != "" && UserData.ques35 == "conjecture" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques35.match(/conjecture/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  conjecture
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "conjecture",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "(paragraph I): Parkinson's theory or hypothesis about how group size impacts decision-making effectiveness."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            from Parkinson to be true, he also believes that the

            <span className='numberOfQuestion'>36</span>
            <input type="text" name="ques36" id="ques36" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques36.match(/shape/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques36 != "" && UserData.ques36 == "shape" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques36.match(/shape/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  shape
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "shape",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "(paragraph I): Refers to the structure or interconnectivity of members within the group, which Mr. Fortunato believes influences decision-making processes."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of the group and the

            <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques37.match(/influence/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques37 != "" && UserData.ques37 == "influence" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques37.match(/influence/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  influence
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "influence",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " (paragraph I): The power dynamics and relationships among group members, which Mr. Fortunato suggests requires further study"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            they have over each other needs more

            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques38.match(/testing/gi) && "text-red-600"}
                     ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques38 != "" && UserData.ques38 == "testing" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques38.match(/testing/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  testing
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "testing",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " (paragraph I): Mr. Fortunato emphasizes the need for additional empirical research to validate theories about group dynamics and decision-making."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            . There is however one interesting

            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques39.match(/detail/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques39 != "" && UserData.ques39 == "detail" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques39.match(/detail/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  detail
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "detail",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "(paragraph I): A specific observation or finding regarding the challenges associated with having approximately eight members in a group, affecting decision-making efficiency."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            concerning the worst number of

            <span className='numberOfQuestion'>40</span>
            It cannot be said with certainty that rowers show a higher
            <input type="text" name="ques40" id="ques40" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-4" && !UserData.ques40.match(/decision makers/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-4" && UserData.ques40 != "" && UserData.ques40 == "decision makers" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-4" && !UserData.ques40.match(/decision makers/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  decision makers
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "decision makers",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "(paragraph I): Individuals responsible for making decisions within the group or committee, highlighting the practical implications of group dynamics on decision-making processes."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            to have in a group; the number being eight.</label>
        </div>
      </div>






    </section>
  )
}

export default Test9Panel2_Page2




