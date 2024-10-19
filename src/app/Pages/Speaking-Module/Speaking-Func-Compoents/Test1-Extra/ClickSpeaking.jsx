// "use client"
// import React, { useEffect, useState, useRef } from "react";
// import "../allStyle/ClickSpeaking.css";
// import { isMobile } from "react-device-detect";
// import { BiWifiOff } from "react-icons/bi";
// import { FcBusinesswoman } from "react-icons/fc";
// import { GiOldMicrophone } from "react-icons/gi";
// import Image from "next/image";
// import { useReactMediaRecorder } from "react-media-recorder";
// import axios from "axios";
// import hark from "hark";
// import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// // import NotAnsweringTimer from "../Pages/TimerForNotRes";
// // import SStopTimer from "../Pages/S-secTimer";
// // import Timer from "../../WritingAllTests/Writing-All-Pages/Writing-Importand/Pages/Timer";

// import { ClockLoader } from "react-spinners";
// import { useRouter } from 'next/navigation';
// import PermissionDenieP from "../Pages/PermissionDenieP.jsx";
// //import NetworkCom from "../../Network/index";
// import audioPlaySound from "../../../../../assets/Audios/playAudioForSpeaking.wav"
// import { CheckPaymentStatus } from "../../../Payments/CkeckPayment/CheckPayments.js";
// import { useStateContext } from "../../../../../contexts/ContextProvider";
// import { localeCompare } from "../Pages/CompareFunction.js"

// import { SPEAKING_POST_FOR_SET_SCORES, SPEAKING_POST_TO_GET_RESPONSE_USERDATA } from "../../../../../assets/URL's/AllUrl.js";
// import { StepShowFunction } from "../Pages/StepShowFunction.js";
// import AnswerSelectCom from "../Pages/AnswerSelectCom.js";
// import ShowTestName from "../Pages/ShowTestName.jsx";


// // End of the importing==========================================

// var SpeechSDK;
// var synthesizer;
// var player;
// var firstplay = true;
// let stream;
// var timeoutHandle = null;
// let initialFlag = false;
// var timeoutSpeechBreak;
// var StopPlay;
// //below variable for collect user times that he/she gave into their answer
// var collectUserTime;
// let checkPunctuationStatus = 1;
// let checkStatusForSpeechMethod = false;


// var globalSpeakingState = ''
// async function Initialize(onComplete) {
//     initialFlag = true;
//     if (!!window.SpeechSDK) {
//         await onComplete(window.SpeechSDK);
//         initialFlag = false;
//         console.log("Speaking-loader-complite")
//     } else {
//         initialFlag = false;
//         console.log("Speakin-loader-not-complite");
//     }
// }
// var startSynthesisAsyncButton;
// startSynthesisAsyncButton = document.getElementById("startSynthesisAsyncButton");
// Initialize(function (speechSdk) {
//     SpeechSDK = speechSdk;
// });



// const createCollectionsInIndexesDB = () => {
//     //connect the indexDB for storing data -----------------------
//     //prefixes of implementation that we want to test
//     const windowIndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//     //prefixes of window.IDB objects
//     window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
//     window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange


//     if (!windowIndexedDB) {
//         window.alert("Your browser doesn't support a stable version of IndexedDB.")
//     }

//     // var db;
//     var request = windowIndexedDB.open("newDatabase", 2);

//     request.onerror = function (event) {
//         console.log("error: ", event);
//     };

//     request.onupgradeneeded = function (event) {
//         var db = request.result;
//         // var objectStore = db.createObjectStore("employee", {
//         //     keyPath: "id"
//         // });
//         if (!db.objectStoreNames.contains("userData")) {
//             db.createObjectStore("userData", {
//                 keyPath: "ID",
//             }
//             )
//         }
//         if (!db.objectStoreNames.contains("userSpeech")) {
//             db.createObjectStore("userSpeech", {
//                 keyPath: "ID",
//             }
//             )
//         }
//         if (!db.objectStoreNames.contains("showDataInResult")) {
//             db.createObjectStore("showDataInResult", {
//                 keyPath: "ID",
//             }
//             )
//         }

//     }
//     request.onsuccess = function (event) {
//         console.log("success Database created... ");
//     };

// }






// //for ielts scores----
// let ieltswordscore = 0;
// // Examiner audio Satrt


// //Exeminar speaking process start

// //user SpeechTimeCollect --
// let collectUserSpeechTime = 0;

// //user Speech Words Collect
// let userEveryAnsCount = 0;


// // Function to convert audio blob to base64 encoded string
// const audioBlobToBase64 = (blob) => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             const arrayBuffer = reader.result;
//             const base64Audio = btoa(
//                 new Uint8Array(arrayBuffer).reduce(
//                     (data, byte) => data + String.fromCharCode(byte),
//                     ''
//                 )
//             );
//             resolve(base64Audio);
//         };
//         reader.onerror = reject;
//         reader.readAsArrayBuffer(blob);
//     });
// };



// function ClickSpeaking({ testNo, setPassComment, setWaveTit }) {
//     const { setShoeSpeakingResult, speakingStepsNo, setSpeakingStepNo } = useStateContext();
//     const history = useRouter();

//     //all localstorages data storing into states...........
//     const [userMainToken, setuserMainToken] = useState("");
//     const [userEmail, setuserEmail] = useState("")
//     const [userName, setuserName] = useState("");
//     const [userSpeakingTestNo, setuserSpeakingTestNo] = useState()



//     //other states...
//     const [playAudio, setPlayAudio] = useState("");
//     const [checkNetWorkStstus, setCheckNetworkStatus] = useState(false);
//     const [sampleAns, setSampleAns] = useState([]);

//     const [SQuestion, setSQuestion] = useState("");
//     const [makeWave, setMakeWave] = useState(false);

//     const [showWave, setShowWave] = useState(false);
//     const [isIconClicked, setIsIconClicked] = useState(false);
//     const [showPerPopUp, setShowPerPopUp] = useState(false);
//     const [NeedTips, setNeedTips] = useState(true);
//     // const [notAnswering, setNotAnswering] = useState(false);    
//     const [isloading, setisloading] = useState(false);
//     const [SpeakingState, setSpeakingState] = useState("Play for start..");
//     const [forQuestionHide, setForQuestionHide] = useState(true);

//     //storing user Speech Ans data 
//     let storeUserSpeechAns = "";
//     //stroring steps question ok background color----------
//     let storeQuesStepOkArray = [];

//     const [StepNumbers, setStepNumbers] = useState(0);
//     const [showStepOk, setShowStepOk] = useState([]);
//     const [transcriptTextbyOpenAi, settranscriptTextbyOpenAi] = useState("");
//     const mediaRecorderRef = useRef(null);
//     const audioChunksRef = useRef([]);

//     const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//     const googleAPIKey = "AIzaSyDVksTONkieWNhplzhmpXTHCsYrjdDh1Mc";

//     //end of the declareing ariables............................




//     if (!googleAPIKey) {
//         throw new Error("REACT_APP_GOOGLE_API_KEY not found in the environment");
//     }


