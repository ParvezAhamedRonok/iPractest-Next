"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test9Panel2_Page2({ handleChange, UserData }) {
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

      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 21 - 27</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?</h6>
        <h6>TRUE - if the statement agrees with the information </h6>
        <h6>FALSE - if the statement contradicts the information </h6>
        <h6>NOT GIVEN - if there i</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>Combining hobbies with holidays is becoming very popular.
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques21 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques21 != "" && UserData.ques21 == "NOT GIVEN" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques21 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph: E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage discusses weekend courses that can be a form of leisure and personal development, but it does not explicitly mention combining hobbies with holidays as a trend. It talks more about the courses themselves rather than their integration with vacations. so, answer is not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span>One reason for the boom in  learning is that  people  don't  have  a  lot  of  money.
            <select name="ques22" id="ques22" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques22 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques22 != "" && UserData.ques22 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques22 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph: E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage states that the recession and economic insecurity have motivated people to pursue activities that are perceived as more worthwhile and productive, such as learning new skills. This implies that financial considerations are indeed a factor in the increased interest in learning."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span>Courses on how to breed livestock are becoming more popular.
            <select name="ques23" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques23 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques23 != "" && UserData.ques23 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques23 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph: E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage mentions specific examples like pig-keeping courses but does not generalize to say that livestock breeding courses in general are becoming more popular. so, answer is not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques24"><span className='numberOfQuestion'>24</span>All the courses run for two or three days.
            <select name="ques24" id="ques24" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques24 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques24 != "" && UserData.ques24 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques24 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph: E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage mentions that some courses run from Friday to Sunday (which is two to three days), while others may just last for a day. This indicates that course durations vary and not all courses run for two or three days. "
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques25"><span className='numberOfQuestion'>25</span>Some people use the courses to help them start out in business.
            <select name="ques25" id="ques25" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques25 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques25 != "" && UserData.ques25 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques25 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph: E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage suggests that some courses may provide a springboard for new business opportunities, indicating that participants might use these skills to start their own ventures."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span>The courses are also great social activities.
            <select name="ques26" id="ques26" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques26 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques26 != "" && UserData.ques26 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques26 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph: E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "While the passage mentions that courses provide opportunities to meet like-minded people, it does not explicitly describe them as great social activities. The focus is more on the learning and potential economic benefits."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>All the courses include somewhere to stay for the duration of the course..
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques27 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques27 != "" && UserData.ques27 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques27 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph: E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage mentions that some courses are residential, held in locations like country-house hotels, while others require participants to make their own accommodation arrangements. This indicates that not all courses include accommodation; therefore, the statement is false."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 28 - 40</h6> <br />
        <h6 className=''>The text has nine paragraphs, A-I</h6>
        <h6 className='mb-4'>Choose the correct heading for each paragraph from the list of headings below.</h6>
        <div className="articles2">
          <i>i. One possible source of inaccuracies </i> <br /> <br />
          <i>ii. Less time doing chores</i> <br /> <br />
          <i>iii. A difference between perception and reality </i> <br /> <br />
          <i>iv. The value of extra leisure time</i> <br /> <br />
          <i>v. Americans are working harder </i> <br /> <br />
          <i>vi. Significantly more free time</i> <br /> <br />
          <i>vii. The effect of including retirees</i> <br /> <br />
          <i>viii. The need for a wider description of work</i> <br /> <br />
          <i>ix. An effective system for measuring time spent</i> <br /> <br />
          <i>x. How Americans think about their time</i>
        </div>

      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>28</span>
          Paragraph A
          <input type="text" name="ques28" id="ques28" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques28.match(/x/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques28 != "" && UserData.ques28 == "x" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques28.match(/x/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                x
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "x",
                      hiddenWord: "Paragraph: E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph discusses the general perception among Americans that they are busier than ever due to increased demands at home and work. It highlights how people think they are overworked, raising the question of whether this perception matches reality."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>29</span>
          Paragraph B
          <input type="text" name="ques29" id="ques29" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques29.match(/iii/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques29 != "" && UserData.ques29 == "iii" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques29.match(/iii/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "iii",
                      hiddenWord: "Paragraph: Esss",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph introduces the work of economists Mark Aguiar and Erik Hurst, who investigated how Americans spend their time. Despite the common belief that Americans are busier, their research suggests that Americans actually have more leisure time than before, highlighting the difference between perception and reality."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>30</span>
          Paragraph C
          <input type="text" name="ques30" id="ques30" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques30.match(/vi/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques30 != "" && UserData.ques30 == "vi" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques30.match(/vi/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "vi",
                      hiddenWord: "Paragraph: Esss",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph presents the findings that Americans have increased their leisure time by 4-8 hours per week over the past four decades. This translates to significantly more free time, equivalent to 5-10 extra weeks of holiday per year for a full-time worker."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>31</span>
          Paragraph D
          <input type="text" name="ques31" id="ques31" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques31.match(/viii/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques31 != "" && UserData.ques31 == "viii" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques31.match(/viii/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "viii",
                      hiddenWord: "Paragraph: Esss",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph explains that Aguiar and Hurst's broader definition of work includes not only paid employment but also unpaid chores like shopping, cooking, and running errands. It emphasizes the need for a wider description of work to accurately understand how Americans use their time."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>32</span>
          Paragraph E
          <input type="text" name="ques32" id="ques32" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques32.match(/ii/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques32 != "" && UserData.ques32 == "ii" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques32.match(/ii/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "ii",
                      hiddenWord: "Paragraph: Esss",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph states that Americans spend less time on household chores compared to 40 years ago, thanks to technological advancements and services that have increased flexibility and freed up time."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>33</span>
          Paragraph F
          <input type="text" name="ques33" id="ques33" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques33.match(/ix/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques33 != "" && UserData.ques33 == "ix" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques33.match(/ix/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ix
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "ix",
                      hiddenWord: "Paragraph: Esss",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph describes the time-use diaries used in Aguiar and Hurst's study. These diaries, collected since 1965, provide detailed accounts of daily activities, ensuring accuracy by covering the entire day and accounting for every hour."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>34</span>
          Paragraph G
          <input type="text" name="ques34" id="ques34" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques34.match(/vii/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques34 != "" && UserData.ques34 == "vii" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques34.match(/vii/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "vii",
                      hiddenWord: "Paragraph: Esss",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph mentions that Aguiar and Hurst excluded retirees (people 65 years and older) from their study. Including retirees, who generally have more leisure time, would have shown an even larger increase in leisure time."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>35</span>
          Paragraph H
          <input type="text" name="ques35" id="ques35" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques35.match(/i/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques35 != "" && UserData.ques35 == "i" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques35.match(/i/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "i",
                      hiddenWord: "Paragraph: Esss",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph addresses the issue of multi-tasking as a potential source of inaccuracies in measuring time use. It explains the challenge of categorizing activities that combine work and leisure (e.g., cleaning while listening to music) and how the economists handled such combinations."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <span className='numberOfQuestion mt-3'>36</span>
          Paragraph I
          <input type="text" name="ques36" id="ques36" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-9" && !UserData.ques36.match(/iv/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-9" && UserData.ques36 != "" && UserData.ques36 == "iv" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "Actual-Test-9" && !UserData.ques36.match(/iv/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iv
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "",
                      mainAns: "iv",
                      hiddenWord: "Paragraph: Esss",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph discusses the economic value of increased leisure time, estimated at $570 billion annually or $3,300 per worker. While some part-time workers might prefer more income over extra leisure, for most Americans, the additional leisure is seen as a bonus."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
        </div>

      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3 MT-2'>
        <h6 className='mb-5'>Choose the correct letter, A, B or C.</h6>
        <div className='mb-3'>
          <label htmlFor="ques37"><span className='numberOfQuestion mr-1 mb-2'>37</span>Americans seem to spend more time in the office than people in other rich countries
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques37 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "",
                      mainAns: "C (The need for a wider description of work)",
                      hiddenWord: "The need for a wider description of work",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph contrasts the perception that Americans spend more time in the office with the reality that they actually have increased their leisure time over the past decades. It acknowledges that Americans may indeed work longer hours compared to their counterparts in other wealthy nations. However, this is not due to an increase in overall work hours but rather a decline in average workplace hours in other rich countries. This phenomenon is referred to as the thickening process, where other countries have reduced work hours significantly, making American work hours appear comparatively longer. Despite longer hours at the office, Americans still have more leisure time due to this trend of reduced workplace hours in other countries, highlighting a shift in how time is allocated between work and leisure globally."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques37' />
              find rubber sap in many other forms of plant life.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques37' />
              find a way to thicken the sap earlier in the process.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques37' />
              slow down the 'thickening' process
            </label>
            </div>
          </div>
        </div>


        <div className='mb-3'>
          <label htmlFor="ques38"><span className='numberOfQuestion mr-1 mb-2'>38</span>One problem with data from the BLS is that
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques38 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "The need for a wider description of work",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph explains that a limitation of data from the Bureau of Labor Statistics (BLS) and similar surveys is their focus on paid work hours, which provide a clear view of trends in workplaces but do not capture how Americans spend their time outside of work. The BLS data primarily cover activities related to employment and may not accurately reflect the time spent on household chores, shopping, cooking, and other non-paid activities that contribute to perceptions of being overworked, particularly among working women with children. Aguiar and Hurst argue for a broader definition of work that includes these activities to better understand how Americans allocate their time and assess changes in leisure over time. This highlights the need for more comprehensive data sources to provide a complete picture of time use beyond traditional labor statistics."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques38' />
              it is unclear about out of work time
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques38' />
              it is limited to factories and offices
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques38' />
              it does not include leisure time
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3' onChange={handleChange}>
          <label htmlFor="ques39"><span className='numberOfQuestion mr-1 mb-2'>39</span>Time-use diaries
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques39 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "The need for a wider description of work",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph explains that time-use diaries are comprehensive surveys used in studies by economists like Aguiar and Hurst. These diaries require participants to record detailed information about their activities for each hour of the day, providing a thorough account of how individuals allocate their time. This method ensures that all aspects of daily life, including leisure activities, household chores, and work-related tasks, are captured. The inclusion of every hour of the day in these diaries serves as a built-in accuracy check, enhancing the reliability of the data collected. Time-use diaries are employed not only in the United States but also in other countries like Australia and various European nations, making them a widely recognized tool for studying time allocation patterns across different populations."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className=''>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques39' />
              are only available in America and Australia
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques39' />
              are the most accurate time use measurement tool
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques39' />
              provide data for 24 hours of each day
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3' onChange={handleChange}>
          <label htmlFor="ques40"><span className='numberOfQuestion mr-1 mb-2'>40</span>Aguiar and Hurst counted multi-tasking activities of leisure and work
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-9" && UserData.ques40 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "The need for a wider description of work",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph - G. This paragraph discusses the theoretical challenge posed by multi-tasking in time-use diaries, where activities that blend elements of work and leisure can be difficult to categorize. For instance, cleaning while listening to music or using a laptop for work while on a plane blur the distinction between leisure and work time. Aguiar and Hurst address this challenge by counting many combinations of activities, whether they involve work or leisure, as time spent on work-related tasks. This approach ensures that all activities contributing to time use, even those involving multi-tasking, are accurately accounted for in their studies. Thus, their method acknowledges the complex ways in which individuals allocate their time across various activities throughout the day."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className=''>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques40' />
              s free time
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques40' />
              as work time
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques40' />
              as neither free time or work time
            </label>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Test9Panel2_Page2




