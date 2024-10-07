"use client";
import React, { useEffect, useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';
import { ListeningArray, SpeakingArray, WritingArray, ReadingArray } from '../../data/LineChartData';

// Function to generate the last 7 days of dates and corresponding week names
const generateLast7DaysAndWeekNames = (baseDate) => {
    const days = [];
    const weekNames = [];
    const options = { weekday: 'short' };
    const fullDates = []; // Array to hold the full dates

    for (let i = 6; i >= 0; i--) {
        const date = new Date(baseDate);
        date.setDate(baseDate.getDate() - i);
        const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
        days.push(formattedDate);
        weekNames.push({
            dayName: date.toLocaleDateString("en-US", options), // Get the day name (e.g., Mon, Tue)
            date: formattedDate // Add the date separately
        });
        fullDates.push(formattedDate); // Push the full date to the array
    }
    return { days, weekNames, fullDates };
};

// Get the current date
const currentDate = new Date();

// Generate data for the last week
const { days: lastWeekDates, weekNames: lastWeekNames, fullDates: lastWeekFullDates } = generateLast7DaysAndWeekNames(currentDate);

// Example data values for the last week (should be 7 entries)
const lastWeekDataValues = [
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 }
];










// Function to combine week names with data values
const combineWeekNamesWithData = (weekNames, dataValues) => {
    return weekNames.map((week, index) => ({
        weekName: week.dayName,  // Weekday name
        date: week.date,         // Date
        ...dataValues[index]     // Value from lastWeekDataValues
    }));
};

const WeekWritingChart = () => {
    const [openChart, setOpenchart] = useState(false)
    // Combine week names with their respective data values
    const data = combineWeekNamesWithData(lastWeekNames, lastWeekDataValues);
    // console.log(WritingArray)

    useEffect(() => {
        setTimeout(() => {
            setOpenchart(true)
            WritingArray.map((items) => {
                // console.log(items)
                if (items.x == lastWeekFullDates[0]) {
                    console.log("success...-1");
                    lastWeekDataValues[0].value = Number(items.y)
                }
                if (items.x == lastWeekFullDates[1]) {
                    lastWeekDataValues[1].value = Number(items.y)
                }
                if (items.x == lastWeekFullDates[2]) {
                    lastWeekDataValues[2].value = Number(items.y)
                }
                if (items.x == lastWeekFullDates[3]) {
                    lastWeekDataValues[3].value = Number(items.y)
                }
                if (items.x == lastWeekFullDates[4]) {
                    lastWeekDataValues[4].value = Number(items.y)
                }
                if (items.x == lastWeekFullDates[5]) {
                    lastWeekDataValues[5].value = Number(items.y)
                }
                if (items.x == lastWeekFullDates[6]) {
                    lastWeekDataValues[6].value = Number(items.y)
                }
            })
        }, 5000);
    }, [WritingArray])

    return (
        <>
            {
                openChart && (<div style={{ width: "100%", height: 200 }} className="flex p-1 justify-center items-center border-2 border-gray-400 pt-1 pb-1 rounded-[20px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 10, right: 10, left: 10, bottom: 10 }} // Reduce margins around the chart
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            {/* XAxis with week names */}
                            <XAxis
                                dataKey="weekName"
                                tick={{ fontSize: 10 }}
                            />

                            {/* YAxis hidden */}
                            <YAxis hide={true} />

                            {/* Custom Tooltip to style values */}
                            <Tooltip
                                formatter={(value, name, props) => [<span style={{ fontWeight: 'bold', fontSize: '14px' }}>{value}</span>, `Date: ${props.payload.date}`]}
                                contentStyle={{ fontSize: '12px' }} // Adjust tooltip text size
                            />

                            <Legend />

                            {/* Bar for the single value, with adjusted size */}
                            <Bar dataKey="value" fill="#8884d8" name="Writing" barSize={20}>
                                <LabelList
                                    value="Writing" // Set the static value to display
                                    position="top"
                                    fill="#000" // Text color
                                    fontSize={11} // Font size
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>)
            }
        </>
    );
};

export default WeekWritingChart;