//     useEffect(() => {
//         //collect all user localstorage data...
//         setuserMainToken(localStorage.getItem("loginTOken"))
//         setuserEmail(localStorage.getItem('userEmail'));
//         setuserName(localStorage.getItem("userName"));
//         setuserSpeakingTestNo(localStorage.getItem("SpeakingTestNo"))



//         createCollectionsInIndexesDB();
//         //function below is for how many collecting the numbers of a test that how many questions exist 
//         // into that test
//         StepShowFunction(setSpeakingStepNo, testNo);
//     }, [])



//     //speaking-user-speech-recognation with OpenAI keys start function
//     const startRecording = async () => {
//         console.log("hellow i am runne-----------------------------------------------------------")
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             mediaRecorderRef.current = new MediaRecorder(stream);

//             mediaRecorderRef.current.ondataavailable = (event) => {
//                 if (event.data.size > 0) {
//                     audioChunksRef.current.push(event.data);
//                     // console.log(event.data);
//                 }
//             };

//             mediaRecorderRef.current.onstop = () => {
//                 console.log("stopped...")
//                 const audioBlob = new Blob(audioChunksRef.current, {
//                     type: isSafari ? "audio/mp4" : "audio/mp3",
//                 });
//                 sendAudioToWhisperAPI(audioBlob);
//                 audioChunksRef.current = [];
//                 stream.getTracks() // get all tracks from the MediaStream
//                     .forEach(track => track.stop()); // stop each of them
//                 mediaRecorderRef.current = null
//             };

//             let timermain = mediaRecorderRef.current.start(isSafari ? 1000 : 0);
//             console.log(timermain)
//         } catch (error) {
//             console.error("Error accessing microphone:", error);
//         }
//     };
//     //speaking-user-speech-recognation with OpenAI keys Stop function
//     const stopRecordingForOpenAIMethod = () => {
//         if (mediaRecorderRef.current) {
//             mediaRecorderRef.current.stop();
//         }
//     };
//     //speaking-user-speech-recognation with OpenAI keys send data to the wisper---------
//     const sendAudioToWhisperAPI = async (audioBlob) => {
//         console.log(audioBlob)
//         const formData = new FormData();
//         formData.append("file", audioBlob, `audio.mp3`);
//         formData.append("model", "whisper-1");
//         const base64Audio = await audioBlobToBase64(audioBlob);
//         console.log(base64Audio)
//         try {
//             const response = await axios.post(
//                 `https://speech.googleapis.com/v1/speech:recognize?key=${googleAPIKey}`,
//                 {
//                     config: {
//                         encoding: 'WEBM_OPUS',
//                         sampleRateHertz: 48000,
//                         languageCode: 'en-US',
//                         // enableAutomaticPunctuation: true,
//                     },
//                     audio: {
//                         content: base64Audio,
//                     },
//                 }
//             );

//             if (response.data.results) {
//                 response.data.results.map((mainData) => {
//                     if (mainData.alternatives[0].transcript) {
//                         settranscriptTextbyOpenAi((res) => res + mainData.alternatives[0].transcript + " " + " ");
//                     }
//                 })

//             }
//         } catch (error) {
//             console.error("Error transcribing audio:", error);
//         }
//     };

//     const {
//         transcript,
//         resetTranscript,
//         browserSupportsSpeechRecognition
//     } = useSpeechRecognition();
//     window.resetTranscriptG = resetTranscript;
//     const startListening = () => SpeechRecognition.startListening({
//         continuous: true,
//         language: 'en-US'
//     });
//     if (!browserSupportsSpeechRecognition) {
//         return null;
//     }
//     function stsrSpeechRec() {
//         record();
//         //remove this Question Steps color--when user start the conversation 
//         setShoeSpeakingResult([])
//         //if users is not in mobile in that case this package will be called && inisialized
//         if (isMobile) {
//             //start OpenAi speech recognation by function below
//             startRecording();
//         } else {
//             // alert("mobile...not")
//             startListening();
//         }
//     }







//     // the variable of the below for storing all user Speech into this variable for showing to the user into the database for making the UI;
//     var userSpeechMainData = "";

//     let smallTalkWarningSentence = ['Please dont answer in short sentence. It will reduce your score. I am repeating the question. ', 'Again dont    answer   the in short. Asking again.', 'Man you are doing it again']




//     // const msg = new SpeechSynthesisUtterance();
//     // msg.rate = .8;
//     var recordedText = "";
//     var doubleNotSpeaking = true;
//     var converstionSteps = 0;
//     var converstionStepsText = "";
//     var recordControlFlag = false;
//     var smallTalkWarningIndex = 0;
//     var spokenText = '';

//     const sendRecording = async (audioData) => {
//         console.log("Result is procced.....")
//         // first convert the audio data to base64
//         var reader = new FileReader();
//         reader.readAsDataURL(audioData);
//         return new Promise((resolve, reject) => {
//             reader.onloadend = function () {
//                 console.log(reader.result);
//                 if (userEmail) {
//                     addUserAudiodataToIndexedDb(reader.result);

//                 }
//                 //save user audio data & speech data for showing into the result page
//                 SaveUserIndexedDBAudioDataAllForResult(reader.result, userSpeechMainData)
//             };
//         });
//     };

//     history.listen = ((location, action) => {
//         SpeechRecognition.abortListening();
//         SpeechRecognition.stopListening();
//         clearInterval(timeoutSpeechBreak);
//         clearInterval(StopPlay);
//         StopPlay = null;
//         //  clearInterval(firstStopPlayTimer);
//         try {
//             stream.getTracks()[0].stop();
//             useReactMediaRecorder.stop();
//             window.playerG.pause();
//             firstplay = true;
//         } catch (error) {
//             console.log(error)
//         }
//     })

//     async function sendSpeakingtextToBackend(mainText) {
//         useReactMediaRecorder.stop();
//         var sentData = {
//             'inputs': mainText + "."  // extra full stop added because if corrections are not working yet this full stop will help to make scores
//         }
//         console.log(sentData)
//         setisloading(true);
//         console.log("Parvez text-finished..")
//         axios.post(SPEAKING_POST_TO_GET_RESPONSE_USERDATA, sentData)
//             .then((res) => {
//                 console.log(res)
//                 //clear timer that used when exam is running &  user not responding.
//                 clearInterval(StopPlay);
//                 StopPlay = null;
//                 //  clearInterval(firstStopPlayTimer);
//                 // console.log(res.data);
//                 if (res.data && userName && userEmail) {
//                     //save speaking speech strign data to indexDB ----for showing them dashboard---(22/2/24);
//                     addUserAudiodataSTRToIndexedDb(userSpeechMainData);
//                 }

//                 setPassComment(true);
//                 setTimeout(() => {
//                     setWaveTit(false);
//                 }, 4000);


