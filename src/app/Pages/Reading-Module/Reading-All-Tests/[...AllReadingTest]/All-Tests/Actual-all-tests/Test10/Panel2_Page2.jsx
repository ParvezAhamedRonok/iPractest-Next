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

      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 22-29</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?</h6>
        <h6>TRUE - if the statement agrees with the information </h6>
        <h6>FALSE - if the statement contradicts the information </h6>
        <h6>NOT GIVEN - iif there </h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques22">  <span className='numberOfQuestion'>22</span>
            The club has long-term dormitory accommodation
            <select name="ques22" id="ques22" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques22 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques22 != "" && UserData.ques22 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques22 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "You’ll learn how to work with a team",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage states, long and short stays welcome, indicating that long-term accommodation is available."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span>
            Membership must be renewed monthly.
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques23 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques23 != "" && UserData.ques23 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques23 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "The passage mention",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage mentions, You can join for as little as one month and for up to one year at a time, indicating that membership does not have to be renewed monthly; it can be for longer periods."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques24"> <span className='numberOfQuestion'>24</span>
            The club provides subsidised restaurant meals.
            <select name="ques24" id="ques24" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques24 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques24 != "" && UserData.ques24 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques24 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "The passage mention",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "There is no information in the passage about the club providing subsidised restaurant meals."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques25"><span className='numberOfQuestion'>25</span>The club is open to non-members on Tuesday evenings
            <select name="ques25" id="ques25" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques25 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques25 != "" && UserData.ques25 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques25 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "The passage mention",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage states, The best way to check out all we have on offer is to drop in any Tuesday evening between 7.15 pm and 8.30 pm for Open House in the Club Room, indicating that non-members can visit on Tuesday evenings."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span>STA Travel help finance the Students Adviser
            <select name="ques26" id="ques26" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques26 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques26 != "" && UserData.ques26 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques26 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "The passage mention",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage mentions, Thanks to the support of STA Travel, which indicates that STA Travel helps finance the Students Adviser."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>The services of the Students Adviser are free to all club members.
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques27 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques27 != "" && UserData.ques27 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques27 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "The passage mention",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage does not provide any information about whether the services of the Students Adviser are free to all club members."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"> <span className='numberOfQuestion'>28</span>You must make an appointment to see the Students Adviser.
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques28 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques28 != "" && UserData.ques28 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques28 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "The passage mention",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "he passage does not specify whether an appointment is necessary to see the Students Adviser."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"> <span className='numberOfQuestion'>29</span>There will be a surcharge for accommodation over the Christmas period
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques29 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques29 != "" && UserData.ques29 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques29 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "The passage mention",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage states, the House will be offering reduced accommodation rates for students wishing to spend a few days in London over Christmas, indicating that there is no surcharge, but rather a discount"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 30-36</h6> <br />
        <h6 className=''>Complete the summary below of the first two paragraphs of the Reading Passage.</h6>
        <h6 className='mb-4'>Choose ONE OR TWO WORDS from the Reading Passage for each answer.</h6>
        <h6 className='mb-4'>Write your answers in blanks 30-36</h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques30">
            <span className='numberOfQuestion'>30</span>
            Not all
            <input type="text" name="ques30" id="ques30" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques30.match(/glass/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques30 != "" && UserData.ques30 == "glass" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques30.match(/glass/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  glass
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 30,
                        Ans1: "",
                        mainAns: "glass",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Due to varying chemical compositions and colors, glass must be separated and cleaned before recycling. Some types of glass cannot be recycled into other products."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            can be used again and made into other objects. This must be, separated and cleaned before recycling and if any of the different types of glass are mixed, they can

            <span className='numberOfQuestion'>31</span>
            <input type="text" name="ques31" id="ques31" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques31.match(/contaminate/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques31 != "" && UserData.ques31 == "contaminate" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques31.match(/contaminate/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  contaminate
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 31,
                        Ans1: "",
                        mainAns: "contaminate",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Mixing different types of glass can contaminate large batches of recycled material, making it less usable for manufacturing new products."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            large amounts of the product. Transparent glass is often used by many


            <span className='numberOfQuestion'>32</span>
            <input type="text" name="ques32" id="ques32" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques32.match(/Marketing professionals/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques32 != "" && UserData.ques32 == "Marketing professionals" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques32.match(/Marketing professionals/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Marketing professionals
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 32,
                        Ans1: "",
                        mainAns: "Marketing professionals",
                        hiddenWord: "Limestone",
                        hiddenWord2: "sodium carbonate",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Transparent glass is favored because it is visually appealing and allows consumers to see the product inside, which can enhance sales."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            as they are pleasing to look at and easy to use when trying to sell products to customers. This type of glass is made from three different materials combined, including;

            <span className='numberOfQuestion'>33</span>
            <input type="text" name="ques33" id="ques33" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques33.match(/silica/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques33 != "" && UserData.ques33 == "silica" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques33.match(/silica/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  silica
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 33,
                        Ans1: "",
                        mainAns: "silica",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "One of the primary ingredients in glassmaking, derived from sand, providing structure."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>


            <span className='numberOfQuestion'>34</span>
            <input type="text" name="ques34" id="ques34" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques34.match(/soda ash/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques34 != "" && UserData.ques34 == "soda ash" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques34.match(/soda ash/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  soda ash
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "soda ash",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Also known as sodium carbonate, it lowers the melting point of silica, making it easier to form glass."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            <label htmlFor="ques34">&</label>

            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques35.match(/Limestone/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques35 != "" && UserData.ques35 == "Limestone" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques35.match(/Limestone/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Limestone
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "Limestone",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Adds calcium oxide, which stabilizes the chemical properties of the glass during manufacturing."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            Using see-through containers for some items may cause them to deteriorate, so more often
            <span className='numberOfQuestion'>36</span>
            <input type="text" name="ques36" id="ques36" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques36.match(/Coloured/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques36 != "" && UserData.ques36 == "Coloured" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques36.match(/Coloured/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Coloured
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "Coloured",
                        hiddenWord: "For example",
                        hiddenWord2: "Brown glas",
                        hiddenWord3: "Green glass",
                        keyWords: "",
                        explain: " Colored glass, such as brown or green variants, is often used instead of clear glass for items that may degrade when exposed to light. **  For example:  ** Brown glass: Contains nickel, sulfur, and carbon to protect contents from sunlight, commonly used for beer bottles. ** Green glass: Contains additives like iron, chromium, or copper, which help maintain product freshness, often used for wine bottles."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            glass is used.
          </label>
        </div>

      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 37-40</h6> <br />
        <h6 className=''>Look at paragraphs C, D, E and F and, using the information in the passage, complete the flow chart below.</h6>
        <h6 className='mb-4'>Write your answers in blanks 37-41.</h6>
        <h6 className='mb-4'>Use ONE OR TWO WORDS for each answer</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques37">The glass is taken to a bank
            <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques37.match(/manufacturing/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques37 != "" && UserData.ques37 == "manufacturing" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques37.match(/manufacturing/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  manufacturing
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "manufacturing",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The glass is taken to a manufacturing or recycling plant where it is processed."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            or recycling plant where it is broken up into smaller pieces known as "cullet."

            The cullet is crushed, sorted, cleaned and prepared to be mixed with other
            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques38.match(/Raw material/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques38 != "" && UserData.ques38 == "Raw material" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques38.match(/Raw material/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Raw material
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "Raw material",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The cullet, which is broken up glass, is crushed, sorted, cleaned, and prepared to be mixed with other materials."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>


            When the glass is produced from virgin materials, it requires high
            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques39.match(/temperature/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques39 != "" && UserData.ques39 == "temperature" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques39.match(/temperature/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  temperature
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "temperature",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "When glass is produced from virgin materials, it requires high temperatures to melt and combine all the ingredients."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            to melt and combine all the ingredients

            Since cullet melts at a lower temperature, the more of it you add to a batch of
            <span className='numberOfQuestion'>40</span>
            <input type="text" name="ques40" id="ques40" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && !UserData.ques40.match(/Raw material/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques40 != "" && UserData.ques40 == "Raw material" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && !UserData.ques40.match(/Raw material/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Raw material
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "Raw material",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Since cullet melts at a lower temperature compared to virgin materials, adding more cullet to a batch reduces the energy needed to melt the glass."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            the less energy needed to melt items
          </label>

        </div>

      </div>


    </section>
  )
}

export default Test9Panel2_Page2




