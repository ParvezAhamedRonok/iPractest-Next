"use client"
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { IoMdBook } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import "../pages/DashSomePages/Style.css";

import { WRITING_GET__ALL_USER__DATA_FORM_DATABASE, READING_GET__ALL_USER__DATA_FORM_DATABASE, LISTENING_GET__ALL_USER__DATA_FORM_DATABASE } from "../../../../assets/URL's/AllUrl";

//end of the importing.........




function LeaderBoard() {

  //local datat storing states..
  const [userName, setUserName] = useState("");
  const [AllReadinngScores, setAllReadinngScores] = useState([]);
  const [AllWritingScores, setAllWritingScores] = useState([]);
  const [AllListeningScores, setAllListeningScores] = useState([]);
  const [showModuleScores, setShowModulScores] = useState("Reading");



  //storing all localdata into states........
  useEffect(() => {
    setUserName(localStorage.getItem("userName"))
  }, [])


  useEffect(() => {
    Axios({
      method: "get",
      // url: 'http://localhost:8080/api/user/AllReadingResults/Allusers/byAuthorizedUser/' + useremail,
      url: READING_GET__ALL_USER__DATA_FORM_DATABASE + localStorage.getItem('userEmail'),

      headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        console.log(res.data.data);
        let mainData = res.data.data
        //call the function below to making point's of every user scores
        filerArrayFunction(mainData, setAllReadinngScores)

      })
      .catch((e) => { console.log(e) })


    Axios({
      method: "get",
      url: WRITING_GET__ALL_USER__DATA_FORM_DATABASE + localStorage.getItem('userEmail'),

      headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        let mainData = res.data.data
        //call the function below to making point's of every user scores
        filerArrayFunction(mainData, setAllWritingScores)
        // filterAlluserDataByNumber(mainData, setAllWritingScores)
      })
      .catch((e) => { console.log(e) })


    Axios({
      method: "get",
      url: LISTENING_GET__ALL_USER__DATA_FORM_DATABASE + localStorage.getItem('userEmail'),

      headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        let mainData = res.data.data
        //call the function below to making point's of every user scores
        filerArrayFunction(mainData, setAllListeningScores)
        // filterAlluserDataByNumber(mainData, setAllListeningScores)
      })
      .catch((e) => { console.log(e) })



  }, []);



  //this function is for convert user scores into point & show them 
  // how mush point they have done
  const filerArrayFunction = (mainData, setAllDataToTheStateByProps) => {
    //collect all the userEmail by the code below
    let userDataEmail = [...mainData.reduce((map, obj) => map.set(obj.userEmail, obj), new Map()).values()];
    console.log(userDataEmail);
    //find out all the data user by user and seperate those into  array 
    let data = userDataEmail.map((e) => {
      return mainData.filter((items) => items.userEmail === e.userEmail)
    })


    let someArray = [];

    //now map every array & make some of every array as well
    //& push the making every user Values & sum to the above empty array to store the final state
    data.map((items) => {
      // console.log(items)
      var val = items.reduce(function (previousValue, currentValue) {
        return {
          username: previousValue.username,
          userEmail: previousValue.userEmail,
          ieltsRate: parseInt(previousValue.ieltsRate) + parseInt(currentValue.ieltsRate)
        }
      });
      someArray.push(val);
      // console.log(val)
    })

    // console.log(data)
    // sorting the array for showing all user by position in that case user can 
    // can easyly check whrer he/she is.
    let pusbAbleArray = someArray.sort((a, b) => Number(b.ieltsRate) - Number(a.ieltsRate));
    // let mainPusbAbleItems = pusbAbleArray.filter((e) => e.ieltsRate != NaN )
    // console.log("descending", someArray);

    // push the array to the final State
    setAllDataToTheStateByProps(pusbAbleArray)

  }


  return (
    <div className='w-full p-2 bg-transparent'>

      <div className='w-full sm:w-[400px] ml-1 sm:ml-4 bg-white rounded-[10px] flex justify-center '>
        <div className='w-auto flex flex-wrap gap-3'>
          <div className={`p-2 h-[54px] w-[80px]  rounded-[10px] grid justify-center align-middle cursor-pointer ${showModuleScores == "Reading" ? "bg-sky-200" : "bg-white"}`}
            onClick={() => { setShowModulScores("Reading") }}

          >
            <div>
              <div><IoMdBook className='text-xl w-full text-center font-bold mb-1' /></div>
              <div className='w-full text-center text-[12px] font-bold'>Reading</div>
            </div>
          </div>

          <div className={`p-2 h-[54px] w-[80px]  rounded-[10px] grid justify-center align-middle cursor-pointer ${showModuleScores == "Writing" ? "bg-sky-200" : "bg-white"}`}
            onClick={() => { setShowModulScores("Writing") }}
          >
            <div>
              <div><TfiWrite className='text-xl w-full text-center font-bold mb-1' /></div>
              <div className='w-full text-center text-[12px] font-bold'>Writing</div>
            </div>
          </div>

          <div className={`p-2 h-[54px] w-[80px]  rounded-[10px] grid justify-center align-middle cursor-pointer ${showModuleScores == "Listening" ? "bg-sky-200" : "bg-white"}`}
            onClick={() => { setShowModulScores("Listening") }}
          >
            <div><FaAssistiveListeningSystems className='text-xl w-full text-center font-bold mb-1' /></div>
            <div>
              <div className='w-full text-center text-[12px] font-bold'>Listening</div>
            </div>
          </div>

        </div>
      </div>
      <div className='w-full p-2 min-h-[420px] flex gap-2 max-h-auto bg-white  border-2 border-gray-300 shadow-2xl rounded'>

        {/* The concet showing the UI of all user POINTS bu there scores */}
        {
          showModuleScores == "Reading" && <div className='flex w-full justify-start align-middle p-3'>
            <div id='theElementId' className=' w-full h-[100vh] sm:h-[420px] overflow-auto  rounded'>
              {/* Spriner for Reading  when data is loading ---------         */}
              {
                !AllReadinngScores[0] ? (
                  <div className='w-full h-[430px] flex justify-center align-middle'>
                    <div
                      className="m-auto inline-block h-[100px] w-[100px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_2.5s_linear_infinite]"
                      role="status">
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span>
                    </div>
                  </div>
                ) : ""
              }
              {/* Main concept for Reading */}
              {
                AllReadinngScores.map((items, index) => {
                  return <div className={`w-full mb-2 p-2 rounded-[15px] flex gap-4  ${items.username == userName ? "bg-blue-300" : "bg-gray-100"} ${parseInt(items.ieltsRate) < 1 || parseInt(items.ieltsRate) == NaN ? "hidden" : ""}`} key={index}>
                    <div className='mt-3 w-[30px] ml-2 sm:w-[35px] h-[30px] sm:h-[35px] flex justify-center align-middle text-xl font-bold'>{index + 1}</div>
                    <div className='w-[50px] h-[50px] p-2 bg-green-300 rounded-[50%]
                           flex justify-center align-middle text-2xl mt-2'>
                      {items.username.charAt(0)}</div>
                    <div className='font-bold ml-[-5px] overflow-auto mt-[1px] sm:mt-[7px] sm:ml-1 translate-y-[30px] sm:translate-y-3 text-[11px] sm:text-[18px]'>{items.username}</div>
                    <div className='ml-auto translate-y-3 mr-[1px] sm:mr-[20px] text-center'>
                      <p className='text-2xl font-bold'>{parseInt(items.ieltsRate)}</p>
                      <p className='text-[13px] rounded translate-y-[-8px] text-green-600'>Points</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        }
        {
          showModuleScores == "Writing" && <div className='flex w-full justify-start align-middle p-3'>
            <div id='theElementId' className=' w-full h-[100vh] sm:h-[420px] overflow-auto  rounded'>
              {/* Spriner for Writing  when data is loading ---------         */}
              {
                !AllWritingScores[0] ? (
                  <div className='w-full h-[430px] flex justify-center align-middle'>
                    <div
                      className="m-auto inline-block h-[100px] w-[100px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_2.5s_linear_infinite]"
                      role="status">
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span>
                    </div>
                  </div>
                ) : ""
              }

              {/* Writing Main concept */}
              {
                AllWritingScores.map((items, index) => {
                  return <div className={`w-full mb-2 p-2 rounded-[15px] flex gap-4  ${items.username == userName ? "bg-blue-300" : "bg-gray-100"} ${parseInt(items.ieltsRate) < 1 || parseInt(items.ieltsRate) == NaN ? "hidden" : ""}`} key={index}>
                    <div className='mt-3 w-[30px] ml-2 sm:w-[35px] h-[30px] sm:h-[35px] flex justify-center align-middle text-xl font-bold'
                    >{index + 1}</div>
                    <div className='w-[50px] h-[50px] p-2 bg-green-300 rounded-[50%]
                           flex justify-center align-middle text-2xl mt-2'>
                      {items.username.charAt(0)}</div>
                    <div className='font-bold overflow-auto ml-[-5px] mt-[1px] sm:mt-[7px] sm:ml-1 translate-y-[30px] sm:translate-y-3 text-[11px] sm:text-[18px]'>{items.username}</div>
                    <div className='ml-auto translate-y-3 mr-[1px] sm:mr-[20px] text-center'>
                      <p className='text-2xl font-bold'>{parseInt(items.ieltsRate)}</p>
                      <p className='text-[13px] rounded translate-y-[-8px] text-green-600'>Points</p>
                    </div>
                  </div>
                })
              }

            </div>
          </div>
        }
        {
          showModuleScores == "Listening" && <div className='flex w-full justify-start align-middle p-3'>
            <div id='theElementId' className=' w-full  h-[100vh] sm:h-[420px] overflow-auto  rounded'>
              {/* Spriner for Listening  when data is loading ---------         */}
              {
                !AllWritingScores[0] ? (
                  <div className='w-full h-[430px] flex justify-center align-middle'>
                    <div
                      className="m-auto inline-block h-[100px] w-[100px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_2.5s_linear_infinite]"
                      role="status">
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span>
                    </div>
                  </div>
                ) : ""
              }


              {/* Main concept for Listening */}
              {
                AllListeningScores.map((items, index) => {
                  return <div className={`w-full  mb-2 p-2 rounded-[15px] flex gap-4  ${items.username == userName ? "bg-blue-300" : "bg-gray-100"} ${parseInt(items.ieltsRate) < 1 || parseInt(items.ieltsRate) == NaN ? "hidden" : ""}`} key={index}>
                    <div className='mt-3 w-[30px] ml-2 sm:w-[35px] h-[30px] sm:h-[35px] flex justify-center align-middle text-xl font-bold'>{index + 1}</div>
                    <div className='w-[50px] h-[50px] p-2 bg-green-300 rounded-[50%] translate-y-[8px] 
                           flex justify-center align-middle text-2xl'>
                      {items.username.charAt(0)}</div>
                    <div className='font-bold ml-[-3px] mt-[1px] sm:mt-[7px] overflow-auto sm:ml-1 translate-y-[25px] sm:translate-y-3 text-[11px] sm:text-[18px]'>{items.username}</div>
                    <div className='ml-auto translate-y-3 mr-[1px] sm:mr-[20px] text-center'>
                      <p className='text-2xl font-bold'>{parseInt(items.ieltsRate)}</p>
                      <p className='text-[13px] rounded translate-y-[-8px] text-green-600'>Points</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        }
      </div>

    </div>


  )
}

export default LeaderBoard

