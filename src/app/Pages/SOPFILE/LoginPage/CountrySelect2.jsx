"use client"
import React, { useEffect, useState } from 'react'
import "./Country.css";
import Timer from "../../Writing-Module/Writing-All-Test/Writing-Importand/Pages/Timer";
import axios from "axios";
import { ClockLoader } from "react-spinners";
import Select from 'react-dropdown-select'
import { useStateContext } from "../../../../contexts/ContextProvider";
import { COUNTRY_PUT_URL } from "../../../../assets/URL's/AllUrl";

// end of the importing......






function CountrySelect2({ setSelectCountry, functionForCheckConditions }) {
    const { setMakeCountryStatus, StoreCountryData } = useStateContext();
    const [countryValue, setCountryValue] = useState([]);
    const [isloading, setisloading] = useState(false);

    //all user localstorages data storing states.......
    const [usersCountryName, setuserCountryName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");


    useEffect(() => {
        setUserEmail(localStorage.getItem('userEmail'));
        setuserCountryName(localStorage.getItem('setCountry'))
    }, [localStorage.getItem('setCountry'), userEmail])



    //handle country click function & transfer a user to the dashboard---    
    const handleClickCountry = (x) => {
        x.preventDefault();
        // console.log(signUpData, countryValue);
        // console.log("Hellow I am Mr select country");
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
                setSelectCountry(false);
                //after successfull set the country tha main function will be call 
                functionForCheckConditions();

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
            {
                !usersCountryName && (
                    <>
                        <div className="Result-PopUp pt-[10px]  fixed top-2 left-2 w-[90%] sm:w-[100%] z-[345678900000] ">
                            <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                                <form className='Result-PopUp-box grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[650px] p-4 h-[370px] box-border overflow-x-auto '
                                    onSubmit={handleClickCountry}
                                >
                                    <div>
                                        <div className="w-full flex justify-between  mt-2">
                                            <h6 className='text-[13px] text-white mt-3 sm:text-[24px] '>Please Select your country :</h6>
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
                                                    <Timer Second={20} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </>

                )
            }


        </div>
    )
}

export default CountrySelect2