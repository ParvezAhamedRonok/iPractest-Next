"use client"
import dynamic from 'next/dynamic.js';
import React, { useState, useEffect, Suspense } from 'react';
import useToggle from '../../../../hooks/useToggle.js';
import BackToTop from '../../../../lib/BackToTop.js';
import FooterHomeThree from '../../LandingHome/FooterHomeOne.js';
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";
import Loader from "@/Helper/Loader";

//Client Components....
const HeaderLanding = dynamic(() => import("./HeaderHomeOne.js"), { ssr: false });
const NavigationBar = dynamic(() => import("../../LandingHome/NavigationBar.js"), { ssr: false })
const SOPForm = dynamic(() => import("./SOPForm.jsx"), { ssr: false })
//end of importing..........



function Index() {
    const [drawer, drawerAction] = useToggle(false);

    // get paid information that user get paid or not
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
                    <div className='w-full mt-[20px] min-h-[100vh] max-h-auto grid justify-center align-middle'>
                        <SOPForm />
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







