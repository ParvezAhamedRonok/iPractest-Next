import React, { Suspense } from 'react'
import IndexActual from "./index"
import Loader from "@/Helper/Loader";

function page() {
    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'> {<Loader />}</div>}>
            <IndexActual />
        </Suspense>

    )
}

export default page
