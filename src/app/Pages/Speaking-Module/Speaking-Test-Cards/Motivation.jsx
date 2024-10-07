"use client"
import React, { useEffect, useState } from 'react';
import "../../LoginPage/SignUpPage.css";
import "./Motivation.css";
import { useRouter } from 'next/navigation';
import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';

import MotivationalImg from "../../../../assets/images/Speaking-Images/saveMotivationimg.png"
import motiveImg1 from "../../../../assets/images/Speaking-Images/backGroundImg1.gif"
import motiveImg2 from "../../../../assets/images/Speaking-Images/backGroundImg2.gif"
import motiveImg3 from "../../../../assets/images/Speaking-Images/backGroundImg3.gif"
import motiveImg4 from "../../../../assets/images/Speaking-Images/backGroundImg4.gif"
import motiveImg5 from "../../../../assets/images/Speaking-Images/backGroundImg5.gif"
import motiveImg6 from "../../../../assets/images/Speaking-Images/backGroundImg6.gif"
import motiveImg7 from "../../../../assets/images/Speaking-Images/backGroundImg7.gif"
import motiveImg8 from "../../../../assets/images/Speaking-Images/backGroundImg8.gif"
import motiveImg9 from "../../../../assets/images/Speaking-Images/backGroundImg9.gif"
import motiveImg10 from "../../../../assets/images/Speaking-Images/backGroundImg10.gif"
// end importing--->


let sectionName;
let testName;
let nextTextNo;
let TestWithSection;
let ieltsScors;

