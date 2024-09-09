"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStateContext } from "../../../../../../contexts/ContextProvider";
import Axios from 'axios';
import { GET_EXPLANATIONS_USER_DATA_FOR_CHECK_WITH_CONDITIONS, POST_EXPLANATIONS_DATA_FOR_STORE_INTO_DATABASE } from '../../../../../../assets/URL\'s/AllUrl';
// end importing--->



function ExplanationsPopup() {
    const { setExplainRLQuestions, explainObjForRL, userPaymentStatusCheck } = useStateContext();
    const history = useRouter();

    //defined all localstorage into a single variables----
    const [userEmail, setuserEmail] = useState("")
    const [userName, setuserName] = useState("");
    const [userMainToken, setuserMainToken] = useState("")

    let explainArry = explainObjForRL.explain.split("**");

    //all states will be below---
    const [loadingState, setLoadingState] = useState(true);


    useEffect(() => {
        //storing all localstorage data to states....
        setuserEmail(localStorage.getItem('userEmail'));
        setuserName(localStorage.getItem("userName"));
        setuserMainToken(localStorage.getItem("loginTOken"));
    }, [])



    useEffect(() => {
        if (userEmail) {
            Axios({
                method: "get",
                // url: 'http://localhost:8080/api/user/Get-Request-for-Get-user-Explanation-data/' + userEmail,
                url: GET_EXPLANATIONS_USER_DATA_FOR_CHECK_WITH_CONDITIONS + userEmail,
                headers: {
                    "Authorization": `Bearer ${userMainToken}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    console.log(res.data);
                    if (res.data.data[0]) {
                        //if user have 10 explanation data in that case check the conditions that user have paid or not
                        //if less than 10 data so, user will have access to get 10 time get explanation--
                        if (res.data.data[9]) {
                            if (userPaymentStatusCheck == "") {
                                history.push("/Payment-billing-information-page")
                            } else {
                                changeColorsOfTextFunc();
                                setLoadingState(false)
                            }

                        } else {
                            postRequestFunc();
                            changeColorsOfTextFunc();
                            setLoadingState(false)
                        }
                    } else {
                        postRequestFunc();
                        changeColorsOfTextFunc();
                        setLoadingState(false)
                    }

                })
                .catch((e) => {
                    console.log(e);
                    alert(`!oops sorry for this ${e.message} please try again letter`);
                    setExplainRLQuestions(false)
                });




        } else {
            alert("You have to login first for seeing  your free 10  explanations..");
            //close the popUp by making this state false----
            setExplainRLQuestions(false)
        }

    }, [])







    const postRequestFunc = () => {
        Axios({
            method: "post",
            url: POST_EXPLANATIONS_DATA_FOR_STORE_INTO_DATABASE,
            // url: "http://localhost:8080/api/user/PostRequestion-For-Store-user-Explanaion-data",
            data: {
                "userName": userName,
                "userEmail": userEmail,
                "explanationData": "R-L-Explanation-num-" + explainObjForRL.number,
            },
        })
            .then((res) => { console.log(res); })
            .catch((e) => { console.log(e) })
    }


    const changeColorsOfTextFunc = () => {
        // function for showing the user data as a String
        setTimeout(() => {
            let makeWordForChangeColor = explainObjForRL.hiddenWord ? explainObjForRL.hiddenWord : explainObjForRL.mainAns;
            let makeWordForChangeColor2 = explainObjForRL.hiddenWord2 ? explainObjForRL.hiddenWord2 : "``````````````````";
            let makeWordForChangeColor3 = explainObjForRL.hiddenWord3 ? explainObjForRL.hiddenWord3 : "````````````````````````"
            var p2 = document.getElementById("properWord"),
                keys2 = [makeWordForChangeColor, makeWordForChangeColor2, makeWordForChangeColor3];
            keys2.map((items) => {
                p2.innerHTML = p2.innerHTML.replace(new RegExp("\\b" + items + "\\b", "g"), "<span style='color:green;font-weight:900; font-size:17px; margin-right:1px;  text-decoration-line: underline;'>" + items + "</span>")
            })

        }, 1000);
    }


    return (
        <>
            <div className='fixed top-0  left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
                <div class="min-h-screen py-1 sm:px-6 lg:px-8 px-6 ">
                    <div class="sm:mx-auto sm:w-full sm:max-w-xl pt-[20px] sm:pt-[0px] h-[600px] sm:h-auto overflow-auto">
                        <div class="mt-[20px] backGroundColorSetCss py-10 px-4 shadow sm:rounded-lg sm:px-10 relative">
                            <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                                onClick={() => { setExplainRLQuestions(false) }}
                            >
                                X
                            </div>

                            {
                                loadingState ? (<div className='flex w-full h-full justify-center align-middle p-10'>
                                    <div
                                        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                                        role="status">
                                        <span
                                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                        >Loading...</span
                                        >
                                    </div>
                                </div>) : (
                                    <div className='pt-4'>
                                        <div className='flex gap-2 text-green-400 font-bold'>
                                            <div className='w-[25px] h-[25px] text-[12px] font-bold pt-[3px] rounded-[50%] bg-black text-white text-center'>{
                                                explainObjForRL.number
                                            }</div>
                                            {
                                                explainObjForRL.Ans1 != "" ? <p className='text-green-400 font-bold'>{explainObjForRL.Ans1}</p> : ""
                                            }
                                            {
                                                explainObjForRL.mainAns
                                            }
                                        </div>
                                        {
                                            explainObjForRL.keyWords != "" && <>

                                                <span className='mr-2 text-xl font-bold underline'>Keywords:</span>
                                                {explainObjForRL.keyWords}

                                            </>
                                        }
                                        <br />
                                        <div id='properWord'>
                                            <div className=' font-bold'>
                                                <span className='font-bold text-lg sm:text-xl underline mr-2'>Explanation:</span>
                                                {
                                                    explainArry[0]
                                                }
                                            </div>
                                            <div className=' font-bold mt-2 ' >
                                                {
                                                    explainArry[1] && explainArry[1]
                                                }
                                            </div>
                                            <div className=' font-bold mt-2 text-center'>
                                                {
                                                    explainArry[2] && explainArry[2]
                                                }
                                            </div>
                                            <div className=' font-bold mt-2 text-center'>
                                                {
                                                    explainArry[3] && explainArry[3]
                                                }
                                            </div>
                                            <div className=' font-bold mt-2 text-center'>
                                                {
                                                    explainArry[4] && explainArry[4]
                                                }
                                            </div>
                                            <div className=' font-bold mt-2 text-center'>
                                                {
                                                    explainArry[5] && explainArry[5]
                                                }
                                            </div>

                                        </div>
                                    </div>
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ExplanationsPopup


