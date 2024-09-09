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
        <h6 className=''>Questions 1-8</h6>
        <h6 className=''>Reading Passage-1</h6> <br />
        <label className=''>Match each heading to the pragraph</label>
        <label className=''>Choose NO MORE THAN TWO WORDS from the passage for each answer</label>
        <label className=''>Write your answers in boxes <span className='font-bold'>1-8</span> on your answer sheet.</label>

      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-2'>
        <h5 className='mb-3 w-full'>Stonehenge</h5>
        <h6>Construction <br /> <br />Stage 1:</h6> <br />
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1">●   the ditch and henge were dug, possibly using tools made from<span className='numberOfQuestion'>1</span>
            <input type="text" name="ques1" id="ques1" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques1.match(/deer antlers/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques1 != "" && UserData.ques1 == "deer antlers" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques1.match(/deer antlers/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  deer antlers
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "deer antlers",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "ditch, henge, using tools",
                        explain: "Let’s have a look 2nd paragraph – 2nd and 3rd line. ** “First, Neolithic Britons used primitive tools, which may have been fashioned out of deer antlers, to dig a massive circular ditch and bank or henge.” ** Here, fashioned out of = make something using a particular material."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2">●   <span className='numberOfQuestion'>2</span>
            <input type="text" name="ques2" id="ques2" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques2.match(/timber posts/gi) && "text-red-600"} 
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques2 != "" && UserData.ques2 == "timber posts" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques2.match(/timber posts/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  timber posts
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "timber posts",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "deep pits, circle.",
                        explain: "Let’s have a look 2nd paragraph, last 2 line. ** “Deep pits dating back to that era and located within the circle may have once held a ring of timber posts, according to some scholars.” ** Here, held means that the deep pits were possibly the places where a ring of timber posts was situated or placed"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            may have been arranged in deep pits inside the circle</label>
        </div> <br />
        <h6>Stage 2:</h6> <br />
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3">●   bluestones from the Preseli Hills were placed in standing position <br /> <br />
            ●   theories about the transportation of the bluestones: <br /> <br />
            –   archaeological: <br />
            o   builders used
            <span className='numberOfQuestion'>3</span>
            <input type="text" name="ques3" id="ques3" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques3.match(/tree trunks/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques3 != "" && UserData.ques3 == "tree trunks" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques3.match(/tree trunks/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  tree trunks
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "tree trunks",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "sledges, rollers",
                        explain: "Let’s have a look 4th paragraph, 1st to 3rd line. ** “Stonehenge’s builders fashioned sledges and rollers out of tree trunks to lug the bluestones from the Preseli Hills.” ** Here, lug = transport"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
          <p>  to make sledges and rollers</p>
        </div>
        <div className='flex gap-1 flex-wrap '>
          <label htmlFor="ques4">●  <span className='numberOfQuestion'>4</span>
            <input type="text" name="ques4" id="ques4" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques4.match(/oxen/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques4 != "" && UserData.ques4 == "oxen" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques4.match(/oxen/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  oxen
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 4,
                        Ans1: "",
                        mainAns: "oxen",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: " pulled, giant baskets",
                        explain: "Let’s have a look 4th paragraph, last three line. ** “More recent archaeological hypotheses have them transporting the bluestones with supersized wicker baskets on a combination of ball bearings, and long grooved planks, hauled by oxen.” ** Here, haul = pull or transport something with effort"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            pulled them on giant baskets </label>
        </div> <br />
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques5">–   geological: <br />
            o   they were brought from Wales by <span className='numberOfQuestion'>5</span>
            <input type="text" name="ques5" id="ques5" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques5.match(/glaciers/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques5 != "" && UserData.ques5 == "glaciers" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques5.match(/glaciers/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  glaciers
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "glaciers",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "brought, Wales",
                        explain: "Let’s have a look 5th paragraph, 2nd to 5th line. ** “Challenging the classic image industrious builders pushing, carting, rolling or hauling giant stones from faraway Wales, some scientists have suggested that it was glaciers, not humans, that carried the bluestones to Salisbury Plain.” **   Here, carried = brought"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div> <br />
        <div>
          <span className='font-bold'>  Stage 3: </span><br /><br />
          ●   sandstone slabs were arranged into an outer crescent or ring <br />
          Builders <br />
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques6">●   a theory arose in the 17th century that its builders were Celtic<span className='numberOfQuestion'>6</span>
            <input type="text" name="ques6" id="ques6" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques6.match(/druids/gi) && "text-red-600"}
              
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques6 != "" && UserData.ques6 == "druids" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques6.match(/druids/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  druids
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "druids",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "17th century, builders, Celtic",
                        explain: " Let’s have a look 7th paragraph, first 3 lines. ** “But who were the builders of Stonehenge? In the 17 century, archaeologist John Aubrey made the claim that Stonehenge was the work of druids, who had important religious, judicial and political roles in Celtic society.”"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i> <br />
            Purpose</label>
        </div> <br />


        <div className='flex gap-1 flex-wrap '>
          <label htmlFor="ques7">●   many experts agree it has been used as a</label>
          <span className='numberOfQuestion'>7</span>
          <input type="text" name="ques7" id="ques7" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques7.match(/burial/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques7 != "" && UserData.ques7 == "burial" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques7.match(/burial/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                burial
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "burial",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "experts, agree, site",
                      explain: "Let’s have a look 9th paragraph, 2nd to last line. ** “While there is consensus among the majority of modern scholars that Stonehenge once served the function of burial ground” ** Here, the majority of modern scholars = many experts"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i> <br />
          <p>site</p>
        </div> <br />

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques8">●   in the 1960s, it was suggested that it worked as a kind of<span className='numberOfQuestion'>8</span>
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && !UserData.ques8.match(/calendar/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques8 != "" && UserData.ques8 == "calendar" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-2" && !UserData.ques8.match(/calendar/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  calendar
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "calendar",
                        hiddenWord: "",
                        hiddenWord2: "",
                        keyWords: "1960s, worked as a kind",
                        explain: "Let’s have a look 10th paragraph, 1st and 2nd line. ** “In the 1960s, the astronomer Gerald Hawkins suggested that the cluster of megalithic stones operated as a form of calendar” ** Here, operated as a form = worker as a kind"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label> <br />
        </div> <br />


      </div>

      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 9-13</h6> <br />
        <label className=''>Do the following statements agree with the information given in <span className='font-bold'>Reading Passage 1</span>? <br />
          In boxes 9-13 on your answer sheet, write</label> <br />
        <label className=''>TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br /><br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"><span className='numberOfQuestion'>9</span>During the third phase of construction, sandstone slabs were placed in both the outer areas and the middle of the Stonehenge site.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques9 != "TRUE" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques9 != "" && UserData.ques9 == "TRUE" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques9 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "Outer area",
                      hiddenWord2: "middle of Stonehenge",
                      keyWords: "Look at 6th Paragraph, 1st to 4th line",
                      explain: "“Look at 6th Paragraph, 1st to 4th line. ** “At this point Sandstone slabs – known as ‘sarsens’ – were arranged into an outer crescent or ring; some assembled into the iconic three-pieced structures called trilithons that stand tall in the centre of Stonehenge.” **   Here, Outer crescent or ring = Outer area, Arranged = placed, **  Centre of Stonehenge = middle of Stonehenge"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"> <span className='numberOfQuestion'>10</span>There is scientific proof that the bluestones stood in the same spot until approximately 1600 BCE.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques10 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques10 != "" && UserData.ques10 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques10 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "Bluestones did not stand in one spot",
                      hiddenWord2: "",
                      keyWords: "scientific proof, bluestones, stood, same spot, 1600 BCE.",
                      explain: "Look at 6th Paragraph, 4th to last line. ** “Radiocarbon dating has revealed that work continued at Stonehenge until roughly 1600 BCE, with the bluestones in particular being repositioned multiple times.” ** Here, stones were repositioned, Bluestones did not stand in one spot."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>John Aubrey’s claim about Stonehenge was supported by 20th-century findings.
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques11 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques11 != "" && UserData.ques11 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques11 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "but radiocarbon dating in 20 century evident that",
                      hiddenWord2: "the answer is false",
                      keyWords: "John Aubrey, claim, supported, 20th-century, findings.",
                      explain: "Look at 7th Paragraph, 1st three lines and last two lines. ** “In the 17 century, archaeologist John Aubrey …..… However, in the mid-20th century, radiocarbon dating demonstrated that Stonehenge stood more than 1000 years before the Celts inhabited the region.”Here,John Aubrey (17 century) claimed that Stonehenge was the work of druids(people of Celtic society), ** but radiocarbon dating in 20 century evident that Stonehenge were 1000 years older than Celtic society. ** Hence, the answer is false."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"> <span className='numberOfQuestion'>12</span>Objects discovered at Stonehenge seem to indicate that it was constructed by a number of different groups of people.
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques12 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques12 != "" && UserData.ques12 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques12 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "different groups of people",
                      hiddenWord2: "",
                      keyWords: "Look at 8th Paragraph, 1st to last line.",
                      explain: "Look at 8th Paragraph, 1st to last line. ** “Many modern historians and archaeologists now agree that several distinct tribes of people contributed to Stonehenge, each undertaking a different phase of its construction……from the original builders.” ** several distinct tribes of people = different groups of people. ** Here, the whole paragraph describes people from different origins used different type of tools to built the site."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"> <span className='numberOfQuestion'>13</span>Criticism of Gerald Hawkins’ theory about Stonehenge has come mainly from other astronomers.
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques13 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques13 != "" && UserData.ques13 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques13 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "but nowhere in the paragraph it is written that critics were astronomers",
                      hiddenWord2: "",
                      keyWords: "Criticism, Gerald Hawkins theory, astronomers",
                      explain: "Look at 10th Paragraph, 4th to last line. ** “While his theory has received a considerable amount of attention over the decades, critics maintain that Stonehenge’s builders ………..view of the skies.” ** Here, Gerald Hawkins’ theory was criticized, but nowhere in the paragraph it is written that critics were astronomers."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
      </div>




      {/* Passage-2 */}
      <div className='titles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h5 className='underline'>Reading Passage-2</h5>
        <h6>Questions 14-19</h6> <br />
        <label className='mb-2'>Choose the correct letter, A, B, C or D. </label>
        <label className='mb-2'>Write the correct letter in boxes 14-19 on your answer sheet.</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='mb-3'>
          <label htmlFor="ques14"><span className='numberOfQuestion mr-1 mb-2'>14</span>What point does the writer make about AI in the first paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques14 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "C",
                      mainAns: "(The future is unlikely to see limitations on the capabilities of AI.)",
                      hiddenWord: "there will be no limitations on the capabilities of AI in the future",
                      hiddenWord2: "future",
                      keyWords: "points, AI, first paragraph",
                      explain: "Let’s have a look 1st paragraph – fourth to last line. ** “True, these prodigious accomplishments are all in so-called narrow AI, ….. By mid-century, we may have artificial general intelligence (AGI) – machines that can achieve human-level performance on the full range of tasks that we ourselves can tackle.” ** Experts believe this restriction is very temporary. It means there will be no limitations on the capabilities of AI in the future. ** mid-century = future"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques14' />
                It is difficult to predict how quickly AI will progress.
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques14' />
                Much can be learned about the use of AI in chess machines.
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques14' />
                The future is unlikely to see limitations on the capabilities of AI.</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='mr-2 ml-2' type="radio" value="D" name='ques14' />
                Experts disagree on which specialised tasks AI will be able to perform.
              </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques14"><span className='numberOfQuestion mr-1 mb-2'>15</span>What is the writer doing in the second paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques15 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "A",
                      mainAns: "(explaining why machines will be able to outperform humans)",
                      hiddenWord: "But machines are free from these limits, and they will outperform humans",
                      hiddenWord2: "",
                      keyWords: "writer doing, second paragraph",
                      explain: "Let’s have a look 2nd paragraph, first to last line.“Machines will be free of many of the physical constraints on human intelligence……………….. It is remarkable what they accomplish, given these handicaps. But they may be as far from the physical limits of thought as our eyes are from the incredibly powerful Webb Space Telescope.” ** Here, we can see that -- There are physical limits between machine and human , Comparison of human size and web space telescope. , Our brain size is limited. ** So, Human intelligence is limited in many ways. But machines are free from these limits, and they will outperform humans."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='ml-2 mr-2' type="radio" value="A" name='ques15' />
                explaining why machines will be able to outperform humans </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='ml-2 mr-2' type="radio" value="B" name='ques15' />
                describing the characteristics that humans and machines share.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='ml-2 mr-2' type="radio" value="C" name='ques15' />
                giving information about the development of machine intelligence</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='ml-2 mr-2' type="radio" value="D" name='ques15' />
                indicating which aspects of humans are the most advanced</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques16"><span className='numberOfQuestion mr-1 mb-2'>16</span>Why does the writer mention the story of King Midas?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques16 != "B"

              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "B",
                      mainAns: "(to illustrate that poorly defined objectives can go wrong)",
                      hiddenWord: "if any goal is not set for AI (not defined objective), it can be disastrous",
                      hiddenWord2: "But king Midas’s project goal was wrongly defined. There was error",
                      keyWords: "story of King Midas",
                      explain: "Let’s have a look 3rd paragraph, fifth to last line. ** “But the more powerful AI becomes, the more important it will be to specify its goals with great care. Folklore is full of tales of people who ask for the wrong thing, with disastrous consequences-King Midas , for example, might have wished that everything he touched turned to gold, but didn’t really intend this to apply to his breakfast.” ** Here, ** King Midas wished that everything he touched turned to gold, but he did not want to apply it to his food. So when he touched edibles, it turned to gold, and he could not eat. ** Similarly, if any goal is not set for AI (not defined objective), it can be disastrous. Before, starting any work, we should specify our goal, what do actually we want, it should be our priority. But king Midas’s project goal was wrongly defined. There was error."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques16' />
                to compare different visions of progress </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques16' />
                to illustrate that poorly defined objectives can go wrong</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques16' />
                to emphasise the need for cooperation</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='mr-2 ml-2' type="radio" value="D" name='ques16' />
                to point out the financial advantages of a course of action</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques17"><span className='numberOfQuestion mr-1 mb-2'>17</span>What challenge does the writer refer to in the fourth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques17 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "D",
                      mainAns: " (ensuring AI is more human-friendly than we are ourselves)",
                      hiddenWord: "one challenge is ensure",
                      hiddenWord2: "human friendly",
                      keyWords: "challenge, writer refer, fourth paragraph",
                      explain: "Let’s have a look 4th paragraph, first two lines. ** “So we need to create powerful AI machines that are ‘human-friendly’ – that have goals reliably aligned with our own values.” create = ensure ** The main and only one challenge is ensure or create, that are human friendly."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='ml-2 mr-2' type="radio" value="A" name='ques17' />
                encouraging humans to behave in a more principled way </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='ml-2 mr-2' type="radio" value="B" name='ques17' />
                deciding which values we want AI to share with us.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='ml-2 mr-2' type="radio" value="C" name='ques17' />
                creating a better world for all creatures on the planet.</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='ml-2 mr-2' type="radio" value="D" name='ques17' />
                ensuring AI is more human-friendly than we are ourselves.</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques18"><span className='numberOfQuestion mr-1 mb-2'>18</span>What does the writer suggest about the future of AI in the fifth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques18 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "C",
                      mainAns: "(Machines will be superior to humans in certain respects)",
                      hiddenWord: "they (machines) will be better than humans",
                      hiddenWord2: "So machines will be better than humans in this respect",
                      keyWords: " future of AI, fifth paragraph",
                      explain: " Let’s have a look 5th paragraph, third to last line.“Luckily they’ll be smart enough for the job. If there are routes to the moral high ground, they’ll be better than us at finding them and steering us in the right direction.” ** Here **  Moral high ground = Remain moral (right) than others. ** It means if there are ways to go on a high level by being morally right (without cheat), they (machines) will be better than humans in finding them and taking us too in this direction. So machines will be better than humans in this respect."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label >
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques18' />
                The safety of machines will become a key issue. </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label >
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques18' />
                It is hard to know what impact machines will have on the world.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label >
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques18' />
                Machines will be superior to humans in certain respects.</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label >
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='mr-2 ml-2' type="radio" value="D" name='ques18' />
                Many humans will oppose machines having a wider role.</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques19"><span className='numberOfQuestion mr-1 mb-2'>19</span>Which of the following best summarises the writer’s argument in the sixth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques19 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "D",
                      mainAns: "(Human shortcomings will make creating the machines we need more difficult)",
                      hiddenWord: "Because of this human nature",
                      hiddenWord2: "shortcoming",
                      keyWords: "best summarises, sixth paragraph",
                      explain: "Let’s have a look 6th paragraph, fifth to last line. ** “This won’t be easy, given that we are tribal creatures and conflicted about the ideals ourselves. We often ignore the suffering of strangers and even contributed to it, at least indirectly. How then, do we point machines in the direction of something better?” ** Here, This won’t be easy =  difficult ** And, we ignore other unknown people’s problems and even cause problems to them directly or indirectly. Because of this human nature (shortcoming), we cannot direct machines to do good for everyone, which will make it difficult to create the machines we need."
                    }))
                  }}
                >Exp..</span>
              </div>


              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label >
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques19' />
                More intelligent machines will result in greater abuses of power.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label >
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques19' />
                Machine learning will share very few features with human learning.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label >
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques19' />
                There are a limited number of people with the knowledge to program machines.</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label >
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='mr-2 ml-2' type="radio" value="D" name='ques19' />
                Human shortcomings will make creating the machines we need more difficult.</label>
            </div>
          </div>
        </div>

      </div>


      <div className='titles pl-[10px] sm:pl-[25px] mt-5'>
        <h6 className=''>Questions 20-23</h6> <br />
        <label>Do the following statements agree with the claims of the writer in <span className='font-bold'>Reading Passage 2</span>? <br />
          In boxes 20-23 on your answer sheet, write</label> <br />
        <label className='mb-5'>TRUE:--if the statement agrees with the claims of the writer<br /> <br />
          FALSE:-- if the statement contradicts the claims of the writer<br /> <br />
          NOT GIVEN:--if it is impossible to say what the writer thinks about this <br /> </label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span>Machines with the ability to make moral decisions may prevent us from promoting the interests of our communities.
            <select name="ques20" id="ques20" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques20 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques20 != "" && UserData.ques20 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques20 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "AI machines with the ability to make moral decisions",
                      hiddenWord2: "",
                      keyWords: "ability, make moral decisions, may prevent, communities.",
                      explain: " Look at 7th Paragraph, third to last line. ** “Machines who are better than us at sticking to the moral high ground may be expected to discourage some of the lapses we presently take for the granted. We might lose our freedom to discriminate in favour of our own communities, for example.” ** Here, better than us at sticking to the moral high ground = AI machines with the ability to make moral decisions ** Humans tend to favour friends, relatives and acquaintances. But machines will treat the known and unknown equally. In this case, human cannot favour their communities."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>Silicon police would need to exist in large numbers in order to be effective
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques21 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques21 != "" && UserData.ques21 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques21 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "we can easily judge that nothing is given about the number of police",
                      hiddenWord2: "",
                      keyWords: " Silicon police, need to exist, large numbers, effective.",
                      explain: "Look at 8th Paragraph, first to third line. ** “Denying ourselves the freedom to put children to work in factories, or to smoke in restaurants are signs of progress. But are we ready for ethical silicon police limiting our options?” ** Here, if we read these lines superficially, we can easily judge that nothing is given about the number of police."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques22"> <span className='numberOfQuestion'>22</span>Many people are comfortable with the prospect of their independence being restricted by machines.
            <select name="ques22" id="ques22" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques22 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques22 != "" && UserData.ques22 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques22 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "few of us ≠ not many",
                      hiddenWord2: "opposite to the question",
                      keyWords: "people, comfortable, independence, restricted",
                      explain: "Look at 8th Paragraph, first to last line. ** “Loss of freedom to behave badly isn’t always a bad thing of course: denying ourselves the freedom to put children to work in factories…………………… They might be so good at doing it that we won’t notice them; but few of us are likely to welcome such a future.” ** Here, few of us ≠ not many ** So, lines in the paragraph are opposite to the question. "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span>If we want to ensure that machines act in our best interests, we all need to work together.
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques23 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques23 != "" && UserData.ques23 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-2" && UserData.ques23 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Desire to work together",
                      hiddenWord2: "",
                      keyWords: "machines act, best interests, work together.",
                      explain: "Look at 10th Paragraph, second to last line. ** “For our own safety, we need to point these new thinkers in the right direction, and get them to act well for us. It is not yet clear whether this is possible, but if it is, it will require a cooperative spirit, and a willingness to set aside self-interest.” ** Here, Cooperative Spirit = Desire to work together. ** By setting our self-interests aside, we will need to work together to ensure machines work in our best interests."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />

      <div className='titles pl-[10px] sm:pl-[25px] mt-4 mb-4'>
        <h6 className=''>Questions 24-26</h6> <br />
        <label>Complete the summary using the list of phrases, A-F, below.</label>
        <label className='mb-5'>Write the correct letter, A-F, in boxes 24-26 on your answer sheet.</label>
        <h6 className='mt-2 mb-2 text-center w-full'>Using AI in the UK health system</h6>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-2">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques24">AI currently has a limited role in the way </label>
          <span className='numberOfQuestion'>24</span>
          <input type="text" name="ques24" id="ques24" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques24 != "C" && "text-red-600"}
            
            ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques24 != "" && UserData.ques24 == "C" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-2" && UserData.ques24 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "C",
                      mainAns: "(available resources)",
                      hiddenWord: "resources",
                      hiddenWord2: "",
                      keyWords: " limited role, allocated, health service.",
                      explain: "Look at 9th Paragraph, first to third line. ** “AI already has some input into how resources are used in our National Health Service (NHS) here in UK, for example.” ** Here, has some input = has limited role ** used = allocated"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>


          <p>are allocated in the health service. The positive aspect of AI having a bigger role is that it would be more efficient and lead to patient benefits. However, such a change would result, for example, in certain</p>

          <span className='numberOfQuestion'>25</span>
          <input type="text" name="ques25" id="ques25" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques25 != "A" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques25 != "" && UserData.ques25 == "A" && "text-green-700"}
           
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-2" && UserData.ques25 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "A",
                      mainAns: "(medical practitioners)",
                      hiddenWord: "Medical Practitioners",
                      hiddenWord2: "",
                      keyWords: "can be guessed from 9th paragraph",
                      explain: "Look at 9th Paragraph, fifth-sixth line. ** “However, we’d be depriving some humans (e.g. senior doctors) of the control they presently enjoy.” ** Here, Senior doctors = Medical Practitioners ** Some = certain"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>


          <p>not having their current level of</p>

          <span className='numberOfQuestion'>26</span>
          <input type="text" name="ques26" id="ques26" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-26" && UserData.ques26 != "E" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-2" && UserData.ques26 != "" && UserData.ques26 == "E" && "text-green-700"}
           
            
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-2" && UserData.ques26 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "E",
                      mainAns: "(professional authority)",
                      hiddenWord: "Professional Authority",
                      hiddenWord2: "",
                      keyWords: "same paragraph",
                      explain: "Look at 9th Paragraph, fifth-sixth line. ** “However, we’d be depriving some humans (e.g. senior doctors) of the control they presently enjoy.” **  Control = Professional Authority"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> It is therefore important that AI goals are appropriate so that discriminatory practices could be avoided.</p>
        </div>
        <div className='p-3 w-[80%] sm:w-[50%] rounded border-2 border-gray-300'>
          <p><span className='font-bold'>A</span> medical practitioners</p>
          <p><span className='font-bold'>B</span> specialised tasks</p>
          <p><span className='font-bold'>C</span> available resources</p>
          <p><span className='font-bold'>D</span> reduced illness</p>
          <p><span className='font-bold'>E</span>  professional authorit</p>
          <p><span className='font-bold'>F</span>technology experts</p>

        </div>


      </div>

    </section>
  )
}

export default Panel2_Q1



