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
        <h5 className=''>Reading Passage-1</ h5>
        <h6 className=''>Questions 1-7</ h6> <br />
        <label className=''> Do the following statements agree with the information given in <span className='font-bold'>Reading Passage 1</span>?<br />
          In boxes 1-7 on your answer sheet, write <br />
          TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques61"><span className='numberOfQuestion'>1</span>  Polar bears suffer from various health problems due to the build-up of fat under their skin..
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques1 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques1 != "" && UserData.ques1 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques1 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "This means humans suffer from various health problems due to the build-up of fat under their skin",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " polar bears, suffer from, various health problems, due to, build-up, fat, under, skin",
                      explain: "For this question, we have look at the first paragraph. ** Here, in lines 3-6, the writer says, “ … … .. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.” ** This means humans suffer from various health problems due to the build-up of fat under their skin; NOT the polar bears."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques2"> <span className='numberOfQuestion'>2</span>  The study done by Liu and his colleagues compared different groups of polar bears.
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques2 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques2 != "" && UserData.ques2 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques2 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "the lines suggest that",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "study, Liu and his colleagues, compared, different groups, polar bears",
                      explain: "Lines 1-2 of paragraph no. 2 say, “A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. .. .. .” ** Here, the lines suggest that the study compared polar bears with brown bears; NOT different groups of polar bears."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques3">  <span className='numberOfQuestion'>3</span> Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques3 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques3 != "" && UserData.ques3 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques3 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "The passage contains no information",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Liu and his colleagues, first researchers, compare, polar bears, brown bears, genetically",
                      explain: "The passage contains no information on whether Liu and his colleagues were the first researchers to compare polar bears and brown bears genetically."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>



        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques4">  <span className='numberOfQuestion'>4</span>Polar bears are able to control their levels of ‘bad’ cholesterol by genetic means.
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques4 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques4 != "" && UserData.ques4 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques4 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "genetic means",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "polar bears, able to control, levels, ‘bad’ cholesterol, genetic means",
                      explain: "In paragraph no. 2, take a close look at lines 4-5, “ … … .. Liu and his colleagues found the polar bears had a gene known as APoB, which reduces levels of low density lipoproteins (LDLs) – a form of ‘bad’ cholesterols. .. .. .” ** Here, **   had a gene known as APoB = genetic means,** reduces levels = control levels."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques5"> <span className='numberOfQuestion'>5</span>Female polar bears are able to survive for about six months without food.
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques5 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques5 != "" && UserData.ques5 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques5 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "six months without food",
                      hiddenWord2: "third paragraph",
                      hiddenWord3: "",
                      keyWords: "female polar bears, able to survive, about six months, without food.",
                      explain: "The answer to this question can be found in the third paragraph. ** Here, take a look at lines 5-9, “ . . .. .. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, … .. …” ** Here, six months of fasting = six months without food."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"> <span className='numberOfQuestion'>6</span> It was found that the bones of female polar bears were very weak when they came out of their dens in spring.
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques6 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques6 != "" && UserData.ques6 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques6 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "the lines suggest that the bones of female polar bears remained very strong a dense when they came out of their dens in spring",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "found, bones of female polar bears, very weak, came out, their dens, spring",
                      explain: " In paragraph no. 3, take a look at lines 5-10, “ . . … .. Female polar bears, however, undergo extreme conditions during every pregnancy. . . . .. . .. . . .. . This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, . . .. . . .. . .. Despite this, their bones remain strong and dense.” ** Here, the lines suggest that the bones of female polar bears remained very strong a dense when they came out of their dens in spring."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques7"> <span className='numberOfQuestion'>7</span>  The polar bear’s mechanism for increasing bone density could also be used by people one day.
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques7 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques7 != "" && UserData.ques7 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-9" && UserData.ques7 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "could also be used by people one day",
                      hiddenWord2: "polar bear’s mechanism for increasing bone density",
                      hiddenWord3: "",
                      keyWords: " polar bear’s mechanism, increasing bone density, also, used by people, one day",
                      explain: " At the end of paragraph no. 4, the author of the text says, “ .. .. .. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.” ** Here, mechanism of bone remodelling in polar bears =          polar bear’s mechanism for increasing bone density, ** many bedridden humans, and even astronauts, could potentially benefit = could also be used by people one day."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div> <br />


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 8-13</h6> <br />
        <label className=''>Complete the table below.</label> <br /> <br />
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.</label> <br />
        <label className=''>Write your answers in boxes <span className='font-bold'>8-13</span> on your answer sheet..</label> <br />
      </div>
      <div className="Questions p-4 border-1 border-gray-400">
        <label className='p-3 w-full text-center border-1 border-gray-400'>The study carried out by Rocha’s team</label>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques8"> People think of bears as unintelligent and<span className='numberOfQuestion'>8</span>
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques8.match(/violent/gi) && "text-red-600"}
               ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques8 != "" && UserData.ques8 == "violent" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques8.match(/violent/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  violent
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "violent",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "people think, bears, unintelligent",
                        explain: " The answer lies in lines 3-4 of paragraph no. 5, where the writer says, “ . .. . . We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. .. .. .” ** Here, seem to be perceived = people think,**  stupid = unintelligent"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            However, this may not be correct. For example:</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques9">●   In Tennoji Zoo, a bear has been seen using a branch as a <span className='numberOfQuestion'>9</span>
            <input type="text" name="ques9" id="ques9" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques9.match(/tool/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques9 != "" && UserData.ques9 == "tool" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques9.match(/tool/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  tool
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "tool",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Gogo,Zoo bears, unintelligent",
                        explain: "A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            .</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques10"> . This allowed him to knock down some<span className='numberOfQuestion'>10</span>
            <input type="text" name="ques10" id="ques10" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques10.match(/meat/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques10 != "" && UserData.ques10 == "meat" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques10.match(/meat/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  meat
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 10,
                        Ans1: "",
                        mainAns: "meat",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "may not be correct, Tennoji Zoo, bear, seen, using a branch, allowed, knock down, some",
                        explain: "Paragraph no. 5 contains answers to these questions. Here, take a look at lines 5- 8, “ . . .. . And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat ** hung out of his reach. … .. ..” ** Here,**   challenges those assumptions = may not be correct, **   to dislodge = to knock down."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            .</label>
        </div>



        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques11"> ●   A wild polar bear worked out a method of reaching a platform where a<span className='numberOfQuestion'>11</span>
            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques11.match(/photographer/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques11 != "" && UserData.ques11 == "photographer" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques11.match(/photographer/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  photographer
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "photographer",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "wild polar bear, worked out, method, reaching a platform, located",
                        explain: "Have a look at the final lines of paragraph no. 5. ** The writer says here, “ . . .. . A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.” ** Here, A calculated move = worked out a method,**   to get to = reaching."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            was located.</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques12"> ●   Polar bears have displayed behaviour such as conscious manipulation of objects and activity similar to a<span className='numberOfQuestion'>12</span>
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques12.match(/game/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques12 != "" && UserData.ques12 == "game" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques12.match(/game/gi)

                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  game
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "game",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " Polar bears, displayed, behaviour, conscious manipulation, objects and activity, similar to",
                        explain: "The first few lines of paragraph no. 6 say, “In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focussed manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. .. ..” ** Here, deliberate and focussed manipulation = conscious manipulation, what appeared to be = similar to."
                      }))
                    }}
                  >Exp..</span>
                </div>


                : ""}
            </i>
            Bears may also display emotions. For example:</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques13"> ●   They may make movements suggesting<span className='numberOfQuestion'>13</span>
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-9" && !UserData.ques13.match(/frustration/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-9" && UserData.ques13 != "" && UserData.ques13 == "frustration" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-9" && !UserData.ques13.match(/frustration/gi)

                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  frustration
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "frustration",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "display emotions, may make movements, suggesting, if disappointed, when hunting",
                        explain: "In paragraph no. 7, the first few lines say, “As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow – seemingly out of frustration – when they have just missed out on a kill. .. .. .” ** Here, seen to hit out at ice and snow = may make movements, ** when they have just missed out on a kill = if disappointed when hunting"
                      }))
                    }}
                  >Exp..</span>
                </div>


                : ""}
            </i>
            hunting. <br />

            ●   They may form relationships with other species..</label>
        </div>
      </div>


    </section>
  )
}

export default Panel2_Q1



