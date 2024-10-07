"use client"
import React, { useEffect } from 'react';
import axios from "axios";
import moment from "moment";
import { SPEAKING_GET_FOR_COLLECT_USER_DATA, READING_GET_FOR_COLLECT_USER_DATA, LISTENING_GET_FOR_COLLECT_USER_DATA, WRITING_GET_FOR_COLLECT_USER_DATA } from "../../../../assets/URL's/AllUrl"


const d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
// console.log(month);
// console.log(d.getMonth());

if (month != 10 || month != 11 || month != 12) {
    month = "0" + month
}


let previousMonth;
let previousYear;
if (d.getMonth() == 0) {
    previousMonth = 12
    previousYear = d.getFullYear() - 1
} else {
    previousMonth = d.getMonth();
    previousYear = d.getFullYear();
}





//Line-Chart all data getting 
//from database-----------(it is making also duplicate data....)
export let SpeakingArray = [];
export let ReadingArray = [];
export let WritingArray = [];
export let ListeningArray = [];

//for passing this month & previous month date & scores by array

//export all below datas for line chart in dashboard just storing values in those arrays..
export let DashboardCurrentmonthData = [];
export let DashboardLastmonthData = [];


//Week-Chart Arrays ...........
// export let WritingWeekChartDatas = [
//     { value: 0 },
//     { value: 0 },
//     { value: 0 },
//     { value: 0 },
//     { value: 0 },
//     { value: 0 },
//     { value: 0 }
// ];











