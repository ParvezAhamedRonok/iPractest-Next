"use client"
import React, { useState, useEffect } from 'react';
import useToggle from '../../../../hooks/useToggle.js';
import BackToTop from '../../../../lib/BackToTop.js';
import FooterHomeThree from '../../LandingHome/FooterHomeOne.js';
import NavigationBar from '../../LandingHome/NavigationBar.js';
import HeaderLanding from "./HeaderHomeOne.js";
import { useStateContext } from "../../../../contexts/ContextProvider.jsx";
import SOPForm from './SOPForm.jsx';
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";

//end of importing..........



function Index() {
    const { setWritingText, billPopUp, setBillPopUp } = useStateContext();
    const [drawer, drawerAction] = useToggle(false);

    // get paid information that user get paid or not
    // check paymentStaus user have payemnt already or No
    CheckPaymentStatus()

    // useEffect(() => {
    //     if (!localStorage.getItem("loginTOken") && !localStorage.getItem("GoogleFacebookToken")
    //         && !localStorage.getItem("userSignupInfo")) {
    //         history.push("/SOP-Download")
    //     }
    // }, [])







    return (
        <>

            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <div className='w-full mt-[20px] min-h-[100vh] max-h-auto grid justify-center align-middle'>
                <SOPForm />
            </div>

            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Index;







