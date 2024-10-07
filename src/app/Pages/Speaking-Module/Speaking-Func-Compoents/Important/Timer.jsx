"use client"
import React, { useEffect, useRef, useState } from 'react'

const FormateTime = (time) => {
  let munites = Math.floor(time / 60);
  let seconds = Math.floor(time - munites * 60);

  if (munites <= 10) munites = "0" + munites;
  if(munites <= 0) munites = "";
  if (seconds <= 10) seconds = "0" + seconds;

  return <>{munites}{munites <= 0 ? " " : ":"}{seconds}</>

}

function Timer({ Second , setsec2SpeakingTime}) {
  const [countWodn, setCountDown] = useState(Second);
  const timerId = useRef();


  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current)
  }, [])


  useEffect(() => {
    if(countWodn < 60){
      setsec2SpeakingTime(true)
    }
    if (countWodn <= 0) {
      clearInterval(timerId.current);
      alert("End Your Time....");
    }
  }, [countWodn])



  //main-----
  return (
    <div>
      {FormateTime(countWodn)}
    </div>
  )
};



export default Timer