function Motivation({
    setopenCongressPopup,

    Test1Sec1,
    Test1Sec2,
    Test1Sec3, Test2Sec1,
    Test2Sec2,
    Test2Sec3, Test3Sec1,
    Test3Sec2,
    Test3Sec3, Test4Sec1,
    Test4Sec2,
    Test4Sec3, Test5Sec1,
    Test5Sec2,
    Test5Sec3, Test6Sec1,
    Test6Sec2,
    Test6Sec3, Test7Sec1,
    Test7Sec2,
    Test7Sec3, Test8Sec1,
    Test8Sec2,
    Test8Sec3, Test9Sec1,
    Test9Sec2,
    Test9Sec3, Test10Sec1,
    Test10Sec2,
    Test10Sec3, Test11Sec1,
    Test11Sec2,
    Test11Sec3, Test12Sec1,
    Test12Sec2,
    Test12Sec3, Test13Sec1,
    Test13Sec2,
    Test13Sec3, Test14Sec1,
    Test14Sec2,
    Test14Sec3, Test15Sec1,
    Test15Sec2,
    Test15Sec3, Test16Sec1,
    Test16Sec2,
    Test16Sec3, Test17Sec1,
    Test17Sec2,
    Test17Sec3, Test18Sec1,
    Test18Sec2,
    Test18Sec3, Test19Sec1,
    Test19Sec2,
    Test19Sec3, Test20Sec1,
    Test20Sec2,
    Test20Sec3 }) {
    const history = useRouter();
    const [SpeakingScores, setSpeakingScores] = useState("")



    //animation Images Array -----------
    let imagesAnimationsArry = [motiveImg1, motiveImg2, motiveImg3, motiveImg4, motiveImg5, motiveImg5, motiveImg6, motiveImg7, motiveImg8, motiveImg9, motiveImg10]



    const [makeAnimations, setMakeAnimations] = useState(true)

    const [storePersonalComment, setStorePersonalComment] = useState("")
    const [storeModivationalComment, setStoreMotivationalComment] = useState("")



    //personal Comment Arrays--------------
    //1st test-------
    let sec1CommentsArr = ["New personal best! You’re continuously improving.", "You’ve outdone yourself this time! Fantastic progress.", "Congratulations on your best score yet! Keep aiming higher."
    ]
    //2nd Test------------
    let sec2CommentsArr = ["Congratulations on completing your first test! The journey has just begun", "You’ve taken the first step towards success. Keep it up!", "Great start! Let’s build on this foundation and achieve more."
    ]
    //3nd Test-----------
    let sec3CommentsArr = ["You’ve completed a series of tests! Your commitment is impressive.", "Well done on completing this series! Your hard work is evident.", "You’re a star! Completing this series is a big achievement."
    ]

    //Motivations Arrays-------------
    //HighScores Motivations---------
    let HighScoresMotivationsArr = ["Outstanding performance! You’re really mastering this topic", "Amazing score! Your hard work is clearly paying off.", "You’re crushing it! Keep up the excellent work."
    ]

    //Medium Scores Motivations---------
    let MediumScoresMotivationsArr = ["Great effort! You’re making solid progress.", "Good job! You’re on the right track. Keep practicing.", "Nice work! A little more practice and you’ll be at the top"
    ]

    //Low Scores Motivations---------
    let LowScoresMotivationsArr = ["Don’t be discouraged! Every mistake is a learning opportunity.", "Keep at it! Improvement comes with practice.", "Believe in yourself! You’re capable of achieving great things."
    ]


    //use all useeffect here....
    useEffect(() => {
        // get user speaking scores from their localstorage...
        let SpeakingScores = localStorage.getItem("showSpeakingResult")
        let retriveJsonData = JSON.parse(SpeakingScores);
        setSpeakingScores(SpeakingScores && retriveJsonData);
        //make section name || get section number etc...

        setTimeout(() => {
            //section name
            TestWithSection = retriveJsonData.sectionNo
            // make ielts scores
            ieltsScors = retriveJsonData.ieltsResult

            sectionName = TestWithSection.substr(TestWithSection.length - 4);
            testName = TestWithSection.replace(sectionName, "");
            nextTextNo = testName.replace(/[^0-9]/g, '');
            console.log(nextTextNo)
        }, 500);


        //use animation in motivational popUp...
        setTimeout(() => {
            setMakeAnimations(false);
        }, 5000);
        setTimeout(() => {
            zoomAnimations();
            //use make commnet function here
            makeComments();
        }, 800);
    }, [])





    const zoomAnimations = () => {
        let element = document.getElementsByClassName('popup')[0]
        let classes = element.className;
        if (classes.indexOf('show') !== -1) {
            element.className = element.className.replace('show', '').replace(' ', '')
        } else {
            element.className += ' show'
        }
    }






    const makeComments = () => {
        console.log(sectionName)
        if (sectionName == "Sec1" || sectionName == "Sec2") {
            setStorePersonalComment(sec2CommentsArr[Math.floor(Math.random() * sec2CommentsArr.length)])
        } else if (sectionName == "Sec3") {
            setStorePersonalComment(sec3CommentsArr[Math.floor(Math.random() * sec3CommentsArr.length)])
        }


        //make Motivation depent on scores----------
        if (ieltsScors <= 4) {
            setStoreMotivationalComment(LowScoresMotivationsArr[Math.floor(Math.random() * LowScoresMotivationsArr.length)])
        } else if (ieltsScors <= 5.5) {
            setStoreMotivationalComment(MediumScoresMotivationsArr[Math.floor(Math.random() * MediumScoresMotivationsArr.length)])
        }
        else if (ieltsScors >= 6) {
            setStoreMotivationalComment(HighScoresMotivationsArr[Math.floor(Math.random() * HighScoresMotivationsArr.length)])
        }

        // retriveJsonData.ieltsResult Starter

    }


    const handleCountinueWithPayment = () => {
        if (TestWithSection == "Test1Sec1") {
            Test1Sec2()
        } else if (TestWithSection == "Test1Sec2") {
            Test1Sec3()
        } else if (TestWithSection == "Test1Sec3") {
            Test2Sec1()
        }
        // test-2
        else if (TestWithSection == "Test2Sec1") {
            Test2Sec2()
        } else if (TestWithSection == "Test2Sec2") {
            Test2Sec3()
        } else if (TestWithSection == "Test2Sec3") {
            Test3Sec1()
        }
        //test-3
        else if (TestWithSection == "Test3Sec1") {
            Test3Sec2()
        } else if (TestWithSection == "Test3Sec2") {
            Test3Sec3()
        } else if (TestWithSection == "Test3Sec3") {
            Test4Sec1()
        }
        //test-4
        else if (TestWithSection == "Test4Sec1") {
            Test4Sec2()
        } else if (TestWithSection == "Test4Sec2") {
            Test4Sec3()
        } else if (TestWithSection == "Test4Sec3") {
            Test5Sec1()
        }
        //test-5
        else if (TestWithSection == "Test5Sec1") {
            Test5Sec2()
        } else if (TestWithSection == "Test5Sec2") {
            Test5Sec3()
        } else if (TestWithSection == "Test5Sec3") {
            Test5Sec1()
        }

        //test-6
        else if (TestWithSection == "Test6Sec1") {
            Test6Sec2()
        } else if (TestWithSection == "Test6Sec2") {
            Test6Sec3()
        } else if (TestWithSection == "Test6Sec3") {
            Test6Sec1()
        }

        //test-7
        else if (TestWithSection == "Test7Sec1") {
            Test7Sec2()
        } else if (TestWithSection == "Test7Sec2") {
            Test7Sec3()
        } else if (TestWithSection == "Test7Sec3") {
            Test7Sec1()
        }
        //test-8
        else if (TestWithSection == "Test8Sec1") {
            Test8Sec2()
        } else if (TestWithSection == "Test8Sec2") {
            Test8Sec3()
        } else if (TestWithSection == "Test8Sec3") {
            Test8Sec1()
        }
        //test-9
        else if (TestWithSection == "Test9Sec1") {
            Test9Sec2()
        } else if (TestWithSection == "Test9Sec2") {
            Test9Sec3()
        } else if (TestWithSection == "Test9Sec3") {
            Test9Sec1()
        }

        //test-10
        else if (TestWithSection == "Test10Sec1") {
            Test10Sec2()
        } else if (TestWithSection == "Test10Sec2") {
            Test10Sec3()
        } else if (TestWithSection == "Test10Sec3") {
            Test10Sec1()
        }
        //test-11
        else if (TestWithSection == "Test11Sec1") {
            Test11Sec2()
        } else if (TestWithSection == "Test11Sec2") {
            Test11Sec3()
        } else if (TestWithSection == "Test11Sec3") {
            Test11Sec1()
        }

        //test-12
        else if (TestWithSection == "Test12Sec1") {
            Test12Sec2()
        } else if (TestWithSection == "Test12Sec2") {
            Test12Sec3()
        } else if (TestWithSection == "Test12Sec3") {
            Test12Sec1()
        }

        //test-13
        else if (TestWithSection == "Test13Sec1") {
            Test13Sec2()
        } else if (TestWithSection == "Test13Sec2") {
            Test13Sec3()
        } else if (TestWithSection == "Test13Sec3") {
            Test13Sec1()
        }

        //test-14
        else if (TestWithSection == "Test14Sec1") {
            Test14Sec2()
        } else if (TestWithSection == "Test14Sec2") {
            Test14Sec3()
        } else if (TestWithSection == "Test14Sec3") {
            Test14Sec1()
        }

        //test-15
        else if (TestWithSection == "Test15Sec1") {
            Test15Sec2()
        } else if (TestWithSection == "Test15Sec2") {
            Test15Sec3()
        } else if (TestWithSection == "Test15Sec3") {
            Test15Sec1()
        }


        //test-16
        else if (TestWithSection == "Test16Sec1") {
            Test16Sec2()
        } else if (TestWithSection == "Test16Sec2") {
            Test16Sec3()
        } else if (TestWithSection == "Test16Sec3") {
            Test16Sec1()
        }

        //test-17
        else if (TestWithSection == "Test17Sec1") {
            Test17Sec2()
        } else if (TestWithSection == "Test17Sec2") {
            Test17Sec3()
        } else if (TestWithSection == "Test17Sec3") {
            Test17Sec1()
        }
        //test-18
        else if (TestWithSection == "Test18Sec1") {
            Test18Sec2()
        } else if (TestWithSection == "Test18Sec2") {
            Test18Sec3()
        } else if (TestWithSection == "Test18Sec3") {
            Test18Sec1()
        }


        //test-19
        else if (TestWithSection == "Test19Sec1") {
            Test19Sec2()
        } else if (TestWithSection == "Test19Sec2") {
            Test19Sec3()
        } else if (TestWithSection == "Test19Sec3") {
            Test19Sec1()
        }

        //test-20
        else if (TestWithSection == "Test20Sec1") {
            Test20Sec2()
        } else if (TestWithSection == "Test20Sec2") {
            Test20Sec3()
        } else if (TestWithSection == "Test20Sec3") {
            Test20Sec1()
        }

    }

    const handleRetakeTestFunc = () => {
        if (TestWithSection == "Test1Sec1") {
            Test1Sec1()
        } else if (TestWithSection == "Test1Sec2") {
            Test1Sec2()
        } else if (TestWithSection == "Test1Sec3") {
            Test1Sec3()
        }
        // test-2
        else if (TestWithSection == "Test2Sec1") {
            Test2Sec1()
        } else if (TestWithSection == "Test2Sec2") {
            Test2Sec2()
        } else if (TestWithSection == "Test2Sec3") {
            Test2Sec3()
        }
        //test-3
        else if (TestWithSection == "Test3Sec1") {
            Test3Sec1()
        } else if (TestWithSection == "Test3Sec2") {
            Test3Sec2()
        } else if (TestWithSection == "Test3Sec3") {
            Test3Sec3()
        }
        //test-4
        else if (TestWithSection == "Test4Sec1") {
            Test4Sec1()
        } else if (TestWithSection == "Test4Sec2") {
            Test4Sec2()
        } else if (TestWithSection == "Test4Sec3") {
            Test4Sec3()
        }
        //test-5
        else if (TestWithSection == "Test5Sec1") {
            Test5Sec1()
        } else if (TestWithSection == "Test5Sec2") {
            Test5Sec2()
        } else if (TestWithSection == "Test5Sec3") {
            Test5Sec3()
        }

        //test-6
        else if (TestWithSection == "Test6Sec1") {
            Test6Sec1()
        } else if (TestWithSection == "Test6Sec2") {
            Test6Sec2()
        } else if (TestWithSection == "Test6Sec3") {
            Test6Sec3()
        }

        //test-7
        else if (TestWithSection == "Test7Sec1") {
            Test7Sec1()
        } else if (TestWithSection == "Test7Sec2") {
            Test7Sec2()
        } else if (TestWithSection == "Test7Sec3") {
            Test7Sec3()
        }
        //test-8
        else if (TestWithSection == "Test8Sec1") {
            Test8Sec1()
        } else if (TestWithSection == "Test8Sec2") {
            Test8Sec2()
        } else if (TestWithSection == "Test8Sec3") {
            Test8Sec3()
        }
        //test-9
        else if (TestWithSection == "Test9Sec1") {
            Test9Sec1()
        } else if (TestWithSection == "Test9Sec2") {
            Test9Sec2()
        } else if (TestWithSection == "Test9Sec3") {
            Test9Sec3()
        }

        //test-10
        else if (TestWithSection == "Test10Sec1") {
            Test10Sec1()
        } else if (TestWithSection == "Test10Sec2") {
            Test10Sec2()
        } else if (TestWithSection == "Test10Sec3") {
            Test10Sec3()
        }
        //test-11
        else if (TestWithSection == "Test11Sec1") {
            Test11Sec1()
        } else if (TestWithSection == "Test11Sec2") {
            Test11Sec2()
        } else if (TestWithSection == "Test11Sec3") {
            Test11Sec3()
        }

        //test-12
        else if (TestWithSection == "Test12Sec1") {
            Test12Sec1()
        } else if (TestWithSection == "Test12Sec2") {
            Test12Sec2()
        } else if (TestWithSection == "Test12Sec3") {
            Test12Sec3()
        }

        //test-13
        else if (TestWithSection == "Test13Sec1") {
            Test13Sec1()
        } else if (TestWithSection == "Test13Sec2") {
            Test13Sec2()
        } else if (TestWithSection == "Test13Sec3") {
            Test13Sec3()
        }

        //test-14
        else if (TestWithSection == "Test14Sec1") {
            Test14Sec1()
        } else if (TestWithSection == "Test14Sec2") {
            Test14Sec2()
        } else if (TestWithSection == "Test14Sec3") {
            Test14Sec3()
        }

        //test-15
        else if (TestWithSection == "Test15Sec1") {
            Test15Sec1()
        } else if (TestWithSection == "Test15Sec2") {
            Test15Sec2()
        } else if (TestWithSection == "Test15Sec3") {
            Test15Sec3()
        }


        //test-16
        else if (TestWithSection == "Test16Sec1") {
            Test16Sec1()
        } else if (TestWithSection == "Test16Sec2") {
            Test16Sec2()
        } else if (TestWithSection == "Test16Sec3") {
            Test16Sec3()
        }

        //test-17
        else if (TestWithSection == "Test17Sec1") {
            Test17Sec1()
        } else if (TestWithSection == "Test17Sec2") {
            Test17Sec2()
        } else if (TestWithSection == "Test17Sec3") {
            Test17Sec3()
        }
        //test-18
        else if (TestWithSection == "Test18Sec1") {
            Test18Sec1()
        } else if (TestWithSection == "Test18Sec2") {
            Test18Sec2()
        } else if (TestWithSection == "Test18Sec3") {
            Test18Sec3()
        }


        //test-19
        else if (TestWithSection == "Test19Sec1") {
            Test19Sec1()
        } else if (TestWithSection == "Test19Sec2") {
            Test19Sec2()
        } else if (TestWithSection == "Test19Sec3") {
            Test19Sec3()
        }

        //test-20
        else if (TestWithSection == "Test20Sec1") {
            Test20Sec1()
        } else if (TestWithSection == "Test20Sec2") {
            Test20Sec2()
        } else if (TestWithSection == "Test20Sec3") {
            Test20Sec3()
        }

    }

    return (
        <>
            <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                <div className="min-h-screen  lg:px-8 px-6 relative">
                    <div className='absolute top-0 left-0 right-0 bottom-0 z-[-10]'>

                        {
                            makeAnimations && (
                                <Image src={imagesAnimationsArry[Math.floor(Math.random() * imagesAnimationsArry.length)]} alt="motivational Animation celevrate" className='w-full h-full opacity-40' />
                            )
                        }
                    </div>

                    <div className="sm:mx-auto sm:w-full sm:max-w-md  relative ">
                        <div className="popup">

                            <div className='relative top-0 left-0 bottom-0 right-0'>
                                <div className='absolute top-2 text-center font-bold right-4 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300 z-[10000]'
                                    onClick={() => {
                                        localStorage.removeItem("forSpeakingMotivation");
                                        setopenCongressPopup(false);
                                    }}
                                >
                                    X
                                </div>
                                <div className='p-3 relative'>
                                    <Image src={MotivationalImg} alt="" className='w-full mt-3 rounded-[15px]' />
                                    <div className='absolute top-0 left-0 right-0 bottom-0 z-[-10]'>
                                    </div>
                                </div>
                                <div className='text-center font-bold text-3xl mb-1 congratulateText text-green-600'>Congratulation!</div>
                                <p className='text-center text-xl font-bold mb-2'>{storeModivationalComment}</p>

                                {
                                    sectionName != "Sec3" && <p className='text-center'>Try the next section of  <span className='text-xl font-bold'>{testName}</span></p>

                                }
                                {
                                    sectionName == "Sec3" && <p className='text-center'>Try the Test <span className='text-2xl font-bold ml-1 mr-1'>{Number(nextTextNo) + 1}</span> for more Improvement</p>

                                } <br />

                                <div className='w-full flex justify-center align-middle pb-3'>
                                    <button className='w-[50%]  m-auto p-2 rounded-[25px] font-bold border-2 border-green-400 hover:bg-green-400 text-green-500 hover:text-gray-100 relative'
                                        onClick={() => {
                                            localStorage.removeItem("forSpeakingMotivation");
                                            setopenCongressPopup(false);
                                            handleCountinueWithPayment();
                                        }

                                        } >Next Test
                                        <FaAngleRight className='absolute top-2 translate-y-[1px] right-3 text-xl' />

                                    </button>
                                </div>
                                <div className='w-full flex justify-center align-middle pb-3'>
                                    <button className='w-[50%]  m-auto p-2 rounded-[25px] font-bold border-2 border-green-400 hover:bg-green-400 text-green-500 hover:text-gray-100 relative'
                                        onClick={() => {
                                            localStorage.removeItem("forSpeakingMotivation");
                                            setopenCongressPopup(false);
                                            handleRetakeTestFunc();
                                        }

                                        } >Try Again
                                        <FaAngleRight className='absolute top-2 translate-y-[1px] right-3 text-xl' />

                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Motivation;