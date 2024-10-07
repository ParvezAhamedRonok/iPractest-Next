"use client"
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { WRITING_POST_FOR_SET_SCORES } from "../../../../../../assets/URL's/AllUrl";
//END OF THE IMPORTING.....




export const Post_to_save_data_in_databse = (x) => {
    //all localstorage data storing states.......
    const [userLoginEmail, setUserLoginEmail] = useState("");
    const [userLoginToken, setUserloginToken] = useState("")
    const [getCountryName, setGetCountryName] = useState("");
    const [userLoginUserName, setUserLoginName] = useState("")

    useEffect(() => {
        setGetCountryName(localStorage.getItem("setCountry"));
        setUserLoginEmail(localStorage.getItem('userEmail'));
        setUserloginToken(localStorage.getItem("loginTOken"));
        setUserLoginName(localStorage.getItem("userName"))

    }, [])



    //for post request Scores & save those into the Main Dash-board Pages
    useEffect(() => {

        Axios({
            method: "post",
            url: WRITING_POST_FOR_SET_SCORES,
            headers: {
                "Authorization": `Bearer ${userLoginToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                "username": getCountryName,
                "userEmail": userLoginEmail,
                "LexicalResourceScore": x.LexicalResourceScore || "",
                "GrammarScore": x.GrammaticalScore || "",
                "ieltsRate": x.ieltsScore || ""
            },
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => { console.log(e) })
    }, [])

}

