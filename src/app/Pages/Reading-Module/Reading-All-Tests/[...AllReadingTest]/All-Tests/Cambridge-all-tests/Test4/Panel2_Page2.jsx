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

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h5 className=''>Reading Passage-2</h5>
        <h6 className=''>Questions 14-16</h6> <br />
        <label className='mb-1'>Choose the correct letter, <span className='font-bold'>A, B, C or D</span>.</label>
        <label className=''>Choose the correct letter in boxes <span className='font-bold'>14-16</span> on your answer sheet</label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques14"><span className='numberOfQuestion mr-1 mb-2'>14</span>What can we learn from the first paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques14 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "B (when ideas about the nature of intelligence began to shift)",
                      hiddenWord: "when ideas about the nature of intelligence began to shift",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Full 1 paragraph. Over the past century, a power idea has taken root in the educational landscape………………………………………………….given the right environment. **  The whole paragraph describes that intelligence was considered innate(natural/from birth), but for 100 years(century), it has been believed that intelligence can be increased with training and the right environment. It is the shift(change) in the idea."
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
              where the notion of innate intelligence first began
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques14' />
              when ideas about the nature of intelligence began to shift
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques14' />
              how scientists have responded to changing views of intelligence
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques14' />
              why thinkers turned away from the idea of intelligence being fixed
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques15"><span className='numberOfQuestion mr-1 mb-2'>15</span> The second paragraph describes how schools encourage students to
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques15 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "C (have confidence in their potential to succeed)",
                      hiddenWord: "have confidence in their potential to succeed",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: ", 2 paragraph. 2 paragraph, 1 to 5 line. Growthmindset theory is a relatively new………………………………………………..as a change to improve that ability **  Schools now have motivational posters, and they play speeches about the mindset of sports stars who trust in themselves to reach the top. Schools also encourage students not to misjudge their abilities on failure but to see it as a chance to improve them. All these measures can help students to build their confidence in that they can succeed."
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
              identify their personal ambitions.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques15' />
              help each other to realise their goals.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques15' />
              have confidence in their potential to succeed..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques15' />
              concentrate on where their particular strengths lie.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques16"><span className='numberOfQuestion mr-1 mb-2'>16</span>IIn the third paragraph, the writer suggests that students with a fixed mindset
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques16 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "D (are afraid to push themselves beyond what they see as their limitation)",
                      hiddenWord: "are afraid to push themselves beyond what they see as their limitation.",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "3 paragraph 6 to 8 line. Meanwhile, the former took on only those tasks that would not risk their sense of worth……………………… failure and the lack of effort. ** Here, the former is the first group who was told their results were due to their intelligence(fixed mindset), and they chose to do tasks that would not risk their sense of worth. It means they were afraid of doing tasks beyond their limitation. On the other hand, the group that was told their efforts brought the results (growth mindset) was more willing to put effort into their future tasks."
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
              tend to be less competitive.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques16' />
              generally have a low sense of self-esteem.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques16' />
              will only work hard if they are given constant encouragement.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques16' />
              are afraid to push themselves beyond what they see as their limitations..
            </label>
            </div>
          </div>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className='mb-2'>Questions 17-22</h6>
        <label className=''>Look at the following statements <span className='font-bold'>(Questions 17-22)</span> and the list of people below. <br /><br />
          Match each statement with the correct person or people, A-E.<br /> <br />
          Chooose the correct letter, <span className='font-bold'>A-E</span>, in boxes <span className='font-bold'>17-22 </span>on your answer sheet. <br /> <br />
          NB   You may use any letter more than once.</label><br /> <br />
        <h6>The Model E</h6>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"> <span className='numberOfQuestion'>17</span>The methodology behind the growth mindset studies was not strict enough.
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques17 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques17 != "" && UserData.ques17 == "C" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques17 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "C ( Andrew Gelman)",
                      hiddenWord: " Andrew Gelman",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " 5 paragraph from 1 line to 4 line. Aside from implementation problem…………………………………………..just about any theory at all. ** Andrew Gelman claims that their research design has enough degree of freedom that they could take their data to support just about any theory at all. It means the research design was not strict enough, so it can be used to support any theory. ** Freedom = not strict"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>The idea of the growth mindset has been incorrectly interpreted.
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques18 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques18 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "B (Carol Dweck)",
                      hiddenWord: "Carol Dweck",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "6 paragraph’s first three lines. Much of his criticism is not lost on Dweck………………………………………………………..and misapplied in a range of ways. ** Carol Dweck argues that her work has been misunderstood and misapplied in a range of ways, which clearly means that her work on growth mindset has been incorrectly interpreted."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"> <span className='numberOfQuestion'>19</span>Intellectual ability is an unchangeable feature of each individual.
            <select name="ques19" id="ques19" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques19 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques19 != "" && UserData.ques19 == "A" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques19 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "A ( Alfred Binet)",
                      hiddenWord: "Alfred Binet",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "1 paragraph from 1 line to fifth line. Over the past century………………………………………………..and sought to quantify cognitive ability. ** Alfred Binet held the earlier view that intelligence is something innate. It means intelligence (Intellectual ability) comes from birth and cannot be changed."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques20"> <span className='numberOfQuestion'>20</span>The growth mindset should be promoted without students being aware of it
            <select name="ques20" id="ques20" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques20 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques20 != "" && UserData.ques20 == "E" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques20 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "E (David Yeager and Gregory Walton)",
                      hiddenWord: "David Yeager and Gregory Walton",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "7 paragraph from 3 to last line. David Yeager and Gregory Walton claim that interventions should be delivered… ………………………………………………undo its intended effects. ** David Yeager and Gregory Walton claim that help to children should be given secretly, and children should not become aware of it because if they know, it will not have the intended effect. ** Subtle = a change or distinction so delicate or precise as to be difficult to analyze or describe"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>The growth mindset is not simply about boosting students’ morale.
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques21 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques21 != "" && UserData.ques21 == "B" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques21 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "B ( Carol Dweck.)",
                      hiddenWord: " Carol Dweck.",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "6 paragraph’s last three lines. For me the growth mindset………………………………………………. for making children feel good. ** As per Carol Dweck, growth mindset is a tool for leaning and improvement. It is not a tool to make children feel good (by boosting their morale)."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span>Research shows that the growth mindset has no effect on academic achievement.
            <select name="ques22" id="ques22" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques22 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques22 != "" && UserData.ques22 == "D" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques22 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "D (Timothy Bates)",
                      hiddenWord: "Timothy Bates",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "5 paragraph from 4 to last line. Professor of Psychology Timothy Bates………………………………………… after our intervention study. **  Timothy Bates tried to copy Carol Dweck’s growth mindset work, but he did not get any results. He also noted that people with a growth mindset did not get better grades, which means no effect on academic achievement."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <h6 className='mt-3 mb-3 p-3'>List of People</h6> <br />
        <div className='p-3 w-auto flex flex-wrap gap-3 rounded border-2 border-gray-300'>
          <p><span className='font-bold mr-2'>A</span>Alfred Binet</p> <br />
          <p><span className='font-bold mr-2'>B</span>Carol Dweck</p> <br />
          <p><span className='font-bold mr-2'>C</span> Andrew Gelman</p> <br />
          <p><span className='font-bold mr-2'>D</span>Timothy Bates</p> <br />
          <p><span className='font-bold mr-2'>E</span> David Yeager and Gregory Walton</p>
        </div>
      </div> <br />

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 23-26</h6> <br />
        <label className=''>Do the following statements agree with the views of the writer in Reading Passage 2? <br /><br />In boxes 23-26 on your answer sheet, write</label><br />
        <label className=''>YES : ---   if the statement agrees with the views of the writer <br /> <br />
          NO:--if the statement contradicts the views of the writer <br /> <br />
          NOT GIVEN:-- if it is impossible to say what the writer thinks about this</label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span>Dweck has handled criticisms of her work in an admirable way.
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques23 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques23 != "" && UserData.ques23 == "YES" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques23 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "So the answer is Yes",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– 6 paragraph’s first three lines. Much of this criticism is not lost on Dweck…………………………………in a range of ways. ** Carol Dweck responded to her criticism by modifying her work as required. She also argues that her work has been misunderstood and misapplied in many ways. So, she took the criticism as feedback to improve her work. So the answer is Yes."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques24"> <span className='numberOfQuestion'>24</span> Students’ self-perception is a more effective driver of self-confidence than actual achievement is.
            <select name="ques24" id="ques24" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques24 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques24 != "" && UserData.ques24 == "NO" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques24 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "So the answer is Yes",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "8 paragraph from 2 to last line. But there is evidence to suggest that …………………………………………… vague notion of ‘motivation’ itself. ** Opposite is given in the paragraph than the question. The paragraph says the actual effect of achievement on self-perception is stronger than other ways around. However, the question says self perception is a more effective driver of self-confidence than actual achievement. So the answer is NO."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques25"> <span className='numberOfQuestion'>25</span> Recent evidence about growth mindset interventions has attracted unfair coverage in the media.
            <select name="ques25" id="ques25" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques25 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques25 != "" && UserData.ques25 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques25 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "So the answer is Yes",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " No information about media coverage of the growth mindset is given in the passage."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span>Deliberate attempts to encourage students to strive for high achievement may have a negative effect..
            <select name="ques26" id="ques26" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques26 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques26 != "" && UserData.ques26 == "YES" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques26 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "So the answer is Yes",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Last paragraph’s 1 two lines. Motivational posters and talks are often a waste of time, and might well give students a deluded notion of what success actually means. ** Motivational speeches and posters are used to encourage students to make efforts to achieve something. It is considered a waste of time as it may give the wrong notion (belief) about success, which has a negative effect. So the answer is YES."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />



      {/* for Passage-3 all Questions--- */}
      <div className='Titles pl-[10px] sm:pl-[25px]  mt-4 mb-3 w-full '>
        <h5>Reading Passage-3</h5>
        <h6 className=''>Questions 27-30</h6> <br />
      </div>
      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 3?<br /><br />In boxes 27-30 on your answer sheet, write</label>
        <label className='p-3'>YES : ---   if the statement agrees with the views of the writer <br /> <br />
          NO:--if the statement contradicts the views of the writer <br /> <br />
          NOT GIVEN:-- if it is impossible to say what the writer thinks about this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>Wegener’s ideas about continental drift were widely disputed while he was alive.
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques27 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques27 != "" && UserData.ques27 == "YES" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques27 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "So the answer is Yes",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "1 paragraph’s last three lines. His book on the subject, ……………………… ………………………….some years after his death. Explanation:- Wegener published his ideas about continental drift in a book in different editions, which was the focus of international controversy (dispute) in his lifetime and after his death. So the answer is YES."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28">  <span className='numberOfQuestion'>28</span> The idea that the continents remained fixed in place was defended in a number of respected scientific publications.
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques28 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques28 != "" && UserData.ques28 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques28 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "So the answer is Yes",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "No such information is given in any paragraph of this passage."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span>Wegener relied on a limited range of scientific fields to support his theory of continental drift.
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques29 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques29 != "" && UserData.ques29 == "NO" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques29 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "So the answer is No",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– 2 paragraph from 3 to 5 line. Wegener showed in great detail how such continental movements were plausible and how they worked, using evidence from a large number of sciences including geology, geophysics, paleontology, and climatology. **  Wegener based his theory on a large number of scientific fields, such as geology, geophysics, paleontology, and climatology. The opposite is written in the question than the passage, so the answer is NO."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"><span className='numberOfQuestion'>30</span> The similarities between Wegener’s theory of continental drift and modern-day plate tectonics are enormous.
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques30 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques30 != "" && UserData.ques30 == "NO" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques30 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "So the answer is No",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "2 paragraph from line 7 to 9. Plate tectonics is in many respects quite different from Wegener’sproposal, in the same way that modern evolutionary theory is very different from the ideas Charles Darwin proposed in 1850s about biological evolution. **  It is clearly written that plate tectonics is different from Wegener’s proposal. Hence, the answer is NO."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 31-36</h6> <br />
        <label className=''>Complete the summary using the list of phrases, A-J, below. <br /> <br />
          Write the correct letter, A-J, in boxes 31-36 on your answer sheet</label><br /> <br />
        <h6 className='w-full'>Wegener’s life and work</h6>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques31">One of the remarkable things about Wegener from a  <span className='numberOfQuestion'>31</span>
            <input type="text" name="ques31" id="ques31" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques31 != "I" && "text-red-600"}
                          ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques31 != "" && UserData.ques31 == "I" && "text-green-700"}
                          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && UserData.ques31 != "I"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  I
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 31,
                        Ans1: "",
                        mainAns: "I (biographer’s perspective)",
                        hiddenWord: "biographer’s perspective",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "3 paragraph’s first three lines. When I started writing about Wegener’s life and work, one of the most intriguing things about him for me was that, although he came up with a theory on continental drift, he was not a geologist. ** In these lines, “I” refers to the biographer (the person who wrote about Wegener’s life). According to the biographer’s perspective, it was intriguing (interesting/ remarkable) to write a theory on continental drift for a person who is not a geologist."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            is that although he proposed a theory of continental drift, he was not a geologist. His

            <span className='numberOfQuestion'>32</span>
            <input type="text" name="ques32" id="ques32" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques32 != "F" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques32 != "" && UserData.ques32 == "F" && "text-green-700"} `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && UserData.ques32 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 32,
                        Ans1: "",
                        mainAns: "F (professional interests)",
                        hiddenWord: " professional interests",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: ". 3 paragraph’s third line. He trained as an astronomer and pursued a career in atmospheric physics. ** Career = Professional Interest"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            were limited to atmospheric physics. However, at the time he proposed his theory of continental drift in 1912, he was already a person of

            <span className='numberOfQuestion'>33</span>
            <input type="text" name="ques33" id="ques33" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques33 != "A" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques33 != "" && UserData.ques33 == "A" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && UserData.ques33 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 33,
                        Ans1: "",
                        mainAns: "A (Modest fame.)",
                        hiddenWord: "Modest fame",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "3 paragraph from 4 to 6 line. When he proposed the theory of continental displacement in 1912, he was a lecturer in Physics and astronomy at the University of Marburg, in southern Germany. However, he was not ‘unknown’. ** He was “not unknown”, which means some people knew him. He was moderately famous."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            . Six years previously, there had been his

            <span className='numberOfQuestion'>34</span>
            <input type="text" name="ques34" id="ques34" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques34 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques34 != "" && UserData.ques34 == "C" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && UserData.ques34 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "C (record-breaking achievement)",
                        hiddenWord: "record-breaking achievement",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "3 paragraph’s line 6 and 7 line. In 1906, he had set a world record (with his brother Kurt) for time afloat in a hot-air balloon: 52 hours. ** World record = record-breaking achievement."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of 52 hours in a hot-air balloon, followed by his well-publicised but

            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques35 != "H" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques35 != "" && UserData.ques35 == "H" && "text-green-700"} `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && UserData.ques35 != "H"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  H
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "H (hazardous exploration)",
                        hiddenWord: " hazardous exploration",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "3 paragraph from line 7 to 9 . Between 1906 and 1908 he had taken part in a highly publicized and extremely dangerous expedition to the coast of northeast Greenland. ** Hazardous exploration = extremely dangerous expedition"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            of Greenland’s coast. With the publication of his textbook on thermodynamics, he had also come to the attention of a.

            <span className='numberOfQuestion'>36</span>
            <input type="text" name="ques36" id="ques36" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-4" && !UserData.ques36.match(/E/gi) && "text-red-600"}
                                      ${ReadingShowAnswer == "cambridge-test-4" && UserData.ques36 != "" && UserData.ques36 == "E" && "text-green-700"}
                                      `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-4" && !UserData.ques36.match(/E/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "E (select group)",
                        hiddenWord: "select group",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: ", 3 paragraph’s last 4 lines. He had also made a name for himself amongst a small circle of meteorologists and atmospheric physicist in Germany as the author of a textbook, Thermodynamics of the Atmosphere (1911), and of a number of interesting scientific papers. ** Select group = a small circle"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of German scientists.</label>

        </div>
        <div className='p-3 w-[96%] sm:w-[60%] rounded border-2 border-gray-300'>
          <p><span className='font-bold mr-2'>A</span> modest fame</p> <br />
          <p><span className='font-bold mr-2'>B</span>vast range</p> <br />
          <p><span className='font-bold mr-2'>C</span>record-breaking achievement </p> <br />
          <p><span className='font-bold mr-2'>D</span>research methods </p><br />
          <p><span className='font-bold mr-2'>E</span> select group </p> <br />
          <p><span className='font-bold mr-2'>F</span>professional interests</p> <br />
          <p><span className='font-bold mr-2'>G</span>scientific debate</p>  <br />
          <p><span className='font-bold mr-2'>H</span>hazardous exploration</p> <br />
          <p><span className='font-bold mr-2'>I</span>biographer’s perspective</p> <br />
          <p><span className='font-bold mr-2'>J</span>  narrow investigation</p> <br />
        </div>


      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 37-40</h6> <br />
        <label className=''>Choose the correct letter,<span className='font-bold'> A, B, C or D</span>. <br /> <br />
          Choose  the correct letter in boxes <span className='font-bold'>37-40</span> on your answer sheet</label><br /> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques37"><span className='numberOfQuestion mr-1 mb-2'>37</span>What is Mott T Greene doing in the fifth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques37 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "",
                      mainAns: "B ( explaining why it is desirable to read the whole book.)",
                      hiddenWord: " explaining why it is desirable to read the whole book.",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " The whole fifth paragraph. **  As you can read in this paragraph, Wegener’s investigations were not continuous. He stopped one and started doing another. Then, after some years, he started doing the first one again. You can say that he did not do investigation/research continuously. So, the biographer divided his life into different parts based on careers in different sciences. But reading parts does not make much sense. So the whole book should be read."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques37' />
              describing what motivated him to write the book
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques37' />
              explaining why it is desirable to read the whole book
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques37' />
              suggesting why Wegener pursued so many different careers
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques37' />
              indicating what aspects of Wegener’s life interested him most
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques38"><span className='numberOfQuestion mr-1 mb-2'>38</span> What is said about Wegener in the sixth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques38 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "A (He was not a particularly ambitious person.)",
                      hiddenWord: "He was not a particularly ambitious person.",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: ". 6 paragraph from 5 to last line. He was not active (with a few exceptions) in scientific societies, and did not seek to find influences or advance his ideas through professional contact and politics, spending most of his time at home in his study reading and writing, or in the field collecting observations. ** From these lines, it is clear that he was not much determined for his work. You can say that he did not put extra effort into his work. He worked ordinarily. He had not tried to develop his ideas by contacting professionals and becoming influential via politics, which could make him more successful. It means he was not very ambitious."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques38' />
              He was not a particularly ambitious person.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques38' />
              He kept a record of all his scientific observations.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques38' />
              He did not adopt many of the scientific practices of the time.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques38' />
              He enjoyed discussing new discoveries with other scientists.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques39"><span className='numberOfQuestion mr-1 mb-2'>39</span>What does Greene say about some other famous scientists?

            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques39 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "D (They are easier subjects to write about than Wegener.)",
                      hiddenWord: " They are easier subjects to write about than Wegener",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The whole second-last paragraph. Some famous scientists, such as Newton, Darwin and Einstein, left mountains of written material behind………………………………………………. ………………………………………. Ideas took shape and evolved. ** At the start of the 6th paragraph, it is written that Wegener left very little data about his work. In the second last paragraph, the writer writes that the more data a biographer has about the scientist, the better they can write about their ideas’ evolution. So, writing about Wegener is more difficult than other scientists, such as Newton, Darwin and Einstein."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques39' />
              Their published works had a greater impact than Wegener’s did.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques39' />
              They had fewer doubts about their scientific ideas than Wegener did.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques39' />
              Their scientific ideas were more controversial than Wegener’s.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques39' />
              They are easier subjects to write about than Wegener.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques40"><span className='numberOfQuestion mr-1 mb-2'>40</span>What is Greene’s main point in the final paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-4" && UserData.ques40 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "C (People have little control over many aspects of their lives)",
                      hiddenWord: "People have little control over many aspects of their lives",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Last paragraph’s first three lines. I am firmly of the opinion that most of us, Wegener included, are not in any real sense the authors of our own lives. We plan, think and act often with apparent freedom, but most of the time our lives ‘happen to us’. ** Life happen to us = there are things we cannot foresee, control or prepare for. The meaning of these lines is that many times, there are several things in our lives that we cannot control even when we think, plan and act. We are not the real author of our lives. "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques40' />
              It is not enough in life to have good intentions.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques40' />
              People need to plan carefully if they want to succeed.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques40' />
              People have little control over many aspects of their lives.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques40' />
              It is important that people ensure they have the freedom to act.
            </label>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Panel2_Q2




