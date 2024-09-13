import React from 'react';
import MainDashboard from "../index.jsx"

export default function page({ params }) {
    let DashboardID = params.DynamicRoutes[0];

    return (
        <div>
            <MainDashboard
                DashboardID={DashboardID}
            />

        </div>
    )
}
