"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, Suspense } from 'react';
import "./index.css";
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import AllTestComponent from "./Test-Cards"
import { useStateContext } from "../../../../contexts/ContextProvider";
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";
//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar'), { ssr: false });
//end of the importing......


function ReadingAllTest() {
    const { ReadingShowAnswer, setReadingShowAnswer } = useStateContext();
    const [drawer, drawerAction] = useToggle(false);

    useEffect(() => {
        setReadingShowAnswer("");
        //for remove speaking motivational popup if user come here after opening speaking tests...
        localStorage.removeItem("forSpeakingMotivation")
    }, [])

    // check paymentStaus user have payemnt already or No
    CheckPaymentStatus()

    return (
        <>
            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                <HeaderLanding action={drawerAction.toggle} />
            </Suspense>
            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                <AllTestComponent />
            </Suspense>
            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                <FooterHomeThree />
            </Suspense>
            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                <BackToTop />
            </Suspense>


        </>
    );
}

export default ReadingAllTest;



