"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "../../../../../../../../contexts/ContextProvider";
// end of importing---------->>



function Panel2_Q2({ handleChange, UserData }) {
  const { ReadingShowAnswer, setReadingShowAnswer , explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
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
        <h6 className=''>Questions 14-18</h6><br />
        <label className='mb-1'>Reading Passage 2 has six paragraphs, <span className='font-bold'>A-f</span> .</label> <br />
        <label className=''>Which section contains the following information? <br /> <br />
          Choose the correct letter, A-F, in boxes 14-18 on your answer sheet.</label> <br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>an explanation of the need for research to focus on individuals with a fairly consistent income
            <select name="ques14" id="ques14" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques14 != "E" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques14 != "" && UserData.ques14 == "E" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques14 != "E"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                E
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 14,
                      Ans1: "",
                      mainAns: "E",
                      hiddenWord: "different people",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "E paragraph’s second to fourth line. One way to look at whether education causes economic growth is to ‘hold wealth constant’. This involves followings the lives of different people with the same level of wealth over a period of time. ** Fairly consistent income = the same level of wealth over a period of time. The research on whether education causes economic growth needs to focus (following) on individuals (different people) with the same level of income over time."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques15"> <span className='numberOfQuestion'>15</span> examples of the sources the database has been compiled from
            <select name="ques15" id="ques15" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques15 != "A" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques15 != "" && UserData.ques15 == "A" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques15 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 15,
                      Ans1: "",
                      mainAns: "A",
                      hiddenWord: "different people`````",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "A paragraph’s third to sixth line. It includes court records, guild ledgers, parish registers, village censuses, tax lists and – the most recent addition – 9,000 handwritten inventories listing over a million personal possessions belonging to ordinary women and men across three centuries. ** In the beginning of the paragraph, the writer mentions a large database. Then, in the following lines, from the third to the sixth line, the writer explains how the information in the database was collected. The sources include guild ledgers, parish registers, village censuses, tax lists, and over 9,000 handwritten inventories that list more than a million personal possessions of ordinary people from three centuries."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span>an account of one individual’s refusal to obey an order
            <select name="ques16" id="ques16" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques16 != "D" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques16 != "" && UserData.ques16 == "D" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques16 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 16,
                      Ans1: "",
                      mainAns: "D",
                      hiddenWord: "a medieval association of craftsmen or merchants, often having considerable power",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– D paragraph’s eighth to twelfth line. The database also reveals the case of Juliana Schweickherdt, a 50- year-old spinster living in the small Black Forest community of Wildberg, who was reprimanded in 1752 by the local weavers’ guild for ‘weaving cloth and combing wool, counter to the guild ordinance’. When Juliana continued taking jobs reserved for male guild members, she was summoned before the guild court and told to pay a fine equivalent to one third of a servant’s annual wage. **  Weaving cloth and combing wool was only allowed to be done by men, but an old lady, Juliana Schweickherdt, kept doing it despite ordering her to stop this work by local wavers. That is how she refused to obey the orders of the weaver’s guild(a medieval association of craftsmen or merchants, often having considerable power)."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>a reference to a region being particularly suited to research into the link between education and economic growth
            <select name="ques17" id="ques17" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques17 != "F" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques17 != "" && UserData.ques17 == "F" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques17 != "F"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                F
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 17,
                      Ans1: "",
                      mainAns: "F",
                      hiddenWord: "the people of that area remained poor",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– F paragraph’s third to fifth line. ‘German-speaking central Europe is an excellent laboratory for testing theories of economic growth,’ she explains. Between 1600 and 1900, literacy rates and book ownership were high and yet the region remained poor. **  The central idea of this whole passage is to find a link between education and economic growth. But in a German-speaking area of Europe, between 1600 and 1900, the number of educated people increased, and their book ownership was also high. Despite that, the people of that area remained poor. So, it is the best area to research whether education makes people rich or not."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques18"> <span className='numberOfQuestion'>18</span>examples of the items included in a list of personal possessions
            <select name="ques18" id="ques18" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques18 != "C" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques18 != "" && UserData.ques18 == "C" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques18 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 18,
                      Ans1: "",
                      mainAns: "C",
                      hiddenWord: "the people of that area remained poor",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "C paragraph’s first part, first to fifth line. In the handwritten inventories that Ogilvie is analysing are the belongings of women and men at marriage, remarriage and death. From badger skins to Bibles, sewing machines to scarlet bodices – the villagers’ entire worldly goods are included. Inventories of agricultural equipment and craft tools reveal economic activities; ownership of books and education related objects like pens and slates suggests how people learned. ** Example:- Inventory = a complete list of items. The list of personal possessions Ogilvie made for analysis has badger skins, Bibles, sewing machines, scarlet bodices, agriculture equipment, craft tools, books, pens and slates."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 19-22</h6><br />
        <label className=''>Complete the summary below. <br /><br />
          Choose ONE WORD from the passage for each answer.<br /> <br />
          Write your answers in boxes 19-22 on your answer sheet.</label><br /> <br />
        <label>Demographic reconstruction of two German communities</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques19">The database that Ogilvie and her team has compiled sheds light on the lives of a range of individuals, as well as those of their </label>
          <span className='numberOfQuestion'>19</span>
          <input type="text" name="ques19" id="ques19" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques19.match(/descendants/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques19 != "" && UserData.ques19 == "descendants" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques19.match(/descendants/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                descendants
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 19,
                      Ans1: "",
                      mainAns: "descendants",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "D paragraph’s first three lines. Ogilvie and her team have been building the vast database of material possessions on top of their full demographic reconstruction of the people who lived in these two German communities. ‘We can follow the same people – and their descendants – across 300 years of educational and economic change, **  Descendants = Children or grandchildren"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>

          <p> , over a 300-year period. For example, Ana Regina and Magdalena Riethmüllerin were reprimanded for reading while they should have been paying attention to a</p>

          <span className='numberOfQuestion'>20</span>
          <input type="text" name="ques20" id="ques20" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques20.match(/sermon/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques20 != "" && UserData.ques20 == "sermon" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques20.match(/sermon/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                sermon
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 20,
                      Ans1: "",
                      mainAns: "sermon",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "D paragraph’s fifth to sixth line. Ana Regina and Magdalena Riethmüllerin, who were chastised in 1707 for reading books in church instead of listening to the sermon. ** Chastise = Rebuke or Reprimand. Ana Regina and Magdalena Riethmüllerin were Chastise for reading books instead of paying attention (listening) to the sermon ( a talk on a religious or moral subject, especially one given during a church service and based on a passage from the Bible)."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>

          <p>.There was also Juliana Schweickherdt, who came to the notice of the weavers’ guild in the year 1752 for breaking guild rules. As a punishment, she was later given a</p>

          <span className='numberOfQuestion'>21</span>
          <input type="text" name="ques21" id="ques21" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques21.match(/fine/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques21 != "" && UserData.ques21 == "fine" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques21.match(/fine/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                fine
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 21,
                      Ans1: "",
                      mainAns: "fine",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– D paragraph’s eleven to thirteenth line. When Juliana continued taking jobs reserved for male guild members, she was summoned before the guild court and told to pay a fine equivalent to one-third of a servant’s annual wage"
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
          <p> Cases like this illustrate how the guilds could prevent </p>

          <span className='numberOfQuestion'>22</span>
          <input type="text" name="ques22" id="ques22" onChange={handleChange}
            className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques22.match(/innovation/gi) && "text-red-600"}
            ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques22 != "" && UserData.ques22 == "innovation" && "text-green-700"}
            `} />
          <i className='text-green-600 font-bold mr-2 ml-2'>
            {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques22.match(/innovation/gi)
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                innovation
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 22,
                      Ans1: "",
                      mainAns: "innovation",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "D paragraph’s second-last line. The dominance of guilds not only prevented people from using their skills, but also held back (prevent) even the simplest industrial innovation."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}
          </i>
          <p> and stop skilled people from working</p>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 23 and 24</h6><br />
        <label className=''>Choose TWO letters <br /><br />
          Chooose Write the correct letters in boxes 23 and 24 on your answer sheet. <br /> <br />
          <span className='font-bold'>Which TWO</span> of the following statements does the writer make about literacy rates in Section B?
        </label><br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques23"><span className='numberOfQuestion mr-1 mb-2'>23</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques23 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 23,
                      Ans1: "",
                      mainAns: "B (Literacy rates in Germany between 1600 and 1900 were very good))",
                      hiddenWord: "",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "B paragraph fourth to sixth line. Between 1600 and 1900, England had only mediocre literacy rates by European standards, yet its ** economy grew fast and it was the first country to industrialise. During this period, Germany and Scandinavia had excellent literacy rates. ** Between 1600 and 1900, England had mediocre (not very good) literacy, but Germany had excellent (very good) literacy rates."
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
              Very little research has been done into the link between high literacy rates and improved earnings.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques23' />
              Literacy rates in Germany between 1600 and 1900 were very good.t
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques23' />
              There is strong evidence that high literacy rates in the modern world result in economic growth.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques24"><span className='numberOfQuestion mr-1 mb-2'>24</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques24 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 24,
                      Ans1: "",
                      mainAns: "A (Economic growth can help to improve literacy rates)",
                      hiddenWord: "Economic growth can help to improve literacy rates",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "B paragraph’s last three line. ‘Modern cross country analyses have also struggled to find evidence that education causes economic growth, even though there is plenty of evidence that growth increases education,’ she adds. ** It is evident that economic growth increase (improve) education (literacy rate)."
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
              Economic growth can help to improve literacy rates.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques24' />
              help each other to realise their goals.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques24' />
              England is a good example of how high literacy rates helped a country industrialise..
            </label>
            </div>
          </div>
        </div>

      </div> <br />





      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 25 and 26</h6><br />
        <label className=''>Choose TWO letters <br /><br />
          Chooose  the correct letters in boxes 25 and 26 on your answer sheet.</label><br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label><span className='font-bold'>Which TWO</span> of the following statements does the writer make in Section F about guilds in German-speaking Central Europe between 1600 and 1900?</label>
          <label htmlFor="ques25"><span className='numberOfQuestion mr-1 mb-2'>25</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques25 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 25,
                      Ans1: "",
                      mainAns: "B (They were opposed to people moving to an area for work)",
                      hiddenWord: "They were opposed to people moving to an area for work",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "F paragraph first part’s last two lines. In villages throughout the region, guilds blocked labour migration and resisted changes that might reduce their influence. **  Local guilds blocked (opposed) people moving for labour migration (moving to an area for work)."
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
              They helped young people to learn a skill.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques25' />
              They were opposed to people moving to an area for work.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques25' />
              They kept better records than guilds in other parts of the world.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques26"><span className='numberOfQuestion mr-1 mb-2'>26</span>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques26 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 26,
                      Ans1: "",
                      mainAns: "A (They opposed practices that threatened their control over a trade)",
                      hiddenWord: "They opposed practices that threatened their control over a trade",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " F paragraph first part’s fifth to seventh line. It was also the case that local guilds and merchant associations were extremely powerful and legislated against anything that undermined their monopolies. ** Local guilds and merchant associations made rules (legislated) against anything (practices) that undermined (threatened/reduced the power) their monopolies (an exclusive control over a service or commodity)."
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
              They opposed practices that threatened their control over a trade.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-2 ml-2' type="radio" value="B" name='ques26' />
              They predominantly consisted of wealthy merchants..
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-2 ml-2' type="radio" value="C" name='ques26' />
              how high literacy rates helped a country industrialise.
            </label>
            </div>
          </div>
        </div>

      </div> <br />





      {/* Akhno baki nicher kaj ses kora */}
      {/* for Passage-3 all Questions--- */}
      <div className='Titles pl-[10px] sm:pl-[25px] mt-4 '>
        <h5 className=''>Reading  Passage-3 </ h5>
        <h6>Questions 27-32</h6> <br />
        <label className=''>Which paragraph contains the following information?<br /><br />Write the correct letter, A-H, in boxes 27-32 on your answer sheet.</label> <br />
        <label>NB   You may use any letter more than once</label>  <br />
      </div>



      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <div>
            <label htmlFor="ques31">
              <span className='numberOfQuestion'>27</span>
              a reference to earlier examples of blindfold chess
              <input type="text" name="ques27" id="ques27" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques27 != "D" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques27 != "" && UserData.ques27 == "D" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-8" && UserData.ques27 != "D"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    D
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 27,
                          Ans1: "",
                          mainAns: "D",
                          hiddenWord: "earliest",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: " D paragraph’s first three lines. To the uninitiated, blindfold chess seems to call for superhuman skill. But displays of the feat go back centuries. The first recorded game in Europe was in 13 – century ** Blindfold chess feat was the first (earliest) recorded to be held in 13th century Florence."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>
          <div>
            <label htmlFor="ques31">
              <span className='numberOfQuestion'>28</span>
              an outline of what blindfold chess involves
              <input type="text" name="ques28" id="ques28" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques28 != "E" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques28 != "" && UserData.ques28 == "E" && "text-green-700"}
                 `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-8" && UserData.ques28 != "E"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    E
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 28,
                          Ans1: "",
                          mainAns: "E",
                          hiddenWord: "position of pieces is updated in the head. Similarly",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: " E paragraph second line to ninth line. The nature of the game is to run through possible moves in the mind to see how they play out. From this, regular players develop a memory for the patterns the pieces make, the defences and attacks. ‘You recreate it in your mind,’ said Gareyev. ‘A lot of players are capable of doing what I’m doing.’ The real mental challenge comes from playing multiple games at once in the head. Not only must the positions of each piece on every board be memorised, they must be recalled faithfully when needed, updated with each player’s moves, and then reliably stored again, so the brain can move on to the next board. ** How blindfold chess is played is described by Gareyev. He explains possible moves of pieces are stored and recalled in the mind. With every move, the position of pieces is updated in the head. Similarly, several possible games are played in the head, which are updated with the changing position of pieces."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>
          <div>
            <label htmlFor="ques31">
              <span className='numberOfQuestion'>29</span>
              a claim that Gareyev’s skill is limited to chess
              <input type="text" name="ques29" id="ques29" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques29 != "F" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques29 != "" && UserData.ques29 == "F" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-8" && UserData.ques29 != "F"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    F
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 29,
                          Ans1: "",
                          mainAns: "F",
                          hiddenWord: "Thus, his performance is only exceptional in chess",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: " F paragraph’s first line to sixth line. The scientists first had Gareyev perform some standard memory tests. These assessed his ability to hold numbers, pictures and words in mind. One classic test measures how many numbers a person can repeat, both forwards and backwards, soon after hearing them. Most people manage about seven. ‘He was not exceptional on any of these standard tests,’ said Rissman. ‘We didn’t find anything other than playing chess that he seems to be supremely gifted at. ** In a test of memorizing numbers and pictures, Gareyev performed similarly to other people. Thus, his performance is only exceptional in chess."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>
          <div>
            <label htmlFor="ques30">
              <span className='numberOfQuestion'>30</span>
              why Gareyev’s skill is of interest to scientists
              <input type="text" name="ques30" id="ques30" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques30 != "B" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques30 != "" && UserData.ques30 == "B" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-8" && UserData.ques30 != "B"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    B
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 30,
                          Ans1: "",
                          mainAns: "B",
                          hiddenWord: "researchers",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "B paragraph’s first to fourth line. But Gareyev’s prowess has drawn interest from beyond the chessplaying community. In the hope of understanding how he and others like him can perform such mental feats, researchers at the University of California in Los Angeles (UCLA) called him in for tests ** Gareyev’s prowess (skill or expertise in a particular activity or field) attracted scientists (researchers) to know how he could perform such mental feats(an achievement that requires great courage, skill, or strength)."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>

          <div>
            <label htmlFor="ques31">
              <span className='numberOfQuestion'>31</span>
              an outline of Gareyev’s priorities
              <input type="text" name="ques31" id="ques31" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques31 != "H" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques31 != "" && UserData.ques31 == "H" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-8" && UserData.ques31 != "H"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    H
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 31,
                          Ans1: "",
                          mainAns: "H",
                          hiddenWord: "blindfold",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "H paragraph’s first line. For the world record attempt, Gareyev hopes to play 47 blindfold games at once in about 16 hours. ** Gareyev’s priority is to play 47 blindfold games at once in 16 hours to make a world record."
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>
          <div>
            <label htmlFor="ques32">
              <span className='numberOfQuestion'>32</span>
              a reason why the last part of a game may be difficult
              <input type="text" name="ques32" id="ques32" onChange={handleChange}
                className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques32 != "E" && "text-red-600"}
                ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques32 != "" && UserData.ques32 == "E" && "text-green-700"}
                `} />
              <i className='text-green-600 font-bold mr-2 ml-2'>
                {ReadingShowAnswer == "cambridge-test-8" && UserData.ques32 != "E"
                  ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                    E
                    <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                      onClick={() => {
                        setExplainRLQuestions(true);
                        setExplainObjForRL(makeObj => ({
                          number: 32,
                          Ans1: "",
                          mainAns: "E",
                          hiddenWord: "making the end of the game more difficul",
                          hiddenWord2: "",
                          hiddenWord3: "",
                          keyWords: "",
                          explain: "E paragraph’s eighth to eleventh line. First moves can be tough to remember because they are fairly uninteresting. But the ends of games are taxing too, as exhaustion sets in. When Gareyev is tired, his recall can get patchy. ** As described in paragraph E, the final stages of the game can be mentally challenging for players as they begin to tire. Due to this exhaustion, Gareyev had difficulty recalling everything he had memorized, making the end of the game more difficul"
                        }))
                      }}
                    >Exp..</span>
                  </div>
                  : ""}
              </i>
            </label>
          </div>

        </div>
      </div> <br />




      <div className='Titles pl-[10px] sm:pl-[20px] mb-4'>
        <h6 className=''>Questions 33-36</h6> <br />
        <label className='p-3'>YES : ---   if the statement agrees with the views of the writer <br /> <br />
          NO:--if the statement contradicts the views of the writer <br /> <br />
          NOT GIVEN:-- if it is impossible to say what the writer thinks about this</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques33"><span className='numberOfQuestion'>33</span>In the forthcoming games, all the participants will be blindfolded.
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques33 != "NO" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques33 != "" && UserData.ques33 == "NO" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques33 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "making the end of the game more difficul",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "A paragraph’s first three lines. Next month, a chess player named Timur Gareyev will take on nearly 50 opponents at once. But that is not the hard part. While his challengers will play the games as normal, Gareyev himself will be blindfolded. ** All 50 players will play normally (not blindfolded) only Gareyev will be blindfolded while playing against them at once. Hence, NO."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34">  <span className='numberOfQuestion'>34</span>Gareyev has won competitions in BASE jumping.
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques34 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques34 != "" && UserData.ques34 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques34 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "get enjoyment or pleasure",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "A paragraph’s sixth to seventh line. He has a fondness for bright clothes and unusual hairstyles, and he gets his kicks from the adventure sport of BASE jumping. ** He gets his kicks (get enjoyment or pleasure) from BASE jumping. No information about winning a competition in BASE Jumping is given."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"> <span className='numberOfQuestion'>35</span>UCLA is the first university to carry out research into blindfold chess players.
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques35 != "NOT GIVEN" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques35 != "" && UserData.ques35 == "NOT GIVEN" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques35 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "UCLA",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "– B paragraph’s first to fourth line. But Gareyev’s prowess has drawn interest from beyond the chess-playing community. In the hope of understanding how he and others like him can perform such mental feats, researchers at the University of California in Los Angeles (UCLA) called him in for tests. ** No such information is give."
                    }))
                  }}
                >Exp..</span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>

          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span> Good chess players are likely to be able to play blindfold chess.
            <select name="ques36" id="ques36" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques36 != "YES" && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques36 != "" && UserData.ques36 == "YES" && "text-green-700"}
              `}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "cambridge-test-8" && UserData.ques36 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "UCLA",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "E paragraph’s first line. Accomplished players can develop the skill of playing blind even without realizing it. ** Accomplished = highly trained or skilled."
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
        <label className=''>Complete the summary below <br /> <br />
          Choose ONE WORD ONLY from the passage for each answer.</label><br /> <br />

        <label>How the research was carried out</label>
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex  flex-wrap mb-2'>
          <label htmlFor="ques36">The researchers started by testing Gareyev’s
            <span className='numberOfQuestion'>37</span>
            <input type="text" name="ques37" id="ques37" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques37.match(/memory/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques37 != "" && UserData.ques37 == "memory" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques37.match(/memory/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  memory
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 37,
                        Ans1: "",
                        mainAns: "memory",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "F paragraph’s first line. The scientists first had Gareyev perform some standard memory tests."
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            ; for example, he was required to recall a string of

            <span className='numberOfQuestion'>38</span>
            <input type="text" name="ques38" id="ques38" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques38.match(/numbers/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques38 != "" && UserData.ques38 == "numbers" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques38.match(/numbers/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  numbers
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 38,
                        Ans1: "",
                        mainAns: "numbers",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– F paragraph’s second to fourth line. One classic test measures how many numbers a person can repeat, both forwards and backwards, soon after hearing them"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            in order and also in reverse order. Although his performance was normal, scans showed an unusual amount of
            <span className='numberOfQuestion'>39</span>
            <input type="text" name="ques39" id="ques39" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques39.match(/communication/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques39 != "" && UserData.ques39 == "communication" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques39.match(/communication/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  communication
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 39,
                        Ans1: "",
                        mainAns: "communication",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "F paragraph’s ninth and tenth line. the scans found much greater than average communication between parts of Gareyev’s brain"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>

            within the areas of Gareyev’s brain that are concerned with directing attention. In addition, the scans raised the possibility of unusual strength in the parts of his brain that deal with

            <span className='numberOfQuestion'>40</span>
            <input type="text" name="ques40" id="ques40" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "cambridge-test-8" && !UserData.ques40.match(/visual/gi) && "text-red-600"}
              ${ReadingShowAnswer == "cambridge-test-8" && UserData.ques40 != "" && UserData.ques40 == "visual" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "cambridge-test-8" && !UserData.ques40.match(/visual/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  visual
                  <span className='bg-blue-600 text-white p-1 text-[10px] rounded cursor-pointer'
                    onClick={() => {
                      setExplainRLQuestions(true);
                      setExplainObjForRL(makeObj => ({
                        number: 40,
                        Ans1: "",
                        mainAns: "visual",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "– G paragraph’s first two lines. It was not the only hint of something special in Gareyev’s brain. The scans also suggest that Gareyev’s visual network is more highly connected to other brain parts than usual. ** highly connected = unusual strength"
                      }))
                    }}
                  >Exp..</span>
                </div>
                : ""}
            </i>
            input..</label>

        </div>
      </div>


    </section>
  )
}

export default Panel2_Q2




