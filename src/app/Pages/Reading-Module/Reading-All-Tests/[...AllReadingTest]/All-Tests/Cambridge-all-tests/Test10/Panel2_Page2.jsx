"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Panel2_Q2({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  // let testItems = localStorage.getItem("ShowAnsByTest");

  return (
    <section className='Panel2Section p-3 sm:p-5 mb-[50px]'>
      <div className='Panel2Section'>
        <div className="palne2_div1 ml-2">
          <h1>Section-2</h1>
        </div>

        <div className="palne2_div2 p-2">
          {/* show & hide the nodepan by cliking those icons    */}
          {showNotePad && (<textarea name="textarea" id="textarea" cols="70" rows="4"></textarea>)}
          <div className="btn " onClick={() => { setShowNotePad(!showNotePad) }}>
            {showNotePad ? <button className="  main-btn ml-30"> <i><GiNotebook /></i> Hide Notepad</button> : <button className="main-btn ml-30"> <i><GiNotebook /></i> Show Notepad</button>}
          </div>
        </div>
      </div>

      <div className='Titles pl-[10px] sm:pl-[25px] mb-3'>
        <h5 className=''>Reading Passage-2</h5>
        <h6 className=''>Questions 14-16</h6> <br />
        <label className='mb-1'>Choose the correct letter, <span className='font-bold'>A, B, C or D</span>..</label>
        <label className=''>Write the correct letter in boxes <span className='font-bold'>14-16</span> on your answer sheet..</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques14"><span className='numberOfQuestion mr-1 mb-2'>14</span> What point does the writer make about microbes in the first paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques14 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "D (They will continue to exist for longer than the human race.)",
                      mainAns: "",
                      hiddenWord: "They will continue to exist for longer than the human race",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "microbes, first paragraph",
                      explain: "Look at the very first lines of the first paragraph, which is the topic sentence. ** The writer says here, “Microbes, most of them bacteria, have populated this planet since long before animal life developed and they will outlive us… . ..” ** Here, they will outlive us = they will continue to exist for longer than the human race."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques14' />
              They adapt quickly to their environment..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques14' />
              The risk they pose has been exaggerated.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques14' />
              They are more plentiful in animal life than plant life.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques14' />
              They will continue to exist for longer than the human race.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques15"><span className='numberOfQuestion mr-1 mb-2'>15</span>In the second paragraph, the writer is impressed by the fact that
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques15 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "C (the average individual has more microbial cells than human ones.)",
                      mainAns: "",
                      hiddenWord: "the average individual has more microbial cells than human ones",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " second paragraph, writer, is impressed by, fact",
                      explain: " In paragraph no. 2, lines 3-4 say, “ . .. . . What is amazing is that while the number of human cells in the average person is about 30 trillion, the number of microbial ones is higher – about 39 trillion. .. .. ..” ** Here, What is amazing = the writer is impressed, ** the number of human cells in the average person is about 30 trillion, the number of microbial ones is higher – about 39 trillion = the average individual has more microbial cells than human ones."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques15' />
              each species tends to have vastly different microbes..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques15' />
              some parts of the body contain relatively few microbes..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques15' />
              the average individual has more microbial cells than human ones.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques15' />
              scientists have limited understanding of how microbial cells behave.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques16"><span className='numberOfQuestion mr-1 mb-2'>16</span> What is the writer doing in the fifth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques16 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "A (explaining how a discovery was made.)",
                      mainAns: "",
                      hiddenWord: "Antony van Leeuwenhoek in the 1670s",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "writer doing, fifth paragraph",
                      explain: "The first half of paragraph no. 5 explains the discovery of microbes. ** Here, the writer explains, “For most of human history we had no idea that microbes existed. The first man to see these extraordinary potent creatures was a Dutch lens-maker Antony van Leeuwenhoek in the 1670s. ** Using microscopes of his own design that could magnify up to 270 times, he examined a drop of water from a nearby lake and found it teeming with tiny creatures he called ‘animalcules’. .. . . ..”"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques16' />
              explaining how a discovery was made.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques16' />
              comparing scientists’ theories about microbes.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques16' />
              describing confusion among scientists
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques16' />
              giving details of how microbes cause disease
            </label>
            </div>
          </div>
        </div>
      </div> <br />







      <div className='Titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 17-20</h6> <br />
        <label className=''>Complete the summary using the list of words,<span className='font-bold'> A-H</span>, below</label>
        <label className='mb-1'>Write the correct letter, <span className='font-bold'> A-H</span>, in boxes 17-20 on your answer sheet..</label> <br /> <br />
        <label className='text-center'>We should be more tolerant of microbes.</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques17">Yong’s book argues that we should be more tolerant of microbes. Many have a beneficial effect, and only a relatively small number lead to
            <span className='numberOfQuestion'>17</span>
            <input type="text" name="ques17" id="ques17" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques17 != "G" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques17 != "" && UserData.ques17 == "G" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && UserData.ques17 != "G"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  G
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 17,
                        Ans1: "G (illness)",
                        mainAns: "",
                        hiddenWord: "illness",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Young’s book argues, should be, tolerant, microbes, many, beneficial effect, only, relatively small number, lead to",
                        explain: "Lines 1-3 of paragraph no. 6 say, “Yong’s book is in many ways a plea for microbial tolerance, pointing out that while fewer than one hundred species of bacteria bring disease, many thousands more play a vital role in maintaining our health… .. ..” ** Here, ** a plea for microbial tolerance = we should be more tolerant of microbes, many thousands more play a vital role in maintaining our health = many have a beneficial effect, fewer than one hundred species of bacteria bring = only a relatively small number lead to, disease = illness."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            And although it is misleading to think of microbes as ‘friendly’, we should also stop thinking of them as the enemy. In fact, we should accept that our relationship with microbes is one based on a

            <span className='numberOfQuestion'>18</span>
            <input type="text" name="ques18" id="ques18" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques18 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && UserData.ques18 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 18,
                        Ans1: "B (partnership)",
                        mainAns: "",
                        hiddenWord: "partnership",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "although, misleading, think of microbes, friendly, should also stop thinking, enemy, should accept, our relationship with, microbes, based on",
                        explain: "In lines 5-7 of the sixth paragraph, the writer explains, “ . . . . In reality, says Yong, bacteria should not be viewed as either friends or foes, villains or heroes. Instead we should realise we have a symbiotic relationship, that can be mutually beneficial or mutually destructive.” ** Here, bacteria should not be viewed as either friends or ** foes, villains or heroes = although it is misleading to think of microbes as ‘friendly’, we should also stop thinking of them as enemy, symbiotic relationship or, ** mutually beneficial or mutually destructive = partnership,"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            New research shows that microbes have numerous benefits for humans. Amongst other things, they aid digestion, remove poisons, produce vitamins and may even help reduce obesity. However, there is a growing problem. Our poor

            <span className='numberOfQuestion'>19</span>
            <input type="text" name="ques19" id="ques19" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques19 != "H" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques19 != "" && UserData.ques19 == "H" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && UserData.ques19 != "H"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  H
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "H (nutrition)",
                        mainAns: "",
                        hiddenWord: "nutrition",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " Seventh paragraph",
                        explain: "ifth line. “Our obsession with hygiene, our overuse of antibiotics and our unhealthy, low-fibre diets are disrupting the bacterial balance…..” The writer said that we haveunhealthy and low-fiber diets (poor diets). Diet = nutrition (word given in the box). Hence, the answer is H."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            , our overuse of antibiotics, and our excessive focus on

            <span className='numberOfQuestion'>20</span>
            <input type="text" name="ques20" id="ques20" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques20 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques20 != "" && UserData.ques20 == "E" && "text-green-700"}
               `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-10" && UserData.ques20 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "E (cleanliness)",
                        mainAns: "",
                        hiddenWord: "cleanliness",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "new research, microbes, numerous benets, for humans, aid digestion, remove poisons, produce vitamins, may even help, reduce obesity, however, growing problem, poor, overuse of antibiotics, excessive focus on, upsetting, bacterial balance, may be contributing, huge, increase, allergies, immune system problems",
                        explain: "The answers can be found in paragraph no. 7.Here, the writer says in lines 2-7“ .. .. . . New research is now unravelling the ways in which bacteria aid digestion, regulate our immune systems, eliminate toxins, produce vitamins, affect our behaviour and even combat obesity. ‘They actually help us become who we are,’ says Yong. But we are facing a growing problem. Our obsession with hygiene, our overuse of antibiotics and our unhealthy, low-fibre diets are disrupting the bacterial balance and may be responsible for soaring rates of allergies and immune problems, such as inflammatory bowel disease (IBD).” **  Here, unravelling = shows that, eliminate toxins = remove poisons,combat obesity = reduce obesity,unhealthy, inammatory bowel disease (IBD) = immune system problems,low-fibre diets = poor nutrition, ** So, the answer for question 19 is: H (nutrition) And, obsession with hygiene = excessive focus on cleanliness So, the answer for question 20 is: E (cleanliness)"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            are upsetting the bacterial balance and may be contributing to the huge increase in allergies and immune system problems.</label>
        </div>
      </div> <br />


      <div className='p-3 rounded flex flex-wrap w-auto gap-3 border-2 border-gray-300'>
        <p><span className='font-bold mr-2'>A</span> solution</p>
        <p><span className='font-bold mr-2'>B</span>   partnership </p>
        <p><span className='font-bold mr-2'>C</span>destruction</p>
        <p><span className='font-bold mr-2'>D</span> exaggeration </p>
        <p><span className='font-bold mr-2'>E</span> cleanliness </p>
        <p><span className='font-bold mr-2'>F</span>regulations</p>
        <p><span className='font-bold mr-2'>G</span> illness  </p>
        <p><span className='font-bold mr-2'>H</span> nutrition</p>

      </div> <br />








      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 21-26</h6> <br />
        <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 2? <br /><br />
          In boxes 21-26 on your answer sheet, write.</label>

        <label className=''>
          YES---if the statement agrees with the claims of the writer <br /> <br />
          NO ---if the statement contradicts the claims of the writer<br /> <br />
          NOT GIVEN---if it is impossible to say what the writer thinks about this<br /> <br />
        </label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>It is possible that using antibacterial products in the home fails to have the desired effect.
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques21 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques21 != "" && UserData.ques21 == "YES" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques21 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "YES",
                      mainAns: "",
                      hiddenWord: "fails to have the desired effect",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "possible, using antibacterial products, home, fails to have, desired effect",
                      explain: "The first few lines of paragraph no. 8 give us the answer to this question.The writer says here, “The most recent research actually turns accepted norms upside down. For example, there are studies indicating that the excessive use of household detergents and antibacterial products actually destroys the microbes that normally keep the more dangerous germs at bay. . .. .. .” ** Here, use of household detergents and antibacterial products = using antibacterial products in the home, ** destroys the microbes that normally keep the more dangerous germs at bay = fails to have the desired effect."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span> It is a good idea to ensure that children come into contact with as few bacteria as possible.
            <select name="ques22" id="ques22" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques22 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques22 != "" && UserData.ques22 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques22 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "NO",
                      mainAns: "",
                      hiddenWord: "these lines suggest that ensuring children come into contact with as few bacteria as possible is not a good idea",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "good idea, ensure, children, come into contact, as few bacteria, as possible",
                      explain: "Again, in paragraph no. 8, take a close look at lines 3-5, “ .. .. . . Other studies show that keeping a dog as a pet gives children early exposure to a diverse range of bacteria, which may help protect them against allergies later.” ** Here, these lines suggest that ensuring children come into contact with as few bacteria as possible is not a good idea"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span> Yong’s book contains more cause studies than are necessary.
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques23 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques23 != "" && UserData.ques23 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques23 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "case studies than are necessary",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Young’s book, contains, more case studies, than, necessary",
                      explain: "Paragraph no. 8 and 9 do not provide any information on whether Yong’s book contains more or less case studies than are necessary."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques24"><span className='numberOfQuestion'>24</span>The case study about bacteria that prevent squid from being attacked may have limited appeal.
            <select name="ques24" id="ques24" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques24 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques24 != "" && UserData.ques24 == "YES" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques24 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "YES",
                      mainAns: "",
                      hiddenWord: "case studies with limited appeal",
                      hiddenWord2: "bacteria that prevent squid from being attacked",
                      hiddenWord3: "",
                      keyWords: "case study, bacteria, prevent, squid, from being attacked, may have, limited appeal",
                      explain: " In paragraph no. 9, have a look at lines 2-4, where the writer says, “ . . . . Among the less appealing case studies is one about a fungus that is wiping out entire populations of frogs and that can be halted by a rare microbial bacterium. Another is about squid that carry luminescent bacteria that protect them against predators. … . … . .” ** Here, less appealing case studies = case studies with limited appeal,** squid that carry luminescent bacteria that protect them against predators = bacteria that prevent squid from being attacked."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques25"><span className='numberOfQuestion'>25</span> Efforts to control dengue fever have been surprisingly successful
            <select name="ques25" id="ques25" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques25 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques25 != "" && UserData.ques25 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques25 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "dengue fever",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "efforts, control dengue fever, surprisingly successful",
                      explain: " In line no. 7 of paragraph no. 9, we find reference to ‘dengue fever’. ** However, whether efforts to control this fever have been successful or not is NOT mentioned in this passage."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span> Microbes that reduce the risk of infection have already been put inside the walls of some hospital wards.
            <select name="ques26" id="ques26" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques26 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques26 != "" && UserData.ques26 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques26 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "NO",
                      mainAns: "",
                      hiddenWord: "Just imagine a neonatal hospital ward",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "microbes, reduce, risk of infection, already been put inside, walls of, some hospital wards",
                      explain: " The final few lines of paragraph no. 9 says, “ . . .. . In the future, our ability to manipulate microbes means we could construct buildings with useful microbes built into their walls to fight off infections. Just imagine a neonatal hospital ward in a specially mixed cocktail of microbes so that babies get the best start in life.” ** Here, Just imagine = it is yet to be done / it has not been done yet."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

      </div> <br />










      {/* Akhno baki nicher kaj ses kora */}
      {/* for Passage-3 all Questions--- */}
      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h5>Reading Passage-3</h5>
        <h6 className=''>Questions 27-30</h6> <br />
        <label className=''>Choose the correct letter, A, B, C or D.<br /><br />Write the correct letter in boxes 27-30 on your answer sheet.</label><br /> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='mb-3'>
          <label htmlFor="ques27"><span className='numberOfQuestion mr-1 mb-2'>27</span>What point does the writer make in the first paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques27 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "B (A basic assumption about wisdom may be wrong)",
                      mainAns: "",
                      hiddenWord: "wisdom",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "main point, first paragraph.",
                      explain: "  Let’s have a look at the first paragraph. The first few lines say, “Across cultures, wisdom has been considered one of the most revered human qualities. Although the truly wise may seem few and far between, empirical research examining wisdom suggests that it isn’t an exceptional trait possessed by a small handful of bearded philosophers after all –in fact, the latest studies suggest that most of us have the ability to make wise decisions, given the right context. ** Here, the truly wise may seem few and far between, empirical research examining = may not be get an exact decisions from this materials, ** most of us have the ability to make wise decisions = without wisdom. ** That means sometimes wisdom decisions may be wrong."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques27' />
              Wisdom appears to be unique to the human race..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques27' />
              A basic assumption about wisdom may be wrong.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques27' />
              Concepts of wisdom may depend on the society we belong to.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques27' />
              There is still much to be discovered about the nature of wisdom.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques28"><span className='numberOfQuestion mr-1 mb-2'>28</span>What does Igor Grossmann suggest about the ability to make wise decisions?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques28 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "C (The importance of certain influences on it was underestimated.)",
                      mainAns: "",
                      hiddenWord: "The importance of certain influences",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Igor Grossmann, suggest, ability, make wise decisions",
                      explain: "In the second paragraph, the writer says in the beginning, “It appears that experiential, situational, and cultural factors are even more powerful in shaping wisdom than previously imagined,’ says Associate Professor Igor Grossmann of the University of Waterloo in Ontario, Canada. ‘Recent empirical findings from cognitive, developmental, social, and personality psychology cumulatively suggest that people’s ability to reason wisely ** varies dramatically across experiential and situational contexts. …” ** Here, experiential, situational, and cultural factors are even more powerful = The importance of certain influences."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques28' />
              It can vary greatly from one person to another..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques28' />
              Earlier research into it was based on unreliable data..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques28' />
              The importance of certain influences on it was underestimated
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques28' />
              Various branches of psychology define it according to their own criteria
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques29"><span className='numberOfQuestion mr-1 mb-2'>29</span>According to the third paragraph, Grossmann claims that the level of wisdom an individual shows
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques29 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "B (will be different in different circumstances.)",
                      mainAns: "",
                      hiddenWord: "different in different circumstances",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "3rd  Paragraph, Grossmann, claims, level of wisdom, individual",
                      explain: "In the 3rd paragraph, the writer says in the beginning, “It seems that it’s not so much that some people simply possess wisdom and others lack it, but that our ability to reason wisely depends on a variety of external factors. ‘It is impossible to characterize thought processes attributed to wisdom without considering the role of contextual factors,’ explains Grossmann. ** ‘In other words, wisdom is not solely an “inner quality” but rather unfolds as a function of situations people happen to be in. Some situations are more likely to promote wisdom than others.’ ** Here, unfolds as a function of situations people happen to be in = different in different circumstances."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques29' />
              can be greater than they think it is..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques29' />
              will be different in different circumstances.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques29' />
              may be determined by particular aspects of their personality.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques29' />
              should develop over time as a result of their life experiences..
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques30"><span className='numberOfQuestion mr-1 mb-2'>30</span>What is described in the fifth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques30 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "D (a recommended strategy that can help people to reason wisely)",
                      mainAns: "",
                      hiddenWord: "a recommended strategy",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "5th Paragraph",
                      explain: "In the 5th paragraph, the writer says, “Grossmann and his colleagues have also found that one of the most reliable ways to support wisdom in our own day-to-day decisions is to look at scenarios from a third-party perspective, as though giving advice to a friend. ….. related to wise decisions.” ** Here, one of the most reliable ways “a third-party perspective” = a recommended strategy"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques30' />
              a difficulty encountered when attempting to reason wisely.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques30' />
              an example of the type of person who is likely to reason wisely
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques30' />
              a controversial view about the benefits of reasoning wisely
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques30' />
              a recommended strategy that can help people to reason wisely
            </label>
            </div>
          </div>
        </div>
      </div> <br />

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 31-35</h6> <br />
        <label className=''>Complete the summary using the list of words, A-J, below. <br /> <br />
          Write the correct letter, A-J, in boxes 31-35 on your answer sheet.</label><br /> <br />
        <h6 className='w-full text-center'>The characteristics of wise reasoning</h6>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques31">Igor Grossmann and colleagues have established four characteristics which enable us to make wise decisions. It is important to have a certain degree of </label>
          <span className='numberOfQuestion'>31</span>
          <input type="text" name="ques31" id="ques31" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques31 != "D" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques31 != "" && UserData.ques31 == "D" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-10" && UserData.ques31 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "D (Modesty)",
                      mainAns: "",
                      hiddenWord: "Modesty",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Igor Grossmann and colleagues, characteristics, established, certain degree.",
                      explain: "Look at the Paragraph no. 4 . ** Here, the author of the text writes in the beginning, “Coming up with a definition of wisdom is challenging, but Grossmann and his colleagues have identified four key characteristics as part of a framework of wise reasoning. One is intellectual humility or recognition of the limits of our own knowledge…” **   Here, **  framework = established.,  One is intellectual = certain degree. ** Humility = modesty."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>



          <p> regarding the extent of our knowledge, and to take into account</p>

          <span className='numberOfQuestion'>32</span>
          <input type="text" name="ques32" id="ques32" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques32 != "A" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques32 != "" && UserData.ques32 == "A" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-10" && UserData.ques32 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "A (Opinions)",
                      mainAns: "",
                      hiddenWord: "Opinions",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " Fourth paragraph’s last line. ",
                      explain: "“along with compromise or integration of different attitudes and beliefs” belief = Opinion. Integration of different attitudes and belief means we should include different opinions of others."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>


          <p> which may not be the same as our own. We should also be able to take a broad</p>

          <span className='numberOfQuestion'>33</span>
          <input type="text" name="ques33" id="ques33" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques33 != "C" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques33 != "" && UserData.ques33 == "C" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-10" && UserData.ques33 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "C (View)",
                      mainAns: "",
                      hiddenWord: "View",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " account, may not, same, broad, any situation, Another key characteristic, aware, relate to each other.",
                      explain: "“Look at the Paragraph no. 4 line 2 ** Here, the author of the text writes “another is appreciation of perspectives wider than the issue at hand. Sensitivity to the possibility of change in social relations is also key, along with compromise or integration of different attitudes and beliefs.” ** Here, perspectives = Opinions."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> of any situation. Another key characteristic is being aware of the likelihood of alterations in the way that people relate to each other.Grossmann also believes that it is better to regard scenarios with </p>

          <span className='numberOfQuestion'>34</span>
          <input type="text" name="ques34" id="ques34" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques34 != "F" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques34 != "" && UserData.ques34 == "F" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-10" && UserData.ques34 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "F (Objectivity)",
                      mainAns: "",
                      hiddenWord: "Objectivity",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Fifth paragraph’s first line to 3 line,",
                      explain: " “Grossmann and his colleagues have also found……giving advice to a friend.” To know this question’s answer, you must know the meaning of “Objectivity”. Objective = of a person or judgment not influenced by personal feelings or opinions in considering and representing facts. So it is better to regard scenarios with objectivity; it can be done by looking at scenario from a third-party perspective, as though giving advice to a friend. Therefore, ** F is the answer "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> . By avoiding the first-person perspective, we focus more on</p>

          <span className='numberOfQuestion'>35</span>
          <input type="text" name="ques35" id="ques35" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques35 != "G" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques35 != "" && UserData.ques35 == "G" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-10" && UserData.ques35 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "G (Fairness)",
                      mainAns: "",
                      hiddenWord: "Fairness",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " Grossmann, regard, first-person perspective, focus.",
                      explain: " Look at the Paragraph no. 5 line 1 ** Here, the author of the text writes “Grossmann and his colleagues have also found that one of the most reliable ways to support wisdom in our own day-to-day decisions is to look at scenarios from a third-party perspective, as though giving advice to a friend.” ** Here, third-party perspective = Objectivity. ** Now look at the Paragraph NO. 5, line No. 2 the writer says, “Research suggests that when adopting a first-person viewpoint we focus on ‘the focal features of the environment’ and when we adopt a third-person, ‘observer’ viewpoint we reason more broadly and focus more on interpersonal and moral ideals such as justice and impartiality. ** Here, impartiality = fairness. "
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>


          <p> and on other moral ideals, which in turn leads to wiser decision-making.</p>

        </div>
        <div className='p-3 rounded flex flex-wrap w-auto gap-3 border-2 border-gray-300'>
          <p><span className='font-bold mr-2'>A</span> opinions  </p> <br />
          <p><span className='font-bold mr-2'>B</span>confidence   </p> <br />
          <p><span className='font-bold mr-2'>C</span>view </p> <br />
          <p><span className='font-bold mr-2'>D</span> modesty  </p><br />
          <p><span className='font-bold mr-2'>E</span> problems </p> <br />
          <p><span className='font-bold mr-2'>F</span> objectivity</p> <br />
          <p><span className='font-bold mr-2'>G</span>fairness</p>  <br />
          <p><span className='font-bold mr-2'>H</span>experiences</p> <br />
          <p><span className='font-bold mr-2'>I</span>range</p> <br />
          <p><span className='font-bold mr-2'>J</span> reasons</p> <br />
        </div>


      </div> < br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 36-40</h6>  <br />
        <label className=''>Do the following statements agree with the information given in Reading Passage 3?<br /> <br />In boxes 36-40 on your answer sheet, write</label><br />
        <label className=''>
          TRUE ---   if the statement agrees with the information<br /> <br />
          FALSE        ---      if the statement contradicts the information<br /> <br />
          NOT GIVEN  ---  if there is no information on this<br /> <br />
        </label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span> Students participating in the job prospects experiment could choose one of two perspectives to take.
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques36 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques36 != "" && UserData.ques36 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques36 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "intellectual humility and recognition of change",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " job prospects experiment, perspectives.",
                      explain: " Let’s have a look at paragraph no. 7. ** Here the writer says, “For example, in one experiment that took place during the peak of a recent economic recession, graduating college seniors were asked to reflect on their job prospects.….. ‘distant observer’ role displayed more wisdom-related reasoning (intellectual humility and recognition of change) than did participants in the control group. ** Here, intellectual humility and recognition of change = two perspectives to take (not any choose from them.) "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span>Participants in the couples experiment were aware that they were taking part in a study about wise reasoning.
            <select name="ques37" id="ques37" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques37 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques37 != "" && UserData.ques37 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques37 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "about couples were taking part in a study about wise reasoning",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " the couples experiment, aware, about wise reasoning.",
                      explain: " In paragraph no. 8, we can not find the information about couples were taking part in a study about wise reasoning. "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span> In the couples experiments, the length of the couples’ relationships had an impact on the results.
            <select name="ques38" id="ques38" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques38 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques38 != "" && UserData.ques38 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques38 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "In paragraph no. 8, we can not find",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " couples experiment, relationships, impact",
                      explain: " In paragraph no. 8, we can not find the information about the impact on the results in couples relationship. "
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>  In both experiments, the participants who looked at the situation from a more detached viewpoint tended to make wiser decisions.
            <select name="ques39" id="ques39" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques39 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques39 != "" && UserData.ques39 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques39 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "self detached",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " both experiments, situation, more detached",
                      explain: " Let’s have a look at paragraph no. 9. ** Here the writer says, “Ego-decentering promotes greater focus on others and enables a bigger picture, conceptual view of the experience, affording recognition of intellectual humility and change,’ says Grossmann.” **   Here, Ego-decentering = self detached "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span> Grossmann believes that a person’s wisdom is determined by their intelligence to only a very limited extent.
            <select name="ques40" id="ques40" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques40 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-10" && UserData.ques40 != "" && UserData.ques40 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-10" && UserData.ques40 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "only a small positive",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "  person’s wisdom, intelligence, limited extent",
                      explain: " The answer can be found in paragraph no. 10 in the very beginning, “We might associate wisdom with intelligence or particular personality traits, but research shows only a small positive relationship between wise thinking and crystallized intelligence and the personality traits of openness and agreeableness.” ** Here, only a small positive = limited extent."
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

export default Panel2_Q2