//                 let FluencyAndCoherence = (Number(res.data.FluencyScore) + Number(res.data.CoherenceScore)) / 2;
//                 let LexicalResourceScore = Number(res.data.LexicalResourceScore);
//                 let GrammaticalRangeAccuracy = Number(res.data.GrammaticalRangeandAccuracyScore);
//                 //Pronanucation score make----
//                 let makePronanucationScor = (FluencyAndCoherence + LexicalResourceScore + GrammaticalRangeAccuracy) / 3
//                 console.log(makePronanucationScor)
//                 let pronounScore = makePronanucationScor.toFixed(1);
//                 let PronaunacationsResult = Math.round(pronounScore * 2) / 2


//                 //IeltsScore makeing-----------
//                 let makeIeltsScore = (FluencyAndCoherence + LexicalResourceScore + GrammaticalRangeAccuracy + PronaunacationsResult) / 4;
//                 console.log(makeIeltsScore)
//                 let RoundIelts = makeIeltsScore.toFixed(1);
//                 let totalIeltsScores = Math.round(RoundIelts * 2) / 2

//                 //save user result data , Speech ans data & step Number into the localhost below...
//                 localStorage.setItem("showSpeakingResult", JSON.stringify({
//                     ieltsResult: totalIeltsScores,
//                     FluencyAndCoherence: FluencyAndCoherence,
//                     LexicalResourceScore: LexicalResourceScore,
//                     GrammaticalRangeandAccuracyScore: GrammaticalRangeAccuracy,
//                     PronaunacationsScore: PronaunacationsResult,
//                     questionStepNumber: speakingStepsNo,
//                     userSpeechAnsData: storeUserSpeechAns,
//                     totalSpeechData: userSpeechMainData,
//                     sectionNo: testNo
//                 }));
//                 let forSaveData = {
//                     ieltsResult: totalIeltsScores,
//                     FluencyAndCoherence: FluencyAndCoherence,
//                     LexicalResourceScore: LexicalResourceScore,
//                     GrammaticalRangeandAccuracyScore: GrammaticalRangeAccuracy,
//                     PronaunacationsScore: PronaunacationsResult,
//                     questionStepNumber: speakingStepsNo,
//                     userSpeechAnsData: storeUserSpeechAns,
//                     sectionNo: testNo
//                 }
//                 //save Question Steps color 
//                 localStorage.setItem("questionStepColorArr", JSON.stringify(storeQuesStepOkArray))

//                 // PostSpeakingScores(forSaveData);
//                 //store user data to the data base ------


//                 stopRecording();
//                 axios({
//                     method: "post",
//                     url: SPEAKING_POST_FOR_SET_SCORES,
//                     // "http://localhost:8080/api/user/SpeakingResults",

//                     headers: {
//                         "Authorization": `Bearer ${userMainToken}`,
//                         'Content-Type': 'application/json'
//                     },
//                     data: {
//                         "username": userName,
//                         "userEmail": userEmail,
//                         "LexicalResourceScore": forSaveData.LexicalResourceScore || "",
//                         "GrammaticalRangeandAccuracyScore": forSaveData.GrammaticalRangeandAccuracyScore || "",
//                         "PronaunacationsScore": forSaveData.PronaunacationsScore,
//                         "ieltsScore": forSaveData.ieltsResult || "",
//                         "FluencyAndCoherence": forSaveData.FluencyAndCoherence,
//                         "questionStepNumber": forSaveData.questionStepNumber,
//                         "questionStepColors": storeQuesStepOkArray.toString(),
//                         // "userSpeechAnsData": x.userSpeechAnsData,
//                         "userTotalSpeech": userSpeechMainData,
//                         "SectionName": testNo
//                     },
//                 })
//                     .then((res) => {
//                         console.log(res.data);
//                         // console.log(typeof res.data.ieltsRate);
//                         setisloading(false);
//                         //after getting the result make those variable empty below---
//                         storeUserSpeechAns = "";
//                         storeQuesStepOkArray = []

//                         history.push("/Speaking-user-Result-Page");
//                         // window.location.reload();
//                         // stopRecording();

//                     })
//                     .catch((e) => {
//                         console.log(e);
//                         setisloading(false);
//                         //after getting the result make those variable empty below---
//                         storeUserSpeechAns = "";
//                         storeQuesStepOkArray = []

//                         history.push("/Speaking-user-Result-Page");
//                         // window.location.reload();
//                         // stopRecording();
//                     })

//             })
//             .catch((err) => {
//                 setisloading(false);
//                 alert("Server error please try again or wait for the server response..")
//                 console.log(err)
//             });
//     }
//     async function smallTalkError(text) {
//         await playScript(smallTalkWarningSentence[smallTalkWarningIndex] + text)
//         smallTalkWarningIndex++;
//         converstionSteps--;

//     }



//     //function for make conditions depend on user speech time & user Speech words
//     const conditionsDependsOnUserSpeech = (StepNumber) => {
//         console.log(collectUserSpeechTime);
//         console.log(userEveryAnsCount)
//         console.log(typeof collectUserSpeechTime)
//         // console.log(Time);
//         // console.log(SpechWords);


//         let backGoundColor = "";
//         if (StepNumber > 0) {
//             if (userEveryAnsCount < 10) {
//                 backGoundColor = StepNumber + "red"
//             } else if (userEveryAnsCount <= 18) {
//                 backGoundColor = StepNumber + "yellow"
//             } else {
//                 backGoundColor = StepNumber + "green"
//             }

//         } else {
//             backGoundColor = StepNumber + "green"
//         }
//         // setShowStepOk(oldArray => [backGoundColor, ...oldArray]);
//         setShoeSpeakingResult(oldArray => [backGoundColor, ...oldArray]);
//         storeQuesStepOkArray.push(backGoundColor);
//         collectUserSpeechTime = 0
//         userEveryAnsCount = 0;
//     }


//     async function Test1Sec1() {
//         if (converstionSteps == 0 && converstionStepsText == '') {
//             if (!userSpeakingTestNo) {
//                 await playScript(
//                     "Hello and welcome to the IELTS speaking test. Jone is my name. I am your examiner. Are you Ready?"
//                 );
//                 setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])

//             } else {
//                 await playScript("Are you ready to take the test then?");
//                 setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"]);
//             }

//         }
//         converstionSteps++;
//         if (converstionStepsText != '') {
//             if (converstionSteps == 0 && converstionStepsText == '') {
//                 if (!userSpeakingTestNo) {
//                     await playScript(
//                         "Hello and welcome to the IELTS speaking test. Jone is my name. I am your examiner. Are you Ready?"
//                     );
//                     setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test.", "2, Yes, I am reay.You can proceed the test"]);

//                 } else {
//                     await playScript("Are you ready to take the test?");
//                     setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"]);
//                 }

//             }
//             if (!userSpeakingTestNo) {
//                 if (converstionSteps == 1) {
//                     await playScript(
//                         "I'll start your exam now. What's your full name, please?"
//                     );

//                 } else if (converstionSteps == 2) {
//                     if (converstionStepsText.length < 10) {
//                         await smallTalkError(" What's your full name, please?");
//                     }
//                     else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
//                         await playScript("Ok , I am repeating.  What's your full name?");
//                         converstionSteps--;
//                     }
//                     else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
//                         await playScript("So,for this section. I'm going to ask some general questions. Where do you live? ");
//                         setSampleAns(["Simply you can say your area/ or place where you are live in. As like I am living in Dhaka,Bangladesh"])
//                         localStorage.setItem("SpeakingTestNo", testNo);
//                         conditionsDependsOnUserSpeech(0)

