"use client"
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest5Img1.jpg"
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 5</i>

      <i className='font-bold '>WRITING PRACTICE TEST 5</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The table below shows the percentages of the population by age groups in one town who rode bicycles in 2011. </p> <br />
      <i>Write at least 150 words.</i> <br />
      <div className='mb-3'>
        <Image src={Image1} alt="" />
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
        Scientific research should be carried out and controlled by governments rather than private companies. Do you agree or disagree?
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

        test1 && <div className="Result-PopUp pt-[10px]  fixed top-2 left-2 w-[90%] sm:w-[100%] z-[345678900000] ">
          <div className="grid w-[100vw] h-[100%] justify-center align-middle">
            <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[650px] p-4 h-[570px] box-border overflow-x-auto bg-sky-100 '>
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
                  The table compares the proportions of people who rode a bike, by age and gender, in 2011.
                  <br /> <br />
                  In general, children under nine years old used bicycles the most, while middle-aged people were the least likely to ride a bicycle. Also, men tended to cycle more than women during the period shown.<br /> <br />

                  Among males, children under 9 years old made up the largest proportion of cyclists, at 52%. However, with the older groups, the rates were only 42% for teenagers aged from 10 to 17, and 17% for people aged between 18 and 39. The proportion of 40 to 50 year old male cyclists was the lowest, at just 12%, while only nearly a fifth of men aged over enjoyed this activity<br /> <br />
                  The percentage of girls younger than 9 years old who cycled was slightly higher than boys of the same age, at 52%. However, the figure for girls aged 10 to 17 was just under a quarter, much lower than that of their counterparts. Similar to men in the same age groups, cycling was not very popular amongst women aged 40 to 59, and 60 or over, accounting for only 8% and 14% of females respectively.<br /> <br />

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(196 words)</span>

              </div>

            </section>
          </div>
        </div>
      }




      {

        test2 && <div className="Result-PopUp pt-[10px]  fixed top-2 left-2 w-[90%] sm:w-[100%] z-[345678900000] ">
          <div className="grid w-[100vw] h-[100%] justify-center align-middle">
            <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[650px] p-4 h-[570px] box-border overflow-x-auto bg-sky-100'>
              <div className="w-full flex justify-between mb-3">
                <Image src={logo} alt="" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                  onClick={() => { history.push("/") }}
                />
                <button
                  style={{ color: 'rgb(153, 171, 180)' }}
                  className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
hover:bg-light-gray w-[60px] h-[60px] flex justify-center align-middle"
                  onClick={() => {setTest2(false)  }}>  <MdOutlineCancel />
                </button>
              </div>

              <div className='text-justify  p-3 box-border overflow-auto  z-[100000]'>
              <p>
                  WRITING TASK 2 <br /> <br />
                  Scientific research plays an important role in the development of humanity. Some people think that the responsibility for conducting and managing it should be taken by governments, and not by private companies. Personally, I believe that both governments and private businesses should have the right and duty to carry out research. <br /> <br />

                  I believe that governments should play the leading role in performing research due to a number of reasons. Firstly, scientific research is the key to finding solutions to the pressing concerns of society. Thorough medical research, for example, needs to be conducted by governments to develop vaccines against potential epidemics. Research into renewable energies is also crucial to deal with global warming. These kinds of research require a great deal of spending, which can only be aﬀorded by the government. In addition, scientific studies controlled by governments will ensure that reliable and ethical methods are used, and minimize the risk of these studies beingused for criminal activity. For instance, studies related to nuclear power or weapons must be carried out or supervised by governmental organizations to protect a country from terrorism or other warfare.<br /> <br />

                  However, private companies can do research which is not carried out by governments. In fact, many useful scientific discoveries have been made by private institutions. To illustrate, the invention of the iPhone by Apple, a corporation in the US began the era of smartphones and facilitated modern forms of interaction between people all over the world. Furthermore, encouraging profit-driven companies to conduct scientific investigations will help them develop their own products and create competition in the marketplace. Society will therefore benefit from new inventions and better products.<br /> <br />
                  In conclusion, although governments should control and carry out major scientific studies, private companies should not be deprived of the right to do research.

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(297 words)</span>
              </div>

            </section>
          </div>
        </div>
      }




    </div>
  )
}

export default WrittingPage


































