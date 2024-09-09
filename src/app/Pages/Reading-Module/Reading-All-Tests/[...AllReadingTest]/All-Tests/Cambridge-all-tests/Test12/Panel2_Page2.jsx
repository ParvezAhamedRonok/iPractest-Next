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
        <h6 className=''>Questions 14-17</h6> <br />
        <label className='mb-1'>Choose the correct letter, <span className='font-bold'>A, B, C or D</span>..</label>
        <label className=''>Choose the correct letter in boxes <span className='font-bold'>14-17</span> on your answer sheet.</label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques14"><span className='numberOfQuestion mr-1 mb-2'>14</span>What is the writer’s main point in the first paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques14 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "A (Our use of technology is having a hidden effect on us)",
                      hiddenWord: "a hidden effect",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "writer’s main point, first paragraph",
                      explain: "  Let’s have a look 1st paragraph, ** The writer says , some striking examples of the use of technology in our life in the beginning. ** Then 4-5 lines, we can see, “ .. .. Unbeknown to most of us, an invisible, game-changing transformation links everyone in this picture: . .. .. … .” ** Here, Unbeknown to most of us, an invisible, game-changing transformation = a hidden effect."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques14' />
              Our use of technology is having a hidden effect on us..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques14' />
              Technology can be used to help youngsters to read..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques14' />
              Travellers should be encouraged to use technology on planes..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques14' />
              Playing games is a more popular use of technology than reading.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques15"><span className='numberOfQuestion mr-1 mb-2'>15</span>What main point does Sherry Turkle make about innovation?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques15 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "B (We should pay attention to what might be lost when innovation occurs.)",
                      hiddenWord: "we should pay attention to what is diminishing or what might be lost when innovation occurs",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "main point, Sherry Turkle, innovation",
                      explain: " Let’s have a look 3rd paragraph, lines 3-5. The writer says, “ . … . .. In this hinge moment between print and digital cultures, society needs to confront what is diminishing in the expert reading circuit, what our children and older students are not developing, and what we can do about it.” ** Here, the final lines suggest that we should pay attention to what is diminishing or what might be lost when innovation occurs."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques15' />
              Technological innovation has led to a reduction in print reading..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques15' />
              We should pay attention to what might be lost when innovation occurs.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques15' />
              We should encourage more young people to become involved in innovation.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques15' />
              There is a difference between developing products and developing ideas.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques16"><span className='numberOfQuestion mr-1 mb-2'>16</span>What point is the writer making in the fourth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques16 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "D (Some brain circuits adjust to whatever is required of them.)",
                      hiddenWord: "some brain circuits",
                      hiddenWord2: "adjust modify",
                      hiddenWord3: "",
                      keyWords: "point, writer making, fourth paragraph",
                      explain: " Let’s have a look 4th paragraph, first lines, the writer says, “We know from research that the reading circuit is not given to human beings through a genetic blueprint like vision or language; it needs an environment to develop. Further, it will adapt to that environment’s requirements – . . … ..” ** Here,** the reading circuit = some brain circuits,**   adapt = adjust modify"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques16' />
              Humans have an inborn ability to read and write.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques16' />
              Reading can be done using many different mediums.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques16' />
              Writing systems make unexpected demands on the brain.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques16' />
              Some brain circuits adjust to whatever is required of them.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques17"><span className='numberOfQuestion mr-1 mb-2'>17</span>According to Mark Edmundson, the attitude of college students
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques17 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "B (has influenced what they select to read.)",
                      hiddenWord: "has influenced what they select to read",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Mark Edmundson, attitude, college students",
                      explain: " Let’s have a look 5th paragraph, lines 2-4. ** The writer says, “.. …. .. . English literature and scholar and teacher Mark Edmundson describes how many college students actively avoid the classic literature of the 19th and 20th centuries in favour of something simpler as they no longer have the patience to read longer, denser, more difficult texts. .. . .” ** Here, ** college students actively avoid the classic literature of the 19th and 20th centuries = the attitude of college students has influenced what they select to read **   Avoid = not select"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques17' />
              has changed the way he teaches.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques17' />
              has influenced what they select to read.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques17' />
              does not worry him as much as it does others.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques17' />
              does not match the views of the general public.
            </label>
            </div>
          </div>
        </div>
      </div> <br />

      <div className='Titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 18-22</h6> <br />
        <label className='mb-1'>Write the correct letter, <span className='font-bold'>A-H, in boxes 18-22</span> on your answer sheet.</label>
        <label className=''>Complete the summary using the list of words, A-H, below.</label> <br />
      </div>



      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <h6 className='mt-2 mb-3'>Studies on digital screen use</h6>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques18">There have been many studies on digital screen use, showing some  </label>
          <span className='numberOfQuestion'>18</span>
          <input type="text" name="ques18" id="ques18" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques18 != "D" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques18 != "" && UserData.ques18 == "D" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-12" && UserData.ques18 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "D (worrying)",
                      hiddenWord: "worrying",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "many studies, digital screen use, showing, trends",
                      explain: " Look at the Paragraph 6,  line 1-2. ** Here, the writer says, “Multiple studies show that digital screen use may be causing a variety of troubling downstream effects on reading comprehension in older high school and college students. .. ..”**   Here, Multiple studies = many studies, **   troubling = worrying"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> trends. Psychologist Anne Mangen gave high-school students a short story to read, half using digital and half using print mediums. Her team then used a question-and-answer technique to find out how</p>

          <span className='numberOfQuestion'>19</span>
          <input type="text" name="ques19" id="ques19" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques19 != "H" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques19 != "" && UserData.ques19 == "H" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-12" && UserData.ques19 != "H"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                H
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "H (thorough)",
                      hiddenWord: "thorough",
                      hiddenWord2: "understanding",
                      hiddenWord3: "",
                      keyWords: "Psychologist Anne Mangen, story, read, half, digital, half, print mediums, question-and-answer technique, how, each group’s",
                      explain: "Look at the Paragraph 6, line 3-6 ** The writer explains, “ . .. . In Stavanger, Norway, psychologist Anne Mangen and her colleagues studied how high school students comprehend the same material in different mediums. Mangen’s group asked subjects questions about a short story whose plot had universal student appeal; half of the students read the story on a tablet, the other half in paperback. .. .. .. ….. result indicated that who read on print were superior in their comprehension” ** Here, superior in their comprehension = thorough in understanding ** half of the students read the story on a tablet = half using digital medium,** other half in paperback = half using print medium,** asked subjects questions = used a question-and-answer technique"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>

          <p>each group’s understanding of the plot was. The findings showed a clear pattern in the responses, with those who read screens finding the order of information </p>

          <span className='numberOfQuestion'>20</span>
          <input type="text" name="ques20" id="ques20" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques20 != "F" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques20 != "" && UserData.ques20 == "F" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-12" && UserData.ques20 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "F (hard)",
                      hiddenWord: "hard",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "findings, showed, responses, who read screens, order of information, to recall",
                      explain: "Look at the Paragraph 6, line 6-8 ** The writer says, “ . .. . .. Results indicated that students who read on print were superior in their comprehension to screen-reading peers, particularly in their ability to sequence detail and reconstruct the plot in chronological order.”** Here, ** students who read on print were superior in their comprehension to screen-reading peers = those who read screens finding the order of information hard to recall"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>

          <p>to recall.Studies by Ziming Liu show that students are tending to read</p>

          <span className='numberOfQuestion'>21</span>
          <input type="text" name="ques21" id="ques21" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques21 != "B" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques21 != "" && UserData.ques21 == "B" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-12" && UserData.ques21 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "B (isolated)",
                      hiddenWord: "isolated",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Ziming Liu, tending to read, words and phrases, save time",
                      explain: "Look at the Paragraph 7, line 1-5 ** The writer says, “Ziming Liu from San Jose State University has conducted a series of studies which indicate that the ‘new norm’ in reading is skimming, involving word-spotting and browsing through the text. Many readers now use a pattern when reading in which they sample the first line and then word-spot through the rest of the text. When the reading brain skims like this, it reduces time allocated to deep reading processes. .. .. .. .” ** Here, ** word-spot through the rest of the text = read isolated words and phrases, **      word-spotting = isolated words **  it reduces time = save time"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>


          <p> words and phrases in a text to save time. This approach, she says, gives the reader a superficial understanding of the </p>

          <span className='numberOfQuestion'>22</span>
          <input type="text" name="ques22" id="ques22" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques22 != "C" && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques22 != "" && UserData.ques22 == "C" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-12" && UserData.ques22 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "C (emotional)",
                      hiddenWord: "emotional",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "superficial understanding, content of material, leaving no time",
                      explain: "Look at the Paragraph 7, line 5-6 ** The writer says, “.. . . In other words, we don’t have time to grasp complexity, to understand another’s feelings, to perceive beauty, and to create thoughts of the reader’s own.” ** Here, ** we don’t have time to grasp complexity = superficial understanding, ** understand another’s feelings = understanding of the emotional content of material **     feelings = emotions"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}
          </i>

          <p>  content of material, leaving no time for thought.</p>
        </div> <br />
        <div className='p-3'>
          <p><span className='font-bold mr-2'>A</span> fast</p>
          <p><span className='font-bold mr-2'>B</span> isolated</p>
          <p><span className='font-bold mr-2'>C</span>emotional</p>
          <p><span className='font-bold mr-2'>D</span> warrying</p>
          <p><span className='font-bold mr-2'>E</span> many</p>
          <p><span className='font-bold mr-2'>F</span>hard</p>
          <p><span className='font-bold mr-2'>G</span>combined</p>
          <p><span className='font-bold mr-2'>H</span>thorough</p>

        </div>
      </div> <br />











      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 23-26</h6>
        <label className=''>Do the following statements agree with the views of the writer in <span className='font-bold'>Reading Passage 2</span>?<br /><br />
          In boxes 23-26 on your answer sheet, write</label><br />
        <label className='mt-2 mb-2 p-2'>
          TRUE ---  if the statement agrees with the views of the writer <br /> <br />
          FALSE  ---  if the statement contradicts the views of the writer<br /> <br />
          NOT GIVEN  --  if it is impossible to say what the writer thinks about this<br /> <br />
        </label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2"> <span className='numberOfQuestion'>23</span> The medium we use to read can affect our choice of reading content.
            <select name="ques23" id="ques23" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques23 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques23 != "" && UserData.ques23 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques23 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "choice of reading content",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "medium, use, affect, choice, reading content",
                      explain: " Look at the Paragraph 8, line 3-4. ** The writer says here, “ . .. .. It is about how we all have begun to read on various mediums and how that changes not only what we read, but also the purposes for which we read. .. .. .” ** Here, what we read = choice of reading content"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques24"> <span className='numberOfQuestion'>24</span>Some age groups are more likely to lose their complex reading skills than others.
            <select name="ques24" id="ques24" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques24 != "FALSE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques24 != "" && UserData.ques24 == "FALSE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques24 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "FALSE",
                      hiddenWord: "it is equal for all age groups",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "some age groups, lose, complex reading skills, than others",
                      explain: "  Look at the Paragraph 9, first line ** The writer says, “There’s an old rule in neuroscience that does not alter with age: use it or lose it. . .. ..” ** Here , ** does not alter with age = it is equal for all age groups, ** use it or lose it = use the reading skills or lose it"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques25"> <span className='numberOfQuestion'>25</span>False information has become more widespread in today’s digital era.
            <select name="ques25" id="ques25" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques25 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques25 != "" && UserData.ques25 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques25 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "So the answer is not given.",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "False information, more widespread, today’s digital era",
                      explain: " Look at the Paragraph 8, line 5-8 ** The writer said that, due to a lot of information, we go to familiar (known) information which is unchecked and receive and require no analysis. It makes likely to influence by false information. But nowhere the writer talk about false information has become widespread. **   So the answer is not given. "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>


        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques26"> <span className='numberOfQuestion'>26</span> We still have opportunities to rectify the problems that technology is presenting.
            <select name="ques26" id="ques26" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques26 != "TRUE" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques26 != "" && UserData.ques26 == "TRUE" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques26 != "TRUE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                TRUE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "",
                      mainAns: "TRUE",
                      hiddenWord: "still have opportunities.",
                      hiddenWord2: "rectify the problems",
                      hiddenWord3: "",
                      keyWords: "still have opportunities, rectify, problems, technology, presenting",
                      explain: " Look at the final Paragraph, line 3-4 ** The writer says, “ … . The story of the changing reading brain is hardly finished. We possess both the science and the technology to identify and readdress the changes in how we read before they become entrenched. .. .. .” **   Here, hardly finished = still have opportunities, **  readdress the changes = rectify the problems **   Entrenched = firmly established "
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />






      {/* Akhno baki nicher kaj ses kora */}
      {/* for Passage-3 all Questions--- */}
      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-4 w-full text-center'>
        <h5>Reading Passage-3 </h5>
        <h6 className=''> Questions 27-32</h6><br />
        <label className=''>Reading Passage 3 has six sections, A-F.<br /><br />Choose the correct heading for each section from the list of headings below. <br />
          choose the correct number, i-viii, in boxes 27-32 on your answer sheet</label><br /> <br />
      </div>
      <div className='Titles pl-[10px] sm:pl-[25px] mb-4 mt-4 '>
        <h6 className='mt-2 mb-3 '>List of Headings</h6>
        <p><span className='font-bold mr-2'>i</span> An increasing divergence of attitudes towards AI</p> <br />
        <p><span className='font-bold mr-2'>ii</span> Reasons why we have more faith in human judgement than in AI</p> <br />
        <p><span className='font-bold mr-2'>iii</span>  The superiority of AI projections over those made by humans </p> <br />
        <p><span className='font-bold mr-2'>iv</span> The process by which AI can help us make good decisions </p><br />
        <p><span className='font-bold mr-2'>v</span> The advantages of involving users in AI processes </p> <br />
        <p><span className='font-bold mr-2'>vi</span>Widespread distrust of an AI innovation</p> <br />
        <p><span className='font-bold mr-2'>vii</span>Encouraging openness about how AI functions</p>  <br />
        <p><span className='font-bold mr-2'>viii</span>A surprisingly successful AI application</p> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-4">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span>Sections-A
            <select name="ques27" id="ques27" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques27 != "iii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques27 != "" && UserData.ques27 == "iii" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques27 != "iii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                iii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 27,
                      Ans1: "iii  (The superiority of AI projections over those made by humans)",
                      mainAns: "",
                      hiddenWord: "The superiority of AI projections over those made by humans",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Section A",
                      explain: " Let’s have a look 1st paragraph, ** The first paragraph describes the prediction accuracy of Artificial Intelligence (AI).Then, in the 2nd paragraph, lines 1-2 ** “Many decisions in our lives require a good forecast, and AI is almost always better at forecasting than we are. . .. .” ** Here, ** AI is almost always better at forecasting than we are = The superiority of AI projections over those made by humans. Forecasting = predict or projection"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span>Sections-B
            <select name="ques28" id="ques28" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques28 != "vi" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques28 != "" && UserData.ques28 == "vi" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques28 != "vi"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vi
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 28,
                      Ans1: "vi  (Widespread distrust of an AI innovation)",
                      mainAns: "",
                      hiddenWord: "Widespread distrust",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Section B",
                      explain: " Let’s have a look 1st paragraph of section B, take a look at the first few lines, as the writer says here, “Take the case of Watson for Oncology, one of technology giant IBM’s supercomputer programs. Their attempt to promote this program to cancer doctors was a PR disaster. . .. . .” ** Here, ** Watson for Oncology = an AI innovation by IBM, PR disaster or Public Relations disaster = widespread mistrust Then, in the following few lines, the writer describes the mistrust in detail."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span>Sections-C
            <select name="ques29" id="ques29" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques29 != "ii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques29 != "" && UserData.ques29 == "ii" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques29 != "ii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                ii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 29,
                      Ans1: "ii (Reasons why we have more faith in human judgement than in AI)",
                      mainAns: "",
                      hiddenWord: "one of the main reasons why we have more faith in human judgement than",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Section C",
                      explain: " Let’s have a look 1st paragraph of section C, take a close look at lines 2-5, where the writer explains why we have more faith in human judgement than in AI, “ . . .. .. . Trust in other people is often based on our understanding of how others think and having experience of their reliability. This helps create a psychological feeling of safety. AI, on the other hand, is still fairly new and unfamiliar to most people. .. .. .” ** Here, ** create a psychological feeling of safety = one of the main reasons why we have more faith in human judgement than in AI"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques30"><span className='numberOfQuestion'>30</span>Sections-D
            <select name="ques30" id="ques30" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques30 != "i" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques30 != "" && UserData.ques30 == "i" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques30 != "i"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                i
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 30,
                      Ans1: "i (An increasing divergence of attitudes towards AI)",
                      mainAns: "",
                      hiddenWord: "divergence of attitudes towards AI",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Section D",
                      explain: " Let’s have a look 1st paragraph of section D, lines 3-6 say, “ . . … .. It was found that, regardless of whether the film they watched depicted AI in a positive or negative light, simply watching a cinematic vision of our technological future polarised the participants’ attitudes. Optimists became more extreme in their enthusiasm for AI and sceptics became even more guarded.” ** Here, ** polarised the participants’ attitudes = divergence of attitudes towards AI, Optimists became more extreme & sceptics became even more guarded = an increasing divergence"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span>Sections-E
            <select name="ques31" id="ques31" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques31 != "vii" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques31 != "" && UserData.ques31 == "vii" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques31 != "vii"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                vii
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 31,
                      Ans1: "vii (Encouraging openness about how AI functions)",
                      mainAns: "",
                      hiddenWord: "encouraging openness about how AI functions",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Section E",
                      explain: " Let’s have a look 1st paragraph of section E, line 1. ** The writer says, “Fortunately, we already have some ideas about how to improve trust in AI. . .. ..” ** Here, how to improve trust in AI = encouraging openness about how AI functions ** Then, in the following lines and in the following paragraph the writer explains in detail how we can encourage openness or improve trust about the functions of AI."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"><span className='numberOfQuestion'>32</span>Sections-F
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques32 != "v" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques32 != "" && UserData.ques32 == "v" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="i">i</option>
              <option value="ii">ii</option>
              <option value="iii">iii</option>
              <option value="iv">iv</option>
              <option value="v">v</option>
              <option value="vi">vi</option>
              <option value="vii">vii</option>
              <option value="viii">viii</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques32 != "v"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                v
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "v (The advantages of involving users in AI processes)",
                      mainAns: "",
                      hiddenWord: "involving users in AI processes",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Section F",
                      explain: "Let’s have a look 1st paragraph of section F, first line. ** Here, the writer says, “Research suggests that allowing people some control over AI decision-making could also improve trust and enable AI to learn from human experience. .. … .” **  Here, ** allowing people some control over AI decision-making = involving users in AI processes, ** improve trust and enable AI to learn from human experience = the advantages"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

      </div> <br />







      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Question 33-35</h6> <br />
        <label className=''>Choose the correct letter, <span className='font-bold'>A, B, C or D</span>. <br /> <br />
          Write the correct letter in boxes <span className='font-bold'>33-35</span> on your answer sheet.</label><br /> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques33"><span className='numberOfQuestion mr-1 mb-2'>33</span>What is the writer doing in Section A?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques33 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "C (highlighting the existence of a problem.)",
                      mainAns: "",
                      hiddenWord: "the existence of a problem",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "the writer doing, Section A",
                      explain: "Let’s have a look 1st paragraph, here the writer explains how AI can help us. ** Then, in the second paragraph, the author of the text says in lines 2-3, “ . …. . . . Yet for all these technological advances, we still seem to deeply lack confidence in AI predictions. .. .. ..” ** Here, we still seem to deeply lack confidence in AI predictions = the existence of a problem"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques33' />
              providing a solution to a concern
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques33' />
              justifying an opinion about an issue
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques33' />
              highlighting the existence of a problem
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques33' />
              explaining the reasons for a phenomenon
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques34"><span className='numberOfQuestion mr-1 mb-2'>34</span>  According to Section C, why might some people be reluctant to accept AI?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques34 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "B (Its complexity makes them feel that they are at a disadvantage.)",
                      mainAns: "",
                      hiddenWord: "some people might be reluctance to accept AI",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Section C, why, some people, reluctant, accept AI",
                      explain: "Look at the 1st Paragraph of section C,  line 1-2 ** The writer explains,  “This is just one example of people’s lack of confidence in AI and their reluctance to accept what AI has to offer. .. . .” ** Here, ** their reluctance to accept what AI has to offer = some people might be reluctance to accept AI ** Then, in the final lines of the same paragraph, the author says, “ . . .. . AI’s decision- making process is usually too difficult for most people to comprehend. . .. ..” ** Here, ** usually too difficult = AI’s complexity, ** for most people to comprehend = people are at a disadvantage"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques34' />
              They are afraid it will replace humans in decision-making jobs..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques34' />
              Its complexity makes them feel that they are at a disadvantage.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques34' />
              They would rather wait for the technology to be tested over a period of time.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques34' />
              Misunderstandings about how it works make it seem more challenging than it is.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques35"><span className='numberOfQuestion mr-1 mb-2'>35</span> What does the writer say about the media in Section C of the text?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques35 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "A (It leads the public to be mistrustful of AI.)",
                      mainAns: "",
                      hiddenWord: "leads the public to be mistrustful of AI",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "leads the public to be mistrustful of AI",
                      explain: "Look at Section C,  line 3-5 ** The writer says, “ . . .. . Embarrassing AI failures receive a disproportionate amount of media attention, emphasising the message that we cannot rely on technology. .. .. .. .” **Here, we cannot rely on technology = leads the public to be mistrustful of AI"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-2 ml-2' type="radio" value="A" name='ques35' />
              It leads the public to be mistrustful of AI.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques35' />
              It devotes an excessive amount of attention to AI..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques35' />
              Its reports of incidents involving AI are often inaccurate.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-2 ml-2' type="radio" value="D" name='ques35' />
              It gives the impression that AI failures are due to designer error.
            </label>
            </div>
          </div>
        </div>
      </div> <br />







      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 36-40</h6> <br />
        <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 3? <br /> <br />
          In boxes 36-40 on your answer sheet, write</label><br /> <br />
        <label className='p-2 mt-2 mb-2'>YES  --- if the statement agrees with the claims of the writer<br /> <br />

          NO  ---  if the statement contradicts the claims of the writer<br /> <br />

          NOT GIVEN  ---  if it is impossible to say what the writer thinks about this</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span>Subjective depictions of AI in sci-fi films make people change their opinions about automation.
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques36 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques36 != "" && UserData.ques36 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques36 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "NO",
                      mainAns: "",
                      hiddenWord: "ubjective depictions of AI in sci-fi films DO NOT make people change their opinions about automation",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Subjective depictions, AI, sci-fi films, change, opinions, automation",
                      explain: "Look at Section D, 1st paragraph, first line. ** The writer says here, “Feelings about AI run deep. In a recent experiment, people from a range of backgrounds were given various sci-fi films about AI to watch and then asked questions about automation in everyday life. .. . . .” ** Then, in the same paragraph, the final lines say, “ . . .. . Optimists became more extreme in their enthusiasm for AI and sceptics became even more guarded.” ** Here, these lines suggest that subjective depictions of AI in sci-fi films DO NOT make people change their opinions about automation."
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span>Portrayals of AI in media and entertainment are likely to become more positive.
            <select name="ques37" id="ques37" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques37 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques37 != "" && UserData.ques37 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques37 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "NOT GIVEN",
                      mainAns: "",
                      hiddenWord: "positively",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Portrayals of AI, media and entertainment, likely to become, more positive",
                      explain: "There is discussion related to media and entertainment in D section but nothing is discussed whether the media will portray AI positively or not. "
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span>Rejection of the possibilities of AI may have a negative effect on many people’s lives.
            <select name="ques38" id="ques38" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques38 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques38 != "" && UserData.ques38 == "YES" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques38 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "YES",
                      mainAns: "",
                      hiddenWord: "may have a negative effect on many people’s lives",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "Rejections, possibilities of AI, may have, negative effect, many people’s lives",
                      explain: "Look at Section D, 2nd paragraph, final lines. ** Here the writer says, “ . . . .. More pertinently, refusing to accept the advantages offered by AI could place a large group of people at a serious disadvantage.” ** Here, ** refusing to accept the advantages offered by AI = Rejection of the possibilities of AI, ** could place a large group of people at a serious disadvantage = may have a negative effect on many people’s lives "
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span> Familiarity with AI has very little impact on people’s attitudes to the technology.
            <select name="ques39" id="ques39" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques39 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques39 != "" && UserData.ques39 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques39 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "NO",
                      mainAns: "",
                      hiddenWord: "contradict with question",
                      hiddenWord2: "has GREAT impact on people’s attitudes to the technology",
                      hiddenWord3: "",
                      keyWords: " Familiarity with AI, very little impact, people’s attitudes, technology",
                      explain: "Look at Section E, 1st paragraph, ** line 2-3 ** The writer says, “ . . .. . . Simply having previous experience with AI can significantly improve people’s opinions about the technology, . .. . ..” ** Here, ** having previous experience with AI = Familiarity with AI, ** significantly improve people’s opinions about the technology = has GREAT impact on people’s attitudes to the technology This given lines contradict with question"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span>AI applications which users are able to modify are more likely to gain consumer approval.
            <select name="ques40" id="ques40" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques40 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-12" && UserData.ques40 != "" && UserData.ques40 == "YES" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-12" && UserData.ques40 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "YES",
                      mainAns: "",
                      hiddenWord: "AI applications which users are able to modify",
                      hiddenWord2: "more likely to gain consumer approval",
                      hiddenWord3: "",
                      keyWords: "AI applications, users, able to modify, more likely, gain consumer approval",
                      explain: " Look at Section F, 1st paragraph, first few lines. ** Here the writer says, “Research suggests that allowing people some control over AI decision-making could also improve trust and enable AI to learn from human experience. .. .. ..” ** Here, allowing people some control over AI decision-making = AI applications which users are able to modify, ** improve trust = more likely to gain consumer approval"
                    }))
                  }}
                >Exp..</span>
              </div>

              : ""}</i>
          </label>
        </div>

      </div> <br />

    </section >
  )
}

export default Panel2_Q2




