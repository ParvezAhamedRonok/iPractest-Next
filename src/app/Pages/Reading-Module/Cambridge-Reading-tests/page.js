import React, { Suspense } from 'react'
import IndexCambridge from "./index"
import Loader from "@/Helper/Loader";

function page() {
    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
            {<Loader />}
        </div>}>
            <IndexCambridge />
        </Suspense>
    )
}

export default page
