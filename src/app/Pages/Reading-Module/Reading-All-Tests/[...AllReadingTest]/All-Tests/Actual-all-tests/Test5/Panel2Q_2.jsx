"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>





function Test5Panel2Q_2({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  const [valueName, setValuename] = useState("");
  const [inputValues, setinputValues] = useState("")
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
        <h6 className=''>Questions 21-27</h6> <br />
        <h6 className=''>The text contains nine paragraphs, A-I.</h6> <br />
        <h6 className=''>Which paragraph contains the following information?.</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>organising information into similar groups
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques21 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques21 != "" && UserData.ques21 == "C" && "text-green-700"}
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

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques21 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C talks about creating collections and consolidating your notes, thoughts, ideas, and reference examples into collections. This involves organizing information into similar groups or collections for easier access and management."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span>what to do if you don't want to delete something completely
            <select name="ques22" id="ques22" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques22 != "G" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques22 != "" && UserData.ques22 == "G" && "text-green-700"}
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


            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques22 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "G",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph G discusses archiving old things. When information is no longer immediately useful but you don't want to delete it completely, you can archive it. This way, it is out of your way but still accessible if needed in the future."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span>avoiding too many sub-directories
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques23 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques23 != "" && UserData.ques23 == "E" && "text-green-700"}
            
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

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques23 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E advises keeping things flat and simple rather than nesting information in multiple layers of sub-directories. This method helps to keep information easily accessible and prevents it from being out of sight and out of mind."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques24"><span className='numberOfQuestion'>24</span>the two main categories of incoming information
            <select name="ques24" id="ques24" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques24 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques24 != "" && UserData.ques24 == "A" && "text-green-700"}
            
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques24 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A emphasizes the importance of separating reference from action. Incoming information can be divided into two main categories: action items (tasks and To-Dos) and reference materials."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques25"><span className='numberOfQuestion'>25</span>how to test that your system is working
            <select name="ques25" id="ques25" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques25 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques25 != "" && UserData.ques25 == "D" && "text-green-700"}
            
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques25 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D suggests putting things where you look for them as a way to test your system. The real test of an organizational system is whether you can intuitively find things where you expect them to be."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span>what you should do on a daily basis
            <select name="ques26" id="ques26" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques26 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques26 != "" && UserData.ques26 == "B" && "text-green-700"}
            
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques26 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph B recommends making a new To-Do list each day. Creating daily lists helps organize your key action items and manage your daily routines effectively."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>what to do if your list of items is very lengthy
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques27 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques27 != "" && UserData.ques27 == "F" && "text-green-700"}
            
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques27 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F suggests organizing long lists or folders using A-Z. When dealing with lengthy lists or large collections, arranging items alphabetically (A-Z) or numerically makes them easier to store and look up quickly."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 28 - 40</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?<br /><br />
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>Joe Swanberg makes romantic films for the cinema
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques28 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques28 != "" && UserData.ques28 == "FALSE" && "text-green-700"}
            
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques28 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph A explicitly states that Joe Swanberg's films are almost never shown in cinemas. Instead, they are distributed digitally through platforms like pay-television, video-on-demand, iTunes, and DVDs."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"> <span className='numberOfQuestion'>29</span>Chris Anderson’s prediction in 2006 proved to be incorrect.
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques29 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques29 != "" && UserData.ques29 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques29 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B discusses Chris Anderson's prediction from The Long Tail in 2006, stating that it has indeed come true with the internet increasing the availability and consumption of niche media products."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>30</span>Blockbusters are not suffering despite the range of entertainment now available
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques30 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques30 != "" && UserData.ques30 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques30 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E explains that blockbusters are benefiting from the wide array of entertainment choices available, as people tend to gravitate towards popular content amidst overwhelming options."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span>We7 and iTunes are beginning to make life harder for blockbusters.
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques31 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques31 != "" && UserData.ques31 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques31 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "There is no mention in the passage that We7 and iTunes are making life harder for blockbusters. Paragraph D discusses how technology helps in promoting blockbusters globally."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion'>32</span>Studio heads are less willing to make expensive films.
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques32 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques32 != "" && UserData.ques32 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-5" && UserData.ques32 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F discusses how studio heads are becoming more cautious and conservative in approving expensive film projects due to the competitive nature of the entertainment industry and the need to grab audience attention."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Complete the summary below. <br /> Questions 33 - 40</h6> <br />
        <h6 className=''>Choose NO MORE THAN ONE WORD from the text for each answer.</h6> <br />
      </div>



      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques33">
            Hitting the number two spot these days mean that your production has to compete with an abundance of(  <span className='numberOfQuestion'>33</span>
            <input type="text" name="ques33" id="ques33" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques33.match(/offerings/gi) && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques33 != "" && UserData.ques33 == "offerings" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques33.match(/offerings/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  offerings
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 33,
                        Ans1: "",
                        mainAns: "offerings",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph H: The term offerings refers to the multitude of products or content available from other media companies, contributing to the competitive landscape."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            ) from other media companies. For this reason, ( <span className='numberOfQuestion'>34</span>
            <input type="text" name="ques34" id="ques34" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques34.match(/conservatism/gi) && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques34 != "" && UserData.ques34 == "conservatism" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques34.match(/conservatism/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  conservatism
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "conservatism",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F: Conservatism in this context refers to the cautious approach adopted by publishers or media companies due to the fierce competition and the risk of being overshadowed by numerous other offerings."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            ) is the approach favoured by some publishers. This (
            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques35.match(/challenge/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques35 != "" && UserData.ques35 == "challenge" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques35.match(/challenge/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  challenge
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "challenge",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G: The challenge for media bosses refers to the difficulty of standing out in a market with expanded entertainment options, leading to the need to elevate their content standards."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>


            ) for media bosses could however be a benefit for consumers. The choice now available to us means they must (
            <span className='numberOfQuestion'>36</span>
            <input type="text" name="ques36" id="ques36" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques36.match(/raise/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques36 != "" && UserData.ques36 == "raise" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques36.match(/raise/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  raise
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "raise",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G: Media companies must raise their game to meet the demands of consumers who now have more choices, implying they need to improve their content quality or innovation."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            ) their standards. (

            <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques37.match(/Creative/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques37 != "" && UserData.ques37 == "Creative" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques37.match(/Creative/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Creative
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "Creative",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph H: Creative people are mentioned in the context of needing to adapt to both big-budget blockbusters and niche, small-budget projects, reflecting flexibility in genre and budget constraints."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            ) people will need to be more flexible and able to work with a range of (
            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques38.match(/genre/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques38 != "" && UserData.ques38 == "genre" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques38.match(/genre/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  genre
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "genre",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph H: The term genre refers to the different categories or types of entertainment content that creative individuals need to navigate and work within."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            ). Still people who make up the (
            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques39.match(/niche/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques39 != "" && UserData.ques39 == "niche" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques39.match(/niche/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  niche
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "niche",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph I: Niche markets are those specialized segments of the audience that have specific preferences not catered to by mainstream blockbusters."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            ) markets will not be happy as many companies strive to produce something (

            <span className='numberOfQuestion'>40</span>
            It cannot be said with certainty that rowers show a higher
            <input type="text" name="ques40" id="ques40" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-5" && !UserData.ques40.match(/guaranteed/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-5" && UserData.ques40 != "" && UserData.ques40 == "guaranteed" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-5" && !UserData.ques40.match(/guaranteed/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  guaranteed
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "guaranteed",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph I: The statement about something being guaranteed to please the mass market implies the notion of blockbuster content that appeals broadly, contrasting with niche products that cater to specific tastes."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            ) to please the mass market.</label>
        </div>
      </div>

    </section>
  )
}

export default Test5Panel2Q_2




