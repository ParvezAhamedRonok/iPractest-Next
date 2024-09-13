"use client"
import React, { useEffect } from 'react';
import axios from "axios";
import moment from "moment";
import { SPEAKING_GET_FOR_COLLECT_USER_DATA, READING_GET_FOR_COLLECT_USER_DATA, LISTENING_GET_FOR_COLLECT_USER_DATA, WRITING_GET_FOR_COLLECT_USER_DATA } from "../../../../assets/URL's/AllUrl"


const d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
console.log(month);
console.log(d.getMonth());

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


// console.log(year + "/" + month);
// console.log(previousYear + "/" + previousMonth);
export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    minimum: year + "/" + month + "/1",
    maximum: year + "/" + month + "/31",
    intervalType: 'Days',
    labelFormat: 'MMM d',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
};

export const LinePrimaryXAxisPrevious = {
    valueType: 'DateTime',
    minimum: previousYear + "/" + previousMonth + "/1",
    maximum: previousYear + "/" + previousMonth + "/31",
    intervalType: 'Days',
    labelFormat: 'MMM d',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
};

export const LinePrimaryYAxis = {
    labelFormat: '{value}',
    rangePadding: 'None',
    minimum: 0,
    maximum: 9,
    interval: 1,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
};




//Line-Chart all data getting 
//from database-----------
var useremail = localStorage.getItem('userEmail');
export let SpeakingArray = [];
export let ReadingArray = [];
export let WritingArray = [];
export let ListeningArray = [];

//for passing this month & previous month date & scores by array





axios({
    method: "get",
    url: SPEAKING_GET_FOR_COLLECT_USER_DATA + useremail,
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
        console.log(res.data.data)
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
    url: READING_GET_FOR_COLLECT_USER_DATA + useremail,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
    }
})
    .then((res) => {
        let dataX = res.data.data;
        dataX.map((e) => {
            console.log(moment.utc(e.createdAt).format('YYYY/MM/DD'),)
        })
        // console.log(dataX)
        thisMonthFunction(dataX, ReadingArray)
        LastMonthFunction(dataX, ReadingArray)
    })
    .catch((e) => { console.log(e) });


