"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../../assets/images/writingTest1Img01.jpg"
import TextAreaTask1 from "../../../Writing-Importand/Pages/Task-1-Component";
import TextAreaTask2 from "../../../Writing-Importand/Pages/Task-2-Component";
import logo from "../../../../../../../assets/images/Practestlogo.png";
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
//end importing...



function WrittingPage() {
  const history = useRouter();
  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(false)




  return (
    <div className='w-full text-justify sm:w-full mt-[10px] sm:mt-0 p-3'>
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 1</i>

      <i className='font-bold '>WRITING PRACTICE TEST 1</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The chart below give information about the high-speed continuous internet connection of households in five countries in 2001 and 2002. </p> <br />
      <i>Write at least 150 words</i> <br />
      <div>
        <Image src={Image1} alt="" />
      </div>
      {/* for showing answers in pop-Up */}
      <div className='flex w-full ml-[-45px] sm:ml-0 p-2'>
        <button className='w-[150px]  p-2 bg-blue-400 rounded text-white'
          onClick={() => { setTest1(!test1) }}
        >Sample Answer of Task-1 </button>
      </div>



      <TextAreaTask1 task={1} />






      <i className='font-bold mt-3 mb-3 '>WRITING TASK 2 <br /> <br />
        You should spend about 40 minutes on this task. <br />
        Write about the following topic: <br /></i> <br />
      <p className='border-1 border-black p-3 rounded text-justify'>
        In today’s world of advanced science and technology, we still greatly value our artists such as musicians, painters and writers. What can art tell us about life that science and technology cannot?
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
                  The bar chart and table compare five countries in terms of the percentage of families with high-speed internet access, and the change over two consecutive years, from 2001 to 2002.<br /> <br />

                  It is clear that the percentage of families with high-speed internet connection was highest in South Korea and the USA during those years. In addition, the biggest change in the number of families with high-speed internet access occurred in Britain.<br /> <br />

                  In 2001, about 11.2% of South Korean households had access to high-speed internet, compared to 9.3% of US families. One year later, the number of US families with high-speed internet soared by 170% to reach 25.11% of the population, which was the highest figure of all measured countries for those years. By contrast, the growth rate.
                  was significantly lower in South Korea, at only 20%.<br /> <br />

                  High-speed internet was not as common in Germany, Switzerland and Britain, with only roughly 0.35% of households having a high-speed connection. All three countries saw significant increases over the year, with Germany and Switzerland witnessing increases of 80% and 120% respectively. Meanwhile, Britain saw the biggest growth rate in high-speed internet connections with a 230% increase.<br /> <br />


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(191 words)</span>


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
                  In this modern era of continual scientific and technological advancement, artists are still gaining a lot of respect from people the world over. There are a number of things about life that the arts can teach us that science and technology fail to.
                  <br /> <br />
                  Many forms of art, especially literature, can deliver messages about the appreciation of what we have in life as well as life itself. Hundreds of literary works depict misery, misfortune and sorrow that still exist in life today, and this sends a strong message to those who do not appreciate their lives. “The Goldfinch”, for example, which narrates a story about the miserable life of the main character after the unfortunate death of his mother makes us wonder whether we have become heartless toward our own loved ones. I doubt that there are any technologies in the world that could manage to convey such a powerful message.<br /> <br />

                  Arts teach us to cherish the beauty of culture and is the fuel for our spiritual lives. This is extremely important in a world where science and technology seem to fade our belief in the gravity of culture in daily life. The connection between art and culture is boundless, and traditional music and ancient paintings can remind us of where we came from and who we are. That is to say, our cultural identity is preserved in various forms of art.<br /> <br />

                  Although science and technology advance our understanding of all things and better our lives, arts can touch us to a much deeper extent, help us value what we have, and remind us of the significance of our culture.<br /> <br />


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(269 words)</span>
              </div>

            </section>
          </div>
        </div>
      }





    </div>
  )
}

export default WrittingPage


































