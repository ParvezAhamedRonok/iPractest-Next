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

      <div className='articles pl-[10px] sm:pl-[25px] mb-5'>
        <h6 className=''>Questions 14-18</h6> <br />
        <label className=''><span className='font-bold'>Reading Passage 2</span> has seven paragraphs, <span className='font-bold'>A-G.</span></label>
        <label>Which paragraph contains the following information? </label>
        <label>Choose the correct letter, A-G, in boxes 14-18 on your answer sheet. <br />
          NB   You may use any letter more than once.</label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>bad outcomes for a forest when people focus only on its financial reward
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques14 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques14 != "" && UserData.ques14 == "B" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques14 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "much of the trees does not survive, and it becomes difficult for the forest to survive",
                      hiddenWord2: "",
                      keyWords: "Bad outcomes, focus only, financial reward",
                      explain: "Let’s have a look – first three line and five to eight line. ** “In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew………………These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease.” ** Here, solely interested = focus only, remove the stems of highest quality and leave behind poorly formed trees = Bad outcomes,economic value = financial reward ** So, much of the trees does not survive, and it becomes difficult for the forest to survive."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span>reference to the aspects of any tree that contribute to its worth
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques15 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques15 != "" && UserData.ques15 == "A" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques15 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "depends on the management goals",
                      hiddenWord2: "",
                      keyWords: "aspects, any tree, contribute, its worth",
                      explain: "In the first 3 lines, The writer says, “A tree’s ‘value’ depends on several factors including its species, size, form, condition, quality, function and accessibility, and depends on the management goals for a given forest.” **  Here, Value = Worth, ** Goals = contribute ** Factors of a tree are its species, size, form, condition, quality, function, accessibility and why such trees are preserved."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>mention of the potential use of wood to help run vehicles
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques16 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques16 != "" && UserData.ques16 == "C" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques16 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "in several fuel forms such as gasified wood",
                      hiddenWord2: "",
                      keyWords: "use of wood, to help run vehicles",
                      explain: "In the sixth and seventh line, The writer says, “Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars.” ** So, Wood can be used to run vehicles in several fuel forms such as gasified wood, liquid ethanol and gasoline."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>examples of insects that attack trees
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques17 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques17 != "" && UserData.ques17 == "E" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques17 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "harm tree are given in this passage",
                      hiddenWord2: "",
                      keyWords: "insects, attack trees",
                      explain: "Let’s have a look – one-fifth line, The writer says, “With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhorned beetle, emerald ash borer, and gypsy moth, to name just a few , it is important to remember that those working in the forests can help ease these issues through cutting procedures.” ** So, The name of insects that harm tree are given in this passage."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>Tan alternative name for trees that produce low-use wood
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques18 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques18 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "alternative name",
                      hiddenWord2: "",
                      keyWords: "alternative name, produce, low-use wood",
                      explain: "Let’s have a look – third-fifth line, The writer says, “This practice, called ‘high-grading’ , has left a legacy of ‘low-use wood’ in the forests. Some people even call these ‘junk trees’ and they are abundant in Pennsylvania.” **  Hence, low quality wood tree are left that are called Junk trees = alternative name"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
      </div>






      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 19-21</h6> <br />
        <label className=''>Look at the following purposes <span className='font-bold'>(Questions 18-21)</span> and the list of timber cuts below. <br /> <br />
          Match each purpose with the correct timber cut, <span className='font-bold'></span> <br /> <br />
          Choose the correct letter, <span className='font-bold'>A, B or C,</span> in boxes 19-21 on your answer sheet.<br /> <br />
          NB   You may use any letter more than once.</label><br /> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-5">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"><span className='numberOfQuestion'>19</span>to remove trees that are diseased
            <select name="ques19" id="ques19" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques19 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques19 != "" && UserData.ques19 == "B" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques19 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Salvage Cut approach",
                      hiddenWord2: "",
                      keyWords: "remove trees, diseased",
                      explain: " Look at the Paragraph- E, 2nd and 3rd last line. Here, “These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem.” **  Sick tree = Diseased trees. ** So, we can see the information about Salvage Cut approach."
                    }))
                  }}
                >Exp..</span>
              </div>


              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span> to generate income across a number of years
            <select name="ques20" id="ques20" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques20 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques20 != "" && UserData.ques20 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques20 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Shelterwood Cut approach",
                      hiddenWord2: "",
                      keyWords: "generate income, a number of years",
                      explain: "Look at the Paragraph – F, last three lines, “It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.” **   the money spreads out = generate income ** over a decade or more = a number of years ** Two-tier forest is also developed by using Shelterwood Cut approach in which harvest can be done twice."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>Tto create a forest whose trees are close in age
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques21 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques21 != "" && UserData.ques21 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques21 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "A Shelterwood Cut",
                      hiddenWord2: "",
                      keyWords: "create a forest, trees, close in age",
                      explain: "Look at the Paragraph – F, first four lines, “A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth.” ** Here, similar point in their growth = close in age"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='p-3 rounded border-2 border-gray-300 w-[50%] mt-4'>
          <label className='text-center'>List of Timber Cuts</label> <br />
          <span className='font-bold mr-2'>A</span>     a TSI Cut <br />
          <span className='font-bold mr-2'>B</span>    a Salvage Cut <br />
          <span className='font-bold mr-2'>C</span>   a Shelterwood Cut <br />
        </div>
      </div>




      <div className='articles pl-[10px] sm:pl-[25px] mt-2 mb-4'>
        <h6 className=''>Questions 22-26</h6> <br />
        <label className=''>
          Complete the sentences below.<br /> <br />
          Choose ONE WORD ONLY from the passage for each answer.<br /><br />
          Write your answers in boxes 22-26 on your answer sheet.<br />
        </label><br /> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-5">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span>Some dead wood is removed to avoid the possibility of
            <input type="text" name="ques22" id="ques22" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques22.match(/fire/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques22 != "" && UserData.ques22 == "fire" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques22.match(/fire/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  fire
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "fire",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "dead wood, removed, avoid the possibility of",
                        explain: " Look at the Paragraph – G, 1st to 2nd  line. ** The writer says, “Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood.”"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span>The .
            <input type="text" name="ques23" id="ques23" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques23.match(/nutrients/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques23 != "" && UserData.ques23 == "nutrients" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques23.match(/nutrients/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  nutrients
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 23,
                        Ans1: "",
                        mainAns: "nutrients",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "tops of cut trees, improve soil quality.",
                        explain: " Look at the paragraph – G, 3rd and 4th  line. ** The writer says, “The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil.””"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            from the tops of cut trees can help improve soil quality.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques24"><span className='numberOfQuestion'>24</span>Some damaged trees should be left, as their
            <input type="text" name="ques24" id="ques24" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques24.match(/cavities/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques24 != "" && UserData.ques24 == "cavities" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques24.match(/cavities/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  cavities
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "cavities",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "damaged trees, left, habitats, range of creatures.",
                        explain: "Look at the paragraph – G, 5th and 6th  line. ** The writer says, “In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals.” ** Here, insect predators like woodpeckers, bats and small mammals = range of creatures"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            provide habitats for a range of creatures.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques25"><span className='numberOfQuestion'>25</span>Some trees that are small, such as
            <input type="text" name="ques25" id="ques25" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques25.match(/hawthorn/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques25 != "" && UserData.ques25 == "hawthorn" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques25.match(/hawthorn/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  hawthorn
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "hawthorn",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "source of food, animals and insects.",
                        explain: " Look at the paragraph – G, second-last line. ** The writer says, “For example, many species like hawthorn provide food for wild life.” ** Here, wild life = animals and insects"
                      }))
                    }}
                  >Exp..</span>
                </div>


                : ""}
            </i>
            are a source of food for animals and insects.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques26">  <span className='numberOfQuestion'>26</span>Any trees that are
            <input type="text" name="ques26" id="ques26" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques26.match(/rare/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques26 != "" && UserData.ques26 == "rare" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques26.match(/rare/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  rare
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "rare",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "left to grow, add, variety of species",
                        explain: " Look at the paragraph – G, last line.** The writer says, “Finally, rare species of a tree in a forest should also stay behind as they add to its structural diversity.” ** here, stay behind = left to grow"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            should be left to grow, as they add to the variety of species in the forest.</label>
        </div>
      </div>






      {/* Passage-3 Questions */}
      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h5 className='underline'>Reading Passage-3  </h5> <br />
        <h6>Questions 27-31</h6> <br />
        <label className=''>Reading Passage 3 has six sections, A-F. <br /> <br />
          Which section contains the following information? <br /> <br />
          Choose  the correct letter, <span className='font-bold'>A-F</span>, in boxes <span className='font-bold'>27-31 </span>on your answer sheet.</label><br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-5">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>a reference to the cooperation that takes place to try and minimise risk
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques27 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques27 != "" && UserData.ques27 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques27 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "cooperating",
                      hiddenWord2: "minimize",
                      keyWords: " the cooperation, takes place, to try, minimize risk",
                      explain: "Let’s have a look – second to fifth line.“That means companies, governments and other players in space are collaborating in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability.” ** In this paragraph, it is given that companies, government and other players in space are collaborating (cooperating) to reduce the threat of space junk. ** Here, collaborating = cooperating ** reduce = minimize"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>an explanation of a person’s aims
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques28 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques28 != "" && UserData.ques28 == "F" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques28 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "Moriba Jah has the aim",
                      hiddenWord2: "",
                      keyWords: "person’s aims",
                      explain: "In the 2nd part first and second line, The writer says, “Jah describes himself as a space environmentalist: ‘I want to make space a place that is safe to operate, that is free and useful for generations to come.’” ** Moriba Jah has the aim to make the space a safe place to operate that is free and useful for generations to come."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span> a description of a major collision that occurred in space
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques29 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques29 != "" && UserData.ques29 == "A" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques29 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "major collision",
                      hiddenWord2: "",
                      keyWords: " a major collision, occurred in space",
                      explain: "In the 2nd part first to fourth line, The writer says, “Ten years ago, a US commercial Iridium satellite smashed into an inactive Russian communications satellite called COSMOS-2251, creating thousands of new pieces of space shrapnel that now threaten other satellites in low Earth orbit – the zone stretching up to 2000 kilometres in altitude.” **  Here, smashed = major collision"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"><span className='numberOfQuestion'>30</span> a comparison between tracking objects in space and the efficiency of a transportation system
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques30 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques30 != "" && UserData.ques30 == "E" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques30 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "In this paragraph",
                      hiddenWord2: "",
                      keyWords: "comparison between, tracking objects space and the efficiency, transportation system.",
                      explain: "Let’s have a look – third to last line, The writer says, “Planes line up in the sky, landing and taking off close to one another in a carefully choreographed routine. Air-traffic controllers know the location of the planes down to one metre in accuracy. The same can’t be said for space debris. Not all objects in orbit are known, and even those included in databases are not tracked consistently.” ** In this paragraph, comparison of efficient and accurate Air-traffic system is done with the object tracking in the space. ** There is no accurate information about the space debris."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span> a reference to efforts to classify space junk
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques31 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques31 != "" && UserData.ques31 == "B" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques31 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Classify",
                      hiddenWord2: "",
                      keyWords: "efforts, classify space junk",
                      explain: "Let’s have a look – 1st part, seventh to last line, “Others are developing taxonomies of space debris-working in measure properties such as the shape and size of the object, so that satellite operators know how much to worry about what’s coming their way.” ** Taxonomy – give name and divide things in groups (Classify) according to their properties OR the branch of science concerned with the classification."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 32-35</h6> <br />
        <label className=''>Complete the summary below <br /> <br />
          Choose ONE WORD ONLY from the passage for each answer.<br /> <br />
          Write your answers in boxes <span className='font-bold'>32-35 </span>on your answer sheet..</label><br /> <br />
        <label className=''>The Inter-Agency Space Debris Coordination Committee</label><br /> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques32">The committee gives advice on how the
            <span className='numberOfQuestion'>32</span>
            <input type="text" name="ques32" id="ques32" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques32.match(/sustainability/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques32 != "" && UserData.ques32 == "sustainability" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques32.match(/sustainability/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  sustainability
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 32,
                        Ans1: "",
                        mainAns: "sustainability",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "advice, how, space, can be achieved.",
                        explain: "Look at the Paragraph- C, third to fifth line. Here, “International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability.” **  Here, guidelines = advice"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            of space can be achieved. The committee advises that when satellites are no longer active, any unused

            <span className='numberOfQuestion'>33</span>
            <input type="text" name="ques33" id="ques33" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques33.match(/fuel/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques33 != "" && UserData.ques33 == "fuel" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques33.match(/fuel/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  fuel
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 33,
                        Ans1: "",
                        mainAns: "fuel",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "advises, no longer inactive, any unused.",
                        explain: "Look at the Paragraph – C, fifth to seventh lines, “Those include inactivating satellites at the end of their useful life by venting pressurized materials or left over fuel that might lead to explosions.” **  Here, left over = unused"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            or pressurised material that could cause.

            <span className='numberOfQuestion'>34</span>
            <input type="text" name="ques34" id="ques34" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques34.match(/explosions/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques34 != "" && UserData.ques34 == "explosions" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques34.match(/explosions/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  explosions
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "explosions",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "pressurised material, could cause, should be removed.",
                        explain: "Look at the Paragraph – C, fifth to seventh lines, “Those include inactivating satellites at the end of their useful life by venting pressurised materials or left over fuel that might lead to explosions.”"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            hould be removed.. <br />

            Although operators of large satellite constellations accept that they have obligations as stewards of space, Holger Krag points out that the operators that become.
            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques35.match(/bankrupt/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques35 != "" && UserData.ques35 == "bankrupt" && "text-green-700"}
               `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques35.match(/bankrupt/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  bankrupt
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "bankrupt",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "Holger Krag, points out, unlikely, removing.",
                        explain: "Look at from 4 line from the end of C paragraph, “Krag worries that problems could increase, despite their best intentions. ‘What happens to those that fail or go bankrupt?”"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            are unlikely to prioritise removing their satellites from space..</label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mt-3 mb-4'>
        <h6 className=''>Questions 36-40</h6> <br />
        <label className=''>Look at the following statements <span className='font-bold'>(Questions 36-40)</span> and the list of people below.<br /> <br />
          Match each statement with the correct person, <span className='font-bold'>A, B, C or D.</span><br /> <br />
          Write the correct letter, <span className='font-bold'>A, B, C or D</span>, in boxes <span className='font-bold'>36-40</span> on your answer sheet.</label><br /> <br />
        NB   You may use any letter more than once<br /> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span>Knowing the exact location of space junk would help prevent any possible danger.
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques36 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques36 != "" && UserData.ques36 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques36 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "(C)",
                      mainAns: "Marlon Sorge",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: " exact location, would help, prevent, possible danger",
                      explain: "Look at the Paragraph – D, last three lines. The writer says, ‘If you knew precisely where everything was, you would always never have a problem’, Marlon Sorge, a space-debris specialist at the Aerospace Corporation in El Segundo, California.” ** Here, “You would always never have a problem” mean that it would help prevent any possible danger."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span>TSpace should be available to everyone and should be preserved for the future.
            <select name="ques37" id="ques37" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques37 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques37 != "" && UserData.ques37 == "D" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques37 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "(D) Moriba ",
                      mainAns: "Jah",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "Space, available to everyone, preserved for the future.",
                      explain: "Look at the paragraph – F, 1st and 2nd line. ** The writer says, “Jah describes himself as a space environmentalist: ‘I want to make space a place that is safe to operate, that is free and useful for generations to come.’” **  Here, Generations to come = Future. "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span>A recommendation regarding satellites is widely ignored.
            <select name="ques38" id="ques38" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques38 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques38 != "" && UserData.ques38 == "B" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques38 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "(B)",
                      mainAns: "Holger Krag",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "A recommendation, widely ignored.",
                      explain: "Look at the paragraph – C, seventh-eleventh line. **The writer says, “The intergovernmental groups also advise lowering satellites deep enough into the atmosphere that they will burn up or disintegrate 25 years. But so far, only about half of all missions have abided by this 25-year goal, says Holger Krag , head of the European Space Agency’s space-debris office in Darmstadt, Germany .” ** Here, “Only about half of all missions have abided by this 25-year goal” means that the recommendation of lowering satellites deep enough into the atmosphere that they will burn or disintegrate is ignored by 50%(big proportion (widely)) of missions. ** Only about half = ignored by 50%(big proportion (widely))"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>There is conflicting information about where some satellites are in space.
            <select name="ques39" id="ques39" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques39 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques39 != "" && UserData.ques39 == "D" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques39 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "(D) Moriba Jah",
                      mainAns: "Jah",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "conflicting information, some satellites, space",
                      explain: "Look at the paragraph – F, first part, 8 to last line. ** The writer says, “When Jah enters that number, the database draws two purple lines: the US and Russian sources contain two completely different orbits for the same object. Jah says that it is almost impossible to tell which is correct, unless a third source of information made it possible to cross-correlate.” ** Here, When Jah searched for an object orbit in the space, he found two different moving paths (orbit) for the same object from different sources (US & Russia), which means conflicting information."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques40">  <span className='numberOfQuestion'>40</span> There is a risk we will not be able to undo the damage that occurs in space.
            <select name="ques40" id="ques40" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques40 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques40 != "" && UserData.ques40 == "A" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques40 != "A"

              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "(A)",
                      mainAns: "Carolin Frueh",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "a risk, not be able, undo the damage.",
                      explain: "Look at the paragraph – B, 2nd part, third-last line. ** The writer says, “If we go on like this, we will reach a point of no return,’ says Carolin Frueh, an astrodynamical researcher at Purdue University in West Lafayette, Indiana.” ** Here, If we go on like this, we will reach a point of no return = the damage that occurs in the space will not be reversed(undo)."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
      </div>
      <h6 className='pl-[10px] sm:pl-[25px] ml-3'>List of People </h6>  <br />
      <div className="articles w-auto pl-[10px] sm:pl-[25px] ml-3 mb-2 pt-2 sm:ml-5 flex flex-wrap gap-3 border-2 border-gray-300 rounded">
        <span className='font-bold'>A </span>     Carolin Frueh <br /> <br />
        <span className='font-bold'>B </span>     Holger Krag<br /> <br />
        <span className='font-bold'>C </span>     Marlon Sorge<br /> <br />
        <span className='font-bold'>D </span>       Moriba Jah<br /> <br />
      </div>



    </section>
  )
}

export default Panel2_Q2




