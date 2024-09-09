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
        <h6 className=''>Questions 1-6</h6>
        <h6 className=''>Write True, False or Not Given.</h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>Michael Krauss feels the world does not need so many languages.
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques1 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques1 != "" && UserData.ques1 == "FALSE" && "text-green-700"}
              
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques1 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph A, lines 4-5",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "(Paragraph A, lines 4-5) Michael Krauss argues that linguistic diversity is important, stating, The world would be less beautiful and less interesting without linguistic diversity"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span>American Indian schoolchildren prefer to speak that mother tongue
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques2 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques2 != "" && UserData.ques2 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques2 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph B, lines 15-16",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage mentions that American Indian schoolchildren were punished for speaking their native tongue (Paragraph B, lines 15-16), but it does not provide information about their preferences."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span>Kenneth Hale believes we need to keep different languages to maintain different cultures.
            <select name="ques3" id="ques3" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques3 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques3 != "" && UserData.ques3 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques3 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 3,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: " (Paragraph C, lines 19-20)",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " (Paragraph C, lines 19-20), but it does not provide information about their preferences. so, the answer is not given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span>The rules of grammar can help us to understand how people think
            <select name="ques4" id="ques4" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques4 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques4 != "" && UserData.ques4 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques4 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 4,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph D, lines 1-2",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " This statement is supported by Reading Passage 1, Paragraph D: Linguists are especially interested in the rules of grammar that seem common to all languages, because they provide important clues to how the mind works."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>Lardil is a simplified version of Damin
            <select name="ques5" id="ques5" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques5 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques5 != "" && UserData.ques5 == "FALSE" && "text-green-700"}
             
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques5 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 5,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph E",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Reading Passage 1, Paragraph E, clarifies that Damin is a simplified form of Lardil, not the other way around: For example, he studied a language called Damin, an offshoot of Lardil, an Australian Aboriginal tongue. Damin was a special language spoken only by young men in the first few years after their initiation. It was an extremely abstract, simplified form of Lardil.."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"> <span className='numberOfQuestion'>6</span>Lardil is now used less than Damin
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques6 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques6 != "" && UserData.ques6 == "FALSE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>

            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques6 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "According to Reading Passage 1, Paragraph F, both Damin and Lardil are no longer widely spoken, but it does not state that Lardil is used less than Damin: Unfortunately, Damin is no longer spoken, and Lardil is dying out."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>




      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4 mt-5'>
        <h6 className=''>Questions 7-13</h6>
        <h6 className=''>Complete the summary wi</h6>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques7">The
            <span className='numberOfQuestion'>7</span>
            <input type="text" name="ques7" id="ques7" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques7.match(/linguist/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques7 != "" && UserData.ques7 == "linguist" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques7.match(/linguist/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  linguist
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 7,
                        Ans1: "",
                        mainAns: "linguist",
                        hiddenWord: "Paragraph C, line 3",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "The statement is referring to Kenneth Hale, a linguist. This can be inferred from the context in Reading Passage 1 (Paragraph C, line 3)"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            Kenneth Hale believes that a language develops as a result of
            <span className='numberOfQuestion'>8</span>
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques8.match(/human/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques8 != "" && UserData.ques8 == "human" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques8.match(/human/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  human
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "human",
                        hiddenWord: "Paragraph E, lines 1-2",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "(Paragraph E, lines 1-2) Kenneth Hale believes that a language develops as a result of human effort to understand the world. This is found in Reading Passage 1, Paragraph E: Hale also argued that language should be seen as 'the product of human intellectual toil' rather than something that evolves unaided."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            style theme park.
            effort to understand the world, and is not something which simply
            <span className='numberOfQuestion'>9</span>
            <input type="text" name="ques9" id="ques9" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques9.match(/evolves/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques9 != "" && UserData.ques9 == "evolves" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques9.match(/evolves/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  evolves
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "evolves",
                        hiddenWord: "Paragraph E, lines 1-2",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "This is part of the same explanation as above. Kenneth Hale believes language does not simply evolve unaided.(Paragraph E, lines 1-2)"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            . Some examples include a
            . In his work, he shows how breaking a language down to its fundamental
            <span className='numberOfQuestion'>10</span>
            <input type="text" name="ques10" id="ques10" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques10.match(/concepts/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques10 != "" && UserData.ques10 == "concepts" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques10.match(/concepts/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  concepts
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 10,
                        Ans1: "",
                        mainAns: "concepts",
                        hiddenWord: "Paragraph E, lines 6-7",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In his work, Hale shows how breaking a language down to its fundamental concepts reveals how its speakers make distinctions between related things. This is found in Reading Passage 1, Paragraph E: Hale said the genius of Damin was the way it broke Lardil down into its most basic concepts. (Paragraph E, lines 6-7)"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            reveals how its speakers make a
            <span className='numberOfQuestion'>11</span>
            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques11.match(/distinction between/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques11 != "" && UserData.ques11 == "distinction between" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques11.match(/distinction between/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  distinction between
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "distinction between",
                        hiddenWord: " Paragraph E",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In his work, Hale shows how breaking a language down to its fundamental concepts reveals how its speakers make distinctions between related things. This is found in Reading Passage 1, Paragraph E: Hale said the genius of Damin was the way it broke Lardil down into its most basic concepts."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            .  related things. He gives another very clear example of, what he claims to be a huge
            <span className='numberOfQuestion'>12</span>
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques12.match(/invention/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques12 != "" && UserData.ques12 == "invention" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques12.match(/invention/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  invention
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "invention",
                        hiddenWord: "Paragraph F",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "He gives another very clear example of what he claims to be a huge invention. This is found in Reading Passage 1, Paragraph F: I hope you'll realise this is a very big invention, said Hale. It's not just joking around."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            by pointing to how numero
            <span className='numberOfQuestion'>13</span>
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Actual-Test-1" && !UserData.ques13.match(/pronouns/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques13 != "" && UserData.ques13 == "pronouns" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Actual-Test-1" && !UserData.ques13.match(/pronouns/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  pronouns
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "pronouns",
                        hiddenWord: "Paragraph F",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "By pointing to how numerous pronouns in Lardil are reduced to just two words in Damin. This is found in Reading Passage 1, Paragraph F: Lardil has about 90 words to cover pronouns such as 'me' and 'you' and determiners such as 'this' and 'that'. But in Damin, these are boiled down to two words, 'niaa' and 'niuu', meaning 'I' and 'not-I'. (Paragraph F, lines 3-5)"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            n Lardil are reduced to just two words in Damin</label>

        </div>
      </div>

      <div className='titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 14 - 21</h6>
        <h6 className=''>Match each heading to the pragraph</h6>
        <div className='pl-3 pt-2 mb-2'>
          <i className='font-bold'>i,	Variations of language forms</i> <br />
          <i className='font-bold'>ii,	Why grammar is so important</i><br />
          <i className='font-bold'>iii , Why English may be considered simple</i><br />
          <i className='font-bold'>iv , Possibly the most difficult language of all</i><br />
          <i className='font-bold'>v , The complexities of pronunciation</i><br />
          <i className='font-bold'>vi, One example of a tonal language</i><br />
          <i className='font-bold'>vii , A difficult language for speakers of English</i><br />
          <i className='font-bold'>viii,Amusing claims about the difficulty of English</i><br />
          <i className='font-bold'>ix , An effective system for measuring time spent</i><br />
          <i className='font-bold'>x , Sounds other than vowels</i>
        </div>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>14</span>Paragraph A
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques14 != "viii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques14 != "" && UserData.ques14 == "viii" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques14 != "viii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "viii",
                      hiddenWord: "4643666",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph discusses humorous and exaggerated claims about the English language's complexity and idiosyncrasies, as illustrated by books like Crazy English and Mother Tongue: English and How It Got That Way. These claims are often entertaining but not entirely accurate."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span>Paragraph B
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques15 != "iii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques15 != "" && UserData.ques15 == "iii" && "text-green-700"}
            
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques15 != "iii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "iii",
                      hiddenWord: "4643666",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph explains why English is relatively simple compared to other languages, mentioning the lack of complex verb conjugations, the ease of pluralizing nouns, and the absence of grammatical genders. These characteristics make English easier to learn for speakers of other languages."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>Paragraph C
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques16 != "v" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques16 != "" && UserData.ques16 == "v" && "text-green-700"}
            
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques16 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "v",
                      hiddenWord: "4643666",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph focuses on the varied and complex pronunciation of different languages, particularly vowels and consonants, and the challenges they pose to learners. It explains how the sound systems of languages can be difficult, using examples from different languages."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>Paragraph D
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques17 != "vii" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques17 != "" && UserData.ques17 == "vii" && "text-green-700"}
            
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques17 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "vii",
                      hiddenWord: "4643666",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph discusses the complexity of Latin for English speakers, particularly its noun case system and flexible word order. Latin is used as an example of a difficult language for English speakers to learn due to its different grammatical structure."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span>Paragraph E
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques18 != "vi" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques18 != "" && UserData.ques18 == "vi" && "text-green-700"}
            
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques18 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "vi",
                      hiddenWord: "4643666```",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph uses Mandarin as an example of a tonal language, explaining how tones can change the meaning of words. It highlights the complexity of tonal languages and how they differ from non-tonal languages like English."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"><span className='numberOfQuestion'>19</span>Paragraph F
            <select name="ques19" id="ques19" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques19 != "ix" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques19 != "" && UserData.ques19 == "ix" && "text-green-700"}
            
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques19 != "ix"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ix
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "ix",
                      hiddenWord: "4643666```",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph does not fit the heading provided. The correct heading for Paragraph F should be x, Sounds other than vowels, as it discusses the complexity and variety of consonant sounds in different languages."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span>Paragraph G.
            <select name="ques20" id="ques20" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques20 != "i" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques20 != "" && UserData.ques20 == "i" && "text-green-700"}
            
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques20 != "i"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "i",
                      hiddenWord: "4643666```",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This paragraph does not fit the heading provided. The correct heading for the first part of Paragraph G should be iv, Possibly the most difficult language of all, as it discusses Tuyuca, a language considered to be extremely difficult due to its complex noun classes and verb-endings that indicate how the speaker knows something."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span>Paragraph G
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques21 != "iv" && "text-red-600"}
            ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques21 != "" && UserData.ques21 == "iv" && "text-green-700"}
            
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques21 != "iv"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iv
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "iv",
                      hiddenWord: "4643666```",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The correct heading for the second part of Paragraph G should be iv, Possibly the most difficult language of all, continuing the discussion on Tuyuca and its unique linguistic challenges."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>



      </div>

      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 22-26</h6>
        <h6 className=''>Choose if the following questions are True, False or Not Given in Reading Passage 02</h6>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-3'>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span>There are fewer variations in the vowel sounds in European languages than in English.
            <select name="ques22" id="ques22" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques22 != "FALSE" && "text-red-600"}
              
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques22 != "" && UserData.ques22 == "FALSE" && "text-green-700"}
            
               `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>

            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques22 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This statement is contradicted by Reading Passage 2, Paragraph F, which discusses the complexities of vowel sounds in European languages like German and French, highlighting their variety and nuances."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span>Mandarin is probably an easier language to learn than Cantonese.
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques23 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques23 != "" && UserData.ques23 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>

            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques23 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The passage does not provide information comparing the difficulty of learning Mandarin versus Cantonese, so it is not possible to determine if one is easier than the othe"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques24"> <span className='numberOfQuestion'>24</span>Vowel sounds are generally not as complicated as consonant sounds.
            <select name="ques24" id="ques24" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques24 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques24 != "" && UserData.ques24 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>

            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques24 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph F",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This aligns with Reading Passage 2, Paragraph F, which discusses how consonant sounds can be more complex and varied across languages compared to vowels, which tend to have fewer variations."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques25"> <span className='numberOfQuestion'>25</span>The grammar of Estonian is far more complicated than the grammar of Latin
            <select name="ques25" id="ques25" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques25 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques25 != "" && UserData.ques25 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>

            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques25 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This statement is supported by Reading Passage 2, Paragraph G, which compares Estonian grammar with its 14 cases and complex forms to Latin's 6 cases, indicating Estonian's grammar is indeed more intricate."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>

        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span>The writer is pleased that she does not write in Tuyuca.
            <select name="ques26" id="ques26" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques26 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "Actual-Test-1" && UserData.ques26 != "" && UserData.ques26 == "TRUE" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Actual-Test-1" && UserData.ques26 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "Paragraph G",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "This can be inferred from Reading Passage 2, Paragraph G, where the challenges of Tuyuca's grammar, such as its complex noun classes and obligatory verb-endings, are discussed, suggesting the writer might find relief in not having to deal with such complexities."
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

export default Test9Panel2_Page2



