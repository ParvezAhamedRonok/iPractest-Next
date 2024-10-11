"use client"
import React from 'react';
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeOne from '../../LandingHome/FooterHomeOne';
import PageDisclaim from './PageDisclaim';
import dynamic from 'next/dynamic';

//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar'), { ssr: false });



function Disclaimer() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
             <PageDisclaim />
            <FooterHomeOne />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default Disclaimer;
