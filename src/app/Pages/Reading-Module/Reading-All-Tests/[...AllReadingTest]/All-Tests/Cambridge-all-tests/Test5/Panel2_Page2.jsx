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
        <h5 className=''>Reading Passage-3</h5>
        <h6 className=''>Questions 27-31</h6> <br />
        <label className='mb-1'>Complete the summary using the list of phrases, <span className='font-bold'>A-J</span>, below.</label>
        <label className=''>The story behind the hunt for Charles II</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques27">Charles II’s father was executed by the Parliamentarian forces in 1649. Charles II then formed a  <span className='numberOfQuestion'>27</span>
            <input type="text" name="ques27" id="ques27" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques27 != "H" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques27 != "" && UserData.ques27 == "H" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && UserData.ques27 != "H"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  H
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 27,
                        Ans1: "",
                        mainAns: "H ( strategic alliance)",
                        hiddenWord: " strategic alliance",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " First paragraph’s fifth line to ninth line. After his father was executed by the parliamentarians in 1649, the young Charles II sacrificed one of the very principles his father had died for and did a deal with the Scots, **  Deal = an agreement entered into by two or more parties for their mutual benefit. Alliance= a union or association formed for mutual benefit"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>


            with the Scots, and in order to become King of Scots, he abandoned an important

            <span className='numberOfQuestion'>28</span>
            <input type="text" name="ques28" id="ques28" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques28 != "J" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques28 != "" && UserData.ques28 == "J" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && UserData.ques28 != "J"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  J
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 28,
                        Ans1: "",
                        mainAns: "J ( religious conviction)",
                        hiddenWord: " religious conviction",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " First paragraph 7 line to 11 line. Charles II sacrificed one of the very principles his father had died for and did a deal with the Scots, thereby accepting Presbyterianism as the national religion in return for being crowned King of Scots. ** Principle = proposition that serves as the foundation for a system of belief or behavior. Conviction = a firmly held belief or opinion. Presbyterianism = part of the reformed Protestant religion. ** Further explanation:- Charles II’s father had religious principles for what her died, but Charles II abandoned those principles by accepting Presbyterianism."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            that was held by his father and had contributed to his father’s death. The opposing sides then met outside Worcester in 1651. The battle led to a

            <span className='numberOfQuestion'>29</span>
            <input type="text" name="ques29" id="ques29" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques29 != "F" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques29 != "" && UserData.ques29 == "F" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && UserData.ques29 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 29,
                        Ans1: "",
                        mainAns: "F ( decisive victory)",
                        hiddenWord: "decisive victory",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " First paragraph’s 8 line to 12 line from the bottom. After being comprehensively defeated on the meadows outside the city by the parliamentarian army, the 21-year-old king found himself the subject of a national manhunt ** Parliamentarians comprehensively defeated the Charles and he had to flee. Charles’s defeat means parliamentarians’ victory."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            for the Parliamentarians and Charles had to flee for his life. A

            <span className='numberOfQuestion'>30</span>
            <input type="text" name="ques30" id="ques30" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques30 != "B" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques30 != "" && UserData.ques30 == "B" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && UserData.ques30 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 30,
                        Ans1: "",
                        mainAns: "B (large reward)",
                        hiddenWord: "large reward",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " First paragraph’s 7 to 9 line from bottom. with a huge sum offered for his capture. ** Huge sum = Large reward"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            was offered for Charles’s capture, but after six weeks spent in hiding, he eventually managed to reach the

            <span className='numberOfQuestion'>31</span>
            <input type="text" name="ques31" id="ques31" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques31 != "D" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques31 != "" && UserData.ques31 == "D" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-5" && UserData.ques31 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 31,
                        Ans1: "",
                        mainAns: "D (relative safety.)",
                        hiddenWord: "relative safety",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "First paragraph’s 3 to 7 line from bottom. Over the following six weeks he managed, through a series of heart-poundingly close escapes, to evade the Parliamentarians before seeking refuge in France. ** Refuge = a condition of being safe or sheltered from pursuit, danger, or trouble."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            of continental Europe.</label>

        </div>
        <div className='p-3 rounded w-auto border-2 border-gray-300 flex flex-wrap gap-4'>
          <p><span className='font-bold mr-2'>A</span> military innovation</p> <br />
          <p><span className='font-bold mr-2'>B</span>large reward</p> <br />
          <p><span className='font-bold mr-2'>C</span> widespread conspiracy </p> <br />
          <p><span className='font-bold mr-2'>D</span> relative safety</p><br />
          <p><span className='font-bold mr-2'>E</span>  new government </p> <br />
          <p><span className='font-bold mr-2'>F</span>decisive victory</p> <br />
          <p><span className='font-bold mr-2'>G</span>political debate </p>  <br />
          <p><span className='font-bold mr-2'>H</span>strategic alliance</p> <br />
          <p><span className='font-bold mr-2'>I</span>popular solution </p> <br />
          <p><span className='font-bold mr-2'>J</span>religious conviction</p> <br />
        </div>

      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 32-35</h6> <br />
        <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 3? <br /><br />
          In boxes <span className='font-bold'>32-35</span> on your answer sheet, write</label><br />
        <label className=''>YES : ---   if the statement agrees with the views of the writer <br /> <br />
          NO:--if the statement contradicts the views of the writer <br /> <br />
          NOT GIVEN:-- if it is impossible to say what the writer thinks about this</label>

      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"> <span className='numberOfQuestion'>32</span>Charles chose Pepys for the task because he considered him to be trustworthy.
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques32 != "NOT GIVEN" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques32 != "" && UserData.ques32 == "NOT GIVEN" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques32 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "second paragraph’s first to sixth line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "second paragraph’s first to sixth line. Years later, after his restoration as king, the 50-year-old Charles II requested a meeting with the writer and diarist Samuel Pepys. His intention when asking Pepys to commit his story to paper was ensure that this most extraordinary episode was never forgotten. ** These lines do not explain whether Pepys was trustworthy or not, and he just want to ensure him to write important episode of his life."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33">  <span className='numberOfQuestion'>33</span> Charles’s personal recollection of the escape lacked sufficient detail.
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques33 != "NO" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques33 != "" && UserData.ques33 == "NO" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques33 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "Second paragraph’s 7 to 9 line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– Second paragraph’s 7 to 9 line. Over two three-hour sittings, the king related to him in great detail his personal recollections of the six weeks he had spent as fugitive. ** The king told him his personal recollections in a great detail."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34"><span className='numberOfQuestion'>34</span>Charles indicated to Pepys that he had planned his escape before the battle.
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques34 != "NO" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques34 != "" && UserData.ques34 == "NO" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques34 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "second paragraph’s last four line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "second paragraph’s last four line. After the battle was so absolutely lost as to be beyond hope of recovery, I began to think of the best way of saving myself. **  Charles decided to escape when he realized that winning the war was not possible for him."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"> <span className='numberOfQuestion'>35</span> The inclusion of Charles’s account is a positive aspect of the book.
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques35 != "YES" && "text-red-600"} ${ReadingShowAnswer == "cambridge-test-5" && UserData.ques35 != "" && UserData.ques35 == "YES" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques35 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "third paragraph’s first line to fourth line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "third paragraph’s first line to fourth line. One of the joys of Spencer’s book, a result not least of its use of Charles II’s own narrative as well as those of his supporters, is just how close the reader gets to the action. **  The book makes readers feel that they are spectators of the actions (events). In simple language, they feel that they are seeing those events happening in reality, which is joyous."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 36-40</h6> <br />
        <label className=''>Choose the correct letter, <span className='font-bold'> A, B, C, or D</span>.</label>
        <label className='mb-1'>Choose the correct letter in boxes 36-40 on your answer sheet.</label>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques36"><span className='numberOfQuestion mr-1 mb-2'>36</span>What is the reviewer’s main purpose in the first paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques36 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "",
                      mainAns: "B (to give an account of the circumstances leading to Charles II’s escape)",
                      hiddenWord: "first paragraph’s twelfth line to twenty-first line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "first paragraph’s twelfth line to twenty-first line. His arrival in Edinburgh prompted the English Parliamentary army to invade Scotland in a pre-emptive strike. This was followed by a Scottish invasion of England. The two sides finally faced one another at Worcester in the west of England in 1651. After being comprehensively defeated on the meadows outside the city by the parliamentarian army the 21-year-old king found himself the subject of a national manhunt. ** From his return to Scotland, he was attacked by the British, and then Charles II had to escape because he was defeated in the war. So, the paragraph tells all about the reasons why he had to run after the war."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques36' />
              to describe what happened during the Battle of Worcester
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques36' />
              to give an account of the circumstances leading to Charles II’s escape
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques36' />
              to provide details of the Parliamentarians’ political views
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques36' />
              to compare Charles II’s beliefs with those of his father
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques37"><span className='numberOfQuestion mr-1 mb-2'>37</span>Why does the reviewer include examples of the fugitives’ behaviour in the third paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques37 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "",
                      mainAns: "C (to illustrate how the events of six weeks are brought to life)",
                      hiddenWord: "to illustrate how the events of six weeks are brought to life)",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Third paragraph’s last seven line. Spencer draws out both the humour – such as the preposterous refusal of Charles’s friend Henry Wilmot to adopt disguise on the grounds that it was beneath his dignity – and the emotional tension when the secret of the king’s presence was cautiously revealed to his supporters. ** The reviewer wants to illustrate how to make the story more realistic (brought to life) the book includes the behaviour of the king and his companions."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques37' />
              to explain how close Charles II came to losing his life
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques37' />
              to suggest that Charles II’s supporters were badly prepared
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques37' />
              to illustrate how the events of the six weeks are brought to life
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques37' />
              to argue that certain aspects are not as well known as they should be
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques38"><span className='numberOfQuestion mr-1 mb-2'>38</span>What point does the reviewer make about Charles II in the fourth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques38 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "A (He chose to celebrate what was essentially a defeat)",
                      hiddenWord: "He chose to celebrate what was essentially a defeat",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Fourth paragraph’s eleventh line to last line. This makes it all the more interesting that Charles II himself loved the story ever after. As well as retelling it to anyone who would listen, causing eye-rolling among courtiers, he set in train a series of initiatives to memorialize it……. A series of enormous oil paintings depicting the episode were produced, including a two-metre-wide canvas of Boscobel Wood and a set of six similarly enormous paintings of the king on the run. In 1660, Charles II commissioned the artist John Michael Wright to paint a flying squadron of cherubs carrying an oak tree to the heavens on the ceilings of his bedchamber. It is hard to imagine many other kings marking the lowest point in their life so enthusiastically, or indeed pulling off such an escape in the first place. ** Charles II got the episodes of his run painted in numerous ways. He was escaping for his life during that time, which was his life’s low point. Instead of hiding it, he depicted it in several artistic ways."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques38' />
              He chose to celebrate what was essentially a defeat.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques38' />
              He misunderstood the motives of his opponents.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques38' />
              He aimed to restore people’s faith in the monarchy..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques38' />
              He was driven by a desire to be popular.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques39"><span className='numberOfQuestion mr-1 mb-2'>39</span>What does the reviewer say about Charles Spencer in the fifth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques39 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "B (He takes an unbiased approach to the subject matter)",
                      hiddenWord: "He takes an unbiased approach to the subject matter",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "fifth paragraph’s fifth line to tenth line. He has even-handed sympathy for both the fugitive king and the fierce republican regime that hunted him, he succeeds in his desire to explore far more of the background of the story than previous books on the subject have done. **  Even Handed – fair and impartial in treatment or judgment (Unbiased). Charles Spenser (the book writer) did not favour the king or his hunters (republican)."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques39' />
              His decision to write the book comes as a surprise.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques39' />
              He takes an unbiased approach to the subject matter.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques39' />
              His descriptions of events would be better if they included more detail.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques39' />
              He chooses language that is suitable for a twenty-first-century audience..
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques40"><span className='numberOfQuestion mr-1 mb-2'>40</span>When the reviewer says the book ‘doesn’t quite hit the mark’, she is making the point that
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-5" && UserData.ques40 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "D (It fails to address whether Charles II’s experiences had a lasting influence on him.)",
                      hiddenWord: "It fails to address whether Charles II’s experiences had a lasting influence on him.",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Sixth paragraph’s first line to tenth line. The tantalizing question left, in the end, is that of what it all meant. Would Charles II have been a different king had these six weeks never happened? The days and nights spent in hiding must have affected him in some way. Did the need to assume disguises, to survive on wit and charm alone, to use trickery and subterfuge to escape from tight corners form him? This is the one area where the book doesn’t quite hit the mark. **  The book did not answer questions like whether this incident brought some changes in his life and character or not. So, this area is not discussed in the book"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques40' />
              it overlooks the impact of events on ordinary people.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques40' />
              it lacks an analysis of prevalent views on monarchy.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques40' />
              it omits any references to the deceit practised by Charles II during his time in hiding..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques40' />
              it fails to address whether Charles II’s experiences had a lasting influence on him.
            </label>
            </div>
          </div>
        </div>
      </div>


    </section >
  )
}

export default Panel2_Q2




