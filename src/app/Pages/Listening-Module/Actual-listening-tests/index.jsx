"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, Suspense } from 'react';
import useToggle from '../../../../hooks/useToggle';
//not client components...
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import { useStateContext } from "../../../../contexts/ContextProvider";
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";
import AllListeningTest from "./AllListeningTests"

//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar'), { ssr: false });


//end of the importing section................


function ListeningAllTest() {
    const [drawer, drawerAction] = useToggle(false);
    const { setListeningShowAnswer, explainRLQuestions, setExplainRLQuestions } = useStateContext();

    useEffect(() => {
        setListeningShowAnswer("");
        //false the explanation state when user come here 
        setExplainRLQuestions(false);
        //for remove speaking motivational popup if user come here after opening speaking tests...
        localStorage.removeItem("forSpeakingMotivation")
    }, [])

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



