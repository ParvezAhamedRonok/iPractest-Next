"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test2Panel2_Page1({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  // let testItems = localStorage.getItem("ShowAnsByTest");
  // console.log(ReadingShowAnswer)

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
        <h6 className=''>QUESTIONS 1 - 7</h6>
        <h6 className=''>Match each heading to the Existing Paragraph</h6><br />
        <h6 className='text-justify pl-2'>
          i.	Food companies should benefit from additional regulation <br /> <br />
          ii.	The need for clarity between food and medicine<br /> <br />
          iii.	The main reason behind the shift towards functional foods<br /> <br />
          iv.	Similarities between the pharmaceutical and the food industries<br /> <br />
          v.	The food industry's case for less regulation<br /> <br />
          vi.	A new trend in food production<br /> <br />
          vii.	More transparency in the results of food research<br /> <br />
          viii.	Demands for food companies to be more accountable<br /> <br />
        </h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>Paragraph A
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold onFocusStyling ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques1 != "vi" && "text-red-500"}
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques1 != "" && UserData.ques1 == "vi" && "text-green-700"}
              
            `}
            >
              <option value=""></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques1 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "vi (A new trend in food production)",
                      hiddenWord: "A new trend in food production",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph describes how supermarket shelves are filled with products claiming various health benefits, indicating a growing trend towards functional foods. It showcases the increasing presence and variety of these products in the market."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>Paragraph B
            <select name="ques2" id="ques2"
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques2 != "iii" && "text-red-600"} 
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques2 != "" && UserData.ques2 == "iii" && "text-green-700"}
              
            onFocusStyling`}
              onChange={handleChange}>
              <option value="" ></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques2 != "iii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "iii (The main reason behind the shift towards functional foods)",
                      hiddenWord: "The main reason behind the shift towards functional foods",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph explains the primary motivation for food companies to promote functional foods: attracting health-conscious consumers and generating higher profits. It highlights that functional foods promise higher margins and faster growth, which is a major driver for companies like Nestlé."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3"> <span className='numberOfQuestion'>3</span>Paragraph C
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques3 != "viii" && "text-red-600"} onFocusStyling
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques3 != "" && UserData.ques3 == "viii" && "text-green-700"}
              
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques3 != "viii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "viii ( Demands for food companies to be more accountable)",
                      hiddenWord: " Demands for food companies to be more accountable",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph details how regulators are tightening rules around health claims made by food companies. It mentions actions taken by the FDA and the European Food Safety Authority to ensure that health claims are backed by scientific evidence, reflecting the demand for greater accountability from food companies."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>Paragraph D
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques4 != "v" && "text-red-600"} onFocusStyling
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques4 != "" && UserData.ques4 == "v" && "text-green-700"}
              
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques4 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "v (The food industry's case for less regulation)",
                      hiddenWord: "The food industry's case for less regulation",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph outlines the food industry's argument against stringent regulations, claiming they are excessive and could hinder innovation. The industry argues that such regulations will particularly disadvantage smaller firms and that companies making healthy improvements to their products should be praised."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>Paragraph E
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques5 != "ii" && "text-red-600"} onFocusStyling
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques5 != "" && UserData.ques5 == "ii" && "text-green-700"}
              
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques5 != "ii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "ii (The need for clarity between food and medicine)",
                      hiddenWord: "The need for clarity between food and medicine",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph discusses the importance of regulatory scrutiny for health claims and the potential risks of consumers viewing functional foods as substitutes for necessary drugs or lifestyle changes. It emphasizes the need to clearly differentiate between the benefits of foods and the functions of medicines."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>Paragraph F
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques6 != "vii" && "text-red-600"} onFocusStyling
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques6 != "" && UserData.ques6 == "vii" && "text-green-700"}
              
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques6 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "vii (More transparency in the results of food research)",
                      hiddenWord: "More transparency in the results of food research",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph highlights the necessity for food companies to register and publish all study results, including unfavorable ones, to ensure transparency. It draws from lessons learned in the pharmaceutical industry to argue for greater openness in food research."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>Paragraph G
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques7 != "i" && "text-red-600"} onFocusStyling
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques7 != "" && UserData.ques7 == "i" && "text-green-700"}
              
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

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques7 != "i"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "i (Food companies should benefit from additional regulation)",
                      hiddenWord: "Food companies should benefit from additional regulation",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph argues that increased scrutiny and regulation will benefit companies that invest in genuine scientific research while disadvantaging those making false claims. It suggests that companies prepared to meet high standards will thrive, similar to trends observed in the pharmaceutical industry."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>


      <div className='articles pl-[14px] sm:pl-[25px] mb-3 mt-4'>
        <h6 className=''>QUESTIONS 8 - 10</h6>
        <h6 className=''>Write TRUE, FALSE or NOT GIVEN.</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1 '>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>Food companies are investing in functional foods because they are healthier.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques8 != "FALSE" && "text-red-600"} onFocusStyling
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques8 != "" && UserData.ques8 == "FALSE" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques8 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B explains that the main reason behind the shift towards functional foods is not primarily because they are healthier, but because they appeal to health-conscious buyers and offer higher margins and faster growth for food companies."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques9">
            <span className='numberOfQuestion'>9</span>The FDA is going to revise the legislation on food labels next year.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques9 != "TRUE" && "text-red-600"} onFocusStyling
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques9 != "" && UserData.ques9 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques9 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C states that on October 20th, the FDA announced plans to overhaul the rules for nutritional claims on food labels and issue new standards early next year, indicating an upcoming revision of the legislation."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10">
            <span className='numberOfQuestion'>10</span>The food industry welcomes the regulators new demands.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques10 != "FALSE" && "text-red-600"} onFocusStyling
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques10 != "" && UserData.ques10 == "FALSE" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques10 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D highlights that many in the food industry are against the new regulations, arguing that they are heavy-handed and could stifle innovation, indicating that the food industry does not welcome the new demands by regulators."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />

      <div className='articles pl-[14px] sm:pl-[25px] mb-3 mt-3'>
        <h6 className=''>QUESTIONS 11 - 13</h6>
        <h6 className=''>Write NO MORE THAN TWO WORDS for each answer.</h6> <br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>For many people it is now difficult to

            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques11.match(/tell whether/gi) && "text-red-300"} onFocusStyling
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques11 != "" && UserData.ques11 == "tell whether" && "text-green-700"}
              `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques11.match(/tell whether/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    tell whether
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 11,
                          Ans1: "",
                          mainAns: "tell whether",
                          hiddenWord: "Paragraph E",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This statement is supported by Paragraph E, which states, Ordinary folk cannot tell whether health claims made by food marketers are scientifically valid, so there is a case for regulatory scrutiny of such claims. This indicates that consumers find it challenging to discern the truthfulness of the health claims made by food producers, necessitating regulatory oversight to ensure accuracy and reliability."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            the information given by food producers is true or not.
          </label>


        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques12"> <span className='numberOfQuestion'>12</span>New FDA legislation forces companies to put both healthy and unhealthy
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques12.match(/components/gi) && "text-red-300"} onFocusStyling
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques12 != "" && UserData.ques12 == "components" && "text-green-700"}
              `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques12.match(/components/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    components
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 12,
                          Ans1: "",
                          mainAns: "components",
                          hiddenWord: "Paragraph F",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: " This statement is supported by Paragraph F, which states, To its credit, the FDA recently proposed rules that would force food companies to publish all the important components of their products on the front of their packages, rather than picking out the healthy ones and keeping quiet about the fat, salt, and sugar. This indicates that the new FDA legislation requires food companies to display both healthy and unhealthy components on the front of their packaging, ensuring transparency about the nutritional content of their products."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            on the front of their products.
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques13"> <span className='numberOfQuestion'>13</span>The food industry must accept the same level of.
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques13.match(/scrutiny/gi) && "text-red-300"} onFocusStyling
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques13 != "" && UserData.ques13 == "scrutiny" && "text-green-700"}
              `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques13.match(/scrutiny/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    scrutiny
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 13,
                          Ans1: "",
                          mainAns: "components",
                          hiddenWord: "Paragraph G",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This statement is supported by Paragraph G, which states, If food companies wish to make the sorts of claims about their products that pharmaceutical companies do, they must be prepared to submit to similar scrutiny. This indicates that for the food industry to make claims akin to those made by the pharmaceutical industry, it must undergo the same rigorous evaluation and regulatory scrutiny to ensure the validity of those claims."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            as the pharmaceutical industry if it wishes to
            make similar claims.

          </label>
        </div>
      </div>

    </section>
  )
}

export default Test2Panel2_Page1



