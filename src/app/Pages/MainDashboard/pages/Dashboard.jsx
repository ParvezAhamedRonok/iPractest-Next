"use client";
import React, { useEffect, useState } from 'react';
import {
  LineChart, DateFillCom, WeekWritingChart,
  WeekSpeakingChart, WeekListeningChart, WeekReadingChart
} from '../DComponents';
import ProgressBar from './DashSomePages/ProgressBar';
import { useRouter } from 'next/navigation';
import DateGetAPI from "../pages/DashSomePages/DateGetAPI";
import "../StyleAll/Style-Dashboard.css";

//end of importings..............

function Dashboard() {
  const history = useRouter();


  useEffect(() => {
    let getCountry = localStorage.getItem("setCountry")
    let countryFlag = localStorage.getItem('setCountryFlag')

    if (!getCountry || getCountry == "null" || getCountry == "undefined") {
      setTimeout(() => {
        // setSelectCountry(true);
        // requestForToken();
      }, 2000);
    } else if (!countryFlag || countryFlag == "null" || countryFlag == "undefined") {
      // setSelectCountry(true);
    }
    // for fire base notification off date-(07/02/24) we need this
    // requestForToken(); 
  }, []);



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
      {/* <div className="">
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-5 md:grid-cols-4 rounded p-3 mb-4'>
          <WeekSpeakingChart />
          <WeekReadingChart />
          <WeekWritingChart />
          <WeekListeningChart />
        </div>
        <LineChart />
      </div> */}
      <div className='invisible'>
        <DateGetAPI />
      </div>
    </>


  )
}

export default Dashboard
