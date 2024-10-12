"use client";
import React, { useState } from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CiCalendarDate } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { isMobile } from 'react-device-detect';
import LineChartData from '../../data/LineChartData';
import { DashboardCurrentmonthData, DashboardLastmonthData } from '../../data/LineChartData';
//end of the importing....



// Function to generate 30 days of dates for any given month
const generateDates = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dates = [];
    for (let day = 1; day <= daysInMonth; day++) {
        dates.push(`${year}/${(month + 1).toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`);
    }
    return dates;
};

// Fixed date arrays for current and previous month (30 days each);
const date = new Date(); // Simulating the current date, for example, September 28, 2024

// Get the current month (1-12)
const currentMonth = date.getMonth(); // Adding 1 to get 1-12

// Get the current year (4-digit)
const currentYear = date.getFullYear();

// Calculate last month and year
let lastMonth, lastYear;

if (currentMonth === 1) {
    lastMonth = 12; // December of the previous year
    lastYear = currentYear - 1;
} else {
    lastMonth = currentMonth - 1; // Just the previous month
    lastYear = currentYear;
}
//call those above functions fro getting current & previous month dates..
const currentMonthDates = generateDates(currentYear, currentMonth);
const previousMonthDates = generateDates(lastYear, lastMonth);


// Current month data values (example values with 30 days)
// const currentMonthDataValues = DashboardCurrentmonthData

// Previous month data values (example values with 30 days)
const previousMonthDataValues = [
    { "value1": 5, "value2": 7, "value4": 4 },
    { "value1": 2, "value2": 8, "value3": 4, "value4": 5 },
    { "value1": 6, "value2": 3, "value3": 7, "value4": 2 },
    { "value1": 8, "value2": 5, "value3": 2, "value4": 1 },
    // ... (Add more values for all 30 days or pad missing days with null)
    // { value1: null, value2: null, value3: null, value4: null }, // for missing data
    // Ensure you have 30 entries here
];

// Function to replace null values with 0
const fillNullValues = (data) => {
    return data.map((item) => ({
        value1: item.value1 === null ? 0 : item.value1,
        value2: item.value2 === null ? 0 : item.value2,
        value3: item.value3 === null ? 0 : item.value3,
        value4: item.value4 === null ? 0 : item.value4,
    }));
};



// Function to combine dates with data values
const combineDatesWithData = (dates, dataValues) => {
    return dates.map((date, index) => ({
        date,
        ...dataValues[index]
    }));
};

// Format XAxis labels to 'MMM d' but only for odd-numbered days
const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    const day = date.getDate();

    if (isMobile) {
        // For mobile, show dates: 1, 10, 20, 30
        if (day === 1 || day === 10 || day === 20 || day === 30) {
            return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        }
    } else {
        // For PC, show only odd-numbered days
        if (day % 2 !== 0) {
            return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        }
    }

    return ''; // Return empty string for other cases
};

const MultiLineChart = () => {
    const [showPreviousMonth, setShowPreviousMonth] = useState(false);

    // Toggle between current month and previous month data and dates
    // const uniqueDashboardCurrentmonthData = DashboardCurrentmonthData && DashboardCurrentmonthData.
    let data = showPreviousMonth
        ? combineDatesWithData(previousMonthDates, fillNullValues(DashboardLastmonthData))
        : combineDatesWithData(currentMonthDates, fillNullValues(DashboardCurrentmonthData));

    return (
        <>
            {/* call this component for getting all modules data... */}
            <div className='text-center text-xl sm:text-2xl p-2 font-bold'>
                Your performance for the current month  <br />
                and the previous month, day by day.
            </div>
            <LineChartData />
            <div className="w-full flex justify-end ">
                <div className="flex gap-3 mr-[25px] mb-3">
                    <button
                        className="p-2 bg-blue-400 rounded text-white flex cursor-pointer"
                        onClick={() => setShowPreviousMonth(!showPreviousMonth)}
                    >
                        {showPreviousMonth ? "Current Month" : "Last Month"}
                        {showPreviousMonth ? (
                            <RxUpdate className="text-black ml-2 mt-1 text-xl" />
                        ) : (
                            <CiCalendarDate className="text-black ml-2 text-xl" />
                        )}
                    </button>
                </div>
            </div>
            <div style={{ width: "100%", height: 420 }} className='border-2 border-gray-400 pt-1 pb-1 rounded-[20px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        {/* XAxis with smaller font and only odd-numbered dates */}
                        <XAxis
                            dataKey="date"
                            tickFormatter={formatXAxis}
                            interval={0}
                            tick={{ fontSize: 10 }}  // Smaller font size
                        />

                        {/* YAxis with smaller font */}
                        <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={{ fontSize: 10 }} />

                        <Tooltip />
                        <Legend />

                        {/* Multiple lines for the dataset */}
                        <Line type="monotone" dataKey="value1" stroke="#8884d8" strokeWidth={2} name="Speaking" />
                        <Line type="monotone" dataKey="value2" stroke="#82ca9d" strokeWidth={2} name="Writing" />
                        <Line type="monotone" dataKey="value3" stroke="#ffc658" strokeWidth={2} name="Reading" />
                        <Line type="monotone" dataKey="value4" stroke="#ff7300" strokeWidth={2} name="Listening" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        </>
    );
};

export default MultiLineChart;
