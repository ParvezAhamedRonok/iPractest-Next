import React, { useEffect, useState } from 'react'
import "./index.css";
import { MdOutlineCancel } from "react-icons/md"
// import Timer from "../components/WritingAllTests/Writing-All-Pages/Writing-Importand/Pages/Timer";
import axios from "axios";
import { ClockLoader } from "react-spinners";
import Select from 'react-dropdown-select'
import { useStateContext } from "../../../contexts/ContextProvider";

import {COUNTRY_PUT_URL } from "../../../assets/URL's/AllUrl";

// end of the importing..................


function CountrySelect({ setSelectCountry }) {
    const { makeCountryStatus, setMakeCountryStatus, StoreCountryData, setStoreCounrtyData } = useStateContext();
    //store all localstorage data 
    const [userEmail, setuserEmail] = useState("")

    const [countryValue, setCountryValue] = useState([]);
    const [isloading, setisloading] = useState(false);
    console.log(countryValue)


    useEffect(() => {
        setuserEmail(localStorage.getItem('userEmail') && localStorage.getItem('userEmail'))
    }, [])



    //handle country click function & transfer a user to the dashboard---    
    const handleClickCountry = (x) => {
        x.preventDefault();
        // console.log(signUpData, countryValue);
        setMakeCountryStatus(true)
        setisloading(true);
        axios.put(
            // "http://localhost:8080/api/auth/updateUserByCountry",
            COUNTRY_PUT_URL, {
            country: countryValue[0].value,
            countryFlag: countryValue[0].countryFlag,
            email: userEmail,
        },
        )
            .then((res) => {
                setisloading(false)
                console.log(res);
                localStorage.setItem('setCountry', res.data.country);
                localStorage.setItem('setCountryFlag', res.data.countryFlag)
                setSelectCountry(false)

            })
            .catch((e) => {
                console.log(e)
                setTimeout(() => {
                    setisloading(false);
                    setSelectCountry(false)
                }, 2000);
            })


    }



    return (
        <div>


            <div className="Result-PopUp pt-[10px]  fixed top-2 left-2 w-[90%] sm:w-[100%] z-[345678900000] ">
                <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                    <form className='Result-PopUp-box grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[650px] p-4 h-[370px] box-border overflow-x-auto '
                        onSubmit={handleClickCountry}
                    >
                        <div>
                            <div className="w-full flex justify-between  mt-2">
                                <h6 className='text-[13px] text-white mt-3 sm:text-[24px] '>Please Select your country :</h6>
                                <button
                                    style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                                    className="text-xl sm:2xl  p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                    // onClick={openSignUpPage}
                                    onClick={() => setSelectCountry(false)}
                                >  <MdOutlineCancel />
                                </button>
                            </div>
                            <div className='mt-[40px] w-full  flex justify-start sm:justify-center align-middle'>
                                <div >
                                    <div style={{ width: '250px', margin: '15px' }} >
                                        <Select options={StoreCountryData.map((item, index) => {
                                            // console.log(item)
                                            return {
                                                value: item.name.common,
                                                label: item.name.common,
                                                countryFlag: item.flags.png
                                            }
                                        })}
                                            required
                                            values={countryValue}
                                            onChange={(values) => setCountryValue([...values])}
                                            className='p-[13px] w-full sm:w-[260px] bg-white border-2 border-gray-400 rounded cursor-pointer text-black'
                                        />
                                    </div>

                                    {/* 
                                    <select
                                        name="name"
                                        id="name"
                                        className='p-[13px] w-full sm:w-[260px] bg-white border-2 border-gray-400 rounded cursor-pointer'
                                        onChange={(e) => setCountryValue(e.target.value)}>
                                        <option selected>Country</option>
                                        {
                                            country.map((e) => {
                                                return <option className='bg-white'
                                                    key={e.name.common} value={e.name.common}>{e.name.common}
                                                </option>
                                            })
                                        }
                                    </select> */}
                                </div>
                            </div>
                            <div className='w-full text-center mt-[40px]'>
                                <button
                                    className='bg-blue-400 hover:bg-red-200 text-white p-2 w-[160px] rounded'
                                    type='submit'>Continue
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


















            {/* showing the loading  */}
            {
                isloading && (
                    <div className="Result-PopUp pt-[10px]  fixed top-[8%] left-2 w-[90%] sm:w-[100%] z-[345678900000] ">
                        <div className="grid w-[100vw] h-[100%] justify-center align-middle">

                            <div className="flex opacity-6 justify-center align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
                                <div className="bg-white rounded-[15px] p-3 h-auto">
                                    <ClockLoader size={100} color="#36d7b7" />
                                    <div className="w-full flex justify-center p-1 mt-1 bg-sky-300 text-white"
                                        style={{ borderTopLeftRadius: "27px", borderTopRightRadius: "27px" }}
                                    >
                                        {/* <Timer Second={20} /> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }







        </div>
    )
}

export default CountrySelect