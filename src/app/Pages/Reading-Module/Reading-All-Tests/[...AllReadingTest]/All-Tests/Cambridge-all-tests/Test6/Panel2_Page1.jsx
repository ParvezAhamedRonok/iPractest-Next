"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>

function Panel2_Q1({ handleChange, UserData }) {
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
        <h5 className=''>Reading Passage-1</h5>
        <h6 className=''>Questions 1-5</h6> <br />
        <label className=''>Complete the notes below.</label>
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.</label>
        <label className=''>Write your answers below <span className='font-bold'>1-5</span> on your answer sheet. <br /></label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3 '>
        <h6 className='mb-2'> The Dead Sea Scrolls</h6>
        <h6>Discovery <br /> <br />Qumran, 1946/7</h6> <br />
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"> ●   three Bedouin shepherds in their teens were near an opening on side of cliff <br />●   heard a noise of breaking when one teenager threw a<span className='numberOfQuestion'>1</span>
            <input type="text" name="ques1" id="ques1" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && !UserData.ques1.match(/rock/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques1 != "" && UserData.ques1 == "rock" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && !UserData.ques1.match(/rock/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  rock
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "rock",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "first paragraph’s third and fourth line. One of these young shepherds tossed (threw) a rock into an opening on the side of a cliff and was surprised to hear a shattering sound."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2">●   teenagers went into the <span className='numberOfQuestion'>2</span>
            <input type="text" name="ques2" id="ques2" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && !UserData.ques2.match(/cave/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques2 != "" && UserData.ques2 == "cave" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && !UserData.ques2.match(/cave/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  cave
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "cave",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– first paragraph’s fifth line. He and his companions later entered the cave."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3">Iand found a number of containers made of <span className='numberOfQuestion'>3</span>
            <input type="text" name="ques3" id="ques3" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && !UserData.ques3.match(/clay/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques3 != "" && UserData.ques3 == "clay" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && !UserData.ques3.match(/clay/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  clay
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "clay",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "first paragraph’s fifth to sixth line. stumbled (found) across a collection of large clay jars, seven of which contained scrolls with writing on them."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>
        <h6>The scrolls.</h6> <br />
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4">●   date from between 150 BCE and 70 CE <br />
            ●   thought to have been written by group of people known as the  <span className='numberOfQuestion'>4</span>
            <input type="text" name="ques4" id="ques4" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && !UserData.ques4.match(/Essens/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques4 != "" && UserData.ques4 == "Essens" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && !UserData.ques4.match(/Essens/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Essens
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 4,
                        Ans1: "",
                        mainAns: "Essens",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "second paragraph’s second last line. and the people are thought to have belonged to a group called the Essenes."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques5">●   written mainly in the <span className='numberOfQuestion'>5</span>
            <input type="text" name="ques5" id="ques5" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && !UserData.ques5.match(/hebrew/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques5 != "" && UserData.ques5 == "hebrew" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && !UserData.ques5.match(/hebrew/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  hebrew
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "hebrew",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "third paragraph’s first line. The majority of the texts on the Dead Sea Scrolls are in Hebrew."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

          </label>
          <p> language <br />
            ●   most are on religious topics, written using ink on parchment or papyrus</p>
        </div>
      </div> <br />



      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6>Questions 6-13</h6> <br />
        <label className=''>
          Do the following statements agree with the information given in <span className='font-bold'>Reading Passage 1</span>?<br /> <br />
          In below 6-13 on your answer sheet, write</label> <br />
        <label className=''>TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3 ">
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>The Bedouin teenagers who found the scrolls were disappointed by how little money they received for them.
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques6 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques6 != "" && UserData.ques6 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques6 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "antiquities",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "irst paragraph’s sixth to eighth line. The teenagers took the seven scrolls to a nearby town where they were sold for a small sum to a local antiquities dealer. ** There is no information about whether they became happy or disappointed."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span> There is agreement among academics about the origin of the Dead Sea Scrolls.
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques7 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques7 != "" && UserData.ques7 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques7 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "antiquities",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "second paragraph’s first two lines. The origin of the Dead Sea Scrolls, which were written around 2,000 years ago between150 BCE and 70 CE, is still the subject of scholarly debate even today. **  ‘Still a subject of scholarly debate’ Scholars = Academics. If it is still a subject of debate, it means scholars (academics) do not agree about the origin of the Dead Sea Scrolls."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>Most of the books of the Bible written on the scrolls are incomplete.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques8 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques8 != "" && UserData.ques8 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques8 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Fragments",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– fourth paragraph’s first to three line. The Dead Sea Scrolls include fragments from every book of the Old Testament of the Bible except for the Book of Esther. The only entire book of the Hebrew Bible preserved among the manuscripts from Qumran is Isaiah. **  Fragments = small parts (not whole). Only one book was complete that is Isaiah. So, the statement is true."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques9"> <span className='numberOfQuestion'>9</span>The information on the Copper Scroll is written in an unusual way.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques9 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques9 != "" && UserData.ques9 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques9 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "riches",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– fifth paragraph’s eighth to ninth line. Using an unconventional vocabulary and odd spelling, it describes 64 underground hiding places that supposedly contain riches buried for safekeeping. ** In the fifth paragraph, from the third line, information about the Copper Scroll is given. In the eighth and ninth lines, it is written that this scroll describes 64 hiding places that might have treasure (riches) buried. This information is written in unconventional (unusual) vocabulary and odd (strange) spelling."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>TMar Samuel was given some of the scrolls as a gift.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques10 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques10 != "" && UserData.ques10 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques10 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "scrolls",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "sixth paragraph’s second to fourth line. Mar Samuel acquired four of the original seven scrolls from a Jerusalem shoemaker and part-time antiquity dealer, paying less than $100 for them. ** Mar Samuel purchased them for around $100. So, they (scrolls) were not a gift."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>In the early 1950s, a number of educational establishments in the US were keen to buy scrolls from Mar Samuel.
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques11 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques11 != "" && UserData.ques11 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques11 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "scrolls",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "sixth paragraph’s fourth and fifth line. He then travelled to the United States and unsuccessfull offered them to a number of universities, including Yale. **  He was unsuccessful in selling scrolls to any university in the USA."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"> <span className='numberOfQuestion'>12</span>The scroll that was pieced together in 2017 contains information about annual occasions in the Qumran area 2,000 years ago.
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques12 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques12 != "" && UserData.ques12 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques12 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "occasions",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "last paragraph’s last three lines. The scroll names celebrations that indicate shifts in seasons and details two yearly religious events known from another Dead Sea Scroll. ** The information about this scroll starts from the start of the last paragraph. But the last three lines of this paragraph describe that the scroll has the name of two yearly (annual) religious events (occasions)."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>Academics at the University of Haifa are currently researching how to decipher the final scroll..
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques13 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques13 != "" && UserData.ques13 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques13 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "occasions",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– last paragraph last line. Only one more known scroll remains untranslated. ** There is no information on whether academics are currently researching how to translate the final scroll or not. It is just said that only a few scrolls are untranslated."
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

export default Panel2_Q1