//                     }
//                     else {
//                         await playScript("Sorry, what's your name?");
//                         converstionSteps--;
//                     }

//                 } else if (converstionSteps == 3) {
//                     if (converstionStepsText.length < 10) {
//                         await smallTalkError(" What is your favorite food?");
//                     }
//                     else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
//                         await playScript("Ok , I am repeating.  What is your favorite food?");
//                         converstionSteps--;
//                     }
//                     else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
//                         converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
//                         converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
//                         await playScript("OK, let's talk about food. What is your favorite food?");
//                         setSampleAns(["My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef."]);
//                         conditionsDependsOnUserSpeech(1)
//                     } else {
//                         await playScript("Sorry I cannot understand your answer. What is your favorite food?");
//                         setSampleAns([" My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef.", "2, I live in kolkata,India"])
//                         converstionSteps--;
//                     }

//                 }
//             } else {
//                 if (converstionSteps == 1) {
//                     await playScript("Okay. Are you happy today?");
//                     setSampleAns(["Yes, I am feelling well today", "Umm, yeah i am good.Just felling kind of nervous"]);

//                 }
//                 if (converstionSteps == 2) {
//                     if (converstionStepsText.length < 10) {
//                         await smallTalkError("Are you happy today?");
//                     }
//                     else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
//                         await playScript("Ok , I am repeating.Are you happy today?");
//                         converstionSteps--;
//                     }
//                     else {
//                         conditionsDependsOnUserSpeech(0)
//                         await playScript("Okay. What do you do?");
//                         setSampleAns([" I’m currently working as a lawyer for an immigration law firm. In fact, just last week my firm settled a case in which we were able to reunite a father with his family and prevented him from being deported."])
//                     }


//                 }
//                 if (converstionSteps == 3) {
//                     if (converstionStepsText.length < 10) {
//                         await smallTalkError(" What do you do?");
//                     }
//                     else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
//                         await playScript("Ok , I am repeating. What do you do?");
//                         converstionSteps--;
//                     }
//                     else {
//                         await playScript("So, let's talk about food. What is your favorite food?");
//                         setSampleAns(["1. My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef.", "I love fried chicken, especially chicken from KFC. My favorite is the big bucket of chicken legs. I would eat it every day if it wasn’t so unhealthy. "]);
//                         conditionsDependsOnUserSpeech(1)
//                     }


//                 }
//             }

//             if (converstionSteps == 4) {
//                 if (converstionStepsText.length < 10) {
//                     await smallTalkError("What is your favorite food?");
//                 }
//                 else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
//                     await playScript("Ok , I am repeating.What is your favorite food?");
//                     converstionSteps--;
//                 }
//                 else if (converstionStepsText.match(/my/gi) || converstionStepsText.match(/food/gi) ||
//                     converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/pizza/gi) ||
//                     converstionStepsText.match(/noodles/gi) || converstionStepsText.match(/flavor/gi) ||
//                     converstionStepsText.match(/spicy/gi) || converstionStepsText.match(/beef/gi) ||
//                     converstionStepsText.match(/dish/gi) || converstionStepsText.match(/cheese/gi) ||
//                     converstionStepsText.match(/pasta/gi) || converstionStepsText.match(/fish/gi) ||
//                     converstionStepsText.match(/chicken/gi) || converstionStepsText.match(/delicious/gi)
//                 ) {
//                     await playScript("Okay. Do you like trying new foods?");

//                     setSampleAns([" Yes i do.There are so many dishes in other countries that you would never try if you do not traveled outside the U.S. Traveling somewhere new opens your eyes and your taste buds to a whole new range of authentic flavor profiles and foods that you would’ve otherwise been missing out on."]);
//                     conditionsDependsOnUserSpeech(2)
//                 } else {
//                     await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is your favorite food?");
//                     converstionSteps--;
//                 }

//             }

//             else if (converstionSteps == 5) {
//                 if (converstionStepsText.length < 10) {
//                     await smallTalkError("Do you like trying new foods?");
//                 }
//                 else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
//                     await playScript("Ok , I am repeating.Do you like trying new foods?");
//                     converstionSteps--;
//                 }
//                 else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
//                     converstionStepsText.match(/actually/gi) || converstionStepsText.match(/basically/gi) ||
//                     converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
//                     converstionStepsText.match(/love/gi) || converstionStepsText.match(/try/gi) ||
//                     converstionStepsText.match(/new/gi) || converstionStepsText.match(/food/gi) ||
//                     converstionStepsText.match(/many/gi) || converstionStepsText.match(/time/gi)
//                 ) {
//                     await playScript("Great. So, What do you usually have in the morning, coffee or tea?");
//                     setSampleAns(["Basically i take tea in the morning.Tea has less caffeine than coffee. Like coffee, tea can also help relieve morning fatigue. But coffee can give you more energy than tea, but its disadvantages are also different on an empty stomach. Additionally, the caffeine in tea is not the only thing that will help you wake up and kick-start your brain in the morning. Tea also contains L-theanine and amino acids that can be metabolized by the body."
//                     ]);
//                     conditionsDependsOnUserSpeech(3)
//                 } else {
//                     await playScript("Sorry, Your answer is not relevent.I'm saying it again. Do you like trying new foods?");

//                     converstionSteps--;
//                 }
//             }
//             else if (converstionSteps == 6) {
//                 if (converstionStepsText.length < 10) {
//                     await smallTalkError("What do you usually have in the morning, coffee or tea?");
//                 }
//                 else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
//                     await playScript("Ok , What do you usually have in the morning, coffee or tea?");
//                     converstionSteps--;
//                 }
//                 else if (converstionStepsText.match(/actually/gi) || converstionStepsText.match(/do/gi) ||
//                     converstionStepsText.match(/take/gi) || converstionStepsText.match(/get/gi) ||
//                     converstionStepsText.match(/make/gi) || converstionStepsText.match(/breakfat/gi) ||
//                     converstionStepsText.match(/early/gi) || converstionStepsText.match(/wake/gi) ||
//                     converstionStepsText.match(/can/gi) || converstionStepsText.match(/yes/gi) ||
//                     converstionStepsText.match(/no/gi) || converstionStepsText.match(/usually/gi) ||
//                     converstionStepsText.match(/morning/gi) || converstionStepsText.match(/coffee/gi) ||
//                     converstionStepsText.match(/tea/gi) || converstionStepsText.match(/water/gi) ||
//                     converstionStepsText.match(/make/gi) || converstionStepsText.match(/breakfat/gi)

