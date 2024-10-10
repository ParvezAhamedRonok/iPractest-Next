"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest11Img1.jpg";
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 11</i>

      <i className='font-bold '>WRITING PRACTICE TEST 11</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The chart shows the proportion of people in a UK survey carried out in three diﬀerent years who said they were interested in certain sports.</p> <br />
      <i>Write at least 150 words.</i> <br />
      <div className='mb-3'>
        <Image src={Image1} alt="test-11 img-1" /> <br />
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
        Some people believe that it is more important to teach children the literature of their own country than other countries. Do you agree or disagree?
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
                <Image src={logo} alt="test-11 logo-1" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  The bar chart shows the percentage of UK residents interested in six diﬀerent sports, in three years (1995, 2000 and 2005).<br /> <br />

                  It is clear that walking was by far the most popular physical activity in all surveyed years, while golf was the least popular activity. Additionally, the percentages of people who enjoyed walking, swimming and rugby increased, whereas the figures for those who enjoyed other sports decreased over the measured years.
                  <br /> <br />
                  In 1995, walking was the most popular activity, chosen by 40% of the survey participants, while playing snooker and tennis accounted for around 30%. In contrast, about 23% of people chose swimming, while only 18% said they were interested in golf. Meanwhile, approximately 25% <br /> <br />of survey respondents chose rugby as their preferred sportIn 2005, slightly more people preferred walking, with the figure rising to just under 45%, but there was a significant decline in the figures for tennis and snooker, to about 22% each. The figures for golf remained the same, at around 15%, as opposed to the figures for swimming and rugby, which experienced considerable gains in popularity to over 25% each..<br /> <br />

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(184 words)</span>
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
                <Image src={logo} alt="test-11 logo-2" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  It is argued by some people that local literature is of greater importance in children’s education compared to foreign literature. From my perspective, I disagree with this view since both types of literature play equal roles in the development of children.<br /> <br />

                  On the one hand, locally written works come with numerous benefits to students. Firstly, these pieces of art can enrich student’s skills to use their own language. Indeed, through learning literature of their mother tongue, students can learn the art of using the language such as the ﬂexibility in the vocabulary highlights used, the syntax of sentences, diﬀerent ways to convey ideas. Hence, linguistic knowledge will gradually be built up and benefit the students not only in their study but also in social <br /> <br />communication. Secondly, national literary works give students an insight into their own culture. For example, through traditional literature, namely fairy tales, legends and fables, students can become familiar with their traditions, native terms and also national values which have been passed down from generation to generation. As aresult, they will naturally develop a sense of national identity and patriotism.<br /> <br />

                  On the other hand, studying foreign literature is also advantageous for the following reasons. To begin with, it gives learners opportunities to expand their horizons by showing them a bigger picture of the outside world. Having access to foreign historical events and cultures, <br /> <br />commentaries on politics, society, and stereotypes in literature from countries abroad will foster students’ awareness of the diversity of the world. Additionally, the students will be equipped with a broader range of knowledge to help them be more prepared for the globalized world that we are living in today. To be more specific, the students will have a grasp of the culture of foreign countries and how to adapt <br /> <br />themselves in terms of manners, customs or behaviours if they live in that new environment or dealing with foreigners.In conclusion, it seems to me that there is a need to teach both local and foreign literature at schools so that students can develop comprehensively.<br /> <br />



                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(342 words)</span>
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


































