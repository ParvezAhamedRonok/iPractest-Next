"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest13Img1.jpg"
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 1</i>

      <i className='font-bold '>WRITING PRACTICE TEST 1</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The chart below shows the average cost of monthly contract for four diﬀerent mobile (cell phones) in a European country from January to September 2002, measured in euro. </p> <br />
      <i>Write at least 150 words</i> <br />
      <div>
        <Image src={Image1} alt="test14 image1 " />
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
        Some people think the government funding should not be used for supporting art and culture, while others think supporting cultural activities may be beneficial for the population and the culture. Discuss both these views and give your own opinion.
      </p> <br />
      <i>Give reasons for your answer and include any relevant examples from your own knowledge or experience.
        <br /><br />
        Write at least 250 words.</i> <br /> <br />


      {/* for showing answers in pop-Up */}
      <div className='flex w-full ml-[-45px] sm:ml-0'>
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
                <Image src={logo} alt="test14 logo-1" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  The chart illustrates the average price of monthly plans from four cell phone contractors in a European nation in the first three quarters of 2002.<br /> <br />

                  Overall, there was an increase in the figures for all companies, except for Sim TX whose price remained unchanged over the period shown. In addition, the monthly cost of Alpha’s contract experienced the most remarkable growth.<br /> <br />

                  Alpha originally oﬀered the lowest price in the beginning of 2002 at only 5 euros per month. The price remained relatively stable during the next 5 months before a surge to 25 euros in September, which made Alpha the most expensive contractor examined. Meanwhile, Domo’s users had to pay the highest price for the majority of 2002 as the price rose gradually from January to July, followed by a slight decrease to about 23 euros by September. Similarly, there was gradual growth in the price of Lex’s contract, from approximately 12 euros in January to 17 euros in September.<br /> <br />

                  On the other hand, after peaking at 14 euros in June, the average cost of Sim TX decreased and returned to its original price of 8 euros.<br /> <br />


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
                <Image src={logo} alt="test14 logo-2" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  Opinions diverge on the necessity of funding cultural activities. While some claim it is an unnecessary investment, others believe both citizens and cultures would benefit if governments were to provide financial support for art and culture. I will discuss both views and state my own opinion in this essay.<br /> <br />

                  On the one hand, many people oppose investing in cultural activities because there are more serious issues to address. The deterioration of transport infrastructure in many cities, for example, is the major reason for the increased number of traffic accidents. Using money for the construction of new roads and highways would bring about immediate eﬀects and save thousands of lives. In addition, nations across the globe are facing many environmental problems that require urgent attention, namely pollution and natural resource depletion. National leaders, therefore, should join forces with scientists to combat these issues by allocating financial resources to the development of renewable and environmentally friendly sources of energy. There is no point in spending money on cultural activities before ensuring a safe and clean environment for citizens.<br /> <br />

                  Advocates of art and culture, on the other hand, argue that cultural activities play an important role in people’s lives. Cultural events, like Tet holiday or Christmas, are occasions when family members gather together, which helps to strengthen the sense of family and community and further enriches people’s lives. Moreover, funding these activities helps to preserve cultural diversity, especially in such a globalised world where so much culture is being lost and forgotten. The Vietnamese government, for instance, has constructed many museums that solely exhibit examples of ethnic minority culture, whose populations are decreasing at an alarming rate.<br /> <br />

                  In conclusion, I believe that cultural activities are of great significance and require attention and financial support from governments. However, it is also the government’s duty to address issues in transportation and the environment to protect citizens’ lives and maintain a healthy environment for people to live.<br /> <br />


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(284 words)</span>
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


