axios({
    method: "get",
    url: WRITING_GET_FOR_COLLECT_USER_DATA + useremail,
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
    url: LISTENING_GET_FOR_COLLECT_USER_DATA + useremail,
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




//for this month user data count by this function-----
const thisMonthFunction = (dataX, WritingThisMonth) => {
    let newMonth = toString(month);
    let newYear = toString(year);
    let writingDataMainArray = [];
    let items = dataX.map((e) => {
        let mainData = {
            x: moment.utc(e.createdAt).format('YYYY/MM/DD'),
            y: e.ieltsRate,
        }
        // WritingArray.push(mainData);  //may be don't -- need
        writingDataMainArray.push(mainData)
        // console.log(mainData)
        return mainData
    })
    // for this monthg --------------
    let W_Filter_1 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/01`);
    var W_Sum_1 = W_Filter_1.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_1 = W_Sum_1 / Object.keys(W_Filter_1).length;
    let toFixedNum_1 = W_Devider_1.toFixed(1);
    let W_Obj_1 = { x: `${year}/${month}/01`, y: toFixedNum_1 };
    if (W_Obj_1.y > 0) {
        WritingThisMonth.push(W_Obj_1);
    }
    //day-2
    let W_Filter_2 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/02`);
    console.log(W_Filter_2);
    var W_Sum_2 = W_Filter_2.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_2 = W_Sum_2 / Object.keys(W_Filter_2).length;
    let toFixedNum_2 = W_Devider_2.toFixed(1);
    let W_Obj_2 = { x: `${year}/${month}/02`, y: toFixedNum_2 };
    if (W_Obj_2.y > 0) {
        WritingThisMonth.push(W_Obj_2);
    }
    // //day-3
    let W_Filter_3 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/03`);
    var W_Sum_3 = W_Filter_3.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_3 = W_Sum_3 / Object.keys(W_Filter_3).length;
    let toFixedNum_3 = W_Devider_3.toFixed(1);
    let W_Obj_3 = { x: `${year}/${month}/03`, y: toFixedNum_3 };
    if (W_Obj_3.y > 0) {
        WritingThisMonth.push(W_Obj_3);
    }
    // //day-4
    let W_Filter_4 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/04`);
    var W_Sum_4 = W_Filter_4.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_4 = W_Sum_4 / Object.keys(W_Filter_4).length;
    let toFixedNum_4 = W_Devider_4.toFixed(1);
    let W_Obj_4 = { x: `${year}/${month}/04`, y: toFixedNum_4 };
    if (W_Obj_4.y > 0) {
        WritingThisMonth.push(W_Obj_4);
    }
    //day-5
    let W_Filter_5 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/05`);
    var W_Sum_5 = W_Filter_5.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_5 = W_Sum_5 / Object.keys(W_Filter_5).length;
    let toFixedNum_5 = W_Devider_5.toFixed(1);
    let W_Obj_5 = { x: `${year}/${month}/05`, y: toFixedNum_5 };
    if (W_Obj_5.y > 0) {
        WritingThisMonth.push(W_Obj_5);
    }
    //day-6
    let W_Filter_6 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/06`);
    var W_Sum_6 = W_Filter_6.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_6 = W_Sum_6 / Object.keys(W_Filter_6).length;
    let toFixedNum_6 = W_Devider_6.toFixed(1);
    let W_Obj_6 = { x: `${year}/${month}/06`, y: toFixedNum_6 };
    if (W_Obj_6.y > 0) {
        WritingThisMonth.push(W_Obj_6);
    }
    //day-7
    let W_Filter_7 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/07`);
    var W_Sum_7 = W_Filter_7.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_7 = W_Sum_7 / Object.keys(W_Filter_7).length;
    let toFixedNum_7 = W_Devider_7.toFixed(1);
    let W_Obj_7 = { x: `${year}/${month}/07`, y: toFixedNum_7 };
    if (W_Obj_7.y > 0) {
        WritingThisMonth.push(W_Obj_7);
    }
    //day-8
    let W_Filter_8 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/08`);
    var W_Sum_8 = W_Filter_8.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_8 = W_Sum_8 / Object.keys(W_Filter_8).length;
    let toFixedNum_8 = W_Devider_8.toFixed(1);
    let W_Obj_8 = { x: `${year}/${month}/08`, y: toFixedNum_8 };
    if (W_Obj_8.y > 0) {
        WritingThisMonth.push(W_Obj_8);
    }
    //day-9
    let W_Filter_9 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/09`);
    var W_Sum_9 = W_Filter_9.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_9 = W_Sum_9 / Object.keys(W_Filter_9).length;
    let toFixedNum_9 = W_Devider_9.toFixed(1);
    let W_Obj_9 = { x: `${year}/${month}/09`, y: toFixedNum_9 };
    if (W_Obj_9.y > 0) {
        WritingThisMonth.push(W_Obj_9);
    }
    //day-10
    let W_Filter_10 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/10`);
    var W_Sum_10 = W_Filter_10.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_10 = W_Sum_10 / Object.keys(W_Filter_10).length;
    let toFixedNum_10 = W_Devider_10.toFixed(1);
    let W_Obj_10 = { x: `${year}/${month}/10`, y: toFixedNum_10 };
    if (W_Obj_10.y > 0) {
        WritingThisMonth.push(W_Obj_10);
    }
    //day-11
    let W_Filter_11 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/11`);
    var W_Sum_11 = W_Filter_11.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_11 = W_Sum_11 / Object.keys(W_Filter_11).length;
    let toFixedNum_11 = W_Devider_11.toFixed(1);
    let W_Obj_11 = { x: `${year}/${month}/11`, y: toFixedNum_11 };
    if (W_Obj_11.y > 0) {
        WritingThisMonth.push(W_Obj_11);
    }
    //day-12
    let W_Filter_12 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/12`);
    var W_Sum_12 = W_Filter_12.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_12 = W_Sum_12 / Object.keys(W_Filter_12).length;
    let toFixedNum_12 = W_Devider_12.toFixed(1);
    let W_Obj_12 = { x: `${year}/${month}/12`, y: toFixedNum_12 };
    if (W_Obj_12.y > 0) {
        WritingThisMonth.push(W_Obj_12);
    }
    //day-13
    let W_Filter_13 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/13`);
    var W_Sum_13 = W_Filter_13.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_13 = W_Sum_13 / Object.keys(W_Filter_13).length;
    let toFixedNum_13 = W_Devider_13.toFixed(1);
    let W_Obj_13 = { x: `${year}/${month}/13`, y: toFixedNum_13 };
    if (W_Obj_13.y > 0) {
        WritingThisMonth.push(W_Obj_13);
    }
    //day-14
    let W_Filter_14 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/14`);
    var W_Sum_14 = W_Filter_14.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_14 = W_Sum_14 / Object.keys(W_Filter_14).length;
    let toFixedNum_14 = W_Devider_14.toFixed(1);
    let W_Obj_14 = { x: `${year}/${month}/14`, y: toFixedNum_14 };
    if (W_Obj_14.y > 0) {
        WritingThisMonth.push(W_Obj_14);
    }
    //day-15
    let W_Filter_15 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/15`);
    var W_Sum_15 = W_Filter_15.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_15 = W_Sum_15 / Object.keys(W_Filter_15).length;
    let toFixedNum_15 = W_Devider_15.toFixed(1);
    let W_Obj_15 = { x: `${year}/${month}/15`, y: toFixedNum_15 };
    if (W_Obj_15.y > 0) { WritingThisMonth.push(W_Obj_15); }
    //day-16
    let W_Filter_16 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/16`);
    var W_Sum_16 = W_Filter_16.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_16 = W_Sum_16 / Object.keys(W_Filter_16).length;
    let toFixedNum_16 = W_Devider_16.toFixed(1);
    let W_Obj_16 = { x: `${year}/${month}/16`, y: toFixedNum_16 };
    if (W_Obj_16.y > 0) {
        WritingThisMonth.push(W_Obj_16);
    }
    //day-17
    let W_Filter_17 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/17`);
    var W_Sum_17 = W_Filter_17.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_17 = W_Sum_17 / Object.keys(W_Filter_17).length;
    let toFixedNum_17 = W_Devider_17.toFixed(1);
    let W_Obj_17 = { x: `${year}/${month}/17`, y: toFixedNum_17 };
    if (W_Obj_17.y > 0) { WritingThisMonth.push(W_Obj_17); }
    //day-18
    let W_Filter_18 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/18`);
    var W_Sum_18 = W_Filter_18.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_18 = W_Sum_18 / Object.keys(W_Filter_18).length;
    let toFixedNum_18 = W_Devider_18.toFixed(1);
    let W_Obj_18 = { x: `${year}/${month}/18`, y: toFixedNum_18 };
    if (W_Obj_18.y > 0) {
        WritingThisMonth.push(W_Obj_18);
    }
    //day-19
    let W_Filter_19 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/19`);
    var W_Sum_19 = W_Filter_19.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_19 = W_Sum_19 / Object.keys(W_Filter_19).length;
    let toFixedNum_19 = W_Devider_19.toFixed(1);
    let W_Obj_19 = { x: `${year}/${month}/19`, y: toFixedNum_19 };
    if (W_Obj_19.y > 0) { WritingThisMonth.push(W_Obj_19); }
    //day-20
    let W_Filter_20 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/20`);
    var W_Sum_20 = W_Filter_20.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_20 = W_Sum_20 / Object.keys(W_Filter_20).length;
    let toFixedNum_20 = W_Devider_20.toFixed(1);
    let W_Obj_20 = { x: `${year}/${month}/20`, y: toFixedNum_20 };
    if (W_Obj_20.y > 0) { WritingThisMonth.push(W_Obj_20); }
    //day-21
    let W_Filter_21 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/21`);
    var W_Sum_21 = W_Filter_21.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_21 = W_Sum_21 / Object.keys(W_Filter_21).length;
    let toFixedNum_21 = W_Devider_21.toFixed(1);
    let W_Obj_21 = { x: `${year}/${month}/21`, y: toFixedNum_21 };
    if (W_Obj_21.y > 0) { WritingThisMonth.push(W_Obj_21); }
    //day-22
    let W_Filter_22 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/22`);
    var W_Sum_22 = W_Filter_22.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_22 = W_Sum_22 / Object.keys(W_Filter_22).length;
    let toFixedNum_22 = W_Devider_22.toFixed(1);
    let W_Obj_22 = { x: `${year}/${month}/22`, y: toFixedNum_22 };
    if (W_Obj_22.y > 0) { WritingThisMonth.push(W_Obj_22); }
    //day-23
    let W_Filter_23 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/23`);
    var W_Sum_23 = W_Filter_23.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_23 = W_Sum_23 / Object.keys(W_Filter_23).length;
    let toFixedNum_23 = W_Devider_23.toFixed(1);
    let W_Obj_23 = { x: `${year}/${month}/23`, y: toFixedNum_23 };
    if (W_Obj_23.y > 0) { WritingThisMonth.push(W_Obj_23); }
    //day-24
    let W_Filter_24 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/24`);
    var W_Sum_24 = W_Filter_24.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_24 = W_Sum_24 / Object.keys(W_Filter_24).length;
    let toFixedNum_24 = W_Devider_24.toFixed(1);
    let W_Obj_24 = { x: `${year}/${month}/24`, y: toFixedNum_24 };
    if (W_Obj_24.y > 0) { WritingThisMonth.push(W_Obj_24); }
    //day-25
    let W_Filter_25 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/25`);
    var W_Sum_25 = W_Filter_25.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_25 = W_Sum_25 / Object.keys(W_Filter_25).length;
    let toFixedNum_25 = W_Devider_25.toFixed(1);
    let W_Obj_25 = { x: `${year}/${month}/25`, y: toFixedNum_25 };
    if (W_Obj_25.y > 0) { WritingThisMonth.push(W_Obj_25); }
    //day-26
    let W_Filter_26 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/26`);
    var W_Sum_26 = W_Filter_26.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_26 = W_Sum_26 / Object.keys(W_Filter_26).length;
    let toFixedNum_26 = W_Devider_26.toFixed(1);
    let W_Obj_26 = { x: `${year}/${month}/26`, y: toFixedNum_26 };
    if (W_Obj_26.y > 0) { WritingThisMonth.push(W_Obj_26); }
    //day-27
    let W_Filter_27 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/27`);
    var W_Sum_27 = W_Filter_27.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_27 = W_Sum_27 / Object.keys(W_Filter_27).length;
    let toFixedNum_27 = W_Devider_27.toFixed(1);
    let W_Obj_27 = { x: `${year}/${month}/27`, y: toFixedNum_27 };
    if (W_Obj_27.y > 0) { WritingThisMonth.push(W_Obj_27); }
    //day-28
    let W_Filter_28 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/28`);
    var W_Sum_28 = W_Filter_28.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_28 = W_Sum_28 / Object.keys(W_Filter_28).length;
    let toFixedNum_28 = W_Devider_28.toFixed(1);
    let W_Obj_28 = { x: `${year}/${month}/28`, y: toFixedNum_28 };
    if (W_Obj_28.y > 0) { WritingThisMonth.push(W_Obj_28); }
    //day-29
    let W_Filter_29 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/29`);
    var W_Sum_29 = W_Filter_29.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_29 = W_Sum_29 / Object.keys(W_Filter_29).length;
    let toFixedNum_29 = W_Devider_29.toFixed(1);
    let W_Obj_29 = { x: `${year}/${month}/29`, y: toFixedNum_29 };
    if (W_Obj_29.y > 0) { WritingThisMonth.push(W_Obj_29); }
    //day-30
    let W_Filter_30 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/30`);
    var W_Sum_30 = W_Filter_30.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_30 = W_Sum_30 / Object.keys(W_Filter_30).length;
    let toFixedNum_30 = W_Devider_30.toFixed(1);
    let W_Obj_30 = { x: `${year}/${month}/30`, y: toFixedNum_30 };
    if (W_Obj_30.y > 0) { WritingThisMonth.push(W_Obj_30); }
    //day-31
    let W_Filter_31 = writingDataMainArray.filter((e) => e.x == `${year}/${month}/31`);
    var W_Sum_31 = W_Filter_31.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_31 = W_Sum_31 / Object.keys(W_Filter_31).length;
    let toFixedNum_31 = W_Devider_31.toFixed(1);
    let W_Obj_31 = { x: `${year}/${month}/31`, y: toFixedNum_31 };
    if (W_Obj_31.y > 0) { WritingThisMonth.push(W_Obj_31); }


}
//for last month user data count by this function-----
const LastMonthFunction = (dataX, WritingThisMonth) => {
    let newMonth = toString(month);
    let newYear = toString(year);
    let writingDataMainArray = [];
    let items = dataX.map((e) => {
        let mainData = {
            x: moment.utc(e.createdAt).format('YYYY/MM/DD'),
            y: e.ieltsRate,
        }
        // WritingArray.push(mainData);  //may be don't -- need
        writingDataMainArray.push(mainData)
        // console.log(mainData)
        return mainData
    })

    // for Last monthg --------------
    let W_Filter_1 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/01`);
    var W_Sum_1 = W_Filter_1.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_1 = W_Sum_1 / Object.keys(W_Filter_1).length;
    let toFixedNum_1 = W_Devider_1.toFixed(1);
    let W_Obj_1 = { x: `${previousYear}/${previousMonth}/01`, y: toFixedNum_1 };
    if (W_Obj_1.y > 0) {
        WritingThisMonth.push(W_Obj_1);
    }
    //day-2
    let W_Filter_2 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/02`);
    var W_Sum_2 = W_Filter_2.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_2 = W_Sum_2 / Object.keys(W_Filter_2).length;
    let toFixedNum_2 = W_Devider_2.toFixed(1);
    let W_Obj_2 = { x: `${previousYear}/${previousMonth}/02`, y: toFixedNum_2 };
    if (W_Obj_2.y > 0) {
        WritingThisMonth.push(W_Obj_2);
    }
    // //day-3
    let W_Filter_3 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/03`);
    var W_Sum_3 = W_Filter_3.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_3 = W_Sum_3 / Object.keys(W_Filter_3).length;
    let toFixedNum_3 = W_Devider_3.toFixed(1);
    let W_Obj_3 = { x: `${previousYear}/${previousMonth}/03`, y: toFixedNum_3 };
    if (W_Obj_3.y > 0) {
        WritingThisMonth.push(W_Obj_3);
    }
    // //day-4
    let W_Filter_4 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/04`);
    var W_Sum_4 = W_Filter_4.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_4 = W_Sum_4 / Object.keys(W_Filter_4).length;
    let toFixedNum_4 = W_Devider_4.toFixed(1);
    let W_Obj_4 = { x: `${previousYear}/${previousMonth}/04`, y: toFixedNum_4 };
    if (W_Obj_4.y > 0) {
        WritingThisMonth.push(W_Obj_4);
    }
    //day-5
    let W_Filter_5 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/05`);
    var W_Sum_5 = W_Filter_5.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_5 = W_Sum_5 / Object.keys(W_Filter_5).length;
    let toFixedNum_5 = W_Devider_5.toFixed(1);
    let W_Obj_5 = { x: `${previousYear}/${previousMonth}/05`, y: toFixedNum_5 };
    if (W_Obj_5.y > 0) {
        WritingThisMonth.push(W_Obj_5);
    }
    //day-6
    let W_Filter_6 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/06`);
    var W_Sum_6 = W_Filter_6.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_6 = W_Sum_6 / Object.keys(W_Filter_6).length;
    let toFixedNum_6 = W_Devider_6.toFixed(1);
    let W_Obj_6 = { x: `${previousYear}/${previousMonth}/06`, y: toFixedNum_6 };
    if (W_Obj_6.y > 0) {
        WritingThisMonth.push(W_Obj_6);
    }
    //day-7
    let W_Filter_7 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/07`);
    var W_Sum_7 = W_Filter_7.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_7 = W_Sum_7 / Object.keys(W_Filter_7).length;
    let toFixedNum_7 = W_Devider_7.toFixed(1);
    let W_Obj_7 = { x: `${previousYear}/${previousMonth}/07`, y: toFixedNum_7 };
    if (W_Obj_7.y > 0) {
        WritingThisMonth.push(W_Obj_7);
    }
    //day-8
    let W_Filter_8 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/08`);
    var W_Sum_8 = W_Filter_8.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_8 = W_Sum_8 / Object.keys(W_Filter_8).length;
    let toFixedNum_8 = W_Devider_8.toFixed(1);
    let W_Obj_8 = { x: `${previousYear}/${previousMonth}/08`, y: toFixedNum_8 };
    if (W_Obj_8.y > 0) {
        WritingThisMonth.push(W_Obj_8);
    }
    //day-9
    let W_Filter_9 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/09`);
    var W_Sum_9 = W_Filter_9.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_9 = W_Sum_9 / Object.keys(W_Filter_9).length;
    let toFixedNum_9 = W_Devider_9.toFixed(1);
    let W_Obj_9 = { x: `${previousYear}/${previousMonth}/09`, y: toFixedNum_9 };
    if (W_Obj_9.y > 0) {
        WritingThisMonth.push(W_Obj_9);
    }
    //day-10
    let W_Filter_10 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/10`);
    var W_Sum_10 = W_Filter_10.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_10 = W_Sum_10 / Object.keys(W_Filter_10).length;
    let toFixedNum_10 = W_Devider_10.toFixed(1);
    let W_Obj_10 = { x: `${previousYear}/${previousMonth}/10`, y: toFixedNum_10 };
    if (W_Obj_10.y > 0) {
        WritingThisMonth.push(W_Obj_10);
    }
    //day-11
    let W_Filter_11 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/11`);
    var W_Sum_11 = W_Filter_11.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_11 = W_Sum_11 / Object.keys(W_Filter_11).length;
    let toFixedNum_11 = W_Devider_11.toFixed(1);
    let W_Obj_11 = { x: `${previousYear}/${previousMonth}/11`, y: toFixedNum_11 };
    if (W_Obj_11.y > 0) {
        WritingThisMonth.push(W_Obj_11);
    }
    //day-12
    let W_Filter_12 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/12`);
    var W_Sum_12 = W_Filter_12.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_12 = W_Sum_12 / Object.keys(W_Filter_12).length;
    let toFixedNum_12 = W_Devider_12.toFixed(1);
    let W_Obj_12 = { x: `${previousYear}/${previousMonth}/12`, y: toFixedNum_12 };
    if (W_Obj_12.y > 0) {
        WritingThisMonth.push(W_Obj_12);
    }
    //day-13
    let W_Filter_13 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/13`);
    var W_Sum_13 = W_Filter_13.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_13 = W_Sum_13 / Object.keys(W_Filter_13).length;
    let toFixedNum_13 = W_Devider_13.toFixed(1);
    let W_Obj_13 = { x: `${previousYear}/${previousMonth}/13`, y: toFixedNum_13 };
    if (W_Obj_13.y > 0) {
        WritingThisMonth.push(W_Obj_13);
    }
    //day-14
    let W_Filter_14 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/14`);
    var W_Sum_14 = W_Filter_14.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_14 = W_Sum_14 / Object.keys(W_Filter_14).length;
    let toFixedNum_14 = W_Devider_14.toFixed(1);
    let W_Obj_14 = { x: `${previousYear}/${previousMonth}/14`, y: toFixedNum_14 };
    if (W_Obj_14.y > 0) {
        WritingThisMonth.push(W_Obj_14);
    }
    //day-15
    let W_Filter_15 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/15`);
    var W_Sum_15 = W_Filter_15.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_15 = W_Sum_15 / Object.keys(W_Filter_15).length;
    let toFixedNum_15 = W_Devider_15.toFixed(1);
    let W_Obj_15 = { x: `${previousYear}/${previousMonth}/15`, y: toFixedNum_15 };
    if (W_Obj_15.y > 0) { WritingThisMonth.push(W_Obj_15); }
    //day-16
    let W_Filter_16 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/16`);
    var W_Sum_16 = W_Filter_16.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_16 = W_Sum_16 / Object.keys(W_Filter_16).length;
    let toFixedNum_16 = W_Devider_16.toFixed(1);
    let W_Obj_16 = { x: `${previousYear}/${previousMonth}/16`, y: toFixedNum_16 };
    if (W_Obj_16.y > 0) {
        WritingThisMonth.push(W_Obj_16);
    }
    //day-17
    let W_Filter_17 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/17`);
    var W_Sum_17 = W_Filter_17.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_17 = W_Sum_17 / Object.keys(W_Filter_17).length;
    let toFixedNum_17 = W_Devider_17.toFixed(1);
    let W_Obj_17 = { x: `${previousYear}/${previousMonth}/17`, y: toFixedNum_17 };
    if (W_Obj_17.y > 0) { WritingThisMonth.push(W_Obj_17); }
    //day-18
    let W_Filter_18 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/18`);
    var W_Sum_18 = W_Filter_18.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_18 = W_Sum_18 / Object.keys(W_Filter_18).length;
    let toFixedNum_18 = W_Devider_18.toFixed(1);
    let W_Obj_18 = { x: `${previousYear}/${previousMonth}/18`, y: toFixedNum_18 };
    if (W_Obj_18.y > 0) {
        WritingThisMonth.push(W_Obj_18);
    }
    //day-19
    let W_Filter_19 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/19`);
    var W_Sum_19 = W_Filter_19.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_19 = W_Sum_19 / Object.keys(W_Filter_19).length;
    let toFixedNum_19 = W_Devider_19.toFixed(1);
    let W_Obj_19 = { x: `${previousYear}/${previousMonth}/19`, y: toFixedNum_19 };
    if (W_Obj_19.y > 0) { WritingThisMonth.push(W_Obj_19); }
    //day-20
    let W_Filter_20 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/20`);
    var W_Sum_20 = W_Filter_20.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_20 = W_Sum_20 / Object.keys(W_Filter_20).length;
    let toFixedNum_20 = W_Devider_20.toFixed(1);
    let W_Obj_20 = { x: `${previousYear}/${previousMonth}/20`, y: toFixedNum_20 };
    if (W_Obj_20.y > 0) { WritingThisMonth.push(W_Obj_20); }
    //day-21
    let W_Filter_21 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/21`);
    var W_Sum_21 = W_Filter_21.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_21 = W_Sum_21 / Object.keys(W_Filter_21).length;
    let toFixedNum_21 = W_Devider_21.toFixed(1);
    let W_Obj_21 = { x: `${previousYear}/${previousMonth}/21`, y: toFixedNum_21 };
    if (W_Obj_21.y > 0) { WritingThisMonth.push(W_Obj_21); }
    //day-22
    let W_Filter_22 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/22`);
    var W_Sum_22 = W_Filter_22.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_22 = W_Sum_22 / Object.keys(W_Filter_22).length;
    let toFixedNum_22 = W_Devider_22.toFixed(1);
    let W_Obj_22 = { x: `${previousYear}/${previousMonth}/22`, y: toFixedNum_22 };
    if (W_Obj_22.y > 0) { WritingThisMonth.push(W_Obj_22); }
    //day-23
    let W_Filter_23 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/23`);
    var W_Sum_23 = W_Filter_23.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_23 = W_Sum_23 / Object.keys(W_Filter_23).length;
    let toFixedNum_23 = W_Devider_23.toFixed(1);
    let W_Obj_23 = { x: `${previousYear}/${previousMonth}/23`, y: toFixedNum_23 };
    if (W_Obj_23.y > 0) { WritingThisMonth.push(W_Obj_23); }
    //day-24
    let W_Filter_24 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/24`);
    var W_Sum_24 = W_Filter_24.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_24 = W_Sum_24 / Object.keys(W_Filter_24).length;
    let toFixedNum_24 = W_Devider_24.toFixed(1);
    let W_Obj_24 = { x: `${previousYear}/${previousMonth}/24`, y: toFixedNum_24 };
    if (W_Obj_24.y > 0) { WritingThisMonth.push(W_Obj_24); }
    //day-25
    let W_Filter_25 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/25`);
    var W_Sum_25 = W_Filter_25.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_25 = W_Sum_25 / Object.keys(W_Filter_25).length;
    let toFixedNum_25 = W_Devider_25.toFixed(1);
    let W_Obj_25 = { x: `${previousYear}/${previousMonth}/25`, y: toFixedNum_25 };
    if (W_Obj_25.y > 0) { WritingThisMonth.push(W_Obj_25); }
    //day-26
    let W_Filter_26 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/26`);
    var W_Sum_26 = W_Filter_26.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_26 = W_Sum_26 / Object.keys(W_Filter_26).length;
    let toFixedNum_26 = W_Devider_26.toFixed(1);
    let W_Obj_26 = { x: `${previousYear}/${previousMonth}/26`, y: toFixedNum_26 };
    if (W_Obj_26.y > 0) { WritingThisMonth.push(W_Obj_26); }
    //day-27
    let W_Filter_27 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/27`);
    var W_Sum_27 = W_Filter_27.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_27 = W_Sum_27 / Object.keys(W_Filter_27).length;
    let toFixedNum_27 = W_Devider_27.toFixed(1);
    let W_Obj_27 = { x: `${previousYear}/${previousMonth}/27`, y: toFixedNum_27 };
    if (W_Obj_27.y > 0) { WritingThisMonth.push(W_Obj_27); }
    //day-28
    let W_Filter_28 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/28`);
    var W_Sum_28 = W_Filter_28.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_28 = W_Sum_28 / Object.keys(W_Filter_28).length;
    let toFixedNum_28 = W_Devider_28.toFixed(1);
    let W_Obj_28 = { x: `${previousYear}/${previousMonth}/28`, y: toFixedNum_28 };
    if (W_Obj_28.y > 0) { WritingThisMonth.push(W_Obj_28); }
    //day-29
    let W_Filter_29 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/29`);
    var W_Sum_29 = W_Filter_29.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_29 = W_Sum_29 / Object.keys(W_Filter_29).length;
    let toFixedNum_29 = W_Devider_29.toFixed(1);
    let W_Obj_29 = { x: `${previousYear}/${previousMonth}/29`, y: toFixedNum_29 };
    if (W_Obj_29.y > 0) { WritingThisMonth.push(W_Obj_29); }
    //day-30
    let W_Filter_30 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/30`);
    var W_Sum_30 = W_Filter_30.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_30 = W_Sum_30 / Object.keys(W_Filter_30).length;
    let toFixedNum_30 = W_Devider_30.toFixed(1);
    let W_Obj_30 = { x: `${previousYear}/${previousMonth}/30`, y: toFixedNum_30 };
    if (W_Obj_30.y > 0) { WritingThisMonth.push(W_Obj_30); }
    //day-31
    let W_Filter_31 = writingDataMainArray.filter((e) => e.x == `${previousYear}/${previousMonth}/31`);
    var W_Sum_31 = W_Filter_31.reduce((sum, item) => sum + Number(item.y), 0)
    let W_Devider_31 = W_Sum_31 / Object.keys(W_Filter_31).length;
    let toFixedNum_31 = W_Devider_31.toFixed(1);
    let W_Obj_31 = { x: `${previousYear}/${previousMonth}/31`, y: toFixedNum_31 };
    if (W_Obj_31.y > 0) { WritingThisMonth.push(W_Obj_31); }
}


// console.log(SpeakingArray)
// console.log(ReadingArray)
// console.log(WritingArray)
// console.log(ListeningArray)

export const lineCustomSeries = [
    {
        dataSource: SpeakingArray,
        xName: 'x',
        yName: 'y',
        name: 'Speaking',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },

    {
        dataSource: WritingArray,
        xName: 'x',
        yName: 'y',
        main: "z",
        name: 'Writing',
        width: '2',
        marker: { visible: true, width: 10, height: 10, Text: "red" },
        type: 'Line'
    },

    {
        dataSource: ReadingArray,
        xName: 'x',
        yName: 'y',
        main: "z",
        name: 'Reading',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },
    {

        dataSource: ListeningArray,
        xName: 'x',
        yName: 'y',
        main: "z",
        name: 'Listening',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },

];








