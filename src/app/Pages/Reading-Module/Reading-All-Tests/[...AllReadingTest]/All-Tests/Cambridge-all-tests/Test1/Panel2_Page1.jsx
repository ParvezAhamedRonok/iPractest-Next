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

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 1 - 13</h6> <br />
        <label className=''>Complete the sentences below.</label>
        <label>Choose NO MORE THAN TWO WORDS ANDIOR A NUMBER from the passage for each answer.</label>
        <label>Write your answers in boxes 1-3 on your answer sheet.</label> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5 p-2 border-2 border-gray-400'>
        <h6 className='mt-1 mb-1 text-center'>Urban farming in Paris</h6> <br />
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"> <span className='numberOfQuestion'>1</span>Vertical tubes are used to grow strawberries,
            <input type="text" name="ques1" id="ques1" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques1.match(/lettuces/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques1 != "" && UserData.ques1 == "lettuces" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques1.match(/lettuces/gi) 
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  lettuces
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "lettuces",
                        keyWords: "Vertical tubes, grow, strawberries, herbs.",
                        explain: "Let’s have a look – First paragraph, 4th to 6th line. ** From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs , such as basil, sage and peppermint. ** Here, burst = grow"
                      }))
                    }}
                  >Exp..</span>
                </div> : ""}
            </i>
            and herbs.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>There will eventually be a daily harvest of as much as.
            <input type="text" name="ques2" id="ques2" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques2.match(/1000 kg/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques2 != "" && UserData.ques2 == "1000 kg" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques2.match(/1000 kg/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  1000 kg
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "1000 kg",
                        keyWords: "eventually, daily harvest, as much as, weight fruit, vegetables.",
                        explain: "2nd paragraph’s, 4th to 8th  line the writer says, “When the remaining two thirds of the vast open area are in production, 20 staff will harvest up to 1000 kg of perhaps 35 different varieties of fruit and vegetables, every day. ** Here, production = weight ** everyday = daily"
                      }))
                    }}
                  >Exp..</span>
                </div> : ""}
            </i>
            in weight of fruit and vegetables.</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span>It may be possible that the farm’s produce will account for as much as 10% of the city’s
            <input type="text" name="ques3" id="ques3" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques3.match(/consumption/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques3 != "" && UserData.ques3 == "consumption" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques3.match(/consumption/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  consumption
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "consumption",
                        keyWords: " may be possible, farm’s produce, will account, 10% , city’s, overall..",
                        explain: "In the 2nd paragraph last 3 lines, The writer says, “But if enough unused space can be developed like this, there’s no reason why you shouldn’t eventually target maybe between 5% and 10% of consumption.” ** Here, there’s no reason why you shouldn’t eventually target maybe = may be possible"
                      }))
                    }}
                  >Exp..</span>
                </div> : ""}
            </i>
            overall.</label>
        </div>

      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mb-3 mt-4'>
        <h6 className=''>Questions 4-7</h6> <br />
        <label className=''>Complete the table below.</label>
        <label>Choose ONE WORD ONLY from the passage for each answer.</label>
        <label>Write your answers in boxes 4-7 on your answer sheet. </label>  <br />
        <label className='mt-1 mb-1'>Intensive farming versus aeroponic urban farming</label>
      </div>
      <div className="Questions w-full p-4 mb-4">
        <div className='w-full flex justify-between border-1 p-4 border-gray-300'>
          <h6>Growth</h6>
          <h6>Selection</h6>
          <h6>Sale</h6>
        </div>
        <div className='w-full grid grid-cols-2 border-1 border-gray-300 box-border overflow-auto'>
          <div className=' h-[200px]border-1 border-gray-300 p-3 '>
            <p className='m-auto w-full h-full'>Intensive <br /> farming</p>
          </div>
          <div className='h-[200px]flex flex-wrap border-1 border-gray-300 box-border overflow-auto p-3'>
            <label htmlFor="ques4">●   wide range of.
              <span className='numberOfQuestion'>4</span>
              <input type="text" name="ques4" id="ques4" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques4.match(/pesticides/gi) && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques4 != "" && UserData.ques4 == "pesticides" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques4.match(/pesticides/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    pesticides
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 4,
                          Ans1: "",
                          mainAns: "pesticides",
                          keyWords: "intensive farming, wide range of, used.",
                          explain: "Look at the 3rd Paragraph, 4th and 5th line. ** First, I don’t much like the fact that most of the fruit and vegetables we eat have been treated with something like 17 different pesticides. ** Here, 17 different = wide range"
                        }))
                      }}
                    >Exp..</span>
                  </div> : ""}
              </i>
            </label>
            <p>used <br />●   techniques pollute air</p>
          </div>
          <div className='h-[200px]flex flex-wrap border-1 border-gray-300 box-border overflow-auto p-3'>
            <label htmlFor="ques5">●   quality not good <br />
              ●   varieties of fruit and vegetables chosen that can survive long

              <span className='numberOfQuestion'>5</span>
              <input type="text" name="ques5" id="ques5" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques5.match(/journeys/gi) && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques5 != "" && UserData.ques5 == "journeys" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques5.match(/journeys/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    journeys
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 5,
                          Ans1: "",
                          mainAns: "journeys",
                          keyWords: "quality, vegetables, chosen, survive long.",
                          explain: " Look at the 3rd Paragraph, third and fourth last lines that their quality is so poor , because the varieties are selected for their capacity to withstand such substantial journeys. ** Here, withstand = survive ** substantial = long"
                        }))
                      }}
                    >Exp..</span>
                  </div> : ""}
              </i>
            </label>
          </div>
          <div className='h-[200px]flex flex-wrap border-1 border-gray-300 box-border overflow-auto p-3'>
            <div>
              <span className='numberOfQuestion'>6</span>
              <input type="text" name="ques6" id="ques6" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques6.match(/producers/gi) && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques6 != "" && UserData.ques6 == "producers" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques6.match(/producers/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    producers
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 6,
                          Ans1: "",
                          mainAns: "producers",
                          keyWords: "receive, very little, overall income.",
                          explain: "Look at the 3rd Paragraph, ninth-last line that 80%of the price I pay goes to wholesalers and transport companies, not the producers"
                        }))
                      }}
                    >Exp..</span>
                  </div> : ""}
              </i>
            </div>
            <p>receive very little of overall income</p>
          </div>
        </div>
        <div className='w-full grid grid-cols-2   border-1 border-gray-300 box-border overflow-auto'>
          <div className='text-center h-[200px]border-1 border-gray-300 p-3'>
            Aeroponic <br /> urban farming
          </div>
          <div className='h-[200px]flex flex-wrap border-1 border-gray-300 box-border overflow-auto p-3'>
            ●   no soil used
            ●   nutrients added to water, which is recycled
          </div>
          <div className='h-[200px]flex flex-wrap border-1 border-gray-300 box-border overflow-auto p-3'>
            <label htmlFor="ques7">●produce chosen because of it</label>
            <div>
              <span className='numberOfQuestion'>7</span>
              <input type="text" name="ques7" id="ques7" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-1" && !UserData.ques7.match(/flavour/gi) && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques7 != "" && UserData.ques7 == "flavour" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-1" && !UserData.ques7.match(/flavour/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    flavour
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 7,
                          Ans1: "",
                          mainAns: "flavour",
                          keyWords: "receive, very little, overall income.",
                          explain: "Look at the 4th Paragraph, 4th to 5th line. ** ‘You can select crop varieties for their flavour, not their resistance to the transport and storage chain. ** Here, select = choose ** "
                        }))
                      }}
                    >Exp..</span>
                  </div> : ""}
              </i>
            </div>
          </div>

        </div>

      </div>




      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 8-13</h6> <br />
        <label className=''>Do the following statements agree with the information given in <span className='font-bold'>Reading Passage 1</span>?</label>
        <label>In boxes 8-13 on your answer sheet, write</label><br /><br />
        <label>TRUE --- if the statement agrees with the information <br />  <br />
          FALSE--- if the statement contradicts the information<br />  <br />
          NOT GIVEN ---if there is no information on this</label><br />
      </div>
      <div className="Questions pl-[10px] sm:pl-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques8"> <span className='numberOfQuestion'>8</span>Urban farming can take place above or below ground.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques8 != "TRUE" && "text-red-600"}   ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques8 != "" && UserData.ques8 == "TRUE" && "text-green-700"}`}>
              <option value="" ></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques8 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "both above and below",
                      keyWords: "urban, take place, above or below, ground.",
                      explain: "Look at the Paragraph – 5, second and third line, “Strawberries are being grown in disused shipping containers , mushrooms in underground carparks.” ** Here, Shipping containers are usually placed above the ground,  underground = below ground . So urban farming can take place both above and below the ground. "
                    }))
                  }}
                >Exp..</span>
              </div> : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"><span className='numberOfQuestion'>9</span>Some of the equipment used in aeroponic farming can be made by hand..
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques9 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques9 != "" && UserData.ques9 == "NOT GIVEN" && "text-green-700"}
              
              `}>
              <option value="" ></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques9 != "NOT GIVEN"

              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "about manufacturing of the equipment is given in the paragraph",
                      keyWords: "Some of the equipment, used, aeroponic farming, made by hand.",
                      explain: "Look at 5th paragraph, 3rd to 5th  line. ** “Aeroponic farming, he says, is ‘virtuous’. The equipment weighs little, can be installed on almost any flat surface and is cheap to buy. There is no information about manufacturing of the equipment is given in the paragraph "
                    }))
                  }}
                >Exp..</span>
              </div> : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>Urban farming relies more on electricity than some other types of farming
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques10 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques10 != "" && UserData.ques10 == "FALSE" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques10 != "FALSE"
              ?
              <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "A tiny fraction",
                      hiddenWord2: "relies more on electricity",
                      keyWords: "urban farming, relies, on electricity, than others farming.",
                      explain: " Look at 5th paragraph, last 2 lines. ** “It is cheap to run, too, consuming a tiny fraction of the electricity used by some techniques.”Rely = depend.  A tiny fraction of electricity is used, which means that very less amount of electricity. ** But the question says urban farming relies more on electricity. ** So the answer is False."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>Fruit and vegetables grown on an aeroponic urban farm are cheaper than traditionally grown organic produce.
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques11 != "TRUE" && "text-red-600"}  ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques11 != "" && UserData.ques11 == "TRUE" && "text-green-700"}`}>
              <option value="" ></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques11 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "cheaper than",
                      hiddenWord2: "",
                      keyWords: "fruit and vegetables, grown, aeroponic urban farm, cheaper, traditionally, organic",
                      explain: " Look at 6th paragraph, last 1st and 2nd  line, the writer says, “Produce grown this way typically sells at prices that, while generally higher than those of classic intensive agriculture, are lower than soil-based organic growers.” ** Here, lower than = cheaper than ** So the answer is True."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>Most produce can be grown on an aeroponic urban farm at any time of the year.
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques12 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques12 != "" && UserData.ques12 == "FALSE" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques12 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Suited to the summer months",
                      hiddenWord2: "",
                      keyWords: "most produce, be grown, aeroponic urban, any time of the year.",
                      explain: "Look at 6th paragraph, 2nd and 3rd line. ** “There are limits to what farmers can grow this way , of course, and much of the produce is suited to the summer months.” ** Here, much of the produce = most produce, ** Suited to the summer months (only) , not in other months."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>Beans take longer to grow on an urban farm than other vegetables.
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques13 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-1" && UserData.ques13 != "" && UserData.ques13 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-1" && UserData.ques13 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "There is no information",
                      hiddenWord2: "",
                      keyWords: "beans take longer, grow, other vegetables.",
                      explain: "Look at 6th paragraph, 6th to 7th  line. ** “And beans tend to take up a lot of space for not much return.” ** Here, you can see the information about space taken by beans is given. There is no information about how much time they take to grow."
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



