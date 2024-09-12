"use client";
import React, { useEffect } from 'react';
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import HeaderLanding from "../../LandingHome/HeaderHomeOne";
import NavigationBar from '../../LandingHome/NavigationBar';
import AllListeningTest from "./AllListeningTests"
import { useStateContext } from "../../../../contexts/ContextProvider";
import { CheckPaymentStatus } from "../../../../Payments/CkeckPayment/CheckPayments.js";

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

            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <AllListeningTest />
            <FooterHomeThree />
            <BackToTop />


        </>
    );
}

export default ListeningAllTest;



