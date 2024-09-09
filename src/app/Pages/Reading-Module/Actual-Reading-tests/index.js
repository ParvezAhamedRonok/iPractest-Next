"use client"
import React, { useEffect } from 'react';
import "./index.css";
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import NavigationBar from '../../LandingHome/NavigationBar';
import AllTestComponent from "./AllTestsReading"
import HeaderLanding from "../../LandingHome/HeaderHomeOne";
import { useStateContext } from "../../../../contexts/ContextProvider";
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";

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

            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <AllTestComponent />

            <FooterHomeThree />
            <BackToTop />


        </>
    );
}

export default ReadingAllTest;



