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

      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 1 - 8</h6> <br />
        <h6 className=''>The text has six descriptions of places to visit in England, A-F</h6>
        <h6>Which description mentions the following information? </h6>
        <h6>Write the correct letter, A-F, in boxes 1-8.</h6>
        <h6>NB You may use any letter more than once.</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>Old architecture and cold temperatures.
            <input type="text" name="ques1" id="ques1" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques1 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques1 != "" && UserData.ques1 == "E" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques1 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "E (Norfolk)",
                        hiddenWord: "Norfolk",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Norfolk's description mentions stately homes, ruined castles, medieval churches, which refers to old architecture. It also mentions that northerly and easterly winds over the North Sea can keep temperatures low, indicating cold temperatures"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>Great beaches and plenty of places to eat good food.
            <input type="text" name="ques2" id="ques2" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques2 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques2 != "" && UserData.ques2 == "C" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques2 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "C (Devon)",
                        hiddenWord: "Devon",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Devon is described as having magnificent beaches on the south and north coasts, and the description highlights its rich food culture with good food and the great outdoors, including local staples like lamb, venison, seafood, and farmers' markets with artisan producers."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            style theme park.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span>Lots of creatures to see here, including birds and butterflies.
            <input type="text" name="ques3" id="ques3" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques3 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques3 != "" && UserData.ques3 == "F" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques3 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "F (Suffolk)",
                        hiddenWord: "Suffolk",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Suffolk is noted for its astonishingly rich birdlife and mentions 400 rare species, including butterflies, dragonflies, moths, and snails, which includes a variety of creatures to see."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques4"> <span className='numberOfQuestion'>4</span>One of the largest places in England that has phenomenal beauty.
            <input type="text" name="ques4" id="ques4" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques4 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques4 != "" && UserData.ques4 == "B" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques4 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 4,
                        Ans1: "",
                        mainAns: "B (Cotswolds)",
                        hiddenWord: "Cotswolds",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The Cotswolds covers nearly 800 square miles across five counties and is described as the biggest of the 38 Areas of Outstanding Natural Beauty (AONB) in England and Wales, indicating both its size and beauty."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>You can ride bikes or walk over hills.
            <input type="text" name="ques5" id="ques5" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques5 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques5 != "" && UserData.ques5 == "D" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques5 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "D (Lake District)",
                        hiddenWord: "Lake District",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The Lake District offers opportunities to get out and experience the great outdoors, with activities like a leisurely bike ride down country lanes or a day-long hike across the hills, making it suitable for biking and walking."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of getting in</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>The home of creative minds and amazing landscapes.
            <input type="text" name="ques6" id="ques6" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques6 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques6 != "" && UserData.ques6 == "D" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques6 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "D (Lake District)",
                        hiddenWord: "Lake District",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The Lake District has numerous artistic and literary connections, particularly with William Wordsworth, who was inspired by its landscape. The description also emphasizes its grandest views and magnificent scenery."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques7"> <span className='numberOfQuestion'>7</span>The best food can be eaten here.
            <input type="text" name="ques7" id="ques7" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques7 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques7 != "" && UserData.ques7 == "A" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques7 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 7,
                        Ans1: "",
                        mainAns: "A (Yorkshire)",
                        hiddenWord: "Yorkshire",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Yorkshire is described as having the best in Britain reputation for food and drink, boasting more Michelin-starred restaurants than anywhere else in the country, apart from London, indicating it has some of the best food."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>Painters have called this home.
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques8 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques8 != "" && UserData.ques8 == "A" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques8 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "A (Yorkshire)",
                        hiddenWord: "Yorkshire",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Yorkshire's sheer beauty has inspired generations of painters, including John Atkinson Grimshaw, the Victorian artists of the Staithes Group, and David Hockney, indicating that it has been home to many painters."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mb-3 mt-3'>
        <h6 className=''>Questions 9 - 14</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?</h6>
        <h6>TRUE - if the statement agrees with the information</h6>
        <h6>FALSE - if the statement contradicts the information </h6>
        <h6>NOT GIVEN - if there is no information on this</h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"><span className='numberOfQuestion'>9</span>During World War 2 there were more women working than men.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques9 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques9 != "" && UserData.ques9 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques9 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "History",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage (Paragraph 1, History) states that during World War II, 7 million women entered the workforce, 2 million of those in heavy industry. However, it does not state that there were more women working than men. Therefore, this statement is false."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>Women now earn at least 10 times more than men in certain roles.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques10 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques10 != "" && UserData.ques10 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques10 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "History",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage does not provide any information about women earning 10 times more than men in any roles. This information is not mentioned anywhere in the text."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>Discrimination towards women still happens in the present day .
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques11 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques11 != "" && UserData.ques11 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques11 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Women's Rights in the Workplace",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage (Paragraph 1, Women's Rights in the Workplace) states, Discrimination against women still exists in various forms, particularly in the workplace. This confirms that discrimination towards women still happens today."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"> <span className='numberOfQuestion'>12</span>A small number of women report sexual harassment in the workplace
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques12 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques12 != "" && UserData.ques12 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques12 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Considerations",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage (Paragraph 5, Considerations) mentions, only 5 percent to 15 percent of victims of workplace sexual harassment report these violations to their employers or proper authorities.This indicates that a small number of women report sexual harassment"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>Women have no rights to work if they are pregnant.
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques13 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques13 != "" && UserData.ques13 == "FALSE" && "text-green-700"}
               `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques13 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Considerations",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage (Paragraph 3, Types) states, Women’s rights in the workplace include many facets, such as the right to work if pregnant. This confirms that women do have the right to work if they are pregnant."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>Women are the highest paid CEO's in the USA.
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques14 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques14 != "" && UserData.ques14 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-10" && UserData.ques14 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Consideraddddtions",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage does not provide any information regarding women being the highest paid CEOs in the USA. This information is not mentioned anywhere in the text."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>

      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-3 mt-3'>
        <h6 className=''>Questions 15-21</h6> <br />
        <h6 className=''>Look at the article 'Reasons Why You Should Join a Student Organization '. Why should you join an organization?</h6>
        <h6>Write the appropriate letter A-G for questions 15-21.</h6>
        <h6>You may use each letter more than once </h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques15"> <span className='numberOfQuestion'>15</span>You would like to make connections that could help you to find a job
            <input type="text" name="ques15" id="ques15" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques15 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques15 != "" && UserData.ques15 == "D" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques15 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 15,
                        Ans1: "",
                        mainAns: "D (You’ll get networking opportunities)",
                        hiddenWord: "You’ll get networking opportunities",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph D mentions that student organizations provide networking opportunities, which can help you make connections that could lead to potential internships or employment opportunities in the future."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>You want to learn how to communicate with others.
            <input type="text" name="ques16" id="ques16" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques16 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques16 != "" && UserData.ques16 == "B" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques16 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 16,
                        Ans1: "",
                        mainAns: "B (You’ll develop soft skills)",
                        hiddenWord: "You’ll develop soft skills",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph B talks about developing soft skills like communication, which are essential for effectively interacting with others. It also mentions learning the best ways to communicate with individuals and large groups."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            style theme park.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>You would like an opportunity to learn your strengths.
            <input type="text" name="ques17" id="ques17" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques17 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques17 != "" && UserData.ques17 == "A" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques17 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 17,
                        Ans1: "",
                        mainAns: "A (You’ll learn more about yourself)",
                        hiddenWord: "You’ll learn more about yourself",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph A discusses how joining a student organization helps you learn more about yourself, your goals, and your strengths. It emphasizes self-awareness and discovering what you are good at"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>You would like to practice your skills, without risks.
            <input type="text" name="ques18" id="ques18" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques18 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques18 != "" && UserData.ques18 == "E" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques18 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 18,
                        Ans1: "",
                        mainAns: "E (You’ll gain practical experience in a safe environment)",
                        hiddenWord: "You’ll gain practical experience in a safe environment",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph E highlights that participating in a student organization allows you to gain practical experience in a safe environment where making mistakes is acceptable, providing a risk-free setting to practice your skills."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques19"> <span className='numberOfQuestion'>19</span>You want to meet other people from all over the world
            <input type="text" name="ques19" id="ques19" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques19 != "G" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques19 != "" && UserData.ques19 == "G" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques19 != "G"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  G
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "",
                        mainAns: "G (You’ll learn how to engage with diverse groups of people)",
                        hiddenWord: "You’ll learn how to engage with diverse groups of people",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G explains that student organizations often include a diverse group of people, helping you learn how to engage with different individuals, which mirrors the diversity you’ll encounter in the working world."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of getting in.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques20"> <span className='numberOfQuestion'>20</span>You are interested in using the information you have learned in lessons
            <input type="text" name="ques20" id="ques20" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques20 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques20 != "" && UserData.ques20 == "F" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques20 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "F (You’ll be able to use the skills you’ve learned in class)",
                        hiddenWord: "You’ll learn how to engage with diverse groups of people",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F discusses how students can apply what they’ve learned in class to real-world situations through student organizations, allowing them to test classroom knowledge and develop leadership and life skills."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>You want to meet some people and work together.
            <input type="text" name="ques21" id="ques21" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques21 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-10" && UserData.ques21 != "" && UserData.ques21 == "C" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-10" && UserData.ques21 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 21,
                        Ans1: "",
                        mainAns: "C (You’ll learn how to work with a team)",
                        hiddenWord: "You’ll learn how to work with a team",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph C emphasizes learning to work well with a team, taking advice from others, and giving your own, which is an essential skill for any career and a key aspect of participating in a student organization."
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



