"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "./index.css";
import axios from 'axios';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiIntersect } from "react-icons/bi";
import cambrigeIcon from '../../../../assets/images/cambrigeIcon.png';
import Image from 'next/image';



//Test Images-------------------
import ActualImage1 from '../../../../assets/images/listening-images/ActualImg-1.png'
import ActualImage2 from '../../../../assets/images/listening-images/ActualImg-2.png'
import ActualImage3 from '../../../../assets/images/listening-images/ActualImg-3.png'
import ActualImage4 from '../../../../assets/images/listening-images/ActualImg-4.jpeg'
import ActualImage5 from '../../../../assets/images/listening-images/ActualImg-5.png'
import ActualImage6 from '../../../../assets/images/listening-images/ActualImg-6.png'
import ActualImage7 from '../../../../assets/images/listening-images/ActualImg-7.png'
import ActualImage8 from '../../../../assets/images/listening-images/ActualImg-8.png'

// end importing------>








function AllListeningTests() {
    const history = useRouter();
    //localstorage save into a variables----
    const [useremail, setUserEmail] = useState("");
    const [userLoginName, setUserLoginName] = useState("");
    const [userToken, setuserToken] = useState("")
    // const[saveUser , setSaveUser] = useState([])
    //function for redirect to the reading & Listening page------->>   
    const [mainDataAll, setmainData] = useState([]);


    //make array for user scores showing----
    //check-conditions-when-user-click-on-load-more-10-test-button------------
    let actualTest1 = []; let actualTest2 = []; let actualTest3 = []; let actualTest4 = []; let actualTest5 = [];
    let actualTest6 = []; let actualTest7 = []; let actualTest8 = []; let actualTest9 = []; let actualTest10 = [];
    let actualTest11 = []; let actualTest12 = []; let actualTest13 = []; let actualTest14 = []; let actualTest15 = [];


    //call APi to store all reading data & userlocalstorage data into a state ---------
    useEffect(() => {
        setUserEmail(localStorage.getItem('userEmail'));
        setuserToken(localStorage.getItem("loginTOken"));
    }, [])

    useEffect(() => {
        axios({
            method: "get",
            // url: 'http://localhost:8080/api/user/ListeningResults/' + userEmail,
            url: 'https://node-js-express-login-example.onrender.com/api/user/ListeningResults/' + useremail,
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
    //test-1
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-1") {
            actualTest1.push(items);
        }
    });
    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-2") {
            actualTest2.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-3") {
            actualTest3.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-4") {
            actualTest4.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-5") {
            actualTest5.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-6") {
            actualTest6.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-7") {
            actualTest7.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-8") {
            actualTest8.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-9") {
            actualTest9.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-10") {
            actualTest10.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-11") {
            actualTest11.push(items);
        }
    });

    mainDataAll[0] && mainDataAll.map((items) => {
        if (items.SectionName == "Actual-test-12") {
            actualTest12.push(items);
        }
    });
    console.log(actualTest1);




    const goBackListeningTest1 = (e) => {
        localStorage.setItem('ModulesListening', 1)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-1")
    };
    const goBackListeningTest2 = (e) => {
        localStorage.setItem('ModulesListening', 2)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-2")
    };
    const goBackListeningTest3 = (e) => {
        localStorage.setItem('ModulesListening', 3)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-3")
    };
    const goBackListeningTest4 = (e) => {
        localStorage.setItem('ModulesListening', 4)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-4")
    };
    const goBackListeningTest5 = (e) => {
        localStorage.setItem('ModulesListening', 5)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-5")
    };
    const goBackListeningTest6 = (e) => {
        localStorage.setItem('ModulesListening', 6)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-6")
    };
    const goBackListeningTest7 = (e) => {
        localStorage.setItem('ModulesListening', 7)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-7")
    };
    const goBackListeningTest8 = (e) => {
        localStorage.setItem('ModulesListening', 8)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-8")
    };

    const goBackListeningTest9 = (e) => {
        localStorage.setItem('ModulesListening', 9)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-9")
    };
    const goBackListeningTest10 = (e) => {
        localStorage.setItem('ModulesListening', 10)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-10")
    };
    const goBackListeningTest11 = (e) => {
        localStorage.setItem('ModulesListening', 11)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-11")
    };
    const goBackListeningTest12 = (e) => {
        localStorage.setItem('ModulesListening', 12)
        e.preventDefault();
        history.push("/ListeningPage/ListeningAllTests/Actual-test-12")
    };










    return (
        <>
            <section className="appie-service-area appie-service-3-area pt-[110px] sm:pt-[135px] pb-50" id="service" >
                <div className="text-center w-[100%]  rounded  grid justify-center mt-[50px]">
                    <div className="m-auto">
                        <strong className='text-3xl mb-3 font-bold'>Practice our sample</strong><br />
                        <strong className='text-4xl mb-3 font-bold'> Actual Listening Tests</strong><br />
                        <p className='text-black mt-1'>
                            Give all the ielts test and get results instantly.
                        </p>
                    </div>
                </div>
                {/* <div className ='w-full p-2 flex  justify-center align-middle'>
                        <div className ='flex gap-[20px] sm:gap-[30px] justify-between'>
                            <button className ='p-3  w-full text-[15px]  sm:w-[200px] rounded-tl-[12px]
                            rounded-tr-[12px] bg-[#00CED1] text-black cursor-pointer'
                                onClick={() => { history.push("/ListeningPage") }}
                            >Actual-Tests</button>
                            <button className ='p-3 w-full text-[15px]   sm:w-[200px] rounded-tl-[12px]
                            rounded-tr-[12px] bg-gray-100 hover:bg-blue-200  border-2 border-gray-300 text-black'
                                onClick={() => { history.push("/ListeningPage/cambridgeAllTests") }}
                            >Cambridge-Book-Tests</button>
                        </div>
                    </div> */}
                <div className='p-[10px] sm:p-[20px] z-[55] pt-5'>
                    <div className='grid justify-center align-middle'>
                        <button className=' flex gap-2 rounded borde-1 border-gray-300 bg-white h-full '>
                            <button className='p-2 flex gap-1 w-auto text-[12px] translate-y-[1px] text-center h-[40px] sm:w-[200px] bg-white text-black cursor-pointer opacity-50 font-bold hover:border-b-[3px] hover:border-b-green-700 transition-all hover:opacity-90'
                                onClick={() => { history.push("/ListeningPage/cambridgeAllTests") }}
                            >Cambridge tests
                                {/* <BiSolidCategoryAlt className ='text-xl text-black' /> */}
                                <Image src={cambrigeIcon} className='w-[15px] translate-y-[1px]' />
                            </button>
                            <button className='p-2 flex gap-1 w-auto h-[40px] text-[15px] text-center translate-y-[1px] sm:w-[200px]  bg-white text-blue-900 cursor-pointer border-b-[4px] border-b-green-700 font-bold'
                                onClick={() => { history.push("/ListeningPage") }}
                                disabled
                            >Actual Tests
                                <BiIntersect className='text-xl text-black' />
                            </button>
                        </button>
                    </div>






                    {/* Start of Rows / Cards sections   */}
                    <div>
                        <div className="w-full justify-center pt-[50px] sm:pt-[10px]  rounded-t-[33px] sm:rounded bg-gray-100">
                            <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackListeningTest1}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  w-auto h-auto border border-white bg-white sha">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={ActualImage1} className="rounded-xl" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className ="text-gray-500 font-medium ">Vacations</p> */}
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
                                                                className=' rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            671
                                                        </p>
                                                    </div>

                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px]">Excursion,
                                                    PARKS,
                                                    Nationality</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>

                                                        <div className='m-auto'>
                                                            {
                                                                actualTest1[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(actualTest1[actualTest1.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(actualTest1[actualTest1.length - 1].ieltsRate) >= 4 && Number(actualTest1[actualTest1.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(actualTest1[actualTest1.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(actualTest1[actualTest1.length - 1].ieltsRate).toFixed(1)}
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
                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${actualTest1[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>1</span></div>
                                    </div>
                                </div>

                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackListeningTest2}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  w-auto h-auto border border-white bg-white sha">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={ActualImage2} className="rounded-xl" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className ="text-gray-500 font-medium ">Vacations</p> */}
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
                                                                className=' rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            496
                                                        </p>
                                                    </div>
                                                    {/* <div className ="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px]">opinion,
                                                    Detail,
                                                    Foundation</h6>

                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                actualTest2[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(actualTest2[actualTest2.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(actualTest2[actualTest2.length - 1].ieltsRate) >= 4 && Number(actualTest2[actualTest2.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(actualTest2[actualTest2.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(actualTest2[actualTest2.length - 1].ieltsRate).toFixed(1)}
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
                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${actualTest2[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>2</span></div>
                                    </div>
                                </div>

                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackListeningTest3}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  w-auto h-auto border border-white bg-white sha">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={ActualImage3} className="rounded-xl" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className ="text-gray-500 font-medium ">Vacations</p> */}
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
                                                                className=' rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            286
                                                        </p>
                                                    </div>
                                                    {/* <div className ="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px]">Client,
                                                    Details,
                                                    Candidates</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                actualTest3[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(actualTest3[actualTest3.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(actualTest3[actualTest3.length - 1].ieltsRate) >= 4 && Number(actualTest3[actualTest3.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(actualTest3[actualTest3.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(actualTest3[actualTest3.length - 1].ieltsRate).toFixed(1)}
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
                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px]
                                             ${actualTest3[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>3</span></div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackListeningTest4}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  w-auto h-auto border border-white bg-white sha">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={ActualImage4} className="rounded-xl" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className ="text-gray-500 font-medium ">Vacations</p> */}
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
                                                                className=' rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            716
                                                        </p>
                                                    </div>
                                                    {/* <div className ="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px]">Survey,
                                                    Timetable,
                                                    Neutrinos</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                actualTest4[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(actualTest4[actualTest4.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(actualTest4[actualTest4.length - 1].ieltsRate) >= 4 && Number(actualTest4[actualTest4.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(actualTest4[actualTest4.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(actualTest4[actualTest4.length - 1].ieltsRate).toFixed(1)}
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
                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${actualTest4[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>4</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackListeningTest5}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  w-auto h-auto border border-white bg-white sha">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={ActualImage5} className="rounded-xl" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className ="text-gray-500 font-medium ">Vacations</p> */}
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
                                                                className=' rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            716
                                                        </p>
                                                    </div>
                                                    {/* <div className ="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px]">Details,
                                                    Possible,
                                                    Solution</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                actualTest5[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(actualTest5[actualTest5.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(actualTest5[actualTest5.length - 1].ieltsRate) >= 4 && Number(actualTest5[actualTest5.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(actualTest5[actualTest5.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(actualTest5[actualTest5.length - 1].ieltsRate).toFixed(1)}
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
                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${actualTest5[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>5</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackListeningTest6}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  w-auto h-auto border border-white bg-white sha">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={ActualImage6} className="rounded-xl" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className ="text-gray-500 font-medium ">Vacations</p> */}
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
                                                                className=' rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            616
                                                        </p>
                                                    </div>
                                                    {/* <div className ="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px]">Anders,
                                                    Cost,
                                                    Procedure</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                actualTest6[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(actualTest6[actualTest6.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(actualTest6[actualTest6.length - 1].ieltsRate) >= 4 && Number(actualTest6[actualTest6.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(actualTest6[actualTest6.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(actualTest6[actualTest6.length - 1].ieltsRate).toFixed(1)}
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
                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${actualTest6[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>6</span></div>
                                    </div>
                                </div>


                            </div>
                            <div className='flex flex-wrap justify-start translate-x-[0px] sm:translate-x-[24px] gap-3  p-[7px] sm:p-[15px]'>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackListeningTest7}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  w-auto h-auto border border-white bg-white sha">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={ActualImage7} className="rounded-xl" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className ="text-gray-500 font-medium ">Vacations</p> */}
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
                                                                className=' rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            916
                                                        </p>
                                                    </div>
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px]">Tourism,
                                                    Survey,
                                                    Advertising
                                                </h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                actualTest7[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(actualTest7[actualTest7.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(actualTest7[actualTest7.length - 1].ieltsRate) >= 4 && Number(actualTest7[actualTest7.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(actualTest7[actualTest7.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(actualTest7[actualTest7.length - 1].ieltsRate).toFixed(1)}
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
                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${actualTest7[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>7</span></div>
                                    </div>
                                </div>
                                <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                    onClick={goBackListeningTest8}
                                >
                                    <div className="flex flex-col justify-center relative ">
                                        <div
                                            className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  w-auto h-auto border border-white bg-white sha">
                                            <div className="w-1/3 bg-white grid place-items-center">
                                                <Image src={ActualImage8} className="rounded-xl" />
                                            </div>
                                            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3 translate-y-[-3px] sm:translate-y-[0px]">
                                                <div className="flex justify-between item-center gap-1">
                                                    {/* <p className ="text-gray-500 font-medium ">Vacations</p> */}
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
                                                                className=' rounded-[50%]'
                                                                width={11}
                                                                height={10}
                                                            />
                                                            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt=""
                                                                className='rounded-[50%] translate-x-[-3px]'
                                                                width={9}
                                                                height={8}
                                                            />
                                                            <Image src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""
                                                                className=' rounded-[50%] translate-x-[-3px]'
                                                                width={8}
                                                                height={7}
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                                            586
                                                        </p>
                                                    </div>
                                                    {/* <div className ="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                </div>
                                                <h6 className="font-black text-gray-800 text-[10px]">Phone,
                                                    interview,
                                                    Reasons</h6>
                                                <div className='flex justify-center gap-4 w-full '>
                                                    <div className='grid justify-center align-middle translate-y-[1px] translate-x-[-4px]'>
                                                        <div className='m-auto'>
                                                            {
                                                                actualTest8[0] ?
                                                                    <>
                                                                        {
                                                                            useremail && <div className={`text-center rounded-[50%]  font-bold text-[14px] pt-[2px] outline outline-3 h-[25px] w-[25px] outline-offset-2 outline-gray-500
                                                                                       ${Number(actualTest8[actualTest8.length - 1].ieltsRate) < 4 && "bg-red-600 text-white"}

                                                                                     ${Number(actualTest8[actualTest8.length - 1].ieltsRate) >= 4 && Number(actualTest8[actualTest8.length - 1].ieltsRate) <= 6 && "bg-yellow-500 text-black"}

                                                                                     ${Number(actualTest8[actualTest8.length - 1].ieltsRate) > 6 && "bg-green-600 text-white"} `} >
                                                                                {Number(actualTest8[actualTest8.length - 1].ieltsRate).toFixed(1)}
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
                                        <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] 
                                            ${actualTest8[0] && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>8</span></div>
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

export default AllListeningTests;