//                 ) {
//                     await playScript("OK . So, do you like fast food?");
//                     setSampleAns([" Yes i love or like fast food.I’m guilty of it; all of us have been at some point; there are days where you just don’t feel like cooking, and it’s as simple as that. Maybe you feel tired – or have had a long day; exhaustion soon sinks in, as you find yourself one step closer to just drifting to sleep, and worrying about food tomorrow. Fortunately, fast food comes in handy during these times – by buying you a little extra time to rest – or work on  whatever other tasks you need to get done."
//                     ]);
//                     conditionsDependsOnUserSpeech(4)
//                 } else {
//                     await playScript("Sorry, Your answer is not relevent. I'm saying it again. What do you usually have in the morning coffee or tea?");
//                     converstionSteps--;
//                 }

//             }
//             else if (converstionSteps == 7) {
//                 if (converstionStepsText.length < 10) {
//                     await smallTalkError(" do you like fast food?");
//                 }
//                 else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
//                     await playScript("I am Repeatin ,  do you like fast food?");
//                     converstionSteps--;
//                 }
//                 else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
//                     converstionStepsText.match(/actually/gi) || converstionStepsText.match(/do/gi) ||
//                     converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
//                     converstionStepsText.match(/fast/gi) || converstionStepsText.match(/food/gi) ||
//                     converstionStepsText.match(/Yeah/gi) || converstionStepsText.match(/tast/gi) ||
//                     converstionStepsText.match(/calorie/gi) || converstionStepsText.match(/course/gi) ||
//                     converstionStepsText.match(/healthy/gi) || converstionStepsText.match(/high/gi) ||
//                     converstionStepsText.match(/fat/gi) || converstionStepsText.match(/gym/gi) ||
//                     converstionStepsText.match(/few/gi) || converstionStepsText.match(/many/gi) ||
//                     converstionStepsText.match(/more/gi) || converstionStepsText.match(/time/gi) ||
//                     converstionStepsText.match(/once/gi) || converstionStepsText.match(/some/gi) ||
//                     converstionStepsText.match(/week/gi) || converstionStepsText.match(/day/gi) ||
//                     converstionStepsText.match(/month/gi) || converstionStepsText.match(/sometime/gi)

//                 ) {
//                     await playScript("OK . That was about section 1. Thanks.");
//                     setSampleAns([
//                         "Cooking meals at home takes time. It takes time to shop for the ingredients, prep and cook the food, and then eat the meal and clear up the dishes. Fast food is certainly popular because it is a quick and easy meal. No time is spent shopping, prepping, or cooking at all."]);
//                     conditionsDependsOnUserSpeech(5)
//                     await sendSpeakingtextToBackend(recordedText);
//                 } else {
//                     await playScript("Sorry, Your answer is not relevent.  I'm saying it again.  do you like fast food?");
//                     converstionSteps--;
//                 }

//             }

//         }

//         console.log("converstionStepsText");
//         console.log(converstionStepsText);
//         converstionStepsText = "";

//     }

//     async function checkingReplyofUser() {
//         await Test1Sec1();
//     }



//     const sendPrompt = async (prompt) => {
//         return axios.post(
//             "https://ipractestbackend.azurewebsites.net/completions",
//             { prompt }
//         );
//     };
//     var speakInterval = 0;

//     var firstStopPlayTimer;

//     async function playScript(msgText) {

//         recordControlFlag = false;


//         if (useReactMediaRecorder.state === "recording")
//             // useReactMediaRecorder.stop();
//             var ssmlFile = "Shakespeare.xml";
//         // store all Questiion data into the state

//         console.log(userSpeechMainData)
//         setSQuestion(msgText)
//         console.log(player);
//         var str = "<speak version=\"1.0\"";
//         str += " xmlns=\"http://www.w3.org/2001/10/synthesis\"";
//         str += " xml:lang=\"en-US\">";
//         str += "<say-as type=\"date:mdy\"> 1/29/2009 </say-as>";
//         str += "</speak>";
//         examinerSpeakProcessStart();
//         console.log(window.starSynthesis("somethign"))
//         //instade of below commented code...
//         // if (typeof window !== 'undefined' && window.starSynthesis) {
//         //     window.starSynthesis(msgText);
//         // }
//         // window.starSynthesis(msgText);    //!very important..


//     }

//     const record = async () => {

//         setIsIconClicked(!isIconClicked);
//         // synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);

//         if (firstplay) {
//             navigator.getUserMedia =
//                 navigator.getUserMedia ||
//                 navigator.webkitGetUserMedia ||
//                 navigator.mozGetUserMedia ||
//                 navigator.msGetUserMedia;
//             console.log(navigator)
//             try {
//                 if (navigator.getUserMedia || navigator.mediaDevices.getUserMedia) {

//                     console.log("Starting to record");

//                     stream = await navigator.mediaDevices.getUserMedia({
//                         audio: true,
//                         video: false,
//                     });
//                     // useReactMediaRecorder = new MediaRecorder(stream);
//                     // Also pass the stream to hark to create speaking events
//                     var speech = hark(stream, {});
//                     // Start the recording when hark recognizes someone is speakign in the mic

//                     speech.on("speaking", function () {
//                         setMakeWave(true);
//                         setPlayAudio(false)
//                         console.log("Speaking!..............");
//                         console.log('window.speechFinished');
//                         console.log(window.speechFinished);
//                         clearTimeout(timeoutSpeechBreak);
//                         // clearInterval(StopPlay);

//                         if (globalSpeakingState == 'ExaminerAudioEnd') {

//                             setSpeakingState('You are Speaking...');
//                             clearInterval(StopPlay);
//                             StopPlay = null;
//                             console.log("Speaking!");
//                             // setNotAnswering(false);

//                             doubleNotSpeaking = false;
//                             if (useReactMediaRecorder.state != "recording") {
//                                 useReactMediaRecorder.start();
//                             }

//                             speakInterval = 0;

//                             console.log(speakInterval);
//                         }
//                     });
//                     // When hark recognizes the speaking has stopped we can stop recording
//                     // The stop action will generate ondataavailable() to be triggered
//                     speech.on("stopped_speaking", function () {
//                         //Stop OpenAi/Google-Cloud speech recognation by function below----
//                         console.log(checkStatusForSpeechMethod)
//                         if (isMobile && checkStatusForSpeechMethod == true) {
//                             stopRecordingForOpenAIMethod();
//                             console.log("mobile..")
//                         }

//                         console.log("not ---- Speaking!..............");
//                         setMakeWave(false);
//                         //open google cloud / Open Ai speech recognation Methods in 30 mini seconds
//                         setTimeout(() => {
//                             //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
//                             if (mediaRecorderRef.current == null && isMobile) {
//                                 // console.log("mobile..")
//                                 if (checkStatusForSpeechMethod == true) {
//                                     startRecording();
//                                     console.log("hellow --- start-speaking")
//                                 }

//                             }

//                         }, 10);

//                         // console.log("user-not-speaking..............")
//                         if (!doubleNotSpeaking && globalSpeakingState == 'ExaminerAudioEnd') {

//                             // setNotAnswering(true);
//                             clearTimeout(timeoutSpeechBreak);
//                             timeoutSpeechBreak = setTimeout(function () {
//                                 // collect user speech time code below
//                                 console.log("user end  Speaking!..............");
//                                 clearInterval(collectUserTime);
//                                 //end-----

