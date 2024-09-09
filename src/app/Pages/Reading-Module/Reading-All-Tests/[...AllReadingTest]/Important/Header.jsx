"use client"
import React, { useState } from 'react';
import "../TestAllStyles/Header.css";
import logo from "../../../../../../assets/images/Practestlogo.png";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
//icons---------
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { FaTextWidth } from "react-icons/fa";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BsFillCloudHaze2Fill } from "react-icons/bs";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillCheckSquareFill } from "react-icons/bs"
import { MdSettingsVoice } from "react-icons/md";
import { BsChevronUp } from "react-icons/bs"
// end of Importing...........



function Header({ handleIncressFontSize, handleDecressFontSize }) {
  const history = useRouter();
  //state for header toggling---when you click the show information-----
  const [toggleTestInfo, setToggleTestInfo] = useState(false);

  // for return back at home page---->
  const backtoHomePage = () => {
    history.push("/")
  }

  return (
    <section className='HeaderSection'>

      {/* for-Header_toggle-section it will open when will click Show Infor ---*/}
      {toggleTestInfo && (<div className="first_row">

        <div className="divs_1">
          <div className="div_1">
            <h1>IELTS</h1>
            <p>AC Reading..</p>
            <h3>Volume 3</h3>
          </div>
          <div className="div_2">
            <div className="sub">
              <h3>IELTS Academic Test With</h3>
              <h3>Answer (Vol 3) </h3>
            </div>
            <div className="sub">
              <p>4.00 ** (12 votes)</p>
            </div>

          </div>
        </div>

        <div className="divs_2">
          <div className="sub_1">
            <i><BsCalendar3 /></i>
            <p>Published on : 23 feb 2020</p>
          </div>
          <div className="sub_2">
            <i><AiOutlineEye /></i>
            <p>Views : 36437</p>
          </div>
          <div className="sub_3">
            <i><BsFillCheckSquareFill /></i>
            <p>Test Taken : 4774</p>
          </div>


        </div>



        <div className="divs_3">
          <i className='cursur-pointer'><MdSettingsVoice onClick={() => { history.push("/SpeakingPage") }} /></i>
          <p>LISTENING PRACTICE TEST 1</p>
        </div>

        <div className="divs_4 cursor-pointer" onClick={backtoHomePage}>
          <Image src={logo} alt="image for going back" />
        </div>



      </div>
      )};


      {/* second_row ------------*/}
      <div className="second_row">

        {/* the icons for showing more information in header by clicking             */}
        <div className="toggleMenu">
          <i className='menuIcon' onClick={() => { setToggleTestInfo(!toggleTestInfo) }}>
            {
              toggleTestInfo ? <BsChevronUp /> : <AiOutlineDown />
            }
          </i>
          <h3>Show Test Inf.</h3>
        </div>

        <div className="icons-manu">
          <ul className='icons'>
            <li className='icon'>
              <BsShare />
            </li>
            <li className='icon'>
              <BsFillExclamationTriangleFill />
            </li>
            {/* handle_panels_FontSize by this clicking functions.....*/}
            <li className='flex'>
              <BsArrowUp onClick={handleIncressFontSize} />
              <FaTextWidth />
              <BsArrowDown onClick={handleDecressFontSize} />
            </li>
            <li className='icon'>
              <FaDownload />
            </li>
            <li className='icon'>
              <FaQuestionCircle />
            </li>
            <li className='icon'>
              <BsFillCloudHaze2Fill />
            </li>
            <li className='icon'>
              <TbArrowBigLeftLinesFilled />
            </li>
          </ul>
        </div>

        {/* hide this particular section when some one click on Show Information Icon----- */}
        {
          toggleTestInfo ? "" : (<div
            onClick={backtoHomePage}
            className="w-[90px] h-[45px] cursor-pointer">
            <Image className="w-[90px] mt-1 h-[40px] sm:h-[45px]"
              src={logo} alt="back to home page" />
          </div>)
        }
      </div>





      {/* for Showing the Icons When Screen will be less then 700px */}
      <div className="showIcons">
        <ul className='icons'>
          <li className='icon'>
            <BsShare />
          </li>
          <li className='icon'>
            <BsFillExclamationTriangleFill />
          </li>
          {/* handle_panels_FontSize by this clicking functions.....*/}
          <li className='flex'>
            <BsArrowUp onClick={handleIncressFontSize} />
            <FaTextWidth />
            <BsArrowDown onClick={handleDecressFontSize} />
          </li>
          <li className='icon'>
            <FaDownload />
          </li>
          <li className='icon'>
            <FaQuestionCircle />
          </li>
          <li className='icon'>
            <BsFillCloudHaze2Fill />
          </li>
          <li className='icon'>
            <TbArrowBigLeftLinesFilled />
          </li>
        </ul>

      </div>

    </section>
  )
};







export default Header

























