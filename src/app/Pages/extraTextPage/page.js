
"use client"
import React, { useEffect, useState, Suspense } from 'react';
import useToggle from '../../../hooks/useToggle';
import logo from '../../../assets/images/Practestlogo.png';
// import { Helmet } from 'react-helmet-async';
import { useRouter } from 'next/navigation';

import HeaderHomeOne from './HeaderHomeOne';
import NavigationBar from "./NavigationBar";
import HeroHomeLanding from './HeroHomeLanding';
import "./index.css"
import ShowContent from './ShowContent';
import HowitWorks from "./HowitWorks"

import AboutHomeOne from "./AboutHomeOne"
import Carousal from "./Carouasal"
import BackToTop from "../../../lib/BackToTop"
import FooterHomeOne from "./FooterHomeOne"
import FunFactHomeOne from "./FunFactHomeOne"
import ProjectHomeOne from "./ProjectHomeOne"
import ServicesHomeOne from "./ServicesHomeOne"


function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);
    const search = useRouter()
    // Get the query parameters as an object
    const query = search.query;
    console.log(query)

    // useEffect(() => {
    //     setAccessParans(searchParams.get('ID'));
    //     searchParams.get("ID") && localStorage.setItem("referID", searchParams.get("ID"));
    //     // getCountryData();
    //     //for remove speaking motivational popup if user come here after opening speaking tests...
    //     localStorage.removeItem("forSpeakingMotivation")
    // }, [])




    const schemaData = {
        "@context": "https://ipractest.com",
        "@type": "website",  // Change this to the appropriate type
        "headline": " IELTS Practice to Unlock Global Opportunities",
        "description": "Boost your IELTS score with our extensive range of practice tests. Track your daily band score and progressively enhance your skills in Speaking, Writing, Reading, and Listening for a successful exam!",
        "author": {
            "@type": "Person",
            "name": "Alam Al Saud"
        },
        "datePublished": "2024-08-20",
        "publisher": {
            "@type": "Organization",
            "name": "https://ipractest.com",
            "logo": {
                "@type": "ImageObject",
                "url": logo
            }
        }
        // Add more properties as needed
    };

    return (
        <>
            {/* <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
                <title>IELTS Online Practice Test: Prepare for IELTS Exam.</title>
                <meta name="description" content="Boost your IELTS score with our extensive range of practice tests. Track your daily band score and progressively enhance your skills in Speaking, Writing, Reading, and Listening for a successful exam!" />
                <link rel="canonical" href="https://www.tacobell.com" />

                <meta property="og:title" content="IELTS Online Practice Test: Prepare for IELTS Exam." />
                <meta property="og:description" content="Boost your IELTS score with our extensive range of practice tests. Track your daily band score and progressively enhance your skills in Speaking, Writing, Reading, and Listening for a successful exam!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ipractest.com" />
                <meta property="og:image" content={logo} />
                <meta property="og:site_name" content="https://ipracest.com" />

                <meta name="twitter:card" content="IELTS Online Practice Test: Prepare for IELTS Exam." />
                <meta name="twitter:title" content="IELTS Online Practice Test: Prepare for IELTS Exam." />
                <meta name="twitter:description" content="Boost your IELTS score with our extensive range of practice tests. Track your daily band score and progressively enhance your skills in Speaking, Writing, Reading, and Listening for a successful exam!" />
                <meta name="twitter:image" content={logo} />
                <meta name="twitter:site" content="@ipractest.com" />
                <meta name="twitter:creator" content="@ipractest.com" />
            </Helmet> */}

            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeOne action={drawerAction.toggle} />

            <HeroHomeLanding />
            <Carousal />
            <HowitWorks />
            <ServicesHomeOne />
            <FunFactHomeOne />

            <ShowContent />
            <AboutHomeOne />
            <ProjectHomeOne />
            <FooterHomeOne />
            <BackToTop className="back-to-top-3" />









        </>
    );
}

export default HomeThree;
