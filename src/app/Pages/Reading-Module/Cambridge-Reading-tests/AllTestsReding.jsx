"use client";
import React, { useState, useEffect } from 'react';
import "./index.css"
import { useRouter } from 'next/navigation';
import Cambridge18 from '../../../../assets/images/Reading-Images/cambridge-18.png';
import Cambridge17 from '../../../../assets/images/Reading-Images/Cambridge-R-17.png';
import Cambridge16 from '../../../../assets/images/Reading-Images/Cambridge16.png';
import cambrigeIcon from '../../../../assets/images/cambrigeIcon.png';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiIntersect } from "react-icons/bi";
import Image from 'next/image';
import axios from 'axios';
//end of the improting........



function ServicesReadingAllTest() {
    const history = useRouter();
    //localstorage save into a variables----
    const [useremail, setuseremail] = useState("");
    const [userToken, setuserToken] = useState("")
    // const[saveUser , setSaveUser] = useState([])
    //function for redirect to the reading & Listening page------->>   
    const [mainDataAll, setmainData] = useState([]);

    //make array for user scores showing----
    //check-conditions-when-user-click-on-load-more-10-test-button------------
    let cambridgeTest1 = []; let cambridgeTest2 = []; let cambridgeTest3 = []; let cambridgeTest4 = []; let cambridgeTest5 = [];
    let cambridgeTest6 = []; let cambridgeTest7 = []; let cambridgeTest8 = []; let cambridgeTest9 = []; let cambridgeTest10 = [];
    let cambridgeTest11 = []; let cambridgeTest12 = []; let cambridgeTest13 = []; let cambridgeTest14 = []; let cambridgeTest15 = [];


    //call APi to store all reading data into a satte ---------
    //call APi to store all reading data into a satte ---------
    useEffect(() => {
        setuseremail(localStorage.getItem('userEmail'));
        setuserToken(localStorage.getItem("loginTOken"))
    }, [])

    useEffect(() => {
        axios({
            method: "get",
            // url: 'http://localhost:8080/api/user/AllReadingResults/' + userEmail,
            url: 'https://node-js-express-login-example.onrender.com/api/user/AllReadingResults/' + useremail,
            headers: {
                "Authorization": `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.data);
                //set all speaking data for make all user spekaing data synchronized with their id's------
                //if main data will not be empty existing function will be called for set all the speaking scores----
                setmainData(res.data.data)

            })
            .catch((e) => { console.log(e) });



    }, [])



    //for storing all speaking scores data for changing UI-----------
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-1") {
            cambridgeTest1.push(items);
        }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-2") {
            cambridgeTest2.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-3") {
            cambridgeTest3.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-4") {
            cambridgeTest4.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-5") {
            cambridgeTest5.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-6") {
            cambridgeTest6.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-7") {
            cambridgeTest7.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-8") {
            cambridgeTest8.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-9") {
            cambridgeTest9.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-10") {
            cambridgeTest10.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-11") {
            cambridgeTest11.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "cambridge-test-12") {
            cambridgeTest12.push(items);
        }
    });





    //all test redirect functions-----------
    const goBackReadingTest1 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-1")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-1")

    };
    const goBackReadingTest2 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-2")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-2")
    };
    const goBackReadingTest3 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-3")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-3")
    };
    const goBackReadingTest4 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-4")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-4")
    };
    const goBackReadingTest5 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-5")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-5")
    };
    const goBackReadingTest6 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-6")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-6")
    };
    const goBackReadingTest7 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-7")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-7")
    };
    const goBackReadingTest8 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-8")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-8")
    };
    const goBackReadingTest9 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-9")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-9")
    };
    const goBackReadingTest10 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-10")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-10")
    };
    const goBackReadingTest11 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-11")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-11")
    };
    const goBackReadingTest12 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-12")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-12")
    };
    const goBackReadingTest13 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-13")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-13")
    };
    const goBackReadingTest14 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-14")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-14")
    };
    const goBackReadingTest15 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-15")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-15")
    };

    const goBackReadingTest16 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-16")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-16")
    };

    const goBackReadingTest17 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-17")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-17")
    };
    const goBackReadingTest18 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-18")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-18")
    };
    const goBackReadingTest19 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-19")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-19")
    };

    const goBackReadingTest20 = (e) => {
        localStorage.setItem('moduleNo', "cambridge-20")
        e.preventDefault();
        history.push("/Pages/Reading-Module/Reading-All-Tests/cambridge-test-20")
    };




    return (
        <>
            <section className="appie-service-area appie-service-3-area pt-[110px] sm:pt-[135px] pb-50" id="service" >
                <div className="text-center w-[100%]  rounded  grid justify-center mt-[50px]">
                    <div className="m-auto">
                        <strong className='text-3xl mb-3 font-bold'>Practice our sample</strong><br />
                        <strong className='text-4xl mb-3 font-bold'> Cambridge Reading-Tests</strong><br />
                        <p className='text-black mt-1'>
                            Give all the ielts test and get results instantly.
                        </p>
                    </div>
                </div>

                <div className='p-[10px] sm:p-[20px] z-[55] pt-5'>
                    <div className='grid  justify-center align-middle'>
                        <button className=' flex gap-2  rounded borde-1 border-gray-300 bg-white h-full '>
                            <button className='p-2 flex gap-1 w-auto h-[40px] text-[15px] text-center translate-y-[-1px] sm:w-[200px]  bg-white text-blue-900 cursor-pointer border-b-[4px] border-b-green-700 font-bold'
                                onClick={() => { history.push("/Pages/Reading-Module/Cambridge-Reading-tests") }}
                            >Cambridge tests
                                {/* <BiSolidCategoryAlt className='text-xl text-black' /> */}
                                <Image src={cambrigeIcon} className='w-[15px] translate-y-[2px]' />
                            </button>
                            <button className='p-2 flex gap-1 w-auto text-[12px] translate-y-[1px] text-center h-[40px] sm:w-[200px] bg-white text-black cursor-pointer opacity-50 font-bold hover:border-b-[3px] hover:border-b-green-700 transition-all hover:opacity-90'
                                onClick={() => { history.push("/Pages/Reading-Module/Actual-Reading-tests") }}
                            >Actual Tests
                                <BiIntersect className='text-xl text-black translate-y-[-1px]' />
                            </button>
                        </button>
                    </div>
                    {/* Start of Rows / Cards sections   */}
                    <div>
                        <div className="w-full rounded-t-[33px] sm:rounded  justify-center p-2  bg-gray-100">
                            <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest1}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge18} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.96</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(76 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            671
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">farming,
                                                    Forest, Pennsylvania</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest1[cambridgeTest1.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest1[cambridgeTest1.length - 1].ieltsRate) >= 4 && Number(cambridgeTest1[cambridgeTest1.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest1[cambridgeTest1.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest1[cambridgeTest1.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-18 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>1</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px]
                                             ${cambridgeTest1[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>1</span></div>
                                    </div>
                                </div>

                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest2}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white ">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge18} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.26</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(76 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            491
                                                        </p>
                                                    </div>

                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">Stonehenge,
                                                    artificial,  intelligence</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest2[cambridgeTest2.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest2[cambridgeTest2.length - 1].ieltsRate) >= 4 && Number(cambridgeTest2[cambridgeTest2.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest2[cambridgeTest2.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest2[cambridgeTest2.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-18 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>2</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest2[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>2</span></div>
                                    </div>
                                </div>

                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest3}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px]  w-auto h-auto border border-white bg-white">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge18} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>3.96</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(46 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            286
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">Materials,
                                                    concrete, steam car</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest3[cambridgeTest3.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest3[cambridgeTest3.length - 1].ieltsRate) >= 4 && Number(cambridgeTest3[cambridgeTest3.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest3[cambridgeTest3.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest3[cambridgeTest3.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-18 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>3</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest3[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>3</span></div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest4}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white ">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge18} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.26</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(66 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            716
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">Green roofs,
                                                    growth, mindset</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest4[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest4[cambridgeTest4.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest4[cambridgeTest4.length - 1].ieltsRate) >= 4 && Number(cambridgeTest4[cambridgeTest4.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest4[cambridgeTest4.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest4[cambridgeTest4.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-18 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>4</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px]
                                             ${cambridgeTest4[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>4</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest5}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge17} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.44</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(56 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            716
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">development,
                                                    underground,
                                                    railway</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest5[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest5[cambridgeTest5.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest5[cambridgeTest5.length - 1].ieltsRate) >= 4 && Number(cambridgeTest5[cambridgeTest5.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest5[cambridgeTest5.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest5[cambridgeTest5.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-17 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>1</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px]
                                             ${cambridgeTest5[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>5</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest6}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white ">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge17} className="rounded-xl h-[82%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.84</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(36 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            616
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">Dead Sea,
                                                    evolution,
                                                    domesticating</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest6[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest6[cambridgeTest6.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest6[cambridgeTest6.length - 1].ieltsRate) >= 4 && Number(cambridgeTest6[cambridgeTest6.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest6[cambridgeTest6.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest6[cambridgeTest6.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-17 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>2</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest6[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>6</span></div>
                                    </div>
                                </div>


                            </div>
                            <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest7}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white ">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge17} className="rounded-xl h-[82%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.34</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(68 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            916
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">thylacine,
                                                    Skyline,
                                                    Palm oil</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest7[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest7[cambridgeTest7.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest7[cambridgeTest7.length - 1].ieltsRate) >= 4 && Number(cambridgeTest7[cambridgeTest7.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest7[cambridgeTest7.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest7[cambridgeTest7.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-17 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>3</span></p>


                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest7[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>7</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest8}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge17} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.84</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(49 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            586
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">Madagascar,
                                                    rainforest,
                                                    economic</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest8[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest8[cambridgeTest8.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest8[cambridgeTest8.length - 1].ieltsRate) >= 4 && Number(cambridgeTest8[cambridgeTest8.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest8[cambridgeTest8.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest8[cambridgeTest8.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-17 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>4</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest8[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>8</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest9}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge16} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.24</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(29 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            626
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">polar bears,
                                                    Pyramid,
                                                    work</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest9[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest9[cambridgeTest9.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest9[cambridgeTest9.length - 1].ieltsRate) >= 4 && Number(cambridgeTest9[cambridgeTest9.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest9[cambridgeTest9.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest9[cambridgeTest9.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-16 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>1</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest9[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>9</span></div>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest10}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge16} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.33</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(60 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            536
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">Uffington,
                                                    microbes,
                                                    decisions</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest10[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest10[cambridgeTest10.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest10[cambridgeTest10.length - 1].ieltsRate) >= 4 && Number(cambridgeTest10[cambridgeTest10.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest10[cambridgeTest10.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest10[cambridgeTest10.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-16 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>2</span></p>


                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest10[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>10</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest11}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge16} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.33</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(60 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            336
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">navigation,
                                                    Climate,
                                                    measuring</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest11[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest11[cambridgeTest11.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest11[cambridgeTest11.length - 1].ieltsRate) >= 4 && Number(cambridgeTest11[cambridgeTest11.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest11[cambridgeTest11.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest11[cambridgeTest11.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-16 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>3</span></p>

                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest11[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>11</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackReadingTest12}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] w-auto h-auto border border-white bg-white">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={Cambridge16} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className="text-gray-500 font-medium ">Vacations</p> */}
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <p className="text-gray-600 flex font-bold text-sm ml-1 text-[11px]">
                                                            <span className='font-bold text-sm ml-1 text-[11px] hidden sm:block'>4.83</span>
                                                            <span className="text-gray-500 font-normal text-[9px]">(60 reviews)</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex ">
                                                            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt=""
                                                                className='rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={7}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={6}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            506
                                                        </p>
                                                    </div>
                                                    {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px] mb-2">tunnels,
                                                    Attitudes,
                                                    Artificial</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                cambridgeTest12[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(cambridgeTest12[cambridgeTest12.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(cambridgeTest12[cambridgeTest12.length - 1].ieltsRate) >= 4 && Number(cambridgeTest12[cambridgeTest12.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(cambridgeTest12[cambridgeTest12.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(cambridgeTest12[cambridgeTest12.length - 1].ieltsRate).toFixed(1)}
                                                                            </div>
                                                                        }

                                                                    </>

                                                                    :
                                                                    <div className='text-center rounded-[50%] bg-white text-black font-bold text-[15px] outline outline-3 outline-offset-2 outline-gray-500'>0</div>

                                                            }
                                                            <p className='text-center text-[8px]'>Score</p>
                                                        </div>
                                                    </div>

                                                    <button className='p-2 h-[32px] pt-[-1px] flex jutify-center text-[12px] translate-y-[-2px] rounded-[15px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white'>
                                                        Go for Test
                                                        <MdKeyboardDoubleArrowRight className='ml-1 text-[13px]  font-bold translate-y-[2px]' />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute text-center top-0 left-9   flex gap-2 text-[9px] translate-x-1 translate-y-[-3px] sm:translate-y-[-7] m-auto'>ACADEMIC-16 <span className='text-[12px] translate-y-[-2px] font-bold underline text-black'>4</span></p>


                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${cambridgeTest12[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>12</span></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesReadingAllTest;
