"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest10Img1.jpg";
import TextAreaTask1 from "../../../Writing-Importand/Pages/Task-1-Component";
import TextAreaTask2 from "../../../Writing-Importand/Pages/Task-1-Component";
import logo from "../../../../../../../assets/images/Practestlogo.png";
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// TextArea: <TextAreaTask1 task={1} />
// TextArea: <TextAreaTask1 task={1} />

function WrittingPage() {
  const history = useRouter();
  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(false)




  return (
    <div className='w-full text-justify sm:w-full mt-[10px] sm:mt-0 p-3'>
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 10</i>

      <i className='font-bold '>WRITING PRACTICE TEST 10</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The table shows the amount of money given to developing countries by the USA, EU countries and other countries from 2006 to 2010 (Figures are in millions of dollars).</p> <br />
      <i>Write at least 150 words.</i> <br />
      <div className='mb-3'>
        <Image src={Image1} alt="test-10 image-1" /> <br />
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
        When designing a building, the most important factor is the intended use of the building rather than its outward appearance. To what extent do you agree or disagree?
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
                <Image src={logo} alt="test-10 logo-1" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  The table illustrates how much money was given to developing countries by the USA, European countries, and other countries, between 2006 and 2010.<br /> <br />

                  Overall, it can be seen that the USA was the biggest contributor to developing nations in all measured years. In addition, European countries and other countries gave similar amounts of money to developing nations each year.<br /> <br />

                  In 2006, the USA gave over three times as much money to developing nations as European countries did, with a donation of $9.8 million. European and other countries donated $3.1 million and $2.8 million respectively. All countries increased their donations to developing nations<br /> <br /> over the following two years, reaching a total of $24.4 million.In 2009 however, the donations from all countries slightly decreased from the 2008 figures, with a total figure of $23.5 million. However, these figures saw an increase again in 2010, with a total contribution of $28.1 million. Of this, the USA donated $20.3 million, while European and other countries gave $4.1 and $3.7 million respectively.<br /> <br />

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(168 words)</span>
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
                <Image src={logo} alt="test-10 logo-2" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  People have diﬀerent views regarding the importance of a building’s function in comparison to its exterior appearance. In my opinion, I agree with the idea that a construction’s purpose should be more highly valued than the appearance for a number of reasons. <br /> <br />

                  On the one hand, it cannot be denied that a magnificent looking structure can bring a wide range of benefits that should be taken into consideration. Firstly, it can remarkably raise the value of a building, especially a commercial or shopping center, as it looks more attractive, professional and high-class. The more customers are attracted to the building, the more profit it can potentially generate, which can benefit the building’s owners enormously. Secondly, a building with an  <br /> <br />aesthetic design can contribute a lot to the appearance of a city, and may make it become one of the most distinguishing places on the map. A lot of cites nowadays which are well-known for their architectural beauty have become popular destinations for tourists.On the other hand, the purpose of a building, in my opinion, is the key consideration when designing it. There are a variety of diﬀerent building types such as office buildings, commercial buildings, shopping  <br /> <br />centers, hospitals and schools. Each one of these has its own purpose and a particular interior design to serve those purposes. Therefore, only by focusing on the functionality of a design first, can we bring out the best use of a construction. In addition, people use a particular place because of what it oﬀers inside, not merely because of what it looks like on the outside. For example, if a company intends to erect a new office building, they will tend to choose the design  <br /> <br />based on the inner working spaces to enhance the operation of the staﬀ and the enterprise.

                  In conclusion, while the exterior of a building is an important factor, I believe its function should receive greater attention..<br /> <br />



                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(318 words)</span>
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


































