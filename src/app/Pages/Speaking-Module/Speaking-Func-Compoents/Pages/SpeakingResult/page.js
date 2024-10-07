"use client"
import React, { useEffect, useState } from 'react';
import "./index.css"
import { useRouter } from 'next/navigation';
import { useStateContext } from "../../../../../../contexts/ContextProvider";
import { isMobile } from 'react-device-detect';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import axios from "axios";
import SignUpPage from '../../../../LoginPage/SignUpPage';
import LoginPage from '../../../../LoginPage/LoginPage';
import ShowUserSpeechMainData from './ShowUserSpeechMainData';
import { FaCircleChevronLeft } from "react-icons/fa6";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ReasultHeader from './ReasultHeader';

//end of the importing........



let SpeakingScores;
export default function Index() {
    const history = useRouter();
    //all localstorages variable is here......for storing user local data....
    const [userMainToken, setuserMainToken] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userName, setuserName] = useState("")
    const [questionStep, setquestionStep] = useState()


    //get section buy doing this
    //(SpeakingScores.sectionNo)
    const { speakingStepsNo, setSpeakingStepNo } = useStateContext();


    const [changeTap, setChangeTap] = useState("result")

    const [show1content, setShow1Content] = useState(false)
    const [show2content, setShow2Content] = useState(false)

    const [show3content, setShow3Content] = useState(false)
    const [show4content, setShow4Content] = useState(false);

    const [storeSubordinateWords, setStoringsubordinateWords] = useState([]);
    const [storeLinkingWords, setStoringLinkingWords] = useState([]);
    const [lexicalResWords, setlexicalResWords] = useState([]);
    const [grammerMistakes, setgrammerMistakes] = useState([]);

    //for store pronaunication Statement into the state below------
    const [pronaunicationStatement, setPronaunicationStatement] = useState("");


    //state for showing the user Speeck audio data & user Speeck data by popUp-----
    const [showUserSpeechData, setshowUserSpeechData] = useState(false);

    //summary show---------
    const [SpeakingSummary, setSpeakingSummary] = useState([]);
    const [SpeakingImprovement, setSpeakingImprovement] = useState([])

    //for showing to the user that he/she did not logged in yet --- this is just for a simple alert with popUp
    const [showLoginAlerttoTheUser, setshowLoginAlerttoTheUser] = useState(false);


    // for signUp page
    const [forSignUpPage, setForSignUpPage] = useState(false);
    //for login page    
    const [openLogIn, setOpenLogIn] = useState(false);
    useEffect(() => {
        // all local data storing to those variables 
        setuserMainToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"))
        setuserEmail(localStorage.getItem('userEmail') && localStorage.getItem('userEmail'))
        setuserName(localStorage.getItem("userName") && localStorage.getItem("userName"))

        let showSpeakingResult = localStorage.getItem("showSpeakingResult");
        let retriveScoresData = JSON.parse(showSpeakingResult)
        SpeakingScores = retriveScoresData
        console.log(retriveScoresData)

        let questionStepColorArr = localStorage.getItem("questionStepColorArr")
        setquestionStep(JSON.parse(questionStepColorArr))

        //other things...
        !localStorage.getItem("userEmail") && setshowLoginAlerttoTheUser(true);
        LaxicalGrramerSugges();
        setTimeout(() => {
            SubordinateLinkingWords();
        }, 2000);
        makePronaunicationStatement();
        //for save data to the database---
        // funcForSaveDatatoTheDatabase()

        //set something into the localstorage by opening this page for motivate the user into the speaking cards page
        localStorage.setItem("forSpeakingMotivation", "SpeakingMotivation");

    }, [])

    //collect the question numbers from scores local JSON object & store them into a variables 
    // finally sort them & show those in UI
    console.log(SpeakingScores && SpeakingScores.questionStepNumber);
    let mapping_Numbers = SpeakingScores && SpeakingScores.questionStepNumber
    var numbers = [];
    for (let a = 0; a < mapping_Numbers; a++) {
        numbers.push(a)
    }
    console.log(SpeakingScores);
    console.log(numbers)
    let firsLineSteps = numbers.slice(0, 5)
    let secondLineSteps = numbers.slice(5, 9)
    let thirdLineSteps = numbers.slice(9, 13)
    let fourtLineSteps = numbers.slice(13)

    // Subordinate Conjuctions Array--------
    let SubordianteConjuctionsArr = [
        'after', 'although', 'as', 'as if', 'as long as', 'as much as', 'as soon as', 'as though', 'because', 'before', 'by the time', 'even if', 'even though', 'if', 'in case', 'in order that', 'in the event that', 'lest', 'now that', 'once', 'only', 'only if', 'provided that', 'since', 'so', 'supposing', 'than', 'that', 'though', 'till', 'unless', 'until', 'when', 'whenever', 'where', 'whereas', 'wherever', 'whether or not', 'while',
        'should', 'teenagers', 'have', 'what', 'is', 'the', 'greatest', 'challenge', 'facing', 'teachers', 'today'
    ]

    //Linking Words Array------------
    let LinkingWords = [
        'although', 'apart from', 'but for', 'despite', 'even though', 'as', 'because', 'in so far as', 'since', 'as long as', 'if', 'provided that', 'unless', 'whether', 'in order to', 'so as to', 'so that', 'to', 'also', 'beside', 'in addition', 'moreover', 'as far as i am concern', 'in my opinion', 'to my mind', 'as a consequence', 'as a result', 'eventuallu', 'so', "that's why", 'either ..or', 'neither ..nor', 'or', 'whatever', 'whoever', 'but', 'however', 'on the one hand', 'on the other hand', 'whereas', 'while'
    ]







    const openSignUpPage = (x) => {
        setTimeout(() => {
            setForSignUpPage(!forSignUpPage)
            setOpenLogIn(false)    //solution
        }, 250);
    }

    const openLogInPage = (x) => {
        setTimeout(() => {
            setOpenLogIn(!openLogIn)
            setForSignUpPage(false) // solution
        }, 250);
    }





    //function for post request & storing subordinate & Linking words---------
    const LaxicalGrramerSugges = () => {
        var sentData = {
            "textData": SpeakingScores.userSpeechAnsData
        }
        // let someText = SpeakingScores.userSpeechAnsData.replace(/(\r\n|\n|\r)/gm, "");
        console.log(sentData)
        console.log("Parvez text-finished..")
        axios.post("https://ipractest-406204.uc.r.appspot.com/lexandTens", sentData)
            .then((res) => {
                console.log(res.data)
                let newArry = [];
                let newOne = res.data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ').split("**")
                console.log(newOne)
                newOne.map((items) => {
                    if (items.trim() != "*" && items.trim() != "") {
                        let a = items.replace(/['"]+/g, '').replace(/\n/g, ' ');
                        let b = a.replace(/["*"]/g, "").replace(/\n/g, "")
                        newArry.push(b);
                        console.log(b)
                    }
                    console.log(items)
                })

                console.log(newArry);
                setlexicalResWords(newArry)

            })
            .catch((err) => {
                console.log(err)
            });

        axios.post("https://ipractest-406204.uc.r.appspot.com/grammarmistakes", sentData)
            .then((res) => {
                console.log(res.data)
                let newArry = [];
                let newOne = res.data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ').split('*');
                console.log(newOne)
                newOne.map((items) => {
                    if (items != "" && items.trim() != "") {
                        let a = items.replace("\\", "");
                        let b = a.replace("\\", "");
                        let c = b.replace(/\\/g, "")
                        newArry.push(c)
                    }
                })

                console.log(newArry);
                setgrammerMistakes(newArry)
            })
            .catch((err) => {
                console.log(err)
            })



        //suggestions API call---------

        //post & get the speaking ImproveMent
        axios.post("https://ipractest-406204.uc.r.appspot.com/SpeakingImprovement", sentData)
            .then((res) => {
                console.log(res.data);

                let newArry = [];
                let makeNewOne = res.data.message.split("\n");
                console.log(makeNewOne);
                makeNewOne.map((items) => {
                    if (items != "") {
                        let a = items.replace(/['"]+/g, '').replace(/\\n/g, ' ');
                        let b = a.replace(/[##]/g, ' ');
                        let c = b.replace(/[**]/g, ' ')
                        let X = c.trim()
                        newArry.push(X)

                    }
                    console.log(items)
                })
                setSpeakingImprovement(newArry)
                console.log(newArry);

                //making string for make a post request for Summary Improvement
                let newOne = res.data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ').split("*").join().replace(/['"]+/g, '').replace(/\n/g, ' ').replace(",,", "").split(",,");
                let makeAStr = newOne.join().replace(/,/g, "").replace(/[##]/g, ' ');
                console.log(makeAStr)
                let sendDataForSummary = {
                    "textData": makeAStr
                }

                //call improvementSummay API to get improvement Data----
                axios.post("https://ipractest-406204.uc.r.appspot.com/improvementSummary", sendDataForSummary)
                    .then((res) => {
                        console.log(res);
                        console.log(res.data.message);
                        let sumArray = [];
                        let summayData;

                        if (res.data.message.includes("**")) {
                            summayData = res.data.message.trim().split("**");
                        } else {
                            summayData = res.data.message.trim().split(".");
                        }
                        console.log(summayData);
                        summayData.map((items) => {
                            if (summayData != "" && summayData.trim != "") {
                                let x = items.replace(/['"]+/g, '').replace(/\n/g, ' ').split("*").join().replace("-", "").replace(",", "").trim();
                                sumArray.push(x + ".")
                            }
                        })
                        console.log(sumArray)
                        setTimeout(() => {
                            setSpeakingSummary(sumArray)
                        }, 500);
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            })
            .catch((err) => {
                console.log(err)
            })





    }





    //make Subordinate words && linking words by the code below with the help of those linking & subordinates word array combine with the user speech array----------  
    const SubordinateLinkingWords = () => {
        if (SpeakingScores.userSpeechAnsData) {
            let words = SpeakingScores.userSpeechAnsData.toLowerCase();
            // let wordArray = words.split(' ');
            let result = [];
            SubordianteConjuctionsArr.map((items) => {
                if (words.includes(items.toLowerCase())) {
                    result.push(items)
                }
            })

            // console.log(result);

            let linkingResult = [];
            LinkingWords.map((items) => {
                if (words.includes(items.toLowerCase())) {
                    linkingResult.push(items)
                }
            })

            // console.log(linkingResult);
            setStoringsubordinateWords(result);
            setStoringLinkingWords(linkingResult);


        }



    }




    const makePronaunicationStatement = () => {
        if (SpeakingScores.PronaunacationsScore < 5) {
            setPronaunicationStatement("Your Pronaunacation is not so good")
        } else if (SpeakingScores.PronaunacationsScore <= 6.5) {
            setPronaunicationStatement("Your Pronaunacation is not so good but Well")
        } else {
            setPronaunicationStatement("Your Pronaunacation is very good.")
        }
    }





    return (
        <div>

            {/* conponent is for Header  */}
            <ReasultHeader
                openLogInPage={openLogInPage}
            />

            <div className='w-full h-[86vh] mt-2 sm:h-[80vh] grid justify-center align-middle '>
                <div className="m-auto grid justify-center align-middle w-full sm:w-[750px] shadow-lg rounded p-[10px] sm:p-[20px] relative">
                    <button className='absolute top-2 left-2 p-2 text-center cursor-pointer rounded-[12px] flex justify-center gap-1 align-middle bg-[#0ed3cf] text-white text-[13px]'
                        onClick={() => { history.push("/Pages/Speaking-Module") }}
                    >
                        <FaCircleChevronLeft className='text-xl text-white' /> Back
                    </button>
                    <div className="mb-2 m-auto w-[120px] h-[120px]">

                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={Number(SpeakingScores && SpeakingScores.ieltsResult) / 10 * 100}
                            duration={1.5}
                            easingFunction={easeQuadInOut}
                        // repeat
                        >
                            {value => {
                                let roundedValue = Math.round(value);
                                let mainNumber = String(roundedValue).split("").join(".");
                                // console.log(mainNumber)
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${mainNumber}`}
                                        strokeWidth={12}
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({
                                            pathTransition: "none",
                                            //  textColor: "red",
                                            pathColor: "#541bac",
                                            // trailColor: "gold"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                        <p className="text-[17px] font-bold text-center">Ielts Score</p>
                    </div> <br />
                    <div className="w-full grid mb-2  justify-center gap-0 mt-1  h-auto  box-border " >
                        {
                            SpeakingScores && SpeakingScores.questionStepNumber && (
                                <div className=" w-full grid p-2 h-auto overflow-auto box-border rounded-[16px] justify-center align-middle">
                                    <div className={`grid sm:flex p-4 justify-center align-middle overflow-hidden gap-[30px] sm:gap-[0px] translate-x-2`}>
                                        <div className="flex justify-center translate-y-[-20px]  align-middle ">
                                            {
                                                firsLineSteps.map((items, i, { length }) => {
                                                    let matchItem = questionStep.filter(x => parseInt(x) == items);
                                                    let findNumber = matchItem[0] && parseInt(matchItem[0]);
                                                    let findColor = matchItem[0] && matchItem[0].replace(/\d+/g, '')
                                                    // i + 1 === length && matchItem[0] && callForStoreFunc()
                                                    return <div className='flex justify-start align-middle '>
                                                        <div className='relative'>
                                                            <p className={`text-center relative w-[30px] pt-[2px] h-auto text-[14px] font-bold rounded-[50%]  ${matchItem[0] && findColor == "green" ? "bg-green-200 border-[3px] border-green-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "red" ? "bg-red-200 border-[3px] border-red-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "yellow" ? "bg-yellow-200 border-[3px] border-yellow-500 text-gray-700 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                            `}
                                                            >{items}
                                                            </p>

                                                            <div className={`malkeClipPath text-center flex justify-center align-bottom p-2 pt-1 w-full text-[9px] absolute bottom-[-23px] left-0 text-black leading-[7px]
                                                              ${matchItem[0] && findColor == "green" && "bg-green-200"}
                                                              ${matchItem[0] && findColor == "red" && "bg-red-200"}
                                                              ${matchItem[0] && findColor == "yellow" && "bg-yellow-200"}
                                                            `}>
                                                                {
                                                                    matchItem[0] && findColor == "green" && <span className='translate-y-[2px]'>Perfect</span>
                                                                }
                                                                {
                                                                    matchItem[0] && findColor == "red" && <span className='translate-y-[2px]'>Short</span>
                                                                }
                                                                {
                                                                    matchItem[0] && findColor == "yellow" && <span className='translate-y-[2px]'>Medium</span>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className={`${i + 1 === length && isMobile && "bg-transparent"} w-[30px] m-auto h-[2px] bg-blue-800`}></div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                        {secondLineSteps[0] && <div className="flex justify-start sm:justify-center align-middle translate-y-[-20px]">
                                            {
                                                secondLineSteps.map((items, i, { length }) => {
                                                    let matchItem = questionStep.filter(x => parseInt(x) == items);
                                                    let findNumber = matchItem[0] && parseInt(matchItem[0]);
                                                    let findColor = matchItem[0] && matchItem[0].replace(/\d+/g, '')
                                                    // i + 1 === length && matchItem[0] && callForStoreFunc()
                                                    return <div className='flex justify-start align-middle'>
                                                        <div className='relative'>
                                                            <p className={`text-center w-[30px] pt-[2px] h-auto text-[14px] font-bold rounded-[50%]  ${matchItem[0] && findColor == "green" ? "bg-green-200 border-[3px] border-green-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "red" ? "bg-red-200 border-[3px] border-red-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "yellow" ? "bg-yellow-200 border-[3px] border-yellow-500 text-gray-700 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                            `}

                                                            >{items}</p>
                                                            <div className={`malkeClipPath text-center flex justify-center align-bottom p-2 pt-1 w-full text-[9px] absolute bottom-[-23px] left-0 text-black leading-[7px]
                                                              ${matchItem[0] && findColor == "green" && "bg-green-200"}
                                                              ${matchItem[0] && findColor == "red" && "bg-red-200"}
                                                              ${matchItem[0] && findColor == "yellow" && "bg-yellow-200"}
                                                            `}>
                                                                {
                                                                    matchItem[0] && findColor == "green" && <span className='translate-y-[2px]'>Perfect</span>
                                                                }
                                                                {
                                                                    matchItem[0] && findColor == "red" && <span className='translate-y-[2px]'>Short</span>
                                                                }
                                                                {
                                                                    matchItem[0] && findColor == "yellow" && <span className='translate-y-[2px]'>Medium</span>
                                                                }
                                                            </div>
                                                        </div>





                                                        <div className={`${i + 1 === length && "bg-transparent"} w-[30px] m-auto h-[2px] bg-blue-800`}></div>
                                                    </div>
                                                })
                                            }
                                        </div>}
                                    </div>

                                    {/* from 9-15 if thery are exist into that array */}

                                    {thirdLineSteps[0] || fourtLineSteps[0] && < div className={`grid sm:flex p-4 justify-center align-middle overflow-hidden gap-[30px] sm:gap-[0px] translate-x-2 mt-1`}>
                                        <div className="flex justify-center translate-y-[-20px]  align-middle">
                                            {
                                                thirdLineSteps[0] && thirdLineSteps.map((items, i, { length }) => {
                                                    let matchItem = questionStep.filter(x => parseInt(x) == items);
                                                    let findNumber = matchItem[0] && parseInt(matchItem[0]);
                                                    let findColor = matchItem[0] && matchItem[0].replace(/\d+/g, '')
                                                    // i + 1 === length && matchItem[0] && callForStoreFunc()
                                                    return <div className='flex justify-start align-middle '>
                                                        <div className='relative'>
                                                            <p className={`text-center w-[30px] pt-[2px] h-auto text-[14px] font-bold rounded-[50%]  ${matchItem[0] && findColor == "green" ? "bg-green-200 border-[3px] border-green-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "red" ? "bg-red-200 border-[3px] border-red-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "yellow" ? "bg-yellow-200 border-[3px] border-yellow-500 text-gray-700 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                            `}
                                                            // style={{ backgroundColor: matchItem[0] ? findColor : "white", color: matchItem[0] ? "white" : "black" }}
                                                            >{items}</p>
                                                            <div className={`malkeClipPath text-center flex justify-center align-bottom p-2 pt-1 w-full text-[9px] absolute bottom-[-23px] left-0 text-black leading-[7px]
                                                              ${matchItem[0] && findColor == "green" && "bg-green-200"}
                                                              ${matchItem[0] && findColor == "red" && "bg-red-200"}
                                                              ${matchItem[0] && findColor == "yellow" && "bg-yellow-200"}
                                                            `}>
                                                                {
                                                                    matchItem[0] && findColor == "green" && <span className='translate-y-[2px]'>Perfect</span>
                                                                }
                                                                {
                                                                    matchItem[0] && findColor == "red" && <span className='translate-y-[2px]'>Short</span>
                                                                }
                                                                {
                                                                    matchItem[0] && findColor == "yellow" && <span className='translate-y-[2px]'>Medium</span>
                                                                }
                                                            </div>




                                                        </div>
                                                        <div className={`${i + 1 === length && !fourtLineSteps[0] && "bg-transparent"} w-[30px] m-auto h-[2px] bg-blue-800`}></div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                        <div className="flex justify-start sm:justify-center align-middle translate-y-[-20px]">
                                            {
                                                fourtLineSteps[0] && fourtLineSteps.map((items, i, { length }) => {
                                                    let matchItem = questionStep.filter(x => parseInt(x) == items);
                                                    let findNumber = matchItem[0] && parseInt(matchItem[0]);
                                                    let findColor = matchItem[0] && matchItem[0].replace(/\d+/g, '')
                                                    // i + 1 === length && matchItem[0] && callForStoreFunc()
                                                    return <div className='flex justify-start align-middle'>
                                                        <div className='relative'>
                                                            <p className={`text-center w-[30px] pt-[2px] h-auto text-[14px] font-bold rounded-[50%]  ${matchItem[0] && findColor == "green" ? "bg-green-200 border-[3px] border-green-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "red" ? "bg-red-200 border-[3px] border-red-500 text-gray-50 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                             ${matchItem[0] && findColor == "yellow" ? "bg-yellow-200 border-[3px] border-yellow-500 text-gray-700 font-bold" : "bg-gray-50 text-gray-800 border-[3px] border-gray-500"}
                            `}
                                                            // style={{ backgroundColor: matchItem[0] ? findColor : "white", color: matchItem[0] ? "white" : "black" }}
                                                            >{items}</p>

                                                            <div className={`malkeClipPath text-center flex justify-center align-bottom p-2 pt-1 w-full text-[9px] absolute bottom-[-23px] left-0 text-black leading-[7px]
                                                              ${matchItem[0] && findColor == "green" && "bg-green-200"}
                                                              ${matchItem[0] && findColor == "red" && "bg-red-200"}
                                                              ${matchItem[0] && findColor == "yellow" && "bg-yellow-200"}
                                                            `}>
                                                                {
                                                                    matchItem[0] && findColor == "green" && <span className='translate-y-[2px]'>Perfect</span>
                                                                }
                                                                {
                                                                    matchItem[0] && findColor == "red" && <span className='translate-y-[2px]'>Short</span>
                                                                }
                                                                {
                                                                    matchItem[0] && findColor == "yellow" && <span className='translate-y-[2px]'>Medium</span>
                                                                }
                                                            </div>

                                                        </div>


                                                        <div className={`${i + 1 === length && "bg-transparent"} w-[30px] m-auto h-[2px] bg-blue-800`}></div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                    }


                                </div>
                            )
                        }
                    </div>



                    {/* All tabs---------- */}
                    <div className='bg-[##eaeaea] w-full border-b-[3px] border-b-[#20bbb7]' >
                        <ul className='flex cursor-pointer gap-1 sm:gap-2 justify-center'>
                            <li className={`${changeTap == "result" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2 px-6 rounded-t-lg   text-[8px] sm:text-[14px] font-bold`}
                                onClick={() => { setChangeTap("result") }}
                            >Results</li>
                            <li className={`${changeTap == "suggession" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2 px-6  rounded-t-lg  text-[8px] sm:text-[14px] font-bold`}
                                onClick={() => { setChangeTap("suggession") }}
                            >Improvement Suggession</li>
                            <li className={`${changeTap == "recording" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2 px-6  rounded-t-lg text-[8px] sm:text-[14px] font-bold`}
                                onClick={() => { setChangeTap("recording") }}
                            >review recording</li>

                        </ul>
                    </div>

                    <div className='border-r-2 border-r-gray-300 border-l-2 border-l-gray-300 border-b-2 border-b-gray-300'>
                        {
                            changeTap == "result" && (<>
                                <div className="grid w-full sm:w-[670px] justify-center align-middle p-3 ">
                                    <div className='flex w-full gap-2 flex-wrap justify-center p-2'>
                                        <div className={`bg-[#541bac] w-full sm:w-[300px] grid rounded-[20px] ${show1content ? "h-auto" : "h-[100px]"}`}>
                                            <div className='w-full'>
                                                <div className='flex justify-between w-full align-middle pl-[10px] pt-[17px] pr-[10px]'>
                                                    <div className='p-1 flex justify-center align-middle gap-1'>
                                                        <div className='p-1 rounded-[50%] bg-white w-[60px] h-[60px]'>
                                                            <AnimatedProgressProvider
                                                                valueStart={0}
                                                                valueEnd={Number(SpeakingScores && SpeakingScores.FluencyAndCoherence
                                                                ) / 10 * 100}
                                                                duration={1.5}
                                                                easingFunction={easeQuadInOut}
                                                            // repeat
                                                            >
                                                                {value => {
                                                                    let roundedValue = Math.round(value);
                                                                    let mainNumber = String(roundedValue).split("").join(".");
                                                                    // console.log(mainNumber)
                                                                    return (
                                                                        <CircularProgressbar
                                                                            value={value}
                                                                            text={`${mainNumber}`}
                                                                            strokeWidth={12}

                                                                            styles={buildStyles({
                                                                                pathTransition: "none",
                                                                                //  textColor: "red",
                                                                                pathColor: "green",

                                                                                // trailColor: "gold"
                                                                            })}
                                                                        />
                                                                    );
                                                                }}
                                                            </AnimatedProgressProvider>
                                                        </div>
                                                        <p className='font-bold text-center m-auto text-[14px] text-white'>
                                                            Fluency and Coherence
                                                        </p>

                                                    </div>
                                                    <div className=' flex justify-center align-middle'>
                                                        <div className='rounded-[50%] m-auto bg-gray-50 w-[20px] h-[20px] '><span className="text-gray-950  font-bold cursor-pointer"
                                                            onClick={() => {
                                                                setShow1Content(!show1content)
                                                                setShow2Content(false)
                                                            }}
                                                        >
                                                            {
                                                                show1content ? <IoMdArrowDropup className='text-2xl translate-y-[-2px] translate-x-[-2px]' /> : <IoMdArrowDropdown className='text-2xl translate-x-[-2px]' />
                                                            }
                                                        </span></div>
                                                    </div>

                                                </div>
                                            </div>
                                            {
                                                show1content && (<div className={`w-full flex justify-center align-middle bg-white text-black border-r-2 border-l-2 border-b-2 border-gray-300 p-2`}>
                                                    <div className='w-full bg-transparent text-start  text-black '>
                                                        <span className='text-xl font-bold'>Subordinate Words</span>
                                                        <div className='flex flex-wrap gap-2  w-full justify-start leading-3'>
                                                            {
                                                                storeSubordinateWords.map((items) => {
                                                                    return (<p className='text-[15px] text-black'>
                                                                        <span className='w-[7px] h-[7px] mr-1 rounded-[50%] bg-black'></span>
                                                                        {items}</p>)
                                                                })
                                                            }
                                                        </div>
                                                        <span className='text-xl text-start font-bold mt-1'>Linking Words</span>
                                                        <div className='flex flex-wrap gap-3 w-full justify-start pt-2'>
                                                            {
                                                                storeLinkingWords.map((items) => {
                                                                    return (<p className='text-[15px] text-black'>
                                                                        <span className='w-[7px] h-[7px] mr-1 rounded-[50%] bg-black'></span>
                                                                        {items}</p>)
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                </div>
                                                )
                                            }
                                        </div>
                                        <div className={`bg-orange-400 w-full sm:w-[300px] grid rounded-[20px] ${show2content ? "h-auto" : "h-[100px]"}`}>
                                            <div className='w-full'>
                                                <div className='flex justify-between w-full align-middle pl-[10px] pt-[17px] pr-[10px]'>
                                                    <div className='p-1 flex justify-center align-middle gap-1'>
                                                        <div className='p-1 rounded-[50%] bg-white w-[60px] h-[60px]'>


                                                            <AnimatedProgressProvider
                                                                valueStart={0}
                                                                valueEnd={Number(SpeakingScores && SpeakingScores.LexicalResourceScore) / 10 * 100}
                                                                duration={1.5}
                                                                easingFunction={easeQuadInOut}
                                                            // repeat
                                                            >
                                                                {value => {
                                                                    let roundedValue = Math.round(value);
                                                                    let mainNumber = String(roundedValue).split("").join(".");
                                                                    // console.log(mainNumber)
                                                                    return (
                                                                        <CircularProgressbar
                                                                            value={value}
                                                                            text={`${mainNumber}`}
                                                                            strokeWidth={12}

                                                                            styles={buildStyles({
                                                                                pathTransition: "none",
                                                                                //  textColor: "red",
                                                                                pathColor: "gold",

                                                                                // trailColor: "gold"
                                                                            })}
                                                                        />
                                                                    );
                                                                }}
                                                            </AnimatedProgressProvider>
                                                        </div>
                                                        <p className='font-bold text-center m-auto text-[14px] text-white'>
                                                            Lexical Resource
                                                        </p>

                                                    </div>
                                                    <div className=' flex justify-center align-middle'>
                                                        <div className='rounded-[50%] m-auto bg-gray-50 w-[20px] h-[20px] '><span className="text-gray-950  font-bold cursor-pointer"
                                                            onClick={() => {
                                                                setShow2Content(!show2content);
                                                                setShow1Content(false)
                                                            }}
                                                        >
                                                            {
                                                                show2content ? <IoMdArrowDropup className='text-2xl translate-y-[-2px] translate-x-[-2px]' /> : <IoMdArrowDropdown className='text-2xl translate-x-[-2px]' />
                                                            }
                                                        </span></div>
                                                    </div>

                                                </div>
                                            </div>

                                            {
                                                show2content && (
                                                    <div className={`w-full flex justify-center align-middle bg-white text-black border-r-2 border-l-2 border-b-2 border-gray-300 p-2`}>

                                                        <div className='w-full bg-transparent text-black p-2'>

                                                            <div className={`text-black w-full grid ${lexicalResWords[0] ? "justify-start" : "justify-center"}`}>
                                                                {lexicalResWords[0] ? (
                                                                    lexicalResWords.map((items, index) => {
                                                                        return (<div key={index} className={`flex w-full justify-start gap-3
                                                                    ${index == 0 && "text-[14px] font-bold mb-2"}
                                                                     ${items.match(/:/gi) && index != 0 && "text-[20px] font-bold mt-1"}
                                                                      text-[14px] `}>
                                                                            {
                                                                                !items.match(/:/gi) && (
                                                                                    <div className='w-[25px] translate-y-[4px]'>
                                                                                        <div className={`rounded-[50%] bg-gray-700 w-[10px] h-[10px] ${items == "  " && "bg-transparent ml-1 "}`}>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                            {
                                                                                items
                                                                            }
                                                                        </div>)
                                                                    })
                                                                ) : (
                                                                    // loader into lexical words if untill it's not come
                                                                    <div className='flex w-full h-full justify-center align-middle p-10'>
                                                                        <div
                                                                            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                                                            role="status">
                                                                            <span
                                                                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                                                            >Loading...</span
                                                                            >
                                                                        </div>
                                                                    </div>
                                                                )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>


                                    <div className='flex w-full gap-2 flex-wrap justify-center p-2'>
                                        <div className={`bg-[#3ed9ae] w-full sm:w-[300px] grid rounded-[20px] ${show3content ? "h-auto" : "h-[100px]"}`}>
                                            <div className='w-full'>
                                                <div className='flex justify-between w-full align-middle pl-[10px] pt-[17px] pr-[10px]'>
                                                    <div className='p-1 flex justify-center align-middle gap-1'>
                                                        <div className='p-1 rounded-[50%] bg-white w-[60px] h-[60px]'>

                                                            <AnimatedProgressProvider
                                                                valueStart={0}
                                                                valueEnd={Number(SpeakingScores && SpeakingScores.GrammaticalRangeandAccuracyScore) / 10 * 100}
                                                                duration={1.5}
                                                                easingFunction={easeQuadInOut}
                                                            // repeat
                                                            >
                                                                {value => {
                                                                    let roundedValue = Math.round(value);
                                                                    let mainNumber = String(roundedValue).split("").join(".");
                                                                    // console.log(mainNumber)
                                                                    return (
                                                                        <CircularProgressbar
                                                                            value={value}
                                                                            text={`${mainNumber}`}
                                                                            strokeWidth={12}

                                                                            styles={buildStyles({
                                                                                pathTransition: "none",
                                                                                //  textColor: "red",
                                                                                pathColor: "green",
                                                                                // trailColor: "gold"
                                                                            })}
                                                                        />
                                                                    );
                                                                }}
                                                            </AnimatedProgressProvider>
                                                        </div>
                                                        <p className='font-bold text-center m-auto text-[12px] text-white'>
                                                            Grammatical Range & Accuracy
                                                        </p>

                                                    </div>
                                                    <div className=' flex justify-center align-middle'>
                                                        <div className='rounded-[50%] m-auto bg-gray-50 w-[20px] h-[20px] '><span className="text-gray-950  font-bold cursor-pointer"
                                                            onClick={() => {
                                                                setShow3Content(!show3content);
                                                                setShow4Content(false)

                                                            }}
                                                        >
                                                            {
                                                                show3content ? <IoMdArrowDropup className='text-2xl translate-y-[-2px] translate-x-[-2px]' /> : <IoMdArrowDropdown className='text-2xl translate-x-[-2px]' />
                                                            }
                                                        </span></div>
                                                    </div>

                                                </div>
                                            </div>
                                            {
                                                show3content && (
                                                    <div className={`w-full flex justify-center align-middle bg-white text-black border-r-2 border-l-2 border-b-2 border-gray-300 p-2`}>

                                                        <div className='w-full bg-transparent  text-black p-2'>

                                                            <div className={`text-black w-full grid ${grammerMistakes[0] ? "justify-start" : "justify-center"}`}>
                                                                {grammerMistakes[0] ? (
                                                                    grammerMistakes.map((items, index) => {
                                                                        return (<div key={index} className={`flex w-full gap-3
                                                                  ${index == 0 && "text-[12px] font-bold mb-2"} 
                                                                  ${index != 0 && items.match(/\d/g) && "text-[17px] font-bold mt-2"} 
                                                                  ${items.slice(0, 13).match(/Overall/gi) && "text-[18px] font-bold mt-2"} 

                                                                  ${items.slice(0, 12).match(/Problem/gi) && "text-[14px] font-bold mt-2 text-red-400"}
                                                                  ${items.slice(0, 12).match(/Solution/gi) && "text-[14px] font-bold mt-2 text-green-400"}
                                                                  ${items.slice(0, 12).match(/Issue/gi) && "text-[14px] font-bold mt-2 text-red-400"}
                                                                  ${items.slice(0, 12).match(/correct/gi) && "text-[14px] font-bold mt-2 text-green-400"}
                                                                  ${items.slice(0, 12).match(/Possible/gi) && "text-[14px] font-bold mt-2 text-green-400"}
                                                                  
                                                                  `}

                                                                        >
                                                                            {
                                                                                items != " " && !items.match(/\d/g) && (
                                                                                    <div className={`*:
                                                                                ${index == 0 && "hidden"}
                                                                                ${items.match(/:/gi) && "hidden"}
                                                                                `}>
                                                                                        <div className={`rounded-[50%] bg-gray-700 translate-y-[4px] w-[10px] h-[10px] ${items == "  " && "bg-transparent ml-2 "}
                                                                                    `}>

                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                            {
                                                                                items
                                                                            }
                                                                        </div>)
                                                                    })
                                                                ) : (
                                                                    <div className='flex w-full h-full justify-center align-middle p-10'>
                                                                        <div
                                                                            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                                                            role="status">
                                                                            <span
                                                                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                                                            >Loading...</span
                                                                            >
                                                                        </div>
                                                                    </div>
                                                                )
                                                                }
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            }

                                        </div>


                                        <div className={`bg-purple-700 w-full sm:w-[300px] grid rounded-[20px] ${show4content ? "h-auto" : "h-[100px]"}`}>
                                            <div className='w-full'>
                                                <div className='flex justify-between w-full align-middle pl-[10px] pt-[17px] pr-[10px]'>
                                                    <div className='p-1 flex justify-center align-middle gap-1'>
                                                        <div className='p-1 rounded-[50%] bg-white w-[60px] h-[60px]'>

                                                            <AnimatedProgressProvider
                                                                valueStart={0}
                                                                valueEnd={Number(SpeakingScores && SpeakingScores.PronaunacationsScore) / 10 * 100}
                                                                duration={1.5}
                                                                easingFunction={easeQuadInOut}
                                                            // repeat
                                                            >
                                                                {value => {
                                                                    let roundedValue = Math.round(value);
                                                                    let mainNumber = String(roundedValue).split("").join(".");
                                                                    // console.log(mainNumber)
                                                                    return (
                                                                        <CircularProgressbar
                                                                            value={value}
                                                                            text={`${mainNumber}`}
                                                                            strokeWidth={12}

                                                                            styles={buildStyles({
                                                                                pathTransition: "none",
                                                                                //  textColor: "red",
                                                                                pathColor: "purple",

                                                                                // trailColor: "gold"
                                                                            })}
                                                                        />
                                                                    );
                                                                }}
                                                            </AnimatedProgressProvider>
                                                        </div>
                                                        <p className='font-bold text-center m-auto text-[14px] text-white'>
                                                            Pronunciation
                                                        </p>

                                                    </div>
                                                    <div className=' flex justify-center align-middle'>
                                                        <div className='rounded-[50%] m-auto bg-gray-50 w-[20px] h-[20px] '><span className="text-gray-950  font-bold cursor-pointer"
                                                            onClick={() => {
                                                                setShow4Content(!show4content);
                                                                setShow3Content(false);
                                                            }}
                                                        >
                                                            {
                                                                show4content ? <IoMdArrowDropup className='text-2xl translate-y-[-2px] translate-x-[-2px]' /> : <IoMdArrowDropdown className='text-2xl translate-x-[-2px]' />
                                                            }
                                                        </span></div>
                                                    </div>

                                                </div>
                                            </div>
                                            {
                                                show4content && (
                                                    <div className={`w-full flex justify-center align-middle bg-white text-black border-r-2 border-l-2 border-b-2 border-gray-300 p-2`}>

                                                        <div className='w-full bg-transparent  text-black text-center ma-to text-xl'>
                                                            {
                                                                pronaunicationStatement
                                                            }
                                                        </div>

                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                        {
                            changeTap == "suggession" && (<>
                                <div className='w-full sm:w-[670px] p-[10px] sm:p-[20px] bg-[#fafafa]'>
                                    <div className='m-3 p-3 rounded-[15px] bg-white shadow-md'>
                                        <strong className='text-[18px] text-black font-bold font-mono'>General Suggessions</strong>
                                        {
                                            SpeakingSummary == [] ? (
                                                <>

                                                    <div className='flex w-full h-full justify-center align-middle p-10'>
                                                        <div
                                                            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                                            role="status">
                                                            <span
                                                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                                            >Loading...</span
                                                            >
                                                        </div>
                                                    </div>
                                                </>) : (
                                                <>
                                                    <div className='flex gap-1 justify-start  pb-2 pt-0 pl-[18px] font-bold text-[14px] mt-2'>
                                                        <div className={`w-[18px] h-[18px] text-center `}>
                                                            <span className='p-1 rounded-[50%] bg-black'>
                                                            </span>
                                                        </div>
                                                        You should say minimum 3 sentences while answering a question.</div>

                                                    {
                                                        SpeakingSummary.map((items, index) => {

                                                            return (
                                                                <div key={index} className={`
                                                                ${(items == "") && "hidden"}
                                                                ${(items.trim() == ".") && "hidden"}
                                                                    ${items.charAt(3) == "," && "hidden"}
                                                                   ${items.match(/:/gi) && "text-[17px] font-bold"}
                                                                   ${!items.match(/:/gi) && "flex gap-1 justify-start  pb-2 pt-0 pl-[18px] font-bold text-[14px]"}
                                                                   `}>

                                                                    <div className={`
                                                                              ${(items == "") && "hidden"}
                                                                               ${(items.trim() == ".") && "hidden"}
                                                                               ${(items == " ") && "hidden"}
                                                                                 ${(items.trim() == "") && "hidden"}
                                                                                   ${items.match(/:/gi) && "hidden"}
                                                                               w-[18px] h-[18px] text-center `}>
                                                                        <span className='p-1 rounded-[50%] bg-black'>
                                                                        </span>
                                                                    </div>
                                                                    {
                                                                        items
                                                                    }

                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </>
                                            )
                                        }
                                    </div>

                                    <div className='m-3 p-3 rounded-[15px] bg-white shadow-md'>
                                        <div className='text-[18px] text-black font-bold mt-2 font-mono mb-3'>Section Wise Suggessions</div>
                                        {
                                            SpeakingImprovement[0] ? (<>
                                                {
                                                    SpeakingImprovement.map((items, index) => {
                                                        return (
                                                            <div key={index} className={`
                                                            ${index == 0 && "text-[16px] font-bold text-black translate-x-[-20px]"}
                                                            ${items.length <= 40 && "text-[18px] font-bold  mt-2 translate-x-[-20px]"}
                                                      "}
                                                      pt-1 pl-4 text-[14px] font-bold flex gap-4 justify-start   " `}>

                                                                {/* make Bullects into every points */}
                                                                <div className={`
                                                                   ${items.trim() == "" && "hidden"}
                                                                   ${index == 0 && "hidden"}
                                                                   ${items.slice(0, 20).match(/Fluency/g) && "hidden"}
                                                                   ${items.slice(0, 20).match(/Coherence/g) && "hidden"}
                                                                   ${items.slice(0, 20).match(/Lexical/g) && "hidden"}
                                                                   
                                                                   ${items.slice(0, 25).match(/Grammatical Range/g) && "hidden"}
       
                                                                   ${items.slice(0, 20).match(/Overall/g) && "hidden"}

                                                                          w-[18px] h-[18px] text-center `}>
                                                                    <span className='p-1 rounded-[50%] bg-black'>
                                                                    </span>
                                                                </div>
                                                                {
                                                                    items
                                                                }

                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>) : (
                                                <div className='flex w-full h-full justify-center align-middle p-10'>
                                                    <div
                                                        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                                        role="status">
                                                        <span
                                                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                                        >Loading...</span
                                                        >
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                            </>)
                        }
                        {
                            changeTap == "recording" && (<>
                                <ShowUserSpeechMainData />
                            </>)
                        }

                    </div>

                </div>
            </div>


            {/* for openLogIn & openSignUpPage connect with their states */}
            {
                openLogIn && (
                    <div style={{ transition: "3s ease-in-out " }}>
                        <LoginPage
                            openLogInPage={openLogInPage}
                            openSignUpPage={openSignUpPage}

                        />
                    </div>)
            }
            {
                forSignUpPage && (
                    <div style={{ transition: "3s ease-in-out " }}>
                        <SignUpPage
                            openSignUpPage={openSignUpPage}
                            openLogInPage={openLogInPage}
                        />
                    </div>)
            }




            {/* popup for showing to the user if they did not complete the above 10 tests------ */}
            {showLoginAlerttoTheUser && <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                <div className="min-h-screen py-3 sm:px-6 lg:px-8 px-6 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-xl pt-[40px] ">
                        <div className="mt-[40px] backGroundColorSetCss bg-sky-200 py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
                            <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                                onClick={() => { setshowLoginAlerttoTheUser(false) }}
                            >
                                X
                            </div>
                            <div className='pt-4'>
                                <div className='flex w-full justify-center m-auto gap-2 text-xl text-center font-bold'>
                                    Please Login if you want to save your data.
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            }
        </div >
    )
}
