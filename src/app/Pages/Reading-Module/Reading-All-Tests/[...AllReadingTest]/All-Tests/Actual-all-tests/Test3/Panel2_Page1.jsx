"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Test3Panel2_Page1({ handleChange, UserData }) {
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

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 1 - 7</h6> <br />
        <h6 className=''>The text contains ten sections, A-J.</h6>
        <h6>Which section contains the following information?</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1"> <span className='numberOfQuestion'>1</span>Old architecture and cold temperatures.
            <input type="text" name="ques1" id="ques1" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques1 != "E" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques1 != "" && UserData.ques1 == "E" && "text-green-700"}
            `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && UserData.ques1 != "E"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    E
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 1,
                          Ans1: "",
                          mainAns: "E",
                          hiddenWord: "Paragraph E",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph E: Likely refers to a place known for its historical buildings and cooler climate. An example could be Edinburgh, Scotland, which is renowned for its old architecture like the Edinburgh Castle and its typically cold weather."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques2"> <span className='numberOfQuestion'>2</span>Great beaches and plenty of places to eat good food.
            <input type="text" name="ques2" id="ques2" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques2 != "F" && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques2 != "" && UserData.ques2 == "F" && "text-green-700"}
            
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && UserData.ques2 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "F",
                        hiddenWord: "Paragraph F",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph F: This describes a coastal area known for its beaches and diverse food options. An example could be Barcelona, Spain, known for its beautiful beaches and a wide variety of restaurants and food markets. Style theme park.: This seems to be part of the description left unfinished. It might refer to a place like Orlando, Florida, known for both its theme parks and culinary scene."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            style theme park.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3"> <span className='numberOfQuestion'>3</span>Lots of creatures to see here, including birds and butterflies.
            <input type="text" name="ques3" id="ques3" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques3 != "H" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques3 != "" && UserData.ques3 == "H" && "text-green-700"}
            
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && UserData.ques3 != "H"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    H
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 3,
                          Ans1: "",
                          mainAns: "H",
                          hiddenWord: "Paragraph H",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph H: This section refers to a place rich in biodiversity. An example could be the Amazon Rainforest, which hosts a vast array of birds, butterflies, and other wildlife."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques4">   <span className='numberOfQuestion'>4</span>One of the largest places in England that has phenomenal beauty.
            <input type="text" name="ques4" id="ques4" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques4 != "I" && "text-red-600"}
             ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques4 != "" && UserData.ques4 == "I" && "text-green-700"}
            
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && UserData.ques4 != "I"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    I
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 4,
                          Ans1: "",
                          mainAns: "I",
                          hiddenWord: "Paragraph I",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph I: Refers to a large and beautiful region in England. The Lake District fits this description, being one of the largest and most scenic areas in the country."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>

          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques5">  <span className='numberOfQuestion'>5</span>You can ride bikes or walk over hills.
            <input type="text" name="ques5" id="ques5" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques5 != "G" && "text-red-600"}
           ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques5 != "" && UserData.ques5 == "G" && "text-green-700"}
            
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && UserData.ques5 != "G"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    G
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 5,
                          Ans1: "",
                          mainAns: "G",
                          hiddenWord: "Paragraph G",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph G: Highlights an area known for outdoor activities like biking and hiking. The Cotswolds in England is a prime example, offering rolling hills and scenic trails for such activities. ** Of getting in.: This phrase seems to be an incomplete part of the sentence. It might suggest ease of access to these activities or trails."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            of getting in.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques6"> <span className='numberOfQuestion'>6</span>The home of creative minds and amazing landscapes.
            <input type="text" name="ques6" id="ques6" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques6 != "J" && "text-red-600"}
           ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques6 != "" && UserData.ques6 == "J" && "text-green-700"}
            
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && UserData.ques6 != "J"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    J
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 6,
                          Ans1: "",
                          mainAns: "J",
                          hiddenWord: "Paragraph J",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph J: Describes a place renowned for its artistic community and beautiful scenery. San Francisco, USA, is known for its vibrant arts scene and picturesque landscapes."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>

          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>The best food can be eaten here.
            <input type="text" name="ques7" id="ques7" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques7 != "A" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques7 != "" && UserData.ques7 == "A" && "text-green-700"}
            
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && UserData.ques7 != "A"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    A
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 7,
                          Ans1: "",
                          mainAns: "A",
                          hiddenWord: "Paragraph A",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "Paragraph A: Refers to a place famous for its culinary excellence. Paris, France, is world-renowned for its exceptional cuisine, making it a fitting example."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
          </label>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 8-13</h6> <br />
        <h6 className=''>Do the following statements agree with the information given in the text?<br /><br />
          TRUE - if the statement agrees with the information<br /><br />
          FALSE - if the statement contradicts the information <br /><br />
          NOT GIVEN - if there is no information on this</h6><br />

      </div>


      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8"><span className='numberOfQuestion'>8</span>The position is with a well known law firm.
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques8 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques8 != "" && UserData.ques8 == "TRUE" && "text-green-700"}
            
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-3" && UserData.ques8 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "It mentions that the position is with a renowned and respected legal firm in Perth."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9"> <span className='numberOfQuestion'>9</span>The successful candidate will be expected to attend weekly meetings.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques9 != "NOT GIVEN" && "text-red-600"}
           ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques9 != "" && UserData.ques9 == "NOT GIVEN" && "text-green-700"}
           `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-3" && UserData.ques9 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "There is no explicit mention of attending weekly meetings in the provided job description paragraphs."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>

          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>The job involves working with and helping several lawyers.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques10 != "TRUE" && "text-red-600"}
           ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques10 != "" && UserData.ques10 == "TRUE" && "text-green-700"}
           `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-3" && UserData.ques10 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Describes duties that include liaising with clients and internal departments, implying interaction with multiple lawyers."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>The firm has this kind of opening on a fairly regular basis.
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques11 != "FALSE" && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques11 != "" && UserData.ques11 == "FALSE" && "text-green-700"}
          
               `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-3" && UserData.ques11 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " It refers to this opportunity as 'rare,'' suggesting that such openings are not frequent."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>The firm is offering a high salary for the right person.
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques12 != "NOT GIVEN" && "text-red-600"}
           ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques12 != "" && UserData.ques12 == "NOT GIVEN" && "text-green-700"}
           `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-3" && UserData.ques12 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "There is no specific mention of salary details in the provided job description."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13"><span className='numberOfQuestion'>13</span>he work environment appears to be quite relaxed.
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques13 != "FALSE" && "text-red-600"}
          ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques13 != "" && UserData.ques13 == "FALSE" && "text-green-700"}
          `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-3" && UserData.ques13 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph A",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Emphasizes working with a busy, dynamic team, suggesting a fast-paced rather than relaxed work environment."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mb-3 mt-3'>
        <h6 className=''>Questions 14-21</h6> <br />
        <h6 className=''>Complete the sentences below.</h6>
        <h6>Choose NO MORE THAN THREE WORDS and/or a NUMBER from the text for each answer.</h6><br />
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques14"> <span className='numberOfQuestion'>14</span>The patent filed by Fay in 1867 included the application of keeping papers together and fastening
            <input type="text" name="ques14" id="ques14" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques14.match(/tickets to fabric/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques14 != "" && UserData.ques14 == "tickets to fabric" && "text-green-700"}
          
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && !UserData.ques14.match(/tickets to fabric/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    tickets to fabric
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 14,
                          Ans1: "",
                          mainAns: "tickets to fabric",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This statement aligns with paragraph A, which discusses Samuel B. Fay's 1867 patent for the bent-wire paper clip. While originally intended for tickets, the patent recognized its potential for fastening papers as well."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span>Post 1899, Fay used different
            <input type="text" name="ques15" id="ques15" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques15.match(/brand names/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques15 != "" && UserData.ques15 == "brand names" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && !UserData.ques15.match(/brand names/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    brand names
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 15,
                          Ans1: "",
                          mainAns: "brand names",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This matches with paragraph A as well. It explains that after 1899, Samuel B. Fay's paper clip design was marketed under various brand names, indicating its commercialization and widespread use."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
            to market his paper clips..</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>The number one paper clip in America was called
            <input type="text" name="ques16" id="ques16" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques16.match(/the gem/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques16 != "" && UserData.ques16 == "the gem" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {
                ReadingShowAnswer == "Actual-Test-3" && !UserData.ques16.match(/the gem/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    the gem
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 16,
                          Ans1: "",
                          mainAns: "the gem",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "This corresponds to paragraph B, which mentions the Gem paper clip as the best-selling paper clip in the United States, despite not being patented."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""
              }
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>A trade magazine seemed to recognise the success of the paper clip around.
            <input type="text" name="ques17" id="ques17" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques17.match(/1900/gi) && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques17 != "" && UserData.ques17 == "1900" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && !UserData.ques17.match(/1900/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  1900
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 17,
                        Ans1: "",
                        mainAns: "1900",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This statement is supported by paragraph C, which cites a 1900 trade publication acknowledging the widespread adoption of wire paper clips in offices, signaling their success."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>Production of the paper clip was held back until the
            <input type="text" name="ques18" id="ques18" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques18.match(/right wire/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques18 != "" && UserData.ques18 == "right wire" && "text-green-700"}
          
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && !UserData.ques18.match(/right wire/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  right wire
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 18,
                        Ans1: "",
                        mainAns: "right wire",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This aligns with paragraph D, which discusses the delay in paper clip production due to the availability of suitable steel wire and the necessary bending machinery."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            became available..</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques19"><span className='numberOfQuestion'>19</span>In 1904, paper clips were sold on the basis of them being.
            <input type="text" name="ques19" id="ques19" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques19.match(/cheaper than/gi) && "text-red-600"}
           ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques19 != "" && UserData.ques19 == "cheaper than" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && !UserData.ques19.match(/cheaper than/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  cheaper than
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 19,
                        Ans1: "",
                        mainAns: "cheaper than",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This is found in paragraph E, which mentions that in 1904, Clinch Clips were advertised as cheaper than using straight pins, highlighting price competitiveness as a selling point."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            alternatives</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span>The
            <input type="text" name="ques20" id="ques20" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques20.match(/patents/gi) && "text-red-600"}
                   ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques20 != "" && UserData.ques20 == "patents" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && !UserData.ques20.match(/patents/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  patents
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "patents",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This corresponds to paragraph F, which explains that the multitude of paper clip designs resulted from patent protections, driving manufacturers to innovate and differentiate their products."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            on paper clip designs forced competitors to be more creative.</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>Some paper clips were marketed as being able to keep a lot of pages together more
            <input type="text" name="ques21" id="ques21" onChange={handleChange} className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-3" && !UserData.ques21.match(/securely/gi) && "text-red-600"}
                ${ReadingShowAnswer == "Actual-Test-3" && UserData.ques21 != "" && UserData.ques21 == "securely" && "text-green-700"}
          `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-3" && !UserData.ques21.match(/securely/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  securely
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 21,
                        Ans1: "",
                        mainAns: "securely",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This statement is reflective of paragraph F, which outlines various selling points emphasized by manufacturers, including the ability to securely hold thick sets of papers among other features."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>
      </div>
    </section>
  )
}

export default Test3Panel2_Page1



