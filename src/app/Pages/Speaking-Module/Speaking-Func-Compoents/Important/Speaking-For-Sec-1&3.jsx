"use client"
import React, { useEffect, useState, useRef } from "react";
import "../allStyle/ClickSpeaking.css";
import { isMobile } from "react-device-detect";
import { BiWifiOff } from "react-icons/bi";
import { FcBusinesswoman } from "react-icons/fc";
import { GiOldMicrophone } from "react-icons/gi";
import Image from "next/image";
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
import hark from "hark";
import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { ClockLoader } from "react-spinners";
import { useRouter } from 'next/navigation';
import PermissionDenieP from "../Pages/PermissionDenieP.jsx";

import audioPlaySound from "../../../../../assets/Audios/playAudioForSpeaking.wav"
import { CheckPaymentStatus } from "../../../Payments/CkeckPayment/CheckPayments.js";
import { useStateContext } from "../../../../../contexts/ContextProvider";
import { localeCompare } from "../Pages/CompareFunction.js"

import { SPEAKING_POST_FOR_SET_SCORES, SPEAKING_POST_TO_GET_RESPONSE_USERDATA } from "../../../../../assets/URL's/AllUrl.js";
import { StepShowFunction } from "../Pages/StepShowFunction.js";
import AnswerSelectCom from "../Pages/AnswerSelectCom.js";
import ShowTestName from "../Pages/ShowTestName.jsx";

//Sec-1 & Sec-3 importing.....
import { Test1Sec1 } from "./Tests/Test-1/Sec-1";
import { Test1Sec3 } from "./Tests/Test-1/sec-3";
import { Test2Sec1 } from "./Tests/Test-2/Sec-1";
import { Test2Sec3 } from "./Tests/Test-2/Sec-3";
import { Test3Sec1 } from "./Tests/Test-3/Sec-1";
import { Test3Sec3 } from "./Tests/Test-3/Sec-3";
import { Test4Sec1 } from "./Tests/Test-4/Sec-1";
import { Test4Sec3 } from "./Tests/Test-4/Sec-3";
import { Test5Sec1 } from "./Tests/Test-5/Sec-1";
import { Test5Sec3 } from "./Tests/Test-5/Sec-3";
import { Test6Sec1 } from "./Tests/Test-6/Sec-1";
import { Test6Sec3 } from "./Tests/Test-6/Sec-3";
import { Test7Sec1 } from "./Tests/Test-7/Sec-1";
import { Test7Sec3 } from "./Tests/Test-7/Sec-3";
import { Test8Sec1 } from "./Tests/Test-8/Sec-1";
import { Test8Sec3 } from "./Tests/Test-8/Sec-3";
import { Test9Sec1 } from "./Tests/Test-9/Sec-1";
import { Test9Sec3 } from "./Tests/Test-9/Sec-3";
import { Test10Sec1 } from "./Tests/Test-10/Sec-1";
import { Test10Sec3 } from "./Tests/Test-10/Sec-3";
import { Test11Sec1 } from "./Tests/Test-11/Sec-1";
import { Test11Sec3 } from "./Tests/Test-11/Sec-3";
import { Test12Sec1 } from "./Tests/Test-12/Sec-1";
import { Test12Sec3 } from "./Tests/Test-12/Sec-3";
import { Test13Sec1 } from "./Tests/Test-13/Sec-1";
import { Test13Sec3 } from "./Tests/Test-13/Sec-3";
import { Test14Sec1 } from "./Tests/Test-14/Sec-1";
import { Test14Sec3 } from "./Tests/Test-14/Sec-3";
import { Test15Sec1 } from "./Tests/Test-15/Sec-1";
import { Test15Sec3 } from "./Tests/Test-15/Sec-3";
import { Test16Sec1 } from "./Tests/Test-16/Sec-1";
import { Test16Sec3 } from "./Tests/Test-16/Sec-3";
import { Test17Sec1 } from "./Tests/Test-17/Sec-1";
import { Test17Sec3 } from "./Tests/Test-17/Sec-3";
import { Test18Sec1 } from "./Tests/Test-18/Sec-1";
import { Test18Sec3 } from "./Tests/Test-18/Sec-3";
import { Test19Sec1 } from "./Tests/Test-19/Sec-1";
import { Test19Sec3 } from "./Tests/Test-19/Sec-3";
import { Test20Sec1 } from "./Tests/Test-20/Sec-1";
import { Test20Sec3 } from "./Tests/Test-20/Sec-3";


// End of the importing==========================================


var SpeechSDK;
var synthesizer;
var player;
var firstplay = true;
let stream;
var timeoutHandle = null;
let initialFlag = false;
var timeoutSpeechBreak;
var StopPlay;

//below variable for collect user times that he/she gave into their answer
var collectUserTime;
let checkPunctuationStatus = 1;
let checkStatusForSpeechMethod = false;


var globalSpeakingState = ''
async function Initialize(onComplete) {
    initialFlag = true;
    if (!!window.SpeechSDK) {
        await onComplete(window.SpeechSDK);
        initialFlag = false;
        console.log("Speaking-loader-complite")
    } else {
        initialFlag = false;
        console.log("Speakin-loader-not-complite");
    }
}
var startSynthesisAsyncButton;
startSynthesisAsyncButton = document.getElementById("startSynthesisAsyncButton");
Initialize(function (speechSdk) {
    SpeechSDK = speechSdk;
});


//indexedDB database creating....
let windowIndexedDB;
const createCollectionsInIndexesDB = () => {
    //connect the indexDB for storing data -----------------------
    //prefixes of implementation that we want to test
    windowIndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    //prefixes of window.IDB objects
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

    if (!windowIndexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }

    // var db;
    var request = windowIndexedDB.open("newDatabase", 2);

    request.onerror = function (event) {
        console.log("error: ", event);
    };

    request.onupgradeneeded = function (event) {
        var db = request.result;
        // var objectStore = db.createObjectStore("employee", {
        //     keyPath: "id"
        // });
        if (!db.objectStoreNames.contains("userData")) {
            db.createObjectStore("userData", {
                keyPath: "ID",
            }
            )
        }
        if (!db.objectStoreNames.contains("userSpeech")) {
            db.createObjectStore("userSpeech", {
                keyPath: "ID",
            }
            )
        }
        if (!db.objectStoreNames.contains("showDataInResult")) {
            db.createObjectStore("showDataInResult", {
                keyPath: "ID",
            }
            )
        }

    }
    request.onsuccess = function (event) {
        console.log("success Database created... ");
    };

}






