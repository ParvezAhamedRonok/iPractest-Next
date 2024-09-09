"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";

// end of importing---------->>



function Test12Panel2Q_2({ handleChange, UserData }) {
  const { ReadingShowAnswer, setExplainRLQuestions, setExplainObjForRL } = useStateContext();
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
        <h6 className=''>Questions 14 -18</h6> <br />
        <h6 className=''>Choose True, False or Not Given.</h6> <br />
        <h6 className=''><br />
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>After gaining independence in 1813, Dutch artists were influenced by aspects of life such as hard work
            and the home.
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques14 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques14 != "" && UserData.ques14 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques14 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "After gaining independence in 1813",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "After gaining independence in 1813, Dutch artists were indeed influenced by aspects of life such as hard work and the home, reflecting these themes in their Romantic artworks. This is supported by paragraphs A, B, and D, which discuss Dutch Romanticism's focus on domesticity and diligence."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span>The settings for the romantic winter scenes were often pleasurable places to be in the summer time.
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques15 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques15 != "" && UserData.ques15 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques15 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "After gaining independence in 1813",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage indicates that the settings for romantic winter scenes in Dutch art, such as frozen waterways, were not necessarily pleasurable places in the summer. Paragraph C mentions that these same canals could be unpleasant in summer, with issues like mosquitoes and the proximity to the sea."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>In many Dutch city scenes the characters appear depressed.
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques16 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques16 != "" && UserData.ques16 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques16 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In many Dutch city scenes described in the passage, the characters do not appear depressed. Paragraph D portrays them engaged in everyday activities like calling their dogs, tying shoelaces, and caring for children, without expressing extreme emotions."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>In 'Le vieux manoir' the woman seems to have an arduous journey ahead
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques17 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques17 != "" && UserData.ques17 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques1 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In paragraph F, the description of Koekkoek's painting Le vieux manoir includes a woman and child trudging along a snowy road, suggesting an arduous journey ahead. This aligns with the statement that the woman in the painting seems to have an arduous journey ahead."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>If the owner of 'Le vieux manoir' were to sell the painting in a buoyant market, they would probably make a lot of money.
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques18 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques18 != "" && UserData.ques18 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques18 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F discusses the market value of Koekkoek's paintings, noting that his works have fetched high prices at auctions. It suggests that in a buoyant market, such as the one described, the owner of Le vieux manoir could potentially make a lot of money if they were to sell the painting."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>



      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 19 - 21</h6> <br />
        <h6 className=''>Which team will be responsible for each of the following tasks? Choose from A - D, and write the correct letter next to questions 19-21.</h6> <br />
        <h6 className='mt-2 mb-2'>
          A, Koekkeok<br /><br />
          B, King Friedrich-Wilheim IV<br /><br />
          C, Hubertus Van Hove<br /><br />
          D, Nicolaas Johannes Roosenboom<br />
        </h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"> <span className='numberOfQuestion'>19</span>started to make Dutch Romantic landscape painting important.
            <select name="ques19" id="ques19" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques19 != "A" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques19 != "" && UserData.ques19 == "A" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques19 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Koekkoek started to make Dutch Romantic landscape painting important. This is supported by paragraph E, which introduces Barend Cornelis Koekkoek as the father of Dutch Romantic landscape painting."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"> <span className='numberOfQuestion'>20</span> concentrated mainly on painting Dutch winter landscape scenes
            <select name="ques20" id="ques20" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques20 != "D" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques20 != "" && UserData.ques20 == "D" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques20 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Nicolaas Johannes Roosenboom concentrated mainly on painting Dutch winter landscape scenes. This is indicated in paragraph B, which mentions various artists turning their attention to icy landscapes like those painted by Roosenboom."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21"> <span className='numberOfQuestion'>21</span>commissioned Koekkoek to paint for him
            <select name="ques21" id="ques21" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques21 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques21 != "" && UserData.ques21 == "B" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques21 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "King Friedrich-Wilhelm IV commissioned Koekkoek to paint for him. Paragraph E mentions that Koekkoek counted among his clients King Friedrich-Wilhelm IV of Prussia, among others."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 22 - 26</h6> <br />
        <h6 className=''>Write NO MORE THAN ONE WORD for each answer.
        </h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="queS22">
            19th century Dutch landscape art is typified by winter scenes of characters skating on iced over <span className='numberOfQuestion'>22</span>
            <input type="text" name="ques22" id="ques22" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques22.match(/waterways/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques22 != "" && UserData.ques22 == "waterways" && "text-green-700"}
            
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques22.match(/waterways/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  waterways
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "waterways",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Dutch 19th-century landscape art is typified by winter scenes of characters skating on iced-over waterways, as described in paragraph C."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            and others going about their daily life. Both rural and urban scenes are similar in the way they seldom show their characters displaying severe  <span className='numberOfQuestion'>23</span>
            <input type="text" name="ques23" id="ques23" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques23.match(/emotions/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques23 != "" && UserData.ques23 == "emotions" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques23.match(/emotions/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  emotions
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 23,
                        Ans1: "",
                        mainAns: "emotions",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Both rural and urban scenes in Dutch art seldom show characters displaying severe emotions, as noted in paragraph D, where human figures in cityscapes are described as engaged in everyday activities without extreme expressions."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            Koekkoek, whose work has been highly influential, had a supreme talent of showing the gap between
            <span className='numberOfQuestion'>24</span>
            <input type="text" name="ques24" id="ques24" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques24.match(/humble/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques24 != "" && UserData.ques24 == "humble" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques24.match(/humble/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  humble
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "humble",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Koekkoek, whose work has been highly influential, had a supreme talent for showing the gap between humble individuals and the immensity of life. This aligns with the discussion of Koekkoek's painting style and themes in paragraphs E and F."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            individuals and the immensity of life. 'Le vieuxmanour' was Koekkoeks'
            <span className='numberOfQuestion'>25</span>
            <input type="text" name="ques25" id="ques25" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques25.match(/first/gi) && "text-red-600"}
                  ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques25 != "" && UserData.ques25 == "first" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques25.match(/first/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  first
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "first",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Le vieux manoir' was Koekkoek's first landscape painted in Cleves and marks the commencement of his most important period. This statement directly refers to paragraph F, which introduces Koekkoek's painting and its significance."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            landscape painted in Cleves and marks the commencement of his most important period. Paintings from around this period have recently sold for huge sums of money often exceeding collectors
            <span className='numberOfQuestion'>26</span>
            <input type="text" name="ques26" id="ques26" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-12" && !UserData.ques26.match(/expectations/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques26 != "" && UserData.ques26 == "expectations" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-12" && !UserData.ques26.match(/expectations/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  expectations
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "expectations",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paintings from around Koekkoek's most important period have recently sold for huge sums of money, often exceeding collectors' expectations. This information is provided in paragraph G, which discusses the market value and auction prices of Koekkoek's paintings."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
      </div>




      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 27 - 36</h6> <br />
        <h6 className=''>Match each heading to the most suitable paragraph A - J.</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"> <span className='numberOfQuestion'>27</span> 	Broad acceptance is the basis of success
            <select name="ques27" id="ques27" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques27 != "F" && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques27 != "" && UserData.ques27 == "F" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques27 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Broad acceptance is the basis of success, as discussed in paragraph F, which mentions that repeated display in different contexts helps test the work and build an audience for it."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"> <span className='numberOfQuestion'>28</span> Artists path to success
            <select name="ques28" id="ques28" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques28 != "B" && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques28 != "" && UserData.ques28 == "B" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques28 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The artist's path to success is complex and involves overcoming various hurdles, as described in paragraph B, where it contrasts the straightforward career path of accountancy with the complexities faced by artists."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"> <span className='numberOfQuestion'>29</span> The prize for quality
            <select name="ques29" id="ques29" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques29 != "H" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques29 != "" && UserData.ques29 == "H" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques29 != "H"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                H
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "H",
                      hiddenWord: "paragraph H",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The prize for quality correlates strongly with price in auctions, as mentioned in paragraph H, where it discusses the correlation between the quality of artwork and the prices it commands at auction."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"> <span className='numberOfQuestion'>30</span> Good or bad critiques
            <select name="ques30" id="ques30" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques30 != "G" && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques30 != "" && UserData.ques30 == "G" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques30 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "G",
                      hiddenWord: "paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Good or bad critiques can both be useful in shaping an artist's reputation and marketability, as discussed in paragraph G, which explores how media exposure and reviews can influence perceptions of an artist's work."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"> <span className='numberOfQuestion'>31</span> The complexity of validation
            <select name="ques31" id="ques31" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques31 != "J" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques31 != "" && UserData.ques31 == "J" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques31 != "J"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                J
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "J",
                      hiddenWord: "paragraph J",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The complexity of validation in the art world is discussed in paragraph J, where it emphasizes that validation involves various constituencies in the art world and their belief in the lasting truths evoked by the artists' work."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"> <span className='numberOfQuestion'>32</span>The need for validation
            <select name="ques32" id="ques32" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques32 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques32 != "" && UserData.ques32 == "A" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques32 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The need for validation beyond the art market is discussed in paragraph A, which explores how artworks by living artists accrue value through a complex process of validation in the broader art world."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33"> <span className='numberOfQuestion'>33</span> 	What gives a gallery status
            <select name="ques33" id="ques33" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques33 != "D" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques33 != "" && UserData.ques33 == "D" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques33 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "What gives a gallery status is discussed in paragraph D, which mentions that a gallery's credibility rests on its stable of artists, location, scale, aesthetics, and strong curatorial connections."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34"> <span className='numberOfQuestion'>34</span> The importance of the artist's personality
            <select name="ques34" id="ques34" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques34 != "C" && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques34 != "" && UserData.ques34 == "C" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques34 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The importance of the artist's personality in their marketability is discussed in paragraph C, where it mentions that credibility and risk assessment based on character are important factors for dealers when considering new artists."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"> <span className='numberOfQuestion'>35</span> 	The role of art fairs
            <select name="ques35" id="ques35" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques35 != "E" && "text-red-600"}
                   ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques35 != "" && UserData.ques35 == "E" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques35 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The role of art fairs in establishing credibility and quality control is discussed in paragraph E, which talks about how prestigious art fairs like those in Basel, London, Miami, and Paris impose rigorous selection criteria to ensure quality."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques36"> <span className='numberOfQuestion'>36</span> 	Under the hammer
            <select name="ques36" id="ques36" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques36 != "I" && "text-red-600"}
                    ${ReadingShowAnswer == "Actual-Test-12" && UserData.ques36 != "" && UserData.ques36 == "I" && "text-green-700"}
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques36 != "I"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                I
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "",
                      mainAns: "I",
                      hiddenWord: "paragraph I",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Under the hammer refers to the auction process, as discussed in paragraph I, which explores how auction houses play a significant role in determining the market value and validation of artworks through auction sales."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>




      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 37 - 40</h6> <br />
        <h6 className=''>Choose A, B or C.</h6> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='mb-3'>
          <label htmlFor="ques37"><span className='numberOfQuestion mr-1 mb-2'>37</span> The factor which contributes most to the status of a gallery is
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques37 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The factor which contributes most to the status of a gallery is the quality of artistic talent the gallery represents. This is explicitly discussed in paragraph D of the passage, where it states that a gallery's credibility rests on its stable of artists. The paragraph explains that while factors like the gallery's location, exhibition space aesthetics, and client relationships are important, what matters most is the cluster of artistic reputations associated with the gallery. Dealers often base their decisions on the recommendations of artists already on their roster, which not only shapes the gallery's program but also enhances its credibility and status in the art world. Thus, paragraph D emphasizes that the quality of artistic talent represented is crucial for a gallery's stature."
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
              what artists say about the gallery.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques37' />
              the quality of artistic talent the gallery has.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques37' />
              the gallery's exhibition space.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques38"><span className='numberOfQuestion mr-1 mb-2'>38</span> The prominent art fairs
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques38 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "paragraph D",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The prominent art fairs receive too many applications, as discussed in paragraph E of the passage. It mentions that the four leading art fairs in Basel, London, Miami, and Paris are oversubscribed and have rigorous selection processes. These fairs rely on selection committees to impose quality control and ensure fairness, striving to avoid any hint of cronyism in their selection process. This rigorous approach underscores their reputation and integrity in the art market, making it challenging for many galleries and artists to secure participation in these prestigious events. Thus, paragraph E highlights the competitive nature and high demand faced by the prominent art fairs due to the large number of applications they receive."
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
              favour the art galleries they have known for a long time.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques38' />
              receive too many applications.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques38' />
              always consider the integrity of the art gallery.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques39"><span className='numberOfQuestion mr-1 mb-2'>39</span>	Often successful art work
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques39 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The statement Often successful artwork receives good media reviews about its creation aligns with the discussion in paragraph G of the passage. Paragraph G explores the importance of media exposure in the art world, highlighting that artists who accumulate a body of interpretation and narratives about their work tend to attract attention and enhance their marketability. It notes that artists' personalities and their ability to evoke reactions, whether positive or controversial, through their work and media coverage can significantly impact their success. Therefore, paragraph G underscores the role of media reviews and exposure in shaping the perception and success of artworks in the contemporary art market."
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
              receives good media reviews about its creation.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques39' />
              needs to be written about by famous artists.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques39' />
              gets good and bad reviews.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques40"><span className='numberOfQuestion mr-1 mb-2'>40</span> Anselm Reyle's work fell in value mainly due to
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-12" && UserData.ques40 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "paragraph I",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The reason for Anselm Reyle's work falling in value is attributed to his limited museum exposure, as discussed in paragraph I of the passage. Paragraph I mentions that despite Anselm Reyle's initial success at auction, his limited museum exhibitions led to a perception that his prices had become inflated. This lack of institutional validation through sufficient museum exhibitions contributed to a decline in market confidence in his work. Therefore, paragraph I emphasizes that museum exposure plays a critical role in maintaining the long-term value and perception of an artist's work within the art market."
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
              the artist having psychological problems
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques40' />
              his work not being displayed in a sufficient number of museums.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques40' />
              decorative abstractions becoming unpopular in the market.
            </label>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Test12Panel2Q_2










