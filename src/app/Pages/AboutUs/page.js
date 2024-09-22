"use client"
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import useToggle from '../../../hooks/useToggle';
import Loader from "@/Helper/Loader";
import { isMobile } from "react-device-detect"

//not client components...
const FooterHomeOne = dynamic(() => import('../LandingHome/FooterHomeOne'));
const TeamAbout = dynamic(() => import('./TeamAbout'));
const NavigationBar = dynamic(() => import('../LandingHome/NavigationBar'));
const MainSlider = dynamic(() => import('./MainSlider'));
const Slider = dynamic(() => import('./Slider'));

//clients components....
const BackToTop = dynamic(() => import('../../../lib/BackToTop'), { ssr: false });
const HeaderLanding = dynamic(() => import('../LandingHome/HeaderHomeOne'), { ssr: false });
//end importing----->






function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
            {<Loader />}
        </div>}>
            <>
                <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>
                    Loading...
                </div>}>
                    <NavigationBar drawer={drawer} action={drawerAction.toggle} />
                </Suspense>

                <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>
                    Loading...
                </div>}>
                    <HeaderLanding drawer={drawer} action={drawerAction.toggle} />
                </Suspense>

                <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>
                    Loading...
                </div>}>
                    {isMobile ? <Slider /> : <MainSlider />}
                </Suspense>
                <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>
                    Loading...
                </div>}>
                    <TeamAbout />
                </Suspense>
                <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>
                    Loading...
                </div>}>
                    <FooterHomeOne className="appie-footer-about-area" />
                </Suspense>
                <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>
                    Loading...
                </div>}>
                    <BackToTop />
                </Suspense>

            </>
        </Suspense>
    );
}

export default AboutUs;
