"use client";
import React, { useEffect, useState } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { LinePrimaryXAxis, LinePrimaryYAxis, LinePrimaryXAxisPrevious } from '../../data/LineChartData';
import LineChartData from '../../data/LineChartData';
import { useStateContext } from '../../../../../contexts/ContextProvider';
import { useRouter } from 'next/navigation';
import { CiCalendarDate } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import "../../pages/DashSomePages/Style.css";

//end of importings........


const LineChart = () => {
  const history = useRouter();
  const { currentMode } = useStateContext();
  const [previousMonth, setPreviousMonth] = useState(false);

  let lineCustomSeries = LineChartData()
  console.log(lineCustomSeries)


  return (
    <>
      <div className='w-full flex justify-end '>
        <div className='flex gap-3 mr-[25px] mb-3'>
          <button className='p-2 bg-blue-400 rounded text-white flex cursor-pointer'
            onClick={() => { setPreviousMonth(!previousMonth) }}
          >{previousMonth ? "Current Month" : "Last Month"}
            {previousMonth ? <RxUpdate className='text-black ml-2 mt-1 text-xl' /> : <CiCalendarDate className='text-black ml-2  text-xl' />}

          </button>
        </div>
      </div>
      <ChartComponent
        id="line-chart"
        // width='auto'
        style={{ textAlign: "center", borderRadius: "25px", border: "2px solid gray", padding: "10px", display: 'flex', justifyContent: "center", alignItems: "center" }}
        height="420px"
        primaryXAxis={previousMonth ? LinePrimaryXAxisPrevious : LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        // chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>  <br />

    </>
  );
};

export default LineChart;