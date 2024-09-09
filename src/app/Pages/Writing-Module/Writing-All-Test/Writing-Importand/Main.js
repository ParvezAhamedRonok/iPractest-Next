"use client";
import Header from "./Pages/WrittingHeader"
import { useEffect, useState } from 'react';
// import WritingPricingPage from "../../../HomeThree/PricingHomeThree"
import WritingServices from "./Pages/WritingServices";
import Timer from "./Pages/Timer";
import WTips from "./Pages/Tips";

//Actual-witing-test1------------
import WrittingTest1 from "../AllTests/Actual-All-Tests/Test1/WrittingPage";
import WrittingTest2 from "../AllTests/Actual-All-Tests/Test2/WrittingPage";
import WrittingTest3 from "../AllTests/Actual-All-Tests/Test3/WrittingPage";
import WrittingTest4 from "../AllTests/Actual-All-Tests/Test4/WrittingPage";
import WrittingTest5 from "../AllTests/Actual-All-Tests/Test5/WrittingPage";
import WrittingTest6 from "../AllTests/Actual-All-Tests/Test6/WrittingPage";
import WrittingTest7 from "../AllTests/Actual-All-Tests/Test7/WrittingPage";
import WrittingTest8 from "../AllTests/Actual-All-Tests/Test8/WrittingPage";
import WrittingTest9 from "../AllTests/Actual-All-Tests/Test9/WrittingPage";
import WrittingTest10 from "../AllTests/Actual-All-Tests/Test10/WrittingPage";
import WrittingTest11 from "../AllTests/Actual-All-Tests/Test11/WrittingPage";
import WrittingTest12 from "../AllTests/Actual-All-Tests/Test12/WrittingPage";
import WrittingTest13 from "../AllTests/Actual-All-Tests/Test11/WrittingPage";
import WrittingTest14 from "../AllTests/Actual-All-Tests/Test12/WrittingPage";
//All Writing Cambridge Tests Paths...

//end importing-------




function Main({ testID }) {
  // match text by localStorage & show it's panels
  const [userCountry, setuserCountry] = useState("")

  useEffect(() => {
    setuserCountry(localStorage.getItem("setCountry"));
    //set Writing test-name into localstorage for geetting this variable globally into all writig functions...
    localStorage.setItem("Writing-Test-Name", testID);
  }, [])










  const [handlePanelfontSize, sethandlePanelfontSize] = useState(15);
  //functions for Panels_FontSizes--------
  const handleIncressFontSize = () => {
    sethandlePanelfontSize(handlePanelfontSize => handlePanelfontSize + 2)
  };
  const handleDecressFontSize = () => {
    sethandlePanelfontSize(handlePanelfontSize => handlePanelfontSize - 2)
  }




  //main rendering---              
  return (
    <div className="Main-Container bg-[#eef1f6]">
      <Header handleDecressFontSize={handleDecressFontSize} handleIncressFontSize={handleIncressFontSize} />
      <div className="w-full sm:w-2/3 p-5 " style={{ fontSize: handlePanelfontSize }}>
        {testID === "Actual-test-1" && (<WrittingTest1 />)}
        {testID === "Actual-test-2" && (<WrittingTest2 />)}
        {testID === "Actual-test-3" && (<WrittingTest3 />)}
        {testID === "Actual-test-4" && (<WrittingTest4 />)}
        {testID === "Actual-test-5" && (<WrittingTest5 />)}
        {testID === "Actual-test-6" && (<WrittingTest6 />)}
        {testID === "Actual-test-7" && (<WrittingTest7 />)}
        {testID === "Actual-test-8" && (<WrittingTest8 />)}
        {testID === "Actual-test-9" && (<WrittingTest9 />)}
        {testID === "Actual-test-10" && (<WrittingTest10 />)}
        {testID === "Actual-test-11" && (<WrittingTest11 />)}
        {testID === "Actual-test-12" && (<WrittingTest12 />)}
        {testID === "Actual-test-13" && (<WrittingTest13 />)}
        {testID === "Actual-test-14" && (<WrittingTest14 />)}
        {/* //All Writing Cambridge Tests ... */}
        {testID === "Cambridge-test-1" && (<WrittingTest1 />)}
        {testID === "Cambridge-test-2" && (<WrittingTest2 />)}
        {testID === "Cambridge-test-3" && (<WrittingTest3 />)}
        {testID === "Cambridge-test-4" && (<WrittingTest4 />)}
        {testID === "Cambridge-test-5" && (<WrittingTest5 />)}
        {testID === "Cambridge-test-6" && (<WrittingTest6 />)}
        {testID === "Cambridge-test-7" && (<WrittingTest7 />)}
        {testID === "Cambridge-test-8" && (<WrittingTest8 />)}
        {testID === "Cambridge-test-9" && (<WrittingTest9 />)}
        {testID === "Cambridge-test-10" && (<WrittingTest10 />)}
        {testID === "Cambridge-test-11" && (<WrittingTest11 />)}
        {testID === "Cambridge-test-12" && (<WrittingTest12 />)}
        {testID === "Cambridge-test-13" && (<WrittingTest13 />)}
        {testID === "Cambridge-test-14" && (<WrittingTest14 />)}





      </div>
      <WritingServices />

      <div
        className="W-timer p-1 text-white font-bold text-[30px] fixed text-center
                            bottom-[-6px] w-full left-0 rounded z-[209900990] bg-[#2F4F4F]">
        <i className="not-italic w-[160px] translate-y-[-20px] p-[5px] bg-[#2F4F4F]  rounded-tl-[50%]  rounded-tr-[50%]">
          <Timer Second={3600} />
        </i>
      </div>
      {/* for Tip's */}
      {userCountry === "Bangladesh" && <WTips />}

    </div>
  )
}

export default Main;













