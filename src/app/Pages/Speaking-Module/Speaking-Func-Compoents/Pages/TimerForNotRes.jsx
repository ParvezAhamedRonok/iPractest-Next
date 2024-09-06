"use effect"
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';

const FormateTime = (time) => {
  let munites = Math.floor(time / 60);
  let seconds = Math.floor(time - munites * 60);

  if (munites <= 10) munites = "0" + munites;
  if (munites <= 0) munites = "";
  if (seconds <= 10) seconds = "0" + seconds;

  return <>{munites}{munites <= 0 ? " " : ":"}{seconds}</>

}

function Timer({ Second, stopRecording, LeaveSpeech }) {
  const [countWodn, setCountDown] = useState(Second);
  const timerId = useRef();
  const history = useHistory();


  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current)
  }, [])


  useEffect(() => {
    if (countWodn <= 0) {
      clearInterval(timerId.current);
      //   alert("End Your Time....");
      LeaveSpeech()
      setTimeout(() => {
        history.push("/Pages/Speaking-Module")
      }, 8000);
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
