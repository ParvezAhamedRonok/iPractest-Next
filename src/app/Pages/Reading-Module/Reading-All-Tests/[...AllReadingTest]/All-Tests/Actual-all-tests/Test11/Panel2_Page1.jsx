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
        <h6 className=''>Questions 1-9</h6> <br /> <br />
        <h6 className=''>Match each heading to the pragraph</h6> <br /> <br />
        <div className='pl-3 pt-2 font-bold'>
          <i>i,	One possible source of inaccuracies</i><br />
          <i>ii,	Less time doing chores</i><br />
          <i>iii , A difference between perception and</i><br />
          <i>iv , The value of extra leisure time</i><br />
          <i>v , Americans are working harder</i><br />
          <i>vi, Significantly more free time</i><br />
          <i>vii , The effect of including retirees</i><br />
          <i>viii, The need for a wider description of work</i><br />
          <i>ix , An effective system for measuring time spent</i><br />
          <i>x , How Americans think about their time</i><br />
        </div>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-4'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>1</span>
          <label htmlFor="ques1">Paragraph A</label>
          <select name="ques1" id="ques1" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques1 != "x" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques1 != "" && UserData.ques1 == "x" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques1 != "x"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              x
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 1,
                    Ans1: "",
                    mainAns: "x (How Americans think about their time)",
                    hiddenWord: "How Americans think about their time",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: " This paragraph discusses the common perception among Americans that they are extremely busy, influenced by technology and competition, and questions whether this perception of being overworked is actually a myth."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>2</span>
          <label htmlFor="ques2">Paragraph B</label>
          <select name="ques2" id="ques2" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques2 != "iii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques2 != "" && UserData.ques2 == "iii" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques2 != "iii"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              iii
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 2,
                    Ans1: "",
                    mainAns: "iii ( A difference between perception and reality)",
                    hiddenWord: " A difference between perception and reality",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph introduces the study by economists Aguiar and Hurst, which contrasts the perception of Americans being busier with the reality that they actually have more leisure time."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>3</span>
          <label htmlFor="ques3">Paragraph C</label>
          <select name="ques3" id="ques3" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques3 != "vi" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques3 != "" && UserData.ques3 == "vi" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques3 != "vi"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              vi
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 3,
                    Ans1: "",
                    mainAns: "vi ( Significantly more free time)",
                    hiddenWord: " Significantly more free time",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph provides data showing that the amount of leisure time for working-age Americans has increased significantly over the past four decades."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>4</span>
          <label htmlFor="ques4">Paragraph D</label>
          <select name="ques4" id="ques4" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques4 != "viii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques4 != "" && UserData.ques4 == "viii" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques4 != "viii"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              viii
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 4,
                    Ans1: "",
                    mainAns: "viii (The need for a wider description of work)",
                    hiddenWord: "The need for a wider description of work",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph explains how Aguiar and Hurst's broader definition of work, which includes household chores and other activities, contributes to their findings of increased leisure time."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>5</span>
          <label htmlFor="ques5">Paragraph E</label>
          <select name="ques5" id="ques5" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques5 != "ii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques5 != "" && UserData.ques5 == "ii" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques5 != "ii"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              ii
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 5,
                    Ans1: "",
                    mainAns: "ii (Less time doing chores)",
                    hiddenWord: "Less time doing chores",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph describes how technological advancements and services have reduced the time Americans spend on household chores, thereby increasing their leisure time."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>6</span>
          <label htmlFor="ques6">Paragraph F</label>
          <select name="ques6" id="ques6" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques6 != "ix" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques6 != "" && UserData.ques6 == "ix" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques6 != "ix"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              ix
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 6,
                    Ans1: "",
                    mainAns: "ix (An effective system for measuring time spent)",
                    hiddenWord: "An effective system for measuring time spent",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph details the use of time-use diaries in Aguiar and Hurst's study, which provide comprehensive and accurate data on how Americans spend their entire day."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>7</span>
          <label htmlFor="ques7">Paragraph G.</label>
          <select name="ques7" id="ques7" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques7 != "vii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques7 != "" && UserData.ques7 == "vii" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques7 != "vii"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              vii
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 7,
                    Ans1: "",
                    mainAns: "vii (The effect of including retirees)",
                    hiddenWord: "The effect of including retirees",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph discusses how the exclusion of retirees from the study means that the actual increase in leisure time for the entire population might be even greater than the economists' estimates."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>8</span>
          <label htmlFor="ques8">Paragraph G</label>
          <select name="ques8" id="ques8" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques8 != "i" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques8 != "" && UserData.ques8 == "i" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques8 != "i"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              i
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 8,
                    Ans1: "",
                    mainAns: "i ( One possible source of inaccuracies)",
                    hiddenWord: " One possible source of inaccuracies",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph addresses the challenge of multi-tasking in time-use diaries, which can complicate the accurate categorization of activities as either work or leisure."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <span className='numberOfQuestion'>9</span>
          <label htmlFor="ques9">Paragraph I.</label>
          <select name="ques9" id="ques9" onChange={handleChange}
            className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques9 != "iv" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques9 != "" && UserData.ques9 == "iv" && "text-green-700"}
            `}>
            <option value=""></option>
            <option value="i">i</option>
            <option value="ii">ii</option>
            <option value="iii">iii</option>
            <option value="iv">iv</option>
            <option value="v">v</option>
            <option value="vi">vi</option>
            <option value="vii">vii</option>
            <option value="viii">viii</option>
            <option value="ix">ix</option>
            <option value="x">x</option>
          </select>
          <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques9 != "iv"
            ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
              iv
              <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                onClick={() => {
                  setExplainRLQuestions(true);
                  setExplainObjForRL(makeObj => ({
                    number: 9,
                    Ans1: "",
                    mainAns: "iv (The value of extra leisure time)",
                    hiddenWord: "The value of extra leisure time",
                    hiddenWord2: "",
                    hiddenWord3: "",
                    keyWords: "",
                    explain: "This paragraph considers the economic value of the increased leisure time, estimating it to be worth $570 billion annually, or $3,300 per worker."
                  }))
                }}
              >Exp..</span>
            </div>
            : ""}</i>

        </div>




      </div>


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 10 -13</h6>
        <h6 className='mb-5'>Choose the correct letter, A, B or C.</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='mb-3'>
          <label htmlFor="ques10"><span className='numberOfQuestion mr-1 mb-2'>10</span>
            Americans seem to spend more time in the office than people in other rich countries
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques10 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Analysis",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Americans may put in longer hours at the office than other countries, but that is because average hours in the workplace in other rich countries have dropped sharply. ** Analysis: This sentence clarifies that Americans seem to spend more time in the office compared to people in other wealthy nations because the average working hours in those other countries have decreased significantly. This reduction in office time in other rich countries makes it appear as though Americans are spending comparatively more time at work, even if their own working hours have not increased."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='flex gap-4 pl-2'>
            <div className="flex flex-col gap-6">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

            </div>
            <div className="flex flex-col gap-9 mt-1" onChange={handleChange}>
              <input className='' type="radio" value="A" name='ques10' />
              <input className='' type="radio" value="B" name='ques10' />
              <input className='' type="radio" value="C" name='ques10' />
            </div>

            <div className="flex flex-col gap-3 sm:gap-6 text-[12px] sm:text-[15px]">
              <i className='' >Because of the increase in Americans leisure time</i>
              <i className=''> Because of a decrease in leisure time in the other rich countries.</i>
              <i className=''>Because of a decrease in office time in the other rich countries.</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques11"><span className='numberOfQuestion mr-1 mb-2'>11</span>One problem with data from the BLS is that
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques11 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Analysis",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Most American labour studies rely on well-known official surveys, such as those collected by the Bureau of Labour Statistics (BLS) and the Census Bureau, that concentrate on paid work. These are good at gleaning trends in factories and offices, but they give only a murky impression of how Americans use the rest of their time.  ** Analysis: This sentence explains that a major issue with data from the Bureau of Labour Statistics (BLS) is its focus on paid work, providing clear insights into trends in factories and offices. However, it fails to give a clear picture of how Americans spend their time outside of work, making the data unclear regarding out-of-work activities."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='flex gap-4 pl-2'>
            <div className="flex flex-col gap-6" onChange={handleChange}>
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques11' />
                <i className='' >It is unclear about out of work time</i>
              </label>
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques11' />
                <i className=''>It is limited to factories and offices</i>
              </label>
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques11' />
                <i className=''>It does not include leisure time</i>
              </label>

            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques12"><span className='numberOfQuestion mr-1 mb-2'>12</span>Time-use diaries
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques12 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Analysis",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "These diaries ask people to give detailed information on everything they did the day before, and for how long they did it. The beauty of such surveys, which are also collected in Australia and many European countries, is that they cover the whole day, not just the time at work, and they also have a built-in accuracy check, since they must always account for every hour of the day.   ** Analysis: This sentence explains that time-use diaries collect detailed information on activities throughout the entire day, ensuring that respondents account for every hour. This comprehensive approach provides data covering all 24 hours, not just work-related activities, offering a complete picture of how people spend their time daily."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className="flex flex-col gap-6" onChange={handleChange}>
            <label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques12' />
              <i className='' >are only available in America and Australia</i>
            </label>
            <label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques12' />
              <i className=''>are the most accurate time use measurement tool</i>
            </label>
            <label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques12' />
              <i className=''>provide data for 24 hours of each day</i>
            </label>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques13"><span className='numberOfQuestion mr-1 mb-2'>13</span>
            Aguiar and Hurst counted multi-tasking activities of leisure and work
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques13 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Analysis",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Sentence from Paragraph H: The two economists counted many combinations of work and leisure, such as reading a novel while commuting or goofing off on the internet at the office, as time spent working. **  Analysis: This sentence clarifies that Aguiar and Hurst considered multi-tasking activities that combine elements of both work and leisure as work time. For example, activities like reading a novel while commuting or using the internet for personal reasons at the office were categorized as work time in their study."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className="flex flex-col gap-6" onChange={handleChange}>
            <label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques13' />
              <i className='' >as free time</i>
            </label>
            <label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques13' />
              <i className=''>as work time</i>
            </label>
            <label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques13' />
              <i className=''>s neither free time or work time</i>
            </label>
          </div>
        </div>
      </div>






      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 14 -18</h6>
        <h6 className=''>Which paragraph contains the following information? Write the correct letter, A-F, in boxes 14-18 on your answer sheet. You may use any letter more than once</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>why some local people stay out of the centre at night
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques14 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques14 != "" && UserData.ques14 == "D" && "text-green-700"}
              `}>

              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques14 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "surrounding areas of South Street",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In a survey for the local council done last year, 49% of the residents of the surrounding areas of South Street confessed that they did not want to come to the city centre any more for fear of crime."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span>how communication with the police has been made faster
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques15 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques15 != "" && UserData.ques15 == "F" && "text-green-700"}
              `}>

              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques15 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "surrounding areas of South Street",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "All the premises now have a radio link to the police station for an instant response to trouble."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>reasons behind the growth in inner-city leisure venues
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques16 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques16 != "" && UserData.ques16 == "B" && "text-green-700"}
              `}>

              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques16 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "surrounding areas of South Street",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "So in the early 1990s, many local councils, in league with local businesses, re-developed their increasingly desolate town centres into 'leisure zones'"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>examples of Romford's similarity to mainland Europe
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques17 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques17 != "" && UserData.ques17 == "A" && "text-green-700"}
              `}>

              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques17 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "surrounding areas of South Street",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "South Street in Romford looks as close to an Englishman's dream of a continental-style piazza as it is possible to get. Leafy trees line the extended pavements crowded with seats and tables as young families, pensioners, teenagers and businessmen tuck into a variety of faux-European dishes for lunch."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"> <span className='numberOfQuestion'>18</span>how illegal substances are being controlled
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques18 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques18 != "" && UserData.ques18 == "F" && "text-green-700"}
              `}>

              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques18 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "surrounding areas of South Street",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "So they now work closely with the 528 'door-staff', previously known as bouncers, to target drug-dealers in the bars and clubs. In the year since that scheme came into effect, there have been more than 300 arrests for drugs."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-3 mt-3'>
        <h6 className=''>Questions 19-26</h6>
        <h6 className=''>Complete the summary below</h6>
        <h6>Choose ONE WORD ONLY from the passage..</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-2 flex-wrap mb-2'>
          <label htmlFor="ques19">In an attempt to get a wider variety of
            <span className='numberOfQuestion'>19</span>
            <input type="text" name="ques19" id="ques19" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques19.match(/People/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques19 != "" && UserData.ques19 == "People" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques19.match(/People/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  People
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "",
                        mainAns: "People",
                        hiddenWord: "surrounding areas of South Street",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In an attempt to get a wider variety of people into the center at night time, the local government and private organisations are going to provide different kinds of attractions"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            into the
            <span className='numberOfQuestion'>20</span>
            <input type="text" name="ques20" id="ques20" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques20.match(/center/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques20 != "" && UserData.ques20 == "center" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques20.match(/center/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  center
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "center",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In an attempt to get a wider variety of people into the center at night time, the local government and private organisations are going to provide different kinds of attractions."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            style theme park.

            at night time, the local government and private organisations are going to provide different kinds of
            <span className='numberOfQuestion'>21</span>
            <input type="text" name="ques21" id="ques21" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques21.match(/attractions/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques21 != "" && UserData.ques21 == "attractions" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques21.match(/attractions/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  attractions
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 21,
                        Ans1: "",
                        mainAns: "attractions",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Sentence from Paragraph G: Some examples include a 16-screen cinema and a 24-hour supermarket."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            . Some examples include a
            <span className='numberOfQuestion'>22</span>
            <input type="text" name="ques22" id="ques22" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques22.match(/cinema/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques22 != "" && UserData.ques22 == "cinema" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques22.match(/cinema/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  cinema
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "cinema",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Sentence from Paragraph G: Some examples include a 16-screen cinema and a 24-hour supermarket.."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            and a 24-hour supermarket. They hope this will encourage people who are different
            <span className='numberOfQuestion'>23</span>
            <input type="text" name="ques23" id="ques23" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques23.match(/ethnically/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques23 != "" && UserData.ques23 == "ethnically" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques23.match(/ethnically/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  ethnically
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 23,
                        Ans1: "",
                        mainAns: "ethnically",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "They hope this will encourage people who are different ethnically of getting in, and not drunk, to use the city-centre facilities."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of getting in., and not drunk, to use the city-centre
            <span className='numberOfQuestion'>24</span>
            <input type="text" name="ques24" id="ques24" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques24.match(/facilities/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques24 != "" && UserData.ques24 == "facilities" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques24.match(/facilities/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  facilities
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "facilities",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Sentence from Paragraph G: They hope this will encourage people who are different ethnically of getting in, and not drunk, to use the city-centre facilities."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            . The local government  of Romford thinks that with these
            <span className='numberOfQuestion'>25</span>
            <input type="text" name="ques25" id="ques25" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques25.match(/measures/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques25 != "" && UserData.ques25 == "measures" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques25.match(/measures/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  measures
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "measures",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Sentence from Paragraph H: The local government of Romford thinks that with these measures in place it will be able to reclaim the city centre in the evenings."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            in place it will be able to
            <span className='numberOfQuestion'>26</span>
            <input type="text" name="ques26" id="ques26" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques26.match(/reclaim/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques26 != "" && UserData.ques26 == "reclaim" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques26.match(/reclaim/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  reclaim
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "reclaim",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Sentence from Paragraph H: The local government of Romford thinks that with these measures in place it will be able to reclaim the city centre in the evenings."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            the city centre in the evenings.</label>

        </div>
      </div>

    </section>
  )
}

export default Test9Panel2_Page2



