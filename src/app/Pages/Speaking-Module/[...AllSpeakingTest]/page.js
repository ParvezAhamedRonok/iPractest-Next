"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, Suspense } from 'react';
import Loader from "@/Helper/Loader";
//client components...
const SpeakingTestMain = dynamic(() => import("../Speaking-Func-Compoents/Important/Main"), { ssr: false })


export default function page({ params }) {
    // console.log(params.AllSpeakingTest[0]);
    let testNo = params.AllSpeakingTest[0]


    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'> {<Loader />}</div>}>
            <SpeakingTestMain
                testNo={testNo}
            />
        </Suspense>

    )
}
