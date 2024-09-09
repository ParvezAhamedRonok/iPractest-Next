"use client"
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest9Img1.jpg";
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 9</i>

      <i className='font-bold '>WRITING PRACTICE TEST 9</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The chart below shows the annual pay (thousands of US dollars) for doctors and other workers in seven countries in 2004.</p> <br />
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
        <TextAreaTask1 task={1} />
      </div>






      <i className='font-bold mt-3 mb-3 '>WRITING TASK 2 <br /> <br />
        You should spend about 40 minutes on this task. <br />
        Write about the following topic: <br /></i> <br />
      <p className='border-1 border-black p-3 rounded text-justify'>
        Some people think that newly built houses should follow the style of old houses in local areas. Others think that people should have freedom to build houses of their own style. Discuss both these views and give your own opinion.
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
                  The bar chart compares seven countries regarding the yearly payment for doctors and other jobs in the year 2004.<br /> <br />

                  It is clear that doctors generally made more money than other types of work in each country during the research period. Also, the average incomes of American doctors and other workers were the highest among the seven nations.<br /> <br />

                  The US doctors earned the largest amount of money compared to those in the other six countries, receiving nearly $120,000, while the figures for Switzerland and France were significantly lower, at close to 70,000 each. In contrast, there was only about $50,000 earned by doctors in Finland, as opposed to doctors in the other countries, who received around $61,000 each.<br /> <br />

                  Regarding the average salaries of other workers, the amount of money earned by other workers in the US,<br /> <br /> at approximately $45,000 and in Switzerland, at exactly $40,000 was higher than in any of the other nations. Roughly $30,000 was given toFrench other workers, about $5,000 higher than that of Finnish counterparts. By contrast, the figures for the remaining countries were lowest, at exactly $20,000 each<br /> <br />

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(183 words)</span>


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
                  onClick={() => { setTest2(false) }}>  <MdOutlineCancel />
                </button>
              </div>

              <div className='text-justify  p-3 box-border overflow-auto  z-[100000]'>
                <p>
                  WRITING TASK 2 <br /> <br />
                  It is a controversial issue as to whether newly built houses should be designed in the same style as existing homes in the same area, or, whether the residents should have permission to construct their houses in a style of their own preference. My view is that people should be given the permission to build their houses to their own design, as long as these designs satisfy all necessary safety requirements.<br /> <br />

                  On the one hand, there are some reasons why all buildings in a particular area should have the same style. Firstly, when houses look similar it will enhance a sense of community and equality within a residential area. This is because a house often reﬂects the wealth and social status of its owner. If a house looks older, smaller, and less attractive than others, the people living<br /> <br /> there may feel inferior and less confident when socialising with their neighbours. In contrast, a house which stands out in the neighbourhood could potentially make its owner the target of gossip or burglary. Secondly, when houses share a common design, it will be easier for the local government to supervise the process of construction, and to make sure that these buildings are safe for both the inhabitants and neighbours.On the other hand, it should be people’s right to build their own house in their own style. A good building should satisfy<br /> <br /> all three principles of durability, utility, and beauty. It should not only be strong in design and be built to last a long time, but also inspire the people who live there by its aesthetic design. It is extremely important for a person to live in a house that they feel comfortable with as it<br /> <br /> largely aﬀects their spirit. Furthermore, if each house in an area is built in a unique style, it will greatly contribute to the diverse image of the town.

                  In conclusion, even though there are certain justifications for houses in an area to be constructed in the same style, I am of the opinion that governments should permit people to build their houses according to their own ideas.<br /> <br />
                  <br /> <br />


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(352 words)</span>
              </div>

            </section>
          </div>
        </div>
      }










    </div>
  )
}

export default WrittingPage


































