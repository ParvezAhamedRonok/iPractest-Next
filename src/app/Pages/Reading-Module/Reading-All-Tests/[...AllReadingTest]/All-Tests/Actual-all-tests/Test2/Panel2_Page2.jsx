"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>





function Test2Panel2_Page2({ handleChange, UserData }) {
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

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 14 - 19</h6> <br />
        <h6>Write YES, NO or NOT GIVEN. </h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span> Emma Cohen's research proves that training in synchronised groups leads to higher levels of fitness.
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques14 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques14 != "" && UserData.ques14 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques14 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In paragraph B , This information is not explicitly stated in the article. so, the ans is not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques15"> <span className='numberOfQuestion'>15</span>Biologists believe that the release of endorphins is part of a reward for useful behaviour.
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques15 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques15 != "" && UserData.ques15 == "YES" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques15 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C mentions biologists' beliefs about the release of endorphins as part of an evolved mechanism."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques16"> <span className='numberOfQuestion'>16</span> Robin Ejsmond-Frey did not believe Dr Cohen's research would be valuable.
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques16 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques16 != "" && UserData.ques16 == "NO" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques16 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E mentions Robin Ejsmond-Frey as a co-author who supported Dr. Cohen's research"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques17"> <span className='numberOfQuestion'>17</span>Dr Cohen 's researchers used a cuff to measure the athletes' endorphin levels.
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques17 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques17 != "" && UserData.ques17 == "YES" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques17 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph F describes the method used by Dr. Cohen's researchers to measure endorphin levels."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques18">  <span className='numberOfQuestion'>18</span>The rowers' power output changed depending on the time of day.
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques18 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques18 != "" && UserData.ques18 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques18 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In paragraph G , This information is not explicitly stated in the article. so, the ans is not given."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques19">  <span className='numberOfQuestion'>19</span>The best way to jog is probably in a group.
            <select name="ques19" id="ques19" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques19 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques19 != "" && UserData.ques19 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques19 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph H",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In paragraph H , This information is not explicitly stated in the article. so, the ans is not given."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-3 mt-3'>
        <h6 className=''>Questions 20 - 24</h6> <br />
        <h6 className=''>Match each name to the sentences below.</h6>
        <h6 className=''>Choose the correct heading for each paragraph from the list of headings below.</h6><br />
        <div className="articles2  pl-4 font-bold">
          <span className='font-bold mr-2'>A</span> Dr Emma Cohen <br /> <br />
          <span className='font-bold mr-2'>B</span> Sylvester Stallone <br /> <br />
          <span className='font-bold mr-2'>C</span> Hicham El Guerrouj <br /> <br />
          <span className='font-bold mr-2'>D</span> Robin Ejsmond-Frey <br /> <br />
        </div>

      </div>

      <div className='mt-3 mb-2 ml-[12px]'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span> Used to train in large groups
            <select name="ques20" id="ques20" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques20 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques20 != "" && UserData.ques20 == "C" && "text-green-700"}
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques20 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "C (Hicham El Guerrouj)",
                      hiddenWord: "Hicham El Guerrouj",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B mentions Hicham El Guerrouj, the Moroccan middle-distance runner, who trained with throngs of followers everywhere in Morocco."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21">  <span className='numberOfQuestion'>21</span>Represents a good example
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques21 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques21 != "" && UserData.ques21 == "C" && "text-green-700"}
              
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques21 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "C (Hicham El Guerrouj)",
                      hiddenWord: "Hicham El Guerrouj",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Again, paragraph B discusses Hicham El Guerrouj as a better model compared to Rocky Balboa for training in synchronized groups and achieving high athletic success."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span> Is the author of a report soon to be published
            <select name="ques22" id="ques22" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques22 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques22 != "" && UserData.ques22 == "A" && "text-green-700"}
              
              `}>
              <option value="" ></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques22 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "A (Dr Emma Cohen)",
                      hiddenWord: "Dr Emma Cohen",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B identifies Dr. Emma Cohen as the anthropologist from Oxford University conducting the research mentioned in the article, set to be published in Biology Letters."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span> Is usually seen training alone
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques23 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques23 != "" && UserData.ques23 == "B" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques23 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "B (Sylvester Stallone)",
                      hiddenWord: "Sylvester Stallone",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A contrasts the solitary image of Sylvester Stallone's character Rocky Balboa, known for training alone in preparation for fights."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques24">          <span className='numberOfQuestion'>24</span>Does research work with Emma Cohen
            <select name="ques24" id="ques24" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques24 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques24 != "" && UserData.ques24 == "D" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques24 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "D (Robin Ejsmond-Frey)",
                      hiddenWord: "Sylvester Stallone",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E introduces Robin Ejsmond-Frey as a co-author who collaborated with Dr. Emma Cohen on the research involving synchronized group training and its effects on pain tolerance."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-4'>
        <h6 className=''>Questions 25 - 27</h6> <br />
        <h6 className=''>Write NO MORE THAN ONE WORD for each answer.</h6><br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques25"><span className='numberOfQuestion'>25</span>In order to find out the endorphin levels of the 12 rowers,  researchers first
            <input type="text" name="ques25" id="ques25" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques25.match(/deduced/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques25 != "" && UserData.ques25 == "deduced" && "text-green-700"}
              
              `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques25.match(/deduced/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    deduced
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 25,
                          Ans1: "",
                          mainAns: "deduced",
                          hiddenWord: "deduced",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: " This statement aligns with paragraph F, where it describes how the researchers used a cuff to measure the pain tolerance of the rowers as a proxy for endorphin levels. They stopped squeezing the cuff when the rowers indicated discomfort, which allowed them to infer the pain tolerance levels."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            the level of pain the rowers could withstand</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques25"><span className='numberOfQuestion'>26</span>The power performance of the ro
            <input type="text" name="ques26" id="ques26" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques26.match(/identical/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques26 != "" && UserData.ques26 == "identical" && "text-green-700"}
             `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques26.match(/identical/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    identical
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 26,
                          Ans1: "",
                          mainAns: "identical",
                          hiddenWord: "identical",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This statement is supported by paragraph G, where it mentions that the rowers' power outputs were nearly identical in all four tests conducted. This similarity in power outputs was noted despite efforts to control for variables such as time of day."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            in every test carried out.
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques25"> <span className='numberOfQuestion'>27</span>It cannot be said with certainty that rowers show a higher
            <input type="text" name="ques27" id="ques27" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques27.match(/tolerance/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques27 != "" && UserData.ques27 == "tolerance" && "text-green-700"}
             `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques27.match(/tolerance/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    tolerance
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 27,
                          Ans1: "",
                          mainAns: "tolerance",
                          hiddenWord: "tolerance",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This statement reflects the uncertainty discussed in paragraph H. While the study showed that pain thresholds were higher following group sessions, it's not definitively attributed solely to synchronous rowing. The presence of teammates and social factors could also contribute to increased pain tolerance, indicating that the exact cause of the observed effect is unclear."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            to pain as a result of rowing synchronously.</label>
        </div>
      </div> <br /> <br />


      {/* passage-3 questions--- */}
      <div className='articles pl-[10px] sm:pl-[25px] mb-5 '>
        <h6>Passage-3 Questions</h6>
        <h6 className=''>Questions 28 and 29</h6> <br />
        <h6>Write TRUE, FALSE or NOT GIVEN.</h6>
      </div>


      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques28"> <span className='numberOfQuestion'>28</span>The topic of the text is broken bones.
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques28 != "FALSE" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques28 != "" && UserData.ques28 == "FALSE" && "text-green-700"}
               `}
            >
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques28 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "FALSE",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This is based on the entire text, where the main focus is on the development of a glue inspired by the sandcastle worm for bone repair, rather than solely discussing broken bones in general."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques15"><span className='numberOfQuestion'>29</span>Repairing smaller breakages with metal parts is harder.
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques29 != "TRUE" && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques29 != "" && UserData.ques29 == "TRUE" && "text-green-700"}
             `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques29 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "TRUE",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This is supported by paragraph A, which discusses how complex fractures involving smaller bone fragments are more challenging to repair using metal screws and pins."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 30 - 34</h6> <br />
        <h6 className=''>Which paragraph contains the foLlowing statements.</h6> <br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"> <span className='numberOfQuestion'>30</span> the man-made version of the sandcastle-worm glue is body-friendly.
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques30 != "G" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques30 != "" && UserData.ques30 == "G" && "text-green-700"}
               `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques30 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "G",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph G discusses the characteristics of the man-made version of the sandcastle-worm glue, highlighting that it is non-toxic and potentially biodegradable, which makes it body-friendly"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31">          <span className='numberOfQuestion'>31</span> examples of how broken bones can be mended.
            <select name="ques31" id="ques31" onChange={handleChange} className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques31 != "A" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques31 != "" && UserData.ques31 == "A" && "text-green-700"}
               
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques31 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph A provides examples of how bones can be mended, including setting fractures in a cast and using metal screws and pins for larger fragments."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques32"><span className='numberOfQuestion'>32</span>how the sandcastle worm produces its shell
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques32 != "B" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques32 != "" && UserData.ques32 == "B" && "text-green-700"}
               
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques32 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Paragraph B",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B explains how the sandcastle worm produces its mineral shell using a glue secreted to stick sand grains together."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33"> <span className='numberOfQuestion'>33</span> an explanation of how the sandcastle-worm glue adheres molecules together
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques33 != "C" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques33 != "" && UserData.ques33 == "C" && "text-green-700"}
               
            `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques33 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "Paragraph C",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C details the composition of the sandcastle-worm glue, describing how it contains proteins, ions, and functions by binding protein molecules tightly together to expel water molecules."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34">          <span className='numberOfQuestion'>34</span>how a man-made version of the sandcastle-worm glue was produced
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques34 != "E" && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques34 != "" && UserData.ques34 == "E" && "text-green-700"}
               
             `}>
              <option value=""></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-2" && UserData.ques34 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph E describes how Dr. Stewart and his team replicated the sandcastle-worm glue using synthetic polymers with similar chemical properties, aiming to create a man-made version suitable for medical applications."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-1'>
        <h6 className=''>Questions 35 - 40</h6> <br />
        <h6 className=''>Complete the summary with ONE WORD from the text..</h6><br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques35">In order for the sandcastle worm to form its
            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques35.match(/casing/gi) && "text-red-600"}
           ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques35 != "" && UserData.ques35 == "casing" && "text-green-700"}
              
           `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques35.match(/casing/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    casing
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 35,
                          Ans1: "",
                          mainAns: "casing",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph B discusses how the sandcastle worm forms its mineral casing by secreting a glue to stick sand grains together."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            it produces a glue which it uses to stick together bits of sand. Because this glue is able to stick to surfaces even when they are in

            <span className='numberOfQuestion'>36</span>
            <input type="text" name="ques36" id="ques36" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques36.match(/aqueous/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques36 != "" && UserData.ques36 == "aqueous" && "text-green-700"}
            `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques36.match(/aqueous/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    aqueous
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 36,
                          Ans1: "",
                          mainAns: "aqueous",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This statement is also from Paragraph B, where it describes the properties of the sandcastle worm glue, which can adhere in aqueous solutions, making it potentially useful for bone repair in wet environments."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            solutions, it is a useful substance in the process of bone repair. Dr Stewart, from the University of Utah, and his team have managed to produce a  man-made  version  of  the  glue  using  artificial

            <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques37.match(/tests/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques37 != "" && UserData.ques37 == "tests" && "text-green-700"}
             `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques37.match(/tests/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    tests
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 37,
                          Ans1: "",
                          mainAns: "tests",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph E discusses how Dr. Stewart and his team replicated the sandcastle worm glue using synthetic polymers with similar chemical properties."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            . If  early

            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques38.match(/twice/gi) && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques38 != "" && UserData.ques38 == "twice" && "text-green-700"}
             `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques38.match(/twice/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    twice
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 38,
                          Ans1: "",
                          mainAns: "twice",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph F discusses the benefits of the man-made version of the glue created by Dr. Stewart's team, suggesting it has advantages such as solidifying in response to acidity and temperature changes."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            prove  correct, this man-made version seems to  have added benefits over the  natural  version being

            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques39.match(/naturally/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques39 != "" && UserData.ques39 == "naturally" && "text-green-700"}
          `}
            />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques39.match(/naturally/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    naturally
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 39,
                          Ans1: "",
                          mainAns: "naturally",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: " Paragraph G discusses the potential advantages of the man-made glue, noting it is potentially biodegradable and non-toxic, allowing it to naturally disappear after healing."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            as strong, and able to vanish from the repaired area


            <span className='numberOfQuestion'>40</span>It cannot be said with certainty that rowers show a higher
            <input type="text" name="ques40" id="ques40" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-2" && !UserData.ques40.match(/naturally/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "Actual-Test-2" && UserData.ques40 != "" && UserData.ques40 == "naturally" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-2" && !UserData.ques40.match(/naturally/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    naturally
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 40,
                          Ans1: "",
                          mainAns: "naturally",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: " Paragraph G discusses the potential advantages of the man-made glue, noting it is potentially biodegradable and non-toxic, allowing it to naturally disappear after healing."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            .</label>
        </div>
      </div>











    </section>
  )
}

export default Test2Panel2_Page2




