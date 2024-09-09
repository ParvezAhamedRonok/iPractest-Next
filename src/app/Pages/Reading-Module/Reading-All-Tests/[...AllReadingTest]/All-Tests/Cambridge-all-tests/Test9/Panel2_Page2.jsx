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

      <div className='Titles pl-[10px] sm:pl-[25px] mb-3'>
        <h5 className=''>Reading Passage-2</h5>
        <h6 className=''>Questions 14-20</h6> <br />
        <label className='mb-1'>Reading Passage 2 has seven paragraphs, A-G.</label>
        <label className=''>Choose the correct heading for each paragraph from the list of headings below. <br /> <br />
          Write the correct number, i-ix, in boxes 14-20 on your answer sheet.</label> <br /> <br />
        <h6 className='mb-2'>List of Headings</h6> <br />
        <div className='p-3 border-2 rounded border-gray-300 w-auto'>
          <p><span className='font-bold mr-2'>i</span> The areas and artefacts within the pyramid itself</p>
          <p><span className='font-bold mr-2'>ii</span> A difficult task for those involved</p>
          <p><span className='font-bold mr-2'>iii</span>A king who saved his people</p>
          <p><span className='font-bold mr-2'>iv</span>  A single certainty among other less definite facts</p>
          <p><span className='font-bold mr-2'>v</span>An overview of the external buildings and areas</p>
          <p><span className='font-bold mr-2'>vi</span>A pyramid design that others copied</p>
          <p><span className='font-bold mr-2'>vii</span>An idea for changing the design of burial structures</p>
          <p><span className='font-bold mr-2'>viii</span>An incredible experience despite the few remains</p>
          <p><span className='font-bold mr-2'>ix</span>The answers to some unexpected questions</p>
        </div>
        <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>Paragraph-A
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques14 != "iv" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques14 != "" && UserData.ques14 == "iv" && "text-green-700"}
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
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques14 != "iv"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iv
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "iv",
                      mainAns: "(A single certainty among other less definite facts)",
                      hiddenWord: "there is no question that",
                      hiddenWord2: "other less definite facts",
                      hiddenWord3: "",
                      keyWords: "Paragraph A ",
                      explain: "The answer to this question can be found in lines 4-7 of paragraph A. ** Here, the writer of the text says, “ . .. .. . The evolution of the pyramid form has been written and argued about for centuries. ** However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.” ** Here, The evolution of the pyramid form has been written and argued about for centuries = other less definite facts, ** there is no question that = a single certainty."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>



        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques15"> <span className='numberOfQuestion'>15</span>Paragraph-B
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques15 != "vii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques15 != "" && UserData.ques15 == "vii" && "text-green-700"}
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
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques15 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "vii",
                      mainAns: "(An idea for changing the design of burial structures)",
                      hiddenWord: "An idea for changing the design of burial structures",
                      hiddenWord2: "conceived of building a taller",
                      hiddenWord3: "",
                      keyWords: "Paragraph B ",
                      explain: "In paragraph B, the writer says in lines 2-7, “ . .. .. Prior to Djoser’s reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser’s main official, whose name was Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid……” ** Here, covered underground passages where the deceased person was buried = burial structures, ** conceived of building a taller, more impressive tomb = An idea for changing the design of burial structures"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>Paragraph-C
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques16 != "ii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques16 != "" && UserData.ques16 == "ii" && "text-green-700"}
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
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques16 != "ii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "ii",
                      mainAns: " (A difficult task for those involved)",
                      hiddenWord: "for those involved",
                      hiddenWord2: "a difficult task",
                      hiddenWord3: "",
                      keyWords: "Paragraph C ",
                      explain: "In lines 6-7 of Paragraph C, the author of the text says, “ . . .. . The weight of the enormous mass was a challenge for the builders, . .. … ..”** Here, a challenge = a difficult task, **   for the builders = for those involved."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>Paragraph-D
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques17 != "v" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques17 != "" && UserData.ques17 == "v" && "text-green-700"}
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
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques17 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "v",
                      mainAns: " (An overview of the external buildings and areas)",
                      hiddenWord: "the overview of the external buildings and areas",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Paragraph D ",
                      explain: "The first few lines explain the overview of the external buildings and areas of the Step Pyramid, “When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a te ** "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"> <span className='numberOfQuestion'>18</span>Paragraph-E
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques18 != "i" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques18 != "" && UserData.ques18 == "i" && "text-green-700"}
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
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques18 != "i"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "i",
                      mainAns: "(The areas and artefacts within the pyramid itself)",
                      hiddenWord: "lines 1-3 describes the areas within the pyramid",
                      hiddenWord2: "Over 40,000",
                      hiddenWord3: "",
                      keyWords: "Paragraph E ",
                      explain: " Again, the first few lines of Paragraph E give us answer to this question. Take a look at lines 1-6 where the author writes, “The burial chamber of the tomb, where the king’s body was laid to rest, was dug beneath the base of the pyramid, surrounded by a vast maze of long tunnels that had rooms off them to discourage robbers. One of the most mysterious discoveries found inside the pyramid was a large number of stone vessels. Over 40,000 of these vessels, of various forms and shapes, were discovered in storerooms off the pyramid’s underground passages. . .. .. . . .” ** Here, lines 1-3 describes the areas within the pyramid, ** and lines 3-6 explains the artefacts found there."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"> <span className='numberOfQuestion'>19</span>Paragraph-F
            <select name="ques19" id="ques19" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques19 != "viii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques19 != "" && UserData.ques19 == "viii" && "text-green-700"}
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
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques19 != "viii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "viii",
                      mainAns: "(An incredible experience despite the few remains)",
                      hiddenWord: "an incredible experience",
                      hiddenWord2: "to astonish and amaze the archaeologists",
                      hiddenWord3: "",
                      keyWords: "Paragraph F ",
                      explain: " Lines 2-6 of Paragraph F describes the answer for us. ** Here, the writer says, “ . . .. . Djoser’s grave goods, and even the body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. ** There was enough left throughout the pyramid and its complex, however, to astonish and amaze the archaeologists who excavated it.” ** Here, all archaeologists found were a small number of his valuables overlooked by the thieves = the few remains, ** to astonish and amaze the archaeologists = an incredible experience."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques20"> <span className='numberOfQuestion'>20</span>Paragraph-G
            <select name="ques20" id="ques20" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques20 != "vi" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques20 != "" && UserData.ques20 == "vi" && "text-green-700"}
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
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques20 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "vi",
                      mainAns: " (A pyramid design that others copied)",
                      hiddenWord: "the design of the Step Pyramid of Djoser was copied by others",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Paragraph G ",
                      explain: " In paragraph G, have a close look at the final lines, where the writer says, “ . . .. . The Step Pyramid was a revolutionary advance in architecture and became the archetype which all the other great pyramid builders of Egypt would follow.” ** Here, became the archetype which all the other great pyramid builders of Egypt would follow = the design of the Step Pyramid of Djoser was copied by others."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
      </div> <br />



      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 21-24</h6> <br />
        <label className=''>Complete the notes below.<br /><br />
          Choose ONE WORD ONLY from the passage for each answer.<br /><br />
          Write your answers in boxes 21-24 on your answer sheet.</label><br /><br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <h6 className='mt-1 mb-3'>The Step Pyramid of Djoser</h6>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques21">The complex that includes the Step Pyramid and its surroundings is considered to be as big as an Egyptian </label>

          <span className='numberOfQuestion'>21</span>
          <input type="text" name="ques21" id="ques21" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques21.match(/city/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques21 != "" && UserData.ques21 == "city" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques21.match(/city/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                city
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "city",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "complex, Step Pyramid, surroundings, considered to be, as big as, Egyptian, of the past.",
                      explain: "In Paragraph D, lines 2-3 say, “ . .. . . The complex in which it was built was the size of a city in ancient Egypt .. . .. .. ..” ** Here, ancient = past."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>


          <p> of the past. The area outside the pyramid included accommodation that was occupied by </p>

          <span className='numberOfQuestion'>22</span>
          <input type="text" name="ques22" id="ques22" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques22.match(/priests/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques22 != "" && UserData.ques22 == "priests" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques22.match(/priests/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                priests
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "priests",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "area, outside the pyramid, accommodation, occupied by, many other buildings and features",
                      explain: " Lines 3-4 of Paragraph D say, “ . . .. and included a temple, courtyards, shrines, and living quarters for the priests. .. .” ** Here, a temple, courtyards, shrines = many other buildings and features,** living quarters for = accommodation that was occupied by."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>


          <p> along with many other buildings and features.
            A wall ran around the outside of the complex and a number of false entrances were built into this. In addition, a long</p>

          <span className='numberOfQuestion'>23</span>
          <input type="text" name="ques23" id="ques23" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques23.match(/trench/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques23 != "" && UserData.ques23 == "trench" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques23.match(/trench/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                trench
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "trench",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "wall, ran around, outside, complex, a number of false entrances, built into this, in addition, long, encircled, wall",
                      explain: "  Lines 4-7 of Paragraph D say, “ .. .. .. It covered a region of 16 hectares and was surrounded by a wall 10.5 meters high. The wall had 13 false doors cut into it with only one true entrance cut into the south-east corner; the entire wall was then ringed by a trench 750 meters long and 40 meters wide. … .. .” ** Here, false doors = false entrances, ringed = encircled."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> encircled the wall. As a result, any visitors who had not been invited were cleverly prevented from entering the pyramid grounds unless they knew the</p>

          <span className='numberOfQuestion'>24</span>
          <input type="text" name="ques24" id="ques24" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques24.match(/location/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques24 != "" && UserData.ques24 == "location" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques24.match(/location/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                location
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "location",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "as a result, any visitors, not been invited, cleverly, prevented from entering, pyramid grounds, unless, knew, real entrance",
                      explain: "Lines 7-9 of Paragraph D says, “ . . .. The false doors and the trench were incorporated into the complex to discourage unwanted visitors. If someone wished to enter, he or she would have needed to know in advance how to find the location of the true opening in the wall. .. .” ** Here, to discourage unwanted visitors = any visitors . .. . .. . were cleverly prevented to entering, true opening = real entrance."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> of the real entrance.</p>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 25 and 26</h6> <br />
        <label className=''>Choose TWO letters <br /><br />
          Chooose  the correct letters in boxes 25 and 26 on your answer sheet.</label><br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <label className='mt-1 mb-1'><span className='font-bold'>Which TWO</span> of the following points does the writer make about King Djoser?</label>

        <div className='mb-3'>
          <label htmlFor="ques25 flex gap-2"><span className='numberOfQuestion mr-1 mb-2'>25</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques25 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "B",
                      mainAns: "(There is disagreement concerning the length of his reign)",
                      hiddenWord: "This means there is disagreement concerning the length of King Djoser’s reign",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "TWO, about King Djose",
                      explain: "First, we find some points made about King Djoser’s reign in Paragraph B. ** In lines 7-9, the writer of the text says, “ . . .. .. Djoser is thought to have reigned for 19 years, but some historians and scholars attribute a much longer time for his rule, owing to the number and size of the monuments he built.”** This means there is disagreement concerning the length of King Djoser’s reign.** B (There is disagreement concerning the length of his reign)"
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
              Initially he had to be persuaded to build in stone rather than clay.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques25' />
              There is disagreement concerning the length of his reign.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques25' />
              He failed to appreciate Imhotep’s part in the design of the Step Pyramid.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques26"><span className='numberOfQuestion mr-1 mb-2'>26</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques26 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "A",
                      mainAns: "few of his possessions were still in his tomb when archaeologists found it)",
                      hiddenWord: "This means a few of King Djoser’s possessions were still in his tomb when archaeologists found it",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "TWO, about King Djose",
                      explain: "Then, in Paragraph F lines 2-4 say, “ . . .. Djoser’s grave goods, and even his body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. .. .. .” ** So, the answers are: (in any order) ** A(A few of his possessions were still in his tomb when archaeologists found it)"
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
              A few of his possessions were still in his tomb when archaeologists found it..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques26' />
              He criticised the design and construction of other pyramids in Egypt.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques26' />
              how high literacy rates helped a country industrialise.
            </label>
            </div>
          </div>
        </div>

      </div> <br />





      {/* Akhno baki nicher kaj ses kora */}
      {/* for Passage-3 all Questions--- */}
      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-5'>
        <h5>Reading Passage-3 </h5>
        <h6 className=''>Questions 27-30</h6> <br />
        <label className=''>Choose the correct letter, <span className='font-bold'>A, B, C or D</span>.<br /><br />Choose the correct letter in boxes <span className='font-bold'>27-30</span> on your answer sheet.</label><br /> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques27"><span className='numberOfQuestion mr-1 mb-2'>27</span> The first paragraph tells us about
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques27 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "B",
                      mainAns: "(the extent to which AI will alter the nature of the work that people do.)",
                      hiddenWord: "3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "first paragraph",
                      explain: "Let’s have a look at the first paragraph. The first few lines say, “According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. . .. ** Here, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years = the extent to which AI will alter the nature of the work that people do."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques27' />
              the kinds of jobs that will be most affected by the growth of AI..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques27' />
              the extent to which AI will after the nature of the work that people do.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques27' />
              the proportion of the world’s labour force who will have jobs in AI in the future.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques27' />
              the difference between ways that embodied and disembodied AI with impact on workers..
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques28"><span className='numberOfQuestion mr-1 mb-2'>28</span> According to the second paragraph, what is Stella Pachidi’s view of the ‘knowledge economy’?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques28 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "D",
                      mainAns: "(It is a key factor driving current developments in the workplace.)",
                      hiddenWord: "current developments in the workplace",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "second paragraph, Stella Pachidi’s view, ‘knowledge economy’",
                      explain: "In the second paragraph, the writer says in the beginning, “Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the ‘algorithmication’ of jobs that are dependent on data rather than on production – the so-called knowledge economy.… ..” Here, some of the most fundamental changes are happening = current developments in the workplace"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques28' />
              It is having an influence on the number of jobs available..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques28' />
              It is changing people’s attitudes towards their occupations..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques28' />
              It is the main reason why the production sector is declining..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques28' />
              It is a key factor driving current developments in the workplace.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques29"><span className='numberOfQuestion mr-1 mb-2'>29</span>What did Pachidi observe at the telecommunications company?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques29 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "C",
                      mainAns: "(staff making sure that AI produces the results that they want.)",
                      hiddenWord: "produces the results that they want",
                      hiddenWord2: "Pachidi ",
                      hiddenWord3: "",
                      keyWords: "Pachidi, observe, telecommunications company",
                      explain: "We find the reference of Pachidi observing a telecommunications company in Paragraph no. 5 ** Here, take a close look at lines 4-6, “ . .. . .. However, the company had started using a[n] … algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.” **   Here, a[n] … algorithm = AI,**  account managers = staff, ** contact certain customers about which kinds of campaigns and what to offer them = produces the results that they want"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques29' />
              staff disagreeing with the recommendations of AI.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques29' />
              staff feeling resentful about the intrusion of AI in their work
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques29' />
              staff making sure that AI produces the results that they want.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques29' />
              staff allowing AI to carry out tasks they ought to do themselves.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques30"><span className='numberOfQuestion mr-1 mb-2'>30</span>In his recently published research, Ewan McGaughey
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques30 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "D",
                      mainAns: "(illustrates how changes in the job market can be successfully handled.)",
                      hiddenWord: "Ewan McGaughey",
                      hiddenWord2: "But social policies can tackle this through retraining and redeployment ",
                      hiddenWord3: "",
                      keyWords: "recently published research, Ewan McGaughey",
                      explain: "In paragraph no. 11, we can find about Dr Ewan McGaughey and in paragraph no. 12 we can learn about the research he did. ** Here, in paragraph no. 12, take a look at lines 1-3, “His recently published research answers the question of whether automation, AI and robotics will mean a ‘jobless future’ by looking at the causes of unemployment. ‘History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.’”** Here, redundancies = joblessness/ unemployment, ** social policies can tackle this through retraining and redeployment = changes in the job market can be successfully handled."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques30' />
              challenges the idea that redundancy is a negative thing.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques30' />
              shows the profound effect of mass unemployment on society..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques30' />
              highlights some differences between past and future job losses..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques30' />
              illustrates how changes in the job market can be successfully handled..
            </label>
            </div>
          </div>
        </div>
      </div> <br />



      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 31-34</h6> <br />
        <label className=''>Complete the summary using the list of words, A-G, below. <br /> <br />
          Write the correct letter, A-G, in boxes 31-34 on your answer sheet.</label><br /> <br />
        <h6 className='w-full text-center'>The ‘algorithmication’ of jobs</h6>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques31">Stella Pachidi of Cambridge Judge Business School has been focusing on the ‘algorithmication’ of jobs which rely not on production but on </label>
          <span className='numberOfQuestion'>31</span>
          <input type="text" name="ques31" id="ques31" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques31 != "G" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques31 != "" && UserData.ques31 == "G" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-9" && UserData.ques31 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "G(information)",
                      mainAns: "",
                      hiddenWord: "information",
                      hiddenWord2: "Dr Stella Pachidi from Cambridge Judge Business School",
                      hiddenWord3: "",
                      keyWords: "Stella Pachidi, Cambridge Judge Business School, focusing on, ‘algorithmication’ of jobs, rely, not on production",
                      explain: "Paragraph no. 2 has the answer to this question. Here, the author of the text writes in the beginning, “Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the ‘algorithmication’ of jobs that are ** dependent on data rather than on production . . .. . .” ** Here, dependent on = rely . .. . on, ** data = information."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>



          <p> .While monitoring a telecommunications company, Pachidi observed a growing</p>

          <span className='numberOfQuestion'>32</span>
          <input type="text" name="ques32" id="ques32" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques32 != "E" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques32 != "" && UserData.ques32 == "E" && "text-green-700"}
           
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-9" && UserData.ques32 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "E(reliance)",
                      mainAns: "",
                      hiddenWord: "reliance",
                      hiddenWord2: "Dr Pachidi",
                      hiddenWord3: "",
                      keyWords: "monitoring, a telecommunications company, Pachidi observed, growing, recommendations made by AI, workers, begin to learn through, ‘algorithm’s eyes’",
                      explain: "We can find about Dr Pachidi observing a telecommunications company in paragraph no. 5. ** Then, in paragraph no. 6, in lines 1-4, the writer of this passage says, “The algorithm – usually built by external designers – often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short sighted view begins to creep into working practices whereby workers learn through the ‘algorithm’s eyes’ and become dependent ** on its instructions. .. . ..” ** Here, its instructions = recommendations made by AI,  dependent = reliance"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> on the recommendations made by AI, as workers begin to learn through the ‘algorithm’s eyes’. Meanwhile, staff are deterred from experimenting and using their own</p>

          <span className='numberOfQuestion'>33</span>
          <input type="text" name="ques33" id="ques33" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques33 != "C" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques33 != "" && UserData.ques33 == "C" && "text-green-700"}
           
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-9" && UserData.ques33 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "C(intuition)",
                      mainAns: "",
                      hiddenWord: "intuition",
                      hiddenWord2: "are effectively discouraged",
                      hiddenWord3: "human instinct",
                      keyWords: "meanwhile, staff, deterred from, experimenting and using, own, therefore, prevented from, achieving innovation",
                      explain: "Take a look at the final lines of paragraph no. 6, “ . . .. . Alternative explorations – where experimentation and human instinct lead to progress and new ideas – are effectively discouraged.” **   Here, experimentation = experimenting, **   are effectively discouraged = are therefore prevented, ** human instinct = intuition."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>


          <p> , and are therefore prevented from achieving innovation.To avoid the kind of situations which Pachidi observed, researchers are trying to make AI’s decision-making process easier to comprehend, and to increase users’ </p>

          <span className='numberOfQuestion'>34</span>
          <input type="text" name="ques34" id="ques34" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques34 != "F" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques34 != "" && UserData.ques34 == "F" && "text-green-700"}
           
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-9" && UserData.ques34 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "F(confidence)",
                      mainAns: "",
                      hiddenWord: "confidence",
                      hiddenWord2: "make AI technologies more trustworthy and",
                      hiddenWord3: "the writer says in the beginning",
                      keyWords: "to avoid, situations, Pachidi observed, researchers, trying to make, AI’s decision-making process, easier to comprehend, to increase, users’, technology",
                      explain: " In paragraph no. 8, the writer says in the beginning, “It’s scenarios like this that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. .. .. . .” ** Here, make AI technologies more trustworthy and** transparent = make AI’s decision-making process easier to comprehend, organisations and individuals = users, ** understand how AI decisions are made = increase confidence."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> with regard to the technology.</p>
        </div>


        <div className='p-3 rounded flex flex-wrap w-auto gap-3 border-2 border-gray-300'>
          <p><span className='font-bold mr-2'>A</span> pressure</p> <br />
          <p><span className='font-bold mr-2'>B</span>satisfaction            </p> <br />
          <p><span className='font-bold mr-2'>C</span>intuition </p> <br />
          <p><span className='font-bold mr-2'>D</span>promotion              </p><br />
          <p><span className='font-bold mr-2'>E</span> reliance                   </p> <br />
          <p><span className='font-bold mr-2'>F</span>confidence</p> <br />
          <p><span className='font-bold mr-2'>G</span>information</p>  <br />

        </div>


      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 35-40</h6> <br />
        <label className=''>Look at the following statements <span className='font-bold'>(Questions 35-40)</span> and the list of people below. <br /> <br />
          Match each statement with the correct person, <span className='font-bold'>A, B or C</span>.</label><br /> <br />
        <label>
          Choose the correct letter,<span className='font-bold'>A, B or C</span>, in boxes 35-40 on your answer sheet. <br /> <br />
          NB   You may use any letter more than once.
        </label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"><span className='numberOfQuestion'>35</span>Greater levels of automation will not result in lower employment.
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques35 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques35 != "" && UserData.ques35 == "B" && "text-green-700"}
           
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques35 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "B(Hamish Low)",
                      mainAns: "",
                      hiddenWord: "Hamish Low",
                      hiddenWord2: "If in 30 years, half of 100 jobs are",
                      hiddenWord3: "greater levels of automation",
                      keyWords: " greater levels of automation, not result in, lower employment",
                      explain: "Let’s have a look at paragraph no. 10. Here, we find comments made by Hamish Low. ** Read lines 1-4, “On the subject of job losses, Low believes the predictions are founded on a fallacy: ‘It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are ** being carried out by robots, that doesn’t mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect that to be 150 jobs.” ** Here, half of 100 jobs are being carried out by robots = greater levels of automation, ** doesn’t mean we are left with just 50 jobs for humans = will not result in lower employment."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span> There are several reasons why AI is appealing to businesses.
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques36 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques36 != "" && UserData.ques36 == "A" && "text-green-700"}
              
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques36 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "A(Stella Pachidi)",
                      mainAns: "",
                      hiddenWord: "Stella Pachidi",
                      hiddenWord2: "they can outperform humans",
                      hiddenWord3: "enhance productivity",
                      keyWords: " several reasons, why, AI, appearing to businesses.",
                      explain: "In paragraph no. 2 and 3, we find the reasons of AI’s appearance to businesses stated by Dr Stella Pachidi. ** Take a look at lines 3-5 in paragraph no. 2, “ . .. . Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, . .. .. .” ** Then, read paragraph no. 3, “‘In many cases, they can outperform humans,’ says Pachidi. ‘Organisations are ** attracted to using algorithms because they want to make choices based on what they consider is “perfect information”, as well as to reduce costs and enhance productivity.’”"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span>AI’s potential to transform people’s lives has parallels with major cultural shifts which occurred in previous eras.
            <select name="ques37" id="ques37" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques37 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques37 != "" && UserData.ques37 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques37 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "C(Ewan McGaughey)",
                      mainAns: "",
                      hiddenWord: "Ewan McGaughey",
                      hiddenWord2: "the corporate revolution enabled mass",
                      hiddenWord3: "major cultural shifts which occurred in the previous eras",
                      keyWords: "AI’s potential, transform, people’s lives, has parallels, major cultural shifts, occurred, previous eras.",
                      explain: "Paragraphs 11-14 provide the views of Dr Ewan McGaughey. ** Here, in the final paragraph (paragraph no. 14), let’s have a look at lines 1-4, “‘The promises of these new technologies are astounding. They deliver humankind the capacity to live in a way that nobody could have once imagined,’ he adds. ‘Just as the industrial revolution brought people past subsistence agriculture, and the corporate revolution enabled mass ** production, a third revolution has been pronounced. . . . .”**   Here, Just as = parallels.** the industrial revolution brought people past subsistence agriculture & the corporate revolution enabled mass production = major cultural shifts which occurred in the previous eras."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span> It is important to be aware of the range of problems that AI causes.
            <select name="ques38" id="ques38" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques38 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques38 != "" && UserData.ques38 == "A" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques38 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "A(Stella Pachidi)",
                      mainAns: "",
                      hiddenWord: "Stella Pachidi",
                      hiddenWord2: "range of problems",
                      hiddenWord3: "",
                      keyWords: "important, to be aware, range of problems, AI causes",
                      explain: "The first line of paragraph no. 4 gives us answer to this question, “‘But these enhancements are not without consequences,’ says Pachidi. . .. . .” **   Here, these enhancements = AI, **   not without consequences = range of problems."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>People are going to follow a less conventional career path than in the past.
            <select name="ques39" id="ques39" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques39 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques39 != "" && UserData.ques39 == "B" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques39 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "B(Hamish Low)",
                      mainAns: "",
                      hiddenWord: "Hamish Low",
                      hiddenWord2: "people will not follow this conventional career path",
                      hiddenWord3: "",
                      keyWords: "people, going to follow, less conventional career path, than, past",
                      explain: " In paragraph no. 9, lines 2-3 say, “ . . . . ‘The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past,’ says Low. . …” ** Here, The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement = conventional career path, ** a thing of the past = people will not follow this conventional career path."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span> Authorities should take measures to ensure that there will be adequately paid work for everyone
            <select name="ques40" id="ques40" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques40 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques40 != "" && UserData.ques40 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques40 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "C(Ewan McGaughey)",
                      mainAns: "",
                      hiddenWord: "Ewan McGaughey",
                      hiddenWord2: "Authorities should take measures",
                      hiddenWord3: "like to see governments seizing the opportunity to improve policy to enforce good job security",
                      keyWords: "authorities, should take measures, ensure, will be, adequately paid work, everyone",
                      explain: "The answer can be found in paragraph no. 13 in the very beginning, “He adds: ‘If there is going to be change to jobs as a result of AI and robotics then I’d like to see governments seizing the opportunity to improve policy to enforce good job security. … .. .” ** Here, like to see governments seizing the opportunity = Authorities should take measures, ** improve policy to enforce good job security = ensure that there will be adequately paid work for everyone."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div> <br />

        <h6 className='mt-1 mb-1'>List of people</h6>
        <div className='p-3 rounded flex flex-wrap w-auto gap-3 border-2 border-gray-300'>
          <p><span className='font-bold mr-2'>A</span>  Stella Pachidi</p>
          <p><span className='font-bold mr-2'>B</span> Hamish Low</p>
          <p><span className='font-bold mr-2'>C</span> Ewan McGaughey</p>

        </div>

      </div>


    </section>
  )
}

export default Panel2_Q2




