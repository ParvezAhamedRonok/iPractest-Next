"use client"
import dynamic from 'next/dynamic';
import { useEffect, useState, Suspense } from 'react';
import "../TestAllStyles/index.css";
import "../TestAllStyles/ReadingPageStyle.css";
import RTips from "./Tips";
import { MdRateReview } from "react-icons/md"
import UserFeedBack from "../../../../../../components/UserComments";
import { BsBalloonHeartFill } from "react-icons/bs";
import { useStateContext } from "../../../../../../contexts/ContextProvider";


//client components....
const Reading = dynamic(() => import('./reading'), { ssr: false });
const ExplanationsPopup = dynamic(() => import('./ExplanationsPopup'), { ssr: false });
const Header = dynamic(() => import('./Header'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

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
      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        <Header className="Header" handleDecressFontSize={handleDecressFontSize} handleIncressFontSize={handleIncressFontSize} />
      </Suspense>

      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        <header className="App-header" style={{ fontSize: handlePanelfontSize }}>
          <Reading
            handleChange={handleChange}
            AnswersData={AllAnswersData}
            UserData={UserData}
            testName={testName}

          />
        </header>
      </Suspense>


      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        <Footer UserData={UserData}
          AnswersData={AnswersData}
          setPassComment={setPassComment}
          setWaveTit={setWaveTit}
          testName={testName}
        />
      </Suspense>

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
      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        {
          explainRLQuestions && <ExplanationsPopup />
        }

      </Suspense>


    </div>
  )
}

export default Main;













