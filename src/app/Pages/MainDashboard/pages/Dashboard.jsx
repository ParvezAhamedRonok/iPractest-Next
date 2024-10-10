
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import {
  DateFillCom,
  WeekListeningChart,
  WeekReadingChart,
  WeekSpeakingChart,
  WeekWritingChart,
} from '../DComponents';

import LineCharts from '../DComponents/Charts/LineChart';
import DateGetAPI from "../data/All-Modules-Data-Get";
import "../StyleAll/Style-Dashboard.css";
const ProgressBar = dynamic(() => import('./Dash-Page-Component/ProgressBar'), { ssr: false });

//end of importings..............



function Dashboard() {


  return (
    <>

      <div className='DashMainHeader'>
        <div className='pt-[20px]'>
          <ProgressBar />
        </div>
        <div className='bg-blue-200 h-auto rounded shadow-2xl shadow-purple mt-[2px] sm:mt-[-20px]'>
          <div className='w-full h-full'>
            <DateFillCom />
          </div>
        </div>
      </div>
      <div className="">
        <div className='text-center text-xl sm:text-2xl p-2 font-bold'>
          Your daily performance for the last 7 days.
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-5 md:grid-cols-4 rounded p-3 mb-4'>
          <WeekSpeakingChart />
          <WeekWritingChart />
          <WeekReadingChart />
          <WeekListeningChart />
        </div>
        <LineCharts />
      </div>
      <div className='invisible'>
        <DateGetAPI />
      </div>
    </>


  )
}

export default Dashboard
