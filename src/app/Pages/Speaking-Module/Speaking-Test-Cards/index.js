"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, useState, Suspense } from 'react';
import "./index.css";
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import { useStateContext } from "../../../../contexts/ContextProvider";
import { CheckPaymentStatus } from "../../Payments/CkeckPayment/CheckPayments.js";
import axios from "axios"

//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne.js'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar.js'), { ssr: false });
const SpeakingTests = dynamic(() => import('./SpekingTests'), { ssr: false });
const SpeakingAfter10Tests = dynamic(() => import('./Speaking-After-10-Tests.jsx'), { ssr: false });


//end of the importing..........



function SpeakingAllTest() {
    //localstorage data setup...
    const [useremail, setuseremail] = useState("");
    const [userLoginToken, setUserLoginToken] = useState("")

    const { billPopUp, setBillPopUp } = useStateContext();
    const [drawer, drawerAction] = useToggle(false);
    const [mainDataAll, setmainData] = useState([])
    const [openTestAfter10, setOpenTestsAfter10] = useState(false);
    const [openTestAfter20, setOpenTestsAfter20] = useState(false);

    //for check every time that user has been payment or not-------
    CheckPaymentStatus();



    useEffect(() => {
        //get userEmail from localstorage if it exist over there.......
        setuseremail(localStorage.getItem('userEmail') && localStorage.getItem('userEmail'));
        setUserLoginToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"))


        axios({
            method: "get",
            // url: 'http://localhost:8080/api/user/getSpecificUserReasonDetail/' + userEmail,
            url: 'https://node-js-express-login-example.onrender.com/api/user/SpeakingResults/' + localStorage.getItem('userEmail'),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.data);
                //set all speaking data for make all user spekaing data synchronized with their id's------
                //if main data will not be empty existing function will be called for set all the speaking scores----
                setmainData(res.data.data)

            })
            .catch((e) => { console.log(e) });



    }, [])




    //this function is for convert user scores into point & show them 
    // how mush point they have done
    const filerArrayFunction = (mainData, setAllDataToTheStateByProps) => {
        //collect all the userEmail by the code below
        let userDataEmail = [...mainData.reduce((map, obj) => map.set(obj.SectionName, obj), new Map()).values()];
        console.log(userDataEmail);
        //find out all the data user by user and seperate those into  array 
        let data = userDataEmail.map((e) => {
            return mainData.filter((items) => items.SectionName === e.SectionName)
        })


        let someArray = [];

        //now map every array & make some of every array as well
        //& push the making every user Values & sum to the above empty array to store the final state
        data.map((items) => {
            // console.log(items)
            var val = items.reduce(function (previousValue, currentValue) {
                console.log(previousValue)
                return {
                    username: previousValue.username,
                    userEmail: previousValue.userEmail,
                    SectionName: previousValue.SectionName,
                    ieltsScore: previousValue.ieltsScore,
                    id: previousValue.id
                }
            });
            someArray.push(val);
            console.log(val)
        })


        // push the array to the final State
        setAllDataToTheStateByProps(someArray)

    }




    return (
        <>
            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                <HeaderLanding action={drawerAction.toggle} />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                <SpeakingTests
                    setOpenTestsAfter10={setOpenTestsAfter10}
                    openTestAfter10={openTestAfter10}
                    mainDataAll={mainDataAll}
                />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                {
                    openTestAfter10 && (<SpeakingAfter10Tests
                        setOpenTestsAfter20={setOpenTestsAfter20}
                        openTestAfter20={openTestAfter20}
                        mainDataAll={mainDataAll}
                    />)
                }
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

export default SpeakingAllTest;



