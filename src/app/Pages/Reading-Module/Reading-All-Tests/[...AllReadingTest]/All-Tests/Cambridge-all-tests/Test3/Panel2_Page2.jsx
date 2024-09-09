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
        <h6 className='mb-2'>Reading Passage-2</h6>
        <h6 className=''>Questions 14-20</h6> <br />
        <label className='mb-1'>Reading Passage 2 has seven paragraphs, A-G.</label>
        <label className=''>Choose the correct heading for each paragraph from the list of headings below.<br /><br />
          Choose the correct number, i-viii, in boxes 14-20 on your answer sheet.</label> <br />

        <div className="Articles p-3 rounded border-2 border-gray-300 w-[95%]">
          <h6 className=''>List of Headings</h6>  <br />
          <label><span className='mr-3 font-bold '>i</span> A period in cold conditions before the technology is assessed</label> <br />
          <label><span className='mr-3 font-bold '>ii</span>Marketing issues lead to failure</label> <br />
          <label><span className='mr-3 font-bold '>iii</span>Good and bad aspects of steam technology are passed on</label> <br />
          <label><span className='mr-3 font-bold '>iv</span>A possible solution to the issues of today</label><br />
          <label><span className='mr-3 font-bold '>v</span>Further improvements lead to commercial orders</label> <br />
          <label><span className='mr-3 font-bold '>vi</span>Positive publicity at last for this quiet, clean, fast vehicle</label> <br />
          <label><span className='mr-3 font-bold '>vii</span>A disappointing outcome for customers</label> <br />
          <label><span className='mr-3 font-bold '>viii</span>A better option than the steam car arises</label>
        </div>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-4'>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>14</span>Paragraph A
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques14 != "iii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques14 != "" && UserData.ques14 == "iii" && "text-green-700"}
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques14 != "iii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "iii  (Good and bad aspects of steam technology are passed on) – ",
                      hiddenWord: "Good and bad aspects of steam technology are passed on",
                      hiddenWord2: "passed on",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph – A, fourth to seventh line. But these early cars inherited steam’s weakness along with its strengths. The boilers had to be lit by hand, and they required about twenty minutes to build up pressure before they could be driven. Furthermore, their water reservoirs only lasted for about thirty miles before needing replenishment. ** Steam technology has some strengths and weaknesses, which are described in A paragraph. When steam engines were used to make those cars, all the benefits and problems of steam engines came (passed on) in cars."
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
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques15 != "viii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques15 != "" && UserData.ques15 == "viii" && "text-green-700"}
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques15 != "viii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                viii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "viii  (A better option than the steam car arises) ",
                      hiddenWord: "A better option than the steam car arises",
                      hiddenWord2: "passed on",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B, first three lines. But the glory days of steam cars were few. A new technology called the Internal Combustion Engine soon appeared, which offered the ability to drive down the road just moments after starting up. ** The internal combustion engine was the new technology that was started using in cars. It was a better option because it could run cars in a few minutes after starting the engine. On the other hand, steam engines took around 20 minutes to move the car"
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
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques16 != "vi" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques16 != "" && UserData.ques16 == "vi" && "text-green-700"}
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques16 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "vi (Positive publicity at last for this quiet, clean, fast vehicle)",
                      hiddenWord: "fast vehicle",
                      hiddenWord2: "Positive publicity at last for this quiet",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph C, last five lines. The Model B proved to be superior to gasoline automobiles in many ways. Its high-pressure steam drove the engine pistons in virtual silence, in contrast to clattering gas engines which emitted the aroma of burned hydrocarbons. Perhaps most impressively, the Model B was amazingly swift. It could accelerate from zero to sixty miles per hour in just fifteen seconds, a feat described as ‘remarkabl e acceleration’ by automobile magazine in 1914. ** Model B was quiet (virtual silence), clean (did not produce hydrocarbon) and fast (swift). It was publicized in an automobile magazine in 1914."
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
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques17 != "v" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques17 != "" && UserData.ques17 == "v" && "text-green-700"}
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques17 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "v (Further improvements lead to commercial orders)",
                      hiddenWord: "Further improvements lead to commercial orders",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D, With these enhancements, the Dobles’ new car company promised a steam vehicle which would provide all of the convenience of a gasoline car, but with much greater speed, much simpler driving controls, and a virtually silent powerplant. By the following April, the General Engineering Company had received 5,390 deposits for Doble Detroits, which were scheduled for delivery in early 1918. ** - Improvements Doble promised were greater speed, simple driving control and a silent engine. Due to this, they received the order of 5390 cars, which were to be delivered by 1918."
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
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques18 != "vii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques18 != "" && UserData.ques18 == "vii" && "text-green-700"}
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques18 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "vii (A disappointing outcome for customers)",
                      hiddenWord: "A disappointing outcome for customers",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– Paragraph E, second to fourth line. Those buyers who received the handful of completed cars complained that the vehicles were sluggish and erratic, sometimes going in reverse when they should go forward. ** The result of buying cars was disappointing because their vehicles were slow, faulty, and even went backwards."
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
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques19 != "i" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques19 != "" && UserData.ques19 == "i" && "text-green-700"}
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques19 != "i"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "i  (A period in cold conditions before the technology is assessed)",
                      hiddenWord: "A period in cold conditions before the technology is assessed",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– Paragraph F, first five lines, In early 1924, the Doble brothers shipped a Model E to New York City to be road-tested by the Automobile Club of America. After sitting overnight in freezing temperatures, the car was pushed out into the road and left to sit for over an hour in the frosty morning air. At the turn of the key, the boiler lit and reached its operating pressure inside of forty seconds. ** The temperature was freezing at night, and the air was very cold before Model E was being tested in New York."
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
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques20 != "iv" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques20 != "" && UserData.ques20 == "iv" && "text-green-700"}
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
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques20 != "iv"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iv
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "iv (A possible solution to the issues of today) ",
                      hiddenWord: "A possible solution to the issues of today",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph G, last six lines, Astonishingly, an unmodified Doble Model E runs clean enough to pass the emissions laws in California today, and they are pretty strict. It is true that the technology poses some difficult problems, but you cannot help but wonder how efficient a steam car might be with the benefit of modern materials and computers. Under the current pressure to improve automotive performance and reduce emissions, it is not unthinkable that the steam car may rise again. ** Doble’s Model E produces minimal pollution and has successfully met California's stringent emission standards. While steam car engines historically presented challenges, advancements in modern materials and computer technology offer potential solutions to enhance their efficiency. This innovation could significantly mitigate today's pollution issues, potentially paving the way for a resurgence of steam-powered vehicles."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 21- 23</h6> <br />
        <label className=''>Choose the correct letter, <span className='font-bold'>A, B, C or D</span>.</label>
        <label className=''>Choose the correct letter in boxes <span className='font-bold'>21-23</span> on your answer sheet.</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='mb-3'>
          <label htmlFor="ques21"><span className='numberOfQuestion mr-1 mb-2'>21</span>What point does the writer make about the steam car in Paragraph B?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques21 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "A  (Its success was short-lived) ",
                      hiddenWord: "Its success was short-lived",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B, first three lines. But the glory days of steam cars were few. A new technology called the Internal Combustion Engine soon appeared, which offered the ability to drive down the road just moments after starting up. ** The glory days of steam cars were few = Its success was short-lived. It happened because of the invention of the Internal Combustion engine, which was quicker to run than the steam engine."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='' type="radio" value="A" name='ques21' />
              <i className='' >Its success was short-lived. </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='' type="radio" value="B" name='ques21' />
              <i className=''> Not enough cars were made..</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='' type="radio" value="C" name='ques21' />
              <i className=''>Car companies found them hard to sell.</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='' type="radio" value="D" name='ques21' />
              <i className=''>People found them hard to drive.</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques22"><span className='numberOfQuestion mr-1 mb-2'>22</span> When building their first steam car, the Doble brothers
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques22 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "C (needed several attempts to achieve a competitive model) ",
                      hiddenWord: "needed several attempts to achieve a competitive model",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph C, second to eight line,Abner Doble and his three brothers built their first steam car in their parents’ basement. It comprised parts taken from a wrecked early steam car but reconfigured to drive an engine of their own design. Despite its humble origins, their creation showed promise. Though the Doble boys’ third prototype, nicknamed the Model B, still lacked the convenience of an internal combustion engine, it drew the attention of automobile trade magazines due to its numerous improvements over previous steam cars. ** The Doble brothers initially crafted their steam car using parts salvaged from a wrecked vehicle. They went on to develop second and third prototypes, with the third, known as the Model B, significantly surpassing earlier steam car designs. This advanced model garnered attention from automobile trade magazines due to its competitive features. Thus, they undertook three attempts to create an improved steam car model."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='' type="radio" value="A" name='ques22' />
              <i className='' >constructed all the parts themselves. </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='' type="radio" value="B" name='ques22' />
              <i className=''>made written notes at each stage of the construction.</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='' type="radio" value="C" name='ques22' />
              <i className=''>needed several attempts to achieve a competitive model.</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='' type="radio" value="D" name='ques22' />
              <i className=''>sought the advice of experienced people in the car industry</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques23"><span className='numberOfQuestion mr-1 mb-2'>23</span>In order to produce the Model C, the Doble brothers
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques23 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "B (raised financial capital) ",
                      hiddenWord: "raised financial capital",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph D, first three lines. The following year Abner Dobre drove the Model B from Massachusetts to Detroit in order to seek investment in his automobile design, which he used to open the General Engineering Company. He and his brothers immediately began working on the Model C, ** Capital = money used for specific purpose such as developing something or starting a company. Here, “seek investment” means “raise financial capital”."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='' type="radio" value="A" name='ques23' />
              <i className='' > moved production to a different city. </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='' type="radio" value="B" name='ques23' />
              <i className=''> raised financial capital.</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='' type="radio" value="C" name='ques23' />
              <i className=''> employed an additional worker..</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='' type="radio" value="D" name='ques23' />
              <i className=''> abandoned their earlier designs.</i>
            </div>
          </div>
        </div>
      </div> <br />

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 24-26</h6> <br />
        <label className=''>Complete the summary below. <br /> <br />
          Choose ONE WORD ANDIOR A NUMBER from the passage for each answer.<br /> <br />
          Write your answers in boxes 24-26 on your answer sheet..</label><br /> <br />
        <h6>The Model E</h6>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques24">The Model E was road-tested in 1924 by the Automobile Club of America. They found it easy to drive, despite its weight, and it impressed the spectators. A later version of the Model E raised its <span className='numberOfQuestion'>24</span>
            <input type="text" name="ques24" id="ques24" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && !UserData.ques24.match(/speed/gi) && "text-red-600"}
                       ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques24 != "" && UserData.ques24 == "speed" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && !UserData.ques24.match(/speed/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  speed
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 24,
                        Ans1: "",
                        mainAns: "speed",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– Paragraph F, from bottom, third to last line. As the new Doble streamer was further developed and tested, its maximum speed was pushed to over a hundred miles hour"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            while keeping its emissions extremely low.
            The steam car was too expensive for many people and its design was constantly being altered. Under

            <span className='numberOfQuestion'>25</span>
            <input type="text" name="ques25" id="ques25" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && !UserData.ques25.match(/fifty/gi) && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques25 != "" && UserData.ques25 == "fifty" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && !UserData.ques25.match(/fifty/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  fifty
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 25,
                        Ans1: "",
                        mainAns: "fifty",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– Paragraph G, fourth & fifth line. Fewer than fifty of the amazing Model E steam cars had been produced."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            cars were produced before the company went out of business. However, even today, there are Model Es on the road in the US. They are straightforward to maintain, and they satisfy California’s

            <span className='numberOfQuestion'>26</span>
            <input type="text" name="ques26" id="ques26" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && !UserData.ques26.match(/strict/gi) && "text-red-600"}
                 ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques26 != "" && UserData.ques26 == "strict" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && !UserData.ques26.match(/strict/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  strict
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 26,
                        Ans1: "",
                        mainAns: "strict",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph G, fifth line from bottom. Model E runs clean enough to pass the emissions laws in California today, and they are pretty strict."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            emissions laws. Perhaps today’s technology and materials would help us revive the steam car.</label>
        </div>

      </div> <br />










      {/* Passage-3 all Questions */}
      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h5 className='underline'>Reading Passage-3</h5>
        <h6 className=''>Questions 27-30</h6> <br />
        <label className=''>Choose the correct letter, <span className='font-bold'>A, B, C or D</span>.</label>
        <label className=''>Choose the correct letter in boxes <span className='font-bold'>27-30</span> on your answer sheet..</label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='mb-3'>
          <label htmlFor="ques27"><span className='numberOfQuestion mr-1 mb-2'>27</span>The writer describes the Romeo and Juliet lesson in order to demonstrate
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques27 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "",
                      mainAns: "B (how a teacher handles a range of learning needs)",
                      hiddenWord: "how a teacher handles a range of learning needs",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph 1, fourth to fifteenth line. He’s given some of the students copies of No Fear Shakespeare, a kid-friendly translation of the original. For three students, even these literacy demands are beyond them. However, he can ask most of the class about character development, and five of them might be able to support their statements with textual evidence. ** To enable all students to read NO Fear Shakespeare, the teacher used different methods such as giving pens and paper to draw, asking some students to identify the main characters, asking most of the students about character development and support statement with evidence. So, in one class, students were provided with different tasks to understand the meaning of NO Fear Shakespeare."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='' type="radio" value="A" name='ques27' />
              <i className='' >how few students are interested in literature. </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='' type="radio" value="B" name='ques27' />
              <i className=''> how a teacher handles a range of learning needs.</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='' type="radio" value="C" name='ques27' />
              <i className=''>how unsuitable Shakespeare is for most teenagers.</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='' type="radio" value="D" name='ques27' />
              <i className=''>how weaker students can disrupt their classmates’ learning.</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques28"><span className='numberOfQuestion mr-1 mb-2'>28</span>What does the writer say about streaming in the third paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques28 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "",
                      mainAns: "A  (It has a very broad appeal)",
                      hiddenWord: "It has a very broad appeal",
                      hiddenWord2: "concerned",
                      hiddenWord3: "appealing",
                      keyWords: "",
                      explain: "Paragraph 3, last five lines. Within schools, it means selecting students into a ‘stream’ of general ability, or ‘sets’ of subject-specific ability. The practice is intuitively appealing to almost every stakeholder. ** Appealing = attractive. Every stakeholder = concerned people. In the education sector (schools), streaming is attractive (appealing) to everyone who is related (concerned) to this business."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='' type="radio" value="A" name='ques28' />
              <i className='' >It has a very broad appeal. </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='' type="radio" value="B" name='ques28' />
              <i className=''>It favours cleverer students..</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='' type="radio" value="C" name='ques28' />
              <i className=''>It is relatively simple to implement..</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='' type="radio" value="D" name='ques28' />
              <i className=''>It works better in some schools than others..</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques29"><span className='numberOfQuestion mr-1 mb-2'>29</span>What idea is suggested by the reference to Mount Qomolangma in the fifth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques29 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "",
                      mainAns: "C  (students not achieving their full potential)",
                      hiddenWord: "students not achieving their full potential",
                      hiddenWord2: "concerned",
                      hiddenWord3: "appealing",
                      keyWords: "",
                      explain: " Paragraph 5, first to last line. Mixed-ability classes bore students, frustrate parents and burn out teachers. The brightest ones will never summit Mount Qomolangma, and the stragglers won’t enjoy the lovely stroll in the park they are perhaps more suited to. Individuals suffer at the demands of the collective, mediocrity prevails. ** - In classes, there are students with different abilities. Because of some weak students, bright students cannot achieve their full potential, and teachers have to maintain a level of education which is suitable for everyone. So, even bright students remain mediocre."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='' type="radio" value="A" name='ques29' />
              <i className='' > students following unsuitable paths </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='' type="radio" value="B" name='ques29' />
              <i className=''>students attempting interesting tasks</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='' type="radio" value="C" name='ques29' />
              <i className=''> students not achieving their full potential</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='' type="radio" value="D" name='ques29' />
              <i className=''>students not achieving their full potential</i>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques30"><span className='numberOfQuestion mr-1 mb-2'>30</span>What does the word ‘scaffolding’ in the sixth paragraph refer to?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques30 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "",
                      mainAns: "C  (the assistance given to a student in their initial stages of learning)",
                      hiddenWord: "the assistance given to a student in their initial stages of learning",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph 6, sixth to twelve line. This is the gap between what they can achieve only with support – teachers, textbooks, worked examples, parents and so on – and what they can achieve independently. The purpose of teaching is to provide and then gradually remove this ‘scaffolding’ until they are autonomous. ** - Scaffolding = Support/a stage to level up someone or something. Once students reach a certain level of education, this support is removed. So they get it only at the start ( )."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='' type="radio" value="A" name='ques30' />
              <i className='' > the factors which prevent a student from learning effectively </i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='' type="radio" value="B" name='ques30' />
              <i className=''> the environment where most of a student’s learning takes place</i>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='' type="radio" value="C" name='ques30' />
              <i className=''> the assistance given to a student in their initial stages of learning</i>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4">
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='' type="radio" value="D" name='ques30' />
              <i className=''> the setting of appropriate learning targets for a student’s aptitude</i>
            </div>
          </div>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-3'>
        <h6 className=''>Questions 31-35</h6> <br />
        <label className=''>Complete the summary using the list of phrases, A-l, below</label>
        <label className=''>Write the correct letter, A-l, in boxes 31-35 on your answer sheet</label>
        <label className='mt-3 mb-3'>Is streaming effective?</label>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques31">According to Professor John Hattie of the Melbourne Education Research Institute there is very little indication that streaming leads to <span className='numberOfQuestion'>31</span>
            <input type="text" name="ques31" id="ques31" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques31 != "H" && "text-red-600"}
                 ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques31 != "" && UserData.ques31 == "H" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && UserData.ques31 != "H"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  H
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 31,
                        Ans1: "",
                        mainAns: "H  (higher achievements)",
                        hiddenWord: "higher achievements",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– Paragraph 7, third to sixth line. Professor John Hattie, director of the Melbourne Education Research Institute, notes that ‘tracking has minimal effects on learning outcomes’. ** - Higher achievement cannot be obtained if something does not yield much positive learning outcomes. It means the method (tracking/streaming) is not effective in performing well."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            He points out that, in schools which use streaming, the most significant impact is on those students placed in the

            <span className='numberOfQuestion'>32</span>
            <input type="text" name="ques32" id="ques32" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques32 != "D" && "text-red-600"}
                  ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques32 != "" && UserData.ques32 == "D" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && UserData.ques32 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 32,
                        Ans1: "",
                        mainAns: "D  (bottom sets)",
                        hiddenWord: "bottom sets",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– Paragraph 7, sixth to ninth line. What is more, streaming appears to significantly –and negative – affect those students assigned to the lowest sets. ** "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>

            ,especially where a large proportion of them have

            <span className='numberOfQuestion'>33</span>
            <input type="text" name="ques33" id="ques33" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques33 != "F" && "text-red-600"}
                 ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques33 != "" && UserData.ques33 == "F" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && UserData.ques33 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 33,
                        Ans1: "",
                        mainAns: "F  (disadvantaged backgrounds)",
                        hiddenWord: "disadvantaged backgrounds",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– Paragraph 7, ninth to eleventh line. These students tend to have much higher representation of low socioeconomic class "
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>
            . Meanwhile, for the

            <span className='numberOfQuestion'>34</span>
            <input type="text" name="ques34" id="ques34" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques34 != "E" && "text-red-600"}
                 ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques34 != "" && UserData.ques34 == "E" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && UserData.ques34 != "E"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  E
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 34,
                        Ans1: "",
                        mainAns: "E  (brightest pupils)",
                        hiddenWord: "brightest pupils",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– Paragraph 7, bottom third to fifth line. Less significant is the small benefit for those lucky clever students in the higher sets. ** Pupil = Students"
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            , there appears to be only minimal advantage. A further issue is that teachers tend to have.

            <span className='numberOfQuestion'>35</span>
            <input type="text" name="ques35" id="ques35" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques35 != "B" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques35 != "" && UserData.ques35 == "B" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-3" && UserData.ques35 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 35,
                        Ans1: "",
                        mainAns: "B  (lower expectations)",
                        hiddenWord: "lower expectations",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "Paragraph 8, first to seventh line. In the latest update of Hattie’s influential meta-analysis of factors influencing student achievement, one of the most significant factors is the teachers’ estimate of achievement. Streaming students by diagnosed achievement automatically limits what the teacher feels the student is capable of **  Diagnostic test = a test that measure the capabilities of students before teaching to them. When teachers have diagnosed student’s achievement, they limit themselves to that level and do not expect more from them. It means diagnosed achievement limits teachers’ expectations about what students are capable of."
                      }))
                    }}
                  >Exp..</span>
                </div>

                : ""}
            </i>


            of students in streamed groups..</label>
        </div>
        <div className='p-3 rounded w-[90%] sm:w-[60%] border-2 border-gray-300'>
          <label><span className='font-bold mr-2'>A</span> wrong classes</label> <br />
          <label><span className='font-bold mr-2'>B</span>lower expectations</label><br />
          <label><span className='font-bold mr-2'>C</span>average learners </label><br />
          <label><span className='font-bold mr-2'>D</span>bottom sets</label><br />
          <label><span className='font-bold mr-2 '>E</span> brightest pupils </label><br />
          <label><span className='font-bold mr-2'>F</span>disadvantaged backgrounds</label><br />
          <label><span className='font-bold mr-2'>G</span> weaker students </label><br />
          <label><span className='font-bold mr-2'>H</span>higher achievements</label><br />
          <label><span className='font-bold mr-2'>I</span>positive impressions</label><br />

        </div>


      </div> <br />






      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 36-40</h6> <br />
        <label className=''>Do the following statements agree with the views of the writer in Reading Passage 3? <br />
          In boxes 36-40 on your answer sheet, write</label> <br />
        <label className=''>YES : ---   if the statement agrees with the views of the writer <br /><br />
          NO:--if the statement contradicts the views of the writer <br /><br />
          NOT GIVEN:-- if it is impossible to say what the writer thinks about this</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span>The Vygotsky model of education supports the concept of a mixed-ability class.
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques36 != "NO" && "text-red-600"}
                    ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques36 != "" && UserData.ques36 == "NO" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques36 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "Vygotsky",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph 6 last six lines. If we accept this model, it follows that streaming students with similar ZPDs would be an efficient and effective solution. And that forcing everyone on the same hike – regardless of aptitude – would be madness. ** Lev Vygotsky says that forcing all students with different abilities to do the same thing is madness. So, Vygotsky’s model of education does not support the concept of a mixed-ability class"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques37"> <span className='numberOfQuestion'>37</span> Some teachers are uncertain about allowing students to take on MKO roles in the classroom.
            <select name="ques37" id="ques37" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques37 != "NOT GIVEN" && "text-red-600"}
                       ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques37 != "" && UserData.ques37 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques37 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "MKO",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– Paragraph 9, last four lines. While teachers are traditionally the MKOs in the classrooms, the value of knowledgeable student peers must not go unrecognized either. **  There is no information on the uncertainty of teachers about allowing students to take on MKO roles in the classroom."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span> It can be rewarding to teach knowledge which you have only recently acquired.
            <select name="ques38" id="ques38" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques38 != "YES" && "text-red-600"}
                      ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques38 != "" && UserData.ques38 == "YES" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques38 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "MKO",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph 10, last seven lines. There is also something exciting about passing on skills and knowledge that you yourself have just mastered – a certain pride and zeal , a certain freshness to the interaction between ‘teacher’ and ‘learner’ that is often lost by the expert for whom the steps are obvious and the joy of discovery forgotten. ** - Teaching what has been recently learned gives a sense of pride and zeal. So, the answer is yes."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span>The priority should be to ensure that the highest-achieving students attain their goals.
            <select name="ques39" id="ques39" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques39 != "NO" && "text-red-600"}
                       ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques39 != "" && UserData.ques39 == "NO" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques39 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "paragraph",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph 11, fifth to eight line. And today, more than ever, we need the many to flourish – notsuffer at the expense of a few bright stars. ** The Opposite is written in the paragraph as compared to the questions. It (paragraph) says weak students should not suffer due to some bright students. So the answer is no."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques40"> <span className='numberOfQuestion'>40</span>Taking part in collaborative outdoor activities with teachers and classmates can improve student outcomes in the classroom.
            <select name="ques40" id="ques40" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques40 != "NOT GIVEN" && "text-red-600"}
                 ${ReadingShowAnswer == "cambridge-test-3" && UserData.ques40 != "" && UserData.ques40 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value=""></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700'>{ReadingShowAnswer == "cambridge-test-3" && UserData.ques40 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "lookouts",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph 10, last six lines. Once a year, I go on a bike with my class, a mixed bunch of students. It is challenging. The fittest students realize they need to encourage the reluctant. There are lookouts who report back, and extra items to carry for others. We make it – together. **  No such information about the question is given in these lines."
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

export default Panel2_Q2




