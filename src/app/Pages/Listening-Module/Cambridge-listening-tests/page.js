import React, { Suspense } from 'react'
import ListeningCambridge from "./index.jsx"
import Loader from "@/Helper/Loader";

export default function page() {
    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
            {<Loader />}
        </div>}>
            <ListeningCambridge />
        </Suspense>
    )
}
