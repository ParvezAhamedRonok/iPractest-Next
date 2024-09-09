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
        <h6 className='mb-1'>Reading Passages-1</h6>
        <h6 className=''>Questions 1-4</h6> <br />
        <label className=''>Reading Passage 1 has eight sections, A-H.</label>
        <label className=''>Which section contains the following information?</label> <br />
        <label className=''>Choose the correct letter, A-H, in boxes 1-4 on your answer sheet.</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>an explanation of the industrial processes that create potential raw materials for concrete
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques1 != "G" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques1 != "" && UserData.ques1 == "G" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques1 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "G",
                      hiddenWord: "raw material for concrete",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph G, first to last line. Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix, Fly ash, a byproduct of coal burning power plants, can be incorporated…………….. Iron-ore slag , a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas emissions. **   Fly ash and iron ore slag (raw material for concrete) can be used in the place (notcompletely replaced) of cement. The industrial process which produces fly ash is coal burning in power plants, and the iron-ore smelting process produces iron-ore slag."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>a reference to the various locations where high-rise wooden buildings can be found
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques2 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques2 != "" && UserData.ques2 == "D" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques2 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "Vienna and Brumunddal",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " aragraph D, third to last line. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings. **  Locations: Vancouver, Vienna and Brumunddal "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3"> <span className='numberOfQuestion'>3</span>an indication of how widely available the raw materials of concrete are
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques3 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques3 != "" && UserData.ques3 == "C" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques3 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "widely available",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph C, first two line. Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvelous properties: Portland cement, **  Raw material of concrete is cement, which is found in abundance(widely available) "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>the belief that more high-rise wooden buildings are needed before wood can be regarded as a viable construction material
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques4 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques4 != "" && UserData.ques4 == "F" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques4 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "from bottom fourth to last line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F, from bottom fourth to last line. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings **  The meaning of these lines is that if more big buildings made of wood become successful, then it can be regarded as an alternative to concrete."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

      </div> <br />

      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6>Questions 5-8</h6> <br />
        <label className=''>
          Complete the summary below. <br /> <br />
          Choose ONE WORD ONLY from the passage for each answer. <br /> <br />
          Write your answers in boxes <span className='font-bold'>5-8 </span>on your answer sheet.</label> <br />
        <label className='mt-2 mb-2'>Making buildings with wood</label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques24">Wood is a traditional building material, but current environmental concerns are encouraging <span className='numberOfQuestion'>5</span>

            <input type="text" name="ques5" id="ques5" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && !UserData.ques5.match(/architects/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques5 != "" && UserData.ques5 == "architects" && "text-green-700"}
             
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && !UserData.ques5.match(/architects/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  architects
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "architects",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Paragraph D, first three line. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            to use wood in modern construction projects. Using wood, however, has its challenges. For example, as




            <span className='numberOfQuestion'>6</span>
            <input type="text" name="ques6" id="ques6" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && !UserData.ques6.match(/moisture/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques6 != "" && UserData.ques6 == "moisture" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && !UserData.ques6.match(/moisture/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  moisture
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "moisture",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph E, first two line. Wood expands as it absorbs moisture."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            in the atmosphere enters wood, it increases in size. In addition, wood is prone to pests and the risk of fire is greater. However, wood can be turned into a better construction material if it is treated and combined with other materials. In one process,



            <span className='numberOfQuestion'>7</span>
            <input type="text" name="ques7" id="ques7" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && !UserData.ques7.match(/layers/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques7 != "" && UserData.ques7 == "layers" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && !UserData.ques7.match(/layers/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  layers
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 7,
                        Ans1: "",
                        mainAns: "layers",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph E, fourth & fifth line. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            of solid wood are glued together to create building blocks. These blocks are lighter than concrete and steel but equal them in strength. Experts say that wooden buildings are an improvement on those made of concrete and steel in terms of the

            <span className='numberOfQuestion'>8</span>
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && !UserData.ques8.match(/speed/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques8 != "" && UserData.ques8 == "speed" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && !UserData.ques8.match(/speed/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  speed
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "speed",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph E’s last two lines. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            with which they can be constructed and how much noise is generated by the process.</label>
        </div>

      </div> <br />



      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6>Questions 9-13 </h6> <br />
        <label className=''>
          Look at the following statements (Questions 9-13) and the list of people below. <br /> <br />
          Match each statement with the correct person, A, B, C or D. <br /> <br />
          Write the correct letter, A, B, C or D, in boxes 9-13 on your answer sheet. <br /> <br />
          NB   You may use any letter more than once.</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"> <span className='numberOfQuestion'>9</span>The environmental advantage of cement alternatives may not be as great as initially assumed.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques9 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques9 != "" && UserData.ques9 == "C" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques9 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "C (Anna Surgenor) –",
                      hiddenWord: "Anna Surgenor",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph G, second part fourth to last line. Anna Surgenor – But there are several calculations that need to be considered across the entire life cycle of the building – these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective. **  If a product used in place of concrete to make a building is shipped from a distant place, a huge amount of fossil fuel might be used, which will not be environmentally friendly. After considering everything (everything was not considered before), the environmental advantage of cement alternatives can be found, said Anna Surgenor."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"> <span className='numberOfQuestion'>10</span> It would be hard to create a construction alternative to concrete that offers so many comparable benefits.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques10 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques10 != "" && UserData.ques10 == "A" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques10 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "A  (Chris Cheeseman) –",
                      hiddenWord: "Chris Cheeseman",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph C, sixth to last line. According to Cheeseman, all these factors together make concrete hard to beat. ‘Concrete is amazing stuff. Making anything with similar properties is going to be very difficult.’  **  Hard to beat = Nothing is equal and above this. Concrete has many beneficial properties that cannot be developed in any other material, said Chris Cheeseman."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span> Worries about the environment have led to increased interest in wood as a construction material.
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques11 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques11 != "" && UserData.ques11 == "B" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques11 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "B  (Markus Mannstrom) –",
                      hiddenWord: "Markus Mannstrom",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph F, first three line. Stora Enso is Europe’s biggest supplier of crosslaminated timber, and its vice-president Markus Mannstrom reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. ** Climate change concerns = Worries about the environment, Increased interest = Increased demand."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>Expense has been a factor in the negative response to the development of new cements.
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques12 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques12 != "" && UserData.ques12 == "D" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques12 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "D  (Felix Preston and Johanna Lehne)",
                      hiddenWord: "Markus Mannstrom",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph H, third to last line. Felix Preston and Johanna Lehne of the UK’s Royal Institute of International Affairs reached the conclusion that,’ Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present these alternatives are rarely as cost-effective as conventional cement, and they face raw material shortages and resistance from customers.’ ** Alternatives are rarely as cost-effective as conventional cement: it means alternatives are more expensive than cement, which is a negative factor"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>The environmental damage caused by concrete is due to it being produced in large quantities
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques13 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques13 != "" && UserData.ques13 == "A" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques13 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "A  (Chris Cheeseman) ",
                      hiddenWord: "Chris Cheeseman",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B, last three line. Chris Cheeseman –  ‘Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue.’ **  Concrete does not produce much carbon but cement. When a large quantity of concrete is produced, the small amount of carbon produced by concrete increases to a high amount."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <h6 className='p-3'>List of People</h6> <br />
        <div className="Articles w-auto rounded p-3 border-2 border-gray-300 flex flex-wrap gap-3">
          <p><span className='font-bold mr-2'>A</span>Chris Cheeseman</p> <br />
          <p><span className='font-bold mr-2'>B</span>Markus Mannstrom</p> <br />
          <p><span className='font-bold mr-2'>C</span>Anna Surgenor</p> <br />
          <p><span className='font-bold mr-2'>D</span>Felix Preston and Johanna Lehne</p> <br />
        </div>

      </div>


    </section>
  )
}

export default Panel2_Q1



