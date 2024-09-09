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
        <h5>Reading Passage-1</h5>
        <h6 className=''>Questions 1-8</ h6> <br />
        <label> Do the following statements agree with the information given in <span className='font-bold'>Reading Passage 1</span>?<br /> <br />
          In boxes 1-8 on your answer sheet, write</label> <br />
        <label className=''>TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques61"><span className='numberOfQuestion'>1</span> Most geoglyphs in England are located in a particular area of the country.
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques1 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques1 != "" && UserData.ques1 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques1 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "country’s southern counties",
                      hiddenWord2: "a particular area of the country",
                      hiddenWord3: "",
                      keyWords: "Most geoglyphs, England, located, particular area",
                      explain: "The answer is found in lines 2-3 of paragraph no. 1, where the writer of the text says, “ . . .. There are 56 hill figures scattered around England, with the vast majority on the chalk downlands of the country’s southern counties. . . .. .. ..” ** Here, the vast majority = Most geoglyphs, ** country’s southern counties = a particular area of the country."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"> <span className='numberOfQuestion'>2</span>There are more geoglyphs in the shape of a horse than any other creature.
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques2 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques2 != "" && UserData.ques2 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques2 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "country’s southern counties",
                      hiddenWord2: "We do not find any information",
                      hiddenWord3: "",
                      keyWords: "more geoglyphs, shape of a horse, than, any other creature",
                      explain: "We do not find any information regarding any comparison among geoglyphs of horse and creatures of other shapes."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3">  <span className='numberOfQuestion'>3</span> A recent dating of the Uffington White Horse indicates that people were mistaken about its age.
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques3 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques3 != "" && UserData.ques3 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques3 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "a recent dating",
                      hiddenWord2: "people were mistaken about its age",
                      hiddenWord3: "",
                      keyWords: "recent dating, Uffington White Horse, indicates, people, mistaken about, its age.",
                      explain: "Lines 1-3 of paragraph no. 2 gives answer to this question. ** The writer says here, “The most famous of these figures is perhaps also the most mysterious – the Uffington White Horse in Oxfordshire. The White Horse has recently been re-dated and shown to be even older than its previously assigned ancient pre-Roman Iron Age date. . . .. .” ** Here, recently been re-dated = a recent dating, ** to be even older than its previously assigned ancient pre-Roman Iron Age date = people were mistaken about its age."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques4">  <span className='numberOfQuestion'>4</span>Historians have come to an agreement about the origins of the Long Man of Wilmington.
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques4 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques4 != "" && UserData.ques4 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques4 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "the lines indicate that",
                      hiddenWord2: "it was done between the 11th and 15th centuries",
                      hiddenWord3: "",
                      keyWords: "Historians, come to an agreement, origins, Long Man of Wilmington",
                      explain: "Lines 3-6 of paragraph no. 2 says, “ . .. . . . More controversial is the date of the enigmatic Long Man of Wilmington in Sussex. While many historians are convinced the figure is pre-historic, others believe that it was the work of an artistic monk from a nearby priory and was created between the 11th and 15th centuries.” ** Here, the lines indicate that while many historians believe that the Long man of Wilmington was pre-historic, others believe that it was done between the 11th and 15th centuries."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques5"> <span className='numberOfQuestion'>5</span> Geoglyphs were created by people placing white chalk on the hillside.
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques5 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques5 != "" && UserData.ques5 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques5 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "NOT by placing white chalk on the hillside",
                      hiddenWord2: "to remove the overlying grass",
                      hiddenWord3: "",
                      keyWords: "Geoglyphs, created by people, placing white chalk, hillside",
                      explain: "The first lines of paragraph no. 3 have the answer. Here, the writer says, “The method of cutting these huge figures was simply to remove the overlying grass to reveal the gleaming white chalk below. . .. … ..” ** Here, The method of cutting these huge figures = geoglyphs were created, to remove the overlying grass = cutting the grass. These lines clearly suggest that geoglyphs were created by cutting the grass that covered the white chalk, NOT by placing white chalk on the hillside."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"> <span className='numberOfQuestion'>6</span> Many geoglyphs in England are no longer visible.
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques6 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques6 != "" && UserData.ques6 == "TRUE" && "text-green-700"}
               `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques6 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "many geoglyphs",
                      hiddenWord2: "no longer visible",
                      hiddenWord3: "",
                      keyWords: "many geoglyphs, England, no longer visible",
                      explain: "In paragraph no. 3, take a look at line no. 4, “ . . .. . One reason that the vast majority of hill figures have disappeared is that . .. . …” ** Here, vast majority of hill figures = many geoglyphs,**     have disappeared = no longer visible."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques7"> <span className='numberOfQuestion'>7</span> The shape of some geoglyphs has been altered over time.
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques7 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques7 != "" && UserData.ques7 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques7 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "the shape altered",
                      hiddenWord2: "creating a different shape",
                      hiddenWord3: "",
                      keyWords: "shape of some geoglyphs, altered, over time",
                      explain: "Again, in paragraph no. 3, lines 6-8 say, “ . . …. . . Furthermore, over hundreds of years the outlines would sometimes change due to people not always cutting in exactly the same place, thus creating a different shape to the original geoglyph. .. .. ..” ** Here, creating a different shape = the shape altered, **    over hundreds of years = over time."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8"> <span className='numberOfQuestion'>8</span>The fame of the Uffington White Horse is due to its size.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques8 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques8 != "" && UserData.ques8 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques8 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "we do not find any information",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "fame, Uffington White Horse, due to, its size",
                      explain: "Paragraphs no. 4, 5 and 6 talk about the details of the Uffington White Horse. ** However, we do not find any information regarding the fame of the Horse due to its size."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 9-13</h6> <br />
        <label className=''>Complete the summary below..</label> <br />
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.</label>
        <label className=''>Write your answers in boxes 9-13 on your answer sheet.</label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <h6 className='p-3 w-full text-center border-1 border-gray-400'>The Uffington White Horse</h6> <br /> <br />
        <h6>The location of the Uffington White Horse:</h6>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques9">●   a distance of 2.5 km from Uffington village <br />

            ●   near an ancient road known as the <span className='numberOfQuestion'>9</span>
            <input type="text" name="ques9" id="ques9" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && !UserData.ques9.match(/Ridgeway/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques9 != "" && UserData.ques9 == "Ridgeway" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && !UserData.ques9.match(/Ridgeway/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Ridgeway
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "Ridgeway",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "location, distance of 2.5 km, from Uffington village, near, ancient road, known as",
                        explain: "Read paragraph no. 4 carefully. ** Here, in lines 3-5, the author of the text says, “ . . .. .. The horse is situated 2.5 km from Uffington village on a steep slope close to the late Bronze Age (c. 7th century BCE) hillfort of Uffington Castle and below the Ridgeway, a long-distance Neolithic track.” **   Here, The horse = The Uffington White Horse, **     situated = location, below = near, Neolithic track = ancient road."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            <br />
            ●   close to an ancient cemetery that has a number of burial mounds</label>
        </div>


        <h6>Dating the Uffington White Horse:</h6>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques10">●   first reference to White Horse Hill appears in <span className='numberOfQuestion'>10</span>
            <input type="text" name="ques10" id="ques10" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && !UserData.ques10.match(/documents/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques10 != "" && UserData.ques10 == "documents" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && !UserData.ques10.match(/documents/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  documents
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 10,
                        Ans1: "",
                        mainAns: "documents",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Dating, first reference, White Horse Hill, appears in, 1070s",
                        explain: "If we look at paragraph no. 6, in the beginning, the writer says, “The earliest evidence of a horse at Uffington is from the 1070s CE when ‘White Horse Hill’ is mentioned in documents from the nearby Abbey of Abingdon, . . .. .. ..” **   Here, The earliest evidence = first reference, ** mentioned = appears in."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            from the 1070s <br />
            ●   horses shown on coins from the period 100 BCE – 1 BCE are similar in appearance</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques11">●   according to analysis of the surrounding<span className='numberOfQuestion'>11</span>
            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && !UserData.ques11.match(/soil/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques11 != "" && UserData.ques11 == "soil" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && !UserData.ques11.match(/soil/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  soil
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "soil",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "according to analysis, surrounding, the Horse, Late Bronze Age/ Early Iron Age",
                        explain: "In paragraph no. 7, lines 1-4 mention, “However, in 1995 Optically Stimulated Luminescence (OSL) testing was carried out by the Oxford Archaeological Unit on soil from two of the lower layers of the horse’s body, and from anther cut near the base. The result was a date for the horse’s construction somewhere between 1400 and 600 BCS – in other words, it had a Late Bronze Age or Early Iron Age origin.” ** Here, Optically Stimulated Luminescence (OSL) testing = according to analysis, ** two of the lower layers of the horse’s body = surroundings."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            , the Horse is Late Bronze Age / Early Iron Age</label>
        </div>



        <h6>Possible reasons for creation of the Uffington White Horse::</h6>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques12">●   an emblem to indicate land ownership <br />

            ●   formed part of an ancient ritual<br />

            ●   was a representation of goddess Epona – associated with protection of horses and<span className='numberOfQuestion'>12</span>
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && !UserData.ques12.match(/fertility/gi) && "text-red-600"}
               ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques12 != "" && UserData.ques12 == "fertility" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && !UserData.ques12.match(/fertility/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  fertility
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "fertility",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Possible reasons, creation of, Uffington White Horse, representation, goddess Epona, protection of horses",
                        explain: "The answer lies in paragraph no. 8, where the writer says in lines 4-6, “ . . . . Some researchers see the horse as representing the Celtic horse goddess Epona, who was worshipped as a protector of horses, and for her associations with fertility. .. .. ..” ** Here, protector of horses = association with protection of horses."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques13">●  was a representation of a Welsh goddess called <span className='numberOfQuestion'>13</span>
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && !UserData.ques13.match(/Rhiannon/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques13 != "" && UserData.ques13 == "Rhiannon" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && !UserData.ques13.match(/Rhiannon/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Rhiannon
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "Rhiannon",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "representation of, Welsh goddess, called",
                        explain: "Lines 9-11 in paragraph no. 8 say, “. … It is possible that the carving represents a goddess in native mythology, such as Rhiannon, described in later Welsh mythology as a beautiful woman dressed in gold and riding a white horse.” **   Here, represents = representation."
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

export default Panel2_Q1



