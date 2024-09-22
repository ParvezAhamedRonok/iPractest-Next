import React, { Suspense } from 'react';
import MainDashboard from "../index.jsx"
import Loader from "@/Helper/Loader";

export default function page({ params }) {
    let DashboardID = params.DynamicRoutes[0];

    return (
        <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
            {<Loader />}
        </div>}>
            <MainDashboard
                DashboardID={DashboardID}
            />
        </Suspense>


    )
}
