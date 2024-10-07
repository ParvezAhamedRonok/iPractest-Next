"use client"
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import Loader from "@/Helper/Loader";

//client components.....
const SpeakingCards = dynamic(() => import("../Speaking-Module/Speaking-Test-Cards/index"), { ssr: false })

// end of importings.......


export default function page() {
    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
            {<Loader />}
        </div>}>
            <SpeakingCards />
        </Suspense>
    )
}
