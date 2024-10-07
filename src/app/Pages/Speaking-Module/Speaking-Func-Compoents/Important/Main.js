"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, useState, Suspense } from 'react';
import useToggle from '../../../../../hooks/useToggle';
import BackToTop from '../../../../../lib/BackToTop';
import FooterHomeThree from '../../../LandingHome/FooterHomeOne';
import STips from './Tips';
import { usePathname } from 'next/navigation';
import { MdRateReview } from "react-icons/md"
import UserFeedBack from "../../../../../components/UserComments";
import { BsBalloonHeartFill } from "react-icons/bs"

//client components....
const HeaderAbout = dynamic(() => import('../../../SOPFILE/SOFMaker/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../../LandingHome/NavigationBar'), { ssr: false });
const ClickSpeaking = dynamic(() => import('./Speaking-For-Sec-1&3'), { ssr: false });
const ClickSpeakingSec2 = dynamic(() => import('./Speaking-For-Section-2'), { ssr: false });
//end of the importing.............


function Main({ testNo }) {
  let getPathName = usePathname()
  const [userCountry, setuserCountry] = useState("")
  const [forPassComment, setPassComment] = useState(false);
  const [forShowCommentPopUp, setCommentPopUp] = useState(false);
  const [waveTit, setWaveTit] = useState(true)
  const [drawer, drawerAction] = useToggle(false);

  console.log(testNo);
  // console.log(testNo)


  //user localstorage data storing by useEffect...
  useEffect(() => {
    setuserCountry(localStorage.getItem("setCountry"))
  }, [])

  const closeCommentPopUp = () => {
    setCommentPopUp(!forShowCommentPopUp);
    setWaveTit(false)
  }








  return (
    <>
      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        <NavigationBar drawer={drawer} action={drawerAction.toggle} />
      </Suspense>

      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        <HeaderAbout action={drawerAction.toggle} />
      </Suspense>

      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        {testNo.includes('Sec2') ? <ClickSpeakingSec2 testNo={testNo} setPassComment={setPassComment} setWaveTit={setWaveTit} /> : <ClickSpeaking testNo={testNo} setPassComment={setPassComment} setWaveTit={setWaveTit} />}

      </Suspense>


      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        <FooterHomeThree />
      </Suspense>

      <BackToTop />
      {/* for some tips */}
      <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
        {userCountry === "Bangladesh" && <STips />}
      </Suspense>

      {/* for pass user reviews */}
      {
        forShowCommentPopUp && <UserFeedBack closeCommentPopUp={closeCommentPopUp} setPassComment={setPassComment} />
      }
      {forPassComment && (
        <div className='S-commentsIcon'>
          {waveTit && (<p className='CommentTitle flex gap-1'><i className='text-white'>Your comment is our Heart</i>
            <BsBalloonHeartFill className="text-3xl text-red-500" /></p>)}
          <div className="S-forComment"
            onClick={closeCommentPopUp}
          >
            <MdRateReview
              className="text-white text-2xl"
            />
          </div>
        </div>
      )
      }


    </>
  );
}

export default Main;



