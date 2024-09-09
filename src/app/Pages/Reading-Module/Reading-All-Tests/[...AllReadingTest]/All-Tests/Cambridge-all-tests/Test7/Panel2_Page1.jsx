"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>




function Panel2_Q1({ handleChange, UserData }) {
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
        <h5 className='mb-1'>Reading Passage-1</h5>
        <h6 className=''>Questions 1-5</h6> <br />
        <label className=''>Complete the notes below.</label> <br />
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.</label> <br />
        <label className=''>Write your answers in boxes 1-5 on your answer sheet.</label>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <h6 className='mt-2 mb-2'>Appearance and behaviour</h6>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques1">●   looked rather like a dog <br />
            ●   had a series of stripes along its body and tail <br />
            ●   ate an entirely   <span className='numberOfQuestion'>1</span>

            <input type="text" name="ques1" id="ques1" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques1.match(/carnivorous/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques1 != "" && UserData.ques1 == "carnivorous" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques1.match(/carnivorous/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  carnivorous
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 1,
                        Ans1: "",
                        mainAns: "carnivorous",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Carnivorous – second paragraph’s second line. In terms of feeding, it was exclusively carnivorous. ** Carnivorous = of an animal feeding on other animals"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            diet</label>
        </div>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques2">●   probably depended mainly on <span className='numberOfQuestion'>2</span>
            <input type="text" name="ques2" id="ques2" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques2.match(/scent/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques2 != "" && UserData.ques2 == "scent" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques2.match(/scent/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  scent
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 2,
                        Ans1: "",
                        mainAns: "scent",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "second paragraph’s sixth line. During long-distance chases, thylacines were likely to have relied more on scent than any other sense. Scent = a distinctive smell"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            when hunting</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques3">●   young spent first months of life inside its mother’s <span className='numberOfQuestion'>3</span>
            <input type="text" name="ques3" id="ques3" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques3.match(/pouch/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques3 != "" && UserData.ques3 == "pouch" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques3.match(/pouch/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  pouch
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 3,
                        Ans1: "",
                        mainAns: "pouch",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "third paragraph’s third and fourth line. Newborns crawled into the pouch on the belly of their mother, and attached themselves to one of the four teats, remaining there for up to three months."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <h6 className='mt-2 mb-2'>Decline and extinction</h6>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques4">●   last evidence in mainland Australia is a 3,100-year-old <span className='numberOfQuestion'>4</span>
            <input type="text" name="ques4" id="ques4" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques4.match(/fossil/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques4 != "" && UserData.ques4 == "fossil" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques4.match(/fossil/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  fossil
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 4,
                        Ans1: "",
                        mainAns: "fossil",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– fourth paragraph’s second to fourth line. The most recent, well-dated occurrence of a thylacine on the mainland is a carbon-dated fossil from Murray Cave in Western Australia, which is around 3,100 years old."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
          </label>
        </div>

        <p>●   probably went extinct in mainland Australia due to animals known as dingoes</p>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="">●   reduction in<span className='numberOfQuestion'>5</span>
            <input type="text" name="ques5" id="ques5" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques5.match(/habitat/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques5 != "" && UserData.ques5 == "habitat" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques5.match(/habitat/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  habitat
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 5,
                        Ans1: "",
                        mainAns: "habitat",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "fifth paragraph’s third to sixth line. it is likely that various other factors also contributed to the decline and eventual extinction of the species. These include competition with wild dogs introduced by European settlers, loss of habitat along with the disappearance of prey species."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            and available sources of food were partly responsible for decline in Tasmania</label>
        </div>


      </div> <br />

      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6>Question 6-13</h6> <br />
        <label className=''>
          Do the following statements agree with the information given in <span className='font-bold'>Reading Passage 1</span>?<br /> <br />
          In below <span className='font-bold'>1-7</span> on your answer sheet, write</label> <br />
        <label className=''>TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span> Significant numbers of thylacines were killed by humans from the 1830s onwards.
            <select name="ques6" id="ques6" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques6 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques6 != "" && UserData.ques6 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques6 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 6,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "dramatic",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "fifth paragraph’s first three lines. The dramatic decline of the thylacine in Tasmania, which began in the 1830s and continued for a century, is generally attributed to the relentless efforts of sheep farmers and bounty hunters with shotguns. ** The sudden (dramatic) reduction in the number of thylacines started in the 1830s when hunters started hunting them for rewards and sheep farmers for saving their sheep."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span> Several thylacines were born in zoos during the late 1800s.
            <select name="ques7" id="ques7" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques7 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques7 != "" && UserData.ques7 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques7 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 7,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "dramatic",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "sixth paragraph’s first line. There was only one successful attempt to breed a thylacine in captivity, at Melbourne Zoo in 1899. ** Only once was a thylacine breed in Melbourne Zoo in 1899. Hence, the question statement contradicts the information (False)."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques8">  <span className='numberOfQuestion'>8</span>John Gould’s prediction about the thylacine surprised some biologists..
            <select name="ques8" id="ques8" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques8 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques8 != "" && UserData.ques8 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques8 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 8,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "dramatic",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "The famous naturalist John Gould foresaw the thylacine’s demise when he published his Mammals of Australia between 1848 and 1863. ** No information about whether anyone was surprised or not is given. Hence, not given."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques9">  <span className='numberOfQuestion'>9</span>In the early 1900s, many scientists became worried about the possible extinction of the thylacine.
            <select name="ques9" id="ques9" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques9 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques9 != "" && UserData.ques9 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques9 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 9,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "not worried",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "seventh paragraph’s first two lines. However, there seems to have been little public pressure to preserve the thylacine, nor was much concern expressed by scientists at the decline of this species in the decade that followed. ** Scientists had no concern (not worried) about the reduction in the number of thylacine."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques10"><span className='numberOfQuestion'>10</span>T.T. Flynn’s proposal to rehome captive thylacines on an island proved to be impractical.
            <select name="ques10" id="ques10" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques10 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques10 != "" && UserData.ques10 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques10 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 10,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "practical",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " seventh paragraph’s third and fourth line. T. T. Flynn, Professor of Biology at the University of Tasmania. In 1914, he was sufficiently concerned about the scarcity of thylacine to suggest that some should be captured and placed on a small island. ** There is no information about whether his idea was implemented or not, and if implemented, was it successful (practical) or failed."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques11"><span className='numberOfQuestion'>11</span>There were still reasonable numbers of thylacines in existence when a piece of legislation protecting the species during their breeding season was passed.
            <select name="ques11" id="ques11" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques11 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques11 != "" && UserData.ques11 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques11 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 11,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "no living member left",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " seventh paragraph’s fifth to seventh line. But it was not until 1929, with the species on the very edge of the extinction, that Tasmania’s Animals and Birds Protection Board passed a motion protecting thylacines only for the month of December, which was thought to be the their prime breeding season. ** The thylacines were on the edge of extinction (no living member left), which means they were very low in numbers when a rule to protect them was passed."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques12"><span className='numberOfQuestion'>12</span>From 1930 to 1936, the only known living thylacines were all in captivity
            <select name="ques12" id="ques12" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques12 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques12 != "" && UserData.ques12 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques12 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 12,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "zoo",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "seventh paragraph’s last four lines. The last known wild thylacine to be killed was shot by a farmer in the north-east of Tasmania in 1930, leaving just captive specimens. Official protection of the species by the Tasmania government was introduced in July 1936, 59 days before the last known individual died in Hobart Zoo on 7 September, 1936. ** The last wild thylacine was killed by a farmer in 1930. Then thylacines were left only in captivity (zoo), and on 7th September 1936, the last thylacine died in Hobart Zoo."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques13">  <span className='numberOfQuestion'>13</span> Attempts to find living thylacines are now rarely made.
            <select name="ques13" id="ques13" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques13 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques13 != "" && UserData.ques13 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques13 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 13,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "zoo",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "last full paragraph. There have been numerous expeditions and searches for the thylacines over the years, none of which has produced definitive evidence that thylacines still exist. The species was declared extinct by the Tasmania government in 1986. ** This paragraph does not tell whether the search for thylacines is now (present) done or not. It was declared extinct after searching for many years until 1986."
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

export default Panel2_Q1



