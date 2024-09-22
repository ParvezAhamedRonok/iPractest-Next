"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, Suspense } from 'react';
import "./index.css";
import useToggle from '../../../../hooks/useToggle.js';
import BackToTop from '../../../../lib/BackToTop.js';
import FooterHomeThree from '../../LandingHome/FooterHomeOne.js';
import SOFDownloader from "./Pdf-Dawonloader.jsx"
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";
import Loader from "@/Helper/Loader";
//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne.js'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar.js'), { ssr: false });


//end of the importing Section.............


function Index() {
    const [drawer, drawerAction] = useToggle(false);
    useEffect(() => {
        //for remove speaking motivational popup if user come here after opening speaking tests...
        localStorage.removeItem("forSpeakingMotivation")
    }, [])

    // check paymentStaus user have payemnt already or No
    CheckPaymentStatus()


    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'> {<Loader />}</div>}>
            <>
                <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                    <NavigationBar drawer={drawer} action={drawerAction.toggle} />
                </Suspense>

                <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                    <HeaderLanding action={drawerAction.toggle} />
                </Suspense>


                <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                    <div className=''>
                        <SOFDownloader />
                    </div>
                </Suspense>
                <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                    <FooterHomeThree />
                </Suspense>
                <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                    <BackToTop />
                </Suspense>


            </>
        </Suspense>


    );
}

export default Index;
