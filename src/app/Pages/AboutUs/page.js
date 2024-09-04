"use client"
import React from 'react';
import useToggle from '../../../hooks/useToggle';
import BackToTop from '../../../lib/BackToTop';
import FooterHomeOne from '../LandingHome/FooterHomeOne';
import HeaderLanding from "../LandingHome/HeaderHomeOne";
import TeamAbout from './TeamAbout';
import NavigationBar from '../LandingHome/NavigationBar';
import Slider from './Slider';
import MainSlider from './MainSlider';
import { isMobile } from "react-device-detect"

//end importing----->






function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding drawer={drawer} action={drawerAction.toggle} />

            {isMobile ? <Slider /> : <MainSlider />}

            <TeamAbout />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUs;
