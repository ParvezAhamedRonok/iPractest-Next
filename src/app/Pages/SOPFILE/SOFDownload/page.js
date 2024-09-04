"use client"
import React, { useEffect } from 'react';
import "./index.css";
import useToggle from '../../../../hooks/useToggle.js';
import BackToTop from '../../../../lib/BackToTop.js';
import FooterHomeThree from '../../LandingHome/FooterHomeOne.js';
import NavigationBar from '../../LandingHome/NavigationBar.js';
import HeaderLanding from "../../LandingHome/HeaderHomeOne.js";
import SOFDownloader from "./Pdf-Dawonloader.jsx"
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";
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
        <>

            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <div className=''>
                <SOFDownloader />
            </div>

            <FooterHomeThree />
            <BackToTop />

        </>
    );
}

export default Index;
