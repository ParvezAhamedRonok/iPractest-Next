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
        <h5>Reading passage-1</h5>
        <h6 className=''>Questions 1-6</h6> <br />
        <label>Do the following statements agree with the information given in Reading Passage 1?<br /> <br />
          In boxes 1-6 on your answer sheet, write</label> <br />
        <label className=''>TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques61"><span className='numberOfQuestion'>1</span> Many Madagascan forests are being destroyed by attacks from insects..
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques1 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques1 != "" && UserData.ques1 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques1 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "rice",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "First paragraph fourth and fifth line. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields. ** Forests are not directly destructed (attacked) by insects. Insects are destroying paddy crops, and farmers are clearing forests to create new paddy (rice) fields. Insects are not directly attacking forests."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques2"> <span className='numberOfQuestion'>2</span> Loss of habitat has badly affected insectivorous bats in Madagascar..
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques2 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques2 != "" && UserData.ques2 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques2 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "grow or develop",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "first paragraph last three lines. but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving and this has important implications for farmers and conservationists alike. ** Insectivorous bats are thriving (grow or develop), not being affected."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques3">  <span className='numberOfQuestion'>3</span> Ricardo Rocha has carried out studies of bats in different parts of the world..
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques3 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques3 != "" && UserData.ques3 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques3 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "grow or develop",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Second paragraph’s first three lines. No Such information is given."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4">  <span className='numberOfQuestion'>4</span>Habitat modification has resulted in indigenous bats in Madagascar becoming useful to farmers.
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques4 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques4 != "" && UserData.ques4 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques4 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "species started acting as pest controllers by eating insects that destroy rice crops",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Second paragraph’s last three lines and fourth paragraph’s first two lines. Rocha’s new study shows that several species of bats are giving Madagascar’s rice farmers a vital pest control service by feasting on plagues of insects. And this, he believes, can ease the financial pressure on farmers to turn forest fields. Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields. ** After habitat modification, Indigenous bat species started acting as pest controllers by eating insects that destroy rice crops."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques5"> <span className='numberOfQuestion'>5</span>The Malagasy mouse-eared bat is more common than other indigenous bat species in Madagascar.
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques5 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques5 != "" && UserData.ques5 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques5 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "species started acting as pest controllers by eating insects that destroy rice crops",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Fourth paragraph’s last two lines. No such information is given."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques6"> <span className='numberOfQuestion'>6</span>Bats may feed on paddy swarming caterpillars and grass webworms..
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques6 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques6 != "" && UserData.ques6 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques6 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "hunt and kill for food",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "fifth paragraph’s second and third line. ‘We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm. ** Preying = hunt and kill for food."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div> <br />


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 7-13</h6> <br />
        <label className=''>Complete the table below.</label> <br />
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.</label>
        <label className=''>Write your answers in below 7-13 on your answer sheet.</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <h6 className='p-3 w-full text-center border-1 border-gray-400'>The study carried out by Rocha’s team</h6>
        <div className='p-3 w-full gap-5 flex justify-between border-1 border-gray-400'>
          <h6>Aim</h6>
          <div className="">
            ●   to investigate the feeding habits of bats in farmland near the Ranomafana National Park
          </div>
        </div>
        <div className='p-4 w-full flex gap-4 justify-between border-1 border-gray-400'>
          <h6>Method</h6>
          <label>
            ●   ultrasonic recording to identify favourite feeding spots <br />
            ●   DNA analysis of bat <span className='numberOfQuestion'>7</span>
            <input type="text" name="ques7" id="ques7" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques7.match(/droppings/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques7 != "" && UserData.ques7 == "droppings" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques7.match(/droppings/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  droppings
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 7,
                        Ans1: "",
                        mainAns: "droppings",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "seventh paragraph’s last line. They next used DNA barcoding techniques to analyse droppings collected from bats at the different sites."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='p-4 w-full flex gap-4 justify-between border-1 border-gray-400'>
          <h6>Findings</h6>
          <label>
            ●   the bats <br />
            –  were most active in rice fields located on hills <br />
            –  ate pests of rice, <span className='numberOfQuestion'>8</span>
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques8.match(/coffee/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques8 != "" && UserData.ques8 == "coffee" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques8.match(/coffee/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  coffee
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "coffee",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "eighth paragraph last three lines. The scientists also found indications that the bats were consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            , sugarcane, nuts and fruit <br />
            –  prevent the spread of disease by eating <span className='numberOfQuestion'>9</span>
            <input type="text" name="ques9" id="ques9" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques9.match(/mosquitoes/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques9 != "" && UserData.ques9 == "mosquitoes" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques9.match(/mosquitoes/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  mosquitoes
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "mosquitoes",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "tenth paragraph last two lines. Malagasy bats feed not just on crop pests but also on mosquitoes – carriers of malaria, Rift Valley fever virus and elephantiasis – as well as blackflies, which spread river blindness."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            and blackflies <br />

            ●   local attitudes to bats are mixed: <br />

            –  they provide food rich in<span className='numberOfQuestion'>10</span>
            <input type="text" name="ques10" id="ques10" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques10.match(/protein/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques10 != "" && UserData.ques10 == "protein" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques10.match(/protein/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  protein
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 10,
                        Ans1: "",
                        mainAns: "protein",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "eleventh paragraph’s first and second line. Rocha points out that the relationship is complicated. When food is scarce, bats become a crucial source of protein for local people."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            –  the buildings where they roost become <br />
            <span className='numberOfQuestion'>11</span>
            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques11.match(/unclean/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques11 != "" && UserData.ques11 == "unclean" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques11.match(/unclean/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  unclean
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "unclean",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "eleventh paragraph’s third-fourth line. The bats sometimes roost in buildings, but are not welcomed there because they make them unclean."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            –  they play an important role in local  <span className='numberOfQuestion'>12</span>
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques12.match(/culture/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques12 != "" && UserData.ques12 == "culture" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques12.match(/culture/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  culture
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "culture",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "eleventh paragraph’s fourth & fifth line. They are associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

          </label>
        </div>

        <div className='p-4 w-full gap-4 flex justify-between border-1 border-gray-400'>
          <h6>Recommendation</h6>
          <label>
            ●   farmers should provide special<span className='numberOfQuestion'>13</span>
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques13.match(/houses/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques13 != "" && UserData.ques13 == "houses" && "text-green-700"}
              
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques13.match(/houses/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  houses
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "houses",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "eleventh paragraph’s last two line. ‘With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.’"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            to support the bat population
          </label>
        </div>
      </div>


    </section>
  )
}

export default Panel2_Q1



