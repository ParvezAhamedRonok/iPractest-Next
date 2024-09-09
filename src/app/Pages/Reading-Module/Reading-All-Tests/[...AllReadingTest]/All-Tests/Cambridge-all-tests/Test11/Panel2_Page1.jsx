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


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h5>Passage-1</h5>
        <h6 className=''>Questions 1-5 </h6> <br />
        <label className=''> Do the following statements agree with the information given in Reading Passage 1?<br /> <br />
          In boxes 1-5 on your answer sheet, write<br />
          TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>The Romans’ shipbuilding skills were passed on to the Greeks and the Egyptians.
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques1 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques1 != "" && UserData.ques1 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques1 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "the Greeks and the Egyptians",
                      hiddenWord2: "opposite meaning",
                      hiddenWord3: "",
                      keyWords: "The Romans’, passed, Greeks and the Egyptians.",
                      explain: "Let’s have a look at the first paragraph line 3. ** Here, the writer says, “The Romans were not traditionally sailors but mostly land-based people, who learned to build ships from the people that they conquered, namely the Greeks and the Egyptians. ** Here, from the people = were passed on (opposite meaning)"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques2"> <span className='numberOfQuestion'>2</span>  Skilled craftsmen were needed for the mortise and tenon method of fixing planks.
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques2 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques2 != "" && UserData.ques2 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques2 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "We can not find the information",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Skilled craftsmen, needed, mortise and tenon, planks.",
                      explain: "In the second paragraph, line 5 ** the writer says, “Starting from the 6th century BCE, they were fixed using a method called mortise and tenon, whereby one plank locked into another without the need for stitching.” ** We can not find the information about the needed for the mortise and tenon method of fixing planks."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques3">  <span className='numberOfQuestion'>3</span>The later practice used by Mediterranean shipbuilders involved building the hull before the frame.
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques3 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques3 != "" && UserData.ques3 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques3 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "proceeding ",
                      hiddenWord2: "opposite",
                      hiddenWord3: "",
                      keyWords: "Mediterranean shipbuilders, hull, before, frame.",
                      explain: " In the 2ND paragraph line no. 6 ** the writer says, “Then in the first centuries of the current era, Mediterranean shipbuilders shifted to another shipbuilding method, still in use today, which consisted of building the frame first and then proceeding with the hull and the other components of the ship.” **   Here, first =  before (opposite) "
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques4">  <span className='numberOfQuestion'>4</span>The Romans called the Mediterranean Sea Mare Nostrum because they dominated its use.
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques4 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques4 != "" && UserData.ques4 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques4 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "our sea ",
                      hiddenWord2: "Mediterranean",
                      hiddenWord3: "",
                      keyWords: "Mediterranean Sea Mare Nostrum, because, dominated.",
                      explain: "In the 3rd paragraph last lines. ** The writer says, “Eventually, Rome’s navy became the largest and most powerful in the Mediterranean, and the Romans had control over what they therefore called Mare Nostrum meaning ‘our sea’.” **   Here, control over = dominated. "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques5"> <span className='numberOfQuestion'>5</span> Most rowers on ships were people from the Roman army.
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques5 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques5 != "" && UserData.ques5 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques5 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "military",
                      hiddenWord2: "rowers ",
                      hiddenWord3: "",
                      keyWords: "Most rowers, Roman army.",
                      explain: "In the 4th paragraph line 5. ** The writer says, “It is worth noting that contrary to popular perception, rowers were not slaves but mostly Roman citizens enrolled in the military.” "
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div> <br />


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 6-13</h6> <br />
        <label className=''>Complete the summary below.</label> <br />
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.</label> <br />
        <label className=''>Write your answers in boxes 6-13 on your answer sheet.
        </label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] p-2 mb-2 border-1 border-gray-400">
        <p className='p-3 w-full text-center font-bold'>Warships and merchant ships</p> <br />

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques6"> Warships were designed so that they were<span className='numberOfQuestion'>6</span>
            <input type="text" name="ques6" id="ques6" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques6.match(/lightweight/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques6 != "" && UserData.ques6 == "lightweight" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques6.match(/lightweight/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  lightweight
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "lightweight",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Warships, designed, moved, quickly",
                        explain: "Look at the Paragraph no. 3 line 1. ** Here, the author of the text writes in the beginning, “Warships were built to be lightweight and very speedy” **  Here, very speedy = moved "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            and moved quickly. They often remained afloat after battles and were able to sail close to land as they lacked any.</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques7">additional weight. A battering ram made of <span className='numberOfQuestion'>7</span>The
            <input type="text" name="ques7" id="ques7" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques7.match(/bronze/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques7 != "" && UserData.ques7 == "bronze" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques7.match(/bronze/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  bronze
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 7,
                        Ans1: "",
                        mainAns: "bronze",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " remained, afloat, battles, lacked, additional weight, battering ram, made of, attacking, damaging, timber, oars, enemy ships.",
                        explain: "Look at the Paragraph no. 3 line 4 ** Here, the author of the text writes “They had a bronze battering ram, which was used to pierce the timber hulls or break the oars of enemy vessels.” "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            was included in the design for attacking and damaging the timber and oars of enemy ships. Warships, such as the.</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques8">‘trireme’, had rowers on three different <span className='numberOfQuestion'>8</span>
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques8.match(/levels/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques8 != "" && UserData.ques8 == "levels" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques8.match(/levels/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  levels
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "levels",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "trireme, rowers, three different",
                        explain: "Look at the Paragraph no. 4 line 1 ** Here, the author of the text writes “There were many kinds of warship. The ‘trireme’ was the dominant warship from the 7th to 4th century BCE. It had rowers in the top, middle and lower levels,……” ** Here, top, middle and lower levels = three different levels "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques9">Unlike warships, merchant ships had a broad <span className='numberOfQuestion'>9</span>
            <input type="text" name="ques9" id="ques9" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques9.match(/hull/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques9 != "" && UserData.ques9 == "hull" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques9.match(/hull/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  hull
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "hull",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Unlike warships, merchant ships, broad, lay, below the surface, see.",
                        explain: "Look at the Paragraph no. 5 line 1 ** Here, the author of the text writes “Merchant ships were built to transport lots of cargo over long distances and at a reasonable cost. They had a wider hull, double planking and a solid interior for added stability. Unlike warships, their V-shaped hull was deep underwater, meaning that they could not sail too close to the coast.” **   Here, deep underwater = below the surface"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            that lay far below the surface of the sea. Merchant ships were steered through the water with the help of large rudders and</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques10"> a tiller bar. They had both square and<span className='numberOfQuestion'>10</span>
            <input type="text" name="ques10" id="ques10" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques10.match(/triangular/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques10 != "" && UserData.ques10 == "triangular" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques10.match(/triangular/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  triangular
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 10,
                        Ans1: "",
                        mainAns: "triangular",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Merchant ships, steered, large rudders, a tiller bar, square, sails.",
                        explain: "Look at the Paragraph no. 5 line 4 ** Here, the author of the text writes “They usually had two huge side rudders located off the stern and controlled by a small tiller bar connected to a system of cables. They had from one to three masts with large square sails and a small triangular sail at the bow.”"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            sails. On merchant ships and.</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques11"> warships,<span className='numberOfQuestion'>11</span>
            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques11.match(/music/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques11 != "" && UserData.ques11 == "music" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques11.match(/music/gi)

                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  music
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "music",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "rowers, oars, same time..",
                        explain: "Look at the Paragraph no. 5 line 6 ** Here, the author of the text writes “Just like warships, merchant ships used oarsmen, but coordinating the hundreds of rowers in both types of ship was not an easy task. In order to assist them, music would be played on an instrument, and oars would then keep time with this.” ** "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            was used to ensure rowers moved their oars in and out of the water at the same time.</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques12">Quantities of agricultural goods such as <span className='numberOfQuestion'>12</span>
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques12.match(/grain/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques12 != "" && UserData.ques12 == "grain" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques12.match(/grain/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  grain
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "grain",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Quantities, agricultural goods, transported, merchant ships, main ports, ITALY.",
                        explain: "Look at the Paragraph no. 6 line 1 ** Here, the author of the text writes in the beginning, “The cargo on merchant ships included raw materials (e.g. iron bars, copper, marble and granite), and agricultural products (e.g. grain from Egypt’s Nile valley). "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            were transported by merchant ships to two main ports in Italy. The ships were pulled to the shore by.</label>

          <label htmlFor="ques13"> <span className='numberOfQuestion'>13</span>
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques13.match(/towboats/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques13 != "" && UserData.ques13 == "towboats" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques13.match(/towboats/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  towboats
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "towboats",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "main ports, ITALY, pulled, shore, weather, clear, see ilands or lands, used landmarks, navigate their route.",
                        explain: "Look at the Paragraph no. 6 line 3 ** Here, the author of the text writes, “Goods from all over the world would come to the city through the port of Pozzuoli situated west of the bay of Naples in Italy and through the gigantic port of Ostia situated at the mouth of the Tiber River. Large merchant ships would approach the destination port and, ** just like today, be intercepted by a number of towboats that would drag them to the quay.” ** Here, drag = pull    Quay = shore , port of Pozzuoli + port of Ostia = two main port "
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            When the weather was clear and they could see islands or land, sailors used landmarks that they knew to help them navigate their route.</label>
        </div>


      </div>


    </section>
  )
}

export default Panel2_Q1



