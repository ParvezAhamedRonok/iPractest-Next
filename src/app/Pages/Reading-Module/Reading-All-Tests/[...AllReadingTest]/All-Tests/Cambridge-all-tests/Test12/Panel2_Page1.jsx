"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import Image from 'next/image';
import { GiNotebook } from "react-icons/gi";
import image1 from "../../../../../../../../assets/images/Reading-Images/Test12Image2.jpg"
import image2 from "../../../../../../../../assets/images/Reading-Images/Test12Image1.jpg" //need to add the real one

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
        <h5>Passage-1</h5>
        <h6>Questions 1-6</h6> <br />
        <label className=''>Label the diagrams below.?<br /> <br />
          Choose ONE WORD ONLY from the passage for each answer.</label> <br />
        <label className=''>Write your answers in boxes 1-6 on your answer sheet</label> <br />
      </div>

      <Image src={image1} alt="" />  <br />

      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"> <span className='numberOfQuestion'>1</span>
            <input type="text" name="ques1" id="ques1" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques1.match(/posts/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques1 != "" && UserData.ques1 == "posts" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques1.match(/posts/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  posts
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "posts",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Persian Qanat Method, direct, the tunneling",
                        explain: " Let’s have a look 1st paragraph, lines 2-5. ** The writer says here, “ . .. . In the early first millennium BCE, they introduced the qanat method of tunnel construction, which consisted of placing posts over a hill in a straight line, to ensure that the tunnel kept to its route, and then digging vertical shafts down into the ground at regular intervals. . .. .” ** Here, **ensure that the tunnel kept to its route = to direct the tunnelling"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            to direct the tunnelling</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2"> water run into a<span className='numberOfQuestion'>2</span>
            <input type="text" name="ques2" id="ques2" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques2.match(/canal/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques2 != "" && UserData.ques2 == "canal" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques2.match(/canal/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  canal
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "canal",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "water, runs into, used by local people",
                        explain: "Let’s have a look 1st paragraph, lines 7-9. ** The writer says, “ . .. Once the tunnel was completed, it allowed water to flow from the top of a hillside down towards a canal, which supplied water for human use. .. ..” ** Here,** water to flow from the top of a hillside down towards = water runs into, ** supplied water for human use = used by local people"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            local people</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3">vertical shaft to remove earth and for<span className='numberOfQuestion'>3</span>
            <input type="text" name="ques3" id="ques3" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques3.match(/ventilation/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques3 != "" && UserData.ques3 == "ventilation" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques3.match(/ventilation/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  ventilation
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "ventilation",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " vertical shafts, remove earth",
                        explain: "The writer says, “ . .. . The excavated soil was taken up to the surface using the shafts, which also provided ventilation during the work. . .” ** Here, ** The excavated soil was taken up to the surface = to remove earth,the shafts = vertical shafts,   also = and"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>

      </div>
      <Image src={image2} alt="the image reading cambridge-2" />  <br />

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques4"> <span className='numberOfQuestion'>4</span>
            <input type="text" name="ques4" id="ques4" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques4.match(/lid/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques4 != "" && UserData.ques4 == "lid" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques4.match(/lid/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  lid
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 4,
                        Ans1: "",
                        mainAns: "lid",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "cross-section, made of, wood, stone",
                        explain: "Let’s have a look 2nd paragraph, lines 3-5. ** The writer says, “ . .. . The shafts were equipped with handholds and footholds to help those climbing in and out of them and were covered with a wooden or stone lid. . .” ** Here, wooden or stone lid = lid made of wood or stone"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            made of wood or stone.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques5"> <span className='numberOfQuestion'>5</span>
            <input type="text" name="ques5" id="ques5" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques5.match(/weight/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques5 != "" && UserData.ques5 == "weight" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques5.match(/weight/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  weight
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "weight",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "attached to, plumb line",
                        explain: "Let’s have a look 2nd paragraph, lines 5-7. ** The writer says, “ . .. .. To ensure that the shafts were vertical, Romans hung a plumb line from a rod placed across the top of each shaft and made sure that the weight at the end of it hung in the center of the shaft. … .” ** Here, at the end of it hung in the center of the shaft = attached to the plumb line"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            attached to the plumb line.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques6"> handholds and footholds used for<span className='numberOfQuestion'>6</span>
            <input type="text" name="ques6" id="ques6" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques6.match(/climbing/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques6 != "" && UserData.ques6 == "climbing" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques6.match(/climbing/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  climbing
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "climbing",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "handholds, footholds, used for",
                        explain: "Let’s have a look 2nd paragraph, lines 3-4. ** The writer says, “ . .. . The shafts were equipped with handholds and footholds to help those climbing in and out of them . … .”"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>
      </div> <br /> <br />


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 7-10</h6> <br />
        <label className=''>Do the following statements agree with the information given in Reading Passage 1?</label> <br />
        <label className=''>In boxes 7-10 on your answer sheet, write</label> <br />
        <label className=''>TRUE---  if the statement agrees with the information <br /> <br />
          FALSE---  if the statement contradicts the information <br /> <br />
          NOT GIVEN --   if there is no information on this.</label> <br />
      </div>



      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span> The counter-excavation method completely replaced the qanat method in the 6th century BCE.
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques7 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques7 != "" && UserData.ques7 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques7 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "did not completely replace the qanat method at that time",
                      hiddenWord2: "the counter-excavation method was used only when the qanat method did not work",
                      hiddenWord3: "",
                      keyWords: "counter-excavation method, completely replaced, qanat method, 6 century BCE",
                      explain: "Look at the Paragraph 3 line 1-3. ** Here, the writer says, “By the 6 century BCE, a second method of tunnel construction appeared called the counter-excavation method, in which the tunnel was constructed from both ends. It was used to cut through high mountains when the qanat method was not a practical alternative. .. .” ** Here, ** her when the qanat method was not a practical alternative = the counter-excavation method was used only when the qanat method did not work; ** which means the counter-excavation method did not completely replace the qanat method at that time."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques8"> <span className='numberOfQuestion'>8</span>Only experienced builders were employed to construct a tunnel using the counter-excavation method.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques8 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques8 != "" && UserData.ques8 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques8 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "DO NOT FIND ANY INFORMATION",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "experienced builders, employed to construct, counter-excavation method",
                      explain: "Look at the Paragraph 3 and 4. ** Here, we find details about the counter-excavation method of tunnelling. ** However, we DO NOT FIND ANY INFORMATION on whether only experienced builders were employed to construct a tunnel using this particular method or not."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9">  <span className='numberOfQuestion'>9</span>  The information about a problem that occurred during the construction of the Saldae aqueduct system was found in an ancient book.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques9 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques9 != "" && UserData.ques9 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques9 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "the problem",
                      hiddenWord2: "was found as a written document",
                      hiddenWord3: "NOT in an ancient book",
                      keyWords: "problem, occurred, Saldae aqueduct system, found, ancient book",
                      explain: "Look at the Paragraph 3, line 10-13 ** The writer says,  “ . . . .. An inscription written on the side of a 428-meter tunnel, built by the Romans as part of the Saldae aqueduct system in modern-day Algeria, describes how the two teams of builders missed each other in the mountain and how the later construction of a lateral link between both corridors corrected the initial error.” ** Here, ** An inscription written = the information about a problem …. was found as a written document , modern-day Algeria = NOT in an ancient book, ** the initial error = the problem,"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10">  <span className='numberOfQuestion'>10</span> The mistake made by the builders of the Saldae aqueduct system was that the two parts of the tunnel failed to meet.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques10 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques10 != "" && UserData.ques10 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques10 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "the two parts of the tunnel failed to mee",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "mistake, Saldae aqueduct system, two parts, tunnel, failed to meet",
                      explain: "Look at the Paragraph 3, line 10-13 ** The writer says, “ . . . .. An inscription written on the side of a 428-meter tunnel, built by the Romans as part of the Saldae aqueduct system in modern-day Algeria, describes how the two teams of builders missed each other in the mountain and how the later construction of a lateral link between both corridors corrected the initial error.” ** Here, ** how the two teams of builders missed each other in the mountain = the two parts of the tunnel failed to meet"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
      </div>


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 11-13</h6> <br />
        <label className=''>CAnswer the questions below..</label> <br />
        <label className=''>Choose NO MORE THAN TWO WORDS from the passage for each answer.</label>
        <label className=''>Write your answers in boxes 11-13 on your answer sheet..</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques11"> <span className='numberOfQuestion'>11</span>What type of mineral were the Dolaucothi mines in Wales built to extract?
            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques11.match(/gold/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques11 != "" && UserData.ques11 == "gold" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques11.match(/gold/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  gold
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "gold",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Dolaucothi mines, Wales, built to extract",
                        explain: " Look at the Paragraph 4, line 6-7. ** The writer says here, “ . . .. . Traces of such tunnels used to mine gold can still be found at the Dolaucothi mines in Wales. …” ** "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            .</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques12"> <span className='numberOfQuestion'>12</span>  In addition to the patron, whose name might be carved onto a tunnel?
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques12.match(/the architect name/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques12 != "" && UserData.ques12 == "the architect name" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques12.match(/the architect name/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  the architect name
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "the architect name",
                        hiddenWord: "architect",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "In addition to, patron, name, might be carved",
                        explain: " Look at the Paragraph 5, line 11-12 ** The writer says, “. .. . Most tunnels had inscriptions showing the names of patrons who ordered construction and sometimes the name of the architect. . . .” ** Here, inscriptions = names . .. .carved "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques13"> <span className='numberOfQuestion'>13</span> What part of Seleuceia Pieria was the Çevlik tunnel built to protect?
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && !UserData.ques13.match(/the harbour/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques13 != "" && UserData.ques13 == "the harbour" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-12" && !UserData.ques13.match(/the harbour/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  the harbour
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "the harbour",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Look at the Paragraph 5, line 13-14",
                        explain: " The writer says, “. . . For example, the 1.4- kilometer Çevik tunnel in Turkey, built to divert the floodwater threatening the harbor of the ancient city of Seleuceia Pieria, … .. . .” **  Here, to divert the floodwater = to protect"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            .</label>
        </div>
      </div>

    </section>
  )
}

export default Panel2_Q1



