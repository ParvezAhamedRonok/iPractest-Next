"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest4Img1.jpg"
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 4</i>

      <i className='font-bold '>WRITING PRACTICE TEST 4</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The bar shows the percentage of people going to cinemas in one European country on diﬀerent days. </p> <br />
      <i>Write at least 150 words.</i> <br />
      <div className='mb-3'>
        <Image src={Image1} alt="test-9 image-1" />
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
        Research shows that business meetings, discussions and training are happening online nowadays. Do the advantages outweigh the disadvantages?
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
                <Image src={logo} alt="test-9 logo-1" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  The chart illustrates the proportion of people visiting a cinema during seven days of the week in a European nation from 2003 to 2007. <br />

                  It is clear that there were only small ﬂuctuations in people’s preference of which day to go to the cinema over the examined period. People in this country tended to go to the cinema on the weekend rather than on Monday to Friday. <br /> <br />

                  In 2003, 40% of people went to cinemas on a Saturday, compared to 30% on Friday or Sunday each. On the other days, the proportion of movie-goers was higher on Tuesday, at 20%, while the lowest figure can be seen on Monday, at only 10%.
                  Over the next four years, the percentage of people going to the cinema on weekends increased slightly to 45% 35% for Saturday and Sunday respectively. Similarly, Thursday and Monday became more popular among cinema-goers, with about 2% more people choosing these days. However, <br /> <br />fewer people went to see movies on Tuesday and Wednesday, with the figures falling to 19% and 9% respectively. Finally, the proportion of movie-goers choosing to go to the cinema on a Friday remained at 30% during the three examined years.


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(196 words)</span>
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
                <Image src={logo} alt="test-9 logo-2" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  Holding business meetings and training via the internet has gained enormous popularity in recent years. Although the drawbacks of this are varied, in my opinion, the benefits are greater. <br /> <br />

                  On the one hand, conducting meetings and training sessions online may have some major disadvantages. The first drawback is the technical limitations that participants may have, which may reduce the eﬀectiveness of discussions or meetings. For example, the elderly may find it hard to understand and make use of latest programs and software, while other participants may lose track of the progress of a meeting due to a slow internet connection or platform malfunction. The second disadvantage is the lack of face-to-face interaction which is often considered as the key to a successful meeting or training session. While online attendants may be easily distracted by other interesting, yet non-productive online activities, the physicalpresence of hosts or trainers would no doubt provide a more engaging and active meeting or training session. <br /> <br />

                  However, I am convinced that the advantages of virtual meetings are more significant. Compared to traditional face-to-face meetings, those held online consume much less time and money. In the past, attendants had to make long trips just to meet with other employees from other branches, however with online meetings, all team members can join the conference from any place, without the need to travel. Another advantage of online communication is that members who join meetings and training can share and organise files and presentations easily and conveniently. The files can also be edited or revised by other members, facilitating collaboration within the whole team. <br /> <br />
                  In conclusion, it seems that the merits of virtual meetings and trainings are more significant than the downsides.

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(282 words)</span>
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


































