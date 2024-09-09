"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test6Panel2Q_2({ handleChange, UserData }) {
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

      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Question 22-27</h6> <br />
        <h6 className=''>Choose the correct letter, A, B or C.</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='mb-3'>
          <label htmlFor="ques22"><span className='numberOfQuestion mr-1 mb-2'>22</span>
            'Detoxing' the mind
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques22 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "A",
                        hiddenWord: "paragraph A",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This is discussed in passages A and B, where 'detoxing' the mind involves reflecting on past experiences, learning from them, and reframing negative thoughts."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques22' />
                helps people to learn from their past
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques22' />
                is the starting point for planning for the future</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques22' />
                makes it easier to forget bad experiences</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques23"><span className='numberOfQuestion mr-1 mb-2'>23</span>
            The time to get concerned about your problems is
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques23 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 23,
                        Ans1: "",
                        mainAns: "B",
                        hiddenWord: "paragraph B",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer is supported by passage B, which discusses the central idea behind detoxifying the mind. It emphasizes that people should actively challenge negative thoughts or cognitions that build up and affect how they view themselves and their lives. When problems start to dominate or fill your mind, it becomes crucial to address them to prevent them from negatively impacting your mental well-being and outlook (paragraph B)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques23' />
                when the problem starts to occur
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques23' />
                when they fill your mind.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques23' />
                when they guide your thinking</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques24"><span className='numberOfQuestion mr-1 mb-2'>24</span>
            When reflecting on negative situations, the writer suggests asking yourself
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques24 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "C",
                        hiddenWord: "paragraph C",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer is supported by passage C, which discusses steps individuals can take to help themselves through reflection. It advises looking back at troublesome events and considering how one could have reframed the situation to make it easier to deal with. This approach encourages a proactive mindset towards learning from past experiences and improving coping strategies (paragraph C)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques24' />
                why they happened to you
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques24' />
                who was really responsible for them.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques24' />
                how you could have thought about them differently</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques25"><span className='numberOfQuestion mr-1 mb-2'>25</span>
            Volunteering can be useful because it

            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques25 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "B",
                        hiddenWord: "paragraph E",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer is supported by passage E, which discusses the benefits of making positive New Year's resolutions. It highlights volunteering as a way to challenge oneself, meet new people, and discover one's capabilities, thereby boosting self-worth and confidence (paragraph E)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques25' />
                takes your mind off your problems
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques25' />
                allows you to discover yourself</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques25' />
                is a great way to make new friends.</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques26"><span className='numberOfQuestion mr-1 mb-2'>26</span>
            Regardng emotional baggage,
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques26 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "C",
                        hiddenWord: "paragraph F",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This idea is discussed in passage F, which talks about how emotional baggage, such as difficult past experiences or unresolved issues, can sometimes define individuals if not managed properly. The passage suggests that while these issues may impact day-to-day functioning, they should not overwhelm or define a person's entire life, emphasizing the importance of perspective and managing emotional burdens appropriately (paragraph F)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques26' />
                there is little we can do about it
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques26' />
                it needs to be treated day by day.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques26' />
                it should not grow out of proportion</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques27"><span className='numberOfQuestion mr-1 mb-2'>27</span>
            CBT is

            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && UserData.ques27 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 27,
                        Ans1: "",
                        mainAns: "A",
                        hiddenWord: "paragraph G",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This answer is supported by passage G, which discusses Cognitive Behavioral Therapy (CBT) as a specific treatment recommended for people dealing with depression and negative thought patterns. The passage highlights that CBT helps individuals reframe their thinking and manage their emotions more effectively, making it an effective therapeutic approach for addressing depression (paragraph G)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-2 ml-2' type="radio" value="A" name='ques27' />
                a treatment for people with depression
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label htmlFor="">
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-2 ml-2' type="radio" value="B" name='ques27' />
                a therapy for people with negative thoughts</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-2 ml-2' type="radio" value="C" name='ques27' />
                is available to anyone with negative thoughts.</label>
            </div>
          </div>
        </div>

      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 28 - 40</h6> <br />
        <h6 className=''>The text has seven paragraphs, A-G.</h6> <br />
        <h6 className=''>Choose the correct heading for each paragraph from the list of headings below. </h6><br />
        <div className='pl-3 pt-2 mb-2'>
          <i className='font-bold'>i,	Food companies should benefit from additional regulation</i> <br />
          <i className='font-bold'>ii,	The need for clarity between food and medicine</i><br />
          <i className='font-bold'>iii ,The main reason behind the shift towards functional foods</i><br />
          <i className='font-bold'>iv , Similarities between the pharmaceutical and the food industries</i><br />
          <i className='font-bold'>v , The food industry’s case for less regulation</i><br />
          <i className='font-bold'>vi, A new trend in food production</i><br />
          <i className='font-bold'>vii , More transparency in the results of food research</i><br />
          <i className='font-bold'>viii, Demands for food companies to be more accountable</i><br />
        </div>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion mt-2'>28</span>
            Paragraph A
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques28 != "vi" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques28 != "" && UserData.ques28 == "vi" && "text-green-700"}
           
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
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques28 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "vi",
                      hiddenWord: "paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "A new trend in food production: This paragraph discusses the proliferation of functional foods in supermarkets, which claim various health benefits, indicating a new trend in food production."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion mt-2'>29</span>
            Paragraph B
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques29 != "iii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques29 != "" && UserData.ques29 == "iii" && "text-green-700"}
           
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
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques29 != "iii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "iii",
                      hiddenWord: "paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The main reason behind the shift towards functional foods: This paragraph explains that food companies promote health and nutritional benefits of their products to appeal to health-conscious consumers and to potentially compensate for unhealthy eating habits."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"><span className='numberOfQuestion mt-2'>30</span>
            Paragraph C
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques30 != "viii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques30 != "" && UserData.ques30 == "viii" && "text-green-700"}
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
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques30 != "viii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "viii",
                      hiddenWord: "paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Demands for food companies to be more accountable: This paragraph discusses regulatory scrutiny of health claims on food labels by authorities in the US and Europe, highlighting demands for accountability from food companies."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"><span className='numberOfQuestion mt-2'>31</span>
            Paragraph D
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques31 != "v" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques31 != "" && UserData.ques31 == "v" && "text-green-700"}
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
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques31 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "v",
                      hiddenWord: "paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The food industry’s case for less regulation: This paragraph presents arguments from the food industry against stringent regulations, emphasizing the safety and positive aspects of their fortified products."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion mt-2'>32</span>
            Paragraph E
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques32 != "ii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques32 != "" && UserData.ques32 == "ii" && "text-green-700"}
              
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
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques32 != "ii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "ii",
                      hiddenWord: "paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The need for clarity between food and medicine: This paragraph discusses concerns about food companies making specific health claims for functional foods, blurring the distinction between food and medicine, and the potential risks associated with such claims."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33"><span className='numberOfQuestion mt-2'>33</span>
            Paragraph F
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques33 != "vii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques33 != "" && UserData.ques33 == "vii" && "text-green-700"}
              
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
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques33 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "vii",
                      hiddenWord: "paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "More transparency in the results of food research: This paragraph suggests that food companies should publish all research results, similar to the pharmaceutical industry, to ensure transparency in health claims and product labeling."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34"><span className='numberOfQuestion mt-2'>34</span>
            Paragraph G
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques34 != "i" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques34 != "" && UserData.ques34 == "i" && "text-green-700"}
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
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques34 != "i"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "i",
                      hiddenWord: "paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Food companies should benefit from additional regulation: This paragraph argues that increased scrutiny and regulation in the food industry will promote innovation and benefit companies willing to substantiate health claims with scientific evidence."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>





      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 35-37</h6> <br />
        <h6 className=''>Complete the sentences below</h6> <br />
        <h6 className=''>Choose NO MORE THAN TWO WORDS from the text for each answer.</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques35"><span className='numberOfQuestion'>35</span>
            Which page would you go to if you were interested in making your own films?
            <input type="text" name="ques35" id="ques35" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques35.match(/tell whether/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques35 != "" && UserData.ques35 == "tell whether" && "text-green-700"}
              
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques35.match(/tell whether/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  tell whether
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "tell whether",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This question seems to be asking for information related to determining the credibility or validity of information about filmmaking. For this, you might look for resources or guidelines that help you assess the reliability of filmmaking advice or techniques. This aligns with the need to make informed decisions when learning about filmmaking (not tied to a specific paragraph)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span>
            Which page would you go to if you were interested in making your own films?
            <input type="text" name="ques36" id="ques36" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques36.match(/components/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques36 != "" && UserData.ques36 == "components" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques36.match(/components/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  components
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "components",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "If you're interested in understanding the various components of filmmaking, you would likely seek information that covers different aspects such as cinematography, screenwriting, directing, editing, and more. Resources on these components can be found in educational books, online courses, or specific sections of filmmaking websites (not tied to a specific paragraph)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span>
            Which page would you go to if you were interested in making your own films?
            <input type="text" name="ques37" id="ques37" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-6" && !UserData.ques37.match(/scrutiny/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques37 != "" && UserData.ques37 == "scrutiny" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-6" && !UserData.ques37.match(/scrutiny/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  scrutiny
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "scrutiny",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "When it comes to scrutinizing filmmaking techniques or practices, you might want to refer to critical reviews, expert analyses, or scholarly articles that evaluate different approaches to filmmaking. This could also involve understanding how to critically assess the impact and effectiveness of various filmmaking methods (not tied to a specific paragraph)."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 38-40</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?</h6> <br />
        <h6 className=''>
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span>Food companies are investing in functional foods because they are healthier
            <select name="ques38" id="ques38" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques38 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques38 != "" && UserData.ques38 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques38 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " This statement is not supported by the paragraphs provided. While functional foods are marketed with health claims, the primary motivation discussed in paragraph B is economic gain and market appeal rather than solely focusing on health benefits."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>The FDA is going to revise the legislation on food labels next year.
            <select name="ques39" id="ques39" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques39 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques39 != "" && UserData.ques39 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques39 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This statement is supported by paragraph C, which mentions that the FDA announced plans to overhaul the rules for nutritional claims on food labels and issue new standards early the following year."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span>The food industry welcomes the regulators new demands.
            <select name="ques40" id="ques40" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques40 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-6" && UserData.ques40 != "" && UserData.ques40 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-6" && UserData.ques40 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This statement is contradicted by paragraph D, which discusses industry concerns and opposition to stringent regulations on health claims and nutritional labeling. Many in the industry argue against heavy-handed regulations, suggesting they could stifle innovation and disadvantage smaller firms."
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

export default Test6Panel2Q_2




