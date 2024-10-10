"use client";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import "./index.css";
import { useRouter } from 'next/navigation';
import WSlider from './WSlider';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiIntersect } from "react-icons/bi";
import { TbVocabulary } from "react-icons/tb";
import Image from 'next/image';
import WritingCardMainImg from "../../../../assets/images/about-writing-pic-1.png";

//client components......
const WritingTextArea = dynamic(() => import("../Writing-All-Test/Writing-Importand/Pages/Task-1-Component.jsx"), { ssr: false })
const Task2Component = dynamic(() => import("../Writing-All-Test/Writing-Importand/Pages/Task-2-Compoennt.jsx"), { ssr: false })

// end importing------>






function AllWritingTestServices(task) {
    //function for redirect to the reading & Listening page------->>   
    const history = useRouter();
    //localstorage save into states----
    const [useremail, setuseremail] = useState("");
    const [userToken, setuserToken] = useState("");

    //all writing scores added from localstorage ...
    const [ScorModuleNo1, setScorModuleNo1] = useState();
    const [ScorModuleNo2, setScorModuleNo2] = useState()
    const [ScorModuleNo3, setScorModuleNo3] = useState()
    const [ScorModuleNo4, setScorModuleNo4] = useState()
    const [ScorModuleNo5, setScorModuleNo5] = useState()
    const [ScorModuleNo6, setScorModuleNo6] = useState()
    const [ScorModuleNo7, setScorModuleNo7] = useState()
    const [ScorModuleNo8, setScorModuleNo8] = useState()
    const [ScorModuleNo9, setScorModuleNo9] = useState()
    const [ScorModuleNo10, setScorModuleNo10] = useState()
    const [ScorModuleNo11, setScorModuleNo11] = useState()
    const [ScorModuleNo12, setScorModuleNo12] = useState()
    const [ScorModuleNo13, setScorModuleNo13] = useState()
    const [ScorModuleNo14, setScorModuleNo14] = useState()
    const [ScorModuleNo15, setScorModuleNo15] = useState()


    //function for redirect to the reading & Listening page------->>   
    const [mainDataAll, setmainData] = useState([]);

    const [changeStete, setChangeState] = useState("task1");
    const [showVocabularyPopup, setShowVocabularyPopup] = useState(false)

    //check-conditions-when-user-click-on-load-more-10-test-button------------
    let actualTest1 = []; let actualTest2 = []; let actualTest3 = []; let actualTest4 = []; let actualTest5 = [];
    let actualTest6 = []; let actualTest7 = []; let actualTest8 = []; let actualTest9 = []; let actualTest10 = [];
    let actualTest11 = []; let actualTest12 = []; let actualTest13 = []; let actualTest14 = []; let actualTest15 = [];


    //call APi to store all reading data into a satte ---------
    useEffect(() => {
        setuseremail(localStorage.getItem('userEmail'));
        setuserToken(localStorage.getItem("loginTOken"));

        //all writing scores getting from localstorage & save those into state
        setScorModuleNo1(localStorage.getItem("W_ScorModuleNo1"))
        setScorModuleNo2(localStorage.getItem("W_ScorModuleNo2"))
        setScorModuleNo3(localStorage.getItem("W_ScorModuleNo3"))
        setScorModuleNo4(localStorage.getItem("W_ScorModuleNo4"))
        setScorModuleNo5(localStorage.getItem("W_ScorModuleNo5"))
        setScorModuleNo6(localStorage.getItem("W_ScorModuleNo6"))
        setScorModuleNo7(localStorage.getItem("W_ScorModuleNo7"))
        setScorModuleNo8(localStorage.getItem("W_ScorModuleNo8"))
        setScorModuleNo9(localStorage.getItem("W_ScorModuleNo9"))
        setScorModuleNo10(localStorage.getItem("W_ScorModuleNo10"))
        setScorModuleNo11(localStorage.getItem("W_ScorModuleNo11"))
        setScorModuleNo12(localStorage.getItem("W_ScorModuleNo12"))
        setScorModuleNo13(localStorage.getItem("W_ScorModuleNo13"))
        setScorModuleNo14(localStorage.getItem("W_ScorModuleNo14"))
        setScorModuleNo15(localStorage.getItem("W_ScorModuleNo15"))
    }, [])


    //!important..........
    // useEffect(() => {
    //     axios({
    //         method: "get",
    //         // url: 'http://localhost:8080/api/user/AllReadingResults/' + userEmail,
    //         url: 'https://node-js-express-login-example.onrender.com/api/user/WritingResults/' + useremail,
    //         headers: {
    //             "Authorization": `Bearer ${userToken}`,
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data);
    //             //set all speaking data for make all user spekaing data synchronized with their id's------
    //             //if main data will not be empty existing function will be called for set all the speaking scores----
    //             setmainData(res.data.data)

    //         })
    //         .catch((e) => { console.log(e) });



    // }, [])














    const goBackWritingTest1 = (e) => {
        localStorage.setItem('ModulesWriting', 1)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-1")
    };
    const goBackWritingTest2 = (e) => {
        localStorage.setItem('ModulesWriting', 2)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-2")
    };
    const goBackWritingTest3 = (e) => {
        localStorage.setItem('ModulesWriting', 3)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-3")
    };
    const goBackWritingTest4 = (e) => {
        localStorage.setItem('ModulesWriting', 4)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-4")
    };
    const goBackWritingTest5 = (e) => {
        localStorage.setItem('ModulesWriting', 5)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-5")
    };
    const goBackWritingTest6 = (e) => {
        localStorage.setItem('ModulesWriting', 6)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-6")
    };
    const goBackWritingTest7 = (e) => {
        localStorage.setItem('ModulesWriting', 7)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-7")
    };
    const goBackWritingTest8 = (e) => {
        localStorage.setItem('ModulesWriting', 8)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-8")
    };
    const goBackWritingTest9 = (e) => {
        localStorage.setItem('ModulesWriting', 9)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-9")
    };
    const goBackWritingTest10 = (e) => {
        localStorage.setItem('ModulesWriting', 10)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-10")
    };
    const goBackWritingTest11 = (e) => {
        localStorage.setItem('ModulesWriting', 11)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-11")
    };
    const goBackWritingTest12 = (e) => {
        localStorage.setItem('ModulesWriting', 12)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-12")
    };


    const goBackWritingTest13 = (e) => {
        localStorage.setItem('ModulesWriting', 13)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-13")
    };
    const goBackWritingTest14 = (e) => {
        localStorage.setItem('ModulesWriting', 14)
        e.preventDefault();
        history.push("/Pages/Writing-Module/Writing-All-Test/Actual-test-14")
    };







    return (
        <>

            <section className="appie-service-area appie-service-3-area pt-[110px] sm:pt-[145px] pb-50" id="service" >
                <div className="text-center w-[100%]  rounded  grid justify-center mt-[50px]">
                    <div className="m-auto">
                        <button
                            className="flex items-center border border-gray-300 rounded-[20px] shadow-md p-2 text-sm font-medium text-white hover:bg-gray-200 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-gray-500 m-auto gap-1"
                            style={{ background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)" }}
                            onClick={() => { setShowVocabularyPopup(true) }}
                        >
                            <span>Writing Vocabularies</span>
                            <TbVocabulary className="font-bold text-xl text-red-500" />

                        </button>
                        <div className='translate-y-1'>
                            <div className="appie-title text-3xl sm:text-4xl font-bold">Test Your IELTS Writing</div>
                            <p className='text-black mt-1'>
                                Give all the ielts test and get results instantly.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid justify-center align-middle translate-y-2'>
                    <button className=' flex gap-2 rounded borde-1 border-gray-300 bg-white h-full '>
                        <button className={`${changeStete == "task1" ? "border-b-[4px] border-b-green-700  hover:opacity-100 p-2 flex gap-1 w-auto text-[16px] translate-y-[1px] text-center h-[40px] sm:w-[200px] bg-white text-black cursor-pointer opacity-90 font-bold hover:border-b-[3px] hover:border-b-green-700 transition-all"
                            :
                            "p-2 flex gap-1 w-auto text-[16px] translate-y-[1px] text-center h-[40px] sm:w-[200px] bg-white text-black cursor-pointer opacity-50 font-bold hover:border-b-[3px] hover:border-b-green-700 transition-all hover:opacity-90"}`}
                            onClick={() => { setChangeState("task1") }}
                        >Task-1
                        </button>
                        <button className={`${changeStete == "task2" ? "border-b-[4px] border-b-green-700 hover:opacity-100 p-2 flex gap-1 w-auto text-[16px] translate-y-[1px] text-center h-[40px] sm:w-[200px] bg-white text-black cursor-pointer opacity-90 font-bold hover:border-b-[3px] hover:border-b-green-700 transition-all"
                            :
                            "p-2 flex gap-1 w-auto text-[16px] translate-y-[1px] text-center h-[40px] sm:w-[200px] bg-white text-black cursor-pointer opacity-50 font-bold hover:border-b-[3px] hover:border-b-green-700 transition-all hover:opacity-90"}`}
                            onClick={() => { setChangeState("task2") }}

                        >Task-2
                        </button>
                    </button>
                </div>

                <div className='p-[10px] sm:p-[32px] z-[55] mt-2'>
                    <div className={`${changeStete == "task2" && "hidden"}`}>
                        <div className={`row uploadSections`}>
                            <div className="w-full flex justify-center align-middle ">
                                <WritingTextArea task={1} />
                            </div>
                        </div>
                    </div>
                    <div className={`${changeStete == "task1" && "hidden"}`}>
                        <div className={`row uploadSections`}>
                            <div className="w-full flex justify-center align-middle ">
                                <Task2Component task={2} />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="w-full flex justify-center align-middle ">
                            {/* <div className='m-auto text-center'>
                                <a href="https://www.facebook.com/iPractest/" className="mb-1 underline text-center">Check our facebook page</a> 
                                <div style={{ display: 'flex', justifyContent: 'center' }} >
                                    <FacebookEmbed url="https://www.facebook.com/photo?fbid=366815492619880&set=a.366814985953264" width={isMobile ? 295 : 580} height={isMobile ? 150 : 250} className='ml-[-15px] sm:ml-[10px]' />
                                </div>
                            </div> */}
                            <WSlider />
                        </div>
                    </div>
                    <hr ></hr>


                    <div className='mt-2'>
                        <div className='grid justify-center align-middle '>
                            <button className=' flex  rounded borde-1 translate-y-[1px] border-gray-300 bg-white h-full '>
                                <button className='p-2 flex gap-1 w-auto h-[43px] text-[15px] text-center translate-y-[1px] sm:w-[200px]  bg-white text-blue-900 cursor-pointer border-b-[4px] border-b-green-700 font-bold'
                                    onClick={() => { history.push("/WrittingPage") }}
                                >Actual Tests
                                    <BiIntersect className='text-xl text-black' />
                                </button>
                                {/* <button className='p-2 flex gap-1 w-auto h-[40px] text-[12px] text-center translate-y-[1px] sm:w-[200px]  bg-white text-black cursor-pointer border-t-1 border-t-green-600 border-l-1 border-l-green-500 border-r-1 border-r-green-500'
                                onClick={() => { history.push("/ListeningPage/cambridgeAllTests") }}
                            >Cambridge tests
                                <Image src={cambrigeIcon} className='w-[15px] translate-y-[1px]' />
                            </button> */}
                            </button>
                        </div>


                        {/* Start of Rows / Cards sections   */}
                        <div>
                            <div className="w-full justify-center p-2  rounded bg-gray-100">
                                <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest1}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                    <h6 className="font-black text-gray-800 text-[10px]">Turist,
                                                        sports,
                                                        teams
                                                    </h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo1 && useremail ?
                                                                    ScorModuleNo1 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo1 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>1</span></div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest2}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">table,
                                                        number,
                                                        living</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo2 && useremail ?
                                                                    ScorModuleNo2 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo2 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>2</span></div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest3}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">diagram,
                                                        libraries,
                                                        computer</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo3 && useremail ?
                                                                    ScorModuleNo3 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo3 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>3</span></div>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest4}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">percentage,
                                                        cinemas,
                                                        Research</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo4 && useremail ?
                                                                    ScorModuleNo4 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo4 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>4</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest5}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">table,
                                                        population,
                                                        bicycles</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo5 && useremail ?
                                                                    ScorModuleNo5 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo5 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>5</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest6}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">information,
                                                        average,
                                                        clothes</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo6 && useremail ?
                                                                    ScorModuleNo6 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo6 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>6</span></div>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest7}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                    <h6 className="font-black text-gray-800 text-[10px]">charts,
                                                        students,
                                                        students,
                                                        tradition
                                                    </h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo7 && useremail ?
                                                                    ScorModuleNo7 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo7 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>7</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest8}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">charts,
                                                        population,
                                                        amount</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo8 && useremail ?
                                                                    ScorModuleNo8 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo8 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>8</span></div>
                                        </div>
                                    </div>


                                </div>





                                {/* Here will be test 9 - 14 */}
                                <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest9}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">charts,
                                                        areas,
                                                        freedom,
                                                        Discuss</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo9 && useremail ?
                                                                    ScorModuleNo9 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo9 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>4</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest10}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">table,
                                                        designing,
                                                        outward</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo10 && useremail ?
                                                                    ScorModuleNo10 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo10 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>5</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest11}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                        {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                    Superhost</div> */}
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">chart,
                                                        survey,
                                                        sports,
                                                        teach</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo11 && useremail ?
                                                                    ScorModuleNo11 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo11 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>6</span></div>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex flex-wrap justify-center gap-3  p-[7px] sm:p-[15px]'>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest12}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                    <h6 className="font-black text-gray-800 text-[10px]">chart,
                                                        town,
                                                        Museums,
                                                        galleries
                                                    </h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo12 && useremail ?
                                                                    ScorModuleNo12 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo12 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>7</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest13}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">charts,
                                                        areas,
                                                        freedom,
                                                        Discuss</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo13 && useremail ?
                                                                    ScorModuleNo13 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo13 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>8</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[48%] md:w-[31%] "
                                        onClick={goBackWritingTest14}
                                    >
                                        <div className="flex flex-col justify-center relative ">
                                            <div
                                                className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-[17px] pb-[0px] sm:pb-[10px]  max-w-xs md:max-w-3xl mx-auto border border-white bg-white sha">
                                                <div className="w-1/3 bg-white grid place-items-center">
                                                    <Image src={WritingCardMainImg} className="rounded-xl h-[80%] translate-y-[-10px] sm:translate-x-[0px]" />
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
                                                    </div>
                                                    <h6 className="font-black text-gray-800 text-[10px]">table,
                                                        designing,
                                                        outward</h6>
                                                    <div className='flex justify-between align-middle w-full'>
                                                        <p className="text-[.8rem] font-normal text-gray-800">
                                                            Score:
                                                            <span className=" text-gray-600 text-base ml-1 font-bold">
                                                                {ScorModuleNo14 && useremail ?
                                                                    ScorModuleNo14 : 0}
                                                            </span>
                                                        </p>
                                                        <button className='p-2 flex text-center text-[13px] translate-y-[-2px] rounded-[20px] bg-gradient-to-r from-emerald-500 to-lime-600 text-white'>
                                                            Go for test
                                                            <MdKeyboardDoubleArrowRight className='ml-1 text-[15px]  font-bold' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`absolute text-center top-0 right-0 rounded-bl-[100%] w-[50px] h-[35px] ${ScorModuleNo14 && useremail ? "bg-green-600" : "bg-blue-600"}`}><span className='text-2xl font-bold text-white translate-x-2'>8</span></div>
                                        </div>
                                    </div>

                                </div>






                            </div>

                        </div>
                    </div>
                </div>
            </section >
            {/* Writing vocabulary list Links showing popUp */}

            {
                showVocabularyPopup && <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                    <div className="min-h-screen py-1 sm:px-6 lg:px-8 px-6 ">
                        <div className="sm:mx-auto sm:w-full sm:max-w-3xl pt-[20px] sm:pt-[0px] h-[600px] sm:h-auto overflow-auto">
                            <div className="mt-[20px] backGroundColorSetCss py-10 px-4 shadow-lg border-1 border-gray-100 sm:rounded-lg sm:px-10 relative">
                                <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                                    onClick={() => { setShowVocabularyPopup(false) }}
                                >
                                    X
                                </div>
                                <div className='pt-4 grid grid-cols-1 sm:grid-cols-2 gap-1  translate-y-2'>
                                    <div>
                                        <span className='font-bold text-xl sm:text-2xl text-purple-600 underline'>Vocabulary Links</span>
                                        <ul className='pl-2 ps-5 mt-2 space-y-1 list-disc list-inside'>
                                            <li><a href="https://ielts-up.com/writing/ielts-linking-words.html">Linking structures and cohesive devices</a></li>
                                            <li><a href="https://ielts-up.com/writing/ielts-essay-vocabulary.html">Academic word lists</a></li>
                                            <li><a href="https://ielts-up.com/writing/ielts-describing-graphs.html">Vocabulary to write letters</a></li>
                                            <li><a href="https://ielts-up.com/writing/letter-vocabulary.html">Vocabulary to write essays</a></li>
                                            <li><a href="https://ielts-up.com/writing/ielts-academic-wordlist.html">Vocabulary to describe graphs</a></li>
                                            <li><a href="https://www.ielts-mentor.com/48-ielts-vocabulary/vocabulary-for-academic-ielts-writing-task-1/528-vocabulary-for-academic-ielts-writing-task-1-part-1">Vocabulary For Academic IELTS Writing</a></li>
                                            {/* <li><a href=""></a></li> */}
                                        </ul>
                                    </div>
                                    <div className='sm:border-l-1 sm:border-l-gray-700 sm:pl-[20px] underline'>
                                        <span className='font-bold text-xl sm:text-2xl  text-purple-600'>Tips</span>
                                        <ul className='pl-2 ps-5 mt-2 space-y-1 list-disc list-inside'>
                                            <li><a href="https://ielts-up.com/writing/ielts-writing-tips.html">Tips about Writing</a></li>
                                            {/* <li><a href="">adksada</a></li>
                                            <li><a href="">adksada</a></li> */}

                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default AllWritingTestServices;
