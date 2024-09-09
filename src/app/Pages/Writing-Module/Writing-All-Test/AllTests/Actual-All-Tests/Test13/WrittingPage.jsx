"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest1Img1.jpg"
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 1</i>

      <i className='font-bold '>WRITING PRACTICE TEST 1</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The graph below shows the number of enquiries received by the Tourist Information Office in one city over  <br />a six-month period in 2011., </p> <br />
      <i>Write at least 150 words</i> <br />
      <div>
        <Image src={Image1} alt="test13 image-1" />
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
        Some people think that it is more beneficial to take part in sports which are played in teams, like football, while other people think that taking part in individual sports, like tennis or swimming, is better. Discuss both views and give your own opinion.
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
                <Image src={logo} alt="logi test13 1" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  The line chart illustrates the number of inquiries sent to the Tourist Information Office in a particular city via three means of communication, between January and June in 2011. <br /> <br />

                  It is clear that visitors to the city made more inquires in person and via telephone, while written letters and emails became the least common choices. Additionally, the number of enquiries in person experienced the most dramatic change among the different options. <br /> <br />
                  In January, the Tourist Information Office received 900 telephone enquiries, while just under 800 letters and emails were received. Not many tourists chose to ask for information in person, with just over 400 queries. Over the next three months, the telephone still remained the most popular method of enquiry, at approximately 1000 queries. <br /> <br />

                  Meanwhile, the number of enquires made in person saw considerable growth to 800, surpassing the figures for emails and postal enquires. From March to June, enquires in person were the most common method of inquiry. By June, the number of in person enquires soared by more than 1,000 to peak at 1,900. During this period, there was also a significant rise in the figure for telephone enquiries, from 1000 to 1600. By contrast, fewer people sent emails or letters to make enquires, with slightly less than 400 enquires in May and June.


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(216 words)</span>
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
                <Image src={logo} alt="test13 logo-2" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  Some people argue that playing team sports provides people with more benefits as opposed to participating in individual sports. Personally, I believe that both types of sports can provide a range of benefits to people, and it depends on what benefits each individual wishes to achieve as to which sport they should choose to play. <br /> <br />

                  On the one hand, team sports, such as football and basketball, provide a number of benefits to those who play. For example, team sports give players the opportunity to develop interpersonal skills, like teamwork and communication skills, which will not only help people in their day-to-day social interactions but also benefit them in their workplace. In addition, team sports also oﬀer players the chance to develop a sense of unity, friendship, and sportsmanship between teammates, which can really add value to people’s lives by making them feel a part of something. <br /> <br />
                  On the other hand, individual sports, like tennis and swimming, also have their merits. When someone plays an individual sport, it usually gives them more opportunities to enhance their personal skills, such as being able to manage emotions, cope with stress, and build confidence and self-esteem. When people are playing an individual sport, they usually have no one else to rely on for support during the game or match, and therefore, individuals will need to develop a strong mindset to be able to deal with and overcome any setbacks they may face. Individual sports also provide better opportunities for people to challenge themselves by setting goals and achieving personal bests. <br /> <br />

                  Overall, I feel that all sports oﬀer great benefits for people’s mental and physical health, and that people should choose whatever sport they are most interested in playing.


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


































