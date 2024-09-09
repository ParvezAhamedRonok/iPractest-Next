"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test7Panel2Q_2({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer , explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
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


      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 27 - 35</h6> <br />
        <h6 className=''>Match each heading to the most suitable paragraph.</h6> <br />
        <div className='pl-3 pt-2 mb-2 font-bold'>
          i,	Charging more may not work <br /> <br />
          ii,	A shift in destinations and visitors<br /> <br />
          iii,	The role of the tourist<br /> <br />
          iv,	Opposing forces on developing nations<br /> <br />
          v,	The impact of declining natural resources<br /> <br />
          vi,	Only the real thing will do<br /> <br />
          vii,	The relationship between tourism and culture<br /> <br />
          viii,	Accusations against tourism<br /> <br />
          ix,	The destruction of tourism<br /> <br />
          x,	A positive approach<br /> <br />
        </div>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion mt-2'>27</span>
            Paragraph A
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques27 != "viii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques27 != "" && UserData.ques27 == "viii" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques27 != "viii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "viii - Accusations against tourism",
                      hiddenWord: "Accusations against tourism",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " This paragraph discusses various criticisms leveled against tourism, such as its impact on environments, cultures, and economies."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion mt-2'>28</span>
            Paragraph B
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques28 != "x" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques28 != "" && UserData.ques28 == "x" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques28 != "x"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                x
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "x - A positive approach",
                      hiddenWord: "A positive approach",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " This paragraph presents an optimistic view of tourism's future growth, acknowledging challenges but emphasizing potential benefits and opportunities."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion mt-2'>29</span>
            Paragraph C
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques29 != "ii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques29 != "" && UserData.ques29 == "ii" && "text-green-700"}
             
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques29 != "ii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "ii -A shift in destinations and visitors",
                      hiddenWord: "A shift in destinations and visitors",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph discusses the changing trends in international tourism, with predictions about shifts in popular destinations and increasing numbers of travelers from various regions."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"><span className='numberOfQuestion mt-2'>30</span>
            Paragraph D
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques30 != "v" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques30 != "" && UserData.ques30 == "v" && "text-green-700"}
             
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques30 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "v -A The impact of declining natural resources",
                      hiddenWord: "The impact of declining natural resources",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph raises concerns about the sustainability of low-cost international travel in the face of potential future scarcity of oil and other resources"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"><span className='numberOfQuestion mt-2'>31</span>
            Paragraph E
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques31 != "vi" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques31 != "" && UserData.ques31 == "vi" && "text-green-700"}
             
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques31 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "vi -Only the real thing will do",
                      hiddenWord: "Only the real thing will do",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph argues against the notion that technological developments like the Internet and virtual reality can fully replace the authentic experience of travel."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion mt-2'>32</span>
            Paragraph F
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques32 != "ix" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques32 != "" && UserData.ques32 == "ix" && "text-green-700"}
             
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques32 != "ix"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ix
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "ix -The destruction of tourism",
                      hiddenWord: "The destruction of tourism",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph discusses a pessimistic view that unchecked tourism could lead to its own demise by causing irreparable harm to destinations and their attractiveness."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33"><span className='numberOfQuestion mt-2'>33</span>
            Paragraph G
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques33 != "iv" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques33 != "" && UserData.ques33 == "iv" && "text-green-700"}
             
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques33 != "iv"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iv
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "iv -Opposing forces on developing nations",
                      hiddenWord: "Opposing forces on developing nations",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph addresses the vulnerabilities and economic incentives of less developed nations in rapidly developing their tourism industries."
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
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques34 != "i" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques34 != "" && UserData.ques34 == "i" && "text-green-700"}
             
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques34 != "i"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "i -Charging more may not work",
                      hiddenWord: "Charging more may not work",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This heading is likely matched to the same paragraph as the previous entry (Paragraph G), focusing on the economic challenges and strategies of less developed nations in attracting tourism investment."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"><span className='numberOfQuestion mt-2'>35</span>
            Paragraph I
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques35 != "vii" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques35 != "" && UserData.ques35 == "vii" && "text-green-700"}
             
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-7" && UserData.ques35 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "vii -The relationship between tourism and culture",
                      hiddenWord: "The relationship between tourism and culture",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph explores the complex relationship between international tourism and the preservation or transformation of cultural identities and practices."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>





      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 36-40</h6> <br />
        <h6 className=''>Write NO MORE THAN TWO WORDS from the text.</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span>
            While less developed nations have every incentive to grow their tourist industries they
            <input type="text" name="ques36" id="ques36" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques36.match(/lack capital/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques36 != "" && UserData.ques36 == "lack capital" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques36.match(/lack capital/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  lack capital
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "lack capital",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This statement reflects Paragraph G, which discusses how less developed nations often lack the financial resources necessary to develop their tourism sectors. They may offer concessions like tax breaks and relaxed environmental standards to attract foreign investment, which can limit the benefits they derive from tourism."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            to do so..</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span>
            One hope for less developed nations is that, as the industry grows, people will be looking for
            <input type="text" name="ques37" id="ques37" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques37.match(/new destinations/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques37 != "" && UserData.ques37 == "new destinations" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques37.match(/new destinations/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  new destinations
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "new destinations",
                        hiddenWord: "destinations",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G also suggests that as the tourism industry expands, there is a potential shift in bargaining power towards destinations. This means that new, less explored destinations could become attractive to tourists, giving these nations an opportunity to benefit economically."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span>
            One problem with providing a high quality experience is that it requires
            <input type="text" name="ques38" id="ques38" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques38.match(/High expenditure/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques38 != "" && UserData.ques38 == "High expenditure" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques38.match(/High expenditure/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  High expenditure
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "High expenditure",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph H discusses the idea that focusing on providing high-quality tourism experiences, while desirable for mitigating negative impacts, comes with higher costs. This includes investment in infrastructure, services, and environmental sustainability measures."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>
            A further problem with high quality is that it is only affordable to the
            <input type="text" name="ques39" id="ques39" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques39.match(/most privileged/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques39 != "" && UserData.ques39 == "most privileged" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques39.match(/most privileged/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  most privileged
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "most privileged",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This statement reflects Paragraph H as well. It raises concerns that emphasizing high-quality tourism experiences could make travel more expensive, potentially limiting access to those who can afford it, thereby excluding those with lower economic means from participating in international travel."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span>
            A positive view of growing tourism is that the changes it produces are
            <input type="text" name="ques40" id="ques37" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-7" && !UserData.ques40.match(/not undesirable/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-7" && UserData.ques40 != "" && UserData.ques40 == "not undesirable" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-7" && !UserData.ques40.match(/not undesirable/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  not undesirable
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "not undesirable",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This statement aligns with Paragraph I, which explores contrasting views on whether tourism-induced changes to cultures are necessarily negative. Optimists argue that cultural change is inevitable and not necessarily detrimental, and tourism can potentially help preserve cultures by fostering appreciation and understanding of diversity."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            .</label>
        </div>
      </div>

    </section>
  )
}

export default Test7Panel2Q_2




