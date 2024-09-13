"use client";
import React, { useState } from 'react'
import { useStateContext } from '../../../../contexts/ContextProvider';
import "../StyleAll/Style-DateFill.css";
import { FaFire } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { subDays } from "date-fns";
import { LuChevronsLeft } from "react-icons/lu";
import { LuChevronsRight } from "react-icons/lu";

//end of importing....


const DateFillCom = ({ forLogOut }) => {
  const { currentColor, array, setArray } = useStateContext();
  const [startDate, setStartDate] = useState(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 9;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }
  const years = generateArrayOfYears();


  return (
    <>
      <div className='fireBackgroundImage bg-red-100 h-auto rounded'>
        <div className='w-full flex justify-between p-3'>
          <div className=''>
            <p><span className='text-2xl text-blue-400'>30</span> days practice</p>
            <p className=' w-full flex flex-wrap mt-3 text-[12px] ml-3'><span className='text-[19px] text-blue-400 translate-x-[-4px] translate-y-[-4px]'>2</span> hours in a day</p>
          </div>
          <div className='ml-[40px] mt-2'>
            <FaFire className='text-[65px] text-red-200' />
          </div>
        </div>
      </div>

      <div id="mainDivForCalender">
        {(() => {
          let highlight = [];

          for (let index = 0; index < array.length; index++) {
            highlight.push(subDays(new Date(`${array[index].date}`), 0));
          }
          return (
            <DatePicker
              locale="id"
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled
              }) => (
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    className="btn-left"
                  >
                    <i><LuChevronsLeft className='text-2xl mr-2' /></i>
                  </button>
                  <select
                    value={months[date.getMonth()]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                    className="mr-2"
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <select
                    value={date.getFullYear()}
                    onChange={({ target: { value } }) => changeYear(value)}
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    className="btn-right"
                  >
                    <i><LuChevronsRight className='text-2xl ml-2' /></i>
                  </button>
                </div>
              )}
              selected={startDate}
              dateFormat="MM/dd/yyyy"
              highlightDates={highlight}
              inline
            />
          );
        })()}
      </div>


    </>

  );
};

export default DateFillCom;















