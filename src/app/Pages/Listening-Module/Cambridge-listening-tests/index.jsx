"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, Suspense } from 'react';
import useToggle from '../../../../hooks/useToggle';
import { useStateContext } from "../../../../contexts/ContextProvider";
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import BackToTop from '../../../../lib/BackToTop';

//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar'), { ssr: false });
const AllListeningTest = dynamic(() => import('./AllListeningTests'), { ssr: false });

//end of the importing............




function ListeningAllTest() {
    const [drawer, drawerAction] = useToggle(false);
    const { ListeningShowAnswer, setListeningShowAnswer, explainRLQuestions, setExplainRLQuestions } = useStateContext();

    useEffect(() => {
        setListeningShowAnswer("");
        //false the explanation state when user come here 
        setExplainRLQuestions(false);
        //for remove speaking motivational popup if user come here after opening speaking tests...
        localStorage.removeItem("forSpeakingMotivation")
    }, []);

    // check paymentStaus user have payemnt already or No
    CheckPaymentStatus()



    return (
        <>
            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <HeaderLanding action={drawerAction.toggle} />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <AllListeningTest />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <FooterHomeThree />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <BackToTop />
            </Suspense>

        </>
    );
}

export default ListeningAllTest;



