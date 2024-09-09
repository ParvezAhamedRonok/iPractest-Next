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
        <h6 className=''>Questions 27 - 32</h6> <br />
        <h6 className='mb-1'>Which paragraph contains</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>examples of problems with rule-based translations.
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques27 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques27 != "" && UserData.ques27 == "D" && "text-green-700"}
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
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques27 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D discusses the limitations and problems associated with rule-based translation systems. It talks about how these systems struggle with nuances, idiomatic expressions, and cultural contexts that are not easily captured by strict rules."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>why search web-sites may be useful.
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques28 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques28 != "" && UserData.ques28 == "E" && "text-green-700"}
              
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
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques28 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E explains how search websites can provide valuable data for improving translation systems by analyzing vast amounts of international language data available on the internet."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span>how a wide range of international language data was collected.
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques29 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques29 != "" && UserData.ques29 == "C" && "text-green-700"}
              
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
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques29 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C details the collection of a wide range of international language data through online sources, which is crucial for training and developing translation systems."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"><span className='numberOfQuestion'>30</span>the need for a system which is mobile.
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques30 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques30 != "" && UserData.ques30 == "F" && "text-green-700"}
              
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
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques30 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F discusses the need for more accessible and mobile translation systems, highlighting the demand for on-the-go translation capabilities in various situations."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span>details of an older, labor intensive translation system..
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques31 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques31 != "" && UserData.ques31 == "A" && "text-green-700"}
              
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
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques31 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A provides details about an older, labor-intensive translation system that relied on manual processes and human expertise before the advent of automated translation technologies."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion'>32</span>a prediction that translation systems will develop significantly in the future.
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques32 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques32 != "" && UserData.ques32 == "B" && "text-green-700"}
              
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
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques32 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B predicts that translation systems will continue to evolve significantly in the future, incorporating advancements in artificial intelligence and machine learning to enhance their accuracy and capabilities."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>




      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 33 - 37</h6> <br />
        <h6 className=''>Write NO MORE THAN TWO WORDS for each answer.</h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>

          <div>
            <label htmlFor="ques33"> <span className='numberOfQuestion'>33</span>The DARPA is working on a handheld device containing a
              <input type="text" name="ques33" id="ques33" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques33.match(/combination of/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques33 != "" && UserData.ques33 == "combination of" && "text-green-700"}
              
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques33.match(/combination of/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    combination of
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 33,
                          Ans1: "",
                          mainAns: "combination of",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This statement refers to ongoing efforts by DARPA (Defense Advanced Research Projects Agency) to develop advanced handheld translation devices. These devices integrate multiple software technologies to enhance translation capabilities, as discussed in Paragraph F of the text."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
              software.</label>
          </div>

          <div>
            <label htmlFor="ques34"> <span className='numberOfQuestion'>34</span> Currently many Iraqis communicate with American soldiers using basic
              <input type="text" name="ques34" id="ques34" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques34.match(/head/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques34 != "" && UserData.ques34 == "head" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques34.match(/head/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    head
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 34,
                          Ans1: "",
                          mainAns: "head",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Look at the paragraph - G first to last line. This is a huge improvement on the earlier one-way text-based translators used by American soldiers, says Alan Black, one of the researchers involved in the development of Babylon. For one thing, Iraqis can respond in their native language, rather than communicating through nods and shakes of the head, he says. Better still, Babylon is capable of translating completely novel sentences, rather than being limited to only a couple of hundred set phrases, as with the earlier systems."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
              movements</label>
          </div>

          <div>
            <label htmlFor="ques35"><span className='numberOfQuestion'>35</span>A major benefit of Babylon is that it goes beyond translating
              <input type="text" name="ques35" id="ques35" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques35.match(/set phrases/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques35 != "" && UserData.ques35 == "set phrases" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques35.match(/set phrases/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    set phrases
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 35,
                          Ans1: "",
                          mainAns: "set phrases",
                          hiddenWord: "Paragraph A",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Babylon is mentioned in Paragraph A, of the text. It is noted for its capability to handle complex linguistic structures and contexts beyond simple phrase translations, making it more versatile and effective for various translation needs."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>

          <div>
            <label htmlFor="ques36"><span className='numberOfQuestion'>36</span>Attempts are now being made to develop a statistical translation system which does not rely on
              <input type="text" name="ques36" id="ques36" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques36.match(/parallet texts/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques36 != "" && UserData.ques36 == "parallet texts" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques36.match(/parallet texts/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    parallet texts
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 36,
                          Ans1: "",
                          mainAns: "parallet texts",
                          hiddenWord: "Paragraph B",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph B discusses ongoing efforts to develop statistical translation systems that can understand languages without relying heavily on parallel texts. These systems utilize statistical methods and machine learning to infer translations based on patterns and data analysis."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>


          <div>
            <label htmlFor="ques37">  <span className='numberOfQuestion'>37</span>If statistical methods could understand a language's innate structure, a
              <input type="text" name="ques37" id="ques37" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques37.match(/universal translator/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques37 != "" && UserData.ques37 == "universal translator" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques37.match(/universal translator/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    universal translator
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 37,
                          Ans1: "",
                          mainAns: "universal translator",
                          hiddenWord: "Paragraph B",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This statement aligns with Paragraph B, which speculates on the potential of statistical methods to comprehend the fundamental structures of languages. Such understanding could potentially lead to the development of advanced universal translators capable of translating between languages more accurately and contextually."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
              could be developed.</label>
          </div>


        </div>

      </div>



      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6>Questions 38 - 40</h6>
        <h6 className='mb-2'>Match each name to the sentence</h6>
        <div className='ml-3'>
          <h6>A Alex Waibel </h6>
          <h6>B Shou-de Lin</h6>
          <h6>C Dr Black </h6>
          <h6>D Franz Och</h6>
        </div>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span>Sees a role for bilingual people in training the portable device.
            <select name="ques38" id="ques38" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques38 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques38 != "" && UserData.ques38 == "C" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques38 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "C (Alex Waibel)",
                      hiddenWord: "Alex Waibel",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Alex Waibel is mentioned in Paragraph F, discussing the development of handheld translation devices. He emphasizes the role of bilingual people in training these devices, suggesting their input is valuable for enhancing accuracy and functionality."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>Thinks the statistical approach and the approach taken by people are not so different..
            <select name="ques39" id="ques39" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques39 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques39 != "" && UserData.ques39 == "B" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques39 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "B (Franz Och)",
                      hiddenWord: "Franz Och",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Franz Och's perspective in Paragraph B aligns with the statement. He discusses how statistical methods used in translation systems can mimic the approach humans take in understanding and generating language, suggesting similarities between automated systems and human linguistic processes."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span>Believes it will be easier for people to watch foreign films in the future.
            <select name="ques40" id="ques40" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques40 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques40 != "" && UserData.ques40 == "A" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>

            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques40 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "A (Shou-de Lin)",
                      hiddenWord: "Shou-de Lin",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Shou-de Lin is mentioned in Paragraph F, where he predicts that future advancements in translation technology will make it easier for people to watch foreign films without language barriers. This aligns with the statement about improving accessibility to foreign language media"
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

export default Test9Panel2_Page2




