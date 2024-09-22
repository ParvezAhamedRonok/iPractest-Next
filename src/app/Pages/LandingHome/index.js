
"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, useState, Suspense } from 'react';
import "./index.css"
// import logo from '../../../assets/images/Practestlogo.png';
// import { Helmet } from 'react-helmet-async';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

//..not client components
import HeroHomeLanding from './HeroHomeLanding';
import ShowContent from './ShowContent';
import AboutHomeOne from "./AboutHomeOne"
import Carousal from "./Carouasal"
import FooterHomeOne from "./FooterHomeOne"
import ProjectHomeOne from "./ProjectHomeOne"
import ServicesHomeOne from "./ServicesHomeOne"
import useToggle from "../../../hooks/useToggle"
import NavigationBar from "./NavigationBar";

//client components...
const HeaderHomeOne = dynamic(() => import('./HeaderHomeOne'), { ssr: false });
const HowitWorks = dynamic(() => import('./HowitWorks'), { ssr: false });
const BackToTop = dynamic(() => import('./../../../lib/BackToTop'), { ssr: false });
const FunFactHomeOne = dynamic(() => import('./FunFactHomeOne'), { ssr: false });
//end of importings.............





function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);
    // Get the query parameters as an object
    const searchParams = useSearchParams();


    useEffect(() => {
        searchParams.get('ID') && localStorage.setItem("referID", searchParams.get('ID'));

        //for remove speaking motivational popup if user come here after opening speaking tests...
        localStorage.removeItem("forSpeakingMotivation")
    }, [])




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
                "url": "../../../assets/images/Practestlogo.png"
            }
        }
        // Add more properties as needed
    };

    return (
        <>
            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <HeaderHomeOne action={drawerAction.toggle} />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <HeroHomeLanding />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <Carousal />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <HowitWorks />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <ServicesHomeOne />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <FunFactHomeOne />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <ShowContent />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <AboutHomeOne />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <ProjectHomeOne />
            </Suspense>

            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <FooterHomeOne />
            </Suspense>


            <Suspense fallback={<div className='w-full h-full m-auto justify-center align-middle'>Loading... </div>}>
                <BackToTop className="back-to-top-3" />
            </Suspense>

        </>
    );
}

export default HomeThree;
