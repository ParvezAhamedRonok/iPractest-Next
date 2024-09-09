"use client";
import React, { useEffect } from 'react';
import "./index.css";
import useToggle from '../../../../hooks/useToggle.js';
import BackToTop from '../../../../lib/BackToTop.js';
import FooterHomeThree from '../../LandingHome/FooterHomeOne.js';
import NavigationBar from '../../LandingHome/NavigationBar.js';
import AllTestComponent from "./AllTestsReding.jsx"
import HeaderLanding from "../../LandingHome/HeaderHomeOne.js";
import { useStateContext } from "../../../../contexts/ContextProvider.jsx";
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";

//end of the importing.....

function ReadingAllTest() {
    const { ReadingShowAnswer, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions } = useStateContext();
    const [drawer, drawerAction] = useToggle(false);

    useEffect(() => {
        setReadingShowAnswer("");
        //false the explanation state when user come here 
        setExplainRLQuestions(false);
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



