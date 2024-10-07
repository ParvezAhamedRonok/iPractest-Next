"use client";
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useStateContext } from '../../../../contexts/ContextProvider';
import moment from 'moment';

import { LISTENING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA, READING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA, WRITING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA, SPEAKING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA } from "../../../../assets/URL's/AllUrl";

//end of importings................

function DateGetAPI() {
    const { setArray } = useStateContext();

    //get All user Values form database----------
    useEffect(() => {
        var useremail = localStorage.getItem('userEmail');
        Axios({
            method: "get",
            url: LISTENING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA + useremail,
            // url: 'http://LOCALHOST:8080/api/user/ListeningResults/' + useremail,

            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                res.data.data.map((items) => {
                    let obj = {
                        id: items.id,
                        date: moment.utc(items.createdAt).format('MM/DD/YYYY')
                    }
                    setArray(prevCoords => {
                        return [
                            ...prevCoords,
                            obj
                        ]
                    })
                })

            })
            .catch((e) => { console.log(e) })

        //Reading API call from database
        Axios({
            method: "get",
            url: READING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA + useremail,

            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                res.data.data.map((items) => {
                    let obj = {
                        id: items.id,
                        date: moment.utc(items.createdAt).format('MM/DD/YYYY')
                    }
                    setArray(prevCoords => {
                        return [
                            ...prevCoords,
                            obj
                        ]
                    })
                })
            })
            .catch((e) => { console.log(e) })


        //Speaking API call from database
        Axios({
            method: "get",
            url: SPEAKING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA + useremail,

            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                res.data.data.map((items) => {
                    let obj = {
                        id: items.id,
                        date: moment.utc(items.createdAt).format('MM/DD/YYYY')
                    }
                    setArray(prevCoords => {
                        return [
                            ...prevCoords,
                            obj
                        ]
                    })
                })

            })
            .catch((e) => { console.log(e) })
        //Writing API call from database
        Axios({
            method: "get",
            url: WRITING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA + useremail,

            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                res.data.data.map((items) => {
                    let obj = {
                        id: items.id,
                        date: moment.utc(items.createdAt).format('MM/DD/YYYY')
                    }
                    setArray(prevCoords => {
                        return [
                            ...prevCoords,
                            obj
                        ]
                    })
                })
            })
            .catch((e) => { console.log(e) })


    }, []);

}

export default DateGetAPI