"use client"
import "../TestAllStyles/index.css";
import Header from './Header';
import Footer from './Footer';
import Reading from "./reading";
import { useEffect, useState } from 'react';
import "../TestAllStyles/ReadingPageStyle.css";
import RTips from "./Tips";
import { MdRateReview } from "react-icons/md"
import UserFeedBack from "../../../../../../components/UserComments";
import { BsBalloonHeartFill } from "react-icons/bs";
import { useStateContext } from "../../../../../../contexts/ContextProvider";
import ExplanationsPopup from "./ExplanationsPopup";
//end importing-------





function Main({ testName }) {
  const { explainRLQuestions, setExplainRLQuestions } = useStateContext();
  //all localstorage data save into states....
  const [userCountry, setUserCountry] = useState("")
  const [handlePanelfontSize, sethandlePanelfontSize] = useState(15);
  const [AnswersData, setAnswersData] = useState(null);
  const [forPassComment, setPassComment] = useState(false);
  const [forShowCommentPopUp, setCommentPopUp] = useState(false);
  const [waveTit, setWaveTit] = useState(true)

  //send all Userdata to Review Page which data got from all the panel form sections by 
  const [UserData, setUserdata] = useState({
    ques1: "", ques2: '', ques3: "", ques4: "", ques5: '', ques6: '', ques7: '', ques8: "", ques9: '', ques10: "",
    ques11: "", ques12: "", ques13: "", ques14: "", ques15: '', ques16: "", ques17: "", ques18: '', ques19: '',
    ques20: '', ques21: "", ques22: "", ques23: "", ques24: "", ques25: "", ques26: "",
    ques27: "", ques28: '', ques29: "", ques30: "", ques31: '', ques32: '', ques33: '', ques34: "", ques35: '', ques36: "",
    ques37: "", ques38: "", ques39: "", ques40: ""
  });


  useEffect(() => {
    //set localstorage data....
    setUserCountry(localStorage.getItem("setCountry"))
  }, [])


  // functiona for answerDatat-------
  const AllAnswersData = (x) => {
    // console.log(x)
    useEffect(() => {
      setAnswersData((prev) => {
        return x
      })
    }, [])
  }
  // console.log(AnswersData)
  //function for comment pop up---
  const closeCommentPopUp = () => {
    setCommentPopUp(!forShowCommentPopUp);
    setWaveTit(false)
  }




  // for(let x in UserData){
  //   let Ques1 = "ques1";
  //   let ekys = UserData.ekys;

  //   let ques1 = UserData[x]
  //   console.log(ques1);
  // }












  //function for handle_Panel_Forms_Inputs---------------
  const handleChange = (x) => {
    const Names = x.target.name;
    const Values = x.target.value;
    setUserdata((objs) => {
      return { ...objs, [Names]: Values }
    });
    console.log(Values)
  }



  //functions for Panels_FontSizes--------
  const handleIncressFontSize = () => {
    sethandlePanelfontSize(handlePanelfontSize => handlePanelfontSize + 2)
  };
  const handleDecressFontSize = () => {
    sethandlePanelfontSize(handlePanelfontSize => handlePanelfontSize - 2)
  }




  //main rendering---              
  return (
    <div className="Main">
      <Header className="Header" handleDecressFontSize={handleDecressFontSize} handleIncressFontSize={handleIncressFontSize} />
      <header className="App-header" style={{ fontSize: handlePanelfontSize }}>
        <Reading
          handleChange={handleChange}
          AnswersData={AllAnswersData}
          UserData={UserData}
          testName={testName}

        />
      </header>
      <Footer UserData={UserData}
        AnswersData={AnswersData}
        setPassComment={setPassComment}
        setWaveTit={setWaveTit}
        testName={testName}
      />
      {/* for some tips */}
      {userCountry === "Bangladesh" && <RTips />}
      {/* for pass user reviews */}
      {
        forShowCommentPopUp && <UserFeedBack closeCommentPopUp={closeCommentPopUp} setPassComment={setPassComment} />
      }
      {
        forPassComment && (
          <div className='R-commentsIcon'>
            {waveTit && (<p className='CommentTitle flex gap-1'><i className="text-white">Your comment is our Heart</i>
              <BsBalloonHeartFill className="text-3xl text-red-500" /></p>)}
            <div className="R-forComment"
              onClick={closeCommentPopUp}
            >
              <MdRateReview
                className="text-white text-2xl"
              />
            </div>
          </div>
        )
      }

      {/* Explanations for reading sections........... */}
      {
        explainRLQuestions && <ExplanationsPopup />
      }


    </div>
  )
}

export default Main;













