"use client"
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest2Img1.jpg"
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 2</i>

      <i className='font-bold '>WRITING PRACTICE TEST 2</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The table shows the number of employees and factories producing silk in England and Wales between 1851 and 1901. </p> <br />
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
        People living in large cites today face many problems in their everyday life. What are these problems? Should governments encourage people to move to smaller regional towns?
      </p> <br />
      <i>smaller regional towns?
        Give reasons for your answer and include any relevant examples from your own knowledge or experience. <br /> <br />
        Write at least 250 words.</i> <br /> <br />


      {/* for showing answers in pop-Up */}
      <div className='flex w-full ml-[-45px] sm:ml-0 p-2'>
        <button className='w-[150px]  p-2 bg-blue-400 rounded text-white'
          onClick={() => { setTest2(!test2) }}
        >Sampler Answer of Task-2 </button>
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
                  The table provides information about the workforce in silk production, in two countries, England and Wales, over a period of 50 years, starting from 1851. <br /> <b></b>

                  It is clear that the total number of silk workers in the two countries declined over the period, and that significantly more women were employed than men in this industry. Also, the number of silk manufacturing factories increased over the 50 year period, despite some ﬂuctuations.
                  <br /> <br />
                  In 1851, the silk workforce was at its peak, with 130,750 employees, including 76,786 females and approximately 54,000 males. In contrast, the number of silk factories was at its lowest in 1851, at only 272. However, ten years later, the number of silk factories had almost tripled, reaching 761, while the total number of employees experienced a significant fall of over 20,000 people. <br /> <br />
                  Over the following 40 years, the total number of female and male workers gradually decreased throughout the period, to 25,567 and 13,375 respectively, which resulted in a drop in the total number of employees, at 38,942 in 1901. Meanwhile, the number of silk factories experienced a gradual decline over these 40 years, from 761 in 1861 to 623 in 1901.


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(194 words)</span>


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
                  In recent years, there have been a number of everyday problems that people in big cities have to cope with. This essay will discuss two major problems, pollution and information overload, which I believe should lead governments to encourage people to move to regional areas. <br /> <br />

                  These days, increased levels of pollution have been a great cause for concern among residents of big cites. Due to high volumes of traffic, large quantities of pollutants are being released into the atmosphere, causing the degradation of air quality, which is said to be a significant contributor to various types of respiratory disease, such as lung cancer. Additionally, people in big cities are being bombarded with too much information from the media, including TV, social media, and advertising, with a large proportion of this information being fake or exaggerated. This can lead to confusion or, in some cases, social anarchy. <br />  <br />
                  In my opinion, governments should do what they can to encourage city residents to move to regional areas. Firstly, it will reduce the number of vehicles in cites, which will definitely reduce the levels of air pollution, which is hazardous to the health of citizens. Furthermore, fewer people living in big cities will relieve the pressure on the housing supply, where many people are forced to live in small, uncomfortable spaces. Studies have shown that people’s living spaces have a direct impact on their mental health and how they perform at work. <br /> <br />

                  In conclusion, severe air pollution and a bombardment of information are among the most serious problems facing city residents nowadays, and personally, I feel that authorities should encourage people to relocate to other areas to live.

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(274 words)</span>
              </div>

            </section>
          </div>
        </div>
      }










    </div>
  )
}

export default WrittingPage


































