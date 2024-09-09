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
        <h5 className=''>Reading Passage-2</h5>
        <h6 className=''>Questions 14-20</h6> <br />
        <label className='mb-1'>Reading Passage 2 has eight paragraphs, <span className='font-bold'>A_H</span></label> <br />
        <label className=''>Which section contains the following information?  <br />
          Choose the correct letter, A-H, in boxes <span className='font-bold'>14-20</span> on your answer sheet.</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>examples of a range of potential environmental advantages of oil palm tree cultivation
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques14 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques14 != "" && UserData.ques14 == "F" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques14 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "atmosphere",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "F paragraph’s last three lines from first part and second full part. If ten times more palm oil can be produced from a patch of land than any competing oil, than ten times more land would need to be cleared in order to produce the same volume of oil from that competitor…… As for the question of carbon emissions, the issue really depends on what oil palm trees are replacing. Crops vary in the degree to which they sequester carbon – in the other words, the amount of carbon they capture from the atmosphere and store within the plant. The more carbon sequesters, the more it reduces the effect of climate change. As Shankar explains: ‘[ Palm oil production ] actually sequesters more carbon in some ways than other alternatives, [ ….. ] Of course, if you’re cutting down virgin forest it’s terrible- that’s what’s happening in Indonesia and Malaysia, it’s been allowed to get out of hand. But if it’s replacing rice, for example, it might actually sequester more carbon.’ ** F paragraph talks about the advantages of growing palm trees to the environment. It includes less land that needs to be cleared for more oil and capture carbon dioxide from the atmosphere."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques15"> <span className='numberOfQuestion'>15</span> description of an organisation which controls the environmental impact of palm oil production.
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques15 != "G" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques15 != "" && UserData.ques15 == "G" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques15 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "G",
                      hiddenWord: "RSPO",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "G paragraph’s first five lines. The industry is now regulated by a group called Roundtable on Sustainable Palm Oil (RSPO), consisting of palm growers, retailers, product manufactures, and other interested parties. Over the past decade or so, an agreement has gradually been reached regarding standards that producers of palm oil have to meet in order for their product to be regard as officially ‘sustainable’. ** Roundtable on Sustainable Palm Oil is an organization that sets standards to be followed by palm oil producers so that palm oil production does not harm the environment and remains sustainable."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> examples of the widespread global use of palm oil.
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques16 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques16 != "" && UserData.ques16 == "A" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques16 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "packed",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "A paragraph’s second, third and last three lines. It’s almost certainly in the soap we wash with in the morning, the sandwich we have for lunch, and the biscuits we snack on during the day…… Make it an ideal ingredient for long-term preservation, allowing many packaged food on supermarket shelves to have ‘best before’ dates of months, even years, into the future. ** The uses of Palm oil are given in the ‘A’ paragraph. It is used in soap, sandwiches, biscuits, and packed food to increase its shelf life."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>reference to a particular species which could benefit the ecosystem of oil palm plantations
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques17 != "H" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques17 != "" && UserData.ques17 == "H" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques17 != "H"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                H
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "H",
                      hiddenWord: "Ellwood believes that",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– H paragraph’s third to last line. The bird’s nest fern (Asplenium nidus) grows on trees in a epiphytic fashion (meaning it’s dependent on the tree only for support, not for nutrients), and is native to many tropical regions, where as a keystone species it performs a vital ecological role. Ellwood believes that ** reintroducing the bird’s nest fern into oil palm plantations could potentially allow these areas to recover their biodiversity, providing a home for all manner of species, from fungi and bacteria, to invertebrates such as insects, amphibians, reptiles and even mammals. ** The bird’s nest fern is an ecologically important plant that, if planted on palm plantations, can provide a home to many fungi, bacteria, insects, amphibians, reptiles and even mammals, which will increase biodiversity and benefit oil palm plantations."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"> <span className='numberOfQuestion'>18</span>figures illustrating the rapid expansion of the palm oil industry
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques18 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques18 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "Ellwood believes that",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "B full paragraph. Many farmers have seized the opportunity to maximize the planting of oil palm trees. Between 1990 and 2012, the global land area devoted to growing oil palm trees grew from 6 to 17 million hectares, now accounting for around ten percent of total cropland in the entire world. From a mere two million tonnes produced annually globally 50 years ago, there are now around 60 million tonnes produced every single year, a figure looking likely to double or even triple by the middle of the century. ** Palm oil production increased from 2 million tones (a figure) to 60 million tones (a figure) in 50 years, which will double or triple in the future."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"><span className='numberOfQuestion'>19</span>an economic justification for not opposing the palm oil industry
            <select name="ques19" id="ques19" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques19 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques19 != "" && UserData.ques19 == "E" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques19 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "Ellwood believes that",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "E paragraph’s first to fifth line. One response to the boycott movement has been the argument for the vital role palm oil plays in lifting many millions of people in the developing world out of poverty. Is it desirable to have palm oil boycotted, replaced, eliminated from the global supply chain, given how many low-income people in developing countries depend on it for their livelihood? ** Here, the economic justification is that palm oil production eliminated the poverty of many people in developing countries, and many other poor earn their livelihood from palm oil. So, it should not be opposed."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques20"> <span className='numberOfQuestion'>20</span>examples of creatures badly affected by the establishment of oil palm plantations.
            <select name="ques20" id="ques20" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques20 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques20 != "" && UserData.ques20 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques20 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "plantations",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "C paragraph’s last three line. Endangered species – most famously the Sumatran orangutan, but also rhinos, elephants, tigers, and numerous other fauna – have suffered from the unstoppable spread of oil palm plantations. ** This paragraph has information about animal species that suffered from oil palm plantations."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>  <br />

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 21 and 22</h6> <br />
        <label className=''><span className='font-bold'>Choose TWO letters.</span> <br /><br />
          Choose the correct letters in boxes 21 and 22 on your answer sheet. <br /> <br />
          <span className='font-bold'>Which TWO</span> statements are made about the Roundtable on Sustainable Palm Oil (RSPO)?
        </label><br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques21"><span className='numberOfQuestion mr-1 mb-2'>21</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques21 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "B",
                      hiddenWord: "plantations",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "B (It demands that certified producers be open and honest about their practices.) – G paragraph’s third to fifth line. Over the past decade or so, an agreement has gradually been reached regarding standards that producers of palm oil have to meet in order for their product to be regarded as officially ‘sustainable’. The RSPO insisted upon no virgin forest clearing, transparency and regular assessment of carbon stock, among other criteria. ** RSPO asks for transparency from certified producers, which means their practices should be open and honest."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques21' />
              Its membership has grown steadily over the course of the last decade.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques21' />
              It demands that certified producers be open and honest about their practices.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques21' />
              Its regulations regarding sustainability are stricter than those governing other industries.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques15"><span className='numberOfQuestion mr-1 mb-2'>22</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques22 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "criteria",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "C (It took several years to establish its set of criteria for sustainable palm oil certification) – G paragraph’s first four lines. The industry is now regulated by a group called the Roundtable on Sustainable Palm Oil (RSPO), consisting of palm growers, retailers, product manufacturers, and other interested parties. Over the past decade or so, an agreement has gradually been reached regarding standards that producers of palm oil have to meet in order for their product to be regarded as officially ‘sustainable’. Decade = a period of 10years ** The organization took a decade or more to reach an agreement for setting standards (criteria) that palm oil producers need to follow to label (certify) their product as ‘sustainable’."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques22' />
              It took several years to establish its set of criteria for sustainable palm oil certification.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques22' />
              It was formed at the request of environmentalists concerned about the loss of virgin forests..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques22' />
              have confidence in their potential to succeed..
            </label>
            </div>
          </div>
        </div>

      </div> <br />

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 23-26</h6> <br />
        <label className=''>Complete the sentences below.<br /> <br />
          Choose NO MORE THAN TWO WORDS from the passage for each answer.</label><br />
        <label>Write your answers in boxes 23-26 on your answer sheet.</label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span> One advantage of palm oil for manufacturers is that it stays
            <input type="text" name="ques23" id="ques23" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques23.match(/solid/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques23 != "" && UserData.ques23 == "solid" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques23.match(/solid/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  solid
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 23,
                        Ans1: "",
                        mainAns: "solid",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "A paragraph’s fourth to fifth line. Why is Palm Oil so attractive for manufacturers? Primarily because its unique properties such as remaining solid at room temperature."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            even when not refrigerated.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques24"><span className='numberOfQuestion'>24</span>The
            <input type="text" name="ques24" id="ques24" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques24.match(/Sumatran orangutan/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques24 != "" && UserData.ques24 == "Sumatran orangutan" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques24.match(/Sumatran orangutan/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  Sumatran orangutan
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "Sumatran orangutan",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "C paragraph’s fifth line . Endangered species – most famously the Sumatran orangutan, but also rhinos, elephants, tigers, and numerous other fauna – have suffered from the unstoppable spread of oil palm plantations."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            is the best known of the animals suffering habitat loss as a result of the spread of oil palm plantations. </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques25"> <span className='numberOfQuestion'>25</span>As one of its criteria for the certification of sustainable palm oil, the RSPO insists that growers check
            <input type="text" name="ques25" id="ques25" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques25.match(/carbon stocks/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques25 != "" && UserData.ques25 == "carbon stocks" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques25.match(/carbon stocks/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  carbon stocks
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "carbon stocks",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "G paragraph’s fifth and sixth line. The RSPO insists upon no virgin forest clearing, transparency and regular assessment of carbon stocks, among their criteria."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            on a routine basis. </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span>Ellwood and his researchers are looking into whether the bird’s nest fern could restore
            <input type="text" name="ques26" id="ques26" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && !UserData.ques26.match(/biodiversity/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques26 != "" && UserData.ques26 == "biodiversity" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && !UserData.ques26.match(/biodiversity/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  biodiversity
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "biodiversity",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "H paragraph’s sixth to seventh line. Ellwood believes that reintroducing the bird’s nest fern into oil palm plantations could potentially allow these areas to recover their biodiversity."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            in areas where oil palm trees are grown.</label>
        </div>
      </div> <br />





      {/* for Passage-3 all Questions--- */}
      <div className='Titles pl-[10px] sm:pl-[25px] mb-5'>
        <h5 className=''>Reading Passage-3 </h5>
        <h6 className=''>Questions 27-31</h6> <br />
        <label className=''>Choose the correct letter, <span className='font-bold'> A, B, C or D</span>. <br /> <br />
          Choose  the correct letter in boxes 27-31 on your answer sheet</label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques27"><span className='numberOfQuestion mr-1 mb-2'>27</span> What point does Shester make about Barr’s book in the first paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques27 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "D (it covers a range of factors that affected the development of New York)",
                      hiddenWord: "Geology",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "first paragraph’s second to fourth line .The book combines geology, history, economics and a lot of data to explain why business clusters developed where they did and how the early decisions of workers and firms shaped the skyline we see today. ** Geology, history, economics, and decisions of firms and workers are the factors that affected the development of New York, as covered in this passage."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques27' />
              It gives a highly original explanation for urban development.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques27' />
              Elements of Barr’s research papers are incorporated throughout the book.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques27' />
              Other books that are available on the subject have taken a different approach.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques27' />
              It covers a range of factors that affected the development of New York.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques28"><span className='numberOfQuestion mr-1 mb-2'>28</span> How does Shester respond to the information in the book about tenements?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques28 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "B (She indicates a potential problem with Barr’s analysis)",
                      hiddenWord: "problematic",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Third paragraph’s fifth to last line. I would have liked Barr to expand upon his claim that existing tenements prevents skyscrapers in certain neighborhoods because ‘ likely no skyscrapers developer was interested in performing the necessary “slum clearance”’. Later in the book, Barr makes the claim that the depth of bedrock was not a limiting factor for developers, as foundation costs were a small fraction of the cost of development. At first glance, it is not obvious why slum clearance would be limiting, while more expensive foundations would not. ** Shester disputes the points made by Barr that slum clearance was an obstacle in developing skyscrapers and foundation cost was not. Barr did not explain why tenement clearance was not done by developers. So, she finds Barr’s analysis problematic."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques28' />
              She describes the reasons for Barr’s interest.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques28' />
              She indicates a potential problem with Barr’s analysis..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques28' />
              She compares Barr’s conclusion with that of other writers.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques28' />
              She provides details about the sources Barr used for his research..
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques29"><span className='numberOfQuestion mr-1 mb-2'>29</span>What does Shester say about chapter six of the book?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques29 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "C (it is too specialized for most readers)",
                      hiddenWord: "it is too specialized for most readers",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Sixth paragraph’s last four lines. Chapter six then presents data on building height throughout the 20 century and uses regression analysis to ‘predict’ building construction. While less technical than the research paper on which the chapter is based, it is probably more technical than would be preferred by a general audience. ** The language used in the sixth chapter was less technical than the research paper but not as easy as ordinary people (without technical knowledge) could understand it."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques29' />
              It contains conflicting data.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques29' />
              It focuses too much on possible trends.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques29' />
              It is too specialised for most readers..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques29' />
              It draws on research that is out of date.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques30"><span className='numberOfQuestion mr-1 mb-2'>30</span>What does Shester suggest about the chapters focusing on the 1920s building boom?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques30 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "D (Some parts will have limited appeal to certain people)",
                      hiddenWord: "Some parts will have limited appeal to certain people",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Eighth paragraph’s first three lines. Chapters eight and nine focus on the birth of Midtown and the building boom of the 1920s.Chapter eight contains lengthy discussions of urban economic theory that may serve as a distraction to readers primarily interested in New York. ** Chapters eight and nine talk about the building boom of the 1920s, and chapter eight has an urban economic theory, which might not be interesting to people who like to read about New York."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques30' />
              The information should have been organised differently.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques30' />
              More facts are needed about the way construction was financed..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques30' />
              The explanation that is given for the building boom is unlikely.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques30' />
              Some parts will have limited appeal to certain people.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques31"><span className='numberOfQuestion mr-1 mb-2'>31</span>What impresses Shester the most about the chapter on land values?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques31 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "",
                      mainAns: "C (The nature of the research into topic.)",
                      hiddenWord: "The nature of the research into topic",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Last paragraph’s first to fifth line. In the final chapter (chapter 10), Barr discusses another of his empirical papers that estimates Manhattan land values from the mid – 19 century to the present day. The data work that went into these estimations is particularly impressive. Towards the end of the chapter, Barr assesses ‘whether skyscrapers are a cause or an effect of high land values’. He finds that changes in land values predict future building height, but the reverse is not true. ** Sheshter impresses from the data work on estimating the land value in Manhattan from the 19th century to now. Barr also found the relation between the building height and land value, which she also found interesting."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques31' />
              the broad time period that is covered.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques31' />
              the interesting questions that Barr asks.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques31' />
              the nature of the research into the topic
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques31' />
              the recommendations Barr makes for the future.
            </label>
            </div>
          </div>
        </div>
      </div> <br />



      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-4 w-full'>
        <h6 className=''>Questions 32-35</h6> <br />
        <label className=''>Do the following statements agree with the claims of the writer in <span className='font-bold'>Reading Passage 3</span>?<br /><br />In boxes 32-35 on your answer sheet, write</label>
        <label className='p-3'>YES : ---   if the statement agrees with the views of the writer <br /> <br />
          NO:--if the statement contradicts the views of the writer <br /> <br />
          NOT GIVEN:-- if it is impossible to say what the writer thinks about this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"> <span className='numberOfQuestion'>32</span>The description in the first chapter of how New York probably looked from the air in the early 1600s lacks interest.
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques32 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques32 != "" && UserData.ques32 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques32 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "extremely interesting",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– Second paragraph’s first two lines. Barr begins chapter one by taking the reader on a ‘helicopter time-machine’ ride – giving a fascinating account of how the New York landscape in 1609 might have looked from the sky. ** In the first chapter, Barr gives a fascinating ( extremely interesting ) description (account) of how 1609 New York might have been seen from the sky."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33"> <span className='numberOfQuestion'>33</span>Chapters two and three prepare the reader well for material yet to come.
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques33 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques33 != "" && UserData.ques33 == "YES" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques33 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "prepare the reader",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Third paragraph’s first four lines. Chapter two and three takes the reader up to the Civil War (1861-1865), with chapter two focusing on the early development of land and the implementations of a grid system in 1811. Chapter three focuses on land use before the Civil War. Both chapters are informative and well researched and set the stage for the economic analysis that comes later in the book. **  Chapters two and three set the stage (prepare the reader) for economic analysis given in upcoming chapters"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques3"> <span className='numberOfQuestion'>34</span>The biggest problem for many nineteenth-century New York immigrant neighbourhoods was a lack of amenities.
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques34 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques34 != "" && UserData.ques34 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques34 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "facilities",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Fourth paragraph’s first three lines. Chapter four focuses on immigration and the location of neighborhoods and tenements in the late 19 century. Barr identifies four primary immigrant enclaves and analyzes their locations in terms of the amenities available in the area. ** Barr talks about immigrants’ place of living in terms of amenities (facilities) but does not tell whether the lack of facilities was a problem for them or if they had other concerns. Thus, not given is the answer."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"><span className='numberOfQuestion'>35</span> In the nineteenth century, New York’s immigrant neighbourhoods tended to concentrate around the harbour.
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques35 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques35 != "" && UserData.ques35 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-7" && UserData.ques35 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "facilities",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "fourth paragraph line three to five. Most of these enclaves were located on the least valuable land, between the industries located on the waterfront and the wealthy neighborhoods bordering Central Park. ** Immigrants were not living around the harbour; they lived on the land between industrieson the waterfront and rich people’s living area near Central Park."
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
        <label className=''>Complete the summary using the list of phrases, A-J, below. <br /> <br />
          Write the correct letter, A-J, in boxes <span className='font-bold'>36-40 </span>on your answer sheet.</label><br /> <br />
        <h6 className='w-full text-center'>The bedrock myth</h6>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex  flex-wrap mb-2'>
          <label htmlFor="ques36">In chapter seven, Barr indicates how the lack of bedrock close to the surface does not explain why skyscrapers are absent from
            <span className='numberOfQuestion'>36</span>
            <input type="text" name="ques36" id="ques36" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques36 != "H" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques36 != "" && UserData.ques36 == "H" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && UserData.ques36 != "H"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  H
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 36,
                        Ans1: "",
                        mainAns: "H (Specific area)",
                        hiddenWord: "Specific area",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "seventh paragraph’s first three lines. Chapter seven tackles the ‘bedrock myth’, the assumptions that the absence of bedrock close to the surface between Downtown and Midtown New York is the reason for skyscrapers not being built between the two urban centers. ** The specific area is the land between Downtown and Midtown New York, where the bedrock was assumed not near the surface"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            . He points out that although the cost of foundations increases when bedrock is deep below the surface, this cannot be regarded as

            <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques37 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques37 != "" && UserData.ques37 == "D" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && UserData.ques37 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "D (excessive expense)",
                        hiddenWord: "excessive expense",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Seventh paragraph’s third and fourth line. Rather, Barr argues that while deeper bedrock does increase foundation costs, these costs were neither prohibitively high nor were they large compared to overall cost of building a skyscraper. **  Even though the foundation cost increases if bedrock is deeper, it remains too low (not excessive expense) compared to the whole cost of building a skyscraper."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            especially when compared to

            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques38 != "I" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques38 != "" && UserData.ques38 == "I" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && UserData.ques38 != "I"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  I
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "I (total expenditure)",
                        hiddenWord: "total expenditure",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Seventh paragraph’s third and fourth line. Rather, Barr argues that while deeper bedrock does increase foundation costs, these costs were neither prohibitively high nor were they large compared to overall cost of building a skyscraper. ** Overall cost = total expenditures"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            A particularly enjoyable part of the chapter was Barr’s account of how foundations are built. He describes not only how

            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques39 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques39 != "" && UserData.ques39 == "B" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && UserData.ques39 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "B (deep excavations)",
                        hiddenWord: "deep excavations",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Seventh paragraph’s sixth line. He describes the use of caissons, which enables workers to dig down for considerable distances ** Caisson = a large watertight chamber, open at the bottom, from which the water is kept out by air pressure and in which construction work may be carried out under water. Dig down for considerable distances = deep excavations."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            are made possible by the use of caissons, but he also discusses their

            <span className='numberOfQuestion'>40</span>
            <input type="text" name="ques40" id="ques40" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques40 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-7" && UserData.ques40 != "" && UserData.ques40 == "F" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-7" && UserData.ques40 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "F (associated risks)",
                        hiddenWord: "associated risks",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Seventh paragraph’s third last line. Barr’s thorough technological history discusses not only how caissons work, but also the dangers involved. ** Read this blank in connection with the previous (39) one for more clarity. Danger involved = associated risk"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            . The chapter is well researched but relatively easy to understand.</label>

        </div>
        <div className='p-3 rounded border-2 border-gray-300 flex flex-wrap gap-3 '>
          <p><span className='font-bold mr-2'>A</span> development plans</p> <br />
          <p><span className='font-bold mr-2'>B</span>deep excavations</p> <br />
          <p><span className='font-bold mr-2'>C</span>  great distance   </p> <br />
          <p><span className='font-bold mr-2'>D</span>excessive expense </p><br />
          <p><span className='font-bold mr-2'>E</span> impossible tasks </p> <br />
          <p><span className='font-bold mr-2'>F</span>associated risks</p> <br />
          <p><span className='font-bold mr-2'>G</span> water level </p>  <br />
          <p><span className='font-bold mr-2'>H</span>specific areas</p> <br />
          <p><span className='font-bold mr-2'>I</span> total expenditure   </p> <br />
          <p><span className='font-bold mr-2'>J</span>  construction guidelines</p> <br />
        </div>


      </div>


    </section>
  )
}

export default Panel2_Q2




