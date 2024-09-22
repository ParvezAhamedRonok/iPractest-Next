import React, { Suspense } from 'react'
import ListeningActual from "./index.jsx"
import Loader from "@/Helper/Loader";

export default function page() {
    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
            {<Loader />}
        </div>}>
            <ListeningActual />
        </Suspense>
    )
}
