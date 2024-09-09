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

      <div className='Titles pl-[10px] sm:pl-[25px] mb-3'>
        <h5 className=''>Reading Passage-2</h5>
        <h6 className=''>Questions 14-19</h6> <br />
        <label className='mb-1'>Reading Passage 2 has eight sections, A-H.</label>
        <label className=''>Which section contains the following information? <br /> <br />
          Write the correct number, A-H, in boxes 14-19 on your answer sheet..</label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>an explanation for weapons being left behind in the mountains
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques14 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques14 != "" && UserData.ques14 == "D" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques14 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "D",
                      mainAns: "",
                      hiddenWord: "weapons",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "explanation, weapons being, left behind",
                      explain: "Let’s have a look at D paragraph line 3. ** “Hunters would have easily misplaced arrows and they often discarded broken bows rather than take them all the way home.”** Broken bows – weapons ** easily misplaced – left behind ** So, hunters did not take weapons to their home and left them in the mountains – D"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques15"> <span className='numberOfQuestion'>15</span>  a reference to the physical difficulties involved in an archaeological expedition
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques15 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques15 != "" && UserData.ques15 == "C" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques15 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "C",
                      mainAns: "",
                      hiddenWord: "often camping on permafrost",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "a reference, physical difficulties, involved, archaeological expedition",
                      explain: "C paragraph’s 2nd part’s , first line the writer says, “The slow but steady movement of glaciers tends to destroy anything at their bases, so the team focused on stationary patches of ice, mostly above 1,400 metres. ** C paragraph’s 3rd part’s first line. “Fieldwork is hard work- hiking with all our equipment, often camping on permafrost.” ** destroy anything at their bases – physical difficulties **   often camping on permafrost – archaeological expedition ** In the above-given lines, the writer talked about physical difficulties. Hence, these are the physical difficulties faced by archaeologists. – C"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>an explanation of why less food may have been available
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques16 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques16 != "" && UserData.ques16 == "F" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques16 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "F",
                      mainAns: "",
                      hiddenWord: "less food",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "less food, may, available",
                      explain: "In the F paragraph 2 part’s last three lines. The writer says, “A colder turn in the Scandinavian climate would likely have meant widespread crop failures, …” ** crop failures – less food **   likely – may **  Hence, less food may have been available because of crop failure due to cold climate."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span> a reference to the possibility of future archaeological discoveries
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques17 != "H" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques17 != "" && UserData.ques17 == "H" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques17 != "H"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                H
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "H",
                      mainAns: "",
                      hiddenWord: "archaeologists could be extracting",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "a reference, possibility, future archaeological discoveries",
                      explain: "In the H paragraph, second-last line. ** The writer says, “That means archaeologists could be extracting some of those artefacts from retreating ice in years to come.” **  could be – possibility **   in years to come – future archaeological discoveries ** Here, the writer said that in the coming years, archaeologists could find some artefacts."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques18"> <span className='numberOfQuestion'>18</span>  examples of items that would have been traded
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques18 != "G" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques18 != "" && UserData.ques18 == "G" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques18 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "G",
                      mainAns: "",
                      hiddenWord: "the writer gives examples",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "examples of items, would, traded",
                      explain: "In the G paragraph, from fifth line. ** The writer says, “And growing Norwegian …… would have created a booming demand for hides to fight off the cold, as well as antlers to make useful things like combs.” ** Here, the writer gives examples of two things that would have been traded. **     Hide = skin of an animal. **     Antler = horns of an adult deer."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques19"> <span className='numberOfQuestion'>19</span>a reference to the pressure archaeologists are under to work quickly
            <select name="ques19" id="ques19" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques19 != "B" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques19 != "" && UserData.ques19 == "B" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques19 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "B",
                      mainAns: "",
                      hiddenWord: "hurry",
                      hiddenWord2: "race the clock",
                      hiddenWord3: "",
                      keyWords: "a reference, pressure archaeologists, under to work, quickly",
                      explain: "In the B paragraph, 2nd  part’s, first 2 lines. ** The writer says, “With climate change shrinking ice cover around the world, glacial archaeologists need to race the clock to find newly revealed artefacts, preserve them and study them.” **   ‘Race the clock’ means they have to do ‘hurry’."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 20-22</h6> <br />
        <label className=''>Complete the summary below. <br /><br />
          Choose ONE WORD ONLY from the passage for each answer.<br /> <br />
          Write your answers in boxes 20-22 on your answer sheet.</label><br /> <br />
        <label>Interesting finds at an archaeological site</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques20">Organic materials such as animal skins and textiles are not discovered very often at archaeological sites. They have little protection against
            <span className='numberOfQuestion'>20</span>
            <input type="text" name="ques20" id="ques20" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques20.match(/microorganisms/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques20 != "" && UserData.ques20 == "microorganisms" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques20.match(/microorganisms/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  microorganisms
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 20,
                        Ans1: "",
                        mainAns: "microorganisms",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " little protection, against, decay, quickly.",
                        explain: " Look at the Paragraph B line 1. ** Here, the author of the text writes in the beginning, “Organic materials like textiles and hides are relatively rare finds at archaeological sites. This is because unless they’re protected from the microorganisms that cause decay, they tend not to last long.” **  tend not to last long – quickly"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            , which means that they decay relatively quickly. But this is not always the case. If temperatures are low enough, fragile artefacts can be preserved for thousands of years. <br />
            A team of archaeologists have been working in the mountains in Oppland in Norway to recover artefacts revealed by shrinking ice cover. In the past, there were trade routes through these mountains and

            <span className='numberOfQuestion'>21</span>
            <input type="text" name="ques21" id="ques21" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques21.match(/reindeer/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques21 != "" && UserData.ques21 == "reindeer" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques21.match(/reindeer/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  reindeer
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 21,
                        Ans1: "",
                        mainAns: "reindeer",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " shrinking ice cover, In the past, trade routes, these mountains, gathered.",
                        explain: "Look at the Paragraph C line 4 ** “Reindeer once congregated on these icy patches in the later summer months …….. In addition, trade routes threaded through the mountain passes ….” ** Congregated means gathered. ** Reindeer gathered on icy patches during the summer months. ** Hence, the answer is reindeer."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            gathered there in the summer months to avoid being attacked by

            <span className='numberOfQuestion'>22</span>
            <input type="text" name="ques22" id="ques22" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques22.match(/insects/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques22 != "" && UserData.ques22 == "insects" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques22.match(/insects/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  insects
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 22,
                        Ans1: "",
                        mainAns: "insects",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "summer months, avoid, attacked",
                        explain: "Look at the Paragraph C line 4 ** Here, the author of the text writes “Reindeer once congregated on these ice patches in the later summer months to escape biting insects, and from the late Stone Age” ** Here, escape – avoid **  Biting – attacked  **   Biting insects – insects that bite"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            on lower ground. The people who used these mountains left things behind and it is those objects that are of interest to archaeologists.</label>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 23 and 24</h6> <br />
        <label className=''>Choose TWO letters <br /><br />
          Chooose Write the correct letters in boxes 23 and 24 on your answer sheet.</label><br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <label className=' mb-3 mt-2'><span className='font-bold'>Which TWO</span> of the following statements does the writer make about the discoveries of Barrett’s team?</label>

        <div className='mb-3'>
          <label htmlFor="ques23"><span className='numberOfQuestion mr-1 mb-2'>23</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques23 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "B (Hunters went into the mountains even during periods of extreme cold)",
                      mainAns: "",
                      hiddenWord: "hunters regularly went to mountains during cold climate",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "about the discoveries of Barrett’s team",
                      explain: "Look at the Paragraph F line 6 ** “But it turned out that hunters kept regularly venturing into the mountains even when the climate turned cold, …” ** Hence, hunters regularly went to mountains during cold climate."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques23' />
              Artefacts found in the higher mountain passes were limited to skiing equipment.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques23' />
              Hunters went into the mountains even during periods of extreme cold.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques23' />
              Radiocarbon dating of artefacts produced some unreliable results.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques24"><span className='numberOfQuestion mr-1 mb-2'>24
          </span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques24 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "A (The number of artefacts from certain time periods was relatively low)",
                      mainAns: "",
                      hiddenWord: "there were few or no signs of activity during other periods",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Look at the Paragraph E, line 4. ** Here, the writer says, “They found that some periods had produced lots of artefacts, which indicates that people had been pretty active in the mountains during those times. But there were few or no signs of activity during other periods.” ** Here, the writer said that some periods had produced lots of artefacts which mean people were more active during those periods. ** However, there were some periods when people were less active means those periods had produced fewer artefacts."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques24' />
              The number of artefacts from certain time periods was relatively low.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques24' />
              More artefacts were found in Oppland than at any other mountain site.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques24' />
              More artefacts helped a country industrialise..
            </label>
            </div>
          </div>
        </div>

      </div> <br />





      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 25 and 26</h6> <br />
        <label className=''>Choose TWO letters <br /> <br />
          Chooose  the correct letters in boxes 25 and 26 on your answer sheet.</label><br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <label className='mb-3 mt-1'><span className='font-bold'>Which TWO</span> of the following statements does the writer make about the Viking Age?</label>
        <div className='mb-3'>
          <label htmlFor="ques25"><span className='numberOfQuestion mr-1 mb-2'>25 </span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques25 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "A (Hunters at this time benefitted from an increased demand for goods)",
                      mainAns: "",
                      hiddenWord: "booming demand",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: " about the Viking Age",
                      explain: "Look at the Paragraph G, 5th line. ** Here the writer says, “And growing Norwegian towns, along with export markets, would have created a booming demand for hides to fight off the cold, as well as antlers to make useful things like combs. Business must have been good for hunters.” ** The writer said that the booming (increased) demand for goods necessarily (must) benefitted the hunters."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques25' />
              Hunters at this time benefited from an increased demand for goods.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques25' />
              The beginning of the period saw the greatest growth in the wealth of Vikings.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques25' />
              They kept better records than guilds..
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques26"><span className='numberOfQuestion mr-1 mb-2'>26</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques26 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "A (Vikings did not rely on ships alone to transport goods)",
                      mainAns: "",
                      hiddenWord: "they did not rely only on ships",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Look at the Paragraph G, line 3.",
                      explain: "Here, the writer says, “Although we usually think of ships when we think of Scadinavian expansion, these recent discoveries show that plenty of goods travelled on overland routes, ..” ** Here, the writer said that the latest discoveries show that a lot of goods were transported on overland (by land) routes. Hence, they did not rely only on ships."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques26' />
              Vikings did not rely on ships alone to transport goods.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques26' />
              Norwegian towns at this time attracted traders from around the world.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques26' />
              Vikings were primarily interested in their trading links with the Middle East.
            </label>
            </div>
          </div>
        </div>

      </div> <br />





      {/* Akhno baki nicher kaj ses kora */}
      {/* for Passage-3 all Questions--- */}
      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h5 className='underline'>Reading Passage-3 </h5>
        <h6>Questions 27-32</h6> <br />
        <label className=''>Do the following statements agree with the information given in Reading Passage 3?<br /><br />In boxes 27-32 on your answer sheet, write</label><br /> <br />
        <label className=''>TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>The Cambridge scientists’ discovery of the ‘thermometer molecule’ caused surprise among other scientists.
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques27 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques27 != "" && UserData.ques27 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques27 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "There is no such information given in the passage",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Cambridge scientists’, discovery, ‘thermometer molecule’, surprise, other scientists",
                      explain: "Let’s have a look at  paragraph A. ** There is some information related to the discovery of the thermometer molecule by Cambridge scientists but there is no such information whether it caused surprise among other scientists or not. ** There is no such information given in the passage"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques28"> <span className='numberOfQuestion'>28</span>The target for agricultural production by 2050 could be missed.
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques28 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques28 != "" && UserData.ques28 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques28 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "It means it could be missed",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "target, agricultural production, could be missed",
                      explain: "D paragraph’s, 4th  line the writer says, “It is estimated that agricultural yields will need to double by 2050, but climate change is a major threat to achieving this.” ** Here, it is given that the target for 2050 could not be achieved due to climate change. ** It means it could be missed.  "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29">  <span className='numberOfQuestion'>29</span> Wheat and rice suffer from a rise in temperatures.
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques29 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques29 != "" && UserData.ques29 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques29 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "TRUE",
                      mainAns: "",
                      hiddenWord: "affected by high temperatures",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "suffer, rise in temperatures.",
                      explain: " In the D paragraph fifth line, The writer says, “Key crops such as wheat and rice are sensitive to high temperatures. Thermal stress reduces crop yields by around 10% of every one degree increase in temperature.” ** Sensitive means wheat and rice are affected by high temperatures.**   Increase – rise "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30">  <span className='numberOfQuestion'>30</span> It may be possible to develop crops that require less water.
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques30 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques30 != "" && UserData.ques30 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques30 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "the answer is not given",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "may be possible, develop crops, require less water.",
                      explain: " There is no such information given in the passage. ** So, the answer is not given. "
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"> <span className='numberOfQuestion'>31</span>  Plants grow faster in sunlight than in shade.
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques31 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques31 != "" && UserData.ques31 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques31 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "The question statement contradicts the information given in the passage",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Plants, grow faster, sunlight than in shade.",
                      explain: " In the E paragraph, second line. “During the day, sunlight activates the molecules, slowing down growth. If a plant finds itself in shade, phytochromes are quickly inactivated – enabling it to grow faster to find sunlight again.” ** Here, it is given that sunlight slows the growth of a plant, and in the shade, the plant grows faster to find sunlight.** The question statement contradicts the information given in the passage."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"> <span className='numberOfQuestion'>32</span> Phytochromes change their state at the same speed day and night.
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques32 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques32 != "" && UserData.ques32 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques32 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "the writer said that during the day",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Phytochromes, change, same speed, day and night.",
                      explain: " Let’s have a look, E paragraph’s 1 part’s second-last line. ** “Light-driven changes to phytochrome activity occur very fast, in less than a second,’ says Wigge. At night, however, it’s a different story. Instead of a rapid deactivation following sundown, the molecules gradually change from their active to inactive state.” ** Here, the writer said that during the day, the state of phytochromes changes very fast. ** However, at night, it changes gradually (slowly). ** The question statement contradicts the information given in the passage."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

      </div> <br />






      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 33-37</h6> <br />
        <label className=''>
          Reading Passage 3 has eight sections, A-H. <br /> <br />
          Which section contains the following information? <br /> <br />
          Choose the correct letter, A-H, in boxes 33-37 on your answer sheet.</label> <br /> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33"><span className='numberOfQuestion'>33</span> mention of specialists who can make use of the research findings
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques33 != "H" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques33 != "" && UserData.ques33 == "H" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques33 != "H"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                H
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "H",
                      mainAns: "",
                      hiddenWord: "research findings",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "specialists, who, use of the research findings.",
                      explain: " Look at the H paragraph, seventh line. “’Cambridge is uniquely well-positioned………. Into the field” In these lines they talk about outstanding collaborators (specialists) who work on more applied aspects of plant biology. ** Outstanding collaborators can help this new knowledge (research findings) into the fields."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34"><span className='numberOfQuestion'>34</span> a reference to a potential benefit of the research findings
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques34 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques34 != "" && UserData.ques34 == "D" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques34 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "D",
                      mainAns: "",
                      hiddenWord: "research findings",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "potential benefit, research findings.",
                      explain: " Look at the Paragraph D, 8th line. “’Discovering the molecules that allow plants to sense temperature has the potential to accelerate the breeding of crops resilient to thermal stress and climate change.” ** Here, the writer said that molecules have the potential to speed up the breeding of crops. ** It is the potential (having the capacity to do something in the future) benefit of the research."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"><span className='numberOfQuestion'>35</span> scientific support for a traditional saying
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques35 != "G" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques35 != "" && UserData.ques35 == "G" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques35 != "G"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                G
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "G",
                      mainAns: "",
                      hiddenWord: "science behind a well-known rhyme",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "scientific support, traditional saying.",
                      explain: "Look at the Paragraph G, 3rd  line. ** “In fact, the discovery of the dual role of phytochromes provides the science behind a well-known rhyme long used to predict the coming season: oak before ash we’ll have a splash, ash before oak we’re in for a soak.” ** Here, ‘well-known’ means ‘famous’, ** and it is said that this rhyme was used earlier (means it is traditional) to predict the season. ** The writer said that certain discovery gives the science behind this rhyme. ** So, it provides scientific support to this traditional rhyme."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span> a reference to people traditionally making plans based on plant behaviour
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques36 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques36 != "" && UserData.ques36 == "C" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques36 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "C",
                      mainAns: "",
                      hiddenWord: "Farmers and gardeners have known for hundreds of years",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "making plans, based on plant behavior.",
                      explain: "Look at the Paragraph C, 1st line. “Farmers and gardeners have known for hundreds of years how responsive plants are to temperature: warm winters cause many trees and flowers to bud early, something humans have long used to predict weather and harvest times for the coming year.” ** Here, the writer said that farmers and gardeners know about plants’ behavior to temperature, and they used this knowledge to predict weather and harvest times (plan)."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span> a reference to where the research has been reported
            <select name="ques37" id="ques37" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques37 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques37 != "" && UserData.ques37 == "A" && "text-green-700"}
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
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-11" && UserData.ques37 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "A",
                      mainAns: "",
                      hiddenWord: "has been reported in the journal Science",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "where, the research, reported",
                      explain: "Look at the Paragraph A, 2 part’s first line. ** “The new findings, published in the journal Science, show that phytochromes ….”** Hence, the research (new findings) has been reported in the journal Science."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 38-40</h6> <br />
        <label className=''>Complete the sentences below. <br /> <br />
          Choose NO MORE THAN TWO WORDS from the passage for each answer.<br /> <br />
          Write your answers in boxes 38-40 on your answer sheet. </label><br /> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-2">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques38"> <span className='numberOfQuestion'>38</span> Daffodils are likely to flower early in response to
            <input type="text" name="ques38" id="ques38" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques38.match(/warm winter/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques38 != "" && UserData.ques38 == "warm winter" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques38.match(/warm winter/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  warm winter
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "warm winter",
                        hiddenWord: "winter",
                        hiddenWord2: "warm",
                        hiddenWord3: "",
                        keyWords: "Daffodils, flower, early response, weather.",
                        explain: "Look at the Paragraph – G, first line. “Other species, such as daffodils, have considerable temperature sensitivity, and can flower months in advance during a warm winter.” **   Here, flower months in advance – early response **     So, the answer is warm (winter)."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            weather.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques39"> <span className='numberOfQuestion'>39</span>If ash trees come into leaf before oak trees, the weather in
            <input type="text" name="ques39" id="ques39" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques39.match(/summer/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques39 != "" && UserData.ques39 == "summer" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques39.match(/summer/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  summer
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "summer",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "ash trees, come, leaf before oak trees, probably be wet.",
                        explain: "Look at G paragraph, 8th  line. ** “A warmer spring, and consequently a higher likeliness of a hot summer will result in oak leafing before ash. …….. a colder summer is likely to be a rain-soaked one.” ** The meaning of above lines is that , warmer spring > hot summer > oak leafing before ash. ** The opposite of it: ash leafing before oak > colder spring > colder summer (rainsoaked). **   ‘Rain-Soaked’ means ‘wet’."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            will probably be wet.</label>
        </div>

        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques40"> <span className='numberOfQuestion'>40</span>The research was carried out using a particular species of
            <input type="text" name="ques40" id="ques40" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-11" && !UserData.ques40.match(/mustard plants/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-11" && UserData.ques40 != "" && UserData.ques40 == "mustard plants" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-11" && !UserData.ques40.match(/mustard plants/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  mustard plants
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "mustard plants",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "The research , using a particular species of",
                        explain: "Look at H paragraph, 2nd line ** “The work was done in a model system, using a mustard plant called Arabidopsis, …” ** In the first line of this paragraph, the writer started discussing the research, and later in this line, it is said that the work was done using a mustard plant. **   So, the answer is mustard."
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

export default Panel2_Q2




