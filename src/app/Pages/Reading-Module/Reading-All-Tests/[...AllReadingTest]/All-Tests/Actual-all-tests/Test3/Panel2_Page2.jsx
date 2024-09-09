"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>



function Test3Panel2_Page2({ handleChange, UserData }) {
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
        <h6 className=''>Questions 22 - 27</h6> <br />
        <h6 className=''>Choose the correct letter, A, B or C.</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='mb-3'>
          <label htmlFor="ques22"><span className='numberOfQuestion mr-1 mb-2'>22</span>Geoff Ribbens and Richard Thompson state that
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques22 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "B (a significant portion of a message is delivered through intonation.)",
                        hiddenWord: "a significant portion of a message is delivered through intonation.",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "he correct statement from the passage is that Less than 10% of the messages we communicate occur through our speech; a surprising 40% are conveyed by our tone of voice and 50% simply from our gestures. This is found in paragraph C of the passage Body Language at Work. This indicates that Ribbens and Thompson emphasize the importance of intonation and gestures in communication, with intonation alone accounting for 40% of the message."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='flex gap-4 pl-2'>
            <div className="flex flex-col gap-6">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

            </div>
            <div className="flex flex-col gap-9 mt-1" onChange={handleChange}>
              <input className='' type="radio" value="A" name='ques22' />
              <input className='' type="radio" value="B" name='ques22' />
              <input className='' type="radio" value="C" name='ques22' />
            </div>

            <div className="flex flex-col gap-3 sm:gap-6 text-[12px] sm:text-[15px]">
              <i className='' >we understand about half of other people's body language.</i>
              <i className=''> a significant portion of a message is delivered through intonation </i>
              <i className=''>the major part of any message is sent through our body language</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques23"><span className='numberOfQuestion mr-1 mb-2'>23</span>More technology means
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques23 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 23,
                        Ans1: "",
                        mainAns: "C (admin staff carry out more people-related tasks.)",
                        hiddenWord: "admin staff carry out more people-related tasks.",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In paragraph E of the passage 'Body Language at Work,' it states: 'With technology liberating them from the more time-consuming chores, PAs and secretaries are able to pursue more social responsibilities - managing staff, attending meetings and handling clients.' This indicates that advancements in technology have freed administrative staff from routine tasks, allowing them to focus more on tasks that involve interpersonal interactions and management responsibilities. Therefore, the correct answer is that admin staff are now able to engage more in people-related tasks due to technological advancements."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='flex gap-4 pl-2'>
            <div className="flex flex-col gap-6">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

            </div>
            <div className="flex flex-col gap-9 mt-1" onChange={handleChange}>
              <input className='' type="radio" value="A" name='ques23' />
              <input className='' type="radio" value="B" name='ques23' />
              <input className='' type="radio" value="C" name='ques23' />
            </div>

            <div className="flex flex-col gap-7 text-[12px] sm:text-[15px]">
              <i className='' >staff are using their body language less effectively </i>
              <i className='mt-[-10px] sm:mt-0'>some staff have developed more confidence </i>
              <i className='mt-[-4px] sm:mt-0'>admin staff carry out more people-related tasks</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques24"><span className='numberOfQuestion mr-1 mb-2'>24</span>James believes that
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques24 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "A (PAs in America are more confident than in the UK.)",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In paragraph F of the passage 'Body Language at Work,' Judi James, the business consultant, states: 'In America, PAs will give out business cards as a matter of course, but if I suggest this in the UK it tends to provoke nervous laughter.' This suggests that PAs in America are more accustomed to assertive behaviors such as giving out business cards, indicating a higher level of confidence compared to their counterparts in the UK who may perceive such actions differently. Therefore, the correct answer is that James believes PAs in America exhibit more confidence in assertive behaviors than those in the UK."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='flex gap-4 pl-2'>
            <div className="flex flex-col gap-6">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

            </div>
            <div className="flex flex-col gap-9 mt-1" onChange={handleChange}>
              <input className='' type="radio" value="A" name='ques24' />
              <input className='' type="radio" value="B" name='ques24' />
              <input className='' type="radio" value="C" name='ques24' />
            </div>

            <div className="flex flex-col gap-3 sm:gap-6 text-[12px] sm:text-[15px]">
              <i className='' >PAs in America are more confident than in the UK </i>
              <i className=''> PAs in the UK are arrogant</i>
              <i className='mt-2 sm:mt-0'>PAs in America are concerned about appearing to be arrogant</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques25"><span className='numberOfQuestion mr-1 mb-2'>25</span>James believes there is much to be gained from

            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques25 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "C (PAs in America are more confident than in the UK.)",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In paragraph H of the passage Body Language at Work, Judi James advises:Always enter offices and meeting rooms confidently, as if you're meant to be there. It's amazing how many people have difficulty going up to someone and confidently shaking their hand with just enough eye contact to make them realise you're worth speaking to. This paragraph emphasizes the importance of making a strong first impression by entering meetings with confidence, which can significantly impact how one is perceived and the success of their interactions. Therefore, the correct answer is that James believes there is much to be gained from entering a meeting with confidence, as stated in paragraph H of the passage."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i></label>
          <div className='flex gap-4 pl-2'>
            <div className="flex flex-col gap-6">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

            </div>
            <div className="flex flex-col gap-9 mt-1" onChange={handleChange}>
              <input className='' type="radio" value="A" name='ques25' />
              <input className='' type="radio" value="B" name='ques25' />
              <input className='' type="radio" value="C" name='ques25' />
            </div>

            <div className="flex flex-col gap-6 text-[12px] sm:text-[15px]">
              <i className='' >maintaining strong body language throughout a meeting</i>
              <i className='mt-[-5px] sm:mt-0'>making a high level of eye contact </i>
              <i className=''>entering a meeting with confidence</i>
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor="ques26"><span className='numberOfQuestion mr-1 mb-2'>26</span>When addressing senior staff, James thinks
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques26 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "C (you should not be too timid.)",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In paragraph H of the passage Body Language at Work, Judi James advises: If you have to approach a senior colleague at their desk, try to do so with as much purpose as possible. Many people find it very irritating to have someone lurking at their desk, timidly waiting to speak to them, and it can get your conversation off on the wrong foot.This suggests that James believes it's important not to appear too timid when addressing senior staff, emphasizing the need to approach them with confidence and purpose. Therefore, the correct answer is that James thinks you should not be too timid when addressing senior staff, as stated in paragraph H of the passage."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
          <div className='flex gap-4 pl-2'>
            <div className="flex flex-col gap-6">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

            </div>
            <div className="flex flex-col gap-9 mt-1" onChange={handleChange}>
              <input className='' type="radio" value="A" name='ques26' />
              <input className='' type="radio" value="B" name='ques26' />
              <input className='' type="radio" value="C" name='ques26' />
            </div>

            <div className="flex flex-col gap-6 mt-[-10px] sm:mt-0 text-[12px] sm:text-[15px]">
              <i className='' >you should use your body language to show the required level of respect</i>
              <i className=''>you should always try to mirror their body language </i>
              <i className=''>you should not be too timid</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques27"><span className='numberOfQuestion mr-1 mb-2'>27</span>When attempting to interpret body langauge, we should remember
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques27 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 27,
                        Ans1: "",
                        mainAns: "A (that it is not difficult to misinterpret the meaning)",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In the concluding part of the passage Body Language at Work, it states: The authors' get-out clause for this little discrepancy is to argue that 'it is seldom one gesture or posture, but a combination of body signals that convey the clues. It is also important to put the body language in context.' This paragraph (conclusion of the passage) highlights the complexity of interpreting body language and the potential for misunderstanding if gestures are not considered in context or if only one gesture is focused on. Therefore, the correct answer is that when interpreting body language, we should remember that it is not difficult to misinterpret the meaning, as emphasized in the concluding paragraph of the passage."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label> <br />
          <div className='flex gap-4 pl-2'>
            <div className="flex flex-col gap-6">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

            </div>
            <div className="flex flex-col gap-9 mt-1" onChange={handleChange}>
              <input className='' type="radio" value="A" name='ques27' />
              <input className='' type="radio" value="B" name='ques27' />
              <input className='' type="radio" value="C" name='ques27' />
            </div>

            <div className="flex flex-col gap-6 mt-[-10px] sm:mt-0 text-[12px] sm:text-[15px]">
              <i className='' >that it is not difficult to misinterpret the meaning </i>
              <i className=''>that a single gesture often tells us all we need to know </i>
              <i className='mt-[-4px] sm:mt-0'>to pay more attention to facial gestures</i>
            </div>
          </div>
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 28 - 40</h6> <br />
        <h6 className=''>The text contains ten paragraphs, A- J.</h6>
        <h6 className='mb-4'>Which paragraph contains the following information?</h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>how one company helps families
            <input type="text" name="ques28" id="ques28" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques28 != "E" && "text-red-600"}
                      ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques28 != "" && UserData.ques28 == "E" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques28 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 28,
                        Ans1: "",
                        mainAns: "E (American Century Investments, an investment manager in Kansas City, pays adoption expenses and the cost of home-fitness equipment for its employees.)",
                        hiddenWord: "Life Beyond Pay",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This information is found in paragraph E of the passage Life Beyond Pay, which mentions specific benefits provided by American Century Investments to support its employees and their families."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques29"> <span className='numberOfQuestion'>29</span>two serious problems for employers
            <input type="text" name="ques29" id="ques29" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques29 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques29 != "" && UserData.ques29 == "B" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques29 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 29,
                        Ans1: "",
                        mainAns: "B (Some companies are facing a falling population of workers and tight controls on immigration.)",
                        hiddenWord: "Life Beyond Pay",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This is mentioned in paragraph B of the passage Life Beyond Pay, where it discusses challenges faced by employers, including a decreasing workforce and immigration restrictions."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques30"><span className='numberOfQuestion'>30</span>one reason why employees need to work flexible hours
            <input type="text" name="ques30" id="ques30" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques30 != "D" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques30 != "" && UserData.ques30 == "D" && "text-green-700"}
           
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques30 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 30,
                        Ans1: "",
                        mainAns: "D (Globalization has increased the need for flexible working hours to accommodate different time zones and communication needs)",
                        hiddenWord: "Life Beyond Pay",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This is stated in paragraph D of the passage Life Beyond Pay, which highlights how globalization has influenced the demand for flexible working hours."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span> a new publication to mirror changes in the work environment
            <input type="text" name="ques31" id="ques31" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques31 != "A" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques31 != "" && UserData.ques31 == "A" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques31 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  A
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 31,
                        Ans1: "",
                        mainAns: "A (Success, a magazine resurrected in America, reflects contemporary workplace values such as work-life balance.)",
                        hiddenWord: "Life Beyond Pay",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This is found in paragraph A of the passage Life Beyond Pay, which introduces the magazine Success and its focus on modern workplace values."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>

        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques32"> <span className='numberOfQuestion'>32</span>how a division between companies is developing
            <input type="text" name="ques32" id="ques32" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques32 != "C" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques32 != "" && UserData.ques32 == "C" && "text-green-700"}
           
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques32 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 32,
                        Ans1: "",
                        mainAns: "C (Some companies are embracing work-life balance initiatives while others lag behind, creating a divide in workplace practices.)",
                        hiddenWord: "paragraph C",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " This information can be inferred from the passage as it discusses how some companies, like IBM and Bank of America (paragraph C), have adopted work-life balance programs, while others have not, indicating a division in approaches to employee benefits"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>

        </div>
      </div>








      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Classify the following statements by person  <br /><br />
          A James Freer <br /><br />
          B Rob Marcolina <br /><br />
          C Helen Murlis <br /><br />
          D Joseph Guerriero <br /><br />
          E Orison Swett Marden <br /><br />
          F Nella Barkley</h6><br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques33"><span className='numberOfQuestion'>33</span>was given a break from work after the birth of his child
            <input type="text" name="ques33" id="ques33" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques33 != "B" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques33 != "" && UserData.ques33 == "B" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques33 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 33,
                        Ans1: "",
                        mainAns: "B (Rob Marcolina)",
                        hiddenWord: "Rob Marcolina",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This information is mentioned in paragraph E of the passage 'Life Beyond Pay,'' where it discusses how Rob Marcolina, a gay consultant with Bain & Company, was allowed time off to look after his daughter when she was born to a surrogate mother."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques34"><span className='numberOfQuestion'>34</span>believes companies are not changing quickly enough
            <input type="text" name="ques34" id="ques34" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques34 != "F" && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques34 != "" && UserData.ques34 == "F" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques34 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "F (Nella Barkley)",
                        hiddenWord: "Nella Barkley",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This can be inferred from paragraph D of the passage Life Beyond Pay, where Nella Barkley, an advisor on work-life balance, mentions that large firms are beginning to understand the value of flexible work schemes, but only slowly."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques35"><span className='numberOfQuestion'>35</span>sees two kinds of companies emerging
            <input type="text" name="ques35" id="ques35" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques35 != "C" && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques35 != "" && UserData.ques35 == "C" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques35 != "C"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  C
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "C (Helen Murlis)",
                        hiddenWord: "Helen Murlis",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This information is found in paragraph C of the passage Life Beyond Pay, where Helen Murlis from Hay Group talks about a divide between companies that embrace work-life balance initiatives and those that do not."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span> was the original writer of "Success"
            <input type="text" name="ques36" id="ques36" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques36 != "E" && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques36 != "" && UserData.ques36 == "E" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques36 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "E (Orison Swett Marden)",
                        hiddenWord: "Orison Swett Marden",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This is mentioned in paragraph A of the passage Life Beyond Pay, where it introduces Success magazine and mentions Orison Swett Marden as the original writer."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>

        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span>believes work-life programs help a company to make money
            <input type="text" name="ques37" id="ques37" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques37 != "A" && "text-red-600"}
                   ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques37 != "" && UserData.ques37 == "A" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques37 != "A"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "E (James Freer)",
                        hiddenWord: "James Freer",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This information is inferred from the overall discussion in the passage about the benefits of work-life balance programs. While James Freer is not directly quoted, the passage discusses how such programs can help retain talent and improve financial results, aligning with his perspective."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>

        </div>
      </div>





      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Complete the sentences below. <br /><br />
          Choose NO MORE THAN TWO WORDS from the text for each answer.<br /><br /> </h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span>Ernst and Young has over two thousand people working on
            <input type="text" name="ques38" id="ques38" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques38.match(/flexi-time/gi) && "text-red-600"}
                     ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques38 != "" && UserData.ques38 == "flexi-time" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && !UserData.ques38.match(/flexi-time/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  flexi-time
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "flexi-time",
                        hiddenWord: "flexi-time",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This information is mentioned in paragraph G of the passage Life Beyond Pay, where it discusses Ernst & Young's initiatives called People First, which include over 2,300 employees on flexi-time."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            a	basis.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>bThe cost of training someone to a high level from a
            <input type="text" name="ques39" id="ques39" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques39.match(/raw recruit/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques39 != "" && UserData.ques39 == "raw recruit" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && !UserData.ques39.match(/raw recruit/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  raw recruit
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "raw recruit",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This is mentioned in paragraph H of the passage Life Beyond Pay, where DeAnne Aguirre from Booz Allen Hamilton calculates the cost of investing in new recruits to high-level positions, highlighting the significant financial investment required."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            can cost millions of dollars.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span>Despite their concern for a work-life balance, younger employees are willing to
            <input type="text" name="ques40" id="ques40" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques40.match(/binge-work/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques40 != "" && UserData.ques40 == "binge-work" && "text-green-700"}
             `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && !UserData.ques40.match(/binge-work/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  binge-work
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "binge-work",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This concept is discussed in paragraph J of the passage 'Life Beyond Pay,'' which mentions how younger employees are willing to work intensely for periods but also value extended sabbaticals and work-life balance initiatives."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            for a short time. </label>
        </div>
      </div>








    </section>
  )
}

export default Test3Panel2_Page2




