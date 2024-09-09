"use client";
import React, { useEffect, useRef, useState } from 'react';
import "../TestAllStyles/CounterDown.css"

const FormateTime = (time) => {
  let munites = Math.floor(time / 60);
  let seconds = Math.floor(time - munites * 60);

  if (munites <= 10) munites = "0" + munites;
  if (seconds <= 10) seconds = "0" + seconds;

  return munites + ":" + seconds

}

function CounterDown({ Second }) {
  const [countWodn, setCountDown] = useState(Second);
  const timerId = useRef();


  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current)
  }, [])


  useEffect(() => {
    if (countWodn <= 0) {
      clearInterval(timerId.current);
      alert("END");
    }
  }, [countWodn])



  //main-----
  return (
    <div>
      <h1 className='text-white text-[22px] sm:text-[1.8rem] mt-30px zoom-in-out-box'
      >{FormateTime(countWodn)}
      </h1>
    </div>
  )
};



export default CounterDown