//                                 converstionStepsText = document.getElementById('transcriptText').textContent;
//                                 if (converstionStepsText != "") {
//                                     console.log('transcript')
//                                     globalSpeakingState = 'UsersSpeechProcessing';
//                                     setShowWave(false);
//                                     // converstionStepsText = document.getElementById('transcriptText').textContent;
//                                     let wordCount = converstionStepsText.trim().split(/\s+/).length;
//                                     console.log(wordCount);
//                                     //collect the user Speech word count into the variable
//                                     userEveryAnsCount = wordCount

//                                     let questionData = document.getElementById("getQuestionData").textContent;
//                                     //get user every answer words count by below code-----
//                                     let conversationalTextWordCount = converstionStepsText.split(" ").filter((e) => e != "");
//                                     // console.log(conversationalTextWordCount.length)
//                                     // console.log(typeof conversationalTextWordCount.length)
//                                     if (isMobile) {
//                                         if (conversationalTextWordCount.length > 5) {
//                                             // alert("yes..")
//                                             if (checkPunctuationStatus == 1) {
//                                                 // alert("APi-Number-1");
//                                                 axios.post("https://ipractest-406204.uc.r.appspot.com/speakingCorrection",
//                                                     {
//                                                         'textData': converstionStepsText
//                                                     })
//                                                     .then((res) => {
//                                                         userSpeechMainData += "Question:" + " " + questionData + "~";
//                                                         console.log(res.data.message);
//                                                         let submitData = res.data.message.slice(1, -1)
//                                                         console.log(submitData)

//                                                         // set the user Speech into a Vaariable....
//                                                         userSpeechMainData += "Answer:" + " " + submitData + "~";
//                                                         //store User speech Ans into the state below.....
//                                                         storeUserSpeechAns = storeUserSpeechAns + submitData
//                                                         recordedText = recordedText + submitData;
//                                                         console.log(userSpeechMainData);
//                                                         checkingReplyofUser();
//                                                         checkPunctuationStatus = 2



//                                                     }).catch((err) => {
//                                                         console.log(err);
//                                                         userSpeechMainData += "Question:" + " " + questionData + "~";
//                                                         // set the user Speech into a Vaariable....
//                                                         userSpeechMainData += "Answer:" + " " + converstionStepsText + "." + "~";
//                                                         //store User speech Ans into the state below.....
//                                                         storeUserSpeechAns = storeUserSpeechAns + converstionStepsText + "."
//                                                         recordedText = recordedText + converstionStepsText + ".";
//                                                         checkingReplyofUser();
//                                                         checkPunctuationStatus = 2

//                                                     });

//                                             } else if (checkPunctuationStatus == 2) {
//                                                 // alert("Api-number-2");
//                                                 axios.post("https://ipractest-406204.uc.r.appspot.com/speakingCorrection2",
//                                                     {
//                                                         'textData': converstionStepsText
//                                                     })
//                                                     .then((res) => {
//                                                         userSpeechMainData += "Question:" + " " + questionData + "~";
//                                                         console.log(res.data.message);
//                                                         let submitData = res.data.message.slice(1, -1)
//                                                         console.log(submitData)

//                                                         // set the user Speech into a Vaariable....
//                                                         userSpeechMainData += "Answer:" + " " + submitData + "~";
//                                                         //store User speech Ans into the state below.....
//                                                         storeUserSpeechAns = storeUserSpeechAns + submitData
//                                                         recordedText = recordedText + submitData;
//                                                         console.log(userSpeechMainData);
//                                                         checkingReplyofUser();
//                                                         checkPunctuationStatus = 3



//                                                     }).catch((err) => {
//                                                         console.log(err);
//                                                         userSpeechMainData += "Question:" + " " + questionData + "~";
//                                                         // set the user Speech into a Vaariable....
//                                                         userSpeechMainData += "Answer:" + " " + converstionStepsText + "." + "~";
//                                                         //store User speech Ans into the state below.....
//                                                         storeUserSpeechAns = storeUserSpeechAns + converstionStepsText + "."
//                                                         recordedText = recordedText + converstionStepsText + ".";
//                                                         checkingReplyofUser();
//                                                         checkPunctuationStatus = 3
//                                                     });

//                                             } else {
//                                                 {
//                                                     // alert("Api-number-2");
//                                                     axios.post("https://ipractest-406204.uc.r.appspot.com/speakingCorrection3",
//                                                         {
//                                                             'textData': converstionStepsText
//                                                         })
//                                                         .then((res) => {
//                                                             userSpeechMainData += "Question:" + " " + questionData + "~";
//                                                             console.log(res.data.message);
//                                                             let submitData = res.data.message.slice(1, -1)
//                                                             console.log(submitData)

//                                                             // set the user Speech into a Vaariable....
//                                                             userSpeechMainData += "Answer:" + " " + submitData + "~";
//                                                             //store User speech Ans into the state below.....
//                                                             storeUserSpeechAns = storeUserSpeechAns + submitData
//                                                             recordedText = recordedText + submitData;
//                                                             console.log(userSpeechMainData);
//                                                             checkingReplyofUser();
//                                                             checkPunctuationStatus = 1



//                                                         }).catch((err) => {
//                                                             console.log(err);
//                                                             userSpeechMainData += "Question:" + " " + questionData + "~";
//                                                             // set the user Speech into a Vaariable....
//                                                             userSpeechMainData += "Answer:" + " " + converstionStepsText + "." + "~";
//                                                             //store User speech Ans into the state below.....
//                                                             storeUserSpeechAns = storeUserSpeechAns + converstionStepsText + "."
//                                                             recordedText = recordedText + converstionStepsText + ".";
//                                                             checkingReplyofUser();
//                                                             checkPunctuationStatus = 1
//                                                         });

//                                                 }
//                                             }
//                                         } else {
//                                             // alert("no---")
//                                             userSpeechMainData += "Question:" + " " + questionData + "~";
//                                             // set the user Speech into a Vaariable....
//                                             userSpeechMainData += "Answer:" + " " + converstionStepsText + "." + "~";
//                                             //store User speech Ans into the state below.....
//                                             storeUserSpeechAns = storeUserSpeechAns + converstionStepsText + "."
//                                             recordedText = recordedText + converstionStepsText + ".";
//                                             setTimeout(() => {
//                                                 checkingReplyofUser();
//                                             }, 1000);
//                                         }
//                                     } else {
//                                         // alert("no---")
//                                         userSpeechMainData += "Question:" + " " + questionData + "~";
//                                         // set the user Speech into a Vaariable....
//                                         userSpeechMainData += "Answer:" + " " + converstionStepsText + "~";
//                                         //store User speech Ans into the state below.....
//                                         storeUserSpeechAns = storeUserSpeechAns + converstionStepsText
//                                         recordedText = recordedText + converstionStepsText;
//                                         setTimeout(() => {
//                                             checkingReplyofUser();
//                                         }, 100);
//                                     }


