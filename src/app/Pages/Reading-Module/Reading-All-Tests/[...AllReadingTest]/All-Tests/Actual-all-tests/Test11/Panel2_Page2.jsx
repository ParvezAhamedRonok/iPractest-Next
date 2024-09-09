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

      <div className='Titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 27 - 32</h6>
        <h6 className='mb-1'>Match each name to the se</h6>
        <h6>A John Hervey</h6>
        <h6>B Adam Smith </h6>
        <h6>C John Locke</h6>
        <h6>B Adam Smith </h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>was perhaps the first person to notice why Ho Bryan tasted so good
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques27 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques27 != "" && UserData.ques27 == "C" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques27 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "C (John Locke)",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "John Locke was perhaps the first person to notice why Ho Bryan tasted so good. This is mentioned in Paragraph C"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>imported wine illegally
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques28 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques28 != "" && UserData.ques28 == "E" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques28 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "E (John Locke)",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Sir Robert Walpole imported wine illegally. This is mentioned in Paragraph E"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span>wanted to discourage people from
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques29 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques29 != "" && UserData.ques29 == "D" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques29 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "D (John Hervey)",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "John Hervey wanted to discourage people from drinking more claret than port. This is inferred from the context of his spending habits described in Paragraph D."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"> <span className='numberOfQuestion'>30</span>drank more claret than port
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques30 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques30 != "" && UserData.ques30 == "A" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques30 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "A (John Hervey)",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "John Hervey drank more claret than port. This is explicitly stated in Paragraph A."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"> <span className='numberOfQuestion'>31</span>was a specialist in wine and economics.
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques31 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques31 != "" && UserData.ques31 == "B" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques31 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "B (Adam Smith)",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Adam Smith was a specialist in wine and economics. This is mentioned in Paragraph B."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion'>32</span>bought more claret than any other kind of wine
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`${ReadingShowAnswer == "Actual-Test-11" && UserData.ques32 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques32 != "" && UserData.ques32 == "E" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques32 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "E (John Hervey)",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "John Hervey bought more claret than any other kind of wine. This is explicitly stated in Paragraph A."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>




      <div className='Titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 33 - 39</h6>
        <h6 className=''>Complete the summary below.</h6>
        <h6 className='mb-4'>Choose NO MORE THAN TWO WORDS from the passage for each answer</h6>
        <div className="articles2">
        </div>

      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-2 flex-wrap mb-2'>

          <label htmlFor="ques33">Sales of claret fell considerably in the late 19th century due in part to two factors. One of these was when
            <span className='numberOfQuestion'>33</span>
            <input type="text" name="ques33" id="ques33" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques33.match(/mildew/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques33 != "" && UserData.ques33 == "mildew" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques33.match(/mildew/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  mildew
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 33,
                        Ans1: "",
                        mainAns: "mildew",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Sales of claret fell considerably in the late 19th century due in part to mildew, which affected the quality and reputation of wines like Lafite. This is discussed in Paragraph I."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            destroyed the good name of Lafite and the other was when Bordeaux's vineyards were hit by a
            <span className='numberOfQuestion'>34</span>
            <input type="text" name="ques34" id="ques34" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques34.match(/bug/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques34 != "" && UserData.ques34 == "bug" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques34.match(/bug/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  bug
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "bug",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Another factor contributing to the decline in claret sales was the phylloxera bug, which devastated Bordeaux's vineyards during the late 19th century, further impacting wine production and availability. This is also mentioned in Paragraph I."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            . It took many years for the wine to recover. In 1960, this recovery was helped by the production of an excellent claret in 1959 and the
            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques35.match(/arrival/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques35 != "" && UserData.ques35 == "arrival" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques35.match(/arrival/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  arrival
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "arrival",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The recovery of claret sales in 1960 was supported by the production of an excellent claret in 1959 and the arrival of significant buyers from America, which stimulated demand and renewed interest in fine wines. This information is found in Paragraph J."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            of buyers from America. Today, London is the center of the
            <span className='numberOfQuestion'>36</span>
            <input type="text" name="ques36" id="ques36" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques36.match(/fine-wine/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques36 != "" && UserData.ques36 == "fine-wine" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques36.match(/fine-wine/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  fine-wine
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "fine-wine",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " London is considered the center of the fine-wine trade, hosting major organizations, magazines, and auctions that validate and trade in high-quality wines. This is stated in Paragraph J."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            trade. People trying to enter the
            <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques37.match(/market/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques37 != "" && UserData.ques37 == "market" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques37.match(/market/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  market
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "market",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Producers seeking to enter the global market with new wines often seek validation and recognition in London, indicating its pivotal role in the global wine trade. This is mentioned in Paragraph J."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            with new wines need to get
            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques38.match(/validation/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques38 != "" && UserData.ques38 == "validation" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques38.match(/validation/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  validation
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "validation",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " London serves as a hub where new wines from various vineyards around the world are evaluated and validated, establishing their credibility and marketability. This is discussed in Paragraph J."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            for them in London. The growing markets for the fine wines however now seems to be coming from outside the UK. This year, the majority of Sotheby's wine sales
            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-11" && !UserData.ques39.match(/globally/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-11" && UserData.ques39 != "" && UserData.ques39 == "globally" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-11" && !UserData.ques39.match(/globally/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  globally
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "globally",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Sotheby's wine sales show that a significant majority (57%) of fine wine sales are now directed towards Asian markets, with a predominant share going to buyers from China and Hong Kong, indicating a shift away from traditional markets like the UK. This is mentioned in Paragraph J."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            werer to Asia</label>
        </div>

      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <h6>Questions 40</h6><br />
        <h6 className='mb-5'>Choose the correct letter, A, B or C.</h6>
        <div className='mb-3'>
          <label htmlFor="ques40"><span className='numberOfQuestion mr-1 mb-2'>40</span>
            The main purpose of the article is to
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-11" && UserData.ques40 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "paragraphs A to J",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " The main purpose of the article is to give a brief history of claret. This is primarily covered throughout the entire passage, with specific focus on the development of claret from its early popularity in England, its production methods, shifts in consumption trends, and its market dynamics over different historical periods, as detailed across paragraphs A to J"
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
              <input className='' type="radio" value="A" name='ques40' />
              <input className='' type="radio" value="B" name='ques40' />
              <input className='' type="radio" value="C" name='ques40' />
            </div>

            <div className="flex flex-col gap-3 sm:gap-6 text-[12px] sm:text-[15px]">
              <i className='' >Present the main reasons why claret has always been popular. </i>
              <i className=''> Give a brief history of claret..</i>
              <i className='mt-2 sm:mt-0'>Describe some of the problems claret has faced.</i>
            </div>
          </div>
        </div>

      </div>







    </section>
  )
}

export default Test9Panel2_Page2




