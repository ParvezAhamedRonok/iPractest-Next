"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest7Img1.jpg";
import Image2 from "../../../../../../../assets/images/writingTest7Img2.jpg"
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 7</i>

      <i className='font-bold '>WRITING PRACTICE TEST 7</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The pie charts show the results of a survey conducted by a university on the opinions of full-time and part-time students about its services.. </p> <br />
      <i>Write at least 150 words.</i> <br />
      <div className='mb-3'>
        <Image src={Image1} alt="test-7-image-1" /> <br />
        <Image src={Image2} alt="test-7 image-2" />
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
        The tradition of families getting together to eat meals is disappearing. What are the reasons? What are the impacts?
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
                <Image src={logo} alt="test-7 logo -1" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  The pie charts compare the opinions of full-time and part-time students about their university services, including IT support and opening hours.<br /> <br />

                  Overall, it is clear that there was more positive feedback with regard to the opening hours than the IT support. Also, full-time students tended to be more satisfied with the two services than their part-time counterparts.<br /> <br />

                  Regarding IT support, over half of the surveyed full-time students said that they were very happy with this service, while only a fifth of part-time students reported that they were very happy. In contrast, just 15% of the students studying full-time were not satisfied with IT support, in comparison with 45% of part-time students. The proportion of both types of students being quite happy with this service was <br /> <br />relatively the same, at about one third.The majority of full-time and part-time students felt very happy with the current opening hours, at 87% and 72% respectively. Only 1% of the examined full-time students were not satisfied with the opening hours whereas the figure for part-time students was a little higher, at 5%. The remaining 12% of the surveyed full-time students felt quite happy with this service, as opposed to nearly a quarter of part-time students.<br /> <br />

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(201 words)</span>
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
                <Image src={logo} alt="test-7 logo-2" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  Nowadays, it seems that families tend to eat together less frequently. This essay will put forward some explanations for this trend and an analysis of the potential impacts.<br /> <br />

                  The fact that family members choose not to eat with each other can be attributable to two reasons. Firstly, since people these days tend to have heavier workloads and more hectic schedules than in the past, sitting down to share a meal with their family members might not be a convenient choice. Instead, these individuals usually eat out with their friends, colleagues or business partners near their workplace which can be more suitable for their timetable. Secondly, the fast food culture of modern life can change people’s eating habits because fast food <br /> <br />can be found everywhere and is usually an inexpensive food choice. For instance, young people in Vietnam often grab a quick meal after a busy day at work or school, which leads them to skipping meals with their family when they go home.The trend has both positive and negative impacts on people. In terms of the benefits, people are able to be much more ﬂexible with their time. They will not have to show up at a fixed hour to have meals with their family and can eat whatever and whenever they want. However, in terms of the negative eﬀects, this can <br /> <br />lead to a weaker family bond. If a family continuously eats separately, family members may not be able to share their thoughts, feelings with each other, and therefore may feel isolated from each other. This will result in a lack of deep family connection.<br /> <br />

                  In conclusion, the tendency of family members eating separately is mainly caused by the diﬀerence in their schedules or the preference to eat fast food, which can have both positive and negative impacts.<br /> <br />



                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(300 words)</span>
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


































