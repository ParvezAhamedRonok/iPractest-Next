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
        <h5 className='mb-1'>From Passage-2</h5>
        <h6 className=''>Questions 14-18</h6> <br />
        <label className='mb-1'>Which section contains the following information?</label> <br />
        <label className=''>Choose the correct letter,<span className='font-bold'>A-E</span> , in boxes <span className='font-bold'>14-18</span> on your answer sheet. <br /> <br />
          NB   You may use any letter more than once.</label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques14"> <span className='numberOfQuestion'>14</span>a reference to a type of tomato that can resist a dangerous infection.
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques14 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques14 != "" && UserData.ques14 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques14 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "occasions",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "C paragraph’s last part’s first three lines. The team in China re-domesticated several strains of wild tomatoes with desirable traits lost in domesticated tomatoes. In this way they managed to create a strain resistant to a common disease called bacterial spot race, which can devastate yields. ** Strain = a particular breed or variety."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques1"> <span className='numberOfQuestion'>15</span> an explanation of how problems can arise from focusing only on a certain type of tomato plant.
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques15 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques15 != "" && UserData.ques15 == "B" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques15 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: " B paragraph’s the whole second part",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "But every time a single plant with a mutation is taken from a larger population for breeding, much genetic diversity is lost. And sometimes the desirable mutations come with less desirable traits. For instance, the tomato strains grown for supermarkets have lost much of their flavour. ** Problems that can arise from selecting a single type of plant are the loss of genetic diversity, less desirable results and loss of flavour."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>a number of examples of plants that are not cultivated at present but could be useful as food sources.
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques16 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques16 != "" && UserData.ques16 == "E" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques16 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "paragraph’s the whole second part",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– E paragraph’s the whole second part. The three teams already have their eye on other plants that could be ‘catapulted into the mainstream’, including foxtail, oat-grass and cowpea. By choosing wild plants that are drought or heat tolerant, says Gao, we could create crops that will thrive even as the planet warms. ** Examples of plants are foxtail, oat-grass and cowpea. They are not cultivated now, but when the earth is warm, these plants can be grown for obtaining food."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"> <span className='numberOfQuestion'>17</span>a comparison between the early domestication of the tomato and more recent research
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques17 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques17 != "" && UserData.ques17 == "A" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques17 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "A paragraph’s first part’s first three lines and second part",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "A paragraph’s first part’s first three lines and second part’s first three lines. It took at least 3,000 years for humans to learn how to domesticate the wild tomato and cultivate it for food. Now two separate teams in Brazil and China have done it all over again in less than three years. This approach relies on the revolutionary CRISPR genome editing technique, in which changes are deliberately made to the DNA of a living cell, allowing genetic material to be added, removed or altered. ** The first two lines talk about the early domestication of tomatoes, which started 3000 years ago. But now, such a domestication process took only three years. This recent process used the CRISPR technique that can change the DNA of living cells of plants."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"> <span className='numberOfQuestion'>18</span>a personal reaction to the flavour of a tomato that has been genetically edited
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques18 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques18 != "" && UserData.ques18 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques18 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "having a pleasant and distinctive smell",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "C paragraph’s third part. ‘They are quite tasty,’ says Kudla. ‘A little bit strong. And very aromatic. ** This line expresses the reaction of Jorg Kudla to the flavor of a genetically edited tomato. Aromatic = having a pleasant and distinctive smell."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div> <br />

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 19-23</h6> <br />
        <label className=''>Look at the following statements <span className='font-bold'>(Questions 19-23)</span> and the list of researchers below.<br /><br />
          Match each statement with the correct researcher, <span className='font-bold'>A-D</span>..<br /> <br />
          Chooose the correct letter, A-D, in boxes <span className='font-bold'>19-23</span> on your answer sheet.<br /> <br />
          NB   You may use any letter more than once.</label><br /> <br /> <br />
        <h6>The Model E</h6>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"><span className='numberOfQuestion'>19</span>IDomestication of certain plants could allow them to adapt to future environmental challenges..
            <select name="ques19" id="ques19" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques19 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques19 != "" && UserData.ques19 == "B" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques19 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "B (Caixia Gao)",
                      hiddenWord: "Caixia Gao",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "E paragraph’s second full paragraph. The three teams already have their eye on other plants that could be ‘catapulted into the mainstream’, including foxtail, oat-grass and cowpea. By choosing wild plants that are drought or heat tolerant, says Gao, we could create crops that will thrive even as the planet warms. ** The environmental challenge about which Caixia Gao is talking is the warm earth. Foxtail, oat-grass and cowpea are drought and heat-tolerant plants that can be domesticated and adapt to the hot environment."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span>The idea of growing and eating unusual plants may not be accepted on a large scale.
            <select name="ques20" id="ques20" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques20 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques20 != "" && UserData.ques20 == "D" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques20 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "D (Jonathan Jones)",
                      hiddenWord: "Jonathan Jones",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "E paragraph’s first full paragraph. This approach could boost the use of many obscure plants, says Jonathan Jones of the Sainsbury Lab in the UK. But it will be hard for new foods to grow so popular with farmers and consumers that they become new staple crops, he thinks. ** Obscure = Not known. Jonathan Jones says that it is difficult for new food to become popular among farmers and consumers, which makes a new crop main or important for consumption (staple)."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques21"><span className='numberOfQuestion'>21</span> It is not advisable for the future direction of certain research to be made public.
            <select name="ques21" id="ques21" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques21 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques21 != "" && UserData.ques21 == "A" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques21 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "A (Jorg Kudla)",
                      hiddenWord: "Jorg Kudla",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "E paragraph’s whole third part. But Kudla didn’t want to reveal which species were in his team’s sights, because CRISPR has made the process so easy. ‘Any one with the right skills could go to their lab and do this.’ ** Jorg Kudla did not want to reveal (made public) his research because people with some knowledge about CRISPR can do the same as he did."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques22"><span className='numberOfQuestion'>22</span>Present efforts to domesticate one wild fruit are limited by the costs involved.
            <select name="ques22" id="ques22" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques22 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques22 != "" && UserData.ques22 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques22 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "C (Joyce Van Eck)",
                      hiddenWord: "Joyce Van Eck",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: ", D paragraph’s second paragraph, third line to last line. Van Eck’s team has edited the plants to increase fruit size, make their growth more compact and to stop fruits dropping. ‘There’s potential for this to be a commercial crop,’ says Van Eck. But she adds that taking the work further would be expensive because of the need to pay for a license for the CRISPR technology and get regulatory approval. **  Due to the expensive (costly) license fee for CRISPR technology and getting regulatory approval, Joyce Van Eck cannot further his efforts to domesticate groundcherry."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span>Humans only make use of a small proportion of the plant food available on Earth..
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques23 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques23 != "" && UserData.ques23 == "A" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques23 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "A (Jorg Kudla)",
                      hiddenWord: "Jorg Kudla",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "A paragraph’s fourth full paragraph. ‘This could transform what we eat,’ says Jorg Kudla at the University of Munster in Germany, a member of the Brazilian team. ‘There are 50,000 edible plants in the world, but 90 percent of our energy comes from just 15 crops.’ ** Out of 50,000 eatable (edible) plants on the earth, only 15(a small proportion compared to 50,000) crops are used for food."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <h6 className='mt-3 mb-3'>List of Researchers</h6>
        <div className='p-3 border-2 border-gray-300 rounded flex flex-wrap gap-3'>
          <p><span className='font-bold mr-2'>A</span> Jorg Kudla</p> <br />
          <p><span className='font-bold mr-2'>B</span> Caixia Gao</p> <br />
          <p><span className='font-bold mr-2'>C</span>  Joyce Van Eck</p> <br />
          <p><span className='font-bold mr-2'>D</span>Jonathan Jones</p> <br />
        </div>
      </div> <br />




      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 24-26</h6> < br />
        <label className=''>Complete the sentences below. <br /><br />
          Choose ONE WORD ONLY from the passage for each answer.<br /> <br />
          Write your answers in boxes 24-26 on your answer sheet..</label><br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3 ">
        <div className='flex gap-1 flex-wrap mb-2'>
          <div className='flex gap-2'>
            <label htmlFor="ques24"><span className='numberOfQuestion'>24</span>An undesirable trait such as loss of
              <input type="text" name="ques24" id="ques24" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && !UserData.ques24.match(/flavour/gi) && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques24 != "" && UserData.ques24 == "flavour" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-6" && !UserData.ques24.match(/flavour/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    flavour
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 24,
                          Ans1: "",
                          mainAns: "flavour",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "B paragraph’s second full paragraph. But every time a single plant with a mutation is taken from a larger population for breeding, much genetic diversity is lost. And sometimes the desirable mutations come with less desirable traits. For instance, the tomato strains grown for supermarkets have lost much of their flavour."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
              may be caused by a mutation in a tomato gene.</label>
          </div>

          <div className='flex flex-wrap gap-2'>
            <label htmlFor="ques24"><span className='numberOfQuestion'>25</span>By modifying one gene in a tomato plant, researchers made the tomato three times its original
              <input type="text" name="ques25" id="ques25" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && !UserData.ques25.match(/size/gi) && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques25 != "" && UserData.ques25 == "size" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-6" && !UserData.ques25.match(/size/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    size
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 25,
                          Ans1: "",
                          mainAns: "size",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "c paragraph first two lines. For instance, they tripled the size of fruit by editing a gene called FRUIT WEIGHT,"
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>

          <div className='flex flex-wrap gap-2'>

            <label htmlFor="ques24"> <span className='numberOfQuestion'>26</span>A type of tomato which was not badly affected by
              <input type="text" name="ques26" id="ques26" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && !UserData.ques26.match(/salt/gi) && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques26 != "" && UserData.ques26 == "salt" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-6" && !UserData.ques26.match(/salt/gi)
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    salt
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 26,
                          Ans1: "",
                          mainAns: "salt",
                          hiddenWord: "",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "c paragraph’s fourth paragraph last line. They also created another strain that is more salt tolerant – and has higher levels of vitamin C."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
              and was rich in vitamin C, was produced by a team of researchers in China. </label>
          </div>
        </div>

      </div> <br />










      {/* for Passage-3 all Questions--- */}

      <div className='Titles mt-3 pl-[10px] sm:pl-[25px] mb-4 '>
        <h5 className=''>Reading Passage-3</h5>
        <h6 className=''>Questions 27-31</h6> <br />
        <label className=''>Choose the correct letter, <span className='font-bold'>A, B, C or D</span> <br /><br />
          Chooose the correct letter in boxes <span className='font-bold'>27-31</span> on your answer sheet.</label><br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3 ">
        <div className='mb-3'>
          <label htmlFor="ques27"><span className='numberOfQuestion mr-1 mb-2'>27</span> The purpose of the first paragraph is to
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques27 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "D (Outline a common assumption)",
                      hiddenWord: " Outline a common assumption",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "First paragraph’s first two lines. Scientific discovery is popularly believed to result from the sheer genius of such intellectual stars as naturalist Charles Darwin and theoretical physicist Albert Einstein. **  Popularly believed means commonly assumed. People commonly believed that discoveries were made by only genius people like Charles Darwin."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques27' />
              <i className='' >defend particular ideas </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques27' />
              <i className=''>compare certain beliefs.</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques27' />
              <i className=''>disprove a widely held view.</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques27' />
              <i className=''>outline a common assumption.</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques28"><span className='numberOfQuestion mr-1 mb-2'>28</span>What are the writers doing in the second paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques28 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "A (criticising an opinion)",
                      hiddenWord: "criticising an opinion",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Second full paragraph. There may be some limited truth to this view. However, we believe that it largely misrepresents the real nature of scientific discovery, as well as that of creativity and innovation in many other realms of human endeavor. ** The writer is criticizing the viewpoint (breakthrough scientific achievements in which idea pop into someone’s head) by saying it has limited truth and it misrepresents the real nature of scientific discovery."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques28' />
              <i className='' >criticising an opinion </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques28' />
              <i className=''> justifying a standpoint.</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques28' />
              <i className=''>explaining an approach</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques28' />
              <i className=''>supporting an argument</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques29"><span className='numberOfQuestion mr-1 mb-2'>29</span>In the third paragraph, what do the writers suggest about Darwin and Einstein?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques29 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "A (They represent an exception to a general rule)",
                      hiddenWord: "They represent an exception to a general rule",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Third paragraph’s first to third line. Setting aside such greats as Darwin and Einstein – whose monumental contributions are duly celebrated we suggest that innovation is more a process of trial and error, where two steps forward may sometimes come with one step back, as well as one or more steps to the right or left. ** Here, the general rule is that innovation involves trial and error, steps backwards and forward, but the writer sets Darwin and Einstein aside from this general rule because their research followed proper procedure and arrangement (duly)."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-3 ml-3' type="radio" value="A" name='ques29' />
                They represent an exception to a general rule.
              </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-3 ml-3' type="radio" value="B" name='ques29' />
                Their way of working has been misunderstood</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-3 ml-3' type="radio" value="C" name='ques29' />
                They are an ideal which others should aspire to..</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='mr-3 ml-3' type="radio" value="D" name='ques29' />
                Their achievements deserve greater recognition.</label>
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor="ques30"><span className='numberOfQuestion mr-1 mb-2'>30</span> John Nicholson is an example of a person whose idea
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques30 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "C (laid the foundations for someone else’s breakthrough)",
                      hiddenWord: "laid the foundations for someone else’s breakthrough",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Fourth paragraph last three line. Yet, amid his often fanciful theories and wild speculations, Nicholson also proposed a novel theory about the structure of atoms. Niels Bohr, the Nobel prize-winning father of modern atomic theory, jumped off from this interesting idea to conceive his now-famous model of the atom. ** The theory about the Structure of Atoms was proposed by John Nicholson first. But Neil Bohr got the idea from Nicholson and wrote modern atomic theory. It means the foundation was laid by Nicholson."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-3 ml-3' type="radio" value="A" name='ques30' />
                established his reputation as an influential scientist.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-3 ml-3' type="radio" value="B" name='ques30' />
                was only fully understood at a later point in history.</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-3 ml-3' type="radio" value="C" name='ques30' />
                laid the foundations for someone else’s breakthrough..</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='mr-3 ml-3' type="radio" value="D" name='ques30' />
                initially met with scepticism from the scientific community.</label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques31"><span className='numberOfQuestion mr-1 mb-2'>31</span>What is the key point of interest about the ‘acey-deucy’ stirrup placement?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques31 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "A (the simple reason why it was invented)",
                      hiddenWord: "the simple reason why it was invented",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Sixth paragraph’s seventh to ninth line. Had he foreseen the speed advantage that would be conferred by riding acey-deucy? No. He suffered a leg injury, which left him unable to fully bend his left knee. His modification just happened to coincide with enhanced left-hand turning performance. ** Jackie Westrope placed the left stirrup lower than the right stirrup to support his injury. But it gave an advantage in improving performance in left-hand turning, which was unknown to anyone before. The reason for this invention was a coincidence, which was the injury of Jackie Westrope."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                <input className='mr-3 ml-3' type="radio" value="A" name='ques31' />
                the simple reason why it was invented </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                <input className='mr-3 ml-3' type="radio" value="B" name='ques31' />
                the enthusiasm with which it was adopted</label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                <input className='mr-3 ml-3' type="radio" value="C" name='ques31' />
                the research that went into its development</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <label>
                <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
                <input className='mr-3 ml-3' type="radio" value="D" name='ques31' />
                the cleverness of the person who first used it</label>
            </div>
          </div>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-2'>
        <h6 className=''>Questions 32-36</h6> <br />
        <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 3? <br /><br />In boxes 32-36 on your answer sheet, write</label><br /> <br />
        <label className=''>YES : ---   if the statement agrees with the views of the writer <br /> <br />
          NO:--if the statement contradicts the views of the writer <br /> <br />
          NOT GIVEN:-- if it is impossible to say what the writer thinks about this</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion'>32</span> Acknowledging people such as Plato or da Vinci as geniuses will help us understand the process by which great minds create new ideas.
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques32 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques32 != "" && UserData.ques32 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques32 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "individuals",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "  eighth full paragraph. The notions of insight, creativity and genius are often invoked, but they remain vague and of doubtful scientific utility, especially when one considers the diverse and enduring contributions of individuals such as Plato, Leonardo da Vinci, Shakespeare, Beethoven, Galileo, Newton, Kepler, Curie, Pasteur and Edison. These notions merely label rather than explain the evolution of human innovations. We need another approach, and there is a promising candidate. ** The last two lines of this paragraph clearly explain that the notions of insight, creativity and genius just label the evolution of human innovation but do not explain how they (individuals) did such innovations. So, another method is needed to explain how great minds create new ideas."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques33"><span className='numberOfQuestion'>33</span>The Law of Effect was discovered at a time when psychologists were seeking a scientific reason why creativity occurs.
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques33 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques33 != "" && UserData.ques33 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques33 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "relation between the Law of effect",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "ninth paragraph first two lines. The Law of Effect was advanced by psychologist Edward Thorndike in 1898, some 40 years after Charles Darwin published his groundbreaking work on biological evolution, On the Origin of Species. ** No relation between the Law of effect and finding reason for why creativity occurs is given."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34"><span className='numberOfQuestion'>34</span>The Law of Effect states that no planning is involved in the behaviour of organisms.
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques34 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques34 != "" && UserData.ques34 == "YES" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques34 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "goals need planning and change of behaviour",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "ninth paragraph, third to last line. This simple law (The law of effect) holds that organisms tend to repeat successful behaviors and to refrain from performing unsuccessful ones. Just like Darwin’s Law of Natural Selection, the Law of Effect involves an entirely mechanical process of variation and selection, without any end objective in sight. ** As per the law of effect, organisms repeat successful behavior and avoid unsuccessful ones because they have no objectives (goals). In general, goals need planning and change of behaviour. No goal, no planning."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques35"><span className='numberOfQuestion'>35</span>The Law of Effect sets out clear explanations about the sources of new ideas and behaviours..
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques35 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques35 != "" && UserData.ques35 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques35 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "goals need planning and change of behaviour",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "tenth paragraph’s first three lines. Of course, the origin of human innovation demands much further study. In particular, the provenance of the raw material on which the Law of Effect operates is not as clearly known as that of the genetic mutations on which the Law of Natural Selection operates. ** Provenance – the place of origin or earliest history of something. To understand the roots of human innovation, it is necessary to conduct more research. Even the origin of the raw material on which the Law of Effect operates is unknown. So, it means this law does not explain the sources of new ideas and behaviours."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques36"> <span className='numberOfQuestion'>36</span>Many scientists are now turning away from the notion of intelligent design and genius.
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques36 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques36 != "" && UserData.ques36 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-6" && UserData.ques36 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "345678912-3012-3012",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "There has no additional data for this questions that's why the answer will be not-given"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 37-40</h6> <br />
        <label className=''>Complete the summary using the list of words, A-G, below. <br /> <br />
          Write the correct letter, A-G, in boxes 37-40 on your answer sheet.</label><br /> <br />
        <label className='mt-1'>The origins of creative behaviour
        </label>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques31">The traditional view of scientific discovery is that breakthroughs happen when a single great mind has sudden <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques37 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques37 != "" && UserData.ques37 == "F" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && UserData.ques37 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "F (inspiration)",
                        hiddenWord: "inspiration",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " first paragraph’s last three lines. Conventional wisdom also places great weight on insight in promoting breakthrough scientific achievements, as if ideas spontaneously pop into someone’s head – fully formed and functional. ** spontaneous – performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus. You can compare its meaning to inner inspiration."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            Although this can occur, it is not often the case. Advances are more likely to be the result of a longer process. In some cases, this process involves

            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques38 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques38 != "" && UserData.ques38 == "D" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && UserData.ques38 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "D (mistakes)",
                        hiddenWord: "mistakes",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "third paragraph’s first three lines. Setting aside such greats as Darwin and Einstein– whosemonumental contributions are duly celebrated – we suggest that innovation is more a process of trial and error, where two steps forward may sometimes come with one step back, as well as one or more steps to the right or left. Error– Mistake"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            such as Nicholson’s theory about proto-elements. In others, simple necessity may provoke innovation, as with Westrope’s decision to modify the position of his riding stirrups. There is also often an element of

            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques39 != "E" && "text-red-600"}
                     ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques39 != "" && UserData.ques39 == "E" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && UserData.ques39 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "E (luck)",
                        hiddenWord: "luck",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "seventh paragraph first line. Plenty of other stories show that fresh advances can arise from error, misadventure, and also pure serendipity – a happy accident. ** Serendipity:- the occurrence and development of events by chance in a happy or beneficial way = LUCK"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            , for example, the coincidence of ideas that led to the invention of the Post-It note. With both the Law of Natural Selection and the Law of Effect, there may be no clear

            <span className='numberOfQuestion'>40</span>
            <input type="text" name="ques40" id="ques40" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques40 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-6" && UserData.ques40 != "" && UserData.ques40 == "B" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-6" && UserData.ques40 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "B (goals)",
                        hiddenWord: "goals",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "ninth paragraph’s last three lines. Just like Darwin’s Law of Natural Selection, the Law of Effect involves an entirely mechanical process of variation and selection, without any end objective in sight. Objective : a goal"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            involved, but merely a process of variation and selection.</label>
        </div>
        <div className='p-3 rounded border-2 border-gray-300 flex flex-wrap w-auto gap-3'>
          <p><span className='font-bold mr-2'>A</span> invention </p> <br />
          <p><span className='font-bold mr-2'>B</span>goals</p> <br />
          <p><span className='font-bold mr-2'>C</span> compromise </p> <br />
          <p><span className='font-bold mr-2'>D</span> mistakes </p><br />
          <p><span className='font-bold mr-2'>E</span>  luck</p> <br />
          <p><span className='font-bold mr-2'>F</span>inspiration</p> <br />
          <p><span className='font-bold mr-2'>G</span>experiments</p>  <br />
        </div>


      </div>




    </section>
  )
}

export default Panel2_Q2