//                                     console.log(converstionStepsText);
//                                     console.log(userSpeechMainData)
//                                     // resetTranscript();
//                                     setSpeakingState('Waiting for examiners speech...');



//                                     if (wordCount > 40) {

//                                         ieltswordscore = (ieltswordscore + 8) / 2;
//                                     }
//                                     else if (wordCount > 30) {
//                                         ieltswordscore = (ieltswordscore + 7) / 2;
//                                     }

//                                     else if (wordCount > 20) {
//                                         ieltswordscore = (ieltswordscore + 6) / 2;
//                                     }
//                                     else if (wordCount > 10) {
//                                         ieltswordscore = (ieltswordscore + 5) / 2;
//                                     }
//                                     else {
//                                         ieltswordscore = (ieltswordscore + 4) / 2;
//                                     }



//                                 }




//                                 // if (useReactMediaRecorder.state === "recording") useReactMediaRecorder.stop();


//                             }, 3000);
//                             console.log("Not Speaking second time");
//                             if (useReactMediaRecorder.state === "recording")
//                                 // useReactMediaRecorder.stop();
//                                 console.log(recordControlFlag);
//                             console.log(doubleNotSpeaking);
//                         }
//                         if (recordControlFlag && useReactMediaRecorder.state != "recording") {
//                             useReactMediaRecorder.start();
//                         }
//                         doubleNotSpeaking = true;
//                         //   if(converstionStepsText === ""){
//                         //     setTimeout(() => {

//                         //     }, 20000);
//                         //   }

//                     });
//                     useReactMediaRecorder.ondataavailable = (e) => {
//                         console.log(e.data + "Audio data----")
//                         sendRecording(e.data);

//                     };
//                     await checkingReplyofUser();

//                 } else {
//                     console.log("recording not supported");
//                 }
//             } catch (error) {
//                 console.log(error + "something went wrong...");
//                 setShowPerPopUp(true);
//             }
//         }


//         else {
//             window.location.reload();
//         }
//         firstplay = false;

//     };

//     const stopRecording = async () => {
//         // clean up
//         setSpeakingState('Play to start..');
//         window.playerG.pause();
//         setIsIconClicked(!isIconClicked);
//     };


//     function examinerSpeakProcessStart() {
//         globalSpeakingState = 'ExaminerSpeechProcessing'
//         timeoutHandle = setTimeout(function () {
//             // console.log("Timer alert...");
//             setCheckNetworkStatus(true)

//         }, 3000);
//         console.log(timeoutHandle)
//         console.log("Examiner-Saying.......")

//         if (mediaRecorderRef.current != null && isMobile) {
//             stopRecordingForOpenAIMethod();
//             console.log("stopped------speech recognation---------")
//         };
//         checkStatusForSpeechMethod = false

//         //this localstore for off the tntroduction about writing when user 
//         // come again into this page....
//     }

//     // Examiner audio start
//     window.onAudionStartGlobal = function () {
//         console.log(mediaRecorderRef.current)
//         console.log(mediaRecorderRef)
//         //if user in mobile devices openAi transcription will be empty ---by the condition below
//         if (isMobile && transcriptTextbyOpenAi != "") { settranscriptTextbyOpenAi("") };

//         globalSpeakingState = 'ExaminerAudioStart';
//         console.log("Examiner-Middle-Saying.....")
//         console.log(timeoutHandle)
//         if (timeoutHandle) {
//             console.log("Timer is out..")
//             setCheckNetworkStatus(false)
//             clearTimeout(timeoutHandle);
//             timeoutHandle = null;
//         }


//     };

//     //funtion for when waiting for user speech----------------
//     window.onAudionEndGlobal = function () {
//         console.log(mediaRecorderRef.current)
//         console.log(mediaRecorderRef)
//         //start OpenAi / Goolge Cloud speech recognation by function below depend on media recorder--
//         if (isMobile) {
//             startRecording();
//         }
//         checkStatusForSpeechMethod = true

//         globalSpeakingState = 'ExaminerAudioEnd'
//         setShowWave(true);
//         setPlayAudio(true);
//         console.log("Examiner-End-Saying.......");
//         if (StopPlay == null) {
//             let speakMainTimer = 0;
//             StopPlay = setInterval(function () {
//                 speakMainTimer++;
//                 console.log('speakMainTimer')
//                 console.log(speakMainTimer)
//                 if (speakMainTimer == 15) {
//                     console.log("Warningn message...")
//                     playScript("You are not responding we are going to finished the test...")
//                 }
//                 if (speakMainTimer === 25) {
//                     console.log("Leaving messages...");
//                     stopRecording();
//                     history.push("/SpeakingPage");

//                 }
//             }, 1000);
//         }

//         collectUserTime = setInterval(function () {
//             collectUserSpeechTime = collectUserSpeechTime + 1
//             // console.log("user Speech Time-----------------------", collectUserSpeechTime)
//         }, 1000);

//     };






//     // function for add userAudio data to the localIndexedDB----------
//     // and send all data to the dashboard========
//     function addUserAudiodataToIndexedDb(xUserAudioData) {
//         let dbPromise = windowIndexedDB.open("newDatabase", 2);
//         dbPromise.onsuccess = (event) => {
//             const db = dbPromise.result;
//             const tx = db.transaction("userData", "readwrite");
//             const userData = tx.objectStore("userData");

//             const users = userData.put({
//                 ID: userEmail + testNo,
//                 testSections: testNo,
//                 userEmail: userEmail,
//                 userSpeech: xUserAudioData,
//             })
//             users.onsuccess = () => {
//                 tx.oncomplete = () => {
//                     db.close();
//                 }
//                 console.log("User-Added");
//             }

//         };

//         dbPromise.onerror = (event) => {
//             console.log(event)
//             console.log("error-has been found to load data in IndexedDb");
//         }

//     };


//     // user speach data save into the IndexedDB for showinng to the user
//     function addUserAudiodataSTRToIndexedDb(speechData) {
//         console.log("SpeechRecording data------------------------------------------")
//         let dbPromise = windowIndexedDB.open("newDatabase", 2);
//         dbPromise.onsuccess = (event) => {
//             const db = dbPromise.result;
//             const tx = db.transaction("userSpeech", "readwrite");
//             const userData = tx.objectStore("userSpeech");
//             console.log(speechData)
//             const users = userData.put({
//                 ID: userEmail + testNo,
//                 testSections: testNo,
//                 userEmail: userEmail,
//                 data: speechData,
//             })
//             users.onsuccess = () => {
//                 tx.oncomplete = () => {
//                     db.close();
//                 }

//             }

//         };

//         dbPromise.onerror = (event) => {
//             console.log(event)
//             // console.log("error-has been found to load data in IndexedDb");
//         }

//     }


//     //save user all Audio data && Speech data to the indexedDb fo showing into the result page---
//     function SaveUserIndexedDBAudioDataAllForResult(UserAudioData, userSpeechData) {
//         let dbPromise = windowIndexedDB.open("newDatabase", 2);
//         dbPromise.onsuccess = (event) => {
//             const db = dbPromise.result;
//             const tx = db.transaction("showDataInResult", "readwrite");
//             const userData = tx.objectStore("showDataInResult");