//for ielts scores----
let ieltswordscore = 0;
// Examiner audio Satrt


//Exeminar speaking process start

//user SpeechTimeCollect --
let collectUserSpeechTime = 0;

//user Speech Words Collect
let userEveryAnsCount = 0;


// Function to convert audio blob to base64 encoded string in mobile version....
const audioBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            const base64Audio = btoa(
                new Uint8Array(arrayBuffer).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            );
            resolve(base64Audio);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
};








// const msg = new SpeechSynthesisUtterance();
// msg.rate = .8;
var recordedText = "";
var doubleNotSpeaking = true;
var converstionSteps = 0;
var converstionStepsText = "";
var recordControlFlag = false;
var smallTalkWarningIndex = 0;
var spokenText = '';


function ClickSpeaking({ testNo, setPassComment, setWaveTit }) {
    const { bdPaidStatus, otherPaidStatus, setShoeSpeakingResult, speakingStepsNo, setSpeakingStepNo } = useStateContext();
    const history = useRouter();

    //all localstorages data storing into states...........
    const [userMainToken, setuserMainToken] = useState("");
    const [userEmail, setuserEmail] = useState("")
    const [userName, setuserName] = useState("");
    const [userSpeakingTestNo, setuserSpeakingTestNo] = useState()



    //other states...
    const [playAudio, setPlayAudio] = useState("");
    const [checkNetWorkStstus, setCheckNetworkStatus] = useState(false);
    const [sampleAns, setSampleAns] = useState([]);

    const [SQuestion, setSQuestion] = useState("");
    const [makeWave, setMakeWave] = useState(false);

    const [showWave, setShowWave] = useState(false);
    const [isIconClicked, setIsIconClicked] = useState(false);
    const [showPerPopUp, setShowPerPopUp] = useState(false);
    const [NeedTips, setNeedTips] = useState(true);
    // const [notAnswering, setNotAnswering] = useState(false);    
    const [isloading, setisloading] = useState(false);
    const [SpeakingState, setSpeakingState] = useState("Play for start..");
    const [forQuestionHide, setForQuestionHide] = useState(true);

    //storing user Speech Ans data 
    let storeUserSpeechAns = "";
    //stroring steps question ok background color----------
    let storeQuesStepOkArray = [];

    const [StepNumbers, setStepNumbers] = useState(0);
    const [showStepOk, setShowStepOk] = useState([]);


    //speaking-user-speech-recognation with OpenAI keys--------states
    const [isRecording, setIsRecording] = useState(false);
    const [transcriptTextbyOpenAi, settranscriptTextbyOpenAi] = useState("");
    const [showApiKeyModal, setShowApiKeyModal] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const googleAPIKey = "AIzaSyDVksTONkieWNhplzhmpXTHCsYrjdDh1Mc";

    //end of the declareing ariables............................




    if (!googleAPIKey) {
        throw new Error("REACT_APP_GOOGLE_API_KEY not found in the environment");
    }

    // check the Payment status that user has the permission to access this page or not
    CheckPaymentStatus();



    //important...................
    //call this useeffect if user wants to go other pages 
    //in that case stopping all media recorders & stop the conversation...  
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (event) {
                stopRecording();
                // alert("asdaj")
            }
        };

        // Listen for beforeunload events
        window.addEventListener('beforeunload', handleBeforeUnload);


        // Function to intercept link clicks
        const interceptLinks = () => {
            const links = document.querySelectorAll('a'); // Select all anchor tags
            links.forEach((link) => {
                const originalHref = link.getAttribute('href'); // Store the original href
                link.addEventListener('click', (e) => {
                    stopRecording()
                });
            });
        };

        interceptLinks(); // Call the function to add listeners to links

        return () => {
            // Cleanup the event listeners on component unmount
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [history]);


    //in back button off all recordings...
    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state) {
                // alert("asdaj")
                stopRecording()
            }
        };

        // Listen for popstate event (triggered by back/forward buttons)
        window.addEventListener('popstate', handlePopState);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [history]);











    //important.............added indexedDB , storing all local-Data to states
    //& call localcompare function for check user has paid or not..
    useEffect(() => {
        //collect all user localstorage data...
        setuserMainToken(localStorage.getItem("loginTOken"))
        setuserEmail(localStorage.getItem('userEmail'));
        setuserName(localStorage.getItem("userName"));
        setuserSpeakingTestNo(localStorage.getItem("SpeakingTestNo"));


        createCollectionsInIndexesDB();
        //function below is for how many collecting the numbers of a test that how many questions exist 
        // into that test
        StepShowFunction(setSpeakingStepNo, testNo);

        setTimeout(() => {
            //call the function below for check those status
            localeCompare(testNo, bdPaidStatus, otherPaidStatus, history);
        }, 1000);
    }, [])



    //use media-Recoder-npm-Package for convert the audio into base64 and save that into indexedDB as a localData
    const {
        startRecording: customStartRecordingForGetuserAudioData,
        stopRecording: customStopRecordingForGetuserAudioData,
        mediaBlobUrl
    } = useReactMediaRecorder({
        audio: true,
        onStop: (blobUrl, blob) => {
            // You can send the blob or convert it here
            sendRecording(blob)
        }
    });


    //speaking-user-speech-recognation with OpenAI keys start function for mobile version
    const startRecording = async () => {
        console.log("hellow i am runne-----------------------------------------------------------")
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                    // console.log(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                console.log("stopped...")
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: isSafari ? "audio/mp4" : "audio/mp3",
                });
                sendAudioToWhisperAPI(audioBlob);
                audioChunksRef.current = [];
                stream.getTracks() // get all tracks from the MediaStream
                    .forEach(track => track.stop()); // stop each of them
                mediaRecorderRef.current = null
            };

            let timermain = mediaRecorderRef.current.start(isSafari ? 1000 : 0);
            console.log(timermain)
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };
    //speaking-user-speech-recognation with OpenAI keys Stop function
    const stopRecordingForOpenAIMethod = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
    };
    //speaking-user-speech-recognation with OpenAI keys send data to the wisper---------
    const sendAudioToWhisperAPI = async (audioBlob) => {
        console.log(audioBlob)
        const formData = new FormData();
        formData.append("file", audioBlob, `audio.mp3`);
        formData.append("model", "whisper-1");
        const base64Audio = await audioBlobToBase64(audioBlob);
        console.log(base64Audio)
        try {
            const response = await axios.post(
                `https://speech.googleapis.com/v1/speech:recognize?key=${googleAPIKey}`,
                {
                    config: {
                        encoding: 'WEBM_OPUS',
                        sampleRateHertz: 48000,
                        languageCode: 'en-US',
                        // enableAutomaticPunctuation: true,
                    },
                    audio: {
                        content: base64Audio,
                    },
                }
            );
            console.log(response)


            //console.log('API response:', response);
            // console.log('Time taken (ms):', elapsedTime);

            // const data = await response.json();

            if (response.data.results) {
                response.data.results.map((mainData) => {
                    if (mainData.alternatives[0].transcript) {
                        console.log(mainData.alternatives[0].transcript)
                        settranscriptTextbyOpenAi((res) => res + mainData.alternatives[0].transcript + " " + " ");
                    }
                })

            }
        } catch (error) {
            console.error("Error transcribing audio:", error);
        }
    };

    const {
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    window.resetTranscriptG = resetTranscript;
    const startListening = () => SpeechRecognition.startListening({
        continuous: true,
        language: 'en-US'
    });
    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    function stsrSpeechRec() {
        record();
        //for getting user audio ...
        customStartRecordingForGetuserAudioData()
        //remove this Question Steps color--when user start the conversation 
        setShoeSpeakingResult([])
        //if users is not in mobile in that case this package will be called && inisialized
        if (isMobile) {
            //start OpenAi speech recognation by function below
            // alert("mobile...")
            // startRecording();
        } else {
            // alert("mobile...not")
            startListening();
        }
    }







    // the variable of the below for storing all user Speech into this variable for showing to the user into the database for making the UI;
    var userSpeechMainData = "";

    let smallTalkWarningSentence = ['Please dont answer in short sentence. It will reduce your score. I am repeating the question. ', 'Again dont    answer   the in short. Asking again.', 'Man you are doing it again']





    //Function to convert audio blob to base64 encoded string  for saving data to indexedDB....
    const sendRecording = async (audioData) => {
        console.log("Result is procced.....")
        // first convert the audio data to base64
        var reader = new FileReader();
        reader.readAsDataURL(audioData);
        return new Promise((resolve, reject) => {
            reader.onloadend = function () {
                console.log(reader.result);
                if (userEmail) {
                    addUserAudiodataToIndexedDb(reader.result);

                }
                //save user audio data & speech data for showing into the result page
                SaveUserIndexedDBAudioDataAllForResult(reader.result, userSpeechMainData)
            };
        });
    };


    //have to check this history function for go back & forword & stop all stream & audios... 
    //if it's really need...   
    // history.listen = ((location, action) => {
    //     SpeechRecognition.abortListening();
    //     SpeechRecognition.stopListening();
    //     clearInterval(timeoutSpeechBreak);
    //     clearInterval(StopPlay);
    //     StopPlay = null;
    //     //  clearInterval(firstStopPlayTimer);
    //     try {
    //         // stream.getTracks()[0].stop();
    //         stream.getTracks() // get all tracks from the MediaStream
    //             .forEach(track => track.stop()); // stop each of them
    //         // useReactMediaRecorder.stop();
    //         window.playerG.pause();
    //         firstplay = true;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // })



    //call this function after end of the conversation to get Scores from API..
    async function sendSpeakingtextToBackend(mainText) {
        console.log(mainText);
        //call this function for making user audio data to base 64 and save that into local IndexedDb storage...
        customStopRecordingForGetuserAudioData()


        // useReactMediaRecorder.stop();
        var sentData = {
            'inputs': mainText + "."  // extra full stop added because if corrections are not working yet this full stop will help to make scores
        }
        console.log(sentData)
        setisloading(true);
        console.log("Parvez text-finished..")
        axios.post(SPEAKING_POST_TO_GET_RESPONSE_USERDATA, sentData)
            .then((res) => {
                console.log(res)
                //clear timer that used when exam is running &  user not responding.
                clearInterval(StopPlay);
                StopPlay = null;
                if (res.data && userName && userEmail) {
                    //save speaking speech strign data to indexDB ----for showing them dashboard---(22/2/24);
                    addUserAudiodataSTRToIndexedDb(userSpeechMainData);
                }

                setPassComment(true);
                setTimeout(() => {
                    setWaveTit(false);
                }, 4000);


                let FluencyAndCoherence = (Number(res.data.FluencyScore) + Number(res.data.CoherenceScore)) / 2;
                let LexicalResourceScore = Number(res.data.LexicalResourceScore);
                let GrammaticalRangeAccuracy = Number(res.data.GrammaticalRangeandAccuracyScore);
                //Pronanucation score make----
                let makePronanucationScor = (FluencyAndCoherence + LexicalResourceScore + GrammaticalRangeAccuracy) / 3
                console.log(makePronanucationScor)
                let pronounScore = makePronanucationScor.toFixed(1);
                let PronaunacationsResult = Math.round(pronounScore * 2) / 2


                //IeltsScore makeing-----------
                let makeIeltsScore = (FluencyAndCoherence + LexicalResourceScore + GrammaticalRangeAccuracy + PronaunacationsResult) / 4;
                console.log(makeIeltsScore)
                let RoundIelts = makeIeltsScore.toFixed(1);
                let totalIeltsScores = Math.round(RoundIelts * 2) / 2

                //save user result data , Speech ans data & step Number into the localhost below...
                localStorage.setItem("showSpeakingResult", JSON.stringify({
                    ieltsResult: totalIeltsScores,
                    FluencyAndCoherence: FluencyAndCoherence,
                    LexicalResourceScore: LexicalResourceScore,
                    GrammaticalRangeandAccuracyScore: GrammaticalRangeAccuracy,
                    PronaunacationsScore: PronaunacationsResult,
                    questionStepNumber: speakingStepsNo,
                    userSpeechAnsData: storeUserSpeechAns,
                    totalSpeechData: userSpeechMainData,
                    sectionNo: testNo
                }));
                let forSaveData = {
                    ieltsResult: totalIeltsScores,
                    FluencyAndCoherence: FluencyAndCoherence,
                    LexicalResourceScore: LexicalResourceScore,
                    GrammaticalRangeandAccuracyScore: GrammaticalRangeAccuracy,
                    PronaunacationsScore: PronaunacationsResult,
                    questionStepNumber: speakingStepsNo,
                    userSpeechAnsData: storeUserSpeechAns,
                    sectionNo: testNo
                }
                //save Question Steps color 
                localStorage.setItem("questionStepColorArr", JSON.stringify(storeQuesStepOkArray))

                stopRecording();
                axios({
                    method: "post",
                    url: SPEAKING_POST_FOR_SET_SCORES,
                    // "http://localhost:8080/api/user/SpeakingResults",

                    headers: {
                        "Authorization": `Bearer ${userMainToken}`,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        "username": userName,
                        "userEmail": userEmail,
                        "LexicalResourceScore": forSaveData.LexicalResourceScore || "",
                        "GrammaticalRangeandAccuracyScore": forSaveData.GrammaticalRangeandAccuracyScore || "",
                        "PronaunacationsScore": forSaveData.PronaunacationsScore,
                        "ieltsScore": forSaveData.ieltsResult || "",
                        "FluencyAndCoherence": forSaveData.FluencyAndCoherence,
                        "questionStepNumber": forSaveData.questionStepNumber,
                        "questionStepColors": storeQuesStepOkArray.toString(),
                        // "userSpeechAnsData": x.userSpeechAnsData,
                        "userTotalSpeech": userSpeechMainData,
                        "SectionName": testNo
                    },
                })
                    .then((res) => {
                        console.log(res.data);
                        //after getting the result make those variable empty below---
                        storeUserSpeechAns = "";
                        storeQuesStepOkArray = []

                        history.push("/Pages/Speaking-Module/Speaking-Func-Compoents/Pages/SpeakingResult");
                        // window.location.reload();
                        // stopRecording();
                        setisloading(false);

                    })
                    .catch((e) => {
                        console.log(e);
                        //after getting the result make those variable empty below---
                        storeUserSpeechAns = "";
                        storeQuesStepOkArray = []

                        history.push("/Pages/Speaking-Module/Speaking-Func-Compoents/Pages/SpeakingResult");
                        // window.location.reload();
                        // stopRecording();
                        setisloading(false);
                    })

            })
            .catch((err) => {
                setisloading(false);
                alert("Server error please try again or wait for the server response..")
                console.log(err)
            });
    }


    //this function will call when user say any question less than 3 words...
    async function smallTalkError(text) {
        await playScript(smallTalkWarningSentence[smallTalkWarningIndex] + text)
        smallTalkWarningIndex++;
        converstionSteps--;

    }

    //this function will call in every question & store them into a string to save localstorage  
    //to showing users there every answer result in colors....
    const conditionsDependsOnUserSpeech = (StepNumber) => {
        let backGoundColor = "";
        if (StepNumber > 0) {
            if (userEveryAnsCount < 10) {
                backGoundColor = StepNumber + "red"
            } else if (userEveryAnsCount <= 18) {
                backGoundColor = StepNumber + "yellow"
            } else {
                backGoundColor = StepNumber + "green"
            }

        } else {
            backGoundColor = StepNumber + "green"
        }
        // setShowStepOk(oldArray => [backGoundColor, ...oldArray]);
        setShoeSpeakingResult(oldArray => [backGoundColor, ...oldArray]);
        storeQuesStepOkArray.push(backGoundColor);
        collectUserSpeechTime = 0
        userEveryAnsCount = 0;
    }





    //all test calling here...

    async function checkingReplyofUser() {
        console.log('checkingReplyofUser')
        if (testNo == "Test1Sec1") {
            Test1Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
            // setStepNumbers(10);
            // alert(StepNumbers);
        }
        else if (testNo == "Test1Sec3") {
            Test1Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-2
        else if (testNo == "Test2Sec1") {
            Test2Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test2Sec3") {
            Test2Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-3
        else if (testNo == "Test3Sec1") {
            await Test3Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend);
        }

        else if (testNo == "Test3Sec3") {
            Test3Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-4
        else if (testNo == "Test4Sec1") {
            await Test4Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend);
        }

        else if (testNo == "Test4Sec3") {
            Test4Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-5
        else if (testNo == "Test5Sec1") {
            Test5Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test5Sec3") {
            Test5Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-6
        else if (testNo == "Test6Sec1") {
            Test6Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test6Sec3") {
            Test6Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-7
        else if (testNo == "Test7Sec1") {
            Test7Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test7Sec3") {
            Test7Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-8
        else if (testNo == "Test8Sec1") {
            Test8Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        else if (testNo == "Test8Sec3") {
            Test8Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        //test-9

        else if (testNo == "Test9Sec1") {
            Test9Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test9Sec3") {
            Test9Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-10
        else if (testNo == "Test10Sec1") {
            Test10Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        else if (testNo == "Test10Sec3") {
            Test10Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-11
        else if (testNo == "Test11Sec1") {
            Test11Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        else if (testNo == "Test11Sec3") {
            Test11Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        //test-12
        else if (testNo == "Test12Sec1") {
            Test12Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        else if (testNo == "Test12Sec3") {
            Test12Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }


        //test-13----------
        else if (testNo == "Test13Sec1") {
            Test13Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test13Sec3") {
            Test13Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }
        //test-14----------
        else if (testNo == "Test14Sec1") {
            Test14Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test14Sec3") {
            Test14Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        //test-15----------
        else if (testNo == "Test15Sec1") {
            Test15Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test15Sec3") {
            Test15Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        //test-16------------------------

        else if (testNo == "Test16Sec1") {
            Test16Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test16Sec3") {
            Test16Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        //test-17-------------------------

        else if (testNo == "Test17Sec1") {
            Test17Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test17Sec3") {
            Test17Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        //test-18-------------------------

        else if (testNo == "Test18Sec1") {
            Test18Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test18Sec3") {
            Test18Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        //test-19-------------------------

        else if (testNo == "Test19Sec1") {
            Test19Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test19Sec3") {
            Test19Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        //test-20-------------------------

        else if (testNo == "Test20Sec1") {
            Test20Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }

        else if (testNo == "Test20Sec3") {
            Test20Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend)
        }


        //test-21-------------------------

        // else if (testNo == "Test21Sec1") {
        //     await Test21Sec1();
        // }

        // else if (testNo == "Test21Sec3") {
        //     await Test21Sec3();
        // }
        //test-22-------------------------

        // else if (testNo == "Test22Sec1") {
        //     await Test22Sec1();
        // }

        // else if (testNo == "Test22Sec3") {
        //     await Test22Sec3();
        // }
        //test-23-------------------------

        // else if (testNo == "Test23Sec1") {
        //     await Test23Sec1();
        // }

        // else if (testNo == "Test23Sec3") {
        //     await Test23Sec3();
        // }
        //test-24-------------------------

        // else if (testNo == "Test24Sec1") {
        //     await Test24Sec1();
        // }

        // else if (testNo == "Test24Sec3") {
        //     await Test24Sec3();
        // }
        //test-25-------------------------

        // else if (testNo == "Test25Sec1") {
        //     await Test25Sec1();
        // }

        // else if (testNo == "Test25Sec3") {
        //     await Test25Sec3();
        // }

    }




    const sendPrompt = async (prompt) => {
        return axios.post(
            "https://ipractestbackend.azurewebsites.net/completions",
            { prompt }
        );
    };

    var speakInterval = 0;
    async function playScript(msgText) {

        recordControlFlag = false;

        console.log(userSpeechMainData)
        setSQuestion(msgText)
        console.log(player);
        var str = "<speak version=\"1.0\"";
        str += " xmlns=\"http://www.w3.org/2001/10/synthesis\"";
        str += " xml:lang=\"en-US\">";
        str += "<say-as type=\"date:mdy\"> 1/29/2009 </say-as>";
        str += "</speak>";
        examinerSpeakProcessStart();
        window.starSynthesis(msgText);
    }

    const record = async () => {

        setIsIconClicked(!isIconClicked);
        if (firstplay) {
            navigator.getUserMedia =
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
            console.log(navigator)
            try {
                if (navigator.getUserMedia || navigator.mediaDevices.getUserMedia) {

                    // console.log("Starting to record");

                    stream = await navigator.mediaDevices.getUserMedia({
                        audio: true,
                        video: false,
                    });
                    // useReactMediaRecorder = new MediaRecorder(stream);
                    // Also pass the stream to hark to create speaking events
                    console.log(stream)
                    var speech = hark(stream, {});
                    // Start the recording when hark recognizes someone is speakign in the mic
                    console.log(speech)
                    console.log(globalSpeakingState)
                    speech.on("speaking", function () {
                        setMakeWave(true);
                        setPlayAudio(false)
                        console.log("Speaking!..............");
                        console.log('window.speechFinished');
                        // console.log(window.speechFinished);
                        clearTimeout(timeoutSpeechBreak);


                        if (globalSpeakingState == 'ExaminerAudioEnd') {

                            setSpeakingState('You are Speaking...');
                            clearInterval(StopPlay);
                            StopPlay = null;
                            console.log("Speaking!");
                            doubleNotSpeaking = false;


                            speakInterval = 0;

                            console.log(speakInterval);
                        }
                    });
                    // When hark recognizes the speaking has stopped we can stop recording
                    // The stop action will generate ondataavailable() to be triggered
                    speech.on("stopped_speaking", function () {
                        //Stop OpenAi/Google-Cloud speech recognation by function below----
                        console.log(checkStatusForSpeechMethod)
                        if (isMobile && checkStatusForSpeechMethod == true) {
                            stopRecordingForOpenAIMethod();
                            console.log("mobile..")
                        }

                        console.log("not ---- Speaking!..............");
                        setMakeWave(false);
                        //open google cloud / Open Ai speech recognation Methods in 30 mini seconds
                        setTimeout(() => {
                            //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
                            if (mediaRecorderRef.current == null && isMobile) {
                                // console.log("mobile..")
                                if (checkStatusForSpeechMethod == true) {
                                    startRecording();
                                    console.log("hellow --- start-speaking")
                                }

                            }

                        }, 10);

                        // console.log("user-not-speaking..............")
                        if (!doubleNotSpeaking && globalSpeakingState == 'ExaminerAudioEnd') {

                            // setNotAnswering(true);
                            clearTimeout(timeoutSpeechBreak);
                            timeoutSpeechBreak = setTimeout(function () {
                                // collect user speech time code below
                                console.log("user end  Speaking!..............");
                                clearInterval(collectUserTime);
                                //end-----

                                converstionStepsText = document.getElementById('transcriptText').textContent;
                                if (converstionStepsText != "") {
                                    console.log('transcript')
                                    globalSpeakingState = 'UsersSpeechProcessing';
                                    setShowWave(false);
                                    let wordCount = converstionStepsText.trim().split(/\s+/).length;
                                    console.log(wordCount);
                                    //collect the user Speech word count into the variable
                                    userEveryAnsCount = wordCount

                                    let questionData = document.getElementById("getQuestionData").textContent;
                                    //get user every answer words count by below code-----
                                    let conversationalTextWordCount = converstionStepsText.split(" ").filter((e) => e != "");

                                    if (isMobile) {
                                        if (conversationalTextWordCount.length > 5) {
                                            // alert("yes..")
                                            if (checkPunctuationStatus == 1) {
                                                // alert("APi-Number-1");
                                                axios.post("https://ipractest-406204.uc.r.appspot.com/speakingCorrection",
                                                    {
                                                        'textData': converstionStepsText
                                                    })
                                                    .then((res) => {
                                                        userSpeechMainData += "Question:" + " " + questionData + "~";
                                                        console.log(res.data.message);
                                                        let submitData = res.data.message.slice(1, -1)
                                                        console.log(submitData)

                                                        // set the user Speech into a Vaariable....
                                                        userSpeechMainData += "Answer:" + " " + submitData + "~";
                                                        //store User speech Ans into the state below.....
                                                        storeUserSpeechAns = storeUserSpeechAns + submitData
                                                        recordedText = recordedText + submitData;
                                                        console.log(userSpeechMainData);
                                                        checkingReplyofUser();
                                                        checkPunctuationStatus = 2



                                                    }).catch((err) => {
                                                        console.log(err);
                                                        userSpeechMainData += "Question:" + " " + questionData + "~";
                                                        // set the user Speech into a Vaariable....
                                                        userSpeechMainData += "Answer:" + " " + converstionStepsText + "." + "~";
                                                        //store User speech Ans into the state below.....
                                                        storeUserSpeechAns = storeUserSpeechAns + converstionStepsText + "."
                                                        recordedText = recordedText + converstionStepsText + ".";
                                                        checkingReplyofUser();
                                                        checkPunctuationStatus = 2

                                                    });

                                            } else if (checkPunctuationStatus == 2) {
                                                // alert("Api-number-2");
                                                axios.post("https://ipractest-406204.uc.r.appspot.com/speakingCorrection2",
                                                    {
                                                        'textData': converstionStepsText
                                                    })
                                                    .then((res) => {
                                                        userSpeechMainData += "Question:" + " " + questionData + "~";
                                                        console.log(res.data.message);
                                                        let submitData = res.data.message.slice(1, -1)
                                                        console.log(submitData)

                                                        // set the user Speech into a Vaariable....
                                                        userSpeechMainData += "Answer:" + " " + submitData + "~";
                                                        //store User speech Ans into the state below.....
                                                        storeUserSpeechAns = storeUserSpeechAns + submitData
                                                        recordedText = recordedText + submitData;
                                                        console.log(userSpeechMainData);
                                                        checkingReplyofUser();
                                                        checkPunctuationStatus = 3



                                                    }).catch((err) => {
                                                        console.log(err);
                                                        userSpeechMainData += "Question:" + " " + questionData + "~";
                                                        // set the user Speech into a Vaariable....
                                                        userSpeechMainData += "Answer:" + " " + converstionStepsText + "." + "~";
                                                        //store User speech Ans into the state below.....
                                                        storeUserSpeechAns = storeUserSpeechAns + converstionStepsText + "."
                                                        recordedText = recordedText + converstionStepsText + ".";
                                                        checkingReplyofUser();
                                                        checkPunctuationStatus = 3
                                                    });

                                            } else {
                                                {
                                                    // alert("Api-number-2");
                                                    axios.post("https://ipractest-406204.uc.r.appspot.com/speakingCorrection3",
                                                        {
                                                            'textData': converstionStepsText
                                                        })
                                                        .then((res) => {
                                                            userSpeechMainData += "Question:" + " " + questionData + "~";
                                                            console.log(res.data.message);
                                                            let submitData = res.data.message.slice(1, -1)
                                                            console.log(submitData)

                                                            // set the user Speech into a Vaariable....
                                                            userSpeechMainData += "Answer:" + " " + submitData + "~";
                                                            //store User speech Ans into the state below.....
                                                            storeUserSpeechAns = storeUserSpeechAns + submitData
                                                            recordedText = recordedText + submitData;
                                                            console.log(userSpeechMainData);
                                                            checkingReplyofUser();
                                                            checkPunctuationStatus = 1



                                                        }).catch((err) => {
                                                            console.log(err);
                                                            userSpeechMainData += "Question:" + " " + questionData + "~";
                                                            // set the user Speech into a Vaariable....
                                                            userSpeechMainData += "Answer:" + " " + converstionStepsText + "." + "~";
                                                            //store User speech Ans into the state below.....
                                                            storeUserSpeechAns = storeUserSpeechAns + converstionStepsText + "."
                                                            recordedText = recordedText + converstionStepsText + ".";
                                                            checkingReplyofUser();
                                                            checkPunctuationStatus = 1
                                                        });

                                                }
                                            }
                                        } else {
                                            // alert("no---")
                                            userSpeechMainData += "Question:" + " " + questionData + "~";
                                            // set the user Speech into a Vaariable....
                                            userSpeechMainData += "Answer:" + " " + converstionStepsText + "." + "~";
                                            //store User speech Ans into the state below.....
                                            storeUserSpeechAns = storeUserSpeechAns + converstionStepsText + "."
                                            recordedText = recordedText + converstionStepsText + ".";
                                            setTimeout(() => {
                                                checkingReplyofUser();
                                            }, 1000);
                                        }
                                    } else {
                                        // alert("no---")
                                        userSpeechMainData += "Question:" + " " + questionData + "~";
                                        // set the user Speech into a Vaariable....
                                        userSpeechMainData += "Answer:" + " " + converstionStepsText + "~";
                                        //store User speech Ans into the state below.....
                                        storeUserSpeechAns = storeUserSpeechAns + converstionStepsText
                                        recordedText = recordedText + converstionStepsText;
                                        setTimeout(() => {
                                            checkingReplyofUser();
                                        }, 100);
                                    }


                                    console.log(converstionStepsText);
                                    console.log(userSpeechMainData)
                                    // resetTranscript();
                                    setSpeakingState('Waiting for examiners speech...');



                                    if (wordCount > 40) {

                                        ieltswordscore = (ieltswordscore + 8) / 2;
                                    }
                                    else if (wordCount > 30) {
                                        ieltswordscore = (ieltswordscore + 7) / 2;
                                    }

                                    else if (wordCount > 20) {
                                        ieltswordscore = (ieltswordscore + 6) / 2;
                                    }
                                    else if (wordCount > 10) {
                                        ieltswordscore = (ieltswordscore + 5) / 2;
                                    }
                                    else {
                                        ieltswordscore = (ieltswordscore + 4) / 2;
                                    }



                                }

                            }, 3000);
                            console.log("Not Speaking second time");
                        }
                        doubleNotSpeaking = true;


                    });

                    await checkingReplyofUser();

                } else {
                    console.log("recording not supported");
                }
            } catch (error) {
                console.log(error + "something went wrong...");
                setShowPerPopUp(true);
            }
        }


        else {
            window.location.reload();
        }
        firstplay = false;

    };

    //for stor recording...when user click on stop clicking button....   
    const stopRecording = async () => {
        // clean up
        //pass empty string into window.starSynthesis to stop examiner speaking
        window.starSynthesis("");
        console.log(stream);
        // change state to show play to start text to to user..
        setSpeakingState('Play to start..');
        //stop all navigators ....
        stream.getTracks() // get all tracks from the MediaStream
            .forEach(track => track.stop()); // stop each of them
        //make click button from play to off...
        setIsIconClicked(!isIconClicked);
        //stop speech-Recognition npm package..
        SpeechRecognition.stopListening();
        // Change variable for make sure that when stop all recorders in that case in recor function 
        // where we made a condition that if first play is true in that case those codes will be 
        // exicute otherwise those will be not...
        firstplay = false;
        //clear time for not Responding..
        clearInterval(timeoutSpeechBreak);
        //same as above stop timer....
        clearInterval(StopPlay);
        //& make that into null
        // StopPlay = null;
        //stop useReactMediaRecorder which we statrted at the first when we started by clicking starting button..
        customStopRecordingForGetuserAudioData()
        //for mobile media recorder offing...
        if (isMobile) { mediaRecorderRef.current == null };
        // window.location.reload();
    };












    function examinerSpeakProcessStart() {
        globalSpeakingState = 'ExaminerSpeechProcessing'
        timeoutHandle = setTimeout(function () {
            // console.log("Timer alert...");
            setCheckNetworkStatus(true)

        }, 3000);
        console.log(timeoutHandle)
        console.log("Examiner-Saying.......")

        if (mediaRecorderRef.current != null && isMobile) {
            stopRecordingForOpenAIMethod();
            console.log("stopped------speech recognation---------")
        };
        checkStatusForSpeechMethod = false

        //this localstore for off the tntroduction about writing when user 
        // come again into this page....
    }

    // Examiner audio start
    window.onAudionStartGlobal = function () {
        console.log(mediaRecorderRef.current)
        console.log(mediaRecorderRef)
        //if user in mobile devices openAi transcription will be empty ---by the condition below
        if (isMobile && transcriptTextbyOpenAi != "") { settranscriptTextbyOpenAi("") };

        globalSpeakingState = 'ExaminerAudioStart';
        console.log("Examiner-Middle-Saying.....")
        console.log(timeoutHandle)
        if (timeoutHandle) {
            console.log("Timer is out..")
            setCheckNetworkStatus(false)
            clearTimeout(timeoutHandle);
            timeoutHandle = null;
        }


    };

    //funtion for when waiting for user speech----------------
    window.onAudionEndGlobal = function () {
        console.log(mediaRecorderRef.current)
        console.log(mediaRecorderRef)
        //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
        if (isMobile) {
            startRecording();
        }
        checkStatusForSpeechMethod = true

        globalSpeakingState = 'ExaminerAudioEnd'
        setShowWave(true);
        setPlayAudio(true);
        console.log("Examiner-End-Saying.......");
        if (StopPlay == null) {
            let speakMainTimer = 0;
            StopPlay = setInterval(function () {
                speakMainTimer++;
                console.log('speakMainTimer')
                console.log(speakMainTimer)
                if (speakMainTimer == 15) {
                    console.log("Warningn message...")
                    playScript("You are not responding we are going to finished the test...")
                }
                if (speakMainTimer === 25) {
                    console.log("Leaving messages...");
                    stopRecording();
                    history.push("/Pages/Pages/Speaking-Module");

                }
            }, 1000);
        }

        collectUserTime = setInterval(function () {
            collectUserSpeechTime = collectUserSpeechTime + 1
            // console.log("user Speech Time-----------------------", collectUserSpeechTime)
        }, 1000);

    };






    // function for add userAudio data to the localIndexedDB----------
    // and send all data to the dashboard========
    function addUserAudiodataToIndexedDb(xUserAudioData) {
        let dbPromise = windowIndexedDB.open("newDatabase", 2);
        dbPromise.onsuccess = (event) => {
            const db = dbPromise.result;
            const tx = db.transaction("userData", "readwrite");
            const userData = tx.objectStore("userData");

            const users = userData.put({
                ID: userEmail + testNo,
                testSections: testNo,
                userEmail: userEmail,
                userSpeech: xUserAudioData,
            })
            users.onsuccess = () => {
                tx.oncomplete = () => {
                    db.close();
                }
                console.log("User-Added");
            }

        };

        dbPromise.onerror = (event) => {
            console.log(event)
            console.log("error-has been found to load data in IndexedDb");
        }

    };


    // user speach data save into the IndexedDB for showinng to the user
    function addUserAudiodataSTRToIndexedDb(speechData) {
        console.log(speechData)
        console.log("SpeechRecording data------------------------------------------")
        let dbPromise = windowIndexedDB.open("newDatabase", 2);
        dbPromise.onsuccess = (event) => {
            const db = dbPromise.result;
            const tx = db.transaction("userSpeech", "readwrite");
            const userData = tx.objectStore("userSpeech");
            console.log(speechData)
            const users = userData.put({
                ID: userEmail + testNo,
                testSections: testNo,
                userEmail: userEmail,
                data: speechData,
            })
            users.onsuccess = () => {
                tx.oncomplete = () => {
                    db.close();
                }
                console.log("User-Added");
            }

        };

        dbPromise.onerror = (event) => {
            console.log(event)
            console.log("error-has been found to load data in IndexedDb");
        }

    }


    //save user all Audio data && Speech data to the indexedDb fo showing into the result page---
    function SaveUserIndexedDBAudioDataAllForResult(UserAudioData, userSpeechData) {
        let dbPromise = windowIndexedDB.open("newDatabase", 2);
        dbPromise.onsuccess = (event) => {
            const db = dbPromise.result;
            const tx = db.transaction("showDataInResult", "readwrite");
            const userData = tx.objectStore("showDataInResult");

            const users = userData.put({
                ID: "data",
                section: testNo,
                userAudio: UserAudioData,
                userSpeech: userSpeechData,
            })
            users.onsuccess = () => {
                tx.oncomplete = () => {
                    db.close();
                }
                console.log("User-Added");
            }

        };

        dbPromise.onerror = (event) => {
            console.log(event)
            console.log("error-has been found to load data in IndexedDb");
        }

    };






    return (
        <section className="appie-hero-area click-Speaking relative">

            {/* Show to the user that Which test & Section Number they are giving-- */}
            <ShowTestName
                testNo={testNo}
            />

            {/* //need to know before start the test sections */}
            <div className="w-full mt-[-70px] grid  justify-center gap-0 h-auto  box-border mb-3 " >
                {NeedTips && (
                    <div className=" w-[90vw] sm:w-[500px] bg-red-200  rounded-[50px] ">
                        <div className="w-full flex justify-between align-middle p-1">
                            <div className="flex">
                                <div className="bg-purple-400 w-[25px] h-[25px] rounded-[50%] ml-2 flex justify-center align-middle"><i className="fal fa-check m-auto text-white" /></div>
                                <p className="ml-3 pt-[2px]  needEffect" data-text="NEED A SILENT PLACE">"NEED A SILENT PLACE"</p>
                            </div>
                            <div className="text-white text-[17px] font-bold mr-3  cursor-pointer"
                                onClick={() => { setNeedTips(false) }}
                            >X</div>
                        </div>
                    </div>
                )
                }
            </div>

            {/* Examiner Speech-------- */}
            <div className="w-full mt-[-10px] grid  justify-center gap-0 h-auto" >
                <div className=" w-[90vw] sm:w-[500px]  min-h-[100px] max-h-auto rounded box-border">
                    <div className={`${showWave ? "removeBorder" : "bubble"}`}>
                        <div className={`${showWave ? "removeChildBorder" : "bubble-bottom-left"}`}></div>
                        {/* contentEditable */}
                        {isIconClicked ? (
                            <div className="grid grid-cols-1 gap-[7px]">
                                <div className={`flex ${forQuestionHide ? "justify-between" : "justify-end"}  align-bottom w-full`}>
                                    {
                                        forQuestionHide && <p className=" text-[13px] sm:text-[15px] text-black" id="getQuestionData">{SQuestion} </p>
                                    }
                                    <button className="p-2 text-center border-1 border-gray-400 rounded-[20px] bg-blue-500 text-white w-auto h-[30px] text-[8px] translate-y-[-4px]"
                                        onClick={() => { setForQuestionHide(!forQuestionHide) }}
                                    >
                                        {
                                            forQuestionHide ? " Hide" : "Show"
                                        }

                                    </button>
                                </div>
                                {
                                    showWave && (
                                        <div className="showAnsStyling">
                                            <div className="mb-2 mt-[-4px] underline text-blue-500 border-none border-2 border-b-blue-700 mr-2 font-bold">Sample Answer</div>
                                            <p className="font-bold text-justify">
                                                {sampleAns[0]} <br /> <br />
                                                {/* {sampleAns[1]}<br /> <br />
                                                {sampleAns[2]}<br /> */}
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        ) : (
                            <p className="Bubble-text text-[13px] sm:text-[15px]
                            font-bold text-center text-black">
                                Please Tap the play button for starting conversation
                            </p>

                        )
                        }
                        {
                            isMobile ? "" : (
                                <div className="bubble-Image">
                                    <FcBusinesswoman />
                                </div>)
                        }
                    </div>
                </div>
            </div>




            <div className=" w-full flex justify-center mt-[40px] mb-[30px]">
                <div className=" w-[90vw] grid justify-center align-middle sm:w-[500px] h-[100px] rounded ">
                    <div className="grid justify-center w-full gap-2 SpeakingClickPop ">
                        <div
                            onClick={isIconClicked ? stopRecording : stsrSpeechRec}
                            role="button"
                            className="SpeakingIConsDiv "
                        >
                            {isIconClicked ? <i className="fas fa-pause text-blue-500" /> : <i className="fas fa-play text-blue-500" />}
                        </div>

                    </div>
                    <div id={'SpeakingState'} className=" mt-3 text-center
                     font-bold  w-[200px] p-1 text-[17px] border-1 border-black rounded  text-blue-600">
                        {SpeakingState}
                    </div>
                </div>

            </div> <br />


            {/* User Speech design */}
            <div className="w-full grid  justify-center gap-0 mt-3  h-auto  box-border " >
                <div className=" w-[90vw] sm:w-[500px] bg-white p-2 min-h-[80px] max-h-[350px] overflow-auto box-border rounded-[16px] grid">
                    <div className="w-full m-auto">
                        <div className="">

                            <div className={`w-full flex justify-center align-middle mb-1 ${showWave ? "visible" : "invisible"}`}>
                                <i><GiOldMicrophone className="text-[35px]" /></i>
                                {
                                    makeWave ? (
                                        <div className="center_div ml-0 sm:ml-[-17px]">
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                        </div>
                                    ) : (
                                        <div className="center_div ml-0 sm:ml-[-19px]">
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className={`w-full pl-3 pr-3 flex ${showWave ? "mb-1" : "translate-y-[-7px]"}`}>
                                <div className={`w-[21px] h-[21px] rounded-[50%] ${showWave ? "bg-red-500" : "bg-gray-400"} mr-[13px] mt-[-10px]`}></div>
                                <div className="w-full h-[2px] bg-gray-500"></div>
                            </div>
                            <div id={'transcriptText'} className="p-1 mt-1 w-full text-justify">
                                {isMobile && (transcriptTextbyOpenAi && transcriptTextbyOpenAi)}
                                {!isMobile && (transcript && transcript)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Show Answers Steps components that user user pass the Questions */}
            <AnswerSelectCom
                StepNumbers={StepNumbers}
                showStepOk={showStepOk}
            />


            {/* for-Result-Pop-Up */}
            <div className="Result-PopUp pt-[120px]  fixed top-2 left-0 sm:left-2 w-[92%] sm:w-[100%]">
                {isloading && (<section className="fixed top-2 left-2 w-[90%] sm:w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[100000] grid-cols-1 grid-rows-5">
                    <div className="fixed top-[30%]  left-[26%] z-[200000] sm:left-[45%] w-[100vw] h-[100vh]">
                        <div className="flex opacity-6 justify-center align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
                            <div className="bg-white rounded-[15px] p-3 h-auto">
                                <ClockLoader size={100} color="#36d7b7" />
                                <div className="w-full flex justify-center p-1 mt-1 bg-sky-300 text-white"
                                    style={{ borderTopLeftRadius: "27px", borderTopRightRadius: "27px" }}
                                >
                                    {/* <Timer Second={60} /> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>)
                }



                {/* for speaking SDK loader */}
                {initialFlag && (<section className="fixed top-2 left-2 w-[90%] sm:w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[100000] grid-cols-1 grid-rows-5">
                    <div className="fixed top-[30%]  left-[26%] z-[200000] sm:left-[45%] w-[100vw] h-[100vh]">
                        <div className="flex opacity-6 justify-center align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
                            <div className="bg-white rounded-[15px] p-3 h-auto">
                                <ClockLoader size={100} color="#36d7b7" />
                            </div>

                        </div>
                    </div>
                </section>)
                }
                {/* for Network status checking loader..... */}
                {
                    checkNetWorkStstus && (
                        <div className="Result-PopUp pt-[120px]  fixed top-2 left-2 w-[90%] sm:w-[100%]">

                            <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                                <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[240px] p-2 h-[80px] z-[100000] bg-sky-300'>
                                    <div className='flex gap-3'>
                                        <i className='text-3xl text-red-500'><BiWifiOff /></i>
                                        <p className=''>Please check you internet connection</p>
                                    </div>
                                </section>

                            </div>
                        </div>

                    )
                }

            </div>

            {/* Play audio by the help of state change when examiner end his speech */}
            {
                playAudio && (
                    <div className="w-full flex justify-center invisible">
                        <audio src={audioPlaySound} controls autoPlay></audio>
                    </div>
                )
            }




            {/* checkByBrowser if user denied the recorder */}
            <PermissionDenieP showPerPopUp={showPerPopUp} setShowPerPopUp={setShowPerPopUp} />

        </section>

    );
}

export default ClickSpeaking;

















