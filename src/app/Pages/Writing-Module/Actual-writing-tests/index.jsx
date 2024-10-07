"use client";
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';


//client components...
const HeaderLanding = dynamic(() => import("../../LandingHome/HeaderHomeOne"), { ssr: false });
const NavigationBar = dynamic(() => import("../../LandingHome/NavigationBar"), { ssr: false })
const AllWritingTestServices = dynamic(() => import("./Test-Cards"), { ssr: false })

//end of importings.....





function WritingAllTest() {
  const [drawer, drawerAction] = useToggle(false);
  useEffect(() => {
    //for remove speaking motivational popup if user come here after opening speaking tests...
    localStorage.removeItem("forSpeakingMotivation")
  }, [])

  return (
    <>

      <NavigationBar drawer={drawer} action={drawerAction.toggle} />
      <HeaderLanding action={drawerAction.toggle} />
      <div className=''>
        <AllWritingTestServices />
      </div>

      <FooterHomeThree />
      <BackToTop />


    </>
  );
}

export default WritingAllTest;