export default function LineChartData() {
    useEffect(() => {
        // var useremail = localStorage.getItem('userEmail');
        // alert("hellow")

        axios({
            method: "get",
            url: SPEAKING_GET_FOR_COLLECT_USER_DATA + localStorage.getItem('userEmail'),
            // url: 'http://localhost:8080/api/user/SpeakingResults/' + useremail,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                let makeSpeakingArray = [];
                res.data.data.map((items) => {
                    makeSpeakingArray.push({
                        createdAt: items.createdAt,
                        ieltsRate: items.ieltsScore,
                        userEmail: items.userEmail,
                        username: items.username,
                        updatedAt: items.updatedAt
                    })


                });
                // console.log(makeSpeakingArray);
                // let dataX = res.data.data;
                // console.log(res.data.data)
                thisMonthFunction(makeSpeakingArray, SpeakingArray)
                LastMonthFunction(makeSpeakingArray, SpeakingArray);
                // dataX.map((e) => {
                //     let mainData = {
                //         x: moment.utc(e.createdAt).format('YYYY/MM/DD'),
                //         y: e.ieltsRate,
                //     }
                //     // console.log(mainData)
                //     return SpeakingArray.push(mainData);

                // })
            })
            .catch((e) => { console.log(e) });




        axios({
            method: "get",
            url: READING_GET_FOR_COLLECT_USER_DATA + localStorage.getItem('userEmail'),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                let dataX = res.data.data;
                dataX.map((e) => {
                    // console.log(moment.utc(e.createdAt).format('YYYY/MM/DD'),)
                })
                // console.log(dataX)
                thisMonthFunction(dataX, ReadingArray)
                LastMonthFunction(dataX, ReadingArray)
            })
            .catch((e) => { console.log(e) });


        axios({
            method: "get",
            url: WRITING_GET_FOR_COLLECT_USER_DATA + localStorage.getItem('userEmail'),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                let dataX = res.data.data;
                thisMonthFunction(dataX, WritingArray)
                LastMonthFunction(dataX, WritingArray)

            })
            .catch((e) => { console.log(e) });


        axios({
            method: "get",
            url: LISTENING_GET_FOR_COLLECT_USER_DATA + localStorage.getItem('userEmail'),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                let dataX = res.data.data;
                thisMonthFunction(dataX, ListeningArray)
                LastMonthFunction(dataX, ListeningArray)
            })
            .catch((e) => { console.log(e) });



    }, []);




    //for this month user data count by this function-----
    const thisMonthFunction = (dataX, WritingThisMonth) => {
        let newMonth = String(month);
        let newYear = String(year);
        let writingDataMainArray = [];

        // Map through dataX to create writingDataMainArray
        dataX.forEach((e) => {
            let mainData = {
                x: moment.utc(e.createdAt).format('YYYY/MM/DD'),
                y: e.ieltsRate,
            };
            writingDataMainArray.push(mainData);
        });

        // Loop through each day of the month (1 to 31)
        for (let day = 1; day <= 31; day++) {
            // Format the date string for the current day
            let formattedDate = `${year}/${month}/${day.toString().padStart(2, '0')}`;

            // Filter the data for the current day
            let W_Filter = writingDataMainArray.filter((e) => e.x === formattedDate);

            // Calculate the sum and average
            let W_Sum = W_Filter.reduce((sum, item) => sum + Number(item.y), 0);
            let W_Devider = W_Filter.length ? W_Sum / W_Filter.length : 0; // Prevent division by zero
            let toFixedNum = W_Devider.toFixed(1);

            // Create the object for the current day
            let W_Obj = { x: formattedDate, y: toFixedNum };

            // Push to WritingThisMonth if the value is greater than 0
            if (W_Obj.y > 0) {
                WritingThisMonth.push(W_Obj);
            }
        }
    };

    //for last month user data count by this function-----
    const LastMonthFunction = (dataX, WritingThisMonth) => {
        const newMonth = toString(month);
        const newYear = toString(year);
        const writingDataMainArray = dataX.map((e) => ({
            x: moment.utc(e.createdAt).format('YYYY/MM/DD'),
            y: e.ieltsRate,
        }));

        const previousDate = `${previousYear}/${previousMonth}/`;

        // Iterate over the days of the month
        for (let day = 1; day <= 31; day++) {
            const dateStr = `${previousDate}${day.toString().padStart(2, '0')}`;
            const filteredData = writingDataMainArray.filter((e) => e.x === dateStr);

            if (filteredData.length > 0) {
                const sum = filteredData.reduce((sum, item) => sum + Number(item.y), 0);
                const average = (sum / filteredData.length).toFixed(1);
                const dataPoint = { x: dateStr, y: average };

                if (dataPoint.y > 0) {
                    WritingThisMonth.push(dataPoint);
                }
            }
        }
    };



    //use effect for storing / making linechart values depend of dates..
    useEffect(() => {
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



        let arrayItems = [
            "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
            "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
            "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
            "31"
        ];



        setTimeout(() => {
            //removing duplicate items ..
            const uniqueSpeakingArray = SpeakingArray.filter((obj, index, self) =>
                index === self.findIndex((o) => JSON.stringify(o) === JSON.stringify(obj))
            );
            const uniqueWritinggArray = WritingArray.filter((obj, index, self) =>
                index === self.findIndex((o) => JSON.stringify(o) === JSON.stringify(obj))
            );
            // console.log(uniqueWritinggArray)
            const uniqueReadinggArray = ReadingArray.filter((obj, index, self) =>
                index === self.findIndex((o) => JSON.stringify(o) === JSON.stringify(obj))
            );
            const uniqueListeningArray = ListeningArray.filter((obj, index, self) =>
                index === self.findIndex((o) => JSON.stringify(o) === JSON.stringify(obj))
            );


            //for current-month
            arrayItems.map((items) => {
                let mainObj = {}
                let mainCurrentMonth = currentMonth + 1
                let currentDates = `${currentYear}/${mainCurrentMonth <= 9 ? "0" + mainCurrentMonth : mainCurrentMonth}/${items}`
                // console.log(currentDates);
                // console.log(typeof currentDates)

                let resultSpeaking = uniqueSpeakingArray.find(dayMatch => dayMatch.x == currentDates);
                if (resultSpeaking) {
                    mainObj.value1 = Number(resultSpeaking.y)
                } else {
                    mainObj.value1 = null
                }

                let resultWriting = uniqueWritinggArray.find(dayMatch => dayMatch.x == currentDates);
                if (resultWriting) {
                    mainObj.value2 = Number(resultWriting.y)
                } else {
                    mainObj.value2 = null
                }

                let resultReading = uniqueReadinggArray.find(dayMatch => dayMatch.x == currentDates);
                if (resultReading) {
                    mainObj.value3 = Number(resultReading.y)
                } else {
                    mainObj.value3 = null
                }

                let resultListening = uniqueListeningArray.find(dayMatch => dayMatch.x == currentDates);
                if (resultListening) {
                    mainObj.value4 = Number(resultListening.y)
                } else {
                    mainObj.value4 = null
                }

                DashboardCurrentmonthData.push(mainObj);
            });


            //for previous month...
            arrayItems.map((items) => {
                let mainObj = {}
                let mainCurrentMonth = currentMonth
                let currentDates = `${currentYear}/${mainCurrentMonth <= 9 ? "0" + mainCurrentMonth : mainCurrentMonth}/${items}`
                // console.log(currentDates);
                // console.log(typeof currentDates)

                let resultSpeaking = uniqueSpeakingArray.find(dayMatch => dayMatch.x == currentDates);
                if (resultSpeaking) {
                    mainObj.value1 = Number(resultSpeaking.y)
                } else {
                    mainObj.value1 = null
                }

                let resultWriting = uniqueWritinggArray.find(dayMatch => dayMatch.x == currentDates);
                if (resultWriting) {
                    mainObj.value2 = Number(resultWriting.y)
                } else {
                    mainObj.value2 = null
                }

                let resultReading = uniqueReadinggArray.find(dayMatch => dayMatch.x == currentDates);
                if (resultReading) {
                    mainObj.value3 = Number(resultReading.y)
                } else {
                    mainObj.value3 = null
                }

                let resultListening = uniqueListeningArray.find(dayMatch => dayMatch.x == currentDates);
                if (resultListening) {
                    mainObj.value4 = Number(resultListening.y)
                } else {
                    mainObj.value4 = null
                }

                DashboardLastmonthData.push(mainObj);
            });
            // console.log(DashboardCurrentmonthData);
        }, 2000);
    }, [])

}




