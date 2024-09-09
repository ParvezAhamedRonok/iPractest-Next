"use client"
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest6Img1.jpg";
import Image3 from "../../../../../../../assets/images/writingTest6Img3.jpg"
import TextAreaTask1 from "../../../Writing-Importand/Pages/WritingTextArea";
import TextAreaTask2 from "../../../Writing-Importand/Pages/WritingTextArea";
import logo from "../../../../../../../assets/images/Practestlogo.png";
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function WrittingPage() {
  const history = useRouter();
  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(false)




  return (
    <div className='w-full text-justify sm:w-full mt-[10px] sm:mt-0 p-3'>
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 6</i>

      <i className='font-bold '>WRITING PRACTICE TEST 6</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The pictures show information about average income and spending on food and clothes by an average family in a city in the UK. </p> <br />
      <i>Write at least 150 words.</i> <br />
      <div className='mb-3'>
        <Image src={Image1} alt="" /> <br />
        <Image src={Image3} alt="" />
      </div>
      {/* for showing answers in pop-Up */}
      <div className='flex w-full ml-[-45px] sm:ml-0 p-2'>
        <button className='w-[150px]  p-2 bg-blue-400 rounded text-white'
          onClick={() => { setTest1(!test1) }}
        >Sample Answer of Task-1 </button>
      </div>




      <div className="main sm:mr-[230px] translate-x-[-50px] ">
        <TextAreaTask1 task={1} />
      </div>






      <i className='font-bold mt-3 mb-3 '>WRITING TASK 2 <br /> <br />
        You should spend about 40 minutes on this task. <br />
        Write about the following topic: <br /></i> <br />
      <p className='border-1 border-black p-3 rounded text-justify'>
        The only way to improve safety on our roads is to give much stricter punishments for driving offences. What extent do you agree or disagree?
      </p> <br />
      <i>Give reasons for your answer and include any relevant examples from your own knowledge or experience. <br /> <br />
        Write at least 250 words.</i> <br /> <br />


      {/* for showing answers in pop-Up */}
      <div className='flex w-full ml-[-45px] sm:ml-0 p-2'>
        <button className='w-[150px]  p-2 bg-blue-400 rounded text-white'
          onClick={() => { setTest2(!test2) }}
        >Sample Answer of Task-2 </button>
      </div>



      <div className="main sm:mr-[230px] translate-x-[-50px] mb-5">
        <TextAreaTask2 task={2} />
      </div>






      {/* for-Result-Pop-Up */}
      {
        test1 && (<div className="Result-PopUp pt-[80px] sm:pt-[30px]  fixed top-3 left-0 w-[90%] sm:w-[100%]">
          <div className="grid w-[100vw] h-[100%] justify-center align-middle">
            <section className=' grid grid-cols-1 mt-1 rounded  justify-center align-middle w-[100vw] p-4 h-[500px] box-border overflow-auto bg-blue-200 z-[100000] '>
              <div className="w-full flex justify-between mb-3">
                <Image src={logo} alt="" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                  onClick={() => { history.push("/") }}
                />
                <button
                  style={{ color: 'rgb(153, 171, 180)' }}
                  className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
                               hover:bg-light-gray w-[60px] h-[60px] flex justify-center align-middle"
                  onClick={() => { setTest1(false) }}>  <MdOutlineCancel />
                </button>
              </div>
              <div className='text-justify  p-3 box-border overflow-auto  z-[100000]'>
                <p>
                  WRITING TASK 1 <br /> <br />
                  The table illustrates how much money an average family in a UK city earned and paid for food and clothes, while the pie charts represent the proportion of spending on those categories in 2010 and 2013.<br /> <br />

                  It is clear that while the total income of an average British family decreased between 2010 and 2013, the amount of money spent on food and clothing increased. Additionally, British people spent much more money on food than on clothes in both years.<br /> <br />

                  According to the table, in 2010, an average British family earned £29,000, while nearly half of that amount was used for food and clothes. In 2013, the average income of a family in Britain fell to about £25,000, while there was a growth of £1,000 in the expenditure for food and clothes.Regarding the pie charts, the percentage for spending on meat and fish was highest among all categories in 2010, at 29%, but three <br /> <br />years later experienced a drop to 23%. Similarly, a downward trend was seen in the figure for clothes, from 15% to 13% in 2013. On the other hand, people seemed to spend more money on fruit, vegetables, and dairy products as the figures went up to 30% and 16% respectively. Meanwhile, the proportion of spending on other food remained unchanged at exactly 18%.<br /> <br />

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(217 words)</span>
              </div>




            </section>
          </div>

        </div>
        )
      }

      {
        test2 && (<div className="Result-PopUp pt-[80px] sm:pt-[30px]  fixed top-3 left-0 w-[90%] sm:w-[100%]">
          <div className="grid w-[100vw] h-[100%] justify-center align-middle">
            <section className=' grid grid-cols-1 mt-1 rounded  justify-center align-middle w-[100vw] p-4 h-[500px] box-border overflow-auto bg-blue-200 z-[100000] '>
              <div className="w-full flex justify-between mb-3">
                <Image src={logo} alt="" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                  onClick={() => { history.push("/") }}
                />
                <button
                  style={{ color: 'rgb(153, 171, 180)' }}
                  className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
                               hover:bg-light-gray w-[60px] h-[60px] flex justify-center align-middle"
                  onClick={() => { setTest2(false) }}>  <MdOutlineCancel />
                </button>
              </div>
              <div className='text-justify  p-3 box-border overflow-auto z-[100000]'>
                <p>
                  WRITING TASK 2 <br /> <br />
                  Nowadays, an increasing number of people are concerned about measures to ensure road safety. However, whether imposing stricter penalties for driving oﬀenses is the only way to protect people is still a controversial issue. Although I agree that harsher punishments can act as an eﬀective way to deter people from committing road oﬀenses, I believe that there are better methods to protect the welfare of road users.<br /> <br />

                  Firstly, it is obvious that the implementation of rules can act as a deterrent to would-be lawbreakers. For example, in Vietnam, a motorist not wearing helmet can be fined with $20 to $40, and thus he will be in fear of facing further punishment and avoid committing another oﬀense. Furthermore, more stringent punishments for traffic crimes can be efficient way to reduce traffic accidents. For instance, in the past, China witnessed a significant number of annual road casualties when it had very loosely enforced regulations. However, once harsher laws related to road safety were implemented in 2009, there was a notable reduction in the total number oftraffic accidents.<br /> <br />

                  This is not to say that only by using stricter rules can we enhance the safety of our roads. It is true that there are still other eﬀective measures to ensure people’s safety, such as heightening people’s awareness through the media about the consequences of committing driving oﬀenses, or promoting the use of public transport systems such as buses or trains. To achieve the best results, the most eﬀective method may be to combine all the aforementioned ideas.<br /> <br />

                  In conclusion, I believe that stricter punishments are not the only way to deal with minimizing driving oﬀenses. Measures, including raising people’s awareness and promoting the use of public transport systems, can also contribute to maintaining road safety..<br /> <br />



                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(293 words)</span>
              </div>




            </section>
          </div>

        </div>
        )
      }








    </div>
  )
}

export default WrittingPage


































