
"use client"
import React, { useEffect, useState, useRef } from "react";
import "../allStyle/ClickSpeaking.css";
import { isMobile } from "react-device-detect";
import { BiWifiOff } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { BiTimer } from "react-icons/bi"
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
import hark from "hark";
import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Timer from "./Timer";
import SStopTimer from "../Pages/S-secTimer"
// import NotAnsweringTimer from "../Pages/TimerForNotRes";
// import Timer from "../../WritingAllTests/Writing-All-Pages/Writing-Importand/Pages/Timer";

import { ClockLoader } from "react-spinners";
import { useRouter } from 'next/navigation';
import PermissionDenieP from "../Pages/PermissionDenieP.jsx";
//import NetworkCom from "../../Network/index";
import audioPlaySound from "../../../../../assets/Audios/playAudioForSpeaking.wav"
import { CheckPaymentStatus } from "../../../Payments/CkeckPayment/CheckPayments.js";
import { useStateContext } from "../../../../../contexts/ContextProvider";
import { localeCompare } from "../Pages/CompareFunction.js"

import { SPEAKING_GET_SPECIFIC_USER_READING_LAST_DATA, SPEAKING_POST_FOR_SET_SCORES, SPEAKING_POST_TO_GET_RESPONSE_USERDATA } from "../../../../../assets/URL's/AllUrl.js"
//all tests section-2 
import ShowTestName from "../Pages/ShowTestName.jsx";
import { Test1Sec2 } from "./Tests/Test-1/Sec-2";
import { Test2Sec2 } from "./Tests/Test-2/Sec-2";
import { Test3Sec2 } from "./Tests/Test-3/Sec-2";
import { Test4Sec2 } from "./Tests/Test-4/Sec-2";
import { Test5Sec2 } from "./Tests/Test-5/Sec-2";
import { Test6Sec2 } from "./Tests/Test-6/Sec-2";
import { Test7Sec2 } from "./Tests/Test-7/Sec-2";
import { Test8Sec2 } from "./Tests/Test-8/Sec-2";
import { Test9Sec2 } from "./Tests/Test-9/Sec-2";
import { Test10Sec2 } from "./Tests/Test-10/Sec-2";
import { Test11Sec2 } from "./Tests/Test-11/Sec-2";
import { Test12Sec2 } from "./Tests/Test-12/Sec-2";
import { Test13Sec2 } from "./Tests/Test-13/Sec-2";
import { Test14Sec2 } from "./Tests/Test-14/Sec-2";
import { Test15Sec2 } from "./Tests/Test-15/Sec-2";
import { Test16Sec2 } from "./Tests/Test-16/Sec-2";
import { Test17Sec2 } from "./Tests/Test-17/Sec-2";
import { Test18Sec2 } from "./Tests/Test-18/Sec-2";
import { Test19Sec2 } from "./Tests/Test-19/Sec-2";
import { Test20Sec2 } from "./Tests/Test-20/Sec-2";
import { Test21Sec2 } from "./Tests/Test-21/Sec-2";
import { Test22Sec2 } from "./Tests/Test-22/Sec-2";
import { Test23Sec2 } from "./Tests/Test-23/Sec-2";
import { Test24Sec2 } from "./Tests/Test-24/Sec-2";
import { Test25Sec2 } from "./Tests/Test-25/Sec-2";
import { Test26Sec2 } from "./Tests/Test-26/Sec-2";
import { Test27Sec2 } from "./Tests/Test-27/Sec-2";
import { Test28Sec2 } from "./Tests/Test-28/Sec-2";
import { Test29Sec2 } from "./Tests/Test-29/Sec-2";
import { Test30Sec2 } from "./Tests/Test-30/Sec-2";
import { Test31Sec2 } from "./Tests/Test-31/Sec-2";
import { Test32Sec2 } from "./Tests/Test-32/Sec-2";
import { Test33Sec2 } from "./Tests/Test-33/Sec-2";
import { Test34Sec2 } from "./Tests/Test-34/Sec-2";
import { Test35Sec2 } from "./Tests/Test-35/Sec-2";
import { Test36Sec2 } from "./Tests/Test-36/Sec-2";
import { Test37Sec2 } from "./Tests/Test-37/Sec-2";
import { Test38Sec2 } from "./Tests/Test-38/Sec-2";
import { Test39Sec2 } from "./Tests/Test-39/Sec-2";
import { Test40Sec2 } from "./Tests/Test-40/Sec-2";


