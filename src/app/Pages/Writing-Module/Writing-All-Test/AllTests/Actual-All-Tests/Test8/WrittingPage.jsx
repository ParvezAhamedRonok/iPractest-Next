"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest8Img1.jpg";
import TextAreaTask1 from "../../../Writing-Importand/Pages/Task-1-Component";
import TextAreaTask2 from "../../../Writing-Importand/Pages/Task-1-Component";
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 8</i>

      <i className='font-bold '>WRITING PRACTICE TEST 8</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The chart below shows the percentage of the population in the UK who consumed the recommended daily amount of fruit and vegetables in 2002, 2006 and 2010.</p> <br />
      <i>Write at least 150 words.</i> <br />
      <div className='mb-3'>
        <Image src={Image1} alt="" /> <br />
      </div>
      {/* for showing answers in pop-Up */}
      <div className='flex w-full ml-[-45px] sm:ml-0 p-2'>
        <button className='w-[150px]  p-2 bg-blue-400 rounded text-white'
          onClick={() => { setTest1(!test1) }}
        >Sample Answer of Task-1 </button>
      </div>





      <div className="main sm:mr-[230px] translate-x-[-50px] ">
        <TextAreaTask1 task={1}/>
      </div>






      <i className='font-bold mt-3 mb-3 '>WRITING TASK 2 <br /> <br />
        You should spend about 40 minutes on this task. <br />
        Write about the following topic: <br /></i> <br />
      <p className='border-1 border-black p-3 rounded text-justify'>
        Nowadays, some employers think that formal academic qualifications are more important than life experience or personal qualities when they look for new employees. Why is it the case? Is it a positive or negative development?
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
        <TextAreaTask2 task={2}/>
      </div>






      {/* for-Result-Pop-Up */}
      {
        test1 && (<div className="Result-PopUp pt-[80px] sm:pt-[30px]  fixed top-3 left-0 w-[90%] sm:w-[100%]">
          <div className="grid w-[100vw] h-[100%] justify-center align-middle">
            <section className=' grid grid-cols-1 mt-1 rounded  justify-center align-middle w-[100vw] p-4 h-[500px] box-border overflow-auto bg-blue-200 z-[100000] '>
              <div className="w-full flex justify-between mb-3">
                <Image src={logo} alt="test-8 logo-1" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  The chart illustrates the percentage of men, women and children who consumed the recommended amount of fruit and vegetables on a daily basis in three diﬀerent years.<br /> <br />

                  Overall, women came out first in term of fruit and vegetable consumption while the opposite was true for children.<br /> <br />

                  In all three years, there was a small difference in the percentage of males and females who consumed enough fruit and vegetables every day. The highest figure for women was 32% in 2006 compared to 28% of men. 2010 witnessed the second highest rank for both women and men’s figures.<br /> <br /> While 27% of women consumed fruit and vegetables, the percentage of men was 24%. And the smallest figure for both women and men, which was nearly the same as the 2010 figures, was recorded in 2002.The smallest percentage of people consuming the daily recommended amount of fruit and vegetables was children with only 11% in 2002, half as much as that of men and women in the same year. Following that, the figure for children slightly increased to 16% in 2006 before falling marginally to 14% in the last.<br /> <br />

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(187 words)</span>
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
                <Image src={logo} alt="test-8 logo-2" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  These days, formal academic qualifications are more highly appreciated than life experience or personal qualities when it comes to the recruitment process. There are many reasons for this, and in my opinion, this is a positive development.<br /> <br />


                  The main reason for this tendency is that academic degrees are considered a tool to measure the level of knowledge that students are capable of. To be more specific, to achieve a good degree in most universities, students need to pass many examinations focusing on testing their knowledge and take part in practical training courses. These factors ensure that students<br /> <br /> have gained sufficient in-depth knowledge in the field that the company is looking for. That is why recruiters place higher value on employers holding formal academic qualifications. Whereas, in terms of people having life experience or personal qualities, these people are likely to lack asuitable amount of academic knowledge in their field, and therefore, they need to be trained for a long time by employers. This results in the reluctance of employers to hire them for vacant positions.<br /> <br />


                  This trend, therefore, will bring about some positive eﬀects on society as a whole. Students will be motivated to pursue tertiary education for the sake of their better career prospects. By attending university, students can gain insights into their chosen field and have a chance to <br /> <br />compete with others. As for society, thanks to this trend, there will be more and more people entering university, which will contribute to a society of more well-informed and educated citizens.In conclusion, employers prefer people with better qualifications because qualifications are to prove that their holders are sufficiently trained at university. I think that there are many positives for both students and society when employers place emphasis on formal academic qualifications instead of life experience or personal qualities.<br /> <br />
                  <br /> <br />


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(301 words)</span>
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


































