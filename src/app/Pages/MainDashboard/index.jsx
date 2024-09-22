"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useState, Suspense } from 'react';
import "./index.css";
import { useRouter } from 'next/navigation';
// import { Dashboard } from './pages';
import { useStateContext } from "../../../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Sidebar, DashNavbar, ThemeSettings } from './DComponents';
import Footer from "../LandingHome/FooterHomeOne"
import Axios from 'axios';
import { POST_REFERRALS_USER_INTO_DATABASE } from '../../../assets/URL\'s/AllUrl';

//client components....
// const Dashboard = dynamic(() => import('./pages'), { ssr: false });
// const SpeakingCheck = dynamic(() => import('./pages'), { ssr: false });
// const LeaderBoard = dynamic(() => import('./pages'), { ssr: false });
// const LetsPractice = dynamic(() => import('./pages'), { ssr: false });
// const SOFFileReader = dynamic(() => import('./pages'), { ssr: false });
// const LORFileReader = dynamic(() => import('./pages'), { ssr: false });
// const Referrals = dynamic(() => import('./pages'), { ssr: false });

const Dashboard = dynamic(() => import('./pages').then((module) => ({ default: module.Dashboard, ssr: false })));
const SpeakingCheck = dynamic(() => import('./pages').then((module) => ({ default: module.SpeakingCheck, ssr: false })));
const LeaderBoard = dynamic(() => import('./pages').then((module) => ({ default: module.LeaderBoard, ssr: false })));
const LetsPractice = dynamic(() => import('./pages').then((module) => ({ default: module.LetsPractice, ssr: false })));
const SOFFileReader = dynamic(() => import('./pages').then((module) => ({ default: module.SOFFileReader, ssr: false })));
const LORFileReader = dynamic(() => import('./pages').then((module) => ({ default: module.LORFileReader, ssr: false })));
const Referrals = dynamic(() => import('./pages').then((module) => ({ default: module.Referrals, ssr: false })));

//end importing.......



export default function Index({ DashboardID }) {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const history = useRouter();
  //all localstorage data storing states...........
  const [userLoginEmail, setuserLoginEmail] = useState("");
  const [userLoginUserNname, setuserLoginUserName] = useState("");
  const [referID, setReferId] = useState("")

  //end of states...........




  useEffect(() => {
    //set all local data to those states...
    setuserLoginEmail(localStorage.getItem('userEmail'));
    setuserLoginUserName(localStorage.getItem("userName"));
    setReferId(localStorage.getItem("referID"))

  }, [])


  useEffect(() => {
    // if (!localStorage.getItem("loginTOken") && !localStorage.getItem("GoogleFacebookToken")
    //   && !localStorage.getItem("userSignupInfo")) {
    //   history.push("/");
    // };

    //below function is for auto call if users is refered by someone or not
    PostResIfUserReferedByAnyOne()
  }, [])

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    //for remove speaking motivational popup if user come here after opening speaking tests...
    localStorage.removeItem("forSpeakingMotivation")
  }, []);



  //the code below is for post request & save this user 
  // if user is refered By some one ...& if not it will not be post 
  const PostResIfUserReferedByAnyOne = () => {
    if (referID) {
      // alert("refered...")
      Axios({
        method: "post",
        // url: "http://localhost:8080/api/user/Post-&-SaveUser-IfIt-Refered-By-Someone",
        url: POST_REFERRALS_USER_INTO_DATABASE,
        data: {
          "referedBy": referID,
          "userName": userLoginUserNname,
          "userEmail": userLoginEmail,
        },
      }).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error)
      })
    }
  }








  return (
    <>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg overflow-auto">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <Sidebar
                  DashboardID={DashboardID}
                />
              </Suspense>

            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <Sidebar
                  DashboardID={DashboardID}
                />
              </Suspense>

            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-60 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full  ">
              <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <DashNavbar />
              </Suspense>

            </div>

            {themeSettings && (<ThemeSettings />)}
            {/* Main-Work */}

            {DashboardID == "Dashboard" && (<Dashboard />)}
            {DashboardID == "Speaking-Records" && (<SpeakingCheck />)}
            {DashboardID == "LeaderBoard" && (<LeaderBoard />)}
            {DashboardID == "Let's-Practice" && (<LetsPractice />)}
            {DashboardID == "SOPFile" && (<SOFFileReader />)}
            {DashboardID == "LORFile" && (<LORFileReader />)}
            {DashboardID == "Referrals" && (<Referrals />)}
            {/* <Notification /> */}
            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
              <div>
                <Footer />
              </div>
            </Suspense>

          </div>
        </div>
      </div>

    </>
  )
}


