//             const users = userData.put({
//                 ID: "data",
//                 section: testNo,
//                 userAudio: UserAudioData,
//                 userSpeech: userSpeechData,
//             })
//             users.onsuccess = () => {
//                 tx.oncomplete = () => {
//                     db.close();
//                 }
//                 // console.log("User-Added");
//             }

//         };

//         dbPromise.onerror = (event) => {
//             console.log(event)
//             // console.log("error-has been found to load data in IndexedDb");
//         }

//     };


//     return (

//         <section className="appie-hero-area click-Speaking relative">

//             {/* Show to the user that Which test & Section Number they are giving-- */}
//             <ShowTestName
//                 testNo={testNo}
//             />

//             {/* //need to know before start the test sections */}
//             <div className="w-full mt-[-70px] grid  justify-center gap-0 h-auto  box-border mb-3 " >
//                 {NeedTips && (
//                     <div className=" w-[90vw] sm:w-[500px] bg-red-200  rounded-[50px] ">
//                         <div className="w-full flex justify-between align-middle p-1">
//                             <div className="flex">
//                                 <div className="bg-purple-400 w-[25px] h-[25px] rounded-[50%] ml-2 flex justify-center align-middle"><i className="fal fa-check m-auto text-white" /></div>
//                                 <p className="ml-3 pt-[2px]  needEffect" data-text="NEED A SILENT PLACE">"NEED A SILENT PLACE"</p>
//                             </div>
//                             <div className="text-white text-[17px] font-bold mr-3  cursor-pointer"
//                                 onClick={() => { setNeedTips(false) }}
//                             >X</div>
//                         </div>
//                     </div>
//                 )
//                 }
//             </div>
//             {/* Examiner Speech-------- */}
//             <div className="w-full mt-[-10px] grid  justify-center gap-0 h-auto" >
//                 <div className=" w-[90vw] sm:w-[500px]  min-h-[100px] max-h-auto rounded box-border">
//                     <div className={`${showWave ? "removeBorder" : "bubble"}`}>
//                         <div className={`${showWave ? "removeChildBorder" : "bubble-bottom-left"}`}></div>
//                         {/* contentEditable */}
//                         {isIconClicked ? (
//                             <div className="grid grid-cols-1 gap-[7px]">
//                                 <div className={`flex ${forQuestionHide ? "justify-between" : "justify-end"}  align-bottom w-full`}>
//                                     {
//                                         forQuestionHide && <p className=" text-[13px] sm:text-[15px] text-black" id="getQuestionData">{SQuestion} </p>
//                                     }
//                                     <button className="p-2 text-center border-1 border-gray-400 rounded-[20px] bg-blue-500 text-white w-auto h-[30px] text-[8px] translate-y-[-4px]"
//                                         onClick={() => { setForQuestionHide(!forQuestionHide) }}
//                                     >
//                                         {
//                                             forQuestionHide ? " Hide" : "Show"
//                                         }

//                                     </button>
//                                 </div>
//                                 {
//                                     showWave && (
//                                         <div className="showAnsStyling">
//                                             <div className="mb-2 mt-[-4px] underline text-blue-500 border-none border-2 border-b-blue-700 mr-2 font-bold">Sample Answer</div>
//                                             <p className="font-bold text-justify">
//                                                 {sampleAns[0]} <br /> <br />
//                                                 {/* {sampleAns[1]}<br /> <br />
//                                                 {sampleAns[2]}<br /> */}
//                                             </p>
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                         ) : (
//                             <p className="Bubble-text text-[13px] sm:text-[15px]
//                             font-bold text-center text-black">
//                                 Please Tap the play button for starting conversation
//                             </p>

//                         )
//                         }
//                         {
//                             isMobile ? "" : (
//                                 <div className="bubble-Image">
//                                     <FcBusinesswoman />
//                                 </div>)
//                         }
//                     </div>
//                 </div>
//             </div>




//             <div className=" w-full flex justify-center mt-[40px] mb-[30px]">
//                 <div className=" w-[90vw] grid justify-center align-middle sm:w-[500px] h-[100px] rounded ">
//                     <div className="grid justify-center w-full gap-2 SpeakingClickPop ">
//                         <div
//                             onClick={isIconClicked ? stopRecording : stsrSpeechRec}
//                             role="button"
//                             className="SpeakingIConsDiv "
//                         >
//                             {isIconClicked ? <i className="fas fa-pause text-blue-500" /> : <i className="fas fa-play text-blue-500" />}
//                         </div>

//                     </div>
//                     <div id={'SpeakingState'} className=" mt-3 text-center
//                      font-bold  w-[200px] p-1 text-[17px] border-1 border-black rounded  text-blue-600">
//                         {SpeakingState}
//                     </div>
//                 </div>

//             </div> <br />


//             {/* User Speech design */}
//             <div className="w-full grid  justify-center gap-0 mt-3  h-auto  box-border " >
//                 <div className=" w-[90vw] sm:w-[500px] bg-white p-2 min-h-[80px] max-h-[350px] overflow-auto box-border rounded-[16px] grid">
//                     <div className="w-full m-auto">
//                         <div className="">

//                             <div className={`w-full flex justify-center align-middle mb-1 ${showWave ? "visible" : "invisible"}`}>
//                                 <i><GiOldMicrophone className="text-[35px]" /></i>
//                                 {
//                                     makeWave ? (
//                                         <div className="center_div ml-0 sm:ml-[-17px]">
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                             <div className="wave"></div>
//                                         </div>
//                                     ) : (
//                                         <div className="center_div ml-0 sm:ml-[-19px]">
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                             <div className="wave_next"></div>
//                                         </div>
//                                     )
//                                 }
//                             </div>

//                             <div className={`w-full pl-3 pr-3 flex ${showWave ? "mb-1" : "translate-y-[-7px]"}`}>
//                                 <div className={`w-[21px] h-[21px] rounded-[50%] ${showWave ? "bg-red-500" : "bg-gray-400"} mr-[13px] mt-[-10px]`}></div>
//                                 <div className="w-full h-[2px] bg-gray-500"></div>
//                             </div>
//                             <div id={'transcriptText'} className="p-1 mt-1 w-full text-justify">
//                                 {isMobile && (transcriptTextbyOpenAi && transcriptTextbyOpenAi)}
//                                 {!isMobile && (transcript && transcript)}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Show Answers Steps components that user user pass the Questions */}
//             <AnswerSelectCom
//                 StepNumbers={StepNumbers}
//                 showStepOk={showStepOk}
//             />


//             {/* Play audio by the help of state change when examiner end his speech */}
//             {
//                 playAudio && (
//                     <div className="w-full flex justify-center invisible">
//                         <audio src={audioPlaySound} controls autoPlay></audio>
//                     </div>
//                 )
//             }

//             {/* checkByBrowser if user denied the recorder */}
//             <PermissionDenieP showPerPopUp={showPerPopUp} setShowPerPopUp={setShowPerPopUp} />


//         </section>

//     );
// }

// export default ClickSpeaking;