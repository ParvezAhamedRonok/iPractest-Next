"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>


function Panel2_Q2({ handleChange, UserData }) {
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
        <h6 className=''>Reading Passage-3</h6>
        <h6 className=''>Questions 27 - 33</h6> <br />
        <label className='mb-1'>Do the following statements agree with the information given in Reading Passage 3? <br />
          In boxes 27-33 on your answer sheet, write</label> <br /> <br />
        <label className=''>TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-5">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span> People first referred to Leonardo da Vinci as a genius 500 years ago.
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques27 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques27 != "" && UserData.ques27 == "NOT GIVEN" && "text-green-700"}
           
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques27 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "no correlation between him being called a genius and 500 years",
                      hiddenWord2: "",
                      keyWords: "first referred, Leonardo, genius,  500 years ago.",
                      explain: " Let’s have a look 1st paragraph – first to fourth line. ** “The word ‘genius’ is universally associated with the name of Leonardo da Vinci. A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities. Five hundred years have passed since Leonardo died in his home at Chateau du Clos Luce, outside Tours, France.” ** Here, It is not given that Leonardo da Vinci was first called a genius 500 years ago. But he died 500 years ago. ** There is no correlation between him being called a genius and 500 years."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>The current climate crisis is predicted to cause more deaths than the plague.
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques28 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques28 != "" && UserData.ques28 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques28 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "but it is not given/predicted that these deaths will be more than deaths caused by plague",
                      hiddenWord2: "",
                      keyWords: "climate crisis, predicted, more deaths, plague.",
                      explain: "Let’s have a look 2nd paragraph, first to fourth line. ** “The Renaissance marked ……… after the spread of the plague in the 14 century, which cause a global crisis resulting in some 200 million deaths across Europe and Asia. Today, the world is on the cusp of climate crisis, which is predicted to cause widespread displacement, extinctions and death, if left unaddressed.” ** Here, The plague caused 200 million deaths in the 14th century. ** The climate crisis will also cause death, but it is not given/predicted that these deaths will be more than deaths caused by plague."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span>Some of the challenges we face today can be compared to those of earlier times.
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques29 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques29 != "" && UserData.ques29 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques29 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Similar to challenges caused by the plague",
                      hiddenWord2: "earlier time problems",
                      hiddenWord3: "the answer is true",
                      keyWords: "challenges, compared, earlier times.",
                      explain: "Let’s have a look 2nd paragraph, first to fourth line.“The Renaissance marked ………Europe and Asia. Today, the world is on the cusp of climate crisis, which is predicted to cause widespread displacement, extinctions and death, if left unaddressed.”Here, Similar to challenges caused by the plague, the climate crisis will also cause such problems (widespread displacement, extinctions and death). ** Now look at 3rd paragraph, from the first line, ** Around 1486 – after a pestilence that killed half the population in Milan, Italy – Leonardo turned his thoughts to urban planning problems. ** Here, pestilence = earlier time problems , urban planning problems = modern time problem ** Hence the answer is true."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30">  <span className='numberOfQuestion'>30</span> Leonardo da Vinci’s ‘ideal city’ was constructed in the 15th century.
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques30 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques30 != "" && UserData.ques30 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques30 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "it could not be completed",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " Ideal city, constructed, 15th century",
                      explain: "Let’s have a look 3rd paragraph, First to third line. ** “Around 1486 – after a ……Following a typical Renaissance trend, he began to work on an ‘Ideal City’ project, which – due to its excessive costs – would remain unfulfilled.”** Here, Leonardo da Vinci started the work to construct the Ideal City, but due to the high cost, it could not be completed. ** So, false."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span>Poor town planning is a major contributor to climate change.
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques31 != "TRUE" && "text-red-600"}
                  ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques31 != "" && UserData.ques31 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques31 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "poor urban planning",
                      hiddenWord2: "major contributor",
                      hiddenWord3: "",
                      keyWords: "Poor town planning, major contributor, climate change.",
                      explain: "Let’s have a look 3rd paragraph, third & fourth line. ** “Yet given that unsustainable urban models are a key cause of global climate change today,” ** Here , ** Unsustainable urban planning = poor urban planning. ** Key cause = major contributor."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"> <span className='numberOfQuestion'>32</span>In Renaissance times, local people fought against the changes to Pienza and Ferrara.
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques32 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques32 != "" && UserData.ques32 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques32 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "There is not information",
                      hiddenWord2: "whether or not people were against",
                      hiddenWord3: "",
                      keyWords: " local people, fought, against, Pienza and Ferrara",
                      explain: "Let’s have a look 4th paragraph, third to sixth line. ** “The rigour …Renaissance men pushed forward large-scale urban projects in Italy , such as the reconfiguration of the town of Pienza and the expansion of the city of Ferrara.” ** Here, There is not information about whether or not people were against the reconfiguration of the town of Pienza and the expansion"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques33"><span className='numberOfQuestion'>33</span>Leonardo da Vinci kept a neat, organised record of his designs.
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques33 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques33 != "" && UserData.ques33 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques33 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "disorganized",
                      hiddenWord2: "the answer is false",
                      hiddenWord3: "",
                      keyWords: "kept a neat, organized record, designs.",
                      explain: " Let’s have a look 5th paragraph, first & second line. ** “first & second line. It is not easy to identify a coordinated vision of Leonardo’s Ideal city because of his disordered way of working with notes and sketches.”**   Here, disordered = disorganized ** So the answer is false."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 34- 40</h6> <br />
        <label className=''>Complete the summary below..</label>
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.</label>
        <label className='mb-3'>Write your answers in boxes <span className='font-bold'>34-40</span> on your answer sheet.</label>
        <label className='mb-3'>Leonardo da Vinci’s ideal city</label>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-4'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques34">A collection of Leonardo da Vinci’s paperwork reveals his design of a new city beside the Ticino River. This was to provide better
            <span className='numberOfQuestion'>34</span>
            <input type="text" name="ques34" id="ques34" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques34.match(/transport/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques34 != "" && UserData.ques34 == "transport" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques34.match(/transport/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  transport
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "transport",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Ticino river, trade, less polluted environment",
                        explain: "Look at 5th Paragraph, fifth & sixth line. ** “He designed the city for the easy transport of goods and clean urban spaces, and he wanted a comfortable and spacious city, with well-ordered streets and architecture.” ** Here, ** comfortable and spacious city = less polluted environment"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>




          <label htmlFor="ques35">for trade and a less polluted environment. Although Leonardo da Vinci’s city shared many of the ideals of his time, some of his innovations were considered unconventional in their design. They included features that can be seen in some tower blocks today, such as
            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques35.match(/staircases/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques35 != "" && UserData.ques35 == "staircases" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques35.match(/staircases/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  staircases
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "staircases",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " tower, blocks, today, exterior",
                        explain: "Look at 6th Paragraph, third line. ** “Leonardo wanted the city to be built on several levels, linked with vertical outdoor staircases.”**  Here, outdoor = exterior"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>

          <label htmlFor="ques36"> on the exterior of a building.Leonardo da Vinci wasn’t only an architect. His expertise in
            <span className='numberOfQuestion'>36</span>
            <input type="text" name="ques36" id="ques36" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques36.match(/engineering/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques36 != "" && UserData.ques36 == "engineering" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques36.match(/engineering/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  engineering
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "engineering",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "architect, evident, artificial canals",
                        explain: "Look at 7th Paragraph, second & third line. ** “But the true originality of Leonardo’s vision was its fusion of architecture and engineering. Leonardo designed extensive hydraulic plants to create artificial canals throughout the city.” ** Vinci was not only an architect but also an engineer."
                      }))
                    }}
                  >Exp..</span>
                </div>


                : ""}
            </i>

          </label>

          <label htmlFor="ques37"> was evident in his plans for artificial canals within his ideal city. He also believed that the height of houses should relate to the width of streets in case earthquakes occurred. The design of many cities in Italy today follows this
            <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques37.match(/rule/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques37 != "" && UserData.ques37 == "rule" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques37.match(/rule/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  rule
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "rule",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "height of house, earthquake, Italy, many cities",
                        explain: "Look at 7th Paragraph, last two lines. ** “Leonardo also thought that the width of the streets ought to match the average height of the adjacent houses: a rule still followed in many contemporary cities across Italy, to allow access to sun and reduce the risk of damage from earthquakes.” "
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>

          <label htmlFor="ques38"> .While some cities from
            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques38.match(/Roman/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques38 != "" && UserData.ques38 == "Roman" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques38.match(/Roman/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Roman
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "Roman",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " some cities, found, Leonardo’s designs, death",
                        explain: "Look at 8th Paragraph, first and second line. ** “Although some of these features existed in roman cities, before Leonardo’s drawings there had never been a multi-level,” ** Here, existed = found "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>

          <label htmlFor="ques39">times have aspects that can also be found in Leonardo’s designs, his ideas weren’t put into practice until long after his  death.
            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques39.match(/Paris/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques39 != "" && UserData.ques39 == "Paris" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques39.match(/Paris/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Paris
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "Paris",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "redesigned, 19th century",
                        explain: "Look at 8th Paragraph, third-last line. ** “The subdivision ….… Georges-Eugene Haussmann’s renovation Paris under emperor Napoleon III between 1853 and 1870.” **   Here, renovation = redesigned **    between 1853 and 1870 = 19th century"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>

          <label htmlFor="ques40">is one example of a city that was redesigned in the 19th century in the way that Leonardo had envisaged. His ideas are also relevant to today’s world, where building
            <span className='numberOfQuestion'>40</span>
            <input type="text" name="ques40" id="ques40" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques40.match(/outwards/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques40 != "" && UserData.ques40 == "outwards" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques40.match(/outwards/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  outwards
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "outwards",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "today’s world, best approach",
                        explain: "Look at 9th Paragraph, second & third line. ** “Many scholars think that the compact city, built upwards instead of outwards, integrated with nature (especially water systems), with efficient transport infrastructure, could help modem cities become more efficient and sustainable.” ** Make tall buildings. That was the idea of Vinci. And it is a good idea for making cities. ** On the other hand, make building outward is not a good approach."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            no longer seems to be the best approach.</label>
        </div>

      </div>








    </section>
  )
}

export default Panel2_Q2




