"use client"
import { useState, useEffect } from 'react';
import { MdRateReview } from "react-icons/md"
import UserFeedBack from "../../../../../../components/UserComments";
import { BsBalloonHeartFill } from "react-icons/bs";
import './index.css';
import ListeningHeader from './ListeningHeader';
import ListeningFooter from './ListeninhgFooter';
import LTips from './Tips';

import { useStateContext } from '../../../../../../contexts/ContextProvider';
import ExplanationsPopup from "../../../../Reading-Module/Reading-All-Tests/[...AllReadingTest]/Important/ExplanationsPopup";

//Actual Tests
import ListeningTest1 from '../All-Tests/Actual-tests/Test1/ListeningPage';
import ListeningTest2 from '../All-Tests/Actual-tests/Test2/ListeningPage';
import ListeningTest3 from '../All-Tests/Actual-tests/Test3/ListeningPage';
import ListeningTest4 from '../All-Tests/Actual-tests/Test4/ListeningPage';
import ListeningTest5 from '../All-Tests/Actual-tests/Test5/ListeningPage';
import ListeningTest6 from '../All-Tests/Actual-tests/Test6/ListeningPage';
import ListeningTest7 from '../All-Tests/Actual-tests/Test7/ListeningPage';
import ListeningTest8 from '../All-Tests/Actual-tests/Test8/ListeningPage';
// import ListeningTest9 from '../All-Tests/Actual-tests/Test9/ListeningPage';
// import ListeningTest10 from '../All-Tests/Actual-tests/Test10/ListeningPage';
// import ListeningTest11 from '../All-Tests/Actual-tests/Test11/ListeningPage';
// import ListeningTest12 from '../All-Tests/Actual-tests/Test12/ListeningPage';
//Cambridge-Tests-------
import CambridgeTest1 from "../All-Tests/Cambridge-tests/Test1/ListeningPage";
import CambridgeTest2 from "../All-Tests/Cambridge-tests/Test2/ListeningPage"
import CambridgeTest3 from "../All-Tests/Cambridge-tests/Test3/ListeningPage"
import CambridgeTest4 from "../All-Tests/Cambridge-tests/Test4/ListeningPage"
import CambridgeTest5 from "../All-Tests/Cambridge-tests/Test5/ListeningPage"
import CambridgeTest6 from "../All-Tests/Cambridge-tests/Test6/ListeningPage"
import CambridgeTest7 from "../All-Tests/Cambridge-tests/Test7/ListeningPage"
import CambridgeTest8 from "../All-Tests/Cambridge-tests/Test8/ListeningPage"
import CambridgeTest9 from "../All-Tests/Cambridge-tests/Test9/ListeningPage"
import CambridgeTest10 from "../All-Tests/Cambridge-tests/Test10/ListeningPage"
import CambridgeTest11 from "../All-Tests/Cambridge-tests/Test11/ListeningPage"
import CambridgeTest12 from "../All-Tests/Cambridge-tests/Test12/ListeningPage"



//end importing-------



function App({ testName }) {
  const { explainRLQuestions, setExplainRLQuestions } = useStateContext();
  //all localstorage data storing by the help of those thates..
  const [ModulesListening, setModulesListening] = useState("");
  const [userCountry, setuserCountry] = useState("")

  const [AnswersData, setAnswersData] = useState(null);
  const [handlePageFontSize, setHandleFontSize] = useState(15);
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

  //  submitted answers for showing at submit popup---------->>             
  // functiona for answerDatat-------
  useEffect(() => {
    setModulesListening(localStorage.getItem("ModulesListening"));
    setuserCountry(localStorage.getItem("setCountry"))

  }, [])


  const AllAnswersData = (x) => {
    // console.log(x)
    useEffect(() => {
      setAnswersData((prev) => {
        return x
      })
    }, [])
  }

  //function for comment pop up---
  const closeCommentPopUp = () => {
    setCommentPopUp(!forShowCommentPopUp);
    setWaveTit(false)
  }




  //function for handle_Listening_Inputs---------------
  const handleValueChange = (x) => {
    const Names = x.target.name;
    const Values = x.target.value;
    setUserdata((objs) => {
      return { ...objs, [Names]: Values }
    });

  }



  //functions for Panels_FontSizes--------
  const handleIncressFontSize = () => {
    setHandleFontSize(handlePanelfontSize => handlePanelfontSize + 2)
  };
  const handleDecressFontSize = () => {
    setHandleFontSize(handlePanelfontSize => handlePanelfontSize - 2)
  }




  //main rendering---              
  return (
    <div className="App">
      <ListeningHeader
        handleDecressFontSize={handleDecressFontSize}
        handleIncressFontSize={handleIncressFontSize}
      />
      {/* Actual-All-Tests */}
      <div className='ListeningPage pb-[100px]' style={{ fontSize: handlePageFontSize }}>
        {testName === "Actual-test-1" && (<ListeningTest1 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Actual-test-2" && (<ListeningTest2 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Actual-test-3" && (<ListeningTest3 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Actual-test-4" && (<ListeningTest4 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Actual-test-5" && (<ListeningTest5 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Actual-test-6" && (<ListeningTest6 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Actual-test-7" && (<ListeningTest7 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Actual-test-8" && (<ListeningTest8 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {/* {testName === "Actual-test-9" && (<ListeningTest9 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} />)}
        {testName === "Actual-test-10" && (<ListeningTest10 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} />)}
        {testName === "Actual-test-11" && (<ListeningTest11 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} />)}
        {testName === "Actual-test-12" && (<ListeningTest12 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} />)} */}

        {/* Cambridge-All-Tests */}
        {testName === "Cambridge-test-1" && (<CambridgeTest1 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-2" && (<CambridgeTest2 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-3" && (<CambridgeTest3 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-4" && (<CambridgeTest4 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-5" && (<CambridgeTest5 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-6" && (<CambridgeTest6 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-7" && (<CambridgeTest7 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-8" && (<CambridgeTest8 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-9" && (<CambridgeTest9 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-10" && (<CambridgeTest10 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-11" && (<CambridgeTest11 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}
        {testName === "Cambridge-test-12" && (<CambridgeTest12 handleValueChange={handleValueChange} AllAnswersData={AllAnswersData} UserData={UserData} />)}







      </div>

      <ListeningFooter UserData={UserData} AnswersData={AnswersData} setPassComment={setPassComment} setWaveTit={setWaveTit} testName={testName} />
      {/* for some tips */}
      {userCountry === "Bangladesh" && <LTips />}
      {/* for pass user reviews */}
      {
        forShowCommentPopUp && <UserFeedBack closeCommentPopUp={closeCommentPopUp} setPassComment={setPassComment} />
      }
      {
        forPassComment && (
          <div className='L-commentsIcon'>
            {waveTit && (<p className='CommentTitle flex gap-1'><i className='text-white'>Your comment is our Heart</i>
              <BsBalloonHeartFill className="text-3xl text-red-500" /></p>)}
            <div className="L-forComment"
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

export default App;













