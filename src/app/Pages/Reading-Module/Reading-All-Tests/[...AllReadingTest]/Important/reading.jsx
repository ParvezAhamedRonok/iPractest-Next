"use client"
import React, { useEffect, useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
import '../TestAllStyles/ReadingPageStyle.css'
import "../TestAllStyles/Panel1All.css";
import { isMobile } from "react-device-detect";
// import { useParams } from "react-router-dom"; 
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { LiaReadme } from "react-icons/lia";
// all Actual-tests Components--------------->
//const Test1Panel2_Page1 = dynamic(() => import('../All-Tests/Actual-all-tests/Test1/Panel2_Page1'), { ssr: false });
//test1---
import Test1Panel1_Page1 from "../All-Tests/Actual-all-tests/Test1/Panel1_Page1";
import Test1Panel1_Page2 from "../All-Tests/Actual-all-tests/Test1/Panel1_Page2";
import Test1Panel2_Page1 from "../All-Tests/Actual-all-tests/Test1/Panel2_Page1";
import Test1Panel2_Page2 from "../All-Tests/Actual-all-tests/Test1/Panel2_Page2";
//test-2-----
import Test2Panel1_Page1 from "../All-Tests/Actual-all-tests/Test2/Panel1_Page1";
import Test2Panel1_Page2 from "../All-Tests/Actual-all-tests/Test2/Panel1_Page2";
import Test2Panel2_Page1 from "../All-Tests/Actual-all-tests/Test2/Panel2_Page1";
import Test2Panel2_Page2 from "../All-Tests/Actual-all-tests/Test2/Panel2_Page2";
//test-3-----
import Test3Panel1_Page1 from "../All-Tests/Actual-all-tests/Test3/Panel1_Page1";
import Test3Panel1_Page2 from "../All-Tests/Actual-all-tests/Test3/Panel1_Page2";
import Test3Panel2_Page1 from "../All-Tests/Actual-all-tests/Test3/Panel2_Page1";
import Test3Panel2_Page2 from "../All-Tests/Actual-all-tests/Test3/Panel2_Page2"
//test-4-----
import Test4Panel1_Page1 from "../All-Tests/Actual-all-tests/Test4/Panel1_Page1";
import Test4Panel1_Page2 from "../All-Tests/Actual-all-tests/Test4/Panel1_Page2";
import Test4Panel2_Page1 from "../All-Tests/Actual-all-tests/Test4/Panel2_Page1";
import Test4Panel2_Page2 from "../All-Tests/Actual-all-tests/Test4/Panel2_Page2"

//test-5-----
import Test5Panel1Page1 from "../All-Tests/Actual-all-tests/Test5/Panel1_Page1";
import Test5Panel1Page2 from "../All-Tests/Actual-all-tests/Test5/Panel1_Page2"
import Test5Panel2 from "../All-Tests/Actual-all-tests/Test5/Panel2";
import Test5Panel2Question2 from "../All-Tests/Actual-all-tests/Test5/Panel2Q_2";

//test-6-----
import Test6Panel1Page1 from "../All-Tests/Actual-all-tests/Test6/Panel1_Page1";
import Test6Panel1Page2 from "../All-Tests/Actual-all-tests/Test6/Panel1_Page2"
import Test6Panel2 from "../All-Tests/Actual-all-tests/Test6/Panel2";
import Test6Panel2Question2 from "../All-Tests/Actual-all-tests/Test6/Panel2Q_2";

//test-7-----
import Test7Panel1Page1 from "../All-Tests/Actual-all-tests/Test7/Panel1_Page1";
import Test7Panel1Page2 from "../All-Tests/Actual-all-tests/Test7/Panel1_Page2";
import Test7Panel2 from "../All-Tests/Actual-all-tests/Test7/Panel2";
import Test7Panel2Question2 from "../All-Tests/Actual-all-tests/Test7/Panel2Q_2";
//test-8-----
import Test8Panel1Page1 from "../All-Tests/Actual-all-tests/Test8/Panel1_Page1";
import Test8Panel1Page2 from "../All-Tests/Actual-all-tests/Test8/Panel1_Page2"
import Test8Panel2 from "../All-Tests/Actual-all-tests/Test8/Panel2";
import Test8Panel2Question2 from "../All-Tests/Actual-all-tests/Test8/Panel2Q_2";

//test-9-----
import Test9Panel1_Page1 from "../All-Tests/Actual-all-tests/Test9/Panel1_Page1";
import Test9Panel1_Page2 from "../All-Tests/Actual-all-tests/Test9/Panel1_Page2";
import Test9Panel2_Page1 from "../All-Tests/Actual-all-tests/Test9/Panel2_Page1";
import Test9Panel2_Page2 from "../All-Tests/Actual-all-tests/Test9/Panel2_Page2";
//test-10-----
import Test10Panel1_Page1 from "../All-Tests/Actual-all-tests/Test10/Panel1_Page1";
import Test10Panel1_Page2 from "../All-Tests/Actual-all-tests/Test10/Panel1_Page2";
import Test10Panel2_Page1 from "../All-Tests/Actual-all-tests/Test10/Panel2_Page1";
import Test10Panel2_Page2 from "../All-Tests/Actual-all-tests/Test10/Panel2_Page2"
//test-11-----
import Test11Panel1_Page1 from "../All-Tests/Actual-all-tests/Test11/Panel1_Page1";
import Test11Panel1_Page2 from "../All-Tests/Actual-all-tests/Test11/Panel1_Page2";
import Test11Panel2_Page1 from "../All-Tests/Actual-all-tests/Test11/Panel2_Page1";
import Test11Panel2_Page2 from "../All-Tests/Actual-all-tests/Test11/Panel2_Page2"
//test-12-----
import Test12Panel1_Page1 from "../All-Tests/Actual-all-tests/Test12/Panel1_Page1";
import Test12Panel1_Page2 from "../All-Tests/Actual-all-tests/Test12/Panel1_Page2";
import Test12Panel2_Page1 from "../All-Tests/Actual-all-tests/Test12/Panel2";
import Test12Panel2_Page2 from "../All-Tests/Actual-all-tests/Test12/Panel2Q_2";
//test-13-----




// all Cambridge-tests Components--------------->
//test-1-----
import Cambidge_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test1/Panel1_Page1";
import Cambidge_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test1/Panel1_Page2";
import Cambidge_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test1/Panel2_Page1";
import Cambidge_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test1/Panel2_Page2"
//test-2-----
import CambidgeTest2_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test2/Panel1_Page1";
import CambidgeTest2_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test2/Panel1_Page2";
import CambidgeTest2_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test2/Panel2_Page1";
import CambidgeTest2_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test2/Panel2_Page2"
//test-3-----
import CambidgeTest3_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test3/Panel1_Page1";
import CambidgeTest3_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test3/Panel1_Page2";
import CambidgeTest3_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test3/Panel2_Page1";
import CambidgeTest3_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test3/Panel2_Page2"
//test-4-----
import CambidgeTest4_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test4/Panel1_Page1";
import CambidgeTest4_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test4/Panel1_Page2";
import CambidgeTest4_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test4/Panel2_Page1";
import CambidgeTest4_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test4/Panel2_Page2"
//test-5-----
import CambidgeTest5_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test5/Panel1_Page1";
import CambidgeTest5_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test5/Panel1_Page2";
import CambidgeTest5_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test5/Panel2_Page1";
import CambidgeTest5_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test5/Panel2_Page2"

//test-6-----
import CambidgeTest6_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test6/Panel1_Page1";
import CambidgeTest6_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test6/Panel1_Page2";
import CambidgeTest6_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test6/Panel2_Page1";
import CambidgeTest6_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test6/Panel2_Page2"
//test-7-----
import CambidgeTest7_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test7/Panel1_Page1";
import CambidgeTest7_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test7/Panel1_Page2";
import CambidgeTest7_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test7/Panel2_Page1";
import CambidgeTest7_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test7/Panel2_Page2"
//test-8-----
import CambidgeTest8_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test8/Panel1_Page1";
import CambidgeTest8_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test8/Panel1_Page2";
import CambidgeTest8_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test8/Panel2_Page1";
import CambidgeTest8_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test8/Panel2_Page2"


//test-9-----
import CambidgeTest9_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test9/Panel1_Page1";
import CambidgeTest9_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test9/Panel1_Page2";
import CambidgeTest9_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test9/Panel2_Page1";
import CambidgeTest9_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test9/Panel2_Page2"

//test-10-----
import CambidgeTest10_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test10/Panel1_Page1";
import CambidgeTest10_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test10/Panel1_Page2";
import CambidgeTest10_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test10/Panel2_Page1";
import CambidgeTest10_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test10/Panel2_Page2"
//test-11-----
import CambidgeTest11_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test11/Panel1_Page1";
import CambidgeTest11_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test11/Panel1_Page2";
import CambidgeTest11_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test11/Panel2_Page1";
import CambidgeTest11_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test11/Panel2_Page2"
//test-12-----
import CambidgeTest12_P1_Q1 from "../All-Tests/Cambridge-all-tests/Test12/Panel1_Page1";
import CambidgeTest12_P1_Q2 from "../All-Tests/Cambridge-all-tests/Test12/Panel1_Page2";
import CambidgeTest12_P2_Q1 from "../All-Tests/Cambridge-all-tests/Test12/Panel2_Page1";
import CambidgeTest12_P2_Q2 from "../All-Tests/Cambridge-all-tests/Test12/Panel2_Page2"






// end importing....... 





function Reading({ handleChange, AnswersData, UserData, testName }) {
    // const { id } = useParams();
    // console.log(id)
    // match text by localStorage & show it's panels
    const [moduelNo, setmoduelNo] = useState("");

    const [Panelsizes, setPanelSizes] = useState([100, '8%', 'auto',]);

    // for Change Desktop Sizes Panels Pages 
    const [forPage1, setforPage1] = useState(true);
    // for Mobile Sizes states-----
    const [mobilePanel1Pages, setMobilePanel1Page1] = useState(true);
    const [MobilePanel2Pages, setPanel2Pages] = useState(true)
    const [ActivePanels, setActivePanels] = useState(true)
    const [passage1Scroll, setPassage1Scroll] = useState(0)
    const [question1Scroll, setQuestion1Scroll] = useState(0)
    const [passage2Scroll, setPassage2Scroll] = useState(0)
    const [question2Scroll, setQuestion2Scroll] = useState(0)

    //use effect..
    useEffect(() => {
        setmoduelNo(localStorage.getItem("moduleNo"))
    }, [])





    // functions for Mobile Devices---------------->>
    const Mobilepanel1Functions = () => {
        if (mobilePanel1Pages) {

            setPassage1Scroll(getYPosition());
            document.documentElement.scrollTop = question1Scroll;
        }
        else {

            setQuestion1Scroll(getYPosition());
            document.documentElement.scrollTop = passage1Scroll;
        }

        setMobilePanel1Page1(!mobilePanel1Pages)

    }
    const Mobilepanel2Functions = () => {
        if (MobilePanel2Pages) {

            setPassage2Scroll(getYPosition());
            document.documentElement.scrollTop = question2Scroll;
        }
        else {

            setQuestion2Scroll(getYPosition());
            document.documentElement.scrollTop = passage2Scroll;
        }
        setPanel2Pages(!MobilePanel2Pages)
    }
    const ClickActivePanels = (x) => {
        setActivePanels(!ActivePanels)
    }



    function getYPosition() {
        var top = window.pageYOffset || document.documentElement.scrollTop
        return top;
    }

    // console.log(getYPosition())




    //main rendering-----
    return (
        <div className='mainContainer' id={'parentPanel'} >



            {
                isMobile ? (
                    <section id={'innersection'} className="pb-[120px]">
                        <div className='p-4' style={{ display: ActivePanels ? "initial" : "none" }}>
                            <div style={{ display: mobilePanel1Pages ? "initial" : "none" }} >
                                {moduelNo === "1" && <Test1Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "2" && <Test2Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "3" && <Test3Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "4" && <Test4Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "5" && <Test5Panel1Page1 AnswersData={AnswersData} />}
                                {moduelNo === "6" && <Test6Panel1Page1 AnswersData={AnswersData} />}
                                {moduelNo === "7" && <Test7Panel1Page1 AnswersData={AnswersData} />}
                                {moduelNo === "8" && <Test8Panel1Page1 AnswersData={AnswersData} />}
                                {moduelNo === "9" && <Test9Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "10" && <Test10Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "11" && <Test11Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "12" && <Test12Panel1_Page1 AnswersData={AnswersData} />}

                                {/* Cambridge-allPages */}
                                {testName === "cambridge-test-1" && <Cambidge_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-2" && <CambidgeTest2_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-3" && <CambidgeTest3_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-4" && <CambidgeTest4_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-5" && <CambidgeTest5_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-6" && <CambidgeTest6_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-7" && <CambidgeTest7_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-8" && <CambidgeTest8_P1_Q1 AnswersData={AnswersData} />}
                                {/* Test9-12 */}
                                {testName === "cambridge-test-9" && <CambidgeTest9_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-10" && <CambidgeTest10_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-11" && <CambidgeTest11_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "cambridge-test-12" && <CambidgeTest12_P1_Q1 AnswersData={AnswersData} />}


                            </div>
                            <div style={{ display: mobilePanel1Pages ? "none" : "initial" }}>
                                {moduelNo === "1" && <Test1Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "2" && <Test2Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "3" && <Test3Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "4" && <Test4Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "5" && <Test5Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "6" && <Test6Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "7" && <Test7Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "8" && <Test8Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "9" && <Test9Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "10" && <Test10Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "11" && <Test11Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "12" && <Test12Panel2_Page1 handleChange={handleChange} UserData={UserData} />}

                                {/* Cambridge-allPages */}
                                {testName === "cambridge-test-1" && <Cambidge_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-2" && <CambidgeTest2_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-3" && <CambidgeTest3_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-4" && <CambidgeTest4_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-5" && <CambidgeTest5_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-6" && <CambidgeTest6_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-7" && <CambidgeTest7_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-8" && <CambidgeTest8_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {/* Test9-12 */}
                                {testName === "cambridge-test-9" && <CambidgeTest9_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-10" && <CambidgeTest10_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-11" && <CambidgeTest11_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-12" && <CambidgeTest12_P2_Q1 handleChange={handleChange} UserData={UserData} />}

                            </div>
                            <button
                                className="p-2 w-[120px] bg-blue-400 text-white rounded fixed top-[13%] right-0 "
                                onClick={Mobilepanel1Functions}>
                                {mobilePanel1Pages ?
                                    <p className="flex gap-2 text-[15px] font-bold text-black">
                                        <BsFillPatchQuestionFill className="text-[15px] translate-y-[6px]" />
                                        Questions</p>
                                    :
                                    <p className="flex gap-2 text-[15px] font-bold text-black">
                                        <LiaReadme className="text-[19px] translate-y-[6px]" />
                                        Passages</p>
                                }
                            </button>
                        </div>
                        <div className="p-4" style={{ display: ActivePanels ? "none" : "initial" }}>
                            <div style={{ display: MobilePanel2Pages ? "initial" : "none" }}>
                                {moduelNo === "1" && <Test1Panel1_Page2 />}
                                {moduelNo === "2" && <Test2Panel1_Page2 />}
                                {moduelNo === "3" && <Test3Panel1_Page2 />}
                                {moduelNo === "4" && <Test4Panel1_Page2 />}
                                {moduelNo === "5" && <Test5Panel1Page2 />}
                                {moduelNo === "6" && <Test6Panel1Page2 />}
                                {moduelNo === "7" && <Test7Panel1Page2 />}
                                {moduelNo === "8" && <Test8Panel1Page2 />}
                                {moduelNo === "9" && <Test9Panel1_Page2 />}
                                {moduelNo === "10" && <Test10Panel1_Page2 />}
                                {moduelNo === "11" && <Test11Panel1_Page2 />}
                                {moduelNo === "12" && <Test12Panel1_Page1 />}


                                {/* Cambridge-allPages */}
                                {testName === "cambridge-test-1" && <Cambidge_P1_Q2 />}
                                {testName === "cambridge-test-2" && <CambidgeTest2_P1_Q2 />}
                                {testName === "cambridge-test-3" && <CambidgeTest3_P1_Q2 />}
                                {testName === "cambridge-test-4" && <CambidgeTest4_P1_Q2 />}
                                {testName === "cambridge-test-5" && <CambidgeTest5_P1_Q2 />}
                                {testName === "cambridge-test-6" && <CambidgeTest6_P1_Q2 />}
                                {testName === "cambridge-test-7" && <CambidgeTest7_P1_Q2 />}
                                {testName === "cambridge-test-8" && <CambidgeTest8_P1_Q2 />}
                                {/* Test9-12 */}
                                {testName === "cambridge-test-9" && <CambidgeTest9_P1_Q2 />}
                                {testName === "cambridge-test-10" && <CambidgeTest10_P1_Q2 />}
                                {testName === "cambridge-test-11" && <CambidgeTest11_P1_Q2 />}
                                {testName === "cambridge-test-12" && <CambidgeTest12_P1_Q2 />}

                            </div>
                            <div style={{ display: MobilePanel2Pages ? "none" : "initial" }}>
                                {moduelNo === "1" && <Test1Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "2" && <Test2Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "3" && <Test3Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "4" && <Test4Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "5" && <Test5Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "6" && <Test6Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "7" && <Test7Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "8" && <Test8Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "9" && <Test9Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "10" && <Test10Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "11" && <Test11Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "12" && <Test12Panel2_Page2 handleChange={handleChange} UserData={UserData} />}


                                {/* Cambridge-allPages */}
                                {testName === "cambridge-test-1" && <Cambidge_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-2" && <CambidgeTest2_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-3" && <CambidgeTest3_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-4" && <CambidgeTest4_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-5" && <CambidgeTest5_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-6" && <CambidgeTest6_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-7" && <CambidgeTest7_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-8" && <CambidgeTest8_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {/* Test9-12 */}
                                {testName === "cambridge-test-9" && <CambidgeTest9_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-10" && <CambidgeTest10_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-11" && <CambidgeTest11_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-12" && <CambidgeTest12_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                            </div>
                            <button
                                className="p-2 w-[120px] bg-blue-400 rounded text-white fixed top-[13%]   right-0 "
                                onClick={Mobilepanel2Functions}>
                                {MobilePanel2Pages ?
                                    <p className="flex gap-2 text-[15px] font-bold text-black">
                                        <BsFillPatchQuestionFill className="text-[15px] translate-y-[6px]" />
                                        Questions</p>
                                    :
                                    <p className="flex gap-2 text-[15px] font-bold text-black">
                                        <LiaReadme className="text-[19px] translate-y-[6px]" />
                                        Passages</p>

                                }
                            </button>
                        </div>



                        <button
                            className="text-black font-bold w-[120px] rounded sm:w-[100px] p-2 bg-blue-500  fixed bottom-[92px]  right-0 "
                            onClick={ClickActivePanels}
                        >{ActivePanels ? "Go Section-2" : "Go Section-1"}</button>

                    </section>
                ) : (
                    <SplitPane split="vertical" sizes={Panelsizes} onChange={setPanelSizes}>
                        <Pane minSize={100} maxSize='70%'>
                            <div className='panel_1' style={{ height: "100%", overflow: "scroll" }}>
                                <div style={{ display: forPage1 ? "initial" : "none" }}>
                                    {moduelNo === "1" && <Test1Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "2" && <Test2Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "3" && <Test3Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "4" && <Test4Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "5" && <Test5Panel1Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "6" && <Test6Panel1Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "7" && <Test7Panel1Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "8" && <Test8Panel1Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "9" && <Test9Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "10" && <Test10Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "11" && <Test11Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "12" && <Test12Panel1_Page1 AnswersData={AnswersData} />}

                                    {/* Cambridge-allPages */}
                                    {testName === "cambridge-test-1" && <Cambidge_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-2" && <CambidgeTest2_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-3" && <CambidgeTest3_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-4" && <CambidgeTest4_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-5" && <CambidgeTest5_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-6" && <CambidgeTest6_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-7" && <CambidgeTest7_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-8" && <CambidgeTest8_P1_Q1 AnswersData={AnswersData} />}
                                    {/* Test9-12 */}
                                    {testName === "cambridge-test-9" && <CambidgeTest9_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-10" && <CambidgeTest10_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-11" && <CambidgeTest11_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "cambridge-test-12" && <CambidgeTest12_P1_Q1 AnswersData={AnswersData} />}
                                </div>
                                <div style={{ display: forPage1 ? "none" : "initial" }}>
                                    {moduelNo === "1" && <Test1Panel1_Page2 />}
                                    {moduelNo === "2" && <Test2Panel1_Page2 />}
                                    {moduelNo === "3" && <Test3Panel1_Page2 />}
                                    {moduelNo === "4" && <Test4Panel1_Page2 />}
                                    {moduelNo === "5" && <Test5Panel1Page2 />}
                                    {moduelNo === "6" && <Test6Panel1Page2 />}
                                    {moduelNo === "7" && <Test7Panel1Page2 />}
                                    {moduelNo === "8" && <Test8Panel1Page2 />}
                                    {moduelNo === "9" && <Test9Panel1_Page2 />}
                                    {moduelNo === "10" && <Test10Panel1_Page2 />}
                                    {moduelNo === "11" && <Test11Panel1_Page2 />}
                                    {moduelNo === "12" && <Test12Panel1_Page2 />}

                                    {/* Cambridge-allPages */}
                                    {testName === "cambridge-test-1" && <Cambidge_P1_Q2 />}
                                    {testName === "cambridge-test-2" && <CambidgeTest2_P1_Q2 />}
                                    {testName === "cambridge-test-3" && <CambidgeTest3_P1_Q2 />}
                                    {testName === "cambridge-test-4" && <CambidgeTest4_P1_Q2 />}
                                    {testName === "cambridge-test-5" && <CambidgeTest5_P1_Q2 />}
                                    {testName === "cambridge-test-6" && <CambidgeTest6_P1_Q2 />}
                                    {testName === "cambridge-test-7" && <CambidgeTest7_P1_Q2 />}
                                    {testName === "cambridge-test-8" && <CambidgeTest8_P1_Q2 />}
                                    {/* Test9-12 */}
                                    {testName === "cambridge-test-9" && <CambidgeTest9_P1_Q2 />}
                                    {testName === "cambridge-test-10" && <CambidgeTest10_P1_Q2 />}
                                    {testName === "cambridge-test-11" && <CambidgeTest11_P1_Q2 />}
                                    {testName === "cambridge-test-12" && <CambidgeTest12_P1_Q2 />}
                                </div>


                            </div>
                        </Pane>
                        <div className='panel_2' style={{ height: "100%", overflow: "scroll" }}>
                            <div className='forChangePage'>
                                <button
                                    className=' btnforPageChnage '
                                    onClick={() => { setforPage1(!forPage1) }}
                                >{forPage1 ? "Next" : "Previous"}
                                </button>
                            </div>
                            <div style={{ display: forPage1 ? "initial" : "none" }}>
                                {moduelNo === "1" && <Test1Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "2" && <Test2Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "3" && <Test3Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "4" && <Test4Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "5" && <Test5Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "6" && <Test6Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "7" && <Test7Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "8" && <Test8Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "9" && <Test9Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "10" && <Test10Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "11" && <Test11Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "12" && <Test12Panel2_Page1 handleChange={handleChange} UserData={UserData} />}


                                {/* Cambridge-allPages */}
                                {testName === "cambridge-test-1" && <Cambidge_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-2" && <CambidgeTest2_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-3" && <CambidgeTest3_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-4" && <CambidgeTest4_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-5" && <CambidgeTest5_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-6" && <CambidgeTest6_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-7" && <CambidgeTest7_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-8" && <CambidgeTest8_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {/* Test9-12 */}
                                {testName === "cambridge-test-9" && <CambidgeTest9_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-10" && <CambidgeTest10_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-11" && <CambidgeTest11_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-12" && <CambidgeTest12_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                            </div>
                            <div style={{ display: forPage1 ? "none" : "initial" }}>
                                {moduelNo === "1" && <Test1Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "2" && <Test2Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "3" && <Test3Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "4" && <Test4Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "5" && <Test5Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "6" && <Test6Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "7" && <Test7Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "8" && <Test8Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "9" && <Test9Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "10" && <Test10Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "11" && <Test11Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "12" && <Test12Panel2_Page2 handleChange={handleChange} UserData={UserData} />}

                                {/* Cambridge-allPages */}
                                {testName === "cambridge-test-1" && <Cambidge_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-2" && <CambidgeTest2_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-3" && <CambidgeTest3_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-4" && <CambidgeTest4_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-5" && <CambidgeTest5_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-6" && <CambidgeTest6_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-7" && <CambidgeTest7_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-8" && <CambidgeTest8_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {/* Test9-12 */}
                                {testName === "cambridge-test-9" && <CambidgeTest9_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-10" && <CambidgeTest10_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-11" && <CambidgeTest11_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "cambridge-test-12" && <CambidgeTest12_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                            </div>

                        </div>

                    </SplitPane>
                )
            }
        </div>
    );
};
export default Reading;

