"use client"
import React, { useEffect, useState } from 'react';
import useToggle from '../../../../../hooks/useToggle';
import BackToTop from '../../../../../lib/BackToTop';
import FooterHomeThree from '../../../LandingHome/FooterHomeOne';
import HeaderAbout from '../../../SOPFILE/SOFMaker/HeaderHomeOne';
import ClickSpeaking from './ClickSpeaking';
import ClickSpeakingSec3 from './SpeakingForSection3';
import NavigationBar from '../../../LandingHome/NavigationBar';
import STips from './Tips';
import { usePathname } from 'next/navigation';
import { MdRateReview } from "react-icons/md"
import UserFeedBack from "../../../../../components/UserComments";
import { BsBalloonHeartFill } from "react-icons/bs"

//end of the importing.............


function Main({testNo}) {
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

      <NavigationBar drawer={drawer} action={drawerAction.toggle} />
      <HeaderAbout action={drawerAction.toggle} />
      {testNo.includes('Sec2') ? <ClickSpeakingSec3 testNo={testNo} setPassComment={setPassComment} setWaveTit={setWaveTit} /> : <ClickSpeaking testNo={testNo} setPassComment={setPassComment} setWaveTit={setWaveTit} />}


      <FooterHomeThree />
      <BackToTop />
      {/* for some tips */}
      {userCountry === "Bangladesh" && <STips />}
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



