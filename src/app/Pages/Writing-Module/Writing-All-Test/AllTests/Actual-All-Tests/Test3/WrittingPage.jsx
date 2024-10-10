"use client";
import React, { useState } from 'react';
import "../../../WrittingAllStyles/WrittingPage.css";
import Image1 from "../../../../../../././../assets/images/writingTest3Img1.jpg"
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
      <i className='font-bold mt-5 mb-3'>Home iPractest -- Writing Practice Test 3</i>

      <i className='font-bold '>WRITING PRACTICE TEST 3</i> <br />
      <i className='font-bold '>WRITING TASK 1</i>  <br /> <br />
      <i className='font-bold '>You should spend about 20 minutes on this task</i>  <br />
      <p className='border-1 border-black p-3 rounded text-justify'>The diagram below shows how orange juice is produced. </p> <br />
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
        Maintaining public libraries is a waste of money since computer technology can replace their functions. Do you agree or disagree?
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
                  The diagram illustrates the process of producing of orange juice. <br />

                  There are various stages in the process of making orange juice, beginning with the collection of fresh oranges and ending with the distribution of packaged juice to supermarkets. <br />

                  Firstly, oranges are picked, loaded onto trucks, and delivered to a processing plant where they are thoroughly washed by a machine. Following this, the juice is extracted from the oranges by a squeezing machine, and the solid waste, including orange peels and seeds, is collected and used to feed animals. The squeezed juice can then either be packaged and sent to the supermarket, or transferred to another factory to undergo an evaporation process. <br /> <br />
                  During the evaporation process, the fresh orange juice is processed by an evaporator machine where the water is removed. The concentrated juice is then canned and transported to a warehouse before being combined with water again. After that, it is packaged and distributed to supermarkets, ready to be purchased. <br />


                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(160 words)</span>


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
                  onClick={() => { setTest2(false)  }}>  <MdOutlineCancel />
                </button>
              </div>

              <div className='text-justify  p-3 box-border overflow-auto  z-[100000]'>
                <p>
                  WRITING TASK 2 <br /> <br />
                  It is often argued that maintaining public libraries is no longer necessary in today’s world because the development of computer technology has allowed us to access a great deal of information on the internet more efficiently. While I accept that there are clear benefits of online libraries over public libraries, I believe that it is still worth spending money on maintaining public libraries. <br /> <br />

                  There are two main advantages of online sources of information. Firstly, online sources can store a huge amount of information that is greater than any physical library. This allows researchers to easily get the information they need without having to travel to a local library. Furthermore, people can look for information on the Internet whenever they want, while most libraries can only be visited during several hours per day. This is therefore particularly beneficial to those who have a hectic schedule and cannot visit these places during the operating hours.
                  However, the preservation of local libraries is still necessary because of their distinguishing features which cannot be substituted by online <br /> <br /> sources. Libraries, in some countries, are still one of the most popular means of accessing information among senior citizens, regardless of the availability of online information. In fact, most elderly people these days are technophobes and therefore physical libraries are their preferred option. Furthermore, public libraries can be considered a more reliable source of information, compared with online sources. Indeed, there is an abundance of inaccurate and unreliable information on the Internet, while libraries have proved to be a more reliable information source, with the information being carefully categorized by library staff members. <br /> <br />

                  In conclusion, despite the benefits of computer technology in providing information, in my opinion, there are good grounds for rejecting the view that spending money on maintaining public libraries is unnecessary.

                </p> <br />
                <span className='w-full justify-end ml-[-20px] text-blue-700'>(296 words)</span>
              </div>

            </section>
          </div>
        </div>
      }




    </div>
  )
}

export default WrittingPage


































