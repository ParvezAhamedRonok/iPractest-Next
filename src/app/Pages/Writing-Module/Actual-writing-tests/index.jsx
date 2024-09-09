"use client";
import React, { useEffect } from 'react';
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import HeaderLanding from "../../LandingHome/HeaderHomeOne";
import NavigationBar from '../../LandingHome/NavigationBar';
import AllWritingTestServices from './AllWritingTestServices';

//end of importing....




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