//end of importings......

























var SpeechSDK;
var synthesizer;
var player;
var firstplay = true;
let stream;
var StopPlay;

let initialFlag = false;
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

let windowIndexedDB
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
















// Function to convert audio blob to base64 encoded string this is for Google-could-APi
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





var timeoutHandle = null;
let ieltswordscore = 0;
let preparationFlag = false;
let oneMinuteTimeout;
let TwoMinuteTimeout;
// the variable of the below for storing all user Speech into this variable for showing to the user into the database for making the UI;
var userSpeechMainData = "";
var checkStatusForSpeechMethod = false

function ClickSpeaking({ testNo, setPassComment, setWaveTit }) {
    const { showSpeakingResult, setShoeSpeakingResult, userPaymentStatusCheck } = useStateContext();
    const history = useRouter();

    //all localstorages data storing into states...........
    const [userMainToken, setuserMainToken] = useState("");
    const [userEmail, setuserEmail] = useState("")
    const [userName, setuserName] = useState("");
    const [userSpeakingSec2Test, setuserSpeakingSec2Test] = useState()


    //other states
    const [Sec2StopTime, setSec2StopTime] = useState(false);
    const [Sec2Timer, setSec2Timer] = useState(false);
    const [sec2StopTimerOneminute, setSec2StopTimerOneminute] = useState(false);
    const [sec2StopTimerTwominute, setSec2StopTimerTwominute] = useState(false);
    const [CurrectTimer, setCurrectTimer] = useState(false)
    const [showPerPopUp, setShowPerPopUp] = useState(false);
    const [NeedTips, setNeedTips] = useState(true);
    const [sec2SpeakingTime, setsec2SpeakingTime] = useState(false);


    const [SQuestion, setSQuestion] = useState("");
    const [ShowQuestion, setShowQuestion] = useState(true);
    const [ShowAnswers, setShowAnswers] = useState(true);
    const [isIconClicked, setIsIconClicked] = useState(false);

    const [isloading, setisloading] = useState(false);
    const [SpeakingState, setSpeakingState] = useState("Play for star");
    const [checkNetWorkStstus, setCheckNetworkStatus] = useState(false);

    //speaking-user-speech-recognation with OpenAI keys--------states
    const [transcriptTextbyOpenAi, settranscriptTextbyOpenAi] = useState("");
    const [showApiKeyModal, setShowApiKeyModal] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const googleAPIKey = "AIzaSyDVksTONkieWNhplzhmpXTHCsYrjdDh1Mc";

    //end of declaring all states & variables......


    if (!googleAPIKey) {
        throw new Error("REACT_APP_GOOGLE_API_KEY not found in the environment");
    }


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








    useEffect(() => {
        //collect all user localstorage data...
        setuserMainToken(localStorage.getItem("loginTOken"))
        setuserEmail(localStorage.getItem('userEmail'));
        setuserName(localStorage.getItem("userName"));
        setuserSpeakingSec2Test(localStorage.getItem("SpeakingSec2Test"))


        createCollectionsInIndexesDB();
        //  addUserAudiodataToIndexedDb("")
    }, [])

    // console.log(bdPaidStatus);
    // console.log(otherPaidStatus);
    useEffect(() => {
        setTimeout(() => {
            // console.log(testNo);
            //call the function below for check those status
            localeCompare(testNo, userPaymentStatusCheck, history);
        }, 1000);
    }, [])



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








    //speaking-user-speech-recognation with OpenAI keys start function
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
            // console.log(timermain)
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
        console.log('close the speech recognation=----------')
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
            // settranscriptTextbyOpenAi("Error transcribing audio. Please try again.");
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



    //have to rectify this history function...


    // history.listen = ((location, action) => {
    //     SpeechRecognition.abortListening();
    //     SpeechRecognition.stopListening();
    //     clearInterval(timer);
    //     clearTimeout(oneMinuteTimeout)
    //     clearTimeout(TwoMinuteTimeout);
    //     clearInterval(StopPlay);
    //     StopPlay = null;

    //     try {
    //         // stream.getTracks()[0].stop();
    //         // useReactMediaRecorder.stop();
    //         stream.getTracks() // get all tracks from the MediaStream
    //             .forEach(track => track.stop()); // stop each of them
    //         window.playerG.pause();
    //         firstplay = true;
    //     } catch (error) {
    //         console.log(error)
    //     }


    // })


    if (!browserSupportsSpeechRecognition) {
        return null;
    }
    function stsrSpeechRec() {
        //for getting user audio ...
        customStartRecordingForGetuserAudioData()
        userSpeechMainData = ''
        record();
        //if users is not in mobile in that case this package will be called && inisialized
        if (isMobile) {
            //start OpenAi speech recognation by function below
            // startRecording();
        } else {
            // alert("mobile...not")
            startListening();
        }
    }





    let smallTalkWarningSentence = ['Please dont answer in short sentence. It will reduce your score. I am repeating the question. ', 'Again dont    answer   the in short. Asking again.', 'Man you are doing it again']

    const msg = new SpeechSynthesisUtterance();
    msg.rate = .8;
    var recordedText = "";
    var doubleNotSpeaking = true;
    var converstionSteps = 0;
    var converstionStepsText = "";
    var recordControlFlag = false;
    var smallTalkWarningIndex = 0;
    var spokenText = '';

    const sendRecording = async (audioData) => {
        // first convert the audio data to base64
        var reader = new FileReader();
        reader.readAsDataURL(audioData);
        return new Promise((resolve, reject) => {
            reader.onloadend = function () {
                // console.log(reader.result);
                // Send base64 string data backend service
                if (userEmail) {
                    addUserAudiodataToIndexedDb(reader.result)
                }
                //save user audio data & speech data for showing into the result page
                SaveUserIndexedDBAudioDataAllForResult(reader.result, userSpeechMainData)

            };
        });
    };








    async function sendSpeakingtextToBackend(text) {
        setisloading(true);
        // alert("mobile--")
        var mainSentData = {
            'textData': text
        }
        axios.post("https://ipractest-406204.uc.r.appspot.com/speakingCorrection", mainSentData)
            .then((res) => {
                console.log(res.data.message);
                let submitData = res.data.message.slice(1, -1)
                sendSpeakingtextToBackendAfter(submitData)

            }).catch((err) => {
                console.log(err);
                setisloading(false)
                alert("Server error please try again or wait for the server response..")
            });
    }


    async function sendSpeakingtextToBackendAfter(mainText) {
        //call this function for making user audio data to base 64 and save that into local IndexedDb storage...
        stopRecording()

        var sentData = {
            'inputs': mainText
        }
        console.log(sentData);
        let QuestionsForUser = document.getElementById("questions").textContent
        userSpeechMainData += "Question:" + QuestionsForUser + "~";
        userSpeechMainData += "Answer:" + " " + sentData.inputs + "~";
        setisloading(true);
        if (isloading) {
            console.log("Back-end is working perfectL y")
        }
        axios.post(SPEAKING_POST_TO_GET_RESPONSE_USERDATA, sentData)
            .then((res) => {
                console.log(res);
                clearInterval(StopPlay);
                StopPlay = null;
                if (res.data && userName && userEmail) {
                    //save speaking speech strign data to indexDB ----for showing them dashboard---(22/2/24);
                    addUserAudiodataSTRToIndexedDb(userSpeechMainData);
                }
                setisloading(false);
                setPassComment(true);
                setTimeout(() => {
                    setWaveTit(false);
                }, 7000);

                setShoeSpeakingResult(true);

                let FluencyAndCoherence = (Number(res.data.FluencyScore) + Number(res.data.CoherenceScore)) / 2;
                let LexicalResourceScore = Number(res.data.LexicalResourceScore);
                let GrammaticalRangeAccuracy = Number(res.data.GrammaticalRangeandAccuracyScore);
                //Pronanucation score make----
                let makePronanucationScor = (FluencyAndCoherence + LexicalResourceScore + GrammaticalRangeAccuracy) / 3
                let pronounScore = makePronanucationScor.toFixed(1);
                let PronaunacationsResult = Math.round(pronounScore * 2) / 2


                //IeltsScore makeing-----------
                let makeIeltsScore = (FluencyAndCoherence + LexicalResourceScore + GrammaticalRangeAccuracy + PronaunacationsResult) / 4;
                let RoundIelts = makeIeltsScore.toFixed(1);
                let totalIeltsScores = Math.round(RoundIelts * 2) / 2

                //save user result data , Speech ans data & step Number into the localhost below...
                localStorage.setItem("showSpeakingResult", JSON.stringify({
                    ieltsResult: totalIeltsScores,
                    FluencyAndCoherence: FluencyAndCoherence,
                    LexicalResourceScore: LexicalResourceScore,
                    GrammaticalRangeandAccuracyScore: GrammaticalRangeAccuracy,
                    PronaunacationsScore: PronaunacationsResult,
                    userSpeechAnsData: sentData.inputs,
                    totalSpeechData: sentData.inputs,
                    sectionNo: testNo
                }));
                let forSaveData = {
                    ieltsResult: totalIeltsScores,
                    FluencyAndCoherence: FluencyAndCoherence,
                    LexicalResourceScore: LexicalResourceScore,
                    GrammaticalRangeandAccuracyScore: GrammaticalRangeAccuracy,
                    PronaunacationsScore: PronaunacationsResult,
                    userSpeechAnsData: sentData.inputs,
                    sectionNo: testNo
                }

                // ShowSpeakingTestScors(totalIeltsScores);
                //save Question Steps color into empty because it not need in section-2
                localStorage.setItem("questionStepColorArr", JSON.stringify([]));

                //for post request Scores & save those into the Main Dash-board Pages

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
                        "userTotalSpeech": forSaveData.userSpeechAnsData,
                        "SectionName": testNo
                    },
                })
                    .then((res) => {
                        console.log(res.data);
                        setisloading(false);

                        history.push("/Pages/Speaking-Module/Speaking-Func-Compoents/Pages/SpeakingResult")
                        // window.location.reload();
                        // stopRecording();
                    })
                    .catch((e) => {
                        console.log(e);
                        setisloading(false);

                        history.push("/Pages/Speaking-Module/Speaking-Func-Compoents/Pages/SpeakingResult")
                        // window.location.reload();
                        // stopRecording();
                    })






            })
            .catch((err) => {
                setisloading(false)
                console.log(err);
                alert("Server error please try again or wait for the server response..")
            });
    }






    async function smallTalkError() {
        await playScript(smallTalkWarningSentence[smallTalkWarningIndex])
        smallTalkWarningIndex++;
        converstionSteps--;

    }

    // Test1Sec1 , Test1Sec1 , Test1Sec1
    // Test2Sec1 , Test2Sec1 , Test2Sec1
    // Test3Sec1 , Test3Sec1 , Test3Sec1
    // calling that test in section which is needed...
    async function checkingReplyofUser() {
        console.log('checkingReplyofUser')
        if (testNo == "Test1Sec2") {
            Test1Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText)
        }
        else if (testNo == "Test2Sec2") {
            Test2Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText)
        }

        else if (testNo == "Test3Sec2") {
            Test3Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText)
        }

        else if (testNo == "Test4Sec2") {
            Test4Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText)
        }

        else if (testNo == "Test5Sec2") {
            Test5Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText)
        }
        else if (testNo == "Test6Sec2") {
            Test6Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText)
        }

        else if (testNo == "Test7Sec2") {
            Test7Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test8Sec2") {
            Test8Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test9Sec2") {
            Test9Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test10Sec2") {
            Test10Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test11Sec2") {
            Test11Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test12Sec2") {
            Test12Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test13Sec2") {
            Test13Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test14Sec2") {
            Test14Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test15Sec2") {
            Test15Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test16Sec2") {
            Test16Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test17Sec2") {
            Test17Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test18Sec2") {
            Test18Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test19Sec2") {
            Test19Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test20Sec2") {
            Test20Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }

        else if (testNo == "Test21Sec2") {
            Test21Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test22Sec2") {
            Test22Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test23Sec2") {
            Test23Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test24Sec2") {
            Test24Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test25Sec2") {
            Test25Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test26Sec2") {
            Test26Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test27Sec2") {
            Test27Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test28Sec2") {
            Test28Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test29Sec2") {
            Test29Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test30Sec2") {
            Test30Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test31Sec2") {
            Test31Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test32Sec2") {
            Test32Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test33Sec2") {
            Test33Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test34Sec2") {
            Test34Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test35Sec2") {
            Test35Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test36Sec2") {
            Test36Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test37Sec2") {
            Test37Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test38Sec2") {
            Test38Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test39Sec2") {
            Test39Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }
        else if (testNo == "Test40Sec2") {
            Test40Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText);
        }



    }

    const sendPrompt = async (prompt) => {
        return axios.post(
            "https://ipractestbackend.azurewebsites.net/completions",
            { prompt }
        );
    };
    var speakInterval = 0;
    var timer;


    async function playScript(msgText) {
        recordControlFlag = false;

        var ssmlFile = "Shakespeare.xml";
        setSQuestion(msgText);
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

                    console.log("Starting to record");

                    stream = await navigator.mediaDevices.getUserMedia({
                        audio: true,
                        video: false,
                    });
                    // useReactMediaRecorder = new MediaRecorder(stream);
                    // // Also pass the stream to hark to create speaking events
                    // New added for pass all recording data to the IndexedDb to playback for users. (30-10-2023)....
                    var speech = hark(stream, {});
                    speech.on("speaking", function () {
                        console.log("Speaking...");
                        clearInterval(StopPlay);
                        StopPlay = null;

                    });
                    speech.on("stopped_speaking", function () {
                        //Stop OpenAi/Google-Cloud speech recognation by function below----
                        if (isMobile && checkStatusForSpeechMethod == true) {
                            stopRecordingForOpenAIMethod();
                            //  console.log("mobile..")
                        }

                        //open google cloud / Open Ai speech recognation Methods in 30 mini seconds
                        setTimeout(() => {
                            //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
                            if (mediaRecorderRef.current == null && isMobile) {
                                if (checkStatusForSpeechMethod == true) {
                                    // console.log("mobile..")
                                    console.log("hellow --- start-speaking")
                                    startRecording();
                                }

                            }

                        }, 10)
                    })
                    // // Start the recording when hark recognizes someone is speakign in the mic
                    // speech.on("speaking", function () {
                    //
                    // });
                    // // When hark recognizes the speaking has stopped we can stop recording
                    // // The stop action will generate ondataavailable() to be triggered
                    // speech.on("stopped_speaking", function () {
                    //     console.log("Not Speaking");
                    //
                    // });

                    // useReactMediaRecorder.ondataavailable = (e) => {
                    //     console.log(e.data);
                    //     sendRecording(e.data);
                    // };
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
        clearInterval(timer);
        clearTimeout(oneMinuteTimeout)
        clearTimeout(TwoMinuteTimeout);
        clearInterval(StopPlay);
        // StopPlay = null;
        //stop useReactMediaRecorder which we statrted at the first when we started by clicking starting button..
        customStopRecordingForGetuserAudioData()
        //for mobile media recorder offing...
        if (isMobile) { mediaRecorderRef.current == null };
        // window.location.reload();
    };




    //examiner speaking process
    function examinerSpeakProcessStart() {
        timeoutHandle = setTimeout(function () {
            // console.log("Timer alert...");
            setCheckNetworkStatus(true)

        }, 3000);
        // console.log(timeoutHandle)
        console.log("Examiner-Saying.......")

    }






    // Examiner audio start
    window.onAudionStartGlobal = function () {
        //if user in mobile devices openAi transcription will be empty ---by the condition below
        if (isMobile && transcriptTextbyOpenAi != "") { settranscriptTextbyOpenAi("") };
        // if (mediaRecorderRef.current != null && isMobile) { stopRecordingForOpenAIMethod(); };

        console.log("Examiner-Middle-Saying.....");
        if (timeoutHandle) {
            console.log("Timer is out..")
            setCheckNetworkStatus(false)
            clearTimeout(timeoutHandle);
            timeoutHandle = null;
        }
    };

    //funtion for when waiting for user speech----------------
    window.onAudionEndGlobal = function () {
        localStorage.setItem("SpeakingSec2Test", testNo);

        if (CurrectTimer) {
            // console.log("00000000000000000")
            oneMinuteTimeout = setTimeout(() => {
                setSec2Timer(true);
                setSec2StopTimerOneminute(true);
                oneMinuteTimeout = setTimeout(() => {
                    setCurrectTimer(false)
                    preparationFlag = false;
                    // playScript("your one minute preparation time has been end please beging start speaking");
                    playScript("Your one minute preparation time has ended. Please begin speaking.");
                    setSec2Timer(false);
                    setSec2StopTimerOneminute(false);
                    setSec2StopTimerTwominute(true);
                    console.log("after finished the")
                    setSec2Timer(true);
                    ifUserNotRespond();
                    //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
                    if (mediaRecorderRef.current == null && isMobile) {
                        // console.log("mobile..")
                        startRecording();
                        checkStatusForSpeechMethod = true;
                    }
                    if (testNo === "Test1Sec2") {
                        oneMinuteTimeout = setTimeout(() => {
                            setSec2Timer(false);
                            setSec2StopTimerTwominute(false);
                            //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
                            if (isMobile) {
                                // console.log("mobile..")
                                stopRecordingForOpenAIMethod();
                                checkStatusForSpeechMethod = false;
                            }

                            playScript("Your one minutes of speaking free test has been ended please stop speaking.That was about section 2. Thanks.");
                            sendSpeakingtextToBackend(document.getElementById('transcriptText').textContent);

                        }, 65000);
                    } else {
                        oneMinuteTimeout = setTimeout(() => {
                            setSec2Timer(false);
                            setSec2StopTimerTwominute(false);
                            //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
                            if (isMobile) {
                                // console.log("mobile..")
                                stopRecordingForOpenAIMethod();
                                checkStatusForSpeechMethod = false;
                            }

                            playScript("Your two minutes of speaking has been ended please stop speaking.That was about section 2. Thanks.");
                            sendSpeakingtextToBackend(document.getElementById('transcriptText').textContent);

                        }, 120000);
                    }


                }, 60000);
            }, 1000);


        }

    };



    async function mainStop() {
        console.log("main functions---------------------------")
        localStorage.setItem("SpeakingSec2Test", testNo);
        setsec2SpeakingTime(false)
        clearTimeout(oneMinuteTimeout);
        preparationFlag = false;
        setCurrectTimer(false)
        // playScript("your one minute preparation time has been end please beging start speaking");
        setSec2Timer(false);
        setSec2StopTimerOneminute(false);
        setSec2Timer(true);
        setSec2StopTimerTwominute(true);
        await playScript("Your one minute preparation time has ended. Please begin speaking.");
        ifUserNotRespond()
        setTimeout(() => {
            //code below is for scroll down to the show answer when user start speaking 
            let scrollPage = document.getElementById("scrollPageToUserAnswer");
            let pagePosition = scrollPage.offsetTop;
            window.scrollTo({ top: pagePosition - 550, behavior: 'smooth' });

            //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
            if (mediaRecorderRef.current == null && isMobile) {
                // console.log("mobile..")
                startRecording();
            }
            checkStatusForSpeechMethod = true;
        }, 5000);


        //if Test1Sec-2 will running 
        if (testNo === "Test1Sec2") {
            TwoMinuteTimeout = setTimeout(async () => {
                setSec2Timer(false);
                //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
                if (isMobile) {
                    // console.log("mobile..")
                    stopRecordingForOpenAIMethod();
                    checkStatusForSpeechMethod = false;
                }

                setSec2StopTimerTwominute(false);
                await playScript("Your One minutes of speaking free test has been ended please stop speaking.That was about section 2. Thanks.");
                await sendSpeakingtextToBackend(document.getElementById('transcriptText').textContent);

            }, 65000);
        } else {
            TwoMinuteTimeout = setTimeout(async () => {
                setSec2Timer(false);
                //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
                if (isMobile) {
                    // console.log("mobile..")
                    stopRecordingForOpenAIMethod();
                    checkStatusForSpeechMethod = false;
                }

                setSec2StopTimerTwominute(false);
                await playScript("Your two minutes of speaking has been ended please stop speaking.That was about section 2. Thanks.");
                await sendSpeakingtextToBackend(document.getElementById('transcriptText').textContent);

            }, 120000);
        }

    }


    const ifUserNotRespond = () => {
        if (StopPlay == null) {
            let speakMainTimer = 0;
            StopPlay = setInterval(function () {
                speakMainTimer++;
                console.log('speakMainTimer')
                console.log(speakMainTimer)
                if (speakMainTimer == 23) {
                    console.log("Warningn message...")
                    playScript("You are not responding we are going to finished the test...")
                }
                if (speakMainTimer == 30) {
                    console.log("Leaving messages...");
                    stopRecording();
                    history.push("/Pages/Pages/Speaking-Module");
                    //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
                    if (isMobile) {
                        // console.log("mobile..")
                        stopRecordingForOpenAIMethod();
                        checkStatusForSpeechMethod = false;
                    }

                }
            }, 1000);
        }
    }


    //leaving message to the user
    const LeaveSpeech = async () => {
        await playScript("You are not responding , We are going to finish the test.")
    }



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

    }

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


    //    console.log(userSpeechMainData) 
    return (

        <section className="appie-hero-area click-Speaking relative">
            {/* Show to the user that Which test & Section Number they are giving-- */}
            <ShowTestName
                testNo={testNo}
            />
            {/* //need to know before start the test sections */}
            <div className="w-full mt-[-70px] grid  justify-center gap-0 h-auto  box-border mb-3 " >
                {NeedTips && (
                    <div className={`bg-red-200  rounded-[50px] ${testNo == "Test1Sec2" ? "w-[98vw] sm:w-[550px]" : "w-[90vw] sm:w-[500px]"}`}>
                        <div className="w-full flex justify-between align-middle p-1">
                            <div className="flex">
                                <div className="bg-blue-200 w-[25px] h-[25px] rounded-[50%] ml-2 flex justify-center align-middle"><i className="fal fa-check m-auto" /></div>
                                {
                                    testNo == "Test1Sec2" ? <p className="ml-3 pt-[2px] text-black font-bold text-[10px] sm:text-[16px]">In premium Version the speaking time will be 2 minutes.</p> : <p className="ml-3 pt-[2px]  needEffect" data-text="NEED A SILENT PLACE">"NEED A SILENT PLACE"</p>
                                }
                            </div>
                            <div className="text-white text-[17px] font-bold mr-3  cursor-pointer"
                                onClick={() => { setNeedTips(false) }}
                            >X</div>
                        </div>
                    </div>
                )
                }
            </div>

            {/* main section */}

            <div className="w-full mt-[-10px] grid  justify-center gap-0 h-auto  box-border " >
                <div className=" w-[90vw] sm:w-[500px] bg-white p-2  rounded ">
                    <div className="flex justify-between w-full  p-1">
                        <h5 className="">Examiner's Speech</h5>
                        <button
                            className="p-1 rounded-[50%] text-center"
                            style={{ background: ShowQuestion ? "orange" : "pink" }}
                            onClick={() => { setShowQuestion(!ShowQuestion) }}>
                            {ShowQuestion ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                    </div>
                    {ShowQuestion && (<div>{SQuestion}
                    </div>)}
                </div>
            </div>
            {/* {
                Sec2Timer && (<> */}
            <div className="w-full  grid   justify-center gap-0   box-border " style={{ display: Sec2StopTime ? "none" : "grid" }}>
                <div className=" w-[90vw] sm:w-[500px] rounded ">
                    <div className=" w-full flex justify-center align-middle">
                        <div className="p-1 text-3xl rounded">
                            {sec2StopTimerOneminute && <div className="grid grid-cols-2 gap-2 w-[200px] justify-center align-middle p-2 bg-sky-200 rounded">
                                <BiTimer className="m-auto" />
                                <div className="grid grid-cols-1 justify-center align-middle">
                                    < Timer Second={60} setsec2SpeakingTime={setsec2SpeakingTime} />
                                    <p className="text-xl">{sec2SpeakingTime ? "Sec" : "Min : Sec"}</p>
                                </div>
                            </div>}
                            {sec2StopTimerTwominute && <div className="grid grid-cols-2 gap-2 w-[200px] justify-center align-middle p-2 bg-sky-200 rounded">
                                <BiTimer className="m-auto" />
                                <div className="grid grid-cols-1 justify-center align-middle">
                                    {
                                        testNo === "Test1Sec2" ? <>
                                            < Timer Second={65} setsec2SpeakingTime={setsec2SpeakingTime} />
                                            <p className="text-xl">{sec2SpeakingTime ? "Sec" : "Min : Sec"}</p>
                                        </> : <>
                                            < Timer Second={120} setsec2SpeakingTime={setsec2SpeakingTime} />
                                            <p className="text-xl">{sec2SpeakingTime ? "Sec" : "Min : Sec"}</p>
                                        </>
                                    }

                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            {/* </>)
            } */}
            {
                sec2StopTimerOneminute && (
                    <>
                        <div className="w-full  grid   justify-center gap-0 mb-2 mt-1   box-border " >
                            <div className=" w-[90vw] sm:w-[500px] rounded ">
                                <div className=" w-full flex justify-end align-middle">
                                    <i className="text-3xl w-[100px] text-[9px] sm:w-[120px] sm:text-[12px] text-center text-black font-bold rounded cursor-pointer hover:bg-red-200 bg-blue-300" onClick={() => { mainStop() }}>{"Skip preparation"}</i>

                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {

                testNo.match(/Sec2/gi) && (<>
                    <div className="w-full  grid justify-center gap-0   box-border " >
                        <div className=" w-[90vw] sm:w-[500px] bg-blue-300 rounded ">
                            <div className=" w-full">
                                <textarea name="section2TextArea" id="" className="p-2 w-full h-[43px] bg-transparent" placeholder="You can practice here"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  grid mt-2  justify-center gap-0   box-border " >
                        <div className=" w-[90vw] sm:w-[470px] bg-white rounded">
                            <div id={'questions'} className=" w-full">

                            </div>
                        </div>
                    </div></>)
            }



            <div className=" w-full flex justify-center mt-[23px] mb-[30px]">
                <div className="grid grid-cols-1 w-100vw gap-2 SpeakingClickPop ml-[50px]">
                    <div
                        onClick={isIconClicked ? stopRecording : stsrSpeechRec}
                        role="button"
                        className="SpeakingIConsDiv"
                    >
                        {isIconClicked ? <i className="fas fa-pause text-blue-500" /> : <i className="fas fa-play text-blue-500" />}
                    </div>
                    <div id={'SpeakingState'} className=" mt-3 ml-[-41px] sm:ml-[-35px] text-center
                     font-bold  w-[150px] text-[16px] sm:text-[19px] rounded bg-white text-blue-600">
                        {SpeakingState}
                    </div>
                </div>

            </div> <br />


            {/* here is showing the user Answers */}
            <div className="w-full grid  justify-center gap-0 mt-2  h-auto  box-border" >
                <div className=" w-[90vw] sm:w-[500px] bg-white p-2  rounded  translate-y-[-47px]" id="scrollPageToUserAnswer" >
                    <div className="flex justify-between  w-full  p-1">
                        <h5 className="">Your Speech</h5>
                        <button
                            className=" p-1 rounded-[50%] text-center"
                            style={{ background: ShowAnswers ? "orange" : "pink" }}
                            onClick={() => { setShowAnswers(!ShowAnswers) }}>
                            {ShowAnswers ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                    </div>
                    {ShowAnswers && (<div id={'transcriptText'}>
                        {isMobile && (transcriptTextbyOpenAi && transcriptTextbyOpenAi)}
                        {!isMobile && (transcript && transcript)}
                    </div>)}

                </div>
            </div>

            {/* for-Result-Pop-Up */}
            <div className="Result-PopUp pt-[120px]  fixed top-2 left-2 w-[90%] sm:w-[100%]">
                {isloading && (<section className="fixed top-2 left-2 w-[90%] sm:w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[100000] grid-cols-1 grid-rows-5">
                    <div className="fixed top-[30%]  left-[26%] z-[200000] sm:left-[45%] w-[100vw] h-[100vh]">
                        <div className="flex opacity-6 justify-center align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
                            <div className="bg-white rounded-[15px] p-3 h-auto">
                                <ClockLoader size={100} color="#36d7b7" />
                                <div className="w-full flex justify-center p-1 mt-1 bg-sky-300 text-white"
                                    style={{ borderTopLeftRadius: "27px", borderTopRightRadius: "27px" }}
                                >
                                    <Timer Second={60} setsec2SpeakingTime={setsec2SpeakingTime} />

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



                {/* checkByBrowser if user denied the recorder  */}
                <PermissionDenieP showPerPopUp={showPerPopUp} setShowPerPopUp={setShowPerPopUp} />



            </div>
            {/* hidden timer for of the recorder */}
            <div className="w-full text-center invisible  p-1">
                <SStopTimer Second={500} stopRecording={stopRecording} LeaveSpeech={LeaveSpeech} />
            </div>
            {/* Network Error PopUp */}
            {/* <NetworkCom /> */}

        </section>

    );
}

export default ClickSpeaking;
