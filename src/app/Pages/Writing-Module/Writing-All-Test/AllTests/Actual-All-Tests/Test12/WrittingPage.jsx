"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest12Img1.jpg";
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 12</i>

      <i className='font-bold '>WRITING PRACTICE TEST 12</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The charts below show the percentage of people aged 23-65 in diﬀerent occupations in one UK town (Ashby) and in the UK as a whole in 2008..</p> <br />
      <i>Write at least 150 words.</i> <br />
      <div className='mb-3'>
        <Image src={Image1} alt="test-12 image-1" /> <br />
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
        Museums and art galleries should concentrate on works that show history and culture of their own country rather than works of the other parts in the world. To what extent do you agree or disagree?
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
                <Image src={logo} alt="test-12 logo-1" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  The pie charts illustrates the employment status of people aged 23 to 65, in Ashby and in the UK, in 2008.<br /> <br />

                  Overall, the national unemployment rate was lower than the rate in Ashby. Moreover, while British people generally preferred office work, personal service was the most popular profession in Ashby.<br /> <br />

                  The percentage of jobless people in Ashby was 14%, whereas that recorded in the whole nation was only 10%. The percentage of Ashby residents who were employed in office work and shop work were 18% and 14% respectively, similar to that of the whole of the UK, at 19% and 13% <br /> <br />respectively.In addition, the UK recorded a relatively high proportion of citizens employed in technical work, at 17%, while the figure for the same type of employment in Ashby was only about half that, at 9%. Furthermore, the percentage of construction workers and personal service providers in Ashby, at 16% and 21%, were both higher than the corresponding figures of the UK, at 10% and 17% respectively. Lastly, with regards to professional occupations, 8% of Ashby residents did this type of work, compared to 14% of the whole population.<br /> <br />

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(190 words)</span>
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
                <Image src={logo} alt="test-12 logo-2" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
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
                  Museums and art galleries have played a major role in preserving and conveying historical values for a long time. While many people suggest that they should focus purely on displaying works that represent the nation’s culture and history, others with contradicting views affirm that international works are also of great worth. Personally, I think both viewpoints are equally valid.<br /> <br />

                  On the one hand, there are reasons why it is believed that artifacts and works of national value should be given priority. Firstly, museums and art galleries should be places that honor indigenous history and culture. By going to these museums and galleries, people will gain a deeper understanding of their nation, along with the golden ages and hard times that the country has been through. The exhibitions therefore serve an educational purpose as they instill patriotism and promote a.sense of national pride <br /> <br />in the citizens of that country. Apart from that, such places also help to preserve traditional and historical values. In the 21st century, many minority ethnic groups are in grave danger of losing their culture, and therefore, the display of their works and artifacts will help to preserve their culture and the cultural diversity of a nation.<br /> <br />

                  On the other hand, showing international works of art has several merits. Works from other parts of the world help to diversify the content of museums and art galleries. Admittedly, even though the value of museums and art galleries cannot be denied, their failure in adopting changes and updating collections has discouraged people from visiting these places. For that reason, international works will add appeal and aid museums and galleries in attracting more visitors. Furthermore,<br /> <br /> if museums display international works, people will have more chance to gain knowledge and insight into other cultures as well.In conclusion, the ultimate goal of museums and galleries is to spread knowledge and wonder far and wide. Therefore, my suggestion is that local artifacts and works should be prioritized, while those of other nations can still be exhibited but in separate museums and galleries.<br /> <br />



                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(340 words)</span>
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


































