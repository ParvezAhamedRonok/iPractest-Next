"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>



function Panel2_Q1({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer , explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
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
        <h5 className='underline'>Reading Passages-1</h5>
        <h6 className=''>Questions 1-5</h6> <br /><br />
        <label className=''>Reading Passage 1 has five paragraphs, <span className='font-bold'>A-E</span>.</label>
        <label className=''>Which paragraph contains the following information?</label>
        <label className=''>Choose  the correct letter, <span className='font-bold'>A-E,</span> in boxes <span className='font-bold'>1-5</span> on your answer sheet. <br />
          NB   You may use any letter more than once.</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>mention of several challenges to be overcome before a green roof can be installed
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques1 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques1 != "" && UserData.ques1 == "D" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques1 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "All these challenges are listed in the D paragraph",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph D. From 1 line to 7 .For green roofs to become the norm for new development, there needs to be support from public authorities and private investors…………………………………… as well as planning restrictions and disruption from regular activities in and around the buildings during installation ** Challenges that are needed to overcome before installing green roofs are 1. Support from public authorities and private investors is required. 2. Skilled and volunteer workers required. 3. Installation of drainage paths needed. 4. Allowing access to the public 5. Planning restrictions and disruption from regular activities. All these challenges are listed in the D paragraph."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>reference to a city where green roofs have been promoted for many years
            <select name="ques2" id="ques2" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques2 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques2 != "" && UserData.ques2 == "C" && "text-green-700"}
              
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques2 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "development of urban farms on rooftops",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C. 4 and 5 line. Toronto, Canada, has policies dating from the 1990s, encouraging the development of urban farms on rooftops."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span>a belief that existing green roofs should be used as a model for new ones
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques3 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques3 != "" && UserData.ques3 == "E" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques3 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "which are wilder in nature and maximize biodiversity",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E. 3 to 7 line. Improvement in the science and technology underpinning green roof development have also led to new variations in the concept………………………………………………….which are wilder in nature and maximize biodiversity. ** Due to the development of science and technology, which has led to green roof development, these green roofs now work as a model for new types of roofs, such as blue roofs that store water and brown roofs that maintain biodiversity."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>examples of how green roofs can work in combination with other green urban initiatives
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques4 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques4 != "" && UserData.ques4 == "B" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques4 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "which are wilder in nature and maximize biodiversity",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B. from line 1 to 5. Ongoing research is showcasing how green roofs in cities can integrate with ‘living walls’…………………………………………. and the built environment is made more sustainable. **  As given in B paragraph, green roofs can work in combination(integrate) with ‘living walls’ and drainage systems on the ground, such as street trees."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques5">  <span className='numberOfQuestion'>5</span>the need to make a persuasive argument for the financial benefits of green roofs
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques5 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques5 != "" && UserData.ques5 == "D" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques5 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "economic",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– Paragraph D. 7 and 8 line. To convince investors and developers that installing green roofs is worthwhile, economic arguments are still the most important. ** Economic = related to finance. If the financial (economic) benefits of green roofs are told to investors and developers, they may develop an interest in them. So, economic arguments are crucial."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

      </div> <br />

      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6>Questions 6-9</h6> <br />
        <label className=''>
          Complete the summary below.<br /> <br />
          Choose ONE WORD ONLY from the passage for each answer. <br /> <br />
          Write your answers in boxes <span className='font-bold'>5-8</span> on your answer sheet.</label> <br /> <br />
        <label >Write your answers in boxes <span className='font-bold'>6-9</span> on your answer sheet.</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques6">City rooftops covered with greenery have many advantages. These include lessening the likelihood that floods will occur, reducing how much money is spent on <span className='numberOfQuestion'>6</span>
            <input type="text" name="ques6" id="ques6" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && !UserData.ques6.match(/energy/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques6 != "" && UserData.ques6 == "energy" && "text-green-700"}
             
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && !UserData.ques6.match(/energy/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  energy
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 6,
                        Ans1: "",
                        mainAns: "energy",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph A. 3 and 4 line. Among the benefits are saving on energy costs, mitigating the risk of floods, making habitats for urban wildlife."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            and creating environments that are suitable for wildlife. In many cases, they can also be used for producing

            <span className='numberOfQuestion'>7</span>
            <input type="text" name="ques7" id="ques7" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && !UserData.ques7.match(/food/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques7 != "" && UserData.ques7 == "food" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && !UserData.ques7.match(/food/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  food
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 7,
                        Ans1: "",
                        mainAns: "food",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph A. 3 to 5 lines. Among the benefits are saving on energy costs, mitigating the risk of floods, making habitats for urban wildlife, tackling air pollution and even growing food."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            There are also social benefits of green roofs. For example, the medical profession recommends

            <span className='numberOfQuestion'>8</span>
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && !UserData.ques8.match(/gardening/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques8 != "" && UserData.ques8 == "gardening" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && !UserData.ques8.match(/gardening/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  gardening
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "gardening",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraphs B. 6 and 7 line. Doctors are increasingly prescribing time spent gardening outdoors for patients dealing with anxiety and depression."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            as an activity to help people cope with mental health issues. Studies have also shown that the availability of green spaces can prevent physical problems such as

            <span className='numberOfQuestion'>9</span>
            <input type="text" name="ques9" id="ques9" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && !UserData.ques9.match(/obesity/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques9 != "" && UserData.ques9 == "obesity" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && !UserData.ques9.match(/obesity/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  obesity
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "obesity",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph B. last two lines. And research has found that access to even the most basic green spaces can provide can provide a better quality of life to dementia sufferers and help people avoid"
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
        <h6>Questions 10-11</h6> <br />
        <label className=''>
          Choose TWO answer Below<br /> <br />
          Choose the correct letters in boxes 10 and 11 on your answer sheet. <br /> <br />
          Which TWO advantages of using newer buildings for green roofs are mentioned in <span className='font-bold'>Paragraph C</span> of the passage-`?<br />
        </label>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques10"><span className='numberOfQuestion mr-1 mb-2'>10</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques10 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "C (greater water-storage capacity)",
                      hiddenWord: "greater water-storage capacity",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C. 7 & 8 line. Being able to keep enough water at roof height and distribute it right across the rooftop is crucial to maintaining the plants on any green roof. ** Being able to keep enough water at roof height = grater water storage capacity."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques10' />
              a longer growing season for edible produce
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques10' />
              more economical use of water
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques10' />
              greater water-storage capacity
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques11"><span className='numberOfQuestion mr-1 mb-2'>11</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques11 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "A ( ability to cultivate more plant types.)",
                      hiddenWord: "ability to cultivate more plant types",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C, last 2 lines. Having a stronger roof also makes it easier to grow a greater variety of plants, since the soil can be deeper."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques11' />
              ability to cultivate more plant types
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques11' />
              a large surface area for growing plants.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques11' />
              Car companies found them hard to sell.
            </label>
            </div>
          </div>
        </div>
      </div> <br />


      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 12-13</h6>
        <label className=''><br /> <br />
          Choose TWO answer Below<br /> <br />
          Write the correct letters in boxes <span className='font-bold'>12 and 13</span> on your answer sheet.<br /> <br />
          Which TWO aims of new variations on the concept of green roofs are mentioned in <span className='font-bold'>Paragraph E</span> of the passage-1?
          <br />
        </label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-2">
        <div className='mb-3'>
          <label htmlFor="ques12"><span className='numberOfQuestion mr-1 mb-2'>12</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques12 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "A (to provide habitats for a wide range of species)",
                      hiddenWord: "to provide habitats for a wide range of species",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E. 6 & 7 line. There are also combinations of green roofs with solar panels, and ‘brown roofs’ which are wilder in nature and maximize biodiversity. ** Brown roofs are a variation of green roofs, which can provide a place of living for many types of animal species."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques12' />
              to provide habitats for a wide range of species
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques12' />
              to grow plants successfully even in the wettest climates
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques12' />
              to regulate the temperature of the immediate environment
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques13"><span className='numberOfQuestion mr-1 mb-2'>13</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques13 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "A ( to generate power from a sustainable source)",
                      hiddenWord: " to generate power from a sustainable source",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E. 6 line. There are also combinations of green roofs with solar panels. ** Solar panels are a sustainable power source that can be used on green roofs to generate energy."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques13' />
              to generate power from a sustainable source
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques13' />
              to collect water to supply other buildings
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques13' />
              found them hard to sell.
            </label>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Panel2_Q1



