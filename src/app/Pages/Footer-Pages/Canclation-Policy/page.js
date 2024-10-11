"use client"
import React from 'react';
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import Cencel from './Cencel';
import dynamic from 'next/dynamic';
//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar'), { ssr: false });



function Index() {
    const [drawer, drawerAction] = useToggle(false);


    return (
        <>

            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <div className='w-full sm:w-[70%] mt-[130px] sm:mt-[160px] p-3 sm:p-6'>
                <Cencel />
            </div>
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Index;







