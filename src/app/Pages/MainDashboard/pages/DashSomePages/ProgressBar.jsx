"use client";
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import "../../StyleAll/Style-Dashboard.css";
import "../../StyleAll/ProggressBars.css";
import { useRouter } from 'next/navigation';
import { GiWhiteBook } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { GrAssistListening } from "react-icons/gr";
import { GiSoundWaves } from "react-icons/gi";
import { isAndroid } from "react-device-detect"

import { SPEAKING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA, WRITING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA, READING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA, LISTENING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA } from "../../../../../assets/URL's/AllUrl";

//end of importings.............


function ProgressBar() {
  const history = useRouter();
  const [UserReadingScors, setUserReadingScors] = useState(0);
  const [UserListeninggScors, setUserListeningScors] = useState(0);
  const [UserWritingScors, setUserWritingScors] = useState(0);
  const [UserSpeakingScors, setUserSpeakingScors] = useState(0);
  const [allModuleAvarage, setAllModuleAvarage] = useState(0);





  useEffect(() => {
    var useremail = localStorage.getItem('userEmail');
    Axios({
      method: "get",
      url: READING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA + useremail,
      // url: 'http://localhost:8080/api/user/AllReadingResults/byAuthorizedUser/' + useremail,

      headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        // console.log(res.data.data);
        // res.data.data.map((e) =>{
        //   console.log(moment.utc(e.createdAt).format('MM/DD/YYYY'))
        // })
        let array = res.data.data;
        console.log(array)
        let array2 = array.map((e) => { return (Number(e.ieltsRate)) });
        let sum = array2.reduce((a, b) => a + b, 0);
        console.log(sum)
        let devideWithLength = sum / array.length
        // console.log(sum / array.length)
        if (res.data.data.length === 0) {
          setUserReadingScors(0)
        } else {
          setUserReadingScors(devideWithLength.toFixed(1))
        }

      })
      .catch((e) => { console.log(e) })
  }, []);

  useEffect(() => {
    var useremail = localStorage.getItem('userEmail');
    Axios({
      method: "get",
      url: LISTENING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA + useremail,

      headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        // console.log(res.data.data);
        // res.data.data.map((e) =>{
        //   console.log(moment.utc(e.createdAt).format('MM/DD/YYYY'))
        // })
        let array = res.data.data;
        let array2 = array.map((e) => { return (Number(e.ieltsRate)) });
        let sum = array2.reduce((a, b) => a + b, 0);
        let devideWithLength = sum / array.length
        // console.log(sum / array.length)
        if (res.data.data.length === 0) {
          setUserListeningScors(0)
        } else {
          setUserListeningScors(devideWithLength.toFixed(1))
        }

      })
      .catch((e) => { console.log(e) })
  }, []);

  useEffect(() => {
    var useremail = localStorage.getItem('userEmail');
    Axios({
      method: "get",
      url: WRITING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA + useremail,
      // url: 'http://localhost:8080/api/user/WritingResults/byAuthorizedUser/' + useremail,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        // console.log(res.data.data);
        // res.data.data.map((e) =>{
        //   console.log(moment.utc(e.createdAt).format('MM/DD/YYYY'))
        // })
        let array = res.data.data;
        let array2 = array.map((e) => { return (Number(e.ieltsRate)) });
        let sum = array2.reduce((a, b) => a + b, 0);
        let devideWithLength = sum / array.length
        // console.log(sum / array.length)
        if (res.data.data.length === 0) {
          setUserWritingScors(0)
        } else {
          setUserWritingScors(devideWithLength.toFixed(1))
        }

      })
      .catch((e) => { console.log(e) })
  }, []);

  useEffect(() => {
    var useremail = localStorage.getItem('userEmail');
    Axios({
      method: "get",
      url: SPEAKING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA + useremail,

      headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        // console.log(res.data.data);
        // res.data.data.map((e) =>{
        //SPEAKING_GET_FOR_COLLECT_USER_DATA
        //   console.log(moment.utc(e.createdAt).format('MM/DD/YYYY'))
        // })
        let array = res.data.data;
        console.log(array)
        let array2 = array.map((e) => { return (Number(e.ieltsScore)) });
        let sum = array2.reduce((a, b) => a + b, 0);
        console.log(sum)
        let devideWithLength = sum / array.length
        // console.log(sum / array.length)
        if (res.data.data.length === 0) {
          setUserSpeakingScors(0)
        } else {
          setUserSpeakingScors(devideWithLength.toFixed(1))
        }

      })
      .catch((e) => { console.log(e) })
  }, []);


  setTimeout(() => {
    let test1 = Number(UserListeninggScors);
    let test2 = Number(UserReadingScors);
    let test3 = Number(UserSpeakingScors);
    let test4 = Number(UserWritingScors);
    let allTest = test1 + test2 + test3 + test4
    let divider = (allTest / 4);
    setAllModuleAvarage(divider.toFixed(1));
  }, 1000);


  return (
    <div>
      {
        isAndroid ? (
          <div className='w-full flex justify-center align-middle'>
            <div className=' flex flex-wrap gap-2'>

              <button class=" transition duration-150 "
                onClick={() => { history.push("/SpeakingPage") }}
              >
                <a className="w-auto text-black p-2 border-1 border-gray bg-sky-300 rounded-[30px] hover:bg-red-400 cursor-pointer border-r-t-[20px] text-[11px] sm:text-[16px]">
                  Speaking<i className="fal fa-arrow-right ml-2 text-[9px] sm:text-[10px]" />
                </a>
              </button>
              <button class=" transition duration-150 "
                onClick={() => { history.push("/WrittingPage") }}
              >
                <a className="w-auto text-black p-2 border-1 border-gray bg-sky-300 rounded-[30px] hover:bg-red-400 cursor-pointer border-r-t-[20px] text-[11px] sm:text-[16px]">
                  Writing<i className="fal fa-arrow-right ml-2 text-[9px] sm:text-[10px]" />
                </a>
              </button>
              <button class=" transition duration-150 "
                onClick={() => { history.push("/ReadingPage/cambridgeAllTests") }}
              >
                <a className="w-auto text-black p-2 border-1 border-gray bg-sky-300 rounded-[30px] hover:bg-red-400 cursor-pointer border-r-t-[20px] text-[11px] sm:text-[16px]">
                  Reading<i className="fal fa-arrow-right ml-2 text-[9px] sm:text-[10px]" />
                </a>
              </button>
              <button class=" transition duration-150 "
                onClick={() => { history.push("/ListeningPage/cambridgeAllTests") }}
              >
                <a className="w-auto text-black p-2 border-1 border-gray bg-sky-300 rounded-[30px] hover:bg-red-400 cursor-pointer border-r-t-[20px] text-[11px] sm:text-[16px]">
                  Listening<i className="fal fa-arrow-right ml-2 text-[9px] sm:text-[10px]" />
                </a>
              </button>

            </div>
          </div>
        ) :
          (
            <div className="appie-hero-content text-center translate-x-[13px] translate-y-[0px] sm:translate-y-[-20px]">
              <ul>
                <li onClick={() => {
                  history.push("/SpeakingPage")
                  // alert("Speaking page is under construction. This page will be live on 15th oct.")

                }} style={{ cursor: "pointer" }}>
                  <a >
                    <i><GiSoundWaves className='text-xl mb-[-4px]' /></i> Speaking
                  </a>
                </li>
                <li className='mb-3' onClick={() => { history.push("/WrittingPage") }} style={{ cursor: "pointer" }}>
                  <a className="item-2" >
                    <i><TfiWrite className='text-xl text-blue-400 mb-[-4px]' /></i>  Writing

                  </a>
                </li>
                <li onClick={() => { history.push("/ListeningPage/cambridgeAllTests") }} style={{ cursor: "pointer" }}>
                  <a >
                    <i><GrAssistListening className='text-xl mb-[-4px] rounded' /></i>Listening

                  </a>
                </li>

                <li onClick={() => { history.push("/ReadingPage/cambridgeAllTests") }} style={{ cursor: "pointer" }}>
                  <a className="item-2" >
                    <i><GiWhiteBook className='text-xl mb-[-4px]' /></i> Reading
                  </a>
                </li>

              </ul>
            </div>
          )
      }

      <div className='ProggressBarBoxSizes ml-[-7px] sm:ml-[1px]'>
        <div className='p-4 rounded-[19px] sm:rounded-[23px] h-auto firstBgcolor'>
          <div className=" w-[97%] mb-3 text-base flex justify-between  font-medium dark:text-white">
            <p className='font-bold text-white text-[12px] sm:text-[20px]'>Speaking</p>
            <p className='font-bold text-xl text-white'>{UserSpeakingScors}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full border-1 border-gray-100 dark:bg-gray-300" style={{ width: UserSpeakingScors / 9 * 100 + "%" }}></div>
          </div>
        </div>
        <div className='p-4 secondBgcolor rounded-[19px] sm:rounded-[23px] h-auto'>
          <div className=" w-[97%] mb-3  text-base flex justify-between  font-medium dark:text-white">
            <p className='font-bold text-[12px] sm:text-[20px] text-white'>Reading</p>
            <p className='font-bold text-xl text-white'>{UserReadingScors}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 dark:bg-gray-700">
            <div className="bg-purple-600 h-2.5 rounded-full border-1 border-gray-100 dark:bg-gray-300" style={{ width: UserReadingScors / 9 * 100 + "%" }}></div>
          </div>
        </div>
        <div className='p-4 thirdBgcolor rounded-[19px] sm:rounded-[23px] h-auto'>
          <div className=" w-[97%] mb-2 sm:mb-2 text-base flex justify-between  font-medium dark:text-white">
            <p className='font-bold text-[12px] sm:text-[20px] text-white'>Writing</p>
            <p className='font-bold text-xl text-white'>{UserWritingScors}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 dark:bg-gray-700">
            <div className="bg-green-600 h-2.5 rounded-full dark:bg-gray-300 border-1 border-gray-100" style={{ width: UserWritingScors / 9 * 100 + "%" }}></div>
          </div>
        </div>
        <div className='p-4 fourBgcolor  rounded-[19px] sm:rounded-[23px] h-auto'>
          <div className=" w-[97%] mb-2 sm:mb-2 text-base flex justify-between  font-medium dark:text-white">
            <p className='font-bold text-[12px] sm:text-[20px] text-white'>Listening</p>
            <p className='font-bold text-xl text-white'>{UserListeninggScors}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 dark:bg-gray-700">
            <div className="bg-orange-600 h-2.5 rounded-full dark:bg-gray-300 border-1 border-gray-100" style={{ width: UserListeninggScors / 9 * 100 + "%" }}></div>
          </div>
        </div>

      </div>
      <div className='w-[98%] mt-[12px] ml-[1px] sm:ml-[10px] p-2 rounded bg-slate-200 flex justify-between'>
        <div className='font-bold'>Your overall band score: </div>
        <div className='text-2xl font-bold mt-[-4px]'>{allModuleAvarage}</div>
      </div>
    </div>
  )
}

export default ProgressBar