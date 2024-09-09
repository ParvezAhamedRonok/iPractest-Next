"use client"
import React, { useState, useEffect } from 'react';
import "../TestAllStyles/Footer.css";
import CounterDown from './CounterDown';
import Preview from "./Preview";
import SubmitReading from './SubmitReading';
import axios from 'axios';
//Icons---
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { isAndroid } from "react-device-detect";
import { SIMPLE_API_FOR_POST } from "../../../../../../assets/URL's/AllUrl"
import { useStateContext } from "../../../../../../contexts/ContextProvider";
// end importing

function Footer({ UserData, AnswersData, setPassComment, setWaveTit, testName }) {
  const { ReadingShowAnswer, setReadingShowAnswer } = useStateContext();
  // states for toggling Footer & Review Pages 
  const [toggleForFooter, setToggleForFootter] = useState(false);
  const [togglePreview, settogglePreview] = useState(false);
  const [toggleSubmit, settoggleSubmit] = useState(false);


  //----ReviewPage Handeling by this function & set into the state for using in components-----
  const handleReviewPage = (x) => {
    settogglePreview(!togglePreview);
    settoggleSubmit(false);
  }





  // for submit all users data by post request-- ----------->
  const handleReadingUsersData = (x) => {
    x.preventDefault();
    setReadingShowAnswer(testName)
    axios.post(SIMPLE_API_FOR_POST, UserData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
    settoggleSubmit(!toggleSubmit);
    settogglePreview(false);

  }










  //main Rendering-----------     
  return (
    // this Wrapper like as Html Section which make by the style Componet
    <section className='R-FooterSection'>
      <div className="div_1">
        <div className="left_btn div_colum">
          <i className='icons'><FaRegCalendarAlt /></i>
          <h2>Question Palette</h2>
        </div>

        {/* for CountDown Timer got Counter componet */}
        <div className="timer">
          {isAndroid && <i className='icons'><BiTime /></i>}
          <div className="timerDiv bg-">
            <CounterDown Second={3600} />
          </div>
        </div>



        {/* for for submit and Review all users Data */}

        <div className="right_btn div_colum">
          <div className="buttons">
            <button className='btn '
              onClick={handleReadingUsersData}
            >
              <i><BsRocketTakeoff /> </i>
              <i className='leading-[15px] text-[14px] pb-1'>Check-Answers</i>
            </button>

            <button
              className='btn'
              onClick={handleReviewPage}>
              <i><FaRegEye /></i>
              Review
            </button>
          </div>


          {/* open footer hiding page by clicking this icons*/}
          <i className="right_icon icons"
            onClick={() => {
              setToggleForFootter(!toggleForFooter)
            }}
          >
            {
              toggleForFooter ? <AiOutlineDown /> : <BsChevronUp />
            }
          </i>
        </div>
      </div>

      {/* for showing the Preview & Submited Answers Sections */}
      {
        togglePreview && <Preview
          UserData={UserData}
          handleReviewPage={handleReviewPage} />
      }

      {
        toggleSubmit && <SubmitReading
          UserData={UserData}
          handleReadingUsersData={handleReadingUsersData}
          AnswersData={AnswersData}
          setPassComment={setPassComment}
          setWaveTit={setWaveTit}
          testName={testName}
        />
      }





      {/* Page for showing users filled inputs by All PanelS_form_Inputs */}
      {
        toggleForFooter && (
          <div className="div_2">
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques1 === "" ? "" : "green" }}>1</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques2 === "" ? "" : "green" }}>2</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques3 === "" ? "" : "green" }}>3</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques4 === "" ? "" : "green" }}>4</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques5 === "" ? "" : "green" }}>5</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques6 === "" ? "" : "green" }}>6</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques7 === "" ? "" : "green" }}>7</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques8 === "" ? "" : "green" }}>8</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques9 === "" ? "" : "green" }}>9</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques10 === "" ? "" : "green" }}>10</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques11 === "" ? "" : "green" }}>11</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques12 === "" ? "" : "green" }}>12</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques13 === "" ? "" : "green" }}>13</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques14 === "" ? "" : "green" }}>14</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques15 === "" ? "" : "green" }}>15</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques16 === "" ? "" : "green" }}>16</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques17 === "" ? "" : "green" }}>17</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques18 === "" ? "" : "green" }}>18</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques19 === "" ? "" : "green" }}>19</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques20 === "" ? "" : "green" }}>20</div>

            <div className="div_2_divs" style={{ backgroundColor: UserData.ques21 === "" ? "" : "green" }}>21</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques22 === "" ? "" : "green" }}>22</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques23 === "" ? "" : "green" }}>23</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques24 === "" ? "" : "green" }}>24</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques25 === "" ? "" : "green" }}>25</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques26 === "" ? "" : "green" }}>26</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques27 === "" ? "" : "green" }}>27</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques28 === "" ? "" : "green" }}>28</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques29 === "" ? "" : "green" }}>29</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques30 === "" ? "" : "green" }}>30</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques31 === "" ? "" : "green" }}>31</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques32 === "" ? "" : "green" }}>32</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques33 === "" ? "" : "green" }}>33</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques34 === "" ? "" : "green" }}>34</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques35 === "" ? "" : "green" }}>35</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques36 === "" ? "" : "green" }}>36</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques37 === "" ? "" : "green" }}>37</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques38 === "" ? "" : "green" }}>38</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques39 === "" ? "" : "green" }}>39</div>
            <div className="div_2_divs" style={{ backgroundColor: UserData.ques40 === "" ? "" : "green" }}>40</div> <br /> <br />


          </div>

        )}

    </section>
  )
};




export default Footer



