"use client"
import React from 'react';
import SpeakingTestMain from "../Speaking-Func-Compoents/Test1/Main"

export default function page({params}) {
    // console.log(params.AllSpeakingTest[0]);
    let testNo = params.AllSpeakingTest[0]
    return (
        <div>
            <SpeakingTestMain
             testNo={testNo}
            />
        </div>
    )
}
